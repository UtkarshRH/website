import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import bgimage from '../../../assets/img/bgimage.png'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const cardsData = [
  {
    id: 1,
    title: "Remote Asset Supervision",
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
      <div className="bg-[#F0F0F0] xs:h-[60vh] md:min-h-screen w-full relative xs:mt-0 md:mt-6 mb-6">
        {/* Height Changed for lg & md 4xl screen. */}
        <div className="bg-solution-gradient xs:h-[30vh] sm:h-[50vh] md:h-[50vh] lg:h-[50vh] xl:h-[50vh] 2xl:h-[50vh] 4xl:h-[50vh]">
          {/* Top Section - Heading */}
          <div className="absolute top-0 xs:left-3 md:left-10 text-left py-16">
            {/* Text Size Changed for lg, md & sm screen size. */}
            <h1 className="text-white 4xl:text-5xl 3xl:text-4xl 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-4xl font-bold">
              SOLUTIONS
            </h1>
          </div>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            // navigation
            // Added width for sm & 
            className="absolute xs:top-[35%] md:top-[30%] left-1/2 transform -translate-x-1/2 z-10 w-11/12 md:w-3/4 sm:w-3/5 lg:w-1/2 4xl:w-1/2 xs:h-[30vh] sm:h-[30vh] md:h-[40vh] lg:h-[50vh] xl:h-[50vh] 2xl:h-[30vh] 4xl:h-[40vh]"
          > 
            {cardsData.map((card) => (
              <SwiperSlide key={card.id}>
                <div className="bg-[#FFFFFF] opacity-90 shadow-lg rounded-lg p-8 sm:p-6 xs:p-4 flex flex-col items-center justify-center text-center">
                  <h2 className="bg-gradient-to-r from-[#0048FF] to-[#D6008D] bg-clip-text text-transparent font-bold text-2xl xs:text-xl sm:text-lg md:text-3xl mb-4 4xl:text-5xl">
                    {card.title}
                  </h2>
                  <div className="h-[2px] bg-gray-300 mb-4 w-full "></div>
                  {/* text Size changed for md & sm screen */}
                  <p className="text-[#483F3F] font-bold text-sm xs:text-sm sm:text-base md:text-base leading-normal 4xl:text-4xl">
                    {card.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Bottom Section - Background Image */}
          {/* Width & Height Changed For md & lg screen */}
          <div className="absolute bottom-5 right-0 w-[30%] h-[30%] sm:w-[20%] sm:h-[20%] md:w-[35%] md:h-[40%] lg:w-[35%] lg:h-[45%] ">
            <img
              src={bgimage}
              alt="Background"
              // ML Changed for md screen size
              className="w-[50vh] h-[55vh] object-contain ml-[10rem] sm:ml-[0rem] md:ml-[0rem] lg:ml-[2.2rem] hidden sm:block"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Solution;