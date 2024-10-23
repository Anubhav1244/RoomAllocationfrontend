import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './staffpics.css'
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import  images from "../data/sliderimage"


// Import other images similarly

const InfiniteCarousel = () => {
  console.log(images);
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false
      }}
      loop={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 7,
          spaceBetween: 10,
        },
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="border-[2px] rounded-lg p-4 h-[44vh] flex flex-col gap-5 items-center">
            <img src={image.src} alt={image.alt} className="aspect-square rounded-full w-[110px] h-[110px]" />
            <div className="text-center">
              <h5 className="font-semibold">{image.name}</h5>
              <p className="">{image.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default InfiniteCarousel;
