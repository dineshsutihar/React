import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { Outlet,Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Layout = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-300"
      }`}
    >
      <header className="bg-gray-800 p-4 shadow-md flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/">Basic React and Firebase App</Link>
        </h1>
        <NavBar />
        <button
          className="bg-gray-700 text-white py-2 px-4 rounded"
          onClick={() => setDarkMode(!darkMode)}
        >
          Toggle Dark Mode
        </button>
      </header>
      <main className="p-4">{<Outlet darkMode={darkMode}/>}</main>

      <footer className="bg-gray-800 p-4 text-center bottom-0 absolute w-[100vw]">
        <p className="text-sm">&copy; 2024; made with ❤️ by Dinesh</p>
      </footer>
    </div>
  );
};

export default Layout;
