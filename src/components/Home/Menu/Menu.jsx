import React from "react";
import { IoMdClose, IoMdSend } from "react-icons/io";
import Logo from '/src/assets/img/Logo1.png'; // Ensure this path is correct
import { useDispatch, useSelector } from "react-redux";
import { setComponentVisibility, toggleMenu } from "../../../redux/activeComponentSlice";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const Menu = () => {
  const dispatch = useDispatch();
  const menuVisible = useSelector((state) => state.activeComponent.menuVisible);

  const handleMenuItem = (componentName) => {
    // Hide the menu and show the selected component
    dispatch(toggleMenu());
    dispatch(setComponentVisibility({ componentName }));
  };

  const handleMenu = () => {
    dispatch(toggleMenu()); // Dispatch action to toggle menu visibility
  };

  return (
    <>
      {menuVisible ? (
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
          <ul className="list-none text-[#eef3f5] sm:text-[1rem] md:text-[1.5rem] lg:text-[2rem] font-medium font-['Roboto'] space-y-3">
            <li
              onClick={() => handleMenuItem("Solution")}
              className="flex items-center gap-2 tracking-[.3rem] hover:text-[#ff6347] cursor-pointer"
            >
              <IoMdSend /> SOLUTIONS
            </li>
            <li
              onClick={() => handleMenuItem("Service")}
              className="flex items-center gap-2 tracking-[.3rem] hover:text-[#ff6347] cursor-pointer"
            >
              <IoMdSend /> SERVICES
            </li>
            <li
              onClick={() => handleMenuItem("Experties")}
              className="flex items-center gap-2 tracking-[.3rem] hover:text-[#ff6347] cursor-pointer"
            >
              <IoMdSend /> OUR EXPERTISE
            </li>
            <li
              onClick={() => handleMenuItem("Industrie")}
              className="flex items-center gap-2 tracking-[.3rem] hover:text-[#ff6347] cursor-pointer"
            >
              <IoMdSend /> INDUSTRIES SERVED
            </li>
            <li
              onClick={() => handleMenuItem("About")}
              className="flex items-center gap-2 tracking-[.3rem] hover:text-[#ff6347] cursor-pointer"
            >
              <IoMdSend /> ABOUT
            </li>
            <li
              onClick={() => handleMenuItem("Contact")}
              className="flex items-center gap-2 tracking-[.3rem] hover:text-[#ff6347] cursor-pointer"
            >
              <IoMdSend /> CONTACT
            </li>
            <li
              onClick={() => handleMenuItem("Career")}
              className="flex items-center gap-2 tracking-[.3rem] hover:text-[#ff6347] cursor-pointer"
            >
              <IoMdSend /> CAREERS
            </li>
            {/* Add other menu items here */}
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
      ) : <div
        onClick={handleMenu}
        className="absolute top-4 md:top-2 lg:top-2 left-4 md:left-6 lg:left-10 flex items-center z-10 cursor-pointer"
      >
        <div className="w-8 h-8 md:w-14 md:h-10 lg:w-12 lg:h-10 relative mr-2">
          <HiOutlineMenuAlt2 className="w-full h-full text-[#eef3f5]" />
        </div>
        <span className="text-[#eef3f5] text-[1rem] md:text-[1.7rem] lg:text-[1.5rem] font-medium font-['Roboto']">
          MENU
        </span>
      </div>}
    </>
  );
};

export default Menu;
