import React, { useEffect, useState } from "react";
import { Menu } from "../utils";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-scroll";
const Navbar = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [hoveredStates, setHoveredStates] = useState(
    Array(Menu.length).fill(false)
  );

  const [windowSizeNav, setWindowSizeNav] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSizeNav(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleMouseEnter = (index) => {
    if (windowSizeNav >= 1024) {
      const newHoveredStates = [...hoveredStates];
      newHoveredStates[index] = true;
      setHoveredStates(newHoveredStates);
    }
  };

  const handleMouseLeave = (index) => {
    const newHoveredStates = [...hoveredStates];
    newHoveredStates[index] = false;
    setHoveredStates(newHoveredStates);
  };
  const handleSetActive = (to) => {
    setTimeout(() => {
      setActiveSection(to);
    }, 300); // Add a delay of 100 milliseconds before updating the active section
  };

  const handleClick = (id) => {
    setTimeout(() => {
      setActiveSection(id);
    }, 300);
  };
  return (
    <div className="fixed bottom-10  flex items-center justify-center w-full lg:top-0   lg:right-7 lg:h-screen lg:w-16 z-[999] ">
      <div className="rounded-full px-5 lg:px-1 py-1 lg:py-6 bg-white opacity-85 lg:opacity-100 border-2 border-primary-100 shadow-2xl flex lg:flex-col items-center gap-4 z-[999] ">
        {Menu.map(({ Icon, name, id }, index) => {
          return (
            <Link
              activeClass="active"
              to={id}
              spy={true}
              smooth={true}
              offset={0}
              duration={600}
              onSetActive={handleSetActive}
              className={`relative bg-primary-50 rounded-full p-3 lg:hover:bg-primary-500
               ${id === activeSection && "bg-primary-500 text-white"}
                  text-primary-500 lg:hover:text-white cursor-pointer transition-opacity duration-1000 text-[12px]`}
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onClick={() => handleClick(id)}
            >
              <Icon className="" size={20} />
              {windowSizeNav >= 1024 && (
                <AnimatePresence>
                  {hoveredStates[index] && (
                    <motion.div
                      initial={{ opacity: 0, x: -25 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -25 }}
                      className="hidden z-[999] lg:block absolute bg-white text-primary-500 rounded-md px-3  py-2 right-[70px] w-[70px] shadow-xl top-[6px]
                   after:absolute after:-right-1 after:top-3 after:w-3 after:h-3
                   after:bg-white after:rotate-45"
                    >
                      {name}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
