import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand Info & Bio */}
          <div className="space-y-4">
            <Link to={"/"} className="flex items-center gap-2">
              <div className="bg-cyan-500 text-slate-950 font-black px-2.5 py-1 rounded text-lg tracking-wider shadow-inner">
                ST
              </div>
              <div>
                <h2 className="font-bold text-xl tracking-wide uppercase text-white">
                  Star <span className="text-cyan-400">Technologies</span>
                </h2>
                <p className="text-[10px] tracking-widest text-slate-400 uppercase -mt-1">
                  Advanced Auto Parts
                </p>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Your ultimate destination for high-performance auto parts,
              advanced components, and reliable accessories for all vehicle
              types.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-500 transition-all duration-200"
              >
                <span className="text-xs font-bold">FB</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-500 transition-all duration-200"
              >
                <span className="text-xs font-bold">TW</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-500 transition-all duration-200"
              >
                <span className="text-xs font-bold">IG</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-500 transition-all duration-200"
              >
                <span className="text-xs font-bold">IN</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 tracking-wide border-b border-slate-800 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-cyan-400 transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="text-cyan-400">›</span> Home
                </Link>
              </li>
              <li>
                <Link
                  to="/parts"
                  className="hover:text-cyan-400 transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="text-cyan-400">›</span> Auto Parts
                </Link>
              </li>
              <li>
                <Link
                  to="/categories"
                  className="hover:text-cyan-400 transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="text-cyan-400">›</span> Categories
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="hover:text-cyan-400 transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="text-cyan-400">›</span> Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="hover:text-cyan-400 transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="text-cyan-400">›</span> My Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Support & Legal */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 tracking-wide border-b border-slate-800 pb-2 inline-block">
              Support & Legal
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/faq"
                  className="hover:text-cyan-400 transition-colors duration-200"
                >
                  Help & FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping"
                  className="hover:text-cyan-400 transition-colors duration-200"
                >
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link
                  to="/returns"
                  className="hover:text-cyan-400 transition-colors duration-200"
                >
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-cyan-400 transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-cyan-400 transition-colors duration-200"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 tracking-wide border-b border-slate-800 pb-2 inline-block">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold mt-0.5">📍</span>
                <span>123 Auto Avenue, Industrial Zone, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-cyan-400 font-bold">📞</span>
                <span>+880 1819976046</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-cyan-400 font-bold">✉️</span>
                <span>support@startechparts.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} Star Technologies. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="hover:text-slate-400 transition-colors"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="hover:text-slate-400 transition-colors"
            >
              Terms
            </Link>
            <Link
              to="/contact"
              className="hover:text-slate-400 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
