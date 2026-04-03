import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <Link
      href="https://wa.me/628174714181"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi via WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-[#25D366] text-white p-4 shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:bg-[#20bd5a] hover:scale-105 hover:shadow-[#25D366]/50"
    >
      {/* Efek Gelombang (Ping) di belakang tombol */}
      <span className="absolute -inset-1 rounded-full bg-[#25D366] animate-ping opacity-30 group-hover:hidden" />

      {/* Konten Icon & Teks */}
      <div className="relative flex items-center justify-center">
        <MessageCircle className="w-6 h-6 flex-shrink-0" />
        
        {/* Teks muncul saat hover dengan transisi opacity dan width */}
        <div className="grid grid-rows-[1fr] transition-all duration-300 text-sm font-medium w-0 overflow-hidden group-hover:w-[76px] group-hover:ml-2">
          <span className="opacity-0 transition-opacity duration-300 delay-100 group-hover:opacity-100 whitespace-nowrap">
            WhatsApp
          </span>
        </div>
      </div>
    </Link>
  );
}