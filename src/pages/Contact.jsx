import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "6285280214467";
    const textMessage = `Halo, nama saya ${formData.name}.\nEmail saya: ${formData.email}.\nPesan: ${formData.message}`;

    const encodedMessage = encodeURIComponent(textMessage);

    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen mt-12 bg-white px-4 py-12">
        <div className="max-w-xl mx-auto bg-gray-50 p-8 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            Contact Me
          </h1>
          <p className="text-center text-gray-500 mb-8">Let's Work Together</p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative z-0 w-full group">
              <input
                type="text"
                name="name"
                placeholder=" "
                required
                value={formData.name}
                onChange={handleChange}
                className="block px-5 py-2.5 px-0 w-full text-gray-900 bg-white border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-500 peer rounded-md"
              />
              <label
                htmlFor="name"
                className="absolute px-5 text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 left-0 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Your Name
              </label>
            </div>

            <div className="relative z-0 w-full group">
              <input
                type="email"
                name="email"
                placeholder=" "
                required
                value={formData.email}
                onChange={handleChange}
                className="block px-5 py-2.5 px-0 w-full text-gray-900 bg-white border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-500 peer rounded-md"
              />
              <label
                htmlFor="email"
                className="absolute px-5 text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 left-0 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Your Email
              </label>
            </div>

            <div className="relative z-0 w-full group">
              <textarea
                rows="4"
                name="message"
                placeholder=" "
                required
                value={formData.message}
                onChange={handleChange}
                className="block px-5 py-6 px-0 w-full text-gray-900 bg-white border-0 border-b-2 border-gray-300 appearance-none resize-none focus:outline-none focus:ring-0 focus:border-purple-500 peer rounded-md"
              ></textarea>
              <label
                htmlFor="message"
                className="px-5 absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 left-0 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2"
              >
                Your Message
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
