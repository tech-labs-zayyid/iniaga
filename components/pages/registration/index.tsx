"use client";

import Image from "next/image";
import Link from "next/link";
import { icArrowRight, logoDark } from "@/public/assets";
import { component } from "@/styles/style";
import { formatRupiah } from "@/utils/general"
import Toast from "@/components/global/atoms/Toast";
import { RegisterProvider, useRegisterContext } from "@/context/RegistrationContext";


const FormComponent = () => {
  const {
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
  } = useRegisterContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="flex flex-col items-center min-h-screen pt-[30px]">
      <Link href="/">
        <Image
          src={logoDark}
          priority
          alt="Iniaga" 
          width={184}
          height={90}
        />
      </Link>
      <div className="flex flex-col items-center min-h-screen w-full sm:w-4/5 gap-6 sm:gap-12 pt-[50px] sm:pt-[90px] px-6 sm:px-16 sm:flex-row sm:justify-center sm:items-start">
        <div className="w-full sm:w-7/12 bg-white">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center sm:text-left">
            Create your account
          </h2>
          <small>
            Create your sales account today. Enter your credentials below and
            click <span className="text-[#247bfe]">‘Create Account’</span>
          </small>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4"
          >
            <div className="relative float-label-input">
              <label className="absolute top-3 left-0 text-gray-400 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker">
                Username
              </label>
              <input
                type="text"
                name="username"
                placeholder=" "
                className="block w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-3 appearance-none leading-normal focus:border-blue-400"
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
                className="block w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-3 appearance-none leading-normal focus:border-blue-400"
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
                className="block w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-3 appearance-none leading-normal focus:border-blue-400"
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
                className="block w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-3 appearance-none leading-normal focus:border-blue-400"
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
                className="block w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-3 appearance-none leading-normal focus:border-blue-400"
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
              !formData?.password ||
              isLoading
            }
            onClick={handlePayment}
            className={`px-6 py-3 my-6 !w-full sm:px-8 sm:py-4 ${component.btnPrimary} ${isLoading ? '!bg-[#0056d7]' : ''} flex items-center justify-center gap-2 group`}
          >
            {
              isLoading ? <span className="text-[16px] leading-[32px]">Loading...</span> : (
                <>
                  <span className="text-[16px] leading-[32px]">Create Account</span>
                  <Image
                    src={icArrowRight}
                    alt="arrow"
                    className="w-[20px] h-auto transition-transform duration-500 mb-3 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </>
              )
            }
          </button>
          <small>
            Already have an account?{" "}
            <Link href="#cms" className="text-[#247bfe]">
              Log in
            </Link>
          </small>
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
                className="block w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-3 appearance-none leading-normal focus:border-blue-400"
              />
              {errorMessage && (
                <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
              )}
              <button
                onClick={handleApplyVoucher}
                className={`px-6 py-3 my-6 !w-full sm:px-8 sm:py-4 ${component.btnPrimary} flex items-center justify-center gap-2 group`}
              >
                Add Voucher
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
      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={hideToast} />
      )}
    </div>
  );
};

const FormRegistration = () => {
  return (
    <RegisterProvider>
      <FormComponent />
    </RegisterProvider>
  )
}

export default FormRegistration;
