import React, { useState } from "react";
import dvi from "../../../assets/img/dvi.png";
import Analyse from "../../../assets/img/Analyse.png";
import oper from "../../../assets/img/oper.png";
import Integrate from "../../../assets/img/Integrate.png";
import { ToastContainer, toast } from "react-toastify"; // Import Toastify components
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for Toastify

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
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [buttonText, setButtonText] = useState("Consult Us");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Handle button click to show input
  const handleButtonClick = () => {
    setIsInputVisible(true);
    setButtonText("Submit");
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Soon our team will get in touch with you!");
    setIsInputVisible(false);
    setButtonText("Consult Us");
    setPhoneNumber("");
  };

  return (
    <div className="bg-[#F0F0F0] min-h-screen w-full relative mt-6">
      {/* Top Section - Heading */}
      <div className="bg-solution-gradient xs:h-[50vh] sm:h-[90vh] md:h-[80vh] lg:h-[100vh] xl:h-[35vh] 2xl:h-[100vh] 3xl:h-[100vh] flex items-center px-10">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-10 xs:text-center">
          OUR SERVICES
        </h1>
      </div>

      {/* Cards Section */}
      <div className="relative w-11/12 mx-auto -mt-20 xs:mt-5 sm:mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex justify-center items-center mb-4">
              <img
                src={service.icon}
                alt={service.title}
                className="w-12 h-12"
              />
            </div>
            <h2 className="text-lg md:text-xl font-bold bg-gradient-to-r from-[#0048FF] to-[#D6008D] bg-clip-text text-transparent text-center mb-3">
              {service.title}
            </h2>
            <p className="text-sm md:text-base text-gray-600">
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
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-end w-full md:w-1/2 space-y-4"
          >
            <div className="relative w-full">
              <input
                type="tel"
                placeholder="Enter your number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className={`p-3 pl-12 border border-gray-300 rounded-lg shadow-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                  isInputVisible ? "opacity-100" : "opacity-0"
                }`}
              />
              <button
                type="button"
                onClick={handleButtonClick}
                className={`absolute right-0 top-0 bottom-0 bg-gradient-to-r from-[#0048FF] to-[#D6008D] text-white py-3 px-6 rounded-r-lg hover:opacity-90 transition-opacity duration-300 ${
                  isInputVisible ? "hidden" : "block"
                }`}
              >
                {buttonText}
              </button>
              {isInputVisible && (
                <button
                  type="submit"
                  className="absolute right-0 top-0 bottom-0 bg-gradient-to-r from-[#0048FF] to-[#D6008D] text-white py-3 px-6 rounded-r-lg hover:opacity-90 transition-opacity duration-300"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* ToastContainer for displaying toast notifications */}
      <ToastContainer />
    </div>
  );
};

export default Service;
