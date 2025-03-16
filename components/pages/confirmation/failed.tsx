import { close, logo1, menu } from "@/public/assets";
import Image from "@node_modules/next/image";

export default function PaymentFailed() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden max-w-md w-full">
        {/* Header Full-Width dengan Logo */}
        <div className="bg-red-600 w-full h-20 flex items-center justify-center">
          <Image
            src={logo1}
            alt="Company Logo"
            className="h-12 w-auto" // Atur tinggi agar proporsional
          />
        </div>

        {/* Konten Utama */}
        <div className="p-6 text-center">
          {/* Ikon Gagal */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-red-100 text-red-600 flex items-center justify-center rounded-full">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
          </div>

          {/* Pesan Gagal */}
          <h2 className="text-2xl font-bold text-gray-800">
            Pembayaran Gagal!
          </h2>
          <p className="text-gray-600 mt-2">
            Maaf, transaksi pembayaran Anda tidak berhasil. Silakan coba lagi
            atau hubungi layanan pelanggan.
          </p>

          {/* Tombol Aksi */}
          <div className="flex gap-4 mt-6">
            <a
              href="/"
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg transition shadow-md"
            >
              Kembali ke Home
            </a>
            <a
              href="/retry-payment"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition shadow-md"
            >
              Coba Lagi
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
