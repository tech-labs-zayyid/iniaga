import { useEffect } from "react";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "info";
  onClose: () => void;
}

const toastColors = {
  success: "bg-green-500",
  error: "bg-red-500",
  info: "bg-blue-500"
};

export default function Toast({ message, type = "info", onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // toast hilang setelah 3 detik

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed top-4 right-4 z-50 px-4 py-2 rounded text-white shadow-lg transition-opacity duration-300 ${toastColors[type]}`}
    >
      {message}
    </div>
  );
}
