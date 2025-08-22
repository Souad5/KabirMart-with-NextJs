import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to My Store</h1>
        <p className="mt-4 text-lg text-gray-600">
          Discover amazing products at unbeatable prices!
        </p>
        <Link
          href="/productslist"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Shop Now
        </Link>
      </div>
      {/* Carousel Section */}
      <div className="carousel w-full mt-8">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="./1.jpg"
            className="w-full h-[550px] object-cover mx-auto rounded-2xl"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="./2.jpg"
            className="w-full h-[550px] object-cover mx-auto rounded-2xl"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="./3.jpg"
            className="w-full h-[550px] object-cover mx-auto rounded-2xl"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="./4.jpg"
            className="w-full h-[550px] object-cover mx-auto rounded-2xl"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
