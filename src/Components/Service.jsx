import image1 from "../assets/kaylaw2.jpeg";
import image2 from "../assets/kamil3.jpeg";
import image3 from "../assets/kay.jpeg";
import image4 from "../assets/kay5.jpeg";
import clip1 from "../assets/WhatsApp Video 2024-02-29 at 10.52.20 AM.mp4";
import clip2 from "../assets/WhatsApp Video 2024-02-29 at 10.52.23 AM.mp4";
import clip3 from "../assets/WhatsApp Video 2024-03-02 at 1.19.45 PM.mp4";
import clip4 from "../assets/WhatsApp Video 2024-03-02 at 1.19.44 PM.mp4";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import Card from "./Pictures/Card";
import { useState } from "react";
import { EffectCards } from 'swiper/modules';
import { Pagination } from 'swiper/modules'
import Video from "./Pictures/Video";

// 
const Service = () => {


  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="z-index:9999 color:blue' + className + '">' + (index + 1) + '</span>';
    },
  };

  const [photos] = useState([{ image: image1, location: "London, UK" }, { image: image2, location: "London, UK" }, { image: image3, location: "London, UK" }, { image: image4, location: "London, UK" }]);
  const videos = [{ video: clip1 }, { video: clip2 }, { video: clip3 }, { video: clip4 }];
  return (
    <>
      <section className=" bg-gray-100 p-4  max-sm:h-auto max-sm:flex-col h-[44rem] flex justify-between items-start py-10 max-sm:py-4 gap-5">

        <div className="relative h-[40rem]  bg-blue-950 rounded-lg px-5 max-sm:px-2 w-1/2 max-sm:w-full   flex max-sm:h-full justify-start items-center flex-col">
          <h1 className="text-white font-extrabold text-start mt-2  text-2xl max-sm:text-sm ">
            PHOTOS
          </h1>
          <p className="text-gray-400 mt-2">swipe left for more.</p>
          <div className="relative w-full h-full mt-10 p-4  max-sm:p-2">
            <Swiper

              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
              slidesPerView={1}

            >
              {photos.map((_) => (
                <SwiperSlide key={_.image} className="max-md:py-0 max-sm:p-4 w-4/5">
                  <Card image={_.image} location={_.location} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>


        </div>


        <div className="relative h-[40rem] p-5 max-sm:p-3 gap-4 bg-blue-950  rounded-lg px-5 max-sm:px-2 w-1/2 max-sm:w-full   flex max-sm:h-full justify-start items-center flex-col">
          <h1 className="text-white font-extrabold text-start mt-2  text-2xl max-sm:text-sm ">
            SPEECH CLIPS
          </h1>


          <p className="text-gray-400">swipe left for more.</p>
          <div className="relative w-full h-full">
            <Swiper
              swipeHandler={true}
              pagination={pagination}
              modules={[Pagination]}
              className="mySwiper"
            >
              {videos.map((_) => (
                <SwiperSlide key={_.video} className="max-md:py-0 relative  w-full">
                  <Video videoFile={_.video} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>




        </div>
      </section >
    </>
  );
};

export default Service;
