import React from 'react';
import './header.css';
import bg_1  from './imgs/1.jpg';
import bg_2  from './imgs/2.jpg';
import bg_3  from './imgs/3.jpg';
import bg_4  from './imgs/4.jpg';
import { Carousel } from 'antd';
function Header(){
  const carouselSettings = {
   
    slidesToShow: 1,
    slidesToScroll: 1
  };
    return(
      <Carousel autoplay {...carouselSettings}>
      <div>
        <div className="image-bg">
          <img src={bg_1} alt=""></img>
        </div>
      </div>
      <div>
        <div className="image-bg">
          <img src={bg_2} alt=""></img>
        </div>
      </div>
      <div>
        <div className="image-bg">
          <img src={bg_3} alt=""></img>
        </div>
      </div>
      <div>
        <div className="image-bg">
          <img src={bg_4} alt=""></img>
        </div>
      </div>
    </Carousel>
    )
}
export default Header
