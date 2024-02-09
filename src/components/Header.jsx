import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { toast } from "react-toastify";
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
    <div className="fixed top-0 w-full flex items-center justify-between md:px-[24px] px-6 lg:px-[136px] 2xl:px-[200px] h-[50px] bg-white opacity-70 z-[999]">
      <h3 className="text-primary-500 text-[21px] sm:text-[22px] font-black ">
        Amir Miftah
      </h3>
      <div className="flex items-center gap-[25px] text-text_color ">
        <a href="https://github.com/amir5pro" target="_blank">
          {" "}
          <FaGithub
            size={21}
            className=" hover:text-primary-500 cursor-pointer"
          />
        </a>
        <a href="mailto:amirdeveloper55@gmail.com" target="_blank">
          {" "}
          <IoMdMail
            size={21}
            className=" hover:text-primary-500 cursor-pointer"
          />
        </a>
        <a href="https://t.me/atth6" target="_blank">
          <FaTelegramPlane
            size={21}
            className=" hover:text-primary-500 cursor-pointer"
          />
        </a>

        <FaPhoneAlt
          size={21}
          className=" hover:text-primary-500 cursor-pointer"
          onClick={() => handlePhoneIconClick()}
        />
      </div>
    </div>
  );
};

export default Header;
