import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../../Images/avatar.png";
import "./Blog.css";

const Blog = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/blog")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setBlog(data);
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

                      <Link to="/" className="text-yellow-400">
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
          </div>

          <div className="col-span-2 lg:col-span-1 flex flex-col-reverse popular-article bg-white h-fit  w-full px-5 py-2 rounded-md ">
            {blog.map((blog) => (
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

                    <Link to="/" className="text-yellow-400">
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
