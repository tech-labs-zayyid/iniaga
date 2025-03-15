"use client"

import { useEffect, useState } from "react";
import Image from 'next/image'
import Link from "next/link";
import { icArrowRight, logoDark } from "@/public/assets";
import { useAppContext } from "@/context/AppContext";
import { pricingPackage } from "@/constants";
import { component } from "@/styles/style";

declare global {
  interface Window {
    snap: any;
  }
}
const FormComponent = () => {
  const { packageId } = useAppContext();

  const [formData, setFormData] = useState({
    username: "",
    fullname: "",
    password: "",
    noWa: "",
    email: "",
    payment: 0
  });
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [isUsernameAvailable, setIsUsernameAvailable] = useState<boolean | null>(null);
  const [isNoWaAvailable, setIsNoWaAvailable] = useState<boolean | null>(null);
  const [isEmailAvailable, setIsEmailAvailable] = useState<boolean | null>(null);

  const [usernameError, setUsernameError] = useState("");
  const [noWaError, setNoWaError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [voucher, setVoucher] = useState("");
  const [discount, setDiscount] = useState(0);
  const [voucherApplied, setVoucherApplied] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [dataPackage, setDataPackage] = useState<null>(null)

  const existingUsernames: any[] = [];
  const existingNoWa: any[] = [];
  const existingEmail: any[] = [];

  const handleApplyVoucher = () => {
    if (voucher === "DISKON50") {
      setDiscount(50000);
      setVoucherApplied(true);
    } else {
      setDiscount(0);
      setErrorMessage("Kode voucher tidak valid!");
    }
  };

  const handleRemoveVoucher = () => {
    setDiscount(0);
    setVoucher("");
    setVoucherApplied(false); // Tampilkan kembali input voucher
    setErrorMessage("");
  };

  useEffect(() => {
    if (!formData.username || usernameError) {
      setIsAvailable(null);
      setIsUsernameAvailable(null);
      return;
    }

    // Simulasi pengecekan ketersediaan domain (gantilah dengan API fetch jika perlu)
    const checkAvailability = !existingUsernames.includes(formData.username.toLowerCase());
    setIsAvailable(checkAvailability);
    setIsUsernameAvailable(checkAvailability);
  }, [formData.username]);

  useEffect(() => {
    if (!formData.noWa || noWaError) {
      setIsNoWaAvailable(null);
      return;
    }
    const checkAvailability = !existingNoWa.includes(formData.noWa.toLowerCase());
    setNoWaError(checkAvailability ? "" : "No telephone yang anda masukan sudah terdaftar");
  }, [formData.noWa]);

  useEffect(() => {
    if (!formData.email || emailError) {
      setIsNoWaAvailable(null);
      return;
    }
    const checkAvailability = !existingEmail.includes(formData.email.toLowerCase());
    setEmailError(checkAvailability ? "" : "Email yang anda masukan sudah terdaftar");
  }, [formData.email]);

  useEffect(() => {
    if (packageId) {
      const selectedPackage = pricingPackage.find((item) => item.id === packageId);

      if (selectedPackage) {
        setDataPackage(selectedPackage as any)
        setFormData((prevData) => ({
          ...prevData,
          payment: selectedPackage.package_price_discount ?? 0,
        }));
      }
    }
  }, [packageId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "noWa") {
      const regex = /^08\d{8,11}$/;
      if (!regex.test(value) && value !== "") {
        setNoWaError("Masukkan nomor yang valid (08xxxxxxxxxx)");
      } else {
        setNoWaError("");
      }
    }
    if (name === "username") {
      const usernameRegex = /^[a-zA-Z0-9]{1,25}$/;

      if (value.length > 20) {
        setUsernameError("Username maksimal 20 karakter");
      } else if (!usernameRegex.test(value)) {
        setUsernameError(
          "Username hanya boleh huruf dan angka (tanpa spasi atau simbol)"
        );
      } else {
        setUsernameError(""); // Reset error jika valid
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    // Tambahkan Midtrans Snap Script
    const script = document.createElement("script");
    script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
    script.setAttribute("data-client-key", "SB-Mid-client-3B3nT-4COo92eu5T");
    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    if (
      !formData?.email ||
      !formData?.fullname ||
      !formData?.username ||
      !formData?.noWa ||
      !formData?.payment ||
      !formData?.password
    ) {
      console.error("Data pembayaran tidak lengkap!");
      return;
    }
  
    const orderId = `ORDER-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`;
  
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          name: formData.fullname,
          password: formData.password,
          role: "sales",
          username: formData.username,
          whatsapp_number: formData.noWa,
          order_id: orderId,
          gross_amount: formData.payment,
          product_id: dataPackage?.id as any,
        }),
      });
  
      if (!response.ok) {
        const result = await response.json()
        throw new Error(result?.message || "Gagal melakukan registrasi pengguna");
      }
  
      const responseData = await response.json();
      console.log("Registrasi berhasil:", responseData);
  
      // Try kedua: Mendapatkan token pembayaran
      try {
        const response2 = await fetch("/api/midtrans", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            order_id: orderId,
            gross_amount: formData.payment,
            customer_name: formData.fullname,
            email: formData.email,
            phone: formData.noWa,
          }),
        });
  
        if (!response2.ok) {
          throw new Error("Gagal mendapatkan token pembayaran");
        }
  
        const paymentData = await response2.json();
  
        if (paymentData.token) {
          localStorage.setItem("token", paymentData.token);
          localStorage.setItem("email", formData.email);
          console.log("Token pembayaran berhasil diterima:", paymentData.token);
          window.snap.pay(paymentData.token);
        } else {
          throw new Error("Token pembayaran tidak ditemukan");
        }
      } catch (error) {
        console.error("Error saat mendapatkan token pembayaran:", error);
      }
    } catch (error) {
      console.log('error catch: ', error)
      console.error("Error catch saat registrasi pengguna:", error);
    }
  };  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      minimumFractionDigits: 0,
    })
      .format(amount)
      .replace(/\./g, ","); // Ubah titik ke koma (opsional, sesuai format lokal)
  };
  console.log(dataPackage)
  return (
    <div className="flex flex-col items-center min-h-screen pt-[30px]">
      <Link href="/">
        <Image src={logoDark} priority alt="Iniaga" width={184} height={90} />
      </Link>
      <div className="flex flex-col items-center min-h-screen w-full sm:w-4/5 gap-6 sm:gap-12 pt-[50px] sm:pt-[90px] px-6 sm:px-16 sm:flex-row sm:justify-center sm:items-start">
        <div className="w-full sm:w-7/12 bg-white">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center sm:text-left">
            Create your account
          </h2>
          <small>
            Create your sales account today. Enter your credentials below and click <span className="text-[#247bfe]">‘Create Account’</span>
          </small>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            <div className="relative float-label-input">
              <label className="absolute top-3 left-0 text-gray-400 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker">
                Username
              </label>
              <input
                type="text"
                name="username"
                placeholder=" "
                className="block w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-3 block appearance-none leading-normal focus:border-blue-400"
                value={formData.username}
                onChange={handleChange}
                maxLength={25}
                required
              />
              {formData.username && (
                <div className="mt-2 flex items-center space-x-2 text-gray-600">
                  {usernameError ? (
                    <p className="text-blue-600 font-semibold">
                      {formData.username}.iniaga.com
                    </p>
                  ) : (
                    <>
                      <p>Domain:</p>
                      <p className="text-blue-600 font-semibold">
                        {formData.username}.iniaga.com
                      </p>
                    </>
                  )}
                </div>
              )}
            </div>

            <div className="relative float-label-input">
              <label className="absolute top-3 left-0 text-gray-400 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker">
                Fullname
              </label>
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                className="block w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-3 block appearance-none leading-normal focus:border-blue-400"
                placeholder=""
                required
              />
            </div>

            <div className="relative float-label-input">
              <label className="absolute top-3 left-0 text-gray-400 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="block w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-3 block appearance-none leading-normal focus:border-blue-400"
                placeholder=""
                required
              />
            </div>

            <div className="relative float-label-input">
              <label className="absolute top-3 left-0 text-gray-400 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker">
                No WhatsApp
              </label>
              <input
                type="text"
                name="noWa"
                value={formData.noWa}
                onChange={handleChange}
                className="block w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-3 block appearance-none leading-normal focus:border-blue-400"
                placeholder=""
                required
              />
            </div>

            {/** Email */}
            <div className="relative float-label-input">
              <label className="absolute top-3 left-0 text-gray-400 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-3 block appearance-none leading-normal focus:border-blue-400"
                placeholder=""
                required
              />
            </div>
          </form>

          <button
            type="submit"
            disabled={
              !formData?.email ||
              !formData?.fullname ||
              !formData?.username ||
              !formData?.noWa ||
              !formData?.payment ||
              !formData?.password
            }
            onClick={handlePayment}
            className={`px-6 py-3 my-6 !w-full sm:px-8 sm:py-4 ${component.btnPrimary} flex items-center justify-center gap-2 group`}
          >
            <span className="text-[16px] leading-[32px]">Create Account</span>
            <Image
              src={icArrowRight}
              alt="arrow"
              className="w-[20px] h-auto transition-transform duration-500 mb-3 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </button>
          <small>Already have an account? <Link href="#cms" className="text-[#247bfe]">Log in</Link></small>
        </div>

        <div className="w-full sm:w-2/6 mb-6 bg-white p-6 rounded-lg shadow-lg border sm:mt-0">
          <h2 className="text-lg   font-semibold text-gray-800 mb-4">
            Order Summary
          </h2>

          {!voucherApplied ? (
            <div className="relative float-label-input mb-4">
              <label className="absolute top-3 left-0 text-gray-400 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker">
                Voucher
              </label>
              <input
                type="text"
                value={voucher}
                onChange={(e) => setVoucher(e.target.value)}
                placeholder=""
                className="block w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-3 block appearance-none leading-normal focus:border-blue-400"
              />
              {errorMessage && (
                <p className="text-red-500   text-sm mt-2">{errorMessage}</p> // Alert error muncul di bawah input
              )}
              <button
                onClick={handleApplyVoucher}
                className={`px-6 py-3 my-6 !w-full sm:px-8 sm:py-4 ${component.btnPrimary} flex items-center justify-center gap-2 group`}
              >
                Gunakan
              </button>
            </div>
          ) : (
            <button
              onClick={handleRemoveVoucher}
              className="w-full bg-red-500   text-white p-2 rounded-lg hover:bg-red-600 mb-4"
            >
              Cancel Voucher
            </button>
          )}

          <div className="flex   justify-between items-center mb-2">
            <span>Package Name</span>
            <strong>{dataPackage?.package_name}</strong>
          </div>
          <div className="flex   justify-between items-center mb-2">
            <span>Subtotal</span>
            <span>Rp {formatRupiah(formData.payment)}</span>
          </div>
          <div className="flex   justify-between items-center mb-2">
            <span>Delivery</span>
            <span>Rp 0</span>
          </div>

          {discount > 0 && (
            <div className="flex   justify-between items-center mb-2 text-red-500">
              <span>Diskon</span>
              <span>- Rp {formatRupiah(discount)}</span>
            </div>
          )}

          <div className="flex   justify-between items-center font-bold text-lg mt-4 border-t pt-4">
            <span>Total</span>
            <span className="text-green-600">
              Rp {formatRupiah(formData.payment - discount)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
