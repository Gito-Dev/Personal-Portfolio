import React, { useState } from "react";
import logo from "../assets/logo.png";
export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#about" className="-m-1.5 p-1.5">
            <span className="sr-only">Amici</span>
            <img className="h-20 w-auto" src={logo} alt="Your Company" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={toggleMobileMenu}
            aria-label="Open main menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a
            href="#about"
            className="text-sm font-semibold leading-6 text-white"
          >
            About us
          </a>
          <a
            href="#location"
            className="text-sm font-semibold leading-6 text-white"
          >
            Locations
          </a>
          <a
            href="#contact"
            className="text-sm font-semibold leading-6 text-white"
          >
            Contact us
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#contact"
            className="text-sm font-semibold leading-6 text-white"
          >
            Book Now
            <span className="pl-2" aria-hidden="true">
              &rarr;
            </span>
          </a>
        </div>
      </nav>
      {/* Mobile menu, show/hide based on menu open state. */}
      {isMobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50" onClick={toggleMobileMenu}></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#111827] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#about" className="-m-1.5 p-1.5">
                <span className="sr-only">Amici</span>
                <img className="h-20 w-auto" src={logo} alt="Your Company" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={toggleMobileMenu}
                aria-label="Close menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="#about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-gray-500"
                    onClick={closeMobileMenu}
                  >
                    About Us
                  </a>
                  <a
                    href="#location"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-gray-500"
                    onClick={closeMobileMenu}
                  >
                    Locations
                  </a>
                  <a
                    href="#contact"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-gray-500"
                    onClick={closeMobileMenu}
                  >
                    Contact Us
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="#contact"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-gray-500"
                    onClick={closeMobileMenu}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
