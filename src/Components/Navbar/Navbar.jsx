import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Search, ShoppingBag, GraduationCap, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#f5f5f7] text-[#1d1d1f]">
      <div className="max-w-[980px] mx-auto px-4 lg:px-0">
        <div className="h-[44px] flex items-center justify-between text-xs font-normal">
          {/* Logo Section */}
          <Link to="/" className="text-2xl flex items-center space-x-2">
            <GraduationCap className="w-5 h-5" />
            <span className="font-bold text-xl">UNIVOC</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="hover:text-gray-500">ABOUT US</Link>
            <div className="relative group">
              <Link to="/Cources" className="hover:text-gray-500 flex items-center">
                COURSES
              </Link>
            </div>
            <div className="relative group">
              <Link to="/jobsection" className="hover:text-gray-500 flex items-center">
                JOB SECTION
              </Link>
            </div>
            <div className="relative group">
              <Link to="/studentlife" className="hover:text-gray-500 flex items-center">
                STUDENT LIFE
              </Link>
            </div>
            <div className="relative group">
              <Link to="/innovation" className="hover:text-gray-500 flex items-center">
                INNOVATION <ChevronDown className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-6">
            <button aria-label="Search" className="hover:text-gray-500">
              <Search className="w-4 h-4" />
            </button>
            <button aria-label="Saved Colleges" className="hover:text-gray-500">
              <ShoppingBag className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white py-2 px-4 space-y-2">
            <Link to="/" className="block py-2 hover:text-gray-500">ABOUT US</Link>
            <Link to="/courses" className="block py-2 hover:text-gray-500">COURSES</Link>
            <Link to="/jobsection" className="block py-2 hover:text-gray-500">JOB SECTION</Link>
            <Link to="/studentlife" className="block py-2 hover:text-gray-500">STUDENT LIFE</Link>
            <Link to="/innovation" className="block py-2 hover:text-gray-500">INNOVATION</Link>
          </div>
        )}

        {/* Promo Section */}
        <div className="mt-4 text-center">
          Navigate your future with confidence. Find your perfect course match today!{' '}
          <Link to="/explore" className="text-blue-600 hover:underline">
            Explore now &gt;
          </Link>
        </div>
      </div>
    </nav>
  );
}
