import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import avatar from "../../Images/avatar.png";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";

const BlogDetails = () => {
  const { id } = useParams();
  const [blogDetails, setBlogDetails] = useState({});
  console.log(blogDetails);

  useEffect(() => {
    fetch(`https://travel24-server-5y5g.vercel.app/blog-details/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlogDetails(data);
      });
  }, [id]);

  return (
    <div>
      <Navigation></Navigation>
      <div className="article-section w-full min-h-screen pb-5 bg-indigo-100 sm:px-6 lg:px-8">
        <div className="lg:grid lg:gap-4 2xl:gap-10 lg:grid-cols-6  max-w-7xl mx-auto px-2 py-10 ">
          <div className="lg:order-1 lg:col-span-4 rounded-lg">
            <div className=" bg-white max-w-full shadow-md rounded-md mb-10">
              <img
                className="w-6/6 md:w-6/6 rounded-t-md"
                src={blogDetails.imageURL}
                alt="Mountain"
              />
              <div>
                <div className="px-6 py-4">
                  <h1 className="font-bold text-2xl mb-2">
                    {blogDetails.placeName}
                  </h1>
                  <p className="text-gray-700 text-base">
                    {blogDetails.experience}
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
                        {blogDetails.WriterName}
                      </p>
                      <p className="text-gray-600">{blogDetails.Date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 lg:order-2  lg:col-span-2 rounded-lg shadow-xl pb-4 mb-5 lg:mb-0"></div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default BlogDetails;
