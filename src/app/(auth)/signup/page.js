"use client";
import React, { useState } from "react";
import EmailSignUpForm from "@Components/Forms/EmailSignUpForm";
import PhoneSignUpForm from "@Components/Forms/PhoneSignUpForm";

function SignUpPage() {
  const [emailSignUp, setEmailSignUp] = useState("email");

  const handleSignupform = (e) => {
    setEmailSignUp(e.type);
  };

  return (
    <main className="bg-yellow-Tint-13 flex flex-col justify-center items-center min-h-screen w-full">
      <div className="container flex flex-col justify-center items-center min-h-screen ms:w-1/2 max-w-3xl ">
        <h3 className="text-black text-3xl font-semibold">Sign Up</h3>
        <p className="text-yellow-color text-2xl font-semibold mt-3 mb-4">
          Welcome 👋
        </p>
        {emailSignUp === "email" ? (
          <EmailSignUpForm handleSignupform={handleSignupform} />
        ) : (
          <PhoneSignUpForm handleSignupform={handleSignupform} />
        )}
      </div>
    </main>
  );
}

export default SignUpPage;
