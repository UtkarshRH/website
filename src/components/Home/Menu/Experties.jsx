import React from "react";
import { FaInternetExplorer, FaRobot, FaPeopleArrows } from "react-icons/fa";
import iiot from "../../../assets/img/iiot.png";
import pmss from "../../../assets/img/pmss.png"
import mspp from "../../../assets/img/MSPP.png"
import aii from "../../../assets/img/aii.png"
import hrmss from "../../../assets/img/hrmss.png"
import { MdFactory, MdMonitor } from "react-icons/md";
import Typewriter from "typewriter-effect"; // Install this package

const expertiseData = [
  {
    id: 1,
    icon: iiot,
    title: "Internet of Things (IoT)",
    description:
      "At SmartLeaven Technology Pvt Ltd, we connect physical devices to digital ecosystems, enabling smarter automation and monitoring. Our IoT solutions optimize operations, reduce costs, and enhance decision-making. We help industries like manufacturing and smart cities implement scalable IoT systems. Real-time data analytics ensures productivity and operational efficiency. Transform your assets into intelligent, connected devices with our IoT expertise.",
  },
  {
    id: 2,
    icon: aii,
    title: "Artificial Intelligence (AI)",
    description:
      "We leverage AI at SmartLeaven Technology Pvt Ltd to drive innovation and automation across industries. Our solutions use machine learning and deep learning to enhance decision-making and optimize processes. From AI-driven chatbots to supply chain optimization, we deliver intelligent solutions. AI helps businesses improve efficiency and reduce operational risks. Harness AI to transform your business and stay competitive in a fast-paced market.",
  },
  {
    id: 3,
    icon: hrmss,
    title: "Human Resource Management System (HRMS)",
    description:
      "Our HRMS at SmartLeaven Technology Pvt Ltd streamlines recruitment, payroll, and performance tracking. We help businesses automate HR processes, improve employee engagement, and enhance productivity. With self-service features and detailed reporting, we simplify HR management. Our platform empowers organizations to make data-driven HR decisions. Revolutionize your HR operations with our innovative HRMS solutions.",
  },
  {
    id: 4,
    icon: mspp,
    title: "Manufacturing Solutions Platform (MSP)",
    description:
      "At SmartLeaven Technology Pvt Ltd, our MSP enhances manufacturing efficiency with automation, IoT, and real-time data. We offer solutions for smart manufacturing and Industry 4.0 compliance. Our platform helps reduce downtime, improve production, and optimize resource usage. MSP provides the tools to monitor and improve production performance. Streamline your manufacturing processes with our advanced MSP solutions.",
  },
  {
    id: 5,
    icon: pmss,
    title: "Production Monitoring System (PMS)",
    description:
      "Our PMS at SmartLeaven Technology Pvt Ltd enables businesses to track production metrics like throughput, downtime, and OEE. We help optimize operations through real-time data and advanced analytics. PMS allows early detection of inefficiencies and quality issues, reducing waste. It enhances equipment utilization and operational efficiency. Monitor and improve your production performance with our comprehensive PMS tools.",
  },
];

const Expertise = () => {
  return (
    <div className="bg-[#F8FAFC] w-full min-h-screen mt-6 mb-6">
      {/* Top Section */}
      <div className="bg-solution-gradient h-60 flex items-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold uppercase ml-10">
          Our Expertise
        </h1>
      </div>

      {/* Title Section */}
      <div className="text-center mt-10 px-6 md:px-20">
        <h2 className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-[#0048FF] to-[#D6008D] bg-clip-text text-transparent mb-2 font-[roboto]">
          Empowering Innovation With Cutting-Edge Technologies For a <br /> Smarter Future.
        </h2>
      </div>

      {/* Cards Section */}
      {/* Added padding left to right for md screen size */}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-14 mt-12 md:px-10" style={{padding: "15px"}}>
        {expertiseData.map((item,index) => (
          <div
          key={item.id}
          className={`shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 ${
            index % 3 === 0 ? "bg-[#FFF5FF]" : "bg-[#F5F8FF]"
          }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <img src={item.icon} alt={item.title} />
              {/* text size added for md screen size */}
              <h3 className="text-xl md:text-lg font-bold text-[#002B9A]">
                {item.title}
                <br />
              </h3>
            </div>
            <p className="text-gray-600 text-sm md:text-base">
              {item.description}
            </p>
          </div>
        ))}
        {/* Bottom Visual Section with Typing Animation */}
        {/* Added Margin bottom for sm & md screen size */}
      <div className="flex justify-center mt-10 relative mb-20 sm:mb-18 md:mb-12">
        {/* Background Animation */}
        <div className="absolute inset-0 animate-pulse"></div>

        {/* Content Over Background */}
        <div className="relative z-10 text-center bg-gradient-to-r text-[#002B9A] px-6 md:px-20">
          <h3 className="text-3xl md:text-4xl font-bold  mb-4">
            <Typewriter
              options={{
                strings: [
                  "Driving Innovation with IoT, AI, and Automation",
                  "Transforming Your Business with Industry 4.0 Technology",
                ],
                autoStart: true,
                loop: true,
                delay: 100,
              }}
            />
          </h3>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Expertise;