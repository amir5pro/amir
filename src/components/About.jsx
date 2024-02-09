import React from "react";
import { Button, Flex } from "antd";
import { motion } from "framer-motion";
import { Me } from "../utils";
import backgroundImage from "../assets/black-thread-light.png";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div
      className=" flex flex-col bg-opacity-60 justify-evenly bg-primary-50 lg:mr-24 mx-6 lg:ml-[96px]  2xl:mx-40  min-h-screen  md:pt-[20px] lg:px-10  rounded-3xl  shadow-lg  "
      style={{
        backgroundColor: "#fff8e0",
        backgroundImage: `url(${backgroundImage})`,
      }}
      id="about"
    >
      <div className="text-text_color text-[30px] mt-[60px] mb-[40px] 2xl:mt-0 2xl:mb-0 font-black text-center ">
        About-Me
      </div>
      <motion.div
        initial={{ y: 70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 1 }}
        className="flex  flex-col-reverse gap-[50px] lg:gap-[35px] items-center "
      >
        <div className="flex flex-col gap-5 items-center">
          <div
            className="text-text_color   max-w-[500px] text-justify mx-[10px] sm:mx-0 sm:max-w-[570px] md:max-w-[700px]
              lg:max-w-[750px]  leading-[25px]  xl:max-w-[850px] 2xl:max-w-[950px]"
          >
            👋 Hello! I'm{" "}
            <span className="text-primary-500  ">Amir Miftah</span>, a
            passionate full-stack web developer based in Addis Ababa. As a
            freelancer, I transform ideas into captivating digital experiences.
            With a keen eye for detail and love for problem-solving, I
            specialize in crafting responsive and user-friendly web solutions.
            From dynamic front-end interfaces to robust back-end systems, I
            enjoy the challenge of creating seamless, efficient, and visually
            appealing websites. So, what are you waiting for? Click the button
            below and let's bring your digital ideas to life!🚀
          </div>
          <div>
            <Flex gap="small" vertical style={{ width: "120px" }}>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={600}
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                    rotate: "2.5deg",
                  }}
                  className="bg-primary-500  border-0 rounded-md"
                  style={{
                    height: "40px",
                    width: "100px",
                    color: "white",
                    marginBottom: "60px",
                  }}
                >
                  Let's talk
                </motion.button>
              </Link>
            </Flex>
          </div>
        </div>

        <div className=" grid grid-cols-1 gap-[14px] sm:grid sm:grid-cols-3 ">
          {Me.map(({ Icon, title, data, description }, index) => {
            return (
              <div
                key={index}
                className="shadow-xl p-[15px] border-1 bg-white rounded-xl flex flex-col w-[260px] sm:w-[180px] md:w-[210px] 
                  lg:w-[230px] xl:w-[270px] 2xl:w-[320px]  items-center gap-[5px] "
              >
                <Icon className="text-primary-500" />
                <h1 className="text-[23px] text-primary-500">{title}</h1>
                <h2 className="text-[14px] text-text_color">{data}</h2>
                <h2 className="text-[14px] text-text_color">{description}</h2>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
