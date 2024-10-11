import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Search, ShoppingBag, GraduationCap } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#f5f5f7] text-[#1d1d1f]">
      <div className="max-w-[980px] mx-auto px-4 lg:px-0">
        <div className="h-[44px] flex items-center justify-between text-xs font-normal">
          <Link to="/" className="text-2xl flex items-center space-x-2">
            <GraduationCap className="w-5 h-5" />
            <span className="font-bold text-xl">CollegeNavigator</span>
          </Link>
          
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/colleges" className="hover:text-gray-500">Colleges</Link>
            <Link to="/programs" className="hover:text-gray-500">Programs</Link>
            <Link to="/scholarships" className="hover:text-gray-500">Scholarships</Link>
            <Link to="/admissions" className="hover:text-gray-500">Admissions</Link>
            <Link to="/rankings" className="hover:text-gray-500">Rankings</Link>
            <Link to="/resources" className="hover:text-gray-500">Resources</Link>
            <Link to="/career" className="hover:text-gray-500">Career</Link>
          </div>
          
          <div className="flex items-center space-x-6">
            <button aria-label="Search" className="hover:text-gray-500">
              <Search className="w-4 h-4" />
            </button>
            <button aria-label="Saved Colleges" className="hover:text-gray-500">
              <ShoppingBag className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="lg:hidden bg-white py-2 px-4 space-y-2">
          <Link to="/colleges" className="block py-2 hover:text-gray-500">Colleges</Link>
          <Link to="/programs" className="block py-2 hover:text-gray-500">Programs</Link>
          <Link to="/scholarships" className="block py-2 hover:text-gray-500">Scholarships</Link>
          <Link to="/admissions" className="block py-2 hover:text-gray-500">Admissions</Link>
          <Link to="/rankings" className="block py-2 hover:text-gray-500">Rankings</Link>
          <Link to="/resources" className="block py-2 hover:text-gray-500">Resources</Link>
          <Link to="/career" className="block py-2 hover:text-gray-500">Career</Link>
        </div>
      )}
      
      <div className="bg-white">
        <div className="max-w-[980px] mx-auto px-4 lg:px-0 py-2 text-center text-xs text-[#1d1d1f]">
          Navigate your future with confidence. Find your perfect college match today! <Link to="/explore" className="text-blue-600 hover:underline">Explore now &gt;</Link>
        </div>
      </div>
    </nav>
  );
}
