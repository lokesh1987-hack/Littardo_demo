"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ShoppingCartIcon,ChevronRightIcon } from "@heroicons/react/24/solid";

import DropDownButton from "@Components/Buttons/DropDownButton";
import TextButton from "@Components/Buttons/TextButton";
import IconTextButton from "../Buttons/IconTextButton";
import { cartIcon } from "@app/Common/ImageUrl";

function DesktopNavLinks({ loginUserOption, moreOptions }) {
  const isLogin = true;
  const router = useRouter();

  return (
    <ul className="flex flex-row items-center space-x-5 justify-center xl:pl-4 min-w-fit">
      {isLogin ? (
        <>
          <li className="">
            <DropDownButton
              color={"primary"}
              buttonStyle={"shadow-basic "}
              Icon2={ChevronRightIcon}
              options={loginUserOption}
              dropDownName={"User Name"}
              onOptionSelect={(option) => {
                router.push(option);
              }}
            />
          </li>
          <li className="">
            <DropDownButton
              color={"basic"}
              buttonStyle={"border-yellow-Tint-7 border-2"}
              options={moreOptions}
              dropDownName={"More"}
              Icon2={ChevronRightIcon}
              onOptionSelect={(option) => {
                router.push(option);
              }}
            />
          </li>
        </>
      ) : (
        <li>
          <TextButton
            color="primary"
            size="lg"
            onClick={() => router.push("/login")}
          >
            Login
          </TextButton>
        </li>
      )}
      <li>
        <IconTextButton
          color="basic"
          classes="py-3 px-5"
          onClick={() => router.push("/cart")}
          Icon={ShoppingCartIcon}
          iconClasses="text-yellow-shade-4"
          textPostion={"right"}
        >
          Cart
        </IconTextButton>
      </li>
      {/* Add other navigation links */}
    </ul>
  );
}

export default DesktopNavLinks;
