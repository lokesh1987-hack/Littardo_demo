"use client"
import React from "react";
import IconTextButton from "../Buttons/IconTextButton";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import TextButton from "../Buttons/TextButton";
// import Modal from "@Components/Modal/Modal";

function PaymentDetailSection() {
  return (
    <div className="bg-white py-4 px-4 rounded-lg">
      <p className="text-xl font-semibold">Payment Details</p>
      <div className="py-3">
        <div className="flex justify-between pb-2  items-center w-ful">
          <p className="text-sm text-grey-grey-1 font-medium">MRP</p>
          <p className="text-base font-semibold text-grey-grey-1">₹30,998</p>
        </div>
        <div className="flex justify-between pb-2  items-center w-ful">
          <p className="text-sm text-grey-grey-1 font-medium">
            Product Discount
          </p>
          <p className="text-base font-semibold text-signal-green">-₹3,998</p>
        </div>
        <div className="flex justify-between pb-2  items-center w-ful">
          <p className="text-sm text-grey-grey-1 font-medium">
            Delivery Charges
          </p>
          <p className="text-base font-semibold text-grey-grey-1">₹208</p>
        </div>
        <div className="flex justify-between pb-2  items-center w-ful">
          <p className="text-sm text-grey-grey-1 font-medium">
            Packaging Amount
          </p>
          <p className="text-base font-semibold text-grey-grey-1">₹100</p>
        </div>
        <div className="flex justify-between pb-2  items-center w-ful">
          <p className="text-sm text-grey-grey-1 font-medium">Total Savings</p>
          <p className="text-base font-semibold text-grey-grey-1">₹200</p>
        </div>
        <div className="flex justify-between pb-2  items-center w-ful">
          <p className="text-sm text-grey-grey-1 font-medium">Total</p>
          <p className="text-base font-semibold text-grey-grey-1">₹21,900</p>
        </div>
      </div>
      <form>
        <div className="flex items-center justify-start ">
          <input
            type="checkbox"
            id="appleCheckbox"
            checked
            className="text-red-600 bg-gray-100 w-4 h-5"
          />
          <label htmlFor="appleCheckbox" className="px-3 text-base font-medium">
            Use GST Invoice
          </label>
        </div>
        <div className="flex w-full border-yellow-Tint-7 py-3">
          <IconTextButton
            iconClasses="h-6 text-black "
            classes="py-2 px-3 text-md bg-grey-grey-12 rounded-lg w-full"
            onClick={console.log("kkk")}
            Icon={ChevronRightIcon}
            textPostion={"left"}
            textClasses="text-xl flex justify-between w-full"
          >
            Apply discount code
          </IconTextButton>
        </div>
        <TextButton color={"primary"} classes={"flex w-full justify-center"} onClick={() => console.log("kkk")}>
          <p className="py-2 text-base" >Proceed</p>
        </TextButton>
        {/* <Modal /> */}
      </form>
    </div>
  );
}

export default PaymentDetailSection;
