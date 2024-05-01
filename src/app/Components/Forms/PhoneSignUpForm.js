"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  UserCircleIcon,
  LockClosedIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

import FormInput from "@Components/Inputs/FormInput";
import TextButton from "@Components/Buttons/TextButton";
import OtpForm from "@Components/Forms/OtpForm" 

import { passwordValidate } from "@app/Utils/utils";
import { phoneOtpIcon } from '@Common/ImageUrl'

function PhoneSignUpForm({ handleSignupform }) {
  const [userData, setUserData] = useState({
    phone: "",
    user_name: "",
    password: "",
    check: false,
  });
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({
    phone_error: "",
    username_error: "",
    password_error: "",
  });
  const [showOtpComponent , setShowOtpComponent] = useState(false)

  const { phone, user_name, password } = userData;

  const handleChange = (e) => {
    if(e.target.type ==="password" || e.target.name ==="password" && e.target.value !="" ){
      let result = passwordValidate(e.target.value)
      setError({ ...error, password_error: result });
    }else{
      setError({ ...error, password_error: "" });
    }
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleShowpassword = () => {
    setShowPassword(!showPassword);
  };

  const handleOtpComponent = () => {
    setShowOtpComponent(!showOtpComponent);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (isChecked) {
    //   setUserData({ ...userData, check: isChecked });
    // }

    if (!userData.phone) {
      setError({ ...error, phone_error: "Don't go with empty Phone filed" });
    } else if (!userData.user_name) {
      setError({ ...error, username_error: "Don't go with empty Username" });
    } else if (!userData.password) {
      setError({ ...error, password_error: "Don't go with empty Password" });
    } else {
      let result = passwordValidate(userData.password)
      setError({ ...error, password_error: result });
    }

    if (userData.phone && userData.password && userData.user_name) {
      setError({...error,
        phone_error: "",
        username_error: "",
      });
      setShowOtpComponent(true)
    }
  };

  return (
    <div className="md:w-3/5">
      {!showOtpComponent ?<>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          label="Phone Number"
          placeholder="Enter Your Phone Number"
          type="tel"
          value={phone}
          name="phone"
          Icon={PhoneIcon}
          onChange={(e) => handleChange(e)}
          error={`${error.phone_error || " "}`}
        />
        <FormInput
          label="Username"
          placeholder="Enter Your Username"
          type="text"
          value={user_name}
          name="user_name"
          Icon={UserCircleIcon}
          onChange={(e) => handleChange(e)}
          error={`${error.username_error || " "}`}
        />
        <FormInput
          label="Password"
          placeholder="Enter Your Password"
          autoComplete="current-password"
          type={`${showPassword ? "text" : "password"}`}
          value={password}
          name="password"
          Icon={LockClosedIcon}
          onChange={(e) => handleChange(e)}
          isShowPassword={() => {
            handleShowpassword();
          }}
          passwordEye
          error={`${error.password_error || " "}`}
        />
        <div className="mb-3 text-base">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked((prev) => !prev)}
            className="mr-2 ml-3"
          />{" "}
          I accept
          <span className="text-yellow-shade-3 underline ml-2">
            Term And Condition
          </span>
        </div>
        <TextButton type="submit" color="primary" classes="w-full py-2">
          Sign Up
        </TextButton>
      </form>
      <TextButton
        type="button"
        color="basic"
        classes="w-full py-2 border border-1 border-yellow-Tint-9 mt-5"
        onClick={() => {
          handleSignupform({type:"email"});
        }}
      >
        Sign Up with Email
      </TextButton>
      <p className="text-base mt-5 mx-auto w-fit ">
        Already have an account?
        <Link href={"/login"} className="text-yellow-shade-3 ml-2">
          Login
        </Link>
      </p>
      </>:<OtpForm handleOtpComponent={handleOtpComponent} Icon={phoneOtpIcon} iconType={"svg"} EmailorNumber={userData.phone} /> }
    </div>
  );
}

export default PhoneSignUpForm;
