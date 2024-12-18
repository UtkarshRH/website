import React from "react";
import dvi from "../../../assets/img/dvi.png";
import Analyse from "../../../assets/img/Analyse.png";
import oper from "../../../assets/img/oper.png";
import Integrate from "../../../assets/img/Integrate.png";

const servicesData = [
  {
    id: 1,
    icon: dvi,
    title: "Device Management",
    description:
      "Effortlessly manage your IoT devices with advanced tools for configuration, remote monitoring, and firmware updates. Ensure optimal device performance and minimize downtime through a centralized management system.",
  },
  {
    id: 2,
    icon: Integrate,
    title: "System Integration",
    description:
      "Seamlessly connect legacy systems to modern IoT platforms for smooth, real-time operations. Achieve enhanced productivity by enabling interoperability between traditional equipment and cutting-edge technology.",
  },
  {
    id: 3,
    icon: oper,
    title: "Smart Maintenance",
    description:
      "Streamline your industrial processes with predictive troubleshooting, proactive maintenance, and automated scheduling. Minimize equipment downtime and ensure the longevity of your assets through efficient operational practices.",
  },
  {
    id: 4,
    icon: Analyse,
    title: "Analytics and Insights",
    description:
      "Unlock the power of data with advanced tools to process and analyze industrial data. Transform raw information into actionable insights to improve decision-making, enhance productivity, and optimize performance.",
  },
];

const Service = () => {
  return (
    <div className="bg-[#F0F0F0] min-h-screen w-full relative">
      {/* Top Section - Heading */}
      <div className="bg-solution-gradient sm:h-[100vh] md:h-[130vh] lg:h-[130vh] xl:h-[35vh] 2xl:h-[100vh] 3xl:h-[100vh] flex items-center px-10">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-10">
          OUR SERVICES
        </h1>
      </div>

      {/* Cards Section */}
      <div className="relative w-11/12 mx-auto -mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Icon Placeholder */}
            <div className="flex justify-center items-center mb-4">
              <img
                src={service.icon}
                alt={service.title}
                className="w-12 h-12"
              />
            </div>

            {/* Title */}
            <h2 className="text-lg md:text-xl font-bold bg-gradient-to-r from-[#0048FF] to-[#D6008D] bg-clip-text text-transparent text-center mb-3">
              {service.title}
            </h2>

            {/* Description */}
            <p className="text-sm md:text-base text-gray-600 text-pretty">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Connect Section */}
      <div className="mt-10 w-11/12 mx-auto">
        <div className="flex flex-col items-end">
          <p className="text-gray-700 text-lg md:text-xl mb-4">
            Need more details about our services? <br />
            <span className="font-semibold text-gray-900">
              Let's connect and bring your ideas to life!
            </span>
          </p>
          <button className="bg-gradient-to-r from-[#0048FF] to-[#D6008D] text-white py-2 px-6 rounded-full hover:opacity-90 transition-opacity duration-300">
            Consult Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
