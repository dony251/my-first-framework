import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    username: "",
    age: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const renderInput = (type, name, label) => (
    <div className="relative">
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className="peer w-full border-b-2 border-gray-400 
                   bg-gradient-to-b from-gray-100/20 to-transparent 
                   p-2 outline-none focus:border-green-600"
        placeholder=" " // مهم عشان floating label يشتغل
      />
      <label
        className={`absolute left-2 transition-all 
          ${formData[name] 
            ? "-top-4 text-sm text-green-600" 
            : "top-2 text-base text-gray-400"}
          peer-focus:-top-4 peer-focus:text-sm peer-focus:text-green-600`}
      >
        {label}
      </label>
    </div>
  );

  return (
    <div className="p-10 pt-[80px] text-center">
      <h1 className="text-4xl font-bold mb-2 uppercase">Contact</h1>

      {/* الخطين والنجمة */}
      <div className="flex items-center justify-center mb-8">
        <div className="h-1 w-16 bg-gray-800"></div>
        <span className="mx-3 text-2xl text-gray-800">★</span>
        <div className="h-1 w-16 bg-gray-800"></div>
      </div>

      <form className="max-w-md mx-auto space-y-8 text-left">
        {renderInput("text", "username", "Username")}
        {renderInput("number", "age", "Age")}
        {renderInput("email", "email", "Email")}
        {renderInput("password", "password", "Password")}

        {/* Send Button */}
        <button
          type="submit"
          className="mt-6 w-50 rounded bg-green-600 py-2 text-white font-semibold 
                     hover:bg-green-700 transition-all text-sm"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
