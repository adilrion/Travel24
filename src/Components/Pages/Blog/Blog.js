import React from "react";
import "./Blog.css";
import avatar from "../../Images/avatar.png";

const blog = [
  {
    id: "1",
    writer: "Mahmoub",
    imageUrl:
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    title: `সেন্টমার্টিন দ্বীপ ভ্রমন গাইড , কীভাবে যাবেন , কোথায় থাকবেন , কোথায় খাবেন? 
    
    Saint Martin Island Travel Guide , Chera Dip , Cox's Bazar vlog
    `,
    description: `
    বাংলাদেশের একমাত্র প্রবাল দ্বীপ এর অবস্থান বাংলাদেশের সর্ব দক্ষিণের জেলা কক্সবাজারের টেকনাফ উপজেলায়। মাত্র ৩ বর্গ কিলোমিটারের (পরিধি হিসেবে ১৪ কিলোমিটার এবং ছেঁড়াদ্বীপ সহ ১৮ কিলোমিটার) কিছু বেশি আয়তনের এই দ্বীপটির জনসংখ্যা প্রায় ৮০০০ হাজার। ১৮৯০-১৯০০ সালের দিকে মাত্র ১৩ টি পরিবারের ৫০ জন সদস্য প্রথম এই দ্বীপে বসতি গড়েন। স্থানীয় প্রায় সবাই তাদেরই বংশধর। কি দেখবেন সেন্ট মার্টিন ?
    ১ দ্বীপের পশ্চিম পাড়ের বীচ থেকে আপনি হয়তো দেখতে পাবেন আপনার জীবনের সেরা সূর্যাস্ত।

`,
  },
  {
    id: "1",
    writer: "Mahmoub",
    imageUrl:
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    title: `সেন্টমার্টিন দ্বীপ ভ্রমন গাইড , কীভাবে যাবেন , কোথায় থাকবেন , কোথায় খাবেন? 
    
    Saint Martin Island Travel Guide , Chera Dip , Cox's Bazar vlog
    `,
    description: `
    বাংলাদেশের একমাত্র প্রবাল দ্বীপ এর অবস্থান বাংলাদেশের সর্ব দক্ষিণের জেলা কক্সবাজারের টেকনাফ উপজেলায়। মাত্র ৩ বর্গ কিলোমিটারের (পরিধি হিসেবে ১৪ কিলোমিটার এবং ছেঁড়াদ্বীপ সহ ১৮ কিলোমিটার) কিছু বেশি আয়তনের এই দ্বীপটির জনসংখ্যা প্রায় ৮০০০ হাজার। ১৮৯০-১৯০০ সালের দিকে মাত্র ১৩ টি পরিবারের ৫০ জন সদস্য প্রথম এই দ্বীপে বসতি গড়েন। স্থানীয় প্রায় সবাই তাদেরই বংশধর। কি দেখবেন সেন্ট মার্টিন ?
    ১ দ্বীপের পশ্চিম পাড়ের বীচ থেকে আপনি হয়তো দেখতে পাবেন আপনার জীবনের সেরা সূর্যাস্ত।

`,
  },
];

const Blog = () => {
  // const { title } = blog;
  // const concatTitle = title.slice(0, 250).concat("...");

  return (
    <article className="article-section py-10">
      <div className=" max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 grid grid-flow-row-dense grid-cols-3 gap-4">
        <div className="article p-5 col-span-2">
          {blog.map((blog) => (
            <div className="flex rounded max-w-full shadow-md rounded-md mb-10">
              <img
                class="w-2/6 rounded-l-md"
                src={blog.imageUrl}
                alt="Mountain"
              />
              <div>
                <div class="px-6 py-4">
                  <h1 class="font-bold text-xl mb-2">{`${blog.title
                    .slice(0, 80)
                    .concat("...")}`}</h1>
                  <p class="text-gray-700 text-base">
                    {`${blog.description.slice(0, 250).concat("...")}`}
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <div class="flex items-center ">
                    <img
                      class="w-10 h-10 rounded-full mr-4"
                      src={avatar}
                      alt="Avatar of Writer"
                    />
                    <div class="text-sm">
                      <p class="text-gray-900 leading-none">John Smith</p>
                      <p class="text-gray-600">Aug 18</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="popular-article w-full">
          <h1>colomn section popular</h1>
        </div>
      </div>
    </article>
  );
};

export default Blog;
