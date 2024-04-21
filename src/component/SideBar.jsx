import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setPopular(data.slice(0, 15)));
  }, []);
  return (
    <div>
      <div>
        <h3 className="text-2xl font-semibold px-4 ">Latest Blogs</h3>
        <div>
          {popular.slice(0, 5).map((blog) => (
            <div
              key={blog.id}
              className="my-5 border-b-2 border-spacing-2 px-4"
            >
              <h4>{blog.title}</h4>
              <Link
                to="/"
                className="font-base pb-2 hover:text-orange-500 inline-flex items-center py-1"
              >
                Read more
                <FaArrowRight className="mt-1 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* {popular-blogs} */}
      <div>
        <h3 className="text-2xl font-semibold px-4 mt-20">Popular Blogs</h3>
        <div>
          {popular.slice(0, 5).map((blog) => (
            <div
              key={blog.id}
              className="my-5 border-b-2 border-spacing-2 px-4"
            >
              <h4>{blog.title}</h4>
              <Link
                to="/"
                className="font-base pb-2 hover:text-orange-500 inline-flex items-center py-1"
              >
                Read more
                <FaArrowRight className="mt-1 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
