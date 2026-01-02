// src/components/Navbar.tsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "عن الأكاديمية", path: "/about" },
    { name: "البرامج التعليمية", path: "/programs" },
    { name: "حضانة أونلاين", path: "/online-nursery" },
    { name: "الفرص الوظيفية", path: "/jobs" },
    { name: "التواصل والإستفسار", path: "/contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
        ? "py-2 bg-cream-50/90 dark:bg-dark-surface/90 backdrop-blur-md shadow-lg" 
        : "py-4 bg-transparent"
      }`} 
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative flex justify-between items-center transition-all duration-300 ${
          scrolled ? "" : "bg-white/50 dark:bg-dark-card/50 backdrop-blur-md rounded-2xl px-5 py-2 border border-cream-500/50 dark:border-primary-800/50 shadow-sm"
        }`}>
          
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/imgs/logo.png" 
              className="h-12 sm:h-14 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
              alt="شعار أكاديمية الفرقان"
            />
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-emerald-600 dark:text-accent-500 leading-none">
                أكاديمية الفرقان
              </span>
              <span className="text-[12px] text-gray-500 dark:text-gray-400 mt-1 font-medium">أحمد محيي الدين</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-bold transition-all duration-300 group ${
                  location.pathname === link.path 
                  ? "text-emerald-600 dark:text-accent-500" 
                  : "text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-accent-500"
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-emerald-500 dark:bg-accent-500 transition-all duration-300 ${
                  location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <DarkModeToggle />
            
            <button
              className="md:hidden p-2 rounded-lg bg-cream-200 dark:bg-dark-card text-emerald-700 dark:text-accent-500 transition-all"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-[calc(100%+8px)] left-4 right-4 transition-all duration-500 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <div className="bg-cream-50 dark:bg-dark-card backdrop-blur-xl rounded-2xl shadow-2xl border border-cream-200 dark:border-primary-800 p-4">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center justify-between p-4 rounded-xl text-right transition-all ${
                  location.pathname === link.path 
                  ? "bg-emerald-100/50 dark:bg-primary-900/50 text-emerald-700 dark:text-accent-400" 
                  : "text-gray-700 dark:text-gray-300 hover:bg-cream-100 dark:hover:bg-primary-800"
                }`}
                onClick={closeMenu}
              >
                <span className="font-bold text-sm">{link.name}</span>
                {location.pathname === link.path && <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></div>}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}