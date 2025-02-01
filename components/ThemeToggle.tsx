// // path : components/ThemeToggle.tsx

// "use client";

// import { useEffect, useState } from "react";

// export default function ThemeToggle() {
//   const [theme, setTheme] = useState<string>("light");

//   useEffect(() => {
//     const storedTheme = localStorage.getItem("theme") || "light";
//     setTheme(storedTheme);
//     document.documentElement.classList.toggle("dark", storedTheme === "dark");
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     localStorage.setItem("theme", newTheme);
//     document.documentElement.classList.toggle("dark", newTheme === "dark");
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className="fixed top-4 right-4 p-2 bg-gray-300 dark:bg-gray-700 rounded-lg text-black dark:text-white"
//     >
//       {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
//     </button>
//   );
// }



//................



"use client";

import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button onClick={toggleTheme} className="text-black dark:text-white">
      {theme === "light" ? <FaMoon className="text-xl" /> : <FaSun className="text-xl" />}
    </button>
  );
}
