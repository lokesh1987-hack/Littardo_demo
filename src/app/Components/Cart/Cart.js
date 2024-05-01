"use client";
import React from "react";
import EmptyCart from "./EmptyCart";
import { MapPinIcon,ChevronRightIcon } from "@heroicons/react/24/solid";

import PaymentDetailSection from "@Components/Cart/PaymentDetailSection";
import CartProductList from "@Components/Cart/CartProductList";

function Cart() {
  return (
    <>
      <div className="relative grid grid-cols-6 md:grid-cols-12 gap-4">
        <div className="col-span-6 md:col-span-8">
          <div className="bg-white flex flex-col md:flex-row md:justify-between md:items-center rounded-lg p-2">
            <div className="flex flex-col p-2">
              <p className="font-bold" >Cart</p>
              <p>You got 3 items</p>
            </div>
            <div className="flex flex-row justify-center items-center space-x-3 p-2 bg-yellow-Tint-13 rounded-lg">
              <MapPinIcon className="h-7 w-5" />
              <div className="flex flex-col">
                <p>Name</p>
                <p className="">Adress state Pincode</p>
              </div>
              <ChevronRightIcon className="h-7 w-5" />
            </div>
          </div>
          <CartProductList />
        </div>
        <div className="col-span-6 md:col-span-4">
          <PaymentDetailSection />
        </div>
      </div>
      <EmptyCart />
      
    </>
  );
}

export default Cart;
