"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  LayoutGrid,
  MessageCircle,
  X,
  Maximize2,
  Minimize2,
  Sparkles,
} from "lucide-react";

const TOTAL_PAGES = 20;
const menuPages = Array.from({ length: TOTAL_PAGES }, (_, i) => ({
  id: i + 1,
  src: `/menu-angsa/${i + 1}.png`,
  title: `Halaman ${i + 1}`,
}));

export default function MenuCateringFullscreenPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipState, setFlipState] = useState<{
    direction: "next" | "prev";
    from: number;
    to: number;
  } | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isGridOpen, setIsGridOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showHint, setShowHint] = useState(true);

  // Touch gesture state
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  // Preload adjacent images
  useEffect(() => {
    const toPreload = [
      currentIndex + 1,
      currentIndex + 2,
      currentIndex - 1,
      currentIndex - 2,
    ].filter((idx) => idx >= 0 && idx < TOTAL_PAGES);

    toPreload.forEach((idx) => {
      const img = new window.Image();
      img.src = menuPages[idx].src;
    });
  }, [currentIndex]);

  // Hide hint after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  const goToNext = useCallback(() => {
    if (isAnimating) return;
    if (currentIndex >= TOTAL_PAGES - 1) return;

    const targetIndex = currentIndex + 1;
    setIsAnimating(true);
    setFlipState({ direction: "next", from: currentIndex, to: targetIndex });

    setTimeout(() => {
      setCurrentIndex(targetIndex);
      setFlipState(null);
      setIsAnimating(false);
    }, 480);
  }, [currentIndex, isAnimating]);

  const goToPrev = useCallback(() => {
    if (isAnimating) return;
    if (currentIndex <= 0) return;

    const targetIndex = currentIndex - 1;
    setIsAnimating(true);
    setFlipState({ direction: "prev", from: currentIndex, to: targetIndex });

    setTimeout(() => {
      setCurrentIndex(targetIndex);
      setFlipState(null);
      setIsAnimating(false);
    }, 480);
  }, [currentIndex, isAnimating]);

  const jumpToPage = (targetIndex: number) => {
    if (isAnimating || targetIndex === currentIndex) {
      setIsGridOpen(false);
      return;
    }
    const dir = targetIndex > currentIndex ? "next" : "prev";
    setIsAnimating(true);
    setFlipState({ direction: dir, from: currentIndex, to: targetIndex });
    setIsGridOpen(false);

    setTimeout(() => {
      setCurrentIndex(targetIndex);
      setFlipState(null);
      setIsAnimating(false);
    }, 480);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isGridOpen) {
        if (e.key === "Escape") setIsGridOpen(false);
        return;
      }
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        goToNext();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        goToPrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev, isGridOpen]);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const diffX = e.changedTouches[0].clientX - touchStartX.current;
    const diffY = e.changedTouches[0].clientY - touchStartY.current;

    // Detect horizontal swipe
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 35) {
      setShowHint(false);
      if (diffX < 0) {
        // Swiped left -> Open next page
        goToNext();
      } else {
        // Swiped right -> Open previous page
        goToPrev();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Toggle Fullscreen API
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  return (
    <div
      className="fixed inset-0 w-screen h-[100dvh] bg-stone-950 text-white select-none overflow-hidden flex flex-col justify-between"
      style={{ fontFamily: "var(--font-poppins, sans-serif)" }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ── Ambient Glow Background ── */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-[140px] opacity-15 bg-gradient-to-br from-amber-500 to-orange-600" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0,transparent_70%)]" />

      {/* ════════════════════════════════════════════
          FLOATING TOP HEADER (Minimalist & Translucent)
      ════════════════════════════════════════════ */}
      <header className="relative z-30 w-full max-w-6xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3.5 flex items-center justify-between gap-2">
        {/* Back Link */}
        <Link
          href="/angkringan-saroengan"
          className="inline-flex items-center gap-2 bg-stone-900/80 hover:bg-stone-800 text-stone-200 hover:text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 backdrop-blur-md text-xs sm:text-sm font-medium transition-all active:scale-95 shadow-lg group"
        >
          <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span className="hidden xs:inline sm:inline">Angkringan Saroengan</span>
          <span className="xs:hidden sm:hidden">Menu</span>
        </Link>

        {/* Center Page Badge Indicator */}
        <div className="flex items-center gap-1.5 bg-stone-900/90 border border-amber-500/30 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-lg shadow-black/40">
          <span className="text-[11px] sm:text-xs font-semibold text-stone-300">
            Halaman
          </span>
          <span className="text-xs sm:text-sm font-bold text-amber-400">
            {currentIndex + 1}
          </span>
          <span className="text-stone-500 text-xs">/</span>
          <span className="text-[11px] sm:text-xs font-semibold text-stone-400">
            {TOTAL_PAGES}
          </span>
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Grid Overview Button */}
          <button
            type="button"
            onClick={() => setIsGridOpen(true)}
            className="flex items-center gap-1.5 bg-stone-900/80 hover:bg-stone-800 text-stone-200 hover:text-white px-3 py-1.5 sm:py-2 rounded-full border border-white/10 backdrop-blur-md text-xs font-medium transition-all active:scale-95 shadow-lg"
            title="Lihat Semua Halaman"
          >
            <LayoutGrid className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden md:inline">Semua Halaman</span>
          </button>

          {/* Fullscreen Button */}
          <button
            type="button"
            onClick={toggleFullscreen}
            className="hidden sm:flex w-8 h-8 sm:w-9 sm:h-9 items-center justify-center rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-300 hover:text-white border border-white/10 backdrop-blur-md transition-all active:scale-95"
            title={isFullscreen ? "Keluar Layar Penuh" : "Layar Penuh"}
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>

          {/* Order WhatsApp Button */}
          <a
            href="https://wa.me/6285117715881?text=Halo%20Angkringan%20Saroengan,%20saya%20ingin%20pesan%20menu%20/%20catering"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold text-xs sm:text-sm px-3.5 py-1.5 sm:py-2 rounded-full shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Pesan WA</span>
          </a>
        </div>
      </header>

      {/* ════════════════════════════════════════════
          FULLSCREEN BOOK STAGE (3D PAGE FLIP)
      ════════════════════════════════════════════ */}
      <main className="relative flex-1 w-full flex items-center justify-center px-2 sm:px-6 py-1 perspective-book">
        {/* Main Book Leaf Viewport: Scaled to fit screen height responsively */}
        <div
          className="relative h-[82dvh] sm:h-[84dvh] max-h-[920px] aspect-[595/842] max-w-[96vw] rounded-xl sm:rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] bg-stone-900 border border-white/15 overflow-hidden group cursor-pointer"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            // Tap right half -> Next, tap left half -> Prev
            if (clickX > rect.width * 0.5) {
              goToNext();
            } else {
              goToPrev();
            }
          }}
        >
          {/* Subtle Book Spine Shadow Overlay (Left margin) */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 sm:w-10 bg-gradient-to-r from-black/50 via-black/15 to-transparent z-20" />

          {/* Subtle Book Edge Shadow Overlay (Right margin) */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-3 bg-gradient-to-l from-black/30 to-transparent z-20" />

          {/* ── BASE (UNDERNEATH) PAGE LAYER ── */}
          <div className="absolute inset-0 w-full h-full bg-stone-900">
            <Image
              src={
                flipState
                  ? menuPages[flipState.direction === "next" ? flipState.to : flipState.from].src
                  : menuPages[currentIndex].src
              }
              alt={menuPages[currentIndex].title}
              fill
              priority
              className="object-contain"
              sizes="(max-height: 920px) 650px, 100vw"
            />
          </div>

          {/* ── 3D FLIPPING SHEET LAYER (ONLY ACTIVE DURING FLIP ANIMATION) ── */}
          {flipState && (
            <div
              className={`absolute inset-0 w-full h-full preserve-3d z-30 ${
                flipState.direction === "next" ? "animate-flip-next" : "animate-flip-prev"
              }`}
            >
              {/* Front of the flipping sheet */}
              <div className="absolute inset-0 w-full h-full backface-hidden bg-stone-900">
                <Image
                  src={
                    flipState.direction === "next"
                      ? menuPages[flipState.from].src
                      : menuPages[flipState.to].src
                  }
                  alt="Flipping Front"
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-height: 920px) 650px, 100vw"
                />
                {/* Dynamic paper lighting & curvature shadow */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/40 via-black/15 to-transparent animate-curl-shadow" />
              </div>

              {/* Back of the flipping sheet (Visible past 90deg turn) */}
              <div
                className="absolute inset-0 w-full h-full backface-hidden bg-stone-900"
                style={{ transform: "rotateY(180deg)" }}
              >
                <Image
                  src={
                    flipState.direction === "next"
                      ? menuPages[flipState.to].src
                      : menuPages[flipState.from].src
                  }
                  alt="Flipping Back"
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-height: 920px) 650px, 100vw"
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-l from-black/40 via-black/15 to-transparent animate-curl-shadow" />
              </div>
            </div>
          )}

          {/* Left Click Area Hover Cue */}
          {currentIndex > 0 && (
            <div className="absolute left-0 inset-y-0 w-1/4 z-10 flex items-center justify-start pl-2 sm:pl-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl">
                <ChevronLeft className="w-6 h-6" />
              </div>
            </div>
          )}

          {/* Right Click Area Hover Cue */}
          {currentIndex < TOTAL_PAGES - 1 && (
            <div className="absolute right-0 inset-y-0 w-1/4 z-10 flex items-center justify-end pr-2 sm:pr-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl">
                <ChevronRight className="w-6 h-6" />
              </div>
            </div>
          )}
        </div>

        {/* ── Floating Side Navigation Buttons (Desktop & Tablet) ── */}
        <button
          type="button"
          onClick={goToPrev}
          disabled={currentIndex === 0 || isAnimating}
          className={`hidden sm:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 lg:w-13 lg:h-13 rounded-full bg-stone-900/80 hover:bg-amber-500 text-stone-200 hover:text-stone-950 border border-white/15 backdrop-blur-md items-center justify-center shadow-2xl transition-all duration-200 active:scale-90 ${
            currentIndex === 0 ? "opacity-30 cursor-not-allowed hover:bg-stone-900/80 hover:text-stone-200" : "hover:scale-110"
          }`}
          aria-label="Halaman Sebelumnya"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          type="button"
          onClick={goToNext}
          disabled={currentIndex === TOTAL_PAGES - 1 || isAnimating}
          className={`hidden sm:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 lg:w-13 lg:h-13 rounded-full bg-stone-900/80 hover:bg-amber-500 text-stone-200 hover:text-stone-950 border border-white/15 backdrop-blur-md items-center justify-center shadow-2xl transition-all duration-200 active:scale-90 ${
            currentIndex === TOTAL_PAGES - 1 ? "opacity-30 cursor-not-allowed hover:bg-stone-900/80 hover:text-stone-200" : "hover:scale-110"
          }`}
          aria-label="Halaman Berikutnya"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* ── Floating First-Time Gesture Hint ── */}
        {showHint && (
          <div className="pointer-events-none absolute bottom-4 z-30 bg-stone-900/90 border border-amber-500/40 text-stone-200 px-4 py-2 rounded-full text-xs flex items-center gap-2 backdrop-blur-md shadow-2xl animate-bounce">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
            <span>Geser kanan/kiri atau ketuk sisi halaman untuk membuka halaman</span>
          </div>
        )}
      </main>

      {/* ════════════════════════════════════════════
          FLOATING BOTTOM CONTROLLER (Progress & Thumbnails)
      ════════════════════════════════════════════ */}
      <footer className="relative z-30 w-full max-w-2xl mx-auto px-4 py-2 sm:py-3 flex flex-col items-center gap-2">
        {/* Scrubber Progress Dots / Slider */}
        <div className="w-full flex items-center justify-between gap-3 bg-stone-900/80 border border-white/10 rounded-full px-4 py-2 backdrop-blur-md shadow-lg">
          <button
            type="button"
            onClick={goToPrev}
            disabled={currentIndex === 0 || isAnimating}
            className={`p-1 rounded-full text-stone-300 hover:text-white transition-colors ${
              currentIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-white/10"
            }`}
            aria-label="Sebelumnya"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Quick Page Slider */}
          <div className="flex-1 flex items-center gap-1.5 sm:gap-2">
            <input
              type="range"
              min={0}
              max={TOTAL_PAGES - 1}
              value={currentIndex}
              onChange={(e) => jumpToPage(Number(e.target.value))}
              className="w-full h-1.5 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
          </div>

          <button
            type="button"
            onClick={goToNext}
            disabled={currentIndex === TOTAL_PAGES - 1 || isAnimating}
            className={`p-1 rounded-full text-stone-300 hover:text-white transition-colors ${
              currentIndex === TOTAL_PAGES - 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-white/10"
            }`}
            aria-label="Selanjutnya"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </footer>

      {/* ════════════════════════════════════════════
          OVERVIEW THUMBNAILS DRAWER / MODAL
      ════════════════════════════════════════════ */}
      {isGridOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex flex-col justify-end sm:justify-center p-3 sm:p-6"
          onClick={() => setIsGridOpen(false)}
        >
          <div
            className="w-full max-w-4xl mx-auto bg-stone-900 border border-white/15 rounded-3xl p-4 sm:p-6 shadow-2xl flex flex-col max-h-[85vh] animate-in fade-in-50 slide-in-from-bottom-6 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <h3 className="font-bold text-white text-base sm:text-lg">
                  Pilih Halaman Buku Menu
                </h3>
                <p className="text-xs text-stone-400">
                  Total {TOTAL_PAGES} Halaman Menu Angkringan Saroengan
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsGridOpen(false)}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-stone-300 hover:text-white transition-colors"
                aria-label="Tutup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 pt-4 overflow-y-auto custom-scrollbar flex-1 pr-1">
              {menuPages.map((page, idx) => (
                <button
                  key={page.id}
                  onClick={() => jumpToPage(idx)}
                  className={`group relative aspect-[595/842] rounded-xl overflow-hidden border-2 transition-all ${
                    idx === currentIndex
                      ? "border-amber-400 scale-[1.02] shadow-lg shadow-amber-500/25 ring-2 ring-amber-400/50"
                      : "border-white/10 hover:border-amber-500/50 hover:scale-[1.01]"
                  }`}
                >
                  <Image
                    src={page.src}
                    alt={page.title}
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                  <span className="absolute bottom-1 right-1.5 bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-bold text-white">
                    Hal {page.id}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
