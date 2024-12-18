import React from "react";
import { IoMdClose, IoMdSend } from "react-icons/io";
import Logo from '/src/assets/img/Logo1.png'; // Update this path to the actual logo file

const Menu = ({ handleMenu }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-[100vh] bg-custom-gradient z-50 flex flex-col justify-center items-start p-14 md:p-24 lg:p-24 xl:p-24 2xl:p-24 3xl:p-24">
      {/* Close Menu Button */}
      <div
        onClick={handleMenu}
        className="absolute top-4 md:top-2 lg:top-2 left-4 md:left-6 lg:left-10 flex items-center z-10 cursor-pointer"
      >
        <div className="w-8 h-8 md:w-14 md:h-10 lg:w-12 lg:h-10 relative mr-2">
          <IoMdClose className="w-full h-full text-[#eef3f5]" />
        </div>
        <span className="text-[#eef3f5] text-[1rem] md:text-[1.7rem] lg:text-[1.5rem] font-medium font-['Roboto']">
          MENU
        </span>
      </div>

      {/* Menu Items */}
      <ul className="list-none  text-[#eef3f5] sm:text-[1rem] md:text-[1.5rem] lg:text-[2rem] font-medium font-['Roboto'] space-y-3">
        <li className="flex items-center gap-2 tracking-[.3rem]">
          <IoMdSend /> SOLUTIONS
        </li>
        <li className="flex items-center gap-2 tracking-[.3rem]">
          <IoMdSend /> SERVICES
        </li>
        <li className="flex items-center gap-2 tracking-[.3rem]">
          <IoMdSend /> TECHNOLOGY
        </li>
        <li className="flex items-center gap-2 tracking-[.3rem]">
          <IoMdSend /> INDUSTRIES SERVED
        </li>
        <li className="flex items-center gap-2 tracking-[.3rem]">
          <IoMdSend /> RESOURCES
        </li>
        <li className="flex items-center gap-2 tracking-[.3rem]">
          <IoMdSend /> ABOUT US
        </li>
        <li className="flex items-center gap-2 tracking-[.3rem]">
          <IoMdSend /> CONTACT US
        </li>
        <li className="flex items-center gap-2 tracking-[.3rem]">
          <IoMdSend /> CAREERS
        </li>
      </ul>

      {/* Logo */}
      <div className="absolute top-4 md:top-2 lg:top-2 right-4 md:right-6 lg:right-10 flex items-center z-10">
        <div className="w-30 h-5 md:w-30 md:h-10 lg:w-44 lg:h-10 relative">
          <img
            src={Logo}
            alt="SmartLeaven Technology"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
