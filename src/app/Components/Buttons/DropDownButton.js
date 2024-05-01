import { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import { ButtonColor, ButtonSize } from "@Styles/Theme";

function DropDownButton({
  options,
  color,
  size,
  buttonStyle,
  onOptionSelect,
  dropDownName,
  optionsClasess,
  Icon1 ="",
  Icon2 ="",
}) {
  console.log("options", options);
  const dropdownRef = useRef();
  // Keep track of whether the dropdown is open or not.
  const [isActive, setActive] = useState(false);

  const buttonClasses =
    ButtonColor[color] + " " + ButtonSize[size] + " " + buttonStyle;

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActive(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div ref={dropdownRef} className="w-full">
      <button
        onClick={() => setActive(!isActive)}
        className={`inline-flex w-full justify-center  items-center gap-x-1 rounded-md px-4 py-3 text-sm leading-6 space-x-3  font-medium  text-gray-900 hover:bg-gray-50 cursor-pointer ${buttonClasses}`}
      >
        {dropDownName}{" "}
        <svg
          className="-mr-1 h-6 w-auto text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={classNames(
          `absolute z-10 mt-2 origin-top-right rounded-md bg-white ring-1 ring-black ring-opacity-5 shadow-regular focus:outline-none`,
          {
            block: isActive,
            hidden: !isActive,
          }
        )}
      >
        {options?.map((option) => (
          <div
            key={option.id}
            onClick={(e) => onOptionSelect(option.redirect)}
            className="h-auto w-100 ext-gray-700 px-4 text-sm font-medium hover:bg-gray-100"
          >
            <div className={`flex flex-row justify-between py-2 cursor-pointer items-center ${optionsClasess}`}>
              <span className="flex items-center" >{Icon1 && <Icon1 className="h-4 w-5 mr-1 text-custom-button-gradient" />}{option.optionName}</span>
              {Icon2 && <Icon2 className="h-4 w-6 text-black" />}
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DropDownButton;
