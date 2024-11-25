import React, { useState } from "react";
import { ArrowLeft, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Cources = ({ params }) => {
  const course = {
    id: params.id,
    title: "Web Development Fundamentals",
    description: "Master the basics of web development with HTML, CSS, and JavaScript",
    fullDescription: `Learn the essential skills needed to become a web developer. This comprehensive course covers everything from basic HTML and CSS to advanced JavaScript concepts.

    What you'll learn:
    - HTML5 and semantic markup
    - CSS3 and modern layouts
    - JavaScript fundamentals
    - Responsive design principles
    - Basic web accessibility
    - Version control with Git`,
    duration: "12 weeks",
    students: 1500,
    level: "Beginner",
    price: 399,
    monthlyPrice: 33.25,
    images: [
      "/placeholder1.svg?height=600&width=800",
      "/placeholder2.svg?height=600&width=800",
      "/placeholder3.svg?height=600&width=800",
    ],
    instructor: "Jane Smith",
    rating: 4.8,
    totalReviews: 245,
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? course.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === course.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <div className="max-w-[980px] mx-auto px-4 py-8 lg:px-0">
        <Link
          to="/courses"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Courses
        </Link>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Slider Section */}
          <div className="relative">
            <img
              src={course.images[currentImageIndex]}
              alt={`Slide ${currentImageIndex + 1}`}
              className="rounded-lg object-cover w-full h-[300px] lg:h-[400px]"
            />
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
              onClick={handlePrevSlide}
            >
              &lt;
            </button>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
              onClick={handleNextSlide}
            >
              &gt;
            </button>
          </div>

          {/* Course Details Section */}
          <div className="card">
            <div className="card-header">
              <h2 className="text-2xl">{course.title}</h2>
              <p className="mt-2">Instructor: {course.instructor}</p>
            </div>
            <div className="card-content space-y-4">
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {course.students} students
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">★</span>
                  {course.rating} ({course.totalReviews} reviews)
                </div>
              </div>

              <div className="prose max-w-none">
                <p className="whitespace-pre-line">{course.fullDescription}</p>
              </div>

              <div className="text-lg font-semibold">
                ${course.price} or ${course.monthlyPrice}/mo. for 12 mo.*
              </div>
            </div>
            <div className="card-footer flex flex-col gap-4">
              <button className="w-full bg-blue-500 text-white p-2 rounded-lg">
                Enroll Now
              </button>
              <p className="text-xs text-gray-500">
                * Monthly pricing is available when you choose financing options. Additional terms apply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cources;
