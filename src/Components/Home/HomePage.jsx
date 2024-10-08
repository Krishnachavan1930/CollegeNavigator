import { Bell, BookmarkPlus, ChevronDown, Filter, Home, Search, Star } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-xl font-semibold">College Navigator</h2>
        </div>
        <nav className="mt-4">
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 bg-gray-200">
            <Home className="w-5 h-5 mr-2" />
            Home
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
            <Search className="w-5 h-5 mr-2" />
            Discover colleges
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
            <BookmarkPlus className="w-5 h-5 mr-2" />
            Bookmarks
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
            <Star className="w-5 h-5 mr-2" />
            Reviews
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Search for colleges</h1>
          </div>
        </header>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Search bar */}
          <div className="flex items-center mb-6">
            <input
              type="text"
              placeholder="Enter a college name or location"
              className="flex-1 p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600">
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Course cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CourseCard
              title="English 101"
              description="Learn the basics of the English"
              classInfo="Class 300: English 101"
              students="34 enrolled students"
              progress="67% course"
            />
            <CourseCard
              title="Human Biology"
              description="Discover how the brain works"
              classInfo="Class 766: Human Biology"
              students="42 enrolled students"
              progress="33% course"
            />
            <CourseCard
              title="World Economy"
              description="Explore the leading markets"
              classInfo="Individual Oral Exam Online"
              students="Monday 15/5 at 11 AM"
              progress="Sign up to take the"
            />
            <CourseCard
              title="Paper Review"
              description="Review your paper with an"
              classInfo="Friday 19/5 at 9 AM"
              students="Individual meeting Online"
              progress="Sign up for a paper"
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
      <aside className="w-80 bg-white shadow-md overflow-y-auto">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">College details</h2>
          <img src="/src/assets/Image.png" alt="College" width={300} height={200} className="rounded-lg mb-4" />
          <h3 className="text-lg font-semibold mb-2">Course details</h3>
          <p className="text-sm text-gray-600 mb-4">Students enrolled: 34/40</p>
          <h3 className="text-lg font-semibold mb-2">Grades & performance</h3>
          <div className="space-y-2">
            <GradeItem subject="Mid-term grades" grade="98%" />
            <GradeItem subject="Art history" grade="72%" />
            <GradeItem subject="Mathematics" grade="34%" />
          </div>
          <h3 className="text-lg font-semibold mt-4 mb-2">Notifications</h3>
          <div className="bg-blue-100 p-2 rounded-md text-sm text-blue-800">
            Bookmark this college for later!
          </div>
        </div>
      </aside>
    </div>
  )
}

function CourseCard({ title, description, classInfo, students, progress }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <div className="flex items-start">
          <img src="/src/assets/Image.png" alt={title} width={100} height={100} className="rounded-md mr-4" />
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
            <p className="text-xs text-gray-500 mt-2">{classInfo}</p>
            <p className="text-xs text-gray-500">{students}</p>
          </div>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div className="text-xs text-gray-500">{progress}</div>
          <button className="text-blue-500 hover:text-blue-600 text-sm font-medium">View Homework</button>
        </div>
      </div>
    </div>
  )
}

function GradeItem({ subject, grade }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-sm text-gray-600">{subject}</span>
      <span className="text-sm font-medium">{grade}</span>
    </div>
  )
}