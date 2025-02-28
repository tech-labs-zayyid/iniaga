import { useState } from "react";
import styles from "@/styles/style";

const CTA: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    console.log("Subscribed with email:", email);
    alert("Thank you for subscribing!");

    setEmail("");
  };

  return (
    <section className="bg-black-gradient-2 box-shadow rounded-2xl py-12 px-6 mt-14">
      <div className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} flex-col`}>
        <div className="text-center">
          <h2 className={`${styles.heading2} text-white`}>
            Subscribe to Yout Newsletter
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-3 text-white mx-auto`}>
            Subscribe to receive updates on promotions, news, and special offers.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
          >
            Subscribe Now
          </button>
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </section>
  );
};

export default CTA;
