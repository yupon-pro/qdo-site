"use client";

import Image, { StaticImageData } from "next/image";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import assembly from "../../../public/photos/assembly-photo.jpeg";
import winner from "../../../public/photos/winner.jpeg";
import takingMemo from "../../../public/photos/memo-taking.jpeg";
import coups from "../../../public/photos/coups.jpeg";
import judge from "../../../public/photos/judge.jpeg";
import finalRound from "../../../public/photos/final-round.jpeg";
import discussion from "../../../public/photos/discussion-terrace.jpeg";

const images = [assembly, winner, takingMemo, coups, judge, finalRound, discussion];

export default function HomeSlider() {
  const slideSettings = {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 5,
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
        delay: 3000,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{
        clickable: true,
      }}
      className="max-w-full"
    >
      {images.map((src: StaticImageData, index: number) => (
        <SwiperSlide key={index}>
          <Image
            src={src}
            width={1920}
            height={1038}
            loading="lazy"
            alt="Slider Image"
            sizes="(min-width: 1024px) 100vw, 60vw"
            className="object-cover aspect-square md:aspect-[initial]"
            placeholder="blur"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
