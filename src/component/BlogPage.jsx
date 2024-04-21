import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";
import CategorySelection from "./CategorySelection";
import SideBar from "./SideBar";

const BlogPage = () => {
  const [Blog, SetBlog] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const pageSize = 12; //in one page
  const [category, setCategory] = useState(null);
  const [ActiveCategory, setActiveCategory] = useState(null);
  useEffect(() => {
    async function fetchBlogs() {
      let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;

      //filter by category::
      if (category) {
        url += `&category=${category}`;
      }
      const response = await fetch(url);
      const data = await response.json();

      SetBlog(data);
    }
    fetchBlogs();
  }, [pageSize, category, currentPage]);
  //page changing btn:::
  const handlePageChange = (PageNumber) => {
    setcurrentPage(PageNumber);
  };
  const handleCategoryChange = (category) => {
    setCategory(category);
    setcurrentPage(1);
    setActiveCategory(category);
  };
  return (
    <div>
      {/* {category section} */}
      <div>
        <CategorySelection
          onSelectCategory={handleCategoryChange}
          category={category}
          ActiveCategory={ActiveCategory}
        />
      </div>

      {/* {blogcard section} */}
      <div className="flex flex-col lg:flex-row gap-12">
        <BlogCard
          Blog={Blog}
          currentPage={currentPage}
          category={category}
          pageSize={pageSize}
        />
        <div>
          {/* {sidebar-componeents} */}
          <SideBar />
        </div>
      </div>

      {/* {pagination section} */}
      <div>
        <Pagination
          onPageChange={handlePageChange}
          currentPage={currentPage}
          Blog={Blog}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
};

export default BlogPage;
