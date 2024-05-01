"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

import { emptyCart } from "@app/Common/ImageUrl";
import IconTextButton from "../Buttons/IconTextButton";

function EmptyCart() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center w-full space-y-4 min-h-[70vh]" >
        <Image src={emptyCart} alt="cart" />
        <p className="text-3xl font-medium text-center">It seems like your cart is empty</p>
        <IconTextButton
          color={"primary"}
          iconClasses="h-6 text-black "
          classes="py-2 px-3 text-base"
          onClick={() => router.push("/")}
          Icon={ChevronRightIcon}
          textPostion={"left"}
          textClasses="text-xl"
        >
          Shop Now
        </IconTextButton>
    </div>
  );
}

export default EmptyCart;
