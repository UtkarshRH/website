import React from "react";
import manuf from "../../../assets/img/manuf.png";
import remote from "../../../assets/img/remote.png";
import energy from "../../../assets/img/energy.png";
import transport from "../../../assets/img/transport.png";

const industriesData = [
    {
        id: 1,
        icon: manuf,
        title: "Software-Driven Manufacturing",
        description: `
            Revolutionizing production processes with smart factories: 
            <ul style="list-style-type: disc; padding-left: 20px;">
                <li>Advanced ERP Systems: Streamline workflows and improve operational efficiency.</li>
                <li>Real-Time Supply Chain Management: Enhance visibility and responsiveness.</li>
                <li>Data-Driven Insights: Optimize production and reduce downtime.</li>
            </ul>
        `,
    },
    {
        id: 2,
        icon: remote,
        title: "Remote Operations",
        description: `
            Redefining how businesses operate from anywhere: 
            <ul style="list-style-type: disc; padding-left: 20px;">
                <li>Remote Monitoring: Seamlessly control and track critical assets.</li>
                <li>Real-Time Data Accessibility: Enable informed, data-driven decisions.</li>
                <li>IoT Connectivity: Ensure uninterrupted operations and connectivity.</li>
            </ul>
        `,
    },
    {
        id: 3,
        icon: energy,
        title: "Energy",
        description: `
            Driving innovation for a sustainable future: 
            <ul style="list-style-type: disc; padding-left: 20px;">
                <li>Smart Grid Management: Optimize energy distribution and usage.</li>
                <li>Renewable Energy Integration: Enhance efficiency and reduce dependency on non-renewables.</li>
                <li>Advanced Analytics: Minimize energy waste and maximize output.</li>
            </ul>
        `,
    },
    {
        id: 4,
        icon: transport,
        title: "Transportation",
        description: `
            Advancing logistics and mobility solutions: 
            <ul style="list-style-type: disc; padding-left: 20px;">
                <li>Real-Time Fleet Tracking: Gain complete visibility of logistics operations.</li>
                <li>Optimized Routing and Scheduling: Reduce costs and improve delivery efficiency.</li>
                <li>Safety Monitoring: Enhance the reliability of transportation networks.</li>
            </ul>
        `,
    },
];

const Industrie = () => {
    return (
        <div className="bg-[#EDEFF2] w-full min-h-screen md:mt-6">
            {/* Header Section */}
            <div className="bg-solution-gradient h-60 flex items-center">
                <h1 className="text-white text-3xl md:text-5xl font-bold uppercase ml-4">
                    Industries Served
                </h1>
            </div>

            {/* Intro Section */}
            <div className="text-center mt-10 px-6 md:px-20">
                <h2 className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-[#0048FF] to-[#D6008D] bg-clip-text text-transparent mb-2 font-[roboto]">
                    Driving Innovation Across Industries with Tailored Technology Solutions.
                </h2>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 gap-8 mt-12 py-5 px-12 md:px-20 sm:px-8 xs:px-4">
                {industriesData.map((industry, index) => (
                    <div
                        key={industry.id}
                        className={`flex shadow-lg hover:shadow-2xl transition duration-300 p-6 ${
                            index % 2 === 0
                                ? "bg-[#FFF5FF] md:rounded-r-full flex-col sm:flex-row"
                                : "bg-[#F5F8FF] md:rounded-l-full flex-col sm:flex-row-reverse"
                        }`}
                    >
                        {/* Content Section */}
                        <div className="w-full sm:w-2/3 flex flex-col justify-center">
                            {/* Image for sm/xs screens */}
                            <div className="sm:hidden flex justify-center items-center mb-4">
                                <img
                                    src={industry.icon}
                                    alt={industry.title}
                                    className="w-32 h-32 object-contain"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-[#002B9A] mb-2">
                                {industry.title}
                            </h3>
                            <div
                                className="text-gray-600 pl-4"
                                style={{ lineHeight: "1.8em" }}
                                dangerouslySetInnerHTML={{ __html: industry.description }}
                            ></div>
                            <button className="h-[8vh] w-[25vh] mt-4 text-[#0048FF] font-medium hover:bg-[#0048FF] hover:text-white hover:shadow-2xl transition duration-300 border-2 border-[#0048FF] rounded-full py-2 px-6">
                                Learn More
                            </button>
                        </div>

                        {/* Image for md and larger screens */}
                        <div className="hidden sm:flex w-full sm:w-1/3 justify-center items-center">
                            <img
                                src={industry.icon}
                                alt={industry.title}
                                className="w-64 h-64 object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Industrie;