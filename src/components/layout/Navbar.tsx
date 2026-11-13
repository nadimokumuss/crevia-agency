"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { cn } from "@/lib/cn";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
  { label: "Crevia Works", href: "/crevia-works" },
];

const mobileMenuVariants = {
  closed: {
    x: "100%",
    transition: { duration: 0.3, ease: "easeInOut" as const },
  },
  open: {
    x: 0,
    transition: { duration: 0.3, ease: "easeInOut" as const },
  },
};

const mobileLinkVariants = {
  closed: { opacity: 0, x: 20 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.1 + i * 0.05, duration: 0.3, ease: "easeOut" as const },
  }),
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-koyu-yesil/90 backdrop-blur-md shadow-lg shadow-black/10"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="relative z-10">
          <Logo width={120} height={40} />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 font-syne text-sm font-medium transition-colors duration-200",
                    isActive
                      ? "text-hardal-sarisi"
                      : "text-white/80 hover:text-white"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeLink"
                      className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-hardal-sarisi"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/iletisim"
          className="hidden rounded-full bg-hardal-sarisi px-6 py-2 font-syne text-sm font-semibold text-koyu-yesil transition-colors duration-200 hover:bg-hardal-sarisi/90 lg:inline-flex"
        >
          İletişim
        </Link>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="relative z-10 rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={mobileOpen}
        >
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        {/* Mobile Menu Panel */}
        <AnimatePresence>
          {mobileOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                onClick={() => setMobileOpen(false)}
              />

              {/* Slide-in panel */}
              <motion.div
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="fixed top-0 right-0 z-50 flex h-full w-80 max-w-[85vw] flex-col bg-koyu-yesil shadow-2xl lg:hidden"
              >
                {/* Close button */}
                <div className="flex items-center justify-end p-6">
                  <button
                    type="button"
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg p-2 text-white transition-colors hover:bg-white/10"
                    aria-label="Menüyü kapat"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Mobile links */}
                <div className="flex flex-1 flex-col gap-2 px-6">
                  {navLinks.map((link, i) => {
                    const isActive = pathname === link.href;

                    return (
                      <motion.div
                        key={link.href}
                        custom={i}
                        variants={mobileLinkVariants}
                        initial="closed"
                        animate="open"
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            "block rounded-xl px-4 py-3 font-syne text-lg font-medium transition-colors duration-200",
                            isActive
                              ? "bg-hardal-sarisi/10 text-hardal-sarisi"
                              : "text-white/80 hover:bg-white/5 hover:text-white"
                          )}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    );
                  })}

                  {/* Mobile CTA */}
                  <motion.div
                    custom={navLinks.length}
                    variants={mobileLinkVariants}
                    initial="closed"
                    animate="open"
                    className="mt-6"
                  >
                    <Link
                      href="/iletisim"
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-full bg-hardal-sarisi px-6 py-3 text-center font-syne text-base font-semibold text-koyu-yesil transition-colors duration-200 hover:bg-hardal-sarisi/90"
                    >
                      İletişim
                    </Link>
                  </motion.div>
                </div>

                {/* Mobile footer */}
                <div className="border-t border-mat-yesil/20 p-6">
                  <p className="font-poppins text-xs text-white/40">
                    &copy; 2026 Crevia Agency
                  </p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
