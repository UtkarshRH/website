import React from "react";
import { IoMdClose, IoMdSend } from "react-icons/io";
import Logo from '/src/assets/img/Logo1.png'; // Ensure this path is correct
import { useDispatch, useSelector } from "react-redux";
import { setComponentVisibility, toggleMenu } from "../../../redux/activeComponentSlice";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { Link } from "react-scroll";

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
        <div className="fixed top-0 left-0 w-full h-[100vh] bg-custom-gradient z-50 flex flex-col justify-center items-start xs:p-6 sm:p-6 md:p-24 lg:p-24 xl:p-24 2xl:p-24 3xl:p-24">
          {/* Close Menu Button */}
          <div
            onClick={handleMenu}
            className="absolute xs:top-4 md:top-2 lg:top-2 left-4 md:left-6 lg:left-10 flex items-center z-10 cursor-pointer"
          >
            <div className="w-8 h-8 md:w-14 md:h-10 lg:w-12 lg:h-10 relative mr-2">
              <IoMdClose className="w-full h-full text-[#eef3f5]" />
            </div>
            <span className="text-[#eef3f5] xs:text-[1.2rem] md:text-[1.7rem] lg:text-[1.5rem] font-medium font-['Roboto']">
              MENU
            </span>
          </div>

          <ul className="list-none text-[#eef3f5] font-medium font-['Roboto'] space-y-3 xs:mb-[20rem] lg:mb-0">
            <Link className="flex items-center gap-2 xs:text-[1.5rem] sm:text-[2rem] xs:tracking-[0.2rem] sm:tracking-[0.2rem] md:text-[1.5rem] md:tracking-[.3rem] lg:text-[2rem] lg:tracking-[.3rem] hover:text-[#ff6347] cursor-pointer" to="Solution" smooth={true} duration={500} onClick={() => handleMenuItem('Solution')}>
              <IoMdSend /> SOLUTION
            </Link>
            <Link
              className="flex items-center gap-2 xs:text-[1.5rem] sm:text-[2rem] xs:tracking-[0.2rem] sm:tracking-[0.2rem] md:text-[1.5rem] md:tracking-[.3rem] lg:text-[2rem] lg:tracking-[.3rem] hover:text-[#ff6347] cursor-pointer" to="Service" smooth={true} duration={500} onClick={() => handleMenuItem('Service')}>
              <IoMdSend /> OUR SERVICES
            </Link>
            <Link
              to="Experties" smooth={true} duration={500} onClick={() => handleMenuItem("Experties")}
              className="flex items-center gap-2 xs:text-[1.5rem] sm:text-[2rem] xs:tracking-[0.2rem] sm:tracking-[0.2rem] md:text-[1.5rem] md:tracking-[.3rem] lg:text-[2rem] lg:tracking-[.3rem] hover:text-[#ff6347] cursor-pointer"
            >
              <IoMdSend /> OUR EXPERTISE
            </Link>
            <Link
              to="Industrie" smooth={true} duration={500} onClick={() => handleMenuItem("Industrie")}
              className="flex items-center gap-2 xs:text-[1.5rem] sm:text-[2rem] xs:tracking-[0.2rem] sm:tracking-[0.2rem] md:text-[1.5rem] md:tracking-[.3rem] lg:text-[2rem] lg:tracking-[.3rem] hover:text-[#ff6347] cursor-pointer"
            >
              <IoMdSend /> INDUSTRIES SERVED
            </Link>
            <Link
              to="About" smooth={true} duration={500} onClick={() => handleMenuItem("About")}
              className="flex items-center gap-2 xs:text-[1.5rem] sm:text-[2rem] xs:tracking-[0.2rem] sm:tracking-[0.2rem] md:text-[1.5rem] md:tracking-[.3rem] lg:text-[2rem] lg:tracking-[.3rem] hover:text-[#ff6347] cursor-pointer"
            >
              <IoMdSend /> ABOUT
            </Link>
            <Link
              to="Contact" smooth={true} duration={500} onClick={() => handleMenuItem("Contact")}
              className="flex items-center gap-2 xs:text-[1.5rem] sm:text-[2rem] xs:tracking-[0.2rem] sm:tracking-[0.2rem] md:text-[1.5rem] md:tracking-[.3rem] lg:text-[2rem] lg:tracking-[.3rem] hover:text-[#ff6347] cursor-pointer"
            >
              <IoMdSend /> CONTACT
            </Link>
            <Link
              to="Career" smooth={true} duration={500} onClick={() => handleMenuItem("Career")}
              className="flex items-center gap-2 xs:text-[1.5rem] sm:text-[2rem] xs:tracking-[0.2rem] sm:tracking-[0.2rem] md:text-[1.5rem] md:tracking-[.3rem] lg:text-[2rem] lg:tracking-[.3rem] hover:text-[#ff6347] cursor-pointer"
            >
              <IoMdSend /> CAREERS
            </Link>
          </ul>


          {/* Logo */}
          <div className="absolute xs:top-0 md:top-2 lg:top-2 right-4 md:right-6 lg:right-10 flex items-center z-10">
            <div className="w-30 h-5 md:w-30 md:h-10 lg:w-44 lg:h-10 relative">
              <img
                src={Logo}
                alt="SmartLeaven Technology"
                className="md:w-full md:h-full xs:w-[18vh] xs:h-[8vh]  object-contain"
              />
            </div>
          </div>
        </div>
      ) : <div
        onClick={handleMenu}
        className="absolute xs:top-4 md:top-2 lg:top-2 left-4 md:left-6 lg:left-10 flex items-center z-10 cursor-pointer"
      >
        <div className="w-8 h-8 md:w-14 md:h-10 lg:w-12 lg:h-10 relative mr-2">
          <HiOutlineMenuAlt2 className="w-full h-full text-[#eef3f5]" />
        </div>
        <span className="text-[#eef3f5] xs:text-[1.2rem] md:text-[1.7rem] lg:text-[1.5rem] font-medium font-['Roboto']">
          MENU
        </span>
      </div>}
    </>
  );
};

export default Menu;
