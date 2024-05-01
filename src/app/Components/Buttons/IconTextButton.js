import React from "react";
import { ButtonColor, ButtonSize } from "@Styles/Theme";
import Image from "next/image";

function IconTextButton({
  size,
  color,
  isDisabled = false,
  type = "button",
  classes,
  onClick,
  children,
  Icon,
  iconClasses,
  textPostion = "",
  textClasses="text-sm"
}) {
  const buttonClasses =
    ButtonColor[color] + " " + ButtonSize[size] + " " + classes;
  return (
    <button
      className={buttonClasses}
      disabled={isDisabled}
      type={type}
      onClick={onClick}
    >
      <span className={`flex flex-row items-center ${textClasses}`}>
        {textPostion == "left" && <span >{children}</span>}
        {Icon && (
          <Icon className={`h-6 w-6 mx-1 ${iconClasses}`} />
        )}
        {(textPostion == "right" || "") && <span >{children}</span>}
      </span>
    </button>
  );
}

export default IconTextButton;
