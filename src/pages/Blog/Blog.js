import React from "react";
import Navbaxr from "../Layout/Navbar";

const Blog = () => {
  return (
    <>

      <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Latest Blog Posts
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Blog post items go here */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Blog Post Title
              </h2>
              <p className="text-gray-700 mb-4">
                Summary or excerpt of the blog post goes here. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Read More
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Blog Post Title
              </h2>
              <p className="text-gray-700 mb-4">
                Summary or excerpt of the blog post goes here. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Read More
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Blog Post Title
              </h2>
              <p className="text-gray-700 mb-4">
                Summary or excerpt of the blog post goes here. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Read More
              </a>
            </div>
            {/* Add more blog post items as needed */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
