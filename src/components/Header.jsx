import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { toast } from "react-toastify";

import { Typography } from "antd";

const { Text } = Typography;
const Header = () => {
  const phoneNumber = "+251963379162";

  const handlePhoneIconClick = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      toast.success("Phone number copied to clipboard");
    } catch (error) {
      toast.error("Unable to copy to clipboard");
    }
  };
  return (
    <div className="fixed top-0 w-full flex items-center justify-between md:px-[24px] px-6 lg:px-[136px] 2xl:px-[200px] h-[50px] bg-white  z-[999]">
      <Text strong className="text-primary-500 text-[21px] sm:text-[22px]  ">
        Amir Miftah
      </Text>
      <div className="flex items-center gap-[25px]  ">
        <a href="https://github.com/amir5pro" target="_blank">
          {" "}
          <Text strong>
            {" "}
            <FaGithub
              size={21}
              className=" hover:text-primary-500 cursor-pointer"
            />
          </Text>
        </a>
        <a href="mailto:amirdeveloper55@gmail.com" target="_blank">
          {" "}
          <Text strong>
            <IoMdMail
              size={21}
              className=" hover:text-primary-500 cursor-pointer"
            />
          </Text>
        </a>
        <a href="https://t.me/atth6" target="_blank">
          <Text strong>
            <FaTelegramPlane
              size={21}
              className=" hover:text-primary-500 cursor-pointer"
            />
          </Text>
        </a>
        <Text strong>
          <FaPhoneAlt
            size={21}
            className=" hover:text-primary-500 cursor-pointer"
            onClick={() => handlePhoneIconClick()}
          />
        </Text>
      </div>
    </div>
  );
};

export default Header;
