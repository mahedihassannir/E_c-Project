// swiper all imports


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';



/**
 * 
 * 
 * name : banner section
 * coder : Mahedi Hassan 
 * 
 */

const Banner = () => {
    return (
        <div className="w-full   bg-gray-200 ">


            <div className="-mt-5">
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"

                >
                    <SwiperSlide className=''>

                        <img className=' h-[500px] mx-auto' src="https://icms-image.slatic.net/images/ims-web/349814dd-3762-4ac0-bfd7-f094e2cf111e.jpg_1200x1200.jpg" alt="" />

                    </SwiperSlide>

                    <SwiperSlide>

                        <img className=' h-[500px] mx-auto' src="https://icms-image.slatic.net/images/ims-web/f0d16497-d654-4d0e-948a-a1d30929c433.jpg" alt="" />

                    </SwiperSlide>

                    <SwiperSlide className=''>

                        <img className='h-[500px] mx-auto' src="https://icms-image.slatic.net/images/ims-web/28492172-b922-42c2-b995-a5bb4967ad67.jpg" alt="" />

                    </SwiperSlide>
                    <SwiperSlide>

                        <img className=' h-[500px] mx-auto' src="https://icms-image.slatic.net/images/ims-web/d8798978-4074-47e3-919a-0113511b9d93.jpg" alt="" />

                    </SwiperSlide>
                    <SwiperSlide>

                        <img className=' h-[500px] mx-auto' src="https://icms-image.slatic.net/images/ims-web/d6c30d4e-485c-4d00-aea5-05e58485a754.jpg" alt="" />

                    </SwiperSlide>
                    <SwiperSlide>

                        <img className=' h-[500px] mx-auto' src="https://icms-image.slatic.net/images/ims-web/61146024-ad1b-49a1-889b-52f7b20d4170.jpg" alt="" />

                    </SwiperSlide>
                    <SwiperSlide>

                        <img className=' h-[500px] mx-auto' src="https://icms-image.slatic.net/images/ims-web/a50bd375-1282-4636-80ae-c61c26c1c6b2.jpg" alt="" />

                    </SwiperSlide>
                    <SwiperSlide>

                        <img className=' h-[500px] mx-auto' src="https://icms-image.slatic.net/images/ims-web/d9a9d4c8-b10b-4439-8e0e-bdffd5f1c85a.jpg" alt="" />

                    </SwiperSlide>
                    <SwiperSlide>

                        <img className=' h-[500px] mx-auto' src="https://icms-image.slatic.net/images/ims-web/c1ebb44f-da15-48c6-a0bc-420abf8ef2b4.jpg" alt="" />

                    </SwiperSlide>

                </Swiper>

            </div>
        </div>
    );
};

export default Banner;