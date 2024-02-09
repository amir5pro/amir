import React from "react";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <div className=" flex items-center justify-center text-center h-[60px]">
      <h3 className=" text-primary-500  text-[13px] pt-[15px] pb-[10px]">
        @ ALL-RIGHTS RESERVED TO AMIR MIFTAH {currentYear}
      </h3>
    </div>
  );
};

export default Footer;
