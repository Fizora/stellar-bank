// src/app/components/Navbar.tsx
"use client";
import { useState, useEffect } from "react";
import { LuMenu, LuX, LuChevronDown, LuSparkles } from "react-icons/lu";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-white/80 backdrop-blur-sm border-b border-gray-100"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="flex items-center gap-2">
            <LuSparkles className="h-7 w-7 text-primary-600" />
            <span className="text-xl font-bold text-gray-900">
              Stellar Bank
            </span>
          </a>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          <a
            href="/personal"
            className="text-sm font-semibold text-gray-700 hover:text-primary-600"
          >
            Personal
          </a>
          <a
            href="/business"
            className="text-sm font-semibold text-gray-700 hover:text-primary-600"
          >
            Business
          </a>
          <a
            href="/wealth"
            className="text-sm font-semibold text-gray-700 hover:text-primary-600"
          >
            Wealth
          </a>
          <a
            href="/resources"
            className="text-sm font-semibold text-gray-700 hover:text-primary-600"
          >
            Resources
          </a>
          <div className="relative group">
            <button className="flex items-center gap-x-1 text-sm font-semibold text-gray-700 hover:text-primary-600">
              More <LuChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute -left-8 top-full z-10 mt-3 w-48 rounded-xl bg-white shadow-lg ring-1 ring-gray-900/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="p-2">
                <a
                  href="/security"
                  className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  Security Center
                </a>
                <a
                  href="/careers"
                  className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  Careers
                </a>
                <a
                  href="/contact"
                  className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden items-center lg:flex lg:flex-1 lg:justify-end gap-4">
          <a
            href="/login"
            className="text-sm font-semibold text-primary-600 hover:text-primary-700"
          >
            Sign In
          </a>
          <a
            href="/open-account"
            className="rounded-full bg-linear-to-br from-primary-500 to-primary-700 px-5 py-2 text-sm font-semibold text-white shadow-sm "
          >
            Open Account
          </a>
        </div>

        <button
          className="lg:hidden -m-2.5 p-2.5 text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <LuX className="h-6 w-6" />
          ) : (
            <LuMenu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu - tidak menggunakan fixed inset, melainkan dropdown di bawah navbar */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-200 py-4 px-4 shadow-lg">
          <div className="space-y-2">
            <a
              href="/personal"
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
              onClick={() => setMobileOpen(false)}
            >
              Personal
            </a>
            <a
              href="/business"
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
              onClick={() => setMobileOpen(false)}
            >
              Business
            </a>
            <a
              href="/wealth"
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
              onClick={() => setMobileOpen(false)}
            >
              Wealth
            </a>
            <a
              href="/resources"
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
              onClick={() => setMobileOpen(false)}
            >
              Resources
            </a>
            <a
              href="/security"
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
              onClick={() => setMobileOpen(false)}
            >
              Security Center
            </a>
            <a
              href="/careers"
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
              onClick={() => setMobileOpen(false)}
            >
              Careers
            </a>
            <a
              href="/contact"
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </a>
          </div>
          <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-gray-200">
            <a
              href="/login"
              className="rounded-full bg-primary-50 px-4 py-2 text-center text-sm font-semibold text-primary-600"
              onClick={() => setMobileOpen(false)}
            >
              Sign In
            </a>
            <a
              href="/open-account"
              className="rounded-full bg-primary-600 px-4 py-2 text-center text-sm font-semibold text-white"
              onClick={() => setMobileOpen(false)}
            >
              Open Account
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
