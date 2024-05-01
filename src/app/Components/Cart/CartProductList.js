import React from "react";
import Image from "next/image";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import TextButton from "../Buttons/TextButton";
import { medicineImage } from "@app/Common/ImageUrl";

function CartProductList() {
  return (
    <div className="mt-2">
      <div className="grid grid-cols-6 border-b h-fit w-full items-center my-4">
        <div className="col-span-2 flex flex-col justify-between relative h-full">
          <Image
            src={medicineImage}
            className=" rounded-lg"
            alt="watch"
            placeholder="blur"
            loading="lazy"
            width={500}
            height={500}
          />
          <div className="py-6 flex flex-col xl:flex-row justify-between items-center px-2">
            <TextButton>
              <p className="underline text-yellow-shade-4 text:xs md:text-xl font-medium">
                Save for later
              </p>
            </TextButton>
            <TextButton>
              <p className="underline text-signal-red text:xs md:text-xl font-medium">
                Remove
              </p>
            </TextButton>
          </div>
        </div>
        <div className="col-span-4 px-2 h-full">
          <div className="flex flex-col justify-between h-full">
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
            <div className="py-6 flex justify-end px-2">
              <div className="flex w-fit text-xl gap-5 md:gap-10 border items-center border-yellow-shade-2 rounded-full px-3 md:px-6 py-1">
                <MinusIcon className="h-7 w-7" />
                <label className="text-xl">2</label>
                <PlusIcon className="h-7 w-7" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 border-b h-fit w-full items-center my-4">
        <div className="col-span-2 flex flex-col justify-between relative h-full">
          <Image
            src={medicineImage}
            className=" rounded-lg"
            alt="watch"
            placeholder="blur"
            loading="lazy"
            width={500}
            height={500}
          />
          <div className="py-6 flex flex-col xl:flex-row justify-between items-center px-2">
            <TextButton>
              <p className="underline text-yellow-shade-4 text:xs md:text-xl font-medium">
                Save for later
              </p>
            </TextButton>
            <TextButton>
              <p className="underline text-signal-red text:xs md:text-xl font-medium">
                Remove
              </p>
            </TextButton>
          </div>
        </div>
        <div className="col-span-4 px-2 h-full">
          <div className="flex flex-col justify-between h-full">
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
            <div className="py-6 flex justify-end px-2">
              <div className="flex w-fit text-xl gap-5 md:gap-10 border items-center border-yellow-shade-2 rounded-full px-3 md:px-6 py-1">
                <MinusIcon className="h-7 w-7" />
                <label className="text-xl">2</label>
                <PlusIcon className="h-7 w-7" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 border-b h-fit w-full items-center my-4">
        <div className="col-span-2 flex flex-col justify-between relative h-full">
          <Image
            src={medicineImage}
            className=" rounded-lg"
            alt="watch"
            placeholder="blur"
            loading="lazy"
            width={500}
            height={500}
          />
          <div className="py-6 flex flex-col xl:flex-row justify-between items-center px-2">
            <TextButton>
              <p className="underline text-yellow-shade-4 text:xs md:text-xl font-medium">
                Save for later
              </p>
            </TextButton>
            <TextButton>
              <p className="underline text-signal-red text:xs md:text-xl font-medium">
                Remove
              </p>
            </TextButton>
          </div>
        </div>
        <div className="col-span-4 px-2 h-full">
          <div className="flex flex-col justify-between h-full">
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
            <div className="py-6 flex justify-end px-2">
              <div className="flex w-fit text-xl gap-5 md:gap-10 border items-center border-yellow-shade-2 rounded-full px-3 md:px-6 py-1">
                <MinusIcon className="h-7 w-7" />
                <label className="text-xl">2</label>
                <PlusIcon className="h-7 w-7" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProductList;
