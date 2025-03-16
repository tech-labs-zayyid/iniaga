import { ButtonProps } from "@types";

const Button: React.FC<ButtonProps> = ({ styles }) => {
  return (
    <a
      href="https://wa.me/+6281395294204?text=Halo%20saya%20ingin%20mengetahui%20info%20produk%20ini%20lebih%20lanjut%20aplikasinya%0A%0ANama%20%3A%20[Nama%20Anda]%0AAlamat%20%3A%20[Alamat%20Anda]%0ANo%20Telp%20%3A%20[Nomor%20Telepon%20Anda]"
      target="_blank"
    >
      <button
        type="button"
        className={`${styles} py-4 px-6 bg-blue-gradient   font-medium text-[18px] text-primary outline-none rounded-[10px] hover:translate-x-2 transition-all ease-linear cursor-pointer`}
      >
        Get Started
      </button>
    </a>
  );
};

export default Button;
