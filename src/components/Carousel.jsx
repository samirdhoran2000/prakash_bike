'use client'

import React from 'react';
import './carousel.css'
import Image from 'next/image';
// Default theme
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from "@splidejs/react-splide";
const Carousel = () => {

  const imgHeight = 0//402;
  const imgWidth = 10000//269;
  return (
    <div className="flex justify-center carousel-main-container">
      <Splide
        aria-label="My Favorite Images"
        options={{
          rewind: true,
          type: "loop",
          // width: 400,
          gap: "4rem",
          autoplay: true,
          pauseOnHover: false,
        }}
      >
        <SplideSlide>
          <div className="img-container">
            <Image
              src="/boolet1.jpg"
              alt="Image 1"
              width={imgWidth}
              height={imgHeight}
              
            />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="img-container">
            <Image
              src="/honda1.jpg"
              alt="Image 1"
              width={imgWidth}
              height={imgHeight}
              
            />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="img-container">
            <Image
              src="/kawasaki2.jpg"
              alt="Image 1"
              width={imgWidth}
              height={imgHeight}
              
            />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="img-container">
            <Image
              src="/cbr1.jpg"
              alt="Image 1"
              width={imgWidth}
              height={imgHeight}
              
            />
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Carousel