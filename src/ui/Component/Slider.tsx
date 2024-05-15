"use client";

import Image from "next/image";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/photos/assembly-photo.JPG",
  "/photos/winner.JPG",
  "/photos/memo-taking.JPG",
  "/photos/coups.JPG",
  "/photos/judge.JPG",
  "/photos/final-round.JPG",
  "/photos/discussion-terrace.JPG",
];

export default function HomeSlider() {
  const slideSettings = {
    0: {
      slidesPerView: 1.4,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      breakpoints={slideSettings}
      slidesPerView={"auto"}
      centeredSlides={true}
      loop={true}
      speed={1000}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{
        clickable: true,
      }}
      className="max-w-full"
    >
      {images.map((src: string, index: number) => (
        <SwiperSlide key={index}>
          <Image
            src={src}
            width={1920}
            height={1038}
            alt="Slider Image"
            sizes="(min-width: 1024px) 100vw, 60vw"
            className="object-cover aspect-square md:aspect-[initial]"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
