import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import Alsayyed from "../../img/alsayyed.png";
import HOC from "../../img/hoc.png";
import Gym from '../../img/gym.png';
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': '', marginTop:'100px'}}>Recent Projects</span>
      <span className="mt-5">Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt=""  height={600}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" height={600}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Alsayyed} alt="" height={600}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" height={600}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Gym} alt="" height={600} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" height={300} />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Portfolio;
