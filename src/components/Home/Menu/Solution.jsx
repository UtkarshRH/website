import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const cardsData = [
  {
    id: 1,
    title: "Remote Control & Monitoring of Assets",
    description:
      "Empower your operations with seamless remote control and real-time monitoring of critical assets. Our solutions enable you to manage and oversee your equipment from anywhere, ensuring efficiency and reducing operational risks.",
  },
  {
    id: 2,
    title: "Predictive Maintenance Solutions",
    description:
      "Empower your operations with seamless remote control and real-time monitoring of critical assets. Our solutions enable you to manage and oversee your equipment from anywhere, ensuring efficiency and reducing operational risks.",
  },
  {
    id: 3,
    title: "Energy Management Systems",
    description:
      "Empower your operations with seamless remote control and real-time monitoring of critical assets. Our solutions enable you to manage and oversee your equipment from anywhere, ensuring efficiency and reducing operational risks.",
  },
  {
    id: 4,
    title: "Asset Performance Monitoring",
    description:
      "Empower your operations with seamless remote control and real-time monitoring of critical assets. Our solutions enable you to manage and oversee your equipment from anywhere, ensuring efficiency and reducing operational risks.",
  },
  {
    id: 4,
    title: "Condition Monitoring",
    description:
      "Empower your operations with seamless remote control and real-time monitoring of critical assets. Our solutions enable you to manage and oversee your equipment from anywhere, ensuring efficiency and reducing operational risks.",
  },
];

const Solution = () => {
  return (
    <>
      <div className="bg-[#F0F0F0] min-h-screen w-full relative">
        <div className="bg-solution-gradient sm:h-[100vh] md:h-[130vh] lg:h-[130vh] xl:h-[50vh] 2xl:h-[100vh] 3xl:h-[100vh]">
          {/* Top Section - Heading */}
          <div className="absolute top-0 left-10 text-left py-16">
            <h1 className="text-white text-4xl md:text-6xl font-bold">
              SOLUTIONS
            </h1>
          </div>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            // navigation
            className="absolute top-[30%] left-1/2 transform -translate-x-1/2 z-10 w-11/12 md:w-3/4 lg:w-1/2"
          >
            {cardsData.map((card) => (
              <SwiperSlide key={card.id}>
                <div className="bg-[#FFFFFF] opacity-90 shadow-lg rounded-lg p-8 flex flex-col items-center justify-center text-center">
                  <h2 className="bg-gradient-to-r from-[#0048FF] to-[#D6008D] bg-clip-text text-transparent font-bold text-2xl md:text-3xl mb-4">
                    {card.title}
                  </h2>
                  <div className="h-[2px] bg-gray-300 mb-4 w-full"></div>
                  <p className="text-[#483F3F] font-bold text-sm md:text-lg leading-normal">
                    {card.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Bottom Section - Background Image */}
          <div className="absolute bottom-5 right-0 w-[30%] h-[30%] md:w-[40%] md:h-[40%] lg:w-[37%] lg:h-[47%] ">
            <img
              src={bgimage}
              alt="Background"
              className="w-[50vh] h-[55vh] object-contain ml-[10rem]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Solution;
