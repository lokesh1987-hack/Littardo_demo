"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  UserCircleIcon,
  LockClosedIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";

import FormInput from "@Components/Inputs/FormInput";
import TextButton from "@Components/Buttons/TextButton";
import OtpForm from "@Components/Forms/OtpForm";

import {
  mailOtpIcon,
  profileIcon,
} from "@app/Common/ImageUrl";
import { checkEmptyValue, passwordValidate } from "@app/Utils/utils";

function EmailSignUpForm({ handleSignupform }) {
  const [userData, setUserData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({
    email_error: "",
    username_error: "",
    password_error: "",
  });
  const [showOtpComponent, setShowOtpComponent] = useState(false);

  const { email, username, password } = userData;

  const handleChange = (e) => {
    if (
      e.target.type === "password" ||
      (e.target.name === "password" && e.target.value != "")
    ) {
      let result = passwordValidate(e.target.value);
      setError({ ...error, password_error: result });
    } else {
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

    // console.log("UserData",checkEmptyValue(userData))

    if (!userData.email) {
      setError({ ...error, email_error: "Don't go with empty Email" });
    } else if (!userData.username) {
      setError({ ...error, username_error: "Don't go with empty Username" });
    } else if (!userData.password) {
      setError({ ...error, password_error: "Don't go with empty Password" });
    }

    if (userData.email && userData.password && userData.username) {
      setError({ ...error, email_error: "", username_error: "" });

      setShowOtpComponent(true);
    }
  };

  return (
    <div className="md:w-3/5">
      {!showOtpComponent ? (
        <>
          <form onSubmit={(e) => handleSubmit(e)}>
            <FormInput
              label="Email"
              placeholder="Enter Your Email"
              type="email"
              value={email}
              name="email"
              Icon={EnvelopeIcon}
              onChange={(e) => handleChange(e)}
              error={`${error.email_error || " "}`}
            />
            <FormInput
              label="Username"
              placeholder="Enter Your Username"
              type="text"
              value={username}
              name="username"
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
              handleSignupform({ type: "phone" });
            }}
          >
            Sign Up with Phone Number
          </TextButton>
          <p className="text-base mt-5 mx-auto w-fit ">
            Already have an account?
            <Link href={"/login"} className="text-yellow-shade-3 ml-2">
              Login
            </Link>
          </p>
        </>
      ) : (
        <OtpForm
          handleOtpComponent={handleOtpComponent}
          Icon={mailOtpIcon}
          iconType="svg"
          EmailorNumber={userData.email}
        />
      )}
    </div>
  );
}

export default EmailSignUpForm;
