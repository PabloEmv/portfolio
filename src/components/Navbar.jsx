import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import lighIcon from "../assets/img/light-mode-icon.svg";
import darkIcon from "../assets/img/dark-mode-icon.svg";

const Navbar = () => {
  const [iconMode, setiIconMode] = useState();

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setiIconMode(lighIcon);
    } else {
      document.documentElement.classList.remove("dark");
      setiIconMode(darkIcon);
    }
  }, []);

  const changeDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.className === "dark") {
      localStorage.theme = "dark";
      setiIconMode(lighIcon);
    } else {
      localStorage.theme = "light";
      setiIconMode(darkIcon);
    }
  };

  return (
    <div className="flex justify-center sticky z-50 top-0">
      <div className="navbar bg-white shadow-xl dark:bg-gray-700 h-20 sm:px-10 mx-1 sm:mx-3 rounded-b-lg">
        <div className="navbar-start">
          <span className="text-2xl border-2 border-gray-600 p-1 rounded-lg font-bold bg-white text-gray-600 shadow-xl">
            PM
          </span>
        </div>

        <div className="navbar-end">
          <img
            src={iconMode}
            alt="icon"
            className="w-12 mr-2 border border-gray-500 bg-gray-400 rounded-lg hover:bg-yellow-200"
            onClick={changeDarkMode}
          />

          <Link
            className="btn text-gray-200"
            to="https://drive.google.com/uc?export=download&id=1pLbB4N9YAC3zttENRs1_jm3HC1cUGsxE"
            target="_blank"
          >
            Descargar CV
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
