import React from 'react'
import { Link } from 'react-router-dom'
import { Search, BookOpen, GraduationCap, BarChart2, Users, Briefcase } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="bg-[#f5f5f7] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
          <span className="text-purple-600">Navigate</span> Your Future
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Find the perfect college, explore programs, and chart your path to success with College Navigator.
        </p>
        
        <div className="flex justify-center mb-12">
          <form className="w-full max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for colleges, programs, or careers"
                className="w-full py-3 px-4 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-600 hover:text-purple-700"
                aria-label="Search"
              >
                <Search className="w-6 h-6" />
              </button>
            </div>
          </form>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          <CategoryCard icon={<BookOpen />} title="Programs" />
          <CategoryCard icon={<GraduationCap />} title="Colleges" />
          <CategoryCard icon={<BarChart2 />} title="Rankings" />
          <CategoryCard icon={<Users />} title="Campus Life" />
          <CategoryCard icon={<Briefcase />} title="Careers" />
          <CategoryCard icon={<Search />} title="Resources" />
        </div>
        
        <div className="text-center">
          <Link
            to="/get-started"
            className="inline-block bg-purple-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-purple-700 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  )
}

function CategoryCard({ icon, title }) {
  return (
    <Link to={`/${title.toLowerCase()}`} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <div className="text-purple-600 mb-2">
        {React.cloneElement(icon, { className: "w-8 h-8" })}
      </div>
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
    </Link>
  )
}
