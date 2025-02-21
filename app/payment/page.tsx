"use client";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const banks = [
  {
    id: 1,
    name: "BCA",
    logo: "https://i.pinimg.com/564x/00/cb/4f/00cb4f7ad2d81f39afffe610fc1d07fd.jpg",
  },
  {
    id: 2,
    name: "Mandiri",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgoYIomA0PPKjsPzcDtfnc3c27KR0TMyeWmQ&s",
  },
  {
    id: 3,
    name: "BNI",
    logo: "https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/2560px-BNI_logo.svg.png",
  },
  {
    id: 4,
    name: "BRI",
    logo: "https://i.pinimg.com/474x/ed/5d/c0/ed5dc0372ad7948f2ba04a88f125cc4e.jpg",
  },
];

const PaymentList: React.FC = () => {
  const [selectedBank, setSelectedBank] = useState<number | null>(null);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [amount, setAmount] = useState<string>("");

  useEffect(() => {
    // Tambahkan Midtrans Snap Script
    const script = document.createElement("script");
    script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
    script.setAttribute("data-client-key", "SB-Mid-client-IsVWseZeqsy32t_D");
    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    // setLoading(true);
    try {
      const response = await fetch("/api/midtrans", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          order_id: `ORDER-${Date.now()}`,
          gross_amount: 50000, // Harga dalam IDR
          customer_name: "Boby Sales Honda",
          email: "boby@example.com",
          phone: "081234567890",
        }),
      });

      const data = await response.json();

      if (data.token) {
        window.snap.pay(data.token);
      }
    } catch (error) {
      console.error("Pembayaran gagal:", error);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg border">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Pilih Metode Pembayaran
        </h2>

        {/* List Bank */}
        <div className="space-y-3 mb-6">
          {banks.map((bank) => (
            <div
              key={bank.id}
              className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-blue-50 transition-all ${
                selectedBank === bank.id ? "border-blue-500" : "border-gray-300"
              }`}
              onClick={() => setSelectedBank(bank.id)}
            >
              <div className="flex items-center gap-3">
                <img
                  src={bank.logo}
                  alt={bank.name}
                  className="w-[50px] h-auto"
                />
                <span className="text-gray-700 font-medium">{bank.name}</span>
              </div>
              {selectedBank === bank.id && (
                <FaCheckCircle className="text-blue-500" />
              )}
            </div>
          ))}
        </div>

        {/* Pilih Nominal */}
        <h3 className="text-lg font-semibold text-gray-700 mb-3">
          Pilih Nominal
        </h3>
        <div className="relative mb-6">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">
            Rp
          </span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full pl-10 pr-4 p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan nominal"
            required
          />
        </div>

        {/* Tombol Konfirmasi */}
        <button
          className="w-full py-3 text-white font-semibold bg-blue-600 rounded-lg hover:bg-blue-700 transition-all disabled:opacity-50"
          disabled={!selectedBank || !amount}
          onClick={handlePayment}
        >
          Konfirmasi Pembayaran
        </button>
      </div>
    </div>
  );
};

export default PaymentList;
