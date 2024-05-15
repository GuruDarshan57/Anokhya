import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Sponsor_route.css';
import simg1 from './Sponsor_images/cimg1.jpg';
import simg2 from './Sponsor_images/cimg2.jpg';
import simg3 from './Sponsor_images/cimg3.jpg';
import simg4 from './Sponsor_images/cimg4.jpg';
import simg5 from './Sponsor_images/cimg5.jpg';
import simg6 from './Sponsor_images/cimg6.jpg';
import simg7 from './Sponsor_images/cimg7.jpg';
import simg8 from './Sponsor_images/cimg8.jpg';

import bimg from '../../Assets/bottom.png'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
    return (
        <div className="spons_container" id='cocoa'>
            <div className="cocoa_head">
                <h2>Cocoa County</h2>
                <p>Crafting Rich Chocolates and Sparkling Jewels</p>
            </div>

            <div className='socialdiv'>
            <a href='https://www.instagram.com/cocoacounty?igsh=MWlhMDI0OW00MGJp&utm_source=qr' className='asocial'> <div className='igtext'>Instagram Handle</div></a>

            <div className="spons_links">
               
                        <a href="https://www.instagram.com/cocoacounty?igsh=MWlhMDI0OW00MGJp&utm_source=qr" target='_blank'>
                            <i class="fab fa-instagram" style={{color:'yellow'}}></i>
                        </a>
                  
            </div>
            
            </div>


            {/* <div className='swiper_head'>
                <h3>Discover Our Dazzling Collection</h3>
            </div> */}
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src={simg1} alt="slide 1" /></SwiperSlide>
                <SwiperSlide><img src={simg2} alt="slide 2" /></SwiperSlide>
                <SwiperSlide><img src={simg3} alt="slide 3" /></SwiperSlide>
                <SwiperSlide><img src={simg4} alt="slide 4" /></SwiperSlide>
                <SwiperSlide><img src={simg5} alt="slide 5" /></SwiperSlide>
                <SwiperSlide><img src={simg6} alt="slide 6" /></SwiperSlide>
                <SwiperSlide><img src={simg7} alt="slide 7" /></SwiperSlide>
                <SwiperSlide><img src={simg8} alt="slide 8" /></SwiperSlide>
            </Swiper>


            <div className="events_bottom">
                <img src={bimg} alt="" />
            </div>
        </div>
    );
}
