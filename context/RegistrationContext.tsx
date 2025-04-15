// context/RegisterContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { pricingPackage } from "@/constants";
import { API_KEY } from "@config";
import { useToast } from "@/hooks/useToast";
import { useAppContext } from "@/context/AppContext";

interface FormData {
  username: string;
  fullname: string;
  password: string;
  noWa: string;
  email: string;
  payment: number;
}

interface ToastMessage {
  message: string;
  type?: "success" | "error" | "info" | undefined | null;
}

interface RegisterContextType {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  usernameError: string;
  noWaError: string;
  voucher: string;
  discount: number;
  voucherApplied: boolean;
  errorMessage: string;
  dataPackage: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleApplyVoucher: () => void;
  handleRemoveVoucher: () => void;
  handlePayment: () => Promise<void>;
  setVoucher: (val: string) => void;
  hideToast: () => void;
  toast: ToastMessage;
  isLoading: boolean
}

const RegisterContext = createContext<RegisterContextType | undefined>(
  undefined
);

export const RegisterProvider = ({ children }: { children: React.ReactNode }) => {
  const { packageId } = useAppContext();
  const { toast, showToast, hideToast } = useToast();

  const [formData, setFormData] = useState<FormData>({
    username: "",
    fullname: "",
    password: "",
    noWa: "",
    email: "",
    payment: 2000,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const [noWaError, setNoWaError] = useState("");
  const [voucher, setVoucher] = useState("");
  const [discount, setDiscount] = useState(0);
  const [voucherApplied, setVoucherApplied] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [dataPackage, setDataPackage] = useState<any>(null);

  useEffect(() => {
    if (packageId) {
      const selectedPackage = pricingPackage.find((item) => item.id === packageId);
      if (selectedPackage) {
        setDataPackage(selectedPackage);
        setFormData((prev) => ({
          ...prev,
          payment: 2000, // Atau selectedPackage.package_price_discount
        }));
      }
    }
  }, [packageId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "noWa") {
      const regex = /^08\d{8,11}$/;
      setNoWaError(!regex.test(value) && value ? "Masukkan nomor yang valid (08xxxxxxxxxx)" : "");
    }

    if (name === "username") {
      const usernameRegex = /^[a-zA-Z0-9]{1,25}$/;
      if (value.length > 20) {
        setUsernameError("Username maksimal 20 karakter");
      } else if (!usernameRegex.test(value)) {
        setUsernameError("Username hanya boleh huruf dan angka");
      } else {
        setUsernameError("");
      }
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleApplyVoucher = () => {
    if (voucher === "DISKON50") {
      setDiscount(50000);
      setVoucherApplied(true);
      setErrorMessage("");
    } else {
      setDiscount(0);
      setErrorMessage("Kode voucher tidak valid!");
    }
  };

  const handleRemoveVoucher = () => {
    setDiscount(0);
    setVoucher("");
    setVoucherApplied(false);
    setErrorMessage("");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
      script.setAttribute("data-client-key", API_KEY);
      document.body.appendChild(script);
    }
  }, []);
  

  const handlePayment = async () => {
    setIsLoading(true)
    const { email, fullname, username, noWa, payment, password } = formData;

    if (!email || !fullname || !username || !noWa || !payment || !password) {
      console.error("Data pembayaran tidak lengkap!");
      return;
    }

    const orderId = `ORDER-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`;

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name: fullname,
          password,
          role: "sales",
          username,
          whatsapp_number: noWa,
          order_id: orderId,
          gross_amount: payment,
          product_id: dataPackage?.id,
        }),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result?.message);

      const res2 = await fetch("/api/midtrans", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          order_id: orderId,
          gross_amount: payment,
          customer_name: fullname,
          email,
          phone: noWa,
        }),
      });

      const paymentData = await res2.json();
      if (!res2.ok || !paymentData.token) {
        throw new Error("Gagal mendapatkan token pembayaran");
      }

      localStorage.setItem("token", paymentData.token);
      localStorage.setItem("email", email);
      if (typeof window !== "undefined" && window.snap) {
        window.snap.pay(paymentData.token);
      } else {
        showToast("Pembayaran tidak dapat diproses di lingkungan ini.");
      }
      setIsLoading(false)
    } catch (err: any) {
      showToast(err.message || "Terjadi kesalahan. Silakan coba lagi.");
      setIsLoading(false)
    }
  };

  return (
    <RegisterContext.Provider
      value={{
        formData,
        setFormData,
        usernameError,
        noWaError,
        voucher,
        discount,
        voucherApplied,
        errorMessage,
        dataPackage,
        handleChange,
        handleApplyVoucher,
        handleRemoveVoucher,
        handlePayment,
        setVoucher,
        hideToast,
        toast,
        isLoading
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegisterContext = () => {
  const context = useContext(RegisterContext);
  if (!context) throw new Error("useRegisterContext must be used within RegisterProvider");
  return context;
};
