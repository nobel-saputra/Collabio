"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with gradient effect */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Collabio
              <span className="text-indigo-600 align-super text-xs">®</span>
            </h1>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6 ">
              <Link
                href="#home"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-base font-medium transition-all duration-300 hover:-translate-y-0.5"
              >
                Home
              </Link>
              <Link
                href="#features"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-base font-medium transition-all duration-300 hover:-translate-y-0.5"
              >
                Features
              </Link>
              <Link
                href="#collabs"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-base font-medium transition-all duration-300 hover:-translate-y-0.5"
              >
                Collab
              </Link>
              <Link
                href="#testimonial"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-base font-medium transition-all duration-300 hover:-translate-y-0.5"
              >
                Testimonial
              </Link>
              <Link
                href="#pricing"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-base font-medium transition-all duration-300 hover:-translate-y-0.5"
              >
                Pricing
              </Link>
              
            </div>
          </div>

          {/* CTA button with glow effect */}
          <div className="hidden md:block">
            <Link
              href={"#"}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-indigo-500/30"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none focus:text-indigo-600 transition-colors p-2 rounded-lg hover:bg-gray-100"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu with slide animation */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-2 pb-4 space-y-1 bg-white/80 backdrop-blur-sm rounded-lg mt-2 border border-gray-200 shadow-md">
            <Link
              href="#features"
              className="block text-gray-700 hover:text-indigo-600 px-3 py-3 rounded-md text-base font-medium transition-colors hover:bg-gray-50/80"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="block text-gray-700 hover:text-indigo-600 px-3 py-3 rounded-md text-base font-medium transition-colors hover:bg-gray-50/80"
            >
              Pricing
            </Link>
            <Link
              href="#about"
              className="block text-gray-700 hover:text-indigo-600 px-3 py-3 rounded-md text-base font-medium transition-colors hover:bg-gray-50/80"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="block text-gray-700 hover:text-indigo-600 px-3 py-3 rounded-md text-base font-medium transition-colors hover:bg-gray-50/80"
            >
              Contact
            </Link>
            <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-4 py-3 rounded-lg font-medium transition-colors mt-2">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
