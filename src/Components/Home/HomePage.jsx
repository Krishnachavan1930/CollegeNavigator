import { useState } from "react";
import {
  Bell,
  BookmarkPlus,
  ChevronDown,
  Filter,
  Home,
  Menu,
  Search,
  Star,
  X,
} from "lucide-react";

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-gray-100 lg:flex-row">
      {/* Mobile header */}
      <header className="bg-white shadow-sm lg:hidden">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-gray-500"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold text-gray-900">Course Finder</h1>
          <button
            onClick={() => setRightSidebarOpen(true)}
            className="text-gray-500"
          >
            <Bell className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-md transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}
      >
        <div className="flex justify-between items-center p-4 lg:justify-center">
          <h2 className="text-xl font-bold">Course Finder</h2>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="mt-4">
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 bg-gray-200"
          >
            <Home className="w-5 h-5 mr-2" />
            Home
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            <Search className="w-5 h-5 mr-2" />
            Explore Courses
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            <BookmarkPlus className="w-5 h-5 mr-2" />
            Bookmarked Courses
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            <Star className="w-5 h-5 mr-2" />
            Course Reviews
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white shadow-sm hidden lg:block">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">
              Search for Your Ideal Course
            </h1>
          </div>
        </header>
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {/* Search bar */}
          <div className="flex items-center mb-6">
            <input
              type="text"
              placeholder="Enter course name or specialization"
              className="flex-1 p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600">
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Course cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <CourseCard
              title="Popular Courses"
              description="Discover trending courses in various domains"
              classInfo="Includes IT, Arts, Commerce, and more"
              students="100,000+ students enrolled"
            />
            <CourseCard
              title="Specialized Programs"
              description="Explore niche courses tailored to your interests"
              classInfo="From AI to Culinary Arts"
              students="30+ unique fields"
            />
            <CourseCard
              title="Affordable Courses"
              description="Find quality courses within your budget"
              classInfo="Low-cost certifications and diplomas"
              students="500+ budget-friendly options"
            />
            <CourseCard
              title="Top-rated Courses"
              description="Learn from the best-rated instructors"
              classInfo="Highly reviewed courses across domains"
              students="Rated 4.5+ by learners"
            />
          </div>

          {/* Calendar */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Your Schedule</h2>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              {/* Calendar component would go here */}
              <div className="p-4 text-center text-gray-500">Calendar view</div>
            </div>
          </div>
        </div>
      </main>

      {/* Right sidebar */}
      <aside
        className={`fixed inset-y-0 right-0 z-50 w-80 bg-white shadow-md transform ${
          rightSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}
      >
        <div className="flex justify-between items-center p-4 lg:justify-start">
          <h2 className="text-xl font-semibold">Course Details</h2>
          <button
            onClick={() => setRightSidebarOpen(false)}
            className="lg:hidden"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-4">
          <img
            src="/src/assets/Image.png"
            alt="Course"
            className="w-full h-auto rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">Course Overview</h3>
          <p className="text-sm text-gray-600 mb-4">Enrolled: 34/40 students</p>
          <h3 className="text-lg font-semibold mb-2">Student Feedback</h3>
          <div className="space-y-2">
            <GradeItem subject="Content Quality" grade="95%" />
            <GradeItem subject="Instructor Expertise" grade="90%" />
            <GradeItem subject="Overall Satisfaction" grade="88%" />
          </div>
          <h3 className="text-lg font-semibold mt-4 mb-2">Notifications</h3>
          <div className="bg-blue-100 p-2 rounded-md text-sm text-blue-800">
            Save this course to your bookmarks!
          </div>
        </div>
      </aside>
    </div>
  );
}

function CourseCard({ title, description, classInfo, students }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <div className="flex flex-col sm:flex-row items-start">
          <img
            src="/src/assets/Image.png"
            alt={title}
            className="w-full sm:w-24 h-auto sm:h-24 rounded-md mb-4 sm:mb-0 sm:mr-4"
          />
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
            <p className="text-xs text-gray-500 mt-2">{classInfo}</p>
            <p className="text-xs text-gray-500">{students}</p>
          </div>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <button className="text-blue-500 hover:text-blue-600 text-sm font-medium">
            View More
          </button>
        </div>
      </div>
    </div>
  );
}

function GradeItem({ subject, grade }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-sm text-gray-600">{subject}</span>
      <span className="text-sm font-medium">{grade}</span>
    </div>
  );
}
