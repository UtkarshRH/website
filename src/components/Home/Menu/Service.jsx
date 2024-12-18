import React from "react";
import bgimage from "../../../assets/img/bgimage.png";

const servicesData = [
  {
    id: 1,
    title: "Device Management",
    description:
      "Effortlessly manage your IoT devices with advanced tools for configuration, remote monitoring, and firmware updates. Ensure optimal device performance and minimize downtime through a centralized management system.",
  },
  {
    id: 2,
    title: "System Integration",
    description:
      "Seamlessly connect legacy systems to modern IoT platforms for smooth, real-time operations. Achieve enhanced productivity by enabling interoperability between traditional equipment and cutting-edge technology.",
  },
  {
    id: 3,
    title: "Operations & Maintenance",
    description:
      "Streamline your industrial processes with predictive troubleshooting, proactive maintenance, and automated scheduling. Minimize equipment downtime and ensure the longevity of your assets through efficient operational practices.",
  },
  {
    id: 4,
    title: "Analytics and Insights",
    description:
      "Unlock the power of data with advanced tools to process and analyze industrial data. Transform raw information into actionable insights to improve decision-making, enhance productivity, and optimize performance.",
  },
];

const Service = () => {
  return (
    <div className="bg-[#F0F0F0] min-h-screen w-full relative">
      {/* Top Section - Heading */}
      <div className="bg-solution-gradient h-[25vh] flex items-center px-10">
        <h1 className="text-white text-4xl md:text-6xl font-bold">
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
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                {/* Replace with your icon */}
                <span className="text-2xl font-bold text-gray-600">✦</span>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-lg md:text-xl font-bold text-[#0048FF] text-center mb-2">
              {service.title}
            </h2>

            {/* Description */}
            <p className="text-sm md:text-base text-gray-600 text-center">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
