import React from "react";
import "./Blog.css";
import avatar from "../../Images/avatar.png";
import { Link } from "react-router-dom";

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
    id: "2",
    writer: "Sakibul Islam",
    imageUrl:
      "https://vromonsonggi.com/wp-content/uploads/2021/08/Debotakhum_Bandarban_%E0%A6%A6%E0%A7%87%E0%A6%AC%E0%A6%A4%E0%A6%BE%E0%A6%96%E0%A7%81%E0%A6%AE_%E0%A6%AC%E0%A6%BE%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A6%B0%E0%A6%AC%E0%A6%BE%E0%A6%A8.png",
    title: `
    দেবতাখুম - ভ্রমন গাইড,  দেবতাখুম রোয়াংছড়ি (বান্দরবান) যাওয়ার উপায় । Debotakhum - Bandarban । Rowangchori
    `,
    description: `
    দেবতাখুম  বান্দরবান জেলার রোয়াংছড়ি উপজেলায় অবস্থিত। বিশাল পাথুরে দুই পাহাড়ের মাঝখান দিয়ে বয়ে যাওয়া গভীর ঝিরিপথ, বুনো  পরিবেশে অসম্ভব ভালো লাগার মত একটি যায়গা । বড় বড় দুই পাহাড়ের মাঝখানের এই খুম (গর্ত/যেখানে পানি জমে) ভিতরের দিকে একদমই অন্ধকার। সূর্যের আলো খুবই সংকীর্ণ। স্থানীয়দের মতে প্রায় ৫০-৭০ ফুট গভীর এই খুমের দৈর্ঘ্য ৬০০ ফুট । দেবতাখুমের&nbsp; ট্রেইল যেমন সুন্দর তেমনি ভয়ংকর একটি ট্রেইল। বর্ষায় এই ট্রেইলের&nbsp; রূপে যেমন আপনার চোখ আটকাবে তেমনি পিচ্ছিল এবং ভয়ংকর পাথুরে পথে&nbsp; বড় ধরনের বিপদে পড়ার আশঙ্খা থেকে যায় পদে পদে। একধম নেটওয়ার্কের বাহিরে&nbsp; চার পাশে নিস্তব্ধ সুনসান নিরাবতা, যেন এক ভূতুড়ে পরিবেশ। পাথুরি পাহাড়ের&nbsp; ফোটা ফোটা পানির শব্দে আরো ভূতুড়ে মনে হবে পরিবেশটা। ঝিরির দুই পাশে&nbsp; বিশাল দুটি পাহাড়ের মাঝ দিয়েই চলে গেছে পথ যা ভেলায় করে পাড়ি দেয় পর্যটকেরা ।&nbsp;&nbsp; কিভাবে যাবেনঃ দেবতাখুম যেতে হলে বাংলাদেশের যেকোনো জায়গা থেকে প্রথমে আসতে হবে বান্দরবান। বান্দরবান থেকে রোয়াংছড়ি বাজার যাওয়ার জন্য বাস,চাঁদের গাড়ি , সিএনজি,`,
  },
  {
    id: "3",
    writer: "Mohibul Islam",
    imageUrl:
      "https://cdn.risingbd.com/media/imgAll/2019November/bg/Pic_320191128095504.jpg",
    title: `
  
ডিবির হাওর, জৈন্তাপুর - শাপলা বিল ভ্রমণ গাইড | Dibir haor sylhet travel guide

    `,
    description: `
    ডিবির হাওর সিলেটের জৈন্তাপুরে বাংলাদেশ ভারত সীমান্ত ঘেঁষা পাহাড়ের পাদদেশে অবস্থিত।  শহর থেকে ডিবির হাওরের দূরত্ব ৪২ কিলোমিটার। ইয়াম, ডিবি, হরফকাটা, কেন্দ্রী বিল নামে এখানে মোট চারটি বিল রয়েছে। বর্ষাকালের পর বিলগুলো শাপলার রাজ্যে পরিণত হয়। তখন সমস্ত বিল জুড়ে হাজার হাজার লাল শাপলা ছড়িয়ে থাকে। ভোরে হাজারো লাল শাপলা আলোকিত করে রাখে চারপাশ। প্রকৃতি যেন আপন ইচ্ছের মাধুরীতে লাল শাপলার হাসিতে বিলগুলোকে সাজিয়ে দেয় পরম মমতায়। যেকোনো ভ্রমণপিপাসুদের সারাজীবন মনে রাখার জন্য শাপলা বিলে একটি সকালই যথেষ্ট। ডিবির হাওর তাই শাপলা বিল নামেও সবার কাছে পরিচিতি লাভ করেছে। এছাড়া এখানে প্রায় দুইশত বছরের পুরাতন একটি ধ্বংসপ্রাপ্ত মন্দির রয়েছে। কথিত আছে, জৈন্তা রাজ্যের কোন এক রাজাকে ডিবির হাওরে কোথাও পানিতে ডুবিয়ে মারা হয়েছিল। ধারণা করা হয় তার স্মৃতির উদ্দেশ্যে এ মন্দির নির্মিত হয়েছে। এছাড়া হরফকাটা ও ডিবি বিলের মধ্যস্থলে রাজা রাম সিংহের সমাধিস্থল রয়েছে। শীতকালে এই হাওর জুড়ে অথিতি পাখিদের রাজত্ব শুরু হয়। তখন সাদাবক, জলময়ুরী ও পানকৌড়ি ইত্যাদি বিভিন্ন প্রজাতির অতিথি পাখির কলরবে মুখর হয়ে থাকে ডিবির হাওরের চারপাশ।`,
  },
];

const Blog = () => {
  return (
    <div id="blog" className="p-2 bg-gray-200">
      <article className="article-section py-10">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 grid grid-flow-row-dense lg:grid-cols-3 sm:grid-clos-1 gap-8">
          <div className="article col-span-2">
            {blog.map((blog) => (
              <div className=" bg-white flex flex-col md:flex-row lg:flex-row max-w-full shadow-md rounded-md mb-10">
                <img
                  class="w-6/6 md:w-2/6 rounded-t-md md:rounded-tr-none md:rounded-l-md"
                  src={blog.imageUrl}
                  alt="Mountain"
                />
                <div>
                  <div class="px-6 py-4">
                    <h1 class="font-bold text-2xl mb-2">{`${blog.title
                      .slice(0, 80)
                      .concat("...")}`}</h1>
                    <p class="text-gray-700 text-base">
                      {`${blog.description.slice(0, 250).concat("...")}`}

                      <Link to="/" class="text-yellow-400">
                        Read More
                      </Link>
                    </p>
                  </div>
                  <div class="px-6  pb-2">
                    <div class="flex items-center ">
                      <img
                        class="w-10 h-10 rounded-full mr-4"
                        src={avatar}
                        alt="Avatar of Writer"
                      />
                      <div class="text-sm">
                        <p class="text-gray-900 leading-none">{blog.writer}</p>
                        <p class="text-gray-600">Aug 18</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-span-2 lg:col-span-1 flex flex-col-reverse popular-article bg-white h-fit  w-full px-5 py-2 rounded-md ">
            {blog.map((blog) => (
              <div class="border-b-2 border-gray-300 first:border-none ">
                <div class=" py-2 ">
                  <h2 class="text-2xl font-bold mb-2 text-gray-800">
                    {`${blog.title.slice(0, 35).concat("...")}`}
                  </h2>
                  <p class="text-gray-700">
                    {`${blog.description.slice(0, 92).concat("..")}`}

                    <Link to="/" class="text-yellow-400">
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
