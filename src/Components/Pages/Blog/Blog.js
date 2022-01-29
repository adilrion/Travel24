import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../../Images/avatar.png";
import "./Blog.css";

const Blog = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [blog, setBlog] = useState([]);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const size = 5;

  useEffect(() => {
    fetch(
      `https://still-bayou-58826.herokuapp.com/blog?page=${page}&&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setBlog(data.result);
        const count = data.count;
        const pageCountNumber = Math.ceil(count / size);
        setPageCount(pageCountNumber);
      });
  }, [page]);

  const [latestBlog, setLatestBlog] = useState([]);
  useEffect(() => {
    fetch("https://still-bayou-58826.herokuapp.com/blog/latest-blog")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setLatestBlog(data);
      });
  }, []);

  return (
    <div id="blog" className="p-2 bg-gray-200">
      <article className="article-section py-10">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 grid grid-flow-row-dense lg:grid-cols-3 sm:grid-clos-1 gap-8">
          <div className="article col-span-2">
            {blog.map((blog) => (
              <div
                className=" bg-white flex flex-col md:flex-row lg:flex-row max-w-full shadow-md rounded-md mb-10"
                key={blog._id}
              >
                <img
                  className="w-6/6 md:w-2/6 rounded-t-md md:rounded-tr-none md:rounded-l-md"
                  src={blog.imageURL}
                  alt="Mountain"
                />
                <div>
                  <div className="px-6 py-4">
                    <h1 className="font-bold text-2xl mb-2">{`${blog.placeName
                      .slice(0, 80)
                      .concat("...")}`}</h1>
                    <p className="text-gray-700 text-base">
                      {`${blog.experience.slice(0, 250).concat("...")}`}

                      <Link
                        to={`/blog-details/${blog._id}`}
                        className="text-yellow-400"
                      >
                        Read More
                      </Link>
                    </p>
                  </div>
                  <div className="px-6  pb-2">
                    <div className="flex items-center ">
                      <img
                        className="w-10 h-10 rounded-full mr-4"
                        src={avatar}
                        alt="Avatar of Writer"
                      />
                      <div className="text-sm">
                        <p className="text-gray-900 leading-none">
                          {blog.WriterName}
                        </p>
                        <p className="text-gray-600">{blog.Date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <nav aria-label="pageCount navigation example">
              <ul className="inline-flex items-center -space-x-px">
                <li>
                  <button
                    onClick={() => setPage(page - 1)}
                    className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>
                {[...Array(pageCount).keys()].map((number) => (
                  <li>
                    <button
                      key={number}
                      onClick={() => setPage(number)}
                      className={
                        number === page
                          ? "py-2 px-3 leading-tight text-gray-500 bg-gray-700 border border-gray-300  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                          : "py-2 px-3 leading-tight text-gray-500 bg-black border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      }
                    >
                      {number + 1}
                    </button>
                  </li>
                ))}

                <li>
                  <button
                    onClick={() => setPage(page + 1)}
                    className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-span-2 lg:col-span-1 flex flex-col-reverse popular-article bg-white h-fit  w-full px-5 py-2 rounded-md ">
            {latestBlog.map((blog) => (
              <div
                className="border-b-2 border-gray-300 first:border-none "
                key={blog._id}
              >
                <div className=" py-2 ">
                  <h2 className="text-2xl font-bold mb-2 text-gray-800">
                    {`${blog.placeName.slice(0, 35).concat("...")}`}
                  </h2>
                  <p className="text-gray-700">
                    {`${blog.experience.slice(0, 92).concat("..")}`}

                    <Link
                      to={`/blog-details/${blog._id}`}
                      className="text-yellow-400"
                    >
                      Read More
                    </Link>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default Blog;
