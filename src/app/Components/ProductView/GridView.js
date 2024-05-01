"use client";
import React from "react";
import Image from "next/image";
import { medicineImage } from "@app/Common/ImageUrl";
import { PlusIcon } from "@heroicons/react/24/solid";

import DropDownButton from "@Components/Buttons/DropDownButton";
import IconTextButton from "../Buttons/IconTextButton";

function GridView() {
  return (
    <div
      className={`grid grid-cols-6 md:grid-cols-9 xl:grid-cols-12`}
    >
      <div className="col-span-3 border-r-2 border-b-2 px-4 my-4">
        <div>
          <Image
            src={medicineImage}
            className=" rounded-lg"
            alt="watch"
            placeholder="blur"
            loading="lazy"
            width={500}
            height={500}
          />
        </div>
        <div>
          <p className="text:xs md:text-xl font-medium text-yellow-shade-2">
            Aquaguard Delight NXT RO+UV+Taste Adjuster Water Purifier (6L)
          </p>
          <p className="text-xs md:text-base">
            <span>4.5 *****</span>
            <span className="font-medium text-black ps-2">5k reviews</span>
          </p>
          <p className="font-medium text-xs">
            <span className="text-xs md:text-base font-medium text-grey-grey-5 line-through">
              ₹5,000
            </span>
            <span className="text-[9px] bg-signal-green mx-2 py-1 px-1.5 text-white font-medium rounded-xl">
              30% off
            </span>
            <span className="text-grey-grey-2">Warranty:</span>
            <span className="text-black"> 1 year |</span>
            <span className="text-grey-grey-2 ps-2">Return Period:</span>
            <span className="text-black"> 15 days</span>
          </p>
          <p className="text-base md:text-xl font-semibold text-black">
            ₹3,470
          </p>
          <ul className="ps-5 list-disc text-xs md:text-base font-medium text-black">
            <li>Get it by Tomorrow 3 August </li>
            <li>Free Delivery</li>
          </ul>
        </div>
        <div className="py-6 flex justify-center px-2">
          <div className="flex w-fit text-xl gap-5 md:gap-10 border items-center border-yellow-shade-2 rounded-full px-3 md:px-6 py-1">
            <label className="text-xs md:text-xl">Add to Cart</label>
          </div>
        </div>
      </div>
      <div className="col-span-3 border-r-2 border-b-2 px-4 my-4">
        <div>
          <Image
            src={medicineImage}
            className=" rounded-lg"
            alt="watch"
            placeholder="blur"
            loading="lazy"
            width={500}
            height={500}
          />
        </div>
        <div>
          <p className="text:xs md:text-xl font-medium text-yellow-shade-2">
            Aquaguard Delight NXT RO+UV+Taste Adjuster Water Purifier (6L)
          </p>
          <p className="text-xs md:text-base">
            <span>4.5 *****</span>
            <span className="font-medium text-black ps-2">5k reviews</span>
          </p>
          <p className="font-medium text-xs">
            <span className="text-xs md:text-base font-medium text-grey-grey-5 line-through">
              ₹5,000
            </span>
            <span className="text-[9px] bg-signal-green mx-2 py-1 px-1.5 text-white font-medium rounded-xl">
              30% off
            </span>
            <span className="text-grey-grey-2">Warranty:</span>
            <span className="text-black"> 1 year |</span>
            <span className="text-grey-grey-2 ps-2">Return Period:</span>
            <span className="text-black"> 15 days</span>
          </p>
          <p className="text-base md:text-xl font-semibold text-black">
            ₹3,470
          </p>
          <ul className="ps-5 list-disc text-xs md:text-base font-medium text-black">
            <li>Get it by Tomorrow 3 August </li>
            <li>Free Delivery</li>
          </ul>
        </div>
        <div className="py-6 flex justify-center px-2">
          <div className="flex w-fit text-xl gap-5 md:gap-10 border items-center border-yellow-shade-2 rounded-full px-3 md:px-6 py-1">
            <label className="text-xs md:text-xl">Add to Cart</label>
          </div>
        </div>
      </div>
      <div className="col-span-3 border-r-2 border-b-2 px-4 my-4">
        <div>
          <Image
            src={medicineImage}
            className=" rounded-lg"
            alt="watch"
            placeholder="blur"
            loading="lazy"
            width={500}
            height={500}
          />
        </div>
        <div>
          <p className="text:xs md:text-xl font-medium text-yellow-shade-2">
            Aquaguard Delight NXT RO+UV+Taste Adjuster Water Purifier (6L)
          </p>
          <p className="text-xs md:text-base">
            <span>4.5 *****</span>
            <span className="font-medium text-black ps-2">5k reviews</span>
          </p>
          <p className="font-medium text-xs">
            <span className="text-xs md:text-base font-medium text-grey-grey-5 line-through">
              ₹5,000
            </span>
            <span className="text-[9px] bg-signal-green mx-2 py-1 px-1.5 text-white font-medium rounded-xl">
              30% off
            </span>
            <span className="text-grey-grey-2">Warranty:</span>
            <span className="text-black"> 1 year |</span>
            <span className="text-grey-grey-2 ps-2">Return Period:</span>
            <span className="text-black"> 15 days</span>
          </p>
          <p className="text-base md:text-xl font-semibold text-black">
            ₹3,470
          </p>
          <ul className="ps-5 list-disc text-xs md:text-base font-medium text-black">
            <li>Get it by Tomorrow 3 August </li>
            <li>Free Delivery</li>
          </ul>
        </div>
        <div className="py-6 flex justify-center px-2">
          <div className="flex w-fit text-xl gap-5 md:gap-10 border items-center border-yellow-shade-2 rounded-full px-3 md:px-6 py-1">
            <label className="text-xs md:text-xl">Add to Cart</label>
          </div>
        </div>
      </div>
      <div className="col-span-3 border-r-2 border-b-2 px-4 my-4">
        <div>
          <Image
            src={medicineImage}
            className=" rounded-lg"
            alt="watch"
            placeholder="blur"
            loading="lazy"
            width={500}
            height={500}
          />
        </div>
        <div>
          <p className="text:xs md:text-xl font-medium text-yellow-shade-2">
            Aquaguard Delight NXT RO+UV+Taste Adjuster Water Purifier (6L)
          </p>
          <p className="text-xs md:text-base">
            <span>4.5 *****</span>
            <span className="font-medium text-black ps-2">5k reviews</span>
          </p>
          <p className="font-medium text-xs">
            <span className="text-xs md:text-base font-medium text-grey-grey-5 line-through">
              ₹5,000
            </span>
            <span className="text-[9px] bg-signal-green mx-2 py-1 px-1.5 text-white font-medium rounded-xl">
              30% off
            </span>
            <span className="text-grey-grey-2">Warranty:</span>
            <span className="text-black"> 1 year |</span>
            <span className="text-grey-grey-2 ps-2">Return Period:</span>
            <span className="text-black"> 15 days</span>
          </p>
          <p className="text-base md:text-xl font-semibold text-black">
            ₹3,470
          </p>
          <ul className="ps-5 list-disc text-xs md:text-base font-medium text-black">
            <li>Get it by Tomorrow 3 August </li>
            <li>Free Delivery</li>
          </ul>
        </div>
        <div className="py-6 flex justify-center px-2">
          <div className="flex w-fit text-xl gap-5 md:gap-10 border items-center border-yellow-shade-2 rounded-full px-3 md:px-6 py-1">
            <label className="text-xs md:text-xl">Add to Cart</label>
          </div>
        </div>
      </div>
      <div className="col-span-3 border-r-2 border-b-2 px-4 my-4">
        <div>
          <Image
            src={medicineImage}
            className=" rounded-lg"
            alt="watch"
            placeholder="blur"
            loading="lazy"
            width={500}
            height={500}
          />
        </div>
        <div>
          <p className="text:xs md:text-xl font-medium text-yellow-shade-2">
            Aquaguard Delight NXT RO+UV+Taste Adjuster Water Purifier (6L)
          </p>
          <p className="text-xs md:text-base">
            <span>4.5 *****</span>
            <span className="font-medium text-black ps-2">5k reviews</span>
          </p>
          <p className="font-medium text-xs">
            <span className="text-xs md:text-base font-medium text-grey-grey-5 line-through">
              ₹5,000
            </span>
            <span className="text-[9px] bg-signal-green mx-2 py-1 px-1.5 text-white font-medium rounded-xl">
              30% off
            </span>
            <span className="text-grey-grey-2">Warranty:</span>
            <span className="text-black"> 1 year |</span>
            <span className="text-grey-grey-2 ps-2">Return Period:</span>
            <span className="text-black"> 15 days</span>
          </p>
          <p className="text-base md:text-xl font-semibold text-black">
            ₹3,470
          </p>
          <ul className="ps-5 list-disc text-xs md:text-base font-medium text-black">
            <li>Get it by Tomorrow 3 August </li>
            <li>Free Delivery</li>
          </ul>
        </div>
        <div className="py-6 flex justify-center px-2">
          <div className="flex w-fit text-xl gap-5 md:gap-10 border items-center border-yellow-shade-2 rounded-full px-3 md:px-6 py-1">
            <label className="text-xs md:text-xl">Add to Cart</label>
          </div>
        </div>
      </div>
      <div className="col-span-3 border-r-2 border-b-2 px-4 my-4">
        <div>
          <Image
            src={medicineImage}
            className=" rounded-lg"
            alt="watch"
            placeholder="blur"
            loading="lazy"
            width={500}
            height={500}
          />
        </div>
        <div>
          <p className="text:xs md:text-xl font-medium text-yellow-shade-2">
            Aquaguard Delight NXT RO+UV+Taste Adjuster Water Purifier (6L)
          </p>
          <p className="text-xs md:text-base">
            <span>4.5 *****</span>
            <span className="font-medium text-black ps-2">5k reviews</span>
          </p>
          <p className="font-medium text-xs">
            <span className="text-xs md:text-base font-medium text-grey-grey-5 line-through">
              ₹5,000
            </span>
            <span className="text-[9px] bg-signal-green mx-2 py-1 px-1.5 text-white font-medium rounded-xl">
              30% off
            </span>
            <span className="text-grey-grey-2">Warranty:</span>
            <span className="text-black"> 1 year |</span>
            <span className="text-grey-grey-2 ps-2">Return Period:</span>
            <span className="text-black"> 15 days</span>
          </p>
          <p className="text-base md:text-xl font-semibold text-black">
            ₹3,470
          </p>
          <ul className="ps-5 list-disc text-xs md:text-base font-medium text-black">
            <li>Get it by Tomorrow 3 August </li>
            <li>Free Delivery</li>
          </ul>
        </div>
        <div className="py-6 flex justify-center px-2">
          <div className="flex w-fit text-xl gap-5 md:gap-10 border items-center border-yellow-shade-2 rounded-full px-3 md:px-6 py-1">
            <label className="text-xs md:text-xl">Add to Cart</label>
          </div>
        </div>
      </div>
      <div className="col-span-3 border-r-2 border-b-2 px-4 my-4">
        <div>
          <Image
            src={medicineImage}
            className=" rounded-lg"
            alt="watch"
            placeholder="blur"
            loading="lazy"
            width={500}
            height={500}
          />
        </div>
        <div>
          <p className="text:xs md:text-xl font-medium text-yellow-shade-2">
            Aquaguard Delight NXT RO+UV+Taste Adjuster Water Purifier (6L)
          </p>
          <p className="text-xs md:text-base">
            <span>4.5 *****</span>
            <span className="font-medium text-black ps-2">5k reviews</span>
          </p>
          <p className="font-medium text-xs">
            <span className="text-xs md:text-base font-medium text-grey-grey-5 line-through">
              ₹5,000
            </span>
            <span className="text-[9px] bg-signal-green mx-2 py-1 px-1.5 text-white font-medium rounded-xl">
              30% off
            </span>
            <span className="text-grey-grey-2">Warranty:</span>
            <span className="text-black"> 1 year |</span>
            <span className="text-grey-grey-2 ps-2">Return Period:</span>
            <span className="text-black"> 15 days</span>
          </p>
          <p className="text-base md:text-xl font-semibold text-black">
            ₹3,470
          </p>
          <ul className="ps-5 list-disc text-xs md:text-base font-medium text-black">
            <li>Get it by Tomorrow 3 August </li>
            <li>Free Delivery</li>
          </ul>
        </div>
        <div className="py-6 flex justify-center px-2">
          <div className="flex w-fit text-xl gap-5 md:gap-10 border items-center border-yellow-shade-2 rounded-full px-3 md:px-6 py-1">
            <label className="text-xs md:text-xl">Add to Cart</label>
          </div>
        </div>
      </div>
      <div className="col-span-3 border-r-2 border-b-2 px-4 my-4">
        <div>
          <Image
            src={medicineImage}
            className=" rounded-lg"
            alt="watch"
            placeholder="blur"
            loading="lazy"
            width={500}
            height={500}
          />
        </div>
        <div>
          <p className="text:xs md:text-xl font-medium text-yellow-shade-2">
            Aquaguard Delight NXT RO+UV+Taste Adjuster Water Purifier (6L)
          </p>
          <p className="text-xs md:text-base">
            <span>4.5 *****</span>
            <span className="font-medium text-black ps-2">5k reviews</span>
          </p>
          <p className="font-medium text-xs">
            <span className="text-xs md:text-base font-medium text-grey-grey-5 line-through">
              ₹5,000
            </span>
            <span className="text-[9px] bg-signal-green mx-2 py-1 px-1.5 text-white font-medium rounded-xl">
              30% off
            </span>
            <span className="text-grey-grey-2">Warranty:</span>
            <span className="text-black"> 1 year |</span>
            <span className="text-grey-grey-2 ps-2">Return Period:</span>
            <span className="text-black"> 15 days</span>
          </p>
          <p className="text-base md:text-xl font-semibold text-black">
            ₹3,470
          </p>
          <ul className="ps-5 list-disc text-xs md:text-base font-medium text-black">
            <li>Get it by Tomorrow 3 August </li>
            <li>Free Delivery</li>
          </ul>
        </div>
        <div className="py-6 flex justify-center px-2">
            <div className="flex w-fit text-xl gap-5 md:gap-10 border items-center border-yellow-shade-2 rounded-full px-3 md:px-6 py-1">
                <label className="text-xs md:text-xl">Add to Cart</label>
            </div>
        </div>
      </div>
      {/*  */}
      {/*  */}
      {/*  */}
      <div className="col-span-3 border-r-2 border-b-2 px-4 my-4">
        <div>
          <Image
            src={medicineImage}
            className=" rounded-lg"
            alt="watch"
            placeholder="blur"
            loading="lazy"
            width={500}
            height={500}
          />
        </div>
        <div>
          <p className="text:xs md:text-xl font-medium text-yellow-shade-2">
            Aquaguard Delight NXT RO+UV+Taste Adjuster Water Purifier (6L)
          </p>
          <p className="text-xs md:text-base">
            <span>4.5 *****</span>
            <span className="font-medium text-black ps-2">5k reviews</span>
          </p>
          <p className="font-medium text-xs">
            <span className="text-xs md:text-base font-medium text-grey-grey-5 line-through">
              ₹5,000
            </span>
            <span className="text-[9px] bg-signal-green mx-2 py-1 px-1.5 text-white font-medium rounded-xl">
              30% off
            </span>
            <span className="text-grey-grey-2">Warranty:</span>
            <span className="text-black"> 1 year |</span>
            <span className="text-grey-grey-2 ps-2">Return Period:</span>
            <span className="text-black"> 15 days</span>
          </p>
          <p className="text-base md:text-xl font-semibold text-black">
            ₹3,470
          </p>
        </div>
        <div className="py-6 flex justify-between items-center px-2 space-x-7 w-full">
          <DropDownButton
            options={[
              { id: 1, optionName: "5kg" },
              { id: 2, optionName: "10kg" },
              { id: 3, optionName: "20kg" },
              { id: 4, optionName: "30kg" },
            ]}
            dropDownName={"5kg"}
            onOptionSelect={(option) => {
              router.push(option);
            }}
            buttonStyle={"text-xl bg-white border border-yellow-shade-2 rounded-full px-3 w-full"}
          />
          <IconTextButton
            color={"basic"}
            iconClasses="h-4 w-4 text-black ml-5"
            classes="py-2 px-3 border border-yellow-shade-2 rounded-full w-full"
            onClick={() => router.push("/")}
            Icon={PlusIcon}
            textPostion={"left"}
            textClasses="text-xs md:text-xl"
          >
            Add
          </IconTextButton>
        </div>
      </div>
      <div className="col-span-3 border-r-2 border-b-2 px-4 my-4">
        <div>
          <Image
            src={medicineImage}
            className=" rounded-lg"
            alt="watch"
            placeholder="blur"
            loading="lazy"
            width={500}
            height={500}
          />
        </div>
        <div>
          <p className="text:xs md:text-xl font-medium text-yellow-shade-2">
            Aquaguard Delight NXT RO+UV+Taste Adjuster Water Purifier (6L)
          </p>
          <p className="text-xs md:text-base">
            <span>4.5 *****</span>
            <span className="font-medium text-black ps-2">5k reviews</span>
          </p>
          <p className="font-medium text-xs">
            <span className="text-xs md:text-base font-medium text-grey-grey-5 line-through">
              ₹5,000
            </span>
            <span className="text-[9px] bg-signal-green mx-2 py-1 px-1.5 text-white font-medium rounded-xl">
              30% off
            </span>
            <span className="text-grey-grey-2">Warranty:</span>
            <span className="text-black"> 1 year |</span>
            <span className="text-grey-grey-2 ps-2">Return Period:</span>
            <span className="text-black"> 15 days</span>
          </p>
          <p className="text-base md:text-xl font-semibold text-black">
            ₹3,470
          </p>
        </div>
        <div className="py-6 flex justify-between px-2">
          <div className="flex text-xl gap-5 md:gap-10 border items-center border-yellow-shade-2 rounded-full px-3 md:px-6 py-1">
            <label className="text-xs md:text-xl">5kg</label>
          </div>
          <div className="flex text-xl gap-5 md:gap-10 border items-center border-yellow-shade-2 rounded-full px-3 md:px-6 py-1">
            <label className="text-xs md:text-xl">Add </label>
          </div>
        </div>
      </div>
      <div className="col-span-3 border-r-2 border-b-2 px-4 my-4">
        <div>
          <Image
            src={medicineImage}
            className=" rounded-lg"
            alt="watch"
            placeholder="blur"
            loading="lazy"
            width={500}
            height={500}
          />
        </div>
        <div>
          <p className="text:xs md:text-xl font-medium text-yellow-shade-2">
            Aquaguard Delight NXT RO+UV+Taste Adjuster Water Purifier (6L)
          </p>
          <p className="text-xs md:text-base">
            <span>4.5 *****</span>
            <span className="font-medium text-black ps-2">5k reviews</span>
          </p>
          <p className="font-medium text-xs">
            <span className="text-xs md:text-base font-medium text-grey-grey-5 line-through">
              ₹5,000
            </span>
            <span className="text-[9px] bg-signal-green mx-2 py-1 px-1.5 text-white font-medium rounded-xl">
              30% off
            </span>
            <span className="text-grey-grey-2">Warranty:</span>
            <span className="text-black"> 1 year |</span>
            <span className="text-grey-grey-2 ps-2">Return Period:</span>
            <span className="text-black"> 15 days</span>
          </p>
          <p className="text-base md:text-xl font-semibold text-black">
            ₹3,470
          </p>
        </div>
        <div className="py-6 flex justify-between px-2">
          <div className="flex text-xl gap-5 md:gap-10 border items-center border-yellow-shade-2 rounded-full px-3 md:px-6 py-1">
            <label className="text-xs md:text-xl">5kg</label>
          </div>
          <div className="flex text-xl gap-5 md:gap-10 border items-center border-yellow-shade-2 rounded-full px-3 md:px-6 py-1">
            <label className="text-xs md:text-xl">Add </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridView;
