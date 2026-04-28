import React, { useState } from "react";
import { Rating, Avatar } from "@mui/material";
import ReviewModal from "../Layout/ReviewModel.jsx";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
const reviews = [
  {
    name: "Sabina Shaheen",
    date: "Aug 13, 2025",
    rating: 5,
    text: "Great service!"
  },
  {
    name: "Darul Quran",
    date: "Aug 12, 2025",
    rating: 1,
    text: "Not satisfied"
  },
  {
    name: "Best Pakistani",
    date: "Aug 1, 2025",
    rating: 5,
    text: "Amazing experience"
  },
  {
    name: "Darul Quran",
    date: "Aug 12, 2025",
    rating: 1,
    text: "Not satisfied"
  },
  {
    name: "Best Pakistani",
    date: "Aug 1, 2025",
    rating: 5,
    text: "Amazing experience"
  }
];

const Review = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-100 py-10 px-4 md:px-12 mt-16">
      
      {/* Top Right Button */}
      <div className="flex justify-end mb-6">
        {/* <button
          onClick={() => setOpen(true)}
          className="bg-red-800 text-white px-5 py-2 rounded-md shadow"
        >
          Write a Review
        </button> */}
                <button
                        onClick={() => setOpen(true)}
          className="bg-red-800 text-white px-5 py-2 rounded-md shadow"
                className=" relative mt-2 px-8 py-2 text-white text-sm font-medium overflow-hidden group border border-red-800 bg-transparent">
          <span className="absolute inset-0 bg-red-800 transform translate-x-0 group-hover:translate-x-full transition-transform duration-500 ease-in-out z-0"></span>
          <span className="relative z-10  group-hover:text-red-800 transition-colors duration-500">
          Write a Review
          </span>
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-start">
        
        {/* LEFT SIDE */}
        <div className="min-w-[200px]">
          <h2 className="text-2xl font-bold">Excellent</h2>

          <Rating value={4.5} precision={0.5} readOnly />

          <p className="text-gray-600 mt-1">
            Based on <span className="font-semibold">549 Reviews</span>
          </p>

          <div className="flex items-center gap-1 mt-2">
            <span className="text-blue-600 text-xl font-bold">G</span>
            <span className="text-red-500 text-xl font-bold">o</span>
            <span className="text-yellow-500 text-xl font-bold">o</span>
            <span className="text-blue-600 text-xl font-bold">g</span>
            <span className="text-green-600 text-xl font-bold">l</span>
            <span className="text-red-500 text-xl font-bold">e</span>
          </div>
        </div>

        {/* RIGHT SIDE CARDS */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide w-full">
  <Swiper
  slidesPerView={1}
  spaceBetween={16}
  navigation={true}
  pagination={{ clickable: true }}
  modules={[Pagination, Navigation]}
  breakpoints={{
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }}
  className="mySwiper"
>
  {reviews.map((item, index) => (
    <SwiperSlide key={index}>
      <div className="bg-white rounded-xl p-4 shadow h-full">
        
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Avatar>{item.name[0]}</Avatar>
            <div>
              <p className="font-semibold text-sm">{item.name}</p>
              <p className="text-xs text-gray-500">{item.date}</p>
            </div>
          </div>

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/09/IOS_Google_icon.png"
            className="w-5 h-5"
          />
        </div>

        <div className="mt-2">
          <Rating value={item.rating} readOnly size="small" />
        </div>

        <p className="text-sm text-gray-600 mt-2">
          {item.text}
        </p>

      </div>
    </SwiperSlide>
  ))}
</Swiper>
        
        </div>
      </div>

      {/* Bottom Link */}
      <div className="flex justify-end mt-6 items-center gap-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/09/IOS_Google_icon.png"
          className="w-5"
        />
        <span className="text-sm text-gray-700 cursor-pointer">
          Show all Reviews
        </span>
      </div>

      {/* Modal */}
      <ReviewModal open={open} onClose={() => setOpen(false)}  />
    </div>
  );
};

export default Review;