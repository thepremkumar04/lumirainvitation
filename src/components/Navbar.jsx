import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
  Sun,
  Moon,
} from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Work", "#work"],
  ["Process", "#process"],
  ["Packages", "#packages"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  // Dark mode by default
  const [darkMode, setDarkMode] = useState(() => {
    return (
      localStorage.getItem("lumira-theme") !==
      "light"
    );
  });

  // Apply theme
  useEffect(() => {
    const theme = darkMode ? "dark" : "light";

    document.documentElement.setAttribute(
      "data-theme",
      theme
    );

    localStorage.setItem(
      "lumira-theme",
      theme
    );
  }, [darkMode]);

  return (
    <>
      <motion.header
  className={`navbar ${
    scrolled ? "navbar-scrolled" : ""
  }`}
  initial={{ y: -30, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1],
  }}
>
        {/* LOGO */}
        <a href="#home" className="nav-logo">
          LUMIRA<span>.</span>
        </a>

        {/* DESKTOP LINKS */}
        <nav className="nav-links">
          {links.map(([label, href]) => (
            <a href={href} key={label}>
              {label}
            </a>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="nav-actions">

          {/* THEME TOGGLE */}
          <motion.button
            type="button"
            className="theme-toggle"
            onClick={() =>
              setDarkMode((value) => !value)
            }
            whileHover={{
              scale: 1.08,
              rotate: 10,
            }}
            whileTap={{
              scale: 0.92,
            }}
            aria-label={
              darkMode
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
          >
            <AnimatePresence
              mode="wait"
              initial={false}
            >
              {darkMode ? (
                <motion.span
                  key="sun"
                  initial={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.6,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.6,
                  }}
                >
                  <Sun size={16} />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.6,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.6,
                  }}
                >
                  <Moon size={16} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {/* DESKTOP CTA */}
          <a href="#contact" className="nav-cta">
            Start a Project
            <ArrowUpRight size={15} />
          </a>

          {/* MOBILE BUTTON */}
          <button
            className="nav-menu-btn"
            onClick={() =>
              setOpen((value) => !value)
            }
            aria-label="Toggle navigation"
          >
            <AnimatePresence
              mode="wait"
              initial={false}
            >
              {open ? (
                <motion.div
                  key="close"
                  initial={{
                    rotate: -90,
                    opacity: 0,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                  }}
                  exit={{
                    rotate: 90,
                    opacity: 0,
                  }}
                >
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{
                    rotate: 90,
                    opacity: 0,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                  }}
                  exit={{
                    rotate: -90,
                    opacity: 0,
                  }}
                >
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
          >
            <div className="mobile-menu-inner">

              {links.map(
                ([label, href], index) => (
                  <a
                    href={href}
                    key={label}
                    onClick={() =>
                      setOpen(false)
                    }
                  >
                    <span>
                      0{index + 1}
                    </span>

                    {label}
                  </a>
                )
              )}

              {/* MOBILE THEME */}
              <button
                type="button"
                className="mobile-theme-toggle"
                onClick={() =>
                  setDarkMode(
                    (value) => !value
                  )
                }
              >
                {darkMode ? (
                  <>
                    <Sun size={17} />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon size={17} />
                    Dark Mode
                  </>
                )}
              </button>

              <a
                href="#contact"
                className="mobile-contact"
                onClick={() =>
                  setOpen(false)
                }
              >
                Start a Project
                <ArrowUpRight size={17} />
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}