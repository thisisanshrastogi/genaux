"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  FlaskConical,
  Layers,
  Palette,
  Sparkles,
  Droplets,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

// Define categories to match your Product page IDs
const productCategories = [
  {
    title: "Pre-Treatment",
    id: "pre-treatment",
    icon: FlaskConical,
    desc: "Desizing, scouring & bleaching",
  },
  {
    title: "Dyeing & Printing",
    id: "dye-printing",
    icon: Palette,
    desc: "Levelling & dispersing agents",
  },
  {
    title: "Post Treatment",
    id: "post-treatment",
    icon: Layers,
    desc: "Washing-off & fixing agents",
  },
  {
    title: "Finishing",
    id: "finishing",
    icon: Sparkles,
    desc: "Softeners & surface finishes",
  },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/products", hasSubmenu: true }, // Mark products as having a submenu
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
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
        className={`hidden md:flex fixed top-0 left-1/2 -translate-x-1/2 bg-white backdrop-blur-md border border-gray-200/50 shadow-sm pr-8 pl-8 py-3 items-center justify-between gap-8 transition-all duration-300 w-full z-50 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-24 opacity-0 pointer-events-none"
        }`}
      >
        {/* Logo */}
        <div className="w-30">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/genaux_logo.png"
              alt="Genaux Logo"
              className="object-cover h-full w-auto" // Adjusted height for better proportion
            />
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="flex items-center gap-8">
          {navItems.map((item) => {
            const active = pathname.split("?")[0] === item.href;

            // SPECIAL RENDER FOR PRODUCTS (SUBMENU)
            if (item.hasSubmenu) {
              return (
                <div
                  key={item.href}
                  className="relative group h-full flex items-center"
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors py-2 ${
                      active || pathname.startsWith("/products")
                        ? "text-primary"
                        : "text-gray-700 hover:text-primary"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />
                  </Link>

                  {/* Invisible Bridge (Prevents menu from closing when moving mouse down) */}
                  <div className="absolute top-full left-0 w-full h-4 bg-transparent" />

                  {/* Dropdown Menu */}
                  <div className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-[340px] p-2 bg-white rounded-xl border border-gray-100 shadow-xl opacity-0 invisible translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                    <div className="grid gap-1">
                      {productCategories.map((cat) => (
                        <Link
                          key={cat.id}
                          // Pass the category ID as a query param
                          href={`/products?category=${cat.id}`}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-neutral-100 transition-colors group/item"
                        >
                          {/* <div className="p-2 rounded-md bg-primary/5 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                            <cat.icon className="w-4 h-4" />
                          </div> */}
                          <div>
                            <div className="text-sm font-semibold text-gray-900 leading-none mb-1">
                              {cat.title}
                            </div>
                            <p className="text-xs text-gray-500 leading-snug">
                              {cat.desc}
                            </p>
                          </div>
                          {active && (
                            <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 h-[2px] w-6 bg-primary rounded-full"></span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            // STANDARD LINKS
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
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 h-[2px] w-6 bg-primary rounded-full"></span>
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <Button
          asChild
          className="bg-primary hover:bg-primary/90 rounded-md px-5 h-9 text-sm shadow-md shadow-primary/20"
        >
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </nav>

      {/* Mobile Sticky Navbar - UNCHANGED Logic, slight styling tweaks */}
      <nav className="md:hidden fixed w-full top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 px-4 py-3 shadow-sm z-50">
        <div className="flex justify-between items-center">
          <div className="h-8">
            <Link href="/" className="flex items-center gap-2 h-full">
              <img
                src="/genaux_logo.png"
                alt="Genaux"
                className="object-contain h-full w-auto"
              />
            </Link>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="p-1">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl p-4 flex flex-col gap-2 animate-in slide-in-from-top-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium py-3 px-4 rounded-lg ${
                  pathname === item.href
                    ? "bg-primary/5 text-primary"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="w-full mt-2 rounded-lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
