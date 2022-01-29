import axios from "axios";
import React, { useState } from "react";
import logo from "../../Images/black-01.jpg";
import "./Blog.css";
const BlogUploadForm = () => {
  const [data, setData] = useState({});
  const [sendSuccess, setSentSuccess] = useState(false);
  const [authError, setAuthError] = useState("");
  const [upload, setUpload] = useState(0);
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...data };
    newLoginData[field] = value;
    setData(newLoginData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const option = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total);
        console.log(`${loaded}kb of ${total}kb | ${percent}%`);
        if (percent <= 100) {
          setUpload(percent);
        }
      },
    };
    axios
      .post("https://still-bayou-58826.herokuapp.com/blog", data, option)
      .then((res) => {
        setUpload(0);
        setSentSuccess(true);
        console.log(res);
      })
      .catch((error) => {
        console.error("error", error);
        setAuthError(error);
      });
  };

  return (
    <div id="write-blog" className="article-section ">
      <div class="w-full">
        <div class="bg-gradient-to-b from-blue-800 to-blue-600 h-96"></div>
        <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
          <div class="bg-[#bdbdbd6c] w-full shadow rounded p-8 sm:p-12 -mt-72">
            <div>
              <img
                className="mx-auto w-2/6 h-2/6 rounded-full"
                src={logo}
                alt="Workflow"
              />
              <h2 className="mt-6 text-center text-xl md:text-3xl lg:text-3xl font-extrabold text-cyan-600 capitalize ">
                Share Your Experience With
                <br />
                <span className="uppercase text-4xl text-[#fef900]">
                  Travel24
                </span>
              </h2>
            </div>
            <form onSubmit={handleSubmit} method="post">
              <div class="md:flex items-center mt-12">
                <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                  <label class="font-semibold text-xl leading-none">
                    Writer Name<span className="text-yellow-500">*</span>
                  </label>
                  <input
                    name="WriterName"
                    type="text"
                    onBlur={handleOnBlur}
                    class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
                    required
                  />
                </div>
                <div class="w-full md:w-1/2 flex flex-col">
                  <label class="font-semibold  text-xl leading-none">
                    Date<span className="text-yellow-500">*</span>
                  </label>
                  <input
                    name="Date"
                    type="date"
                    onBlur={handleOnBlur}
                    class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
                    required
                  />
                </div>
              </div>
              <div class="w-full flex flex-col">
                <label class="font-semibold  text-xl leading-none">
                  Place Name<span className="text-yellow-500">*</span>
                </label>
                <input
                  name="placeName"
                  type="text"
                  onBlur={handleOnBlur}
                  class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
                  required
                />
              </div>
              <div class="md:flex items-center mt-8">
                <div class="w-full flex flex-col">
                  <label class="font-semibold text-xl leading-none">
                    Address<span className="text-yellow-500">*</span>
                  </label>
                  <input
                    name="address"
                    type="text"
                    onBlur={handleOnBlur}
                    class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
                    required
                  />
                </div>
              </div>
              <div class="md:flex items-center mt-8">
                <div class="w-full flex flex-col">
                  <label class="font-semibold text-xl leading-none">
                    Image Link<span className="text-yellow-500">*</span>
                  </label>
                  <input
                    name="imageURL"
                    type="text"
                    onBlur={handleOnBlur}
                    class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
                    required
                  />
                </div>
              </div>
              <div>
                <div class="w-full flex flex-col mt-8">
                  <label class="font-semibold text-xl leading-none">
                    Experience<span className="text-yellow-500">*</span>
                  </label>
                  <textarea
                    name="experience"
                    type="text"
                    onBlur={handleOnBlur}
                    class="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
                    required
                  ></textarea>
                </div>
              </div>
              <div class="flex items-center justify-center w-full">
                <button
                  type="submit"
                  class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogUploadForm;
