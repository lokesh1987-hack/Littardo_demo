"use client";
import Image from "next/image";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

function FormInput({
  label,
  placeholder,
  type = "text",
  value,
  name,
  error,
  Icon,
  iconType = "",
  onChange,
  autoComplete = "",
  isShowPassword,
  passwordEye,
  ...otherProps
}) {
  const [showEye, setShowEye] = useState(false);
  console.log("Icon", Icon);
  return (
    <div className={`${label}-input`}>
      <label
        htmlFor={`${type}-${label}-input`}
        className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <ErrorBoundary fallback={<Error />}>
        <div className="relative mb-6 z-0">
          {iconType == "svg" ? (
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <Image src={Icon} width={24} height={28} className=" text-yellow-Tint-3" />
            </div>
          ) : (
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <Icon className="h-7 w-6 text-yellow-Tint-3" />
            </div>
          )}
          <input
            type={type}
            value={value}
            name={name}
            id={`${type}-input`}
            className={`bg-white border border-black text-black text-base font-medium tracking-tighter rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
              Icon ? "ps-12" : "ps-5"
            }`}
            placeholder={placeholder}
            onChange={(e) => onChange(e)}
            autoComplete={autoComplete}
            {...otherProps}
          />
          {passwordEye && (
            <button
              type="button"
              onClick={() => {
                isShowPassword();
                setShowEye(!showEye);
              }}
              className="absolute inset-y-0 end-3 flex items-center px-2 py-1"
            >
              {showEye ? (
                <EyeIcon className="h-7 w-6 text-black" />
              ) : (
                <EyeSlashIcon className="h-7 w-6 text-black" />
              )}
            </button>
          )}
          {error && (
            <div className="absolute ms-12 mt-1 error-message text-sm text-signals-red">
              {error}
            </div>
          )}
        </div>
      </ErrorBoundary>
    </div>
  );
}

export default FormInput;
