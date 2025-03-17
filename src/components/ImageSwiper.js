import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import '../styles/ImageSwiper.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ImageSwiper = ({ images }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: false }}
    >
      {images.map((image) => (
        <SwiperSlide key={image}>
          <img src={image} alt="image" className="swiper-image" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSwiper;
