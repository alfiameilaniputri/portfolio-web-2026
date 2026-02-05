import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const fullText = "Hello, I am Alfia Meilani Putri";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 80); // kecepatan ketik (ms) — kecil = lebih cepat

      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <header className="pt-30 flex flex-col items-center justify-center text-center bg-white">
      <span className="px-4 py-1 mb-8 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 shadow-md">
        DIGITAL & WEB DEVELOPER
      </span>

      <h1 className="text-4xl mb-4 sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 min-h-[4rem]">
        {displayText}
        <span className="animate-pulse">|</span>
      </h1>

      <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-xs sm:max-w-none justify-center px-6">
        <NavLink
          to="/resume"
          className={({ isActive }) =>
            `block text-center px-12 py-4 rounded-xl text-lg font-medium shadow-md transition
            ${
              isActive
                ? "bg-blue-700 text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`
          }
        >
          Resume
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `block text-center px-12 py-4 rounded-xl text-lg font-medium shadow-md transition border
            ${
              isActive
                ? "border-blue-600 bg-gray-100 text-black"
                : "border-gray-500 text-black hover:bg-gray-100"
            }`
          }
        >
          Projects
        </NavLink>
      </div>
    </header>
  );
}
