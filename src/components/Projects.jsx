import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { apps } from "../utils";
import { FaGithub } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import background from "../assets/black-thread.png";
const Projects = () => {
  const [activeBtn, setActiveBtn] = useState("All");
  const [webApps, setWebApps] = useState([...apps]);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const handleButtonAll = () => {
    setActiveBtn("All");
    setWebApps([...apps]);
  };
  const handleButtonReact = () => {
    setActiveBtn("React js");
    const filteredApps = apps.filter((app) => app.pro === "react");
    setWebApps(filteredApps);
  };
  const handleButtonMern = () => {
    setActiveBtn("Mern");
    const filteredApps = apps.filter((app) => app.pro === "mern");
    setWebApps(filteredApps);
  };

  const filterItems = [
    {
      label: "All",
      key: "All",
      onClick: handleButtonAll,
    },
    {
      label: "React js",
      key: "React",
      onClick: handleButtonReact,
    },
    {
      label: "Mern",
      key: "Mern",
      onClick: handleButtonMern,
    },
  ];

  const items = filterItems.filter((item) => item.label !== activeBtn);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="bg-opacity-60 min-h-screen rounded-3xl shadow-sm"
      style={{
        backgroundColor: "#fff8e0",
        backgroundImage: `url(${background})`,
      }}
      id="projects"
    >
      <div className="   lg:mr-24 mx-4 lg:ml-[96px]  2xl:mx-40  min-h-screen pt-[60px]  pb-[60px]   ">
        <div className="text-text_color text-[30px]  font-black text-center   ">
          Projects
        </div>
        <div className="mt-[30px] flex flex-col items-center justify-center gap-[35px]">
          <div className="sm:hidden">
            {windowSize < 640 && (
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
                overlayClassName=""
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <button className="flex items-center gap-[6px] border-2 border-primary-500 bg-white py-[5px] px-[12px] rounded-lg text-text_color ">
                      {activeBtn}
                      <DownOutlined style={{ padding_left: "5px" }} />
                    </button>
                  </Space>
                </a>
              </Dropdown>
            )}
          </div>
          <div className="hidden sm:flex items-center justify-center gap-[30px]">
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
                rotate: "2.5deg",
              }}
              className={`px-[10px] py-[7px] w-[100px] border-2 border-primary-500  rounded-lg ${
                activeBtn === "All"
                  ? "bg-primary-500 text-white"
                  : "bg-white text-primary-500 "
              }`}
              onClick={() => handleButtonAll()}
            >
              All
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
                rotate: "2.5deg",
              }}
              className={`px-[10px] py-[7px] w-[100px] border-2 border-primary-500 rounded-lg ${
                activeBtn === "React js"
                  ? "bg-primary-500 text-white"
                  : "bg-white text-primary-500 "
              }`}
              onClick={() => handleButtonReact()}
            >
              React js
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
                rotate: "2.5deg",
              }}
              className={`px-[10px] py-[7px] w-[100px] border-2 border-primary-500 rounded-lg ${
                activeBtn === "Mern"
                  ? "bg-primary-500 text-white"
                  : "bg-white text-primary-500 "
              }`}
              onClick={() => handleButtonMern()}
            >
              Mern
            </motion.button>
          </div>
          <div className="grid gap-[40px] md:gap-[25px] grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:gap-[40px]">
            {webApps.map(({ name, web, git, pro, photo }, index) => {
              return (
                <AnimatePresence key={name}>
                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 25 }}
                    transition={{ duration: 1 }}
                    className="h-[355px] w-[305px] sm:w-[340px] sm:h-[380px] 2xl:w-[360px] 2xl:h-[400px]  bg-white shadow-xl rounded-2xl  flex flex-col items-center justify-center px-[10px] py-[15px]"
                  >
                    <div className="relative group rounded-2xl r ">
                      <img
                        src={photo}
                        alt="photo"
                        className="h-[285px] w-[285px]  sm:h-[310px] sm:w-[310px] 2xl:w-[330px] 2xl:h-[330px]  rounded-2xl  "
                      />
                      <div
                        className="absolute  inset-0 bg-gradient-to-l backdrop-blur-3xl bg-[rgba(0,0,0,0.6)]
                opacity-0 group-hover:opacity-80 transition-all duration-700 rounded-2xl"
                      ></div>

                      <div
                        className="absolute inset-0 flex items-center justify-center gap-[20px] opacity-0 
                  group-hover:opacity-100"
                      >
                        <a
                          href={git}
                          target="_blank"
                          className=" border-2 border-primary-500 rounded-lg p-[7px] text-primary-500 hover:bg-primary-500 hover:text-white"
                        >
                          <FaGithub size={19} />
                        </a>
                        <a
                          href={web}
                          target="_blank"
                          className=" border-2 border-primary-500 rounded-lg p-[7px] text-primary-500 hover:bg-primary-500 hover:text-white"
                        >
                          <LuEye size={19} />
                        </a>
                      </div>
                    </div>
                    <h4 className="text-primary-500 font-extrabold pt-[7px] text-[20px]">
                      {name}
                    </h4>
                  </motion.div>
                </AnimatePresence>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
