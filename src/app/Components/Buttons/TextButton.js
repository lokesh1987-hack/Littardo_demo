import React from "react";
import { ButtonColor, ButtonSize } from "@Styles/Theme";

function TextButton({ size, color, classes, isDisabled = false,type="button",onClick, children }) {
  // This can be improved. I’m keeping it simple here by joining two strings.
  let classNames = ButtonColor[color] + " " + ButtonSize[size] + " " + classes;

  return (
    <button
      className={classNames}
      disabled={isDisabled}
      type={type || "button"}
      onClick={
        type !== "submit"
          ? (event) => {
              event.preventDefault();
              if (onClick) {
                onClick();
              }
            }
          : null
      }
    >
      {children}
    </button>
  );
}
export default TextButton;
