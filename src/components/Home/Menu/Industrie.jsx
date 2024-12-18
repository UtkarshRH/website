import React from "react";
import manuf from "../../../assets/img/manuf.png";
import remote from "../../../assets/img/remote.png";

const industriesData = [
    {
        id: 1,
        icon: manuf,
        title: "Software-Driven Manufacturing",
        description: `Revolutionizing production processes with smart factories: <br/> 
                  Advanced ERP Systems: Streamline workflows and improve operational efficiency. <br/> 
                  Real-Time Supply Chain Management: Enhance visibility and responsiveness. <br/> 
                  Data-Driven Insights: Optimize production and reduce downtime.`,
    },
    {
        id: 2,
        icon: remote,
        title: "Remote Operations",
        description:
            `Redefining how businesses operate from anywhere: <br/> 
             Remote Monitoring: Seamlessly control and track critical assets. <br/> 
             Real-Time Data Accessibility: Enable informed, data-driven decisions. <br/> 
             IoT Connectivity: Ensure uninterrupted operations and connectivity.`,
    },
    {
        id: 3,
        icon: manuf,
        title: "Energy",
        description:`Driving innovation for a sustainable future: <br/> 
                     Smart Grid Management: Optimize energy distribution and usage. <br/> 
                     Renewable Energy Integration: Enhance efficiency and reduce dependency on non-renewables. <br/> 
                     Advanced Analytics: Minimize energy waste and maximize output. <br/> `,
    },
    {
        id: 4,
        icon: remote,
        title: "Transportation",
        description:`Advancing logistics and mobility solutions: <br/> 
                     Real-Time Fleet Tracking: Gain complete visibility of logistics operations. <br/> 
                     Optimized Routing and Scheduling: Reduce costs and improve delivery efficiency. <br/> 
                     Safety Monitoring: Enhance the reliability of transportation networks.`,
    },
];

const Industrie = () => {
    return (
        <div className="bg-[#F8FAFC] w-full min-h-screen">
            {/* Header Section */}
            <div className="bg-solution-gradient h-48 flex items-center">
                <h1 className="text-white text-3xl md:text-5xl font-bold uppercase ml-10">
                    Industries Served
                </h1>
            </div>

            {/* Intro Section */}
            <div className="text-center mt-10 px-6 md:px-20">
                <h2 className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-[#0048FF] to-[#D6008D] bg-clip-text text-transparent mb-2 font-[roboto]">
                    Driving Innovation Across Industries with Tailored Technology
                    Solutions.
                </h2>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mt-12 px-12 md:px-48">
                {industriesData.map((industry,index) => (
                    <div
                        key={industry.id}
                        className={`flex bg-white shadow-lg hover:shadow-xl transition duration-300 p-6  ${
                        index % 2 === 0 ? "rounded-r-full" : "rounded-l-full"
                        }`}
                    >
                        {/* Left Section: Content */}
                        <div className="w-2/3 pl-10 flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-[#002B9A] mb-2">
                                {industry.title}
                            </h3>
                            <p
                                className="text-gray-600"
                                dangerouslySetInnerHTML={{ __html: industry.description }}
                            ></p>
                            <button className="mt-4 text-[#0048FF] font-medium hover:underline">
                                Learn More →
                            </button>
                        </div>

                        {/* Right Section: Icon */}
                        <div className="w-1/3 flex items-left justify-start">
                            <img
                                src={industry.icon}
                                alt={industry.title}
                                className="w-[30vh] h-[30vh]"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Industrie;
