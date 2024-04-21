import React from "react";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
const BlogCard = ({ Blog, currentPage, category, pageSize }) => {
  const filteredBlogs = Blog.filter(
    (Blog) => !category || Blog.category === category
  ).slice((currentPage - 1) * pageSize, currentPage * pageSize);
  console.log(filteredBlogs);
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
      {filteredBlogs.map((Blog) => (
        <Link
          to={`/blogs/${Blog.id}`}
          key={Blog.id}
          className="p-5 shadow-lg rounded cursor-pointer"
        >
          <div>
            <img src={Blog.image} alt="" className="w-full" />
          </div>
          <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer">
            {Blog.title}
          </h3>
          <p className="mb-2 text-sm  text-gray-600">
            <FaUser className="inline-flex items-center mr-2" />
            {Blog.author}
          </p>
          <p className="text-sm text-gray-500">
            Published:{Blog.published_date}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default BlogCard;
