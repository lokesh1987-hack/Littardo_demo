"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { UserCircleIcon } from "@heroicons/react/24/solid";

import FormInput from "@Components/Inputs/FormInput";
import TextButton from "@Components/Buttons/TextButton";

function ForgetPasswordForm() {
  const router = useRouter();
  const [userData, setUserData] = useState({
    user_name: "",
  });
  const [error, setError] = useState({
    username_error: "",
  });

  const { user_name } = userData;

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userData.user_name) {
      setError({ ...error, username_error: "Don't go with empty Username" });
    }
    if (userData.user_name) {
      router.push("/");
    }
  };

  return (
    <div className="md:w-3/5 h-full">
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          label="Enter Phone Number or Email Adress"
          placeholder="Enter here..."
          type="text"
          value={user_name}
          name="user_name"
          icon={UserCircleIcon}
          onChange={(e) => handleChange(e)}
          error={`${error.username_error || " "}`}
        />
        <TextButton type="submit" color="primary" classes="w-full py-2">
          Send OTP
        </TextButton>
      </form>
    </div>
  );
}

export default ForgetPasswordForm;
