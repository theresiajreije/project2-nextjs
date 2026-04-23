"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type AboutSlide = {
  title: string;
  description: string;
  backgroundImage: string;
};

const slides: AboutSlide[] = [
  {
    title: "About Us",
    description:
      "Learn more about our company, our values, and our mission to deliver excellent digital solutions.",
    backgroundImage: "/banner2.jpg",
  },
  {
    title: "Our Vision",
    description:
      "We aim to create modern digital experiences that help businesses grow and succeed.",
    backgroundImage: "/banner2.jpg",
  },
  {
    title: "Our Team",
    description:
      "Our team combines creativity, innovation, and technology to build high-quality solutions.",
    backgroundImage: "/banner2.jpg",
  },
];

export default function AboutSwiper() {
  return (
    <section className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="about-swiper min-h-[350px] sm:min-h-[420px] lg:min-h-[498px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative flex min-h-[350px] items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat px-6 text-center sm:min-h-[420px] lg:min-h-[498px]"
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
            >
              <div className="absolute inset-0 bg-black/50"></div>

              <div className="relative z-10 max-w-xl px-6 text-white sm:max-w-2xl lg:max-w-3xl">
                <h1 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
                  {slide.title}
                </h1>

                <p className="mx-auto max-w-lg text-sm leading-7 sm:max-w-xl sm:text-base lg:max-w-2xl lg:text-lg">
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}