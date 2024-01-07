import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import LangItem from '../LangItem/LangItem.jsx';



const LangSwiper = () => { 
  return (
    <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={14}
          slidesPerView={1}
          loop={true}
          navigation
          speed={1300}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1440: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide><LangItem/></SwiperSlide>
          <SwiperSlide><LangItem/></SwiperSlide>
          <SwiperSlide><LangItem/></SwiperSlide>
          <SwiperSlide><LangItem/></SwiperSlide>
          <SwiperSlide><LangItem/></SwiperSlide>
          <SwiperSlide><LangItem/></SwiperSlide>
          <SwiperSlide><LangItem/></SwiperSlide>
          <SwiperSlide><LangItem/></SwiperSlide>
        
        </Swiper>
  )
}

export default LangSwiper;