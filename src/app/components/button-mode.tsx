"use client";

import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <button 
      onClick={toggleTheme}
      className={`p-2 rounded-md transition-colors ${theme === "light" ? "bg-gray-200" : ""}`}
    >
      <span className="sr-only">Toggle theme</span>
      {theme === "light" ? (
        <FontAwesomeIcon icon={faSun} className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <FontAwesomeIcon icon={faMoon} className="h-[1.2rem] w-[1.2rem]" />
      )}
    </button>
  );
}
