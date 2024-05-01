import React from "react";
import ForgetPasswordForm from '@Components/Forms/ForgetPasswordForm'

function ForgetPasswordPage() {
  return (
    <main className="bg-yellow-Tint-13 flex flex-col justify-center items-center min-h-auto w-full">
      <div className="flex flex-col justify-center items-center min-h-screen w-full md:w-1/2 max-w-3xl ">
        <h3 className="text-black text-3xl font-semibold">Forget Password</h3>
        <p className="text-yellow-color text-xl  md:text-2xl font-semibold mt-3 mb-4">Don’t worry we are working on it 🗝️</p>
        <ForgetPasswordForm />
      </div>
    </main>
  );
}

export default ForgetPasswordPage;
