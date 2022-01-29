import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PendingBlog = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [blogId, setBlogId] = useState(" ");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  console.log(error);
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch("https://still-bayou-58826.herokuapp.com/blog/latest-blog")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setBlog(data);
      });
  }, []);

  const handleOnBlur = (id) => {
    setBlogId(id);
  };

  const handleLoginSubmit = (e) => {
    // e.preventDefault();
    console.log(e);
    const user = { e };
    console.log(e);
    fetch(
      "https://still-bayou-58826.herokuapp.com/blog/pending-blog/approved",
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setLoading(false);
          setSuccess(true);
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="flex flex-col article-section">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Writer Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <span className="sr-only">Delete</span>
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Approved</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {blog.map((blog) => (
                  <>
                    <tr key={blog._id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={blog.imageURL}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {`${blog.WriterName.slice(0, 30)}`}
                            </div>
                            <div className="text-sm text-gray-500">
                              {blog?.email ? `${blog.email}` : "Not exist"}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-wrap w-3/5">
                        <h1 className=" text-black text-xl">
                          {`${blog.placeName.slice(0, 40).concat("...")}`}
                        </h1>
                        <div className="text-sm text-gray-500">
                          <p className="text-gray-700">
                            {`${blog.experience.slice(0, 100).concat("..")}`}

                            <Link to="/" className="text-yellow-400">
                              Read More
                            </Link>
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Pending
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link to="#" className="text-[#fd0000]">
                          Delete
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => handleLoginSubmit(`${blog._id}`)}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Approved
                        </button>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingBlog;
