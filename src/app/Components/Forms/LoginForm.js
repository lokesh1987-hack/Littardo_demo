"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { UserCircleIcon, LockClosedIcon } from '@heroicons/react/24/solid'

import FormInput from "@Components/Inputs/FormInput";
import TextButton from "@Components/Buttons/TextButton";

function LoginForm() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    user_name: "",
    password: "",
  });
  const [error, setError] = useState({
    username_error: "",
    password_error: "",
  });

  const { email, user_name, password } = userData;

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userData.user_name) {
      setError({ ...error, username_error: "Don't go with empty Username" });
    }
    if (!userData.password) {
      setError({ ...error, password_error: "Don't go with empty Password" });
    } 

    if (userData.password && userData.user_name) {
      router.push("/")
    }
  };

  const handleShowpassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="md:w-3/5">
      <form onSubmit={(e) => handleSubmit(e)}>
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
        <TextButton type="submit" color="primary" classes="w-full py-2">
          Login
        </TextButton>
      </form>
      <TextButton
        type="button"
        color="basic"
        classes="w-full py-2 border border-1 border-yellow-Tint-9 mt-5"
        onClick={() => {
          router.push("/forgetpassword");
        }}
      >
        Forget Password
      </TextButton>
      <p className="text-base mt-5 mx-auto w-fit ">
        New here ?
        <Link href={"/signup"} className="text-yellow-shade-3 ml-2">
          Sign up
        </Link>
      </p>
    </div>
  );
}

export default LoginForm;
