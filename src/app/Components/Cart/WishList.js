"use client";
import React from "react";
import Image from "next/image";
import TextButton from "../Buttons/TextButton";
import { medicineImage } from "@app/Common/ImageUrl";
import GridView from '@Components/ProductView/GridView'

function WishList() {
  return (
    <div>
      <div>
        <p>WISHLIST</p>
        <div>
          <div className="grid grid-cols-6 border-b h-fit w-fit xl:max-w-6xl items-center my-4">
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
            </div>
            <div className="col-span-4 px-2 h-full">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <p className="text:xs md:text-xl font-medium text-yellow-shade-2">
                    Aquaguard Delight NXT RO+UV+Taste Adjuster Water Purifier
                    (6L)
                  </p>
                  <p className="text-xs md:text-base">
                    <span>4.5 *****</span>
                    <span className="font-medium text-black ps-2">
                      5k reviews
                    </span>
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
                    <span className="text-grey-grey-2 ps-2">
                      Return Period:
                    </span>
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
                    <label className="text-xs md:text-xl">Add to Cart</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-6 border-b h-fit w-fit xl:max-w-6xl items-center my-4">
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
            </div>
            <div className="col-span-4 px-2 h-full">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <p className="text:xs md:text-xl font-medium text-yellow-shade-2">
                    Aquaguard Delight NXT RO+UV+Taste Adjuster Water Purifier
                    (6L)
                  </p>
                  <p className="text-xs md:text-base">
                    <span>4.5 *****</span>
                    <span className="font-medium text-black ps-2">
                      5k reviews
                    </span>
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
                    <span className="text-grey-grey-2 ps-2">
                      Return Period:
                    </span>
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
                    <label className="text-xs md:text-xl">Add to Cart</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div>
            <GridView />
        </div>
      </div>
    </div>
  );
}

export default WishList;
