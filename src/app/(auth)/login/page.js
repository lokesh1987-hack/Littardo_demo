import React, { Suspense } from "react";
import LoginForm from '@Components/Forms/LoginForm'

function Loginpage() {
  return (
    <main className="bg-yellow-Tint-13 flex flex-col justify-center items-center min-h-screen w-full">
      <div className="container flex flex-col justify-center items-center min-h-screen ms:w-1/2 max-w-3xl ">
        <h3 className="text-black text-3xl font-semibold">Log In</h3>
        <p className="text-yellow-color text-2xl font-semibold mt-3 mb-4">Welcome Back👋</p>
         <LoginForm />
      </div>
    </main>
  );
}

export default Loginpage;
