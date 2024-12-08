import React from "react";
import Image from "next/image";
import { FaCalendarAlt, FaUser, FaChevronRight } from "react-icons/fa";

// Replace with your actual image paths
import blogImage1 from "../public/blog1.jpg.png";
import blogImage2 from "../public/blog2.jpg.png";
import blogImage3 from "../public/blog3.jpg.png";

const BlogPage = () => {
  return (
    <div className="bg-[#FCF8F3] min-h-screen">
      {/* Hero Section */}
      <header className="bg-[url('/blog.png.png')] bg-cover bg-center h-60 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800"></h1>
      </header>

      {/* Blog Content Section */}
      <main className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Blog Entries */}
          <div className="w-full lg:w-2/3 space-y-8">
            {/* Blog Entry 1 */}
            <div className="flex flex-col md:flex-row-reverse items-start bg-white border rounded-md shadow-lg overflow-hidden">
              <Image
                src="/blog1.jpg.png"
                alt="Blog 1"
                className="w-full md:w-1/3 object-cover"
                width={300}
                height={300}
              />
              <div className="p-4 md:w-2/3">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Going all-in with millennial design
                </h2>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <FaCalendarAlt className="mr-2" />
                  <span>Dec 8, 2024</span>
                  <FaUser className="ml-4 mr-2" />
                  <span>Admin</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mus mauris vitae ultricies leo integer malesuada nunc.
                </p>
                <button className="text-[#B88E2F] font-semibold">
                  Read More →
                </button>
              </div>
            </div>

            {/* Blog Entry 2 */}
            <div className="flex flex-col md:flex-row-reverse items-start bg-white border rounded-md shadow-lg overflow-hidden">
              <Image
                src="/blog2.jpg.png"
                alt="Blog 2"
                className="w-full md:w-1/3 object-cover"
                width={300}
                height={300}
              />
              <div className="p-4 md:w-2/3">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Exploring new ways of decorating
                </h2>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <FaCalendarAlt className="mr-2" />
                  <span>Nov 25, 2024</span>
                  <FaUser className="ml-4 mr-2" />
                  <span>Admin</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mus mauris vitae ultricies leo integer malesuada nunc.
                </p>
                <button className="text-[#B88E2F] font-semibold">
                  Read More →
                </button>
              </div>
            </div>

            {/* Blog Entry 3 */}
            <div className="flex flex-col md:flex-row-reverse items-start bg-white border rounded-md shadow-lg overflow-hidden">
              <Image
                src="/blog3.jpg.png"
                alt="Blog 3"
                className="w-full md:w-1/3 object-cover"
                width={300}
                height={300}
              />
              <div className="p-4 md:w-2/3">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Handmade pieces that took time to make
                </h2>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <FaCalendarAlt className="mr-2" />
                  <span>Oct 15, 2024</span>
                  <FaUser className="ml-4 mr-2" />
                  <span>Admin</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mus mauris vitae ultricies leo integer malesuada nunc.
                </p>
                <button className="text-[#B88E2F] font-semibold">
                  Read More →
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-1/3 bg-white p-6 border rounded-md shadow-md">
            {/* Categories Section */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Categories
              </h2>
              <ul className="space-y-2">
                {[
                  "Furniture",
                  "Interior Design",
                  "Tips & Tricks",
                  "DIY Projects",
                ].map((category, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-600 hover:text-[#B88E2F] cursor-pointer"
                  >
                    <FaChevronRight className="mr-2" />
                    <span>{category}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts Section */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Recent Posts
              </h2>
              <ul className="space-y-4">
                {[
                  {
                    title: "5 Tips for Choosing the Right Sofa",
                    date: "Dec 5, 2024",
                  },
                  {
                    title: "Top Interior Design Trends for 2024",
                    date: "Nov 28, 2024",
                  },
                  {
                    title: "How to Choose Durable Furniture",
                    date: "Oct 15, 2024",
                  },
                ].map((post, index) => (
                  <li key={index}>
                    <p className="text-gray-800 font-semibold hover:text-[#B88E2F] cursor-pointer">
                      {post.title}
                    </p>
                    <p className="text-gray-500 text-sm">{post.date}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Search Section */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Search</h2>
              <input
                type="text"
                placeholder="Search posts..."
                className="w-full border p-2 rounded-md"
              />
            </div>

            {/* Tags Section */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Sofa",
                  "Trendy",
                  "Interior",
                  "Design",
                  "Durable",
                  "Quality",
                ].map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#FCF8F3] text-gray-600 px-3 py-1 rounded-full border text-sm hover:bg-[#B88E2F] hover:text-white cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>


      <img src="nero.png.png"
      alt="all"
      width={2000}
      height={300}>
      </img>

      {/* Footer Section */}
      <footer className="bg-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">© 2024 Furniro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BlogPage;
