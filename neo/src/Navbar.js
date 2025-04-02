import { useState, useEffect } from "react";

const Navbar = ({account}) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Apply theme on initial load
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full p-4 backdrop-blur-md bg-white/70 dark:bg-black/50 text-black dark:text-white flex justify-between items-center shadow-md">
      <h1 className="text-lg font-bold ml-4">Neo</h1>
      <span className="text-md font-medium">Hello  {account}</span>

      <div className="flex items-center space-x-6 mr-4">
        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white transition duration-300"
        >
            
          {darkMode ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;