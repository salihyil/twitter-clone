import React from "react";

const Button = ({
  type = "button",
  children,
  textColor,
  bgColor,
  hoverBgColor,
  ...props
}) => (
  <button
    type={type}
    className={`border rounded-full h-[40px] w-[300px] flex justify-center items-center ${bgColor}  ${hoverBgColor} mb-2  mt-5`}
    {...props}
  >
    <span className={`text-[15px] font-bold ${textColor}`}>{children}</span>
  </button>
);

export default Button;
