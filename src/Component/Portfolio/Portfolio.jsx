// Portfolio.jsx
import React from "react";

export default function Portfolio() {
  const images = [
    "/img1.png",
    "/img2.png",
    "/img3.png",
    "/img1.png",
    "/img2.png",
    "/img3.png",
  ];

  return (
    <div className="bg-gray-100 container m-auto  pt-[80px] py-12">
      <h1 className="text-3xl font-bold text-center mb-6">Portfolio</h1>

      {/* النجمة بين خطين */}
      <div className="flex items-center justify-center my-6">
        <div className="w-24 h-1 bg-gray-700 mr-3" />
        <span className="text-3xl">★</span>
        <div className="w-24 h-1 bg-gray-700 ml-3" />
      </div>

      {/* عرض الصور */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer"
          >
            {/* الصورة */}
            <img
              src={src}
              alt={`portfolio ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-green-500 bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* علامة + مفرغة */}
              <div className="relative w-20 h-20">
                {/* الخط الأفقي */}
                <div className="absolute top-1/2 left-0 w-full h-2 bg-white -translate-y-1/2"></div>
                {/* الخط العمودي */}
                <div className="absolute left-1/2 top-0 h-full w-2 bg-white -translate-x-1/2"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
