import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-50">
                <Link
                  href="/"
                  className="flex justify-start  items-center gap-2"
                >
                  <img
                    src="/genaux_nob.png"
                    alt="Genaux Logo"
                    className="object-cover h-full w-auto grayscale  -ml-5 brightness-[1000%]" // Adjusted height for better proportion
                  />
                </Link>
              </div>
            </div>
            <p className="text-sm opacity-90">
              Tailored for Every Industry. Engineered for Performance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/products?category=pre-treatment"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  Pre-treatment Chemicals
                </a>
              </li>
              <li>
                <a
                  href="/products?category=dye-printing"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  Dyeing Solutions
                </a>
              </li>
              <li>
                <a
                  href="/products?category=post-treatment"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  Post Treatment Chemicals
                </a>
              </li>
              <li>
                <a
                  href="/products?category=finishing"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  Finishing Chemicals
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:support@genaux.in"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  support@genaux.in
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+918793846294"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  +91 8793846294
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span className="opacity-90">
                  SHOP NO - 08, SIDDHARTH INDUSTRIES ESTATE, Nandore Rd, EAST,
                  VEVOOR, Palghar, Maharashtra 401404
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-90">
          <p>&copy; 2025 Genaux. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
