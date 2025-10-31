"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
  ];

  // Scroll hide/show logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className="z-50">
      {/* Desktop Floating Navbar */}
      <nav
        className={`hidden md:flex fixed top-0 left-1/2 -translate-x-1/2 bg-white backdrop-blur-md border border-gray-200  shadow-md pr-8 pl-8 py-1  items-center justify-between gap-8 transition-all duration-400 w-full z-50 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-24 opacity-0 pointer-events-none"
        }`}
        style={{ willChange: "transform, opacity" }}
      >
        {/* Logo */}
        <div className="w-30 ">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/genaux_logo.png"
              alt="Genaux Logo"
              className=" object-cover h-15 -mr-2"
            />
          </Link>
        </div>
        {/* <div className="">
          <Link
            href="/"
            className="flex items-center gap-2  w-14 h-15 overflow-hidden"
          >
            <img
              src="/genaux_logo_single.png"
              alt="Genaux Logo"
              className=" object-cover h-16 mt-1 "
            />
          </Link>
        </div> */}

        {/* Nav Links */}
        <div className="flex items-center gap-6">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition-colors ${
                  active ? "text-primary" : "text-gray-700 hover:text-primary"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-[2px] w-6 bg-primary rounded-full"></span>
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <Button
          asChild
          className="bg-primary hover:bg-primary/90 rounded-lg px-4 py-2 text-sm"
        >
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </nav>

      {/* Mobile Sticky Navbar */}
      <nav className="md:hidden fixed w-full top-0 bg-white border-b border-gray-200 px-4 sm:px-6 py-3 shadow-sm z-50">
        <div className="flex justify-between items-center">
          {/* Logo */}

          <div className="h-10 ">
            <Link href="/" className="flex items-center gap-2 h-10">
              <img
                src="/genaux_logo.png"
                alt="Genaux Logo"
                className=" object-cover w-40 -ml-4"
              />
              {/* <span className="font-bold text-lg text-foreground">Genaux</span> */}
            </Link>
          </div>

          {/* Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="mt-4 pb-4 space-y-3 border-t border-gray-200 pt-4 bg-white">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block text-sm font-medium py-2 px-3 rounded-lg transition-colors ${
                    active
                      ? "bg-primary/10 text-primary"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button
              asChild
              className="w-full bg-primary hover:bg-primary/90 rounded-full"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
