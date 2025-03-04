"use client";

import { close, logo1, menu } from "@/public/assets";
import { useEffect, useState } from "react";
import Image from "@node_modules/next/image";

export default function Confirmation() {
  const [mail, setMail] = useState<any>("");
  const token = localStorage.getItem("token");

  const handleGet = async () => {
    const auth = "SB-Mid-server-dOVRGe6R75qVV-s8ogKdZrt-" + ":";
    const base64EncodedAuth = btoa(auth);
    try {
      const response = await fetch(
        `https://api.sandbox.midtrans.com/v2/${token}/status`,
        {
          method: "GET", // or 'POST' depending on your use case
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Basic ${base64EncodedAuth}`, // Replace with your actual AUTH_STRING
          },
          mode: "no-cors",
        }
      );

      const data = await response.json();
      console.log(data, "data");

      if (data) {
        localStorage.setItem("obj", JSON.stringify(data));
      }
    } catch (error) {
      console.error("Pembayaran gagal:", error);
    }
  };

  useEffect(() => {
    setMail(localStorage.getItem("emai"));
    handleGet();
  }, [token]);

  console.log(mail, "mail");
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden max-w-md w-full">
        {/* Header Full-Width */}
        <div
          className="w-full flex justify-center p-4"
          style={{ backgroundColor: "black" }}
        >
          <Image src={logo1} alt="Company Logo" className="h-12 w-auto" />
        </div>

        {/* Konten Utama */}
        <div className="p-6 text-center">
          {/* Ikon Sukses */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-green-100 text-green-600 flex items-center justify-center rounded-full">
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
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
          </div>

          {/* Pesan Sukses */}
          <h2 className="text-2xl font-bold text-gray-800">
            Pembayaran Berhasil!
          </h2>
          <p className="text-gray-600 mt-2">
            Terima kasih telah melakukan pembayaran. Detail pembayaran telah
            dikirim ke email Anda.
          </p>

          {/* Detail Pembayaran */}
          <div className="flex justify-center">
            <div className="bg-gray-50 p-4 mt-4 rounded-lg text-left">
              <p className="text-gray-800 font-medium">
                📅 <strong>Tanggal:</strong> 25 Feb 2025
              </p>
              <p className="text-gray-800 font-medium">
                💳 <strong>Metode:</strong> Transfer Bank
              </p>
              <p className="text-gray-800 font-medium">
                💰 <strong>Total:</strong> Rp1.500.000
              </p>
            </div>
          </div>

          {/* Tombol Aksi */}
          <div className="flex gap-4 mt-6">
            <a
              href="/"
              style={{ backgroundColor: "black" }}
              className="w-full hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition shadow-md"
            >
              Kembali ke Home
            </a>
            {mail && (
              <a
                href={`mailto:${mail}`}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg transition shadow-md"
              >
                Cek Email
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
