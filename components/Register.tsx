import React, { useState } from "react";
import styles, { layout } from "@/styles/style";

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    fullname: "",
    noWa: "",
    email: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-lg mx-auto p-12">
      <h2 className="text-3xl font-semibold text-white text-center mb-8">
        Create an Account
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="username"
            className="block text-lg font-medium text-white"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-4 text-white bg-gray-800 border border-gray-700 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username"
            required
          />
        </div>

        <div>
          <label
            htmlFor="fullname"
            className="block text-lg font-medium text-white"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className="w-full p-4 text-white bg-gray-800 border border-gray-700 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div>
          <label
            htmlFor="noWa"
            className="block text-lg font-medium text-white"
          >
            No. WA
          </label>
          <input
            type="text"
            id="noWa"
            name="noWa"
            value={formData.noWa}
            onChange={handleChange}
            className="w-full p-4 text-white bg-gray-800 border border-gray-700 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your WhatsApp number"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-lg font-medium text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 text-white bg-gray-800 border border-gray-700 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
