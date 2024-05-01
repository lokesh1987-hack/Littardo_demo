import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { leftArrowIcon } from "@app/Common/ImageUrl";
import FormInput from "@Components/Inputs/FormInput";
import TextButton from "@Components/Buttons/TextButton";

function OtpForm({ Icon,iconType, EmailorNumber, handleOtpComponent }) {
  const router = useRouter();

  const [otp, setOtp] = useState();
  const [otpError, setOtpError] = useState("");

  const handleOtp = (e) => {
    e.preventDefault();
    if (otp == "123456") {
      router.push("/login");
    } else {
      setOtpError("please Enter correct OTP");
    }
  };

  return (
    <div className="mt-4">
      <div className="flex flex-row mb-6">
        <Image
          onClick={() => {
            handleOtpComponent();
          }}
          alt="not found"
          src={leftArrowIcon}
          width={20}
          height={48}
          className="pointer-events:auto"
        />
        <div className="text-sm">
          Please enter OTP sent to{" "}
          <span className="text-yellow-color ">{EmailorNumber}</span>
        </div>
      </div>
      <div>
        <form onSubmit={(e) => handleOtp(e)}>
          <FormInput
            label="OTP"
            placeholder="Enter OTP Here.."
            type="number"
            value={otp}
            name="otp"
            Icon={Icon}
            iconType={iconType}
            onChange={(e) => {
              setOtp(e.target.value);
              setOtpError("");
            }}
            error={`${otpError || " "}`}
            maxLength="4"
          />
          <TextButton type="submit" color="primary" classes="w-full py-2 mt-2">
            Confirm
          </TextButton>
          <TextButton
            type="button"
            color="basic"
            classes="w-full py-2 border border-1 border-yellow-Tint-9 mt-5"
            onClick={() => {
              handleSignupform({ type: "email" });
            }}
          >
            Sign Up with Email
          </TextButton>
        </form>
      </div>
    </div>
  );
}

export default OtpForm;
