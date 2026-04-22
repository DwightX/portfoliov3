"use client";

import React from "react";
import useScrollDirection from "./hooks/useScrollDirection";
import { useTheme } from "./ThemeProvider";

const Header = () => {
  const scrollDirection = useScrollDirection();
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`lg:hidden fixed top-0 w-full h-16 bg-black bg-opacity-80 backdrop-blur-sm flex justify-between items-center shadow-lg transition-transform duration-300 z-50 ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="pl-4">
        <span className="text-white font-bold font-mono text-sm tracking-widest">DC</span>
      </div>
      <div className="pr-4 flex items-center gap-3">
        <ol className="flex space-x-3 text-white text-xs font-mono">
          <a href="#home_block">
            <li className="hover:text-red-400 cursor-pointer uppercase tracking-wider">Home</li>
          </a>
          <a href="#about_block">
            <li className="hover:text-red-400 cursor-pointer uppercase tracking-wider">About</li>
          </a>
          <a href="#exp__block">
            <li className="hover:text-red-400 cursor-pointer uppercase tracking-wider">Exp</li>
          </a>
          <a href="#project_block">
            <li className="hover:text-red-400 cursor-pointer uppercase tracking-wider">Projects</li>
          </a>
        </ol>
        <button onClick={toggleTheme} aria-label="Toggle theme" className="theme-toggle">
          {theme === "dark" ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
