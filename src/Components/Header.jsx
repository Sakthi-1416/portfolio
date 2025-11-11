import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import logo2 from "../assets/log2.png"
import logo3 from "../assets/logo3.png"


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md shadow-lg border-b border-white/10">
      <div className="flex justify-between items-center px-4 md:px-10 h-[70px]">
        {/* Logo */}
        <div className="logo flex items-center">
          <img
            src={logo3}
            alt="Car X Camera"
            className="w-[120px] md:w-[200px] h-auto max-w-full"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block font-medium">
          {["Home", "About Me", "Portfolio", "Gallery", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="p-3 transition-colors hover:border-b-2 hover:border-b-blue-600 duration-300"
              >
                {item}
              </a>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-neutral-200"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden flex flex-col items-center transparent py-6 space-y-4 font-medium shadow-inner"
          >
            {["Home", "About Me", "Portfolio", "Gallery", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setIsOpen(false)}
                  className="inline-block text-neutral-200  transition duration-300 hover:text-blue-400 hover:drop-shadow-[0_0_6px_#60a5fa] "
                >
                  {item}
                </a>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
