import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import LangItem from '../LangItem/LangItem.jsx';
import british from '../../assets/images/BritishFlag.png'
import german from '../../assets/images/GermanFlag.png'
import italian from '../../assets/images/ItalianFlag.png'
import french from '../../assets/images/FrenchFlag.png'



const LangSwiper = () => { 
  return (
    <Swiper
          style={{width: '100%', alignItems: 'center'}}
          modules={[Navigation, Autoplay]}
          spaceBetween={2}
          slidesPerView={1}
          loop={true}
          navigation
          speed={1300}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
      breakpoints={{
          425: {
                slidesPerView: 2,
              },
            1450: {
              slidesPerView: 4,
              spaceBetween: 14
            },
          }}
        >
          <SwiperSlide><LangItem language='english' flag={british}/></SwiperSlide>
          <SwiperSlide><LangItem flag={german}/></SwiperSlide>
          <SwiperSlide><LangItem flag={italian}/></SwiperSlide>
          <SwiperSlide><LangItem flag={french}/></SwiperSlide>
          <SwiperSlide><LangItem language='english' flag={british}/></SwiperSlide>
          <SwiperSlide><LangItem flag={german}/></SwiperSlide>
          <SwiperSlide><LangItem flag={italian}/></SwiperSlide>
          <SwiperSlide><LangItem flag={french}/></SwiperSlide>
        
        </Swiper>
  )
}

export default LangSwiper;