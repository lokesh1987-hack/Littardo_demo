"use client"; // remove it
import Image from "next/image";

import styles from "@app/(shopping)/HomePageStyles.module.scss";
import Slider from "@Components/Sliders/slider";
import HIconTextScroller from "@Components/HorizontalScroll/HIconTextScroller";

import { categoriesWithIconsNameData } from "@Data/HompageData";
import {
  fridgeImage,
  medicineImage,
  rolexLogo,
  shoesImage,
  watchImage,
} from "@app/Common/ImageUrl";
import { ArrowsUpDownIcon } from "@heroicons/react/24/solid";
import DropDownButton from "@app/Components/Buttons/DropDownButton";
import FilterSortButtons from "@app/Components/Buttons/FilterSortButtons";
import TextButton from "@app/Components/Buttons/TextButton";
import IconTextButton from "@app/Components/Buttons/IconTextButton";

const categories = [
  {
    id: 1,
    name: "Groceries",
    image:
      "https://m.media-amazon.com/images/G/31/img15/zak/24/dell/BAU_ATF_HALO_Dell_1._CB583176886_.png",
  },
  {
    id: 2,
    name: "Mobile",
    image:
      "https://m.media-amazon.com/images/G/31/img15/zak/24/dell/BAU_ATF_HALO_Dell_1._CB583176886_.png",
  },
  {
    id: 3,
    name: "Phones",
    image:
      "https://m.media-amazon.com/images/G/31/img15/zak/24/dell/BAU_ATF_HALO_Dell_1._CB583176886_.png",
  },
  {
    id: 4,
    name: "Personal Care",
    image:
      "https://m.media-amazon.com/images/G/31/img15/zak/24/dell/BAU_ATF_HALO_Dell_1._CB583176886_.png",
  },
  {
    id: 5,
    name: "Books",
    image:
      "https://m.media-amazon.com/images/G/31/img15/zak/24/dell/BAU_ATF_HALO_Dell_1._CB583176886_.png",
  },
  {
    id: 6,
    name: "Appliances",
    image:
      "https://m.media-amazon.com/images/G/31/img15/zak/24/dell/BAU_ATF_HALO_Dell_1._CB583176886_.png",
  },
  {
    id: 7,
    name: "Electronics",
    image:
      "https://m.media-amazon.com/images/G/31/img15/zak/24/dell/BAU_ATF_HALO_Dell_1._CB583176886_.png",
  },
  {
    id: 8,
    name: "Furniture",
    image:
      "https://m.media-amazon.com/images/G/31/img15/zak/24/dell/BAU_ATF_HALO_Dell_1._CB583176886_.png",
  },
  {
    id: 9,
    name: "Home",
    image:
      "https://m.media-amazon.com/images/G/31/img15/zak/24/dell/BAU_ATF_HALO_Dell_1._CB583176886_.png",
  },
  {
    id: 10,
    name: "Beauty & Wellness",
    image:
      "https://m.media-amazon.com/images/G/31/img15/zak/24/dell/BAU_ATF_HALO_Dell_1._CB583176886_.png",
  },
  {
    id: 11,
    name: "Baby Care",
    image:
      "https://m.media-amazon.com/images/G/31/img15/zak/24/dell/BAU_ATF_HALO_Dell_1._CB583176886_.png",
  },
  {
    id: 12,
    name: "Pet Supplies",
    image:
      "https://m.media-amazon.com/images/G/31/img15/zak/24/dell/BAU_ATF_HALO_Dell_1._CB583176886_.png",
  },
  {
    id: 13,
    name: "& Toys",
    image:
      "https://m.media-amazon.com/images/G/31/img15/zak/24/dell/BAU_ATF_HALO_Dell_1._CB583176886_.png",
  },
  {
    id: 14,
    name: "Sports",
    image:
      "https://m.media-amazon.com/images/G/31/img15/zak/24/dell/BAU_ATF_HALO_Dell_1._CB583176886_.png",
  },
  {
    id: 15,
    name: "Deals & Offers",
    image:
      "https://m.media-amazon.com/images/G/31/img15/zak/24/dell/BAU_ATF_HALO_Dell_1._CB583176886_.png",
  },
];

export default function HomePage() {
  return (
    <div
      className={`container px-3 md:px:6 xl:px-4 2xl:px-6 mx-auto sm:max-w-container-sm md:max-w-container-md lg:max-w-container-lg xl:max-w-container-xl 2xl:max-w-container-2xl bg-custom-grey relative ${styles.container}`}
    >
      <HIconTextScroller
        data={categoriesWithIconsNameData}
        classes={"justify-between"}
      />
      <div className="w-full">
        <Slider />
      </div>
      {/*  */}
      {/*  */}
      <div className="py-5">
        <div className="w-full flex justify-between items-center py-3">
          <p className="text-xl font-semibold">Fresh deals of the day</p>
          <button className="border rounded-md border-yellow-Tint-7 bg-white py-3 px-2 text-grey-grey-3">
            View all
          </button>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 xl:grid-cols-12 gap-4 relative">
          <div className="col-span-3 flex shadow-regular bg-white rounded-r-20 w-full items-center py-4 px-3">
            <div className="w-1/2">
              <Image src={watchImage} alt="watch" />
            </div>
            <div className=" w-1/2 flex-col text-start ">
              <Image src={rolexLogo} alt="rolex_logo" />
              <div className="mt-5">
                <p className="text-yellow-shade-4 text-base font-medium">
                  Price start at
                </p>
                <p className="text-black text-xl font-semibold">₹45,999.99</p>
                <p className="text-grey-grey-3 text-sm font-medium">
                  ₹45,999.99
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-3 hidden md:flex shadow-regular bg-white rounded-r-20 w-full items-center py-4 px-3">
            <div className="w-1/2">
              <Image src={watchImage} alt="watch" />
            </div>
            <div className=" w-1/2 flex-col text-start ">
              <Image src={rolexLogo} alt="rolex_logo" />
              <div className="mt-5">
                <p className="text-yellow-shade-4 text-base font-medium">
                  Price start at
                </p>
                <p className="text-black text-xl font-semibold">₹45,999.99</p>
                <p className="text-grey-grey-3 text-sm font-medium">
                  ₹45,999.99
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-3 md:col-span-6">
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-1 flex flex-col md:flex-row items-center justify-center shadow-regular bg-white rounded-r-20 w-full py-4 px-3">
                <div className="md:w-1/2">
                  <Image src={fridgeImage} alt="watch" />
                </div>
                <div className="md:w-1/2">
                  <div className="px-1">
                    <p className="text-yellow-shade-4 text-xl font-semibold">
                      Appliance
                    </p>
                    <p className="text-black text-base font-semibold">
                      ₹10,999
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-1 flex flex-col md:flex-row items-center justify-center shadow-regular bg-white rounded-r-20 w-full py-4 px-3">
                <div className="md:w-1/2">
                  <Image src={fridgeImage} alt="watch" />
                </div>
                <div className="md:w-1/2">
                  <div className="px-1">
                    <p className="text-yellow-shade-4 text-xl font-semibold">
                      Appliance
                    </p>
                    <p className="text-black text-base font-semibold">
                      ₹10,999
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-1 flex flex-col md:flex-row items-center justify-center shadow-regular bg-white rounded-r-20 w-full py-4 px-3">
                <div className="md:w-1/2">
                  <Image src={fridgeImage} alt="watch" />
                </div>
                <div className="md:w-1/2">
                  <div className="px-1">
                    <p className="text-yellow-shade-4 text-xl font-semibold">
                      Appliance
                    </p>
                    <p className="text-black text-base font-semibold">
                      ₹10,999
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-1 flex flex-col md:flex-row items-center justify-center shadow-regular bg-white rounded-r-20 w-full py-4 px-3">
                <div className="md:w-1/2">
                  <Image src={fridgeImage} alt="watch" />
                </div>
                <div className="md:w-1/2">
                  <div className="px-1">
                    <p className="text-yellow-shade-4 text-xl font-semibold">
                      Appliance
                    </p>
                    <p className="text-black text-base font-semibold">
                      ₹10,999
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-1 flex flex-col md:flex-row items-center justify-center shadow-regular bg-white rounded-r-20 w-full py-4 px-3">
                <div className="md:w-1/2">
                  <Image src={fridgeImage} alt="watch" />
                </div>
                <div className="md:w-1/2">
                  <div className="px-1">
                    <p className="text-yellow-shade-4 text-xl font-semibold">
                      Appliance
                    </p>
                    <p className="text-black text-base font-semibold">
                      ₹10,999
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-1 flex flex-col md:flex-row items-center justify-center shadow-regular bg-white rounded-r-20 w-full py-4 px-3">
                <div className="md:w-1/2">
                  <Image src={fridgeImage} alt="watch" />
                </div>
                <div className="md:w-1/2">
                  <div className="px-1">
                    <p className="text-yellow-shade-4 text-xl font-semibold">
                      Appliance
                    </p>
                    <p className="text-black text-base font-semibold">
                      ₹10,999
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      {/*  */}
      <div className="py-5">
        <div className="w-full flex justify-between items-center py-3">
          <p className="text-xl font-semibold">Top Picks</p>
          <button className="border rounded-md border-yellow-Tint-7 bg-white py-3 px-2">
            View all
          </button>
        </div>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-5 ">
          <div className="col-span-2 border bg-yellow-Tint-13 shadow-regular border-yellow-Tint-8 rounded-r-20 w-full  overflow-hidden">
            <div className="grid grid-rows-4">
              <div className="row-span-2 w-full relative">
                <Image src={shoesImage} alt="watch" fill />
              </div>
              <div className="row-span-2 flex-col text-center pt-2">
                <p className="text-yellow-shade-4 text-xl font-medium">
                  Sport Shoes
                </p>
                <p className="text-black text-base font-semibold">Starts at</p>
                <p className="text-grey-grey-3 text-base font-semibold">
                  ₹699/pair
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2 border bg-yellow-Tint-13 shadow-regular border-yellow-Tint-8 rounded-r-20 w-full  overflow-hidden">
            <div className="grid grid-rows-4">
              <div className="row-span-2 w-full relative">
                <Image src={shoesImage} alt="watch" fill />
              </div>
              <div className="row-span-2 flex-col text-center pt-2">
                <p className="text-yellow-shade-4 text-xl font-medium">
                  Sport Shoes
                </p>
                <p className="text-black text-base font-semibold">Starts at</p>
                <p className="text-grey-grey-3 text-base font-semibold">
                  ₹699/pair
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2 border bg-yellow-Tint-13 shadow-regular border-yellow-Tint-8 rounded-r-20 w-full  overflow-hidden">
            <div className="grid grid-rows-4">
              <div className="row-span-2 w-full relative">
                <Image src={shoesImage} alt="watch" fill />
              </div>
              <div className="row-span-2 flex-col text-center pt-2">
                <p className="text-yellow-shade-4 text-xl font-medium">
                  Sport Shoes
                </p>
                <p className="text-black text-base font-semibold">Starts at</p>
                <p className="text-grey-grey-3 text-base font-semibold">
                  ₹699/pair
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2 border bg-yellow-Tint-13 shadow-regular border-yellow-Tint-8 rounded-r-20 w-full  overflow-hidden">
            <div className="grid grid-rows-4">
              <div className="row-span-2 w-full relative">
                <Image src={shoesImage} alt="watch" fill />
              </div>
              <div className="row-span-2 flex-col text-center pt-2">
                <p className="text-yellow-shade-4 text-xl font-medium">
                  Sport Shoes
                </p>
                <p className="text-black text-base font-semibold">Starts at</p>
                <p className="text-grey-grey-3 text-base font-semibold">
                  ₹699/pair
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2 border bg-yellow-Tint-13 shadow-regular border-yellow-Tint-8 rounded-r-20 w-full  overflow-hidden">
            <div className="grid grid-rows-4">
              <div className="row-span-2 w-full relative">
                <Image src={shoesImage} alt="watch" fill />
              </div>
              <div className="row-span-2 flex-col text-center pt-2">
                <p className="text-yellow-shade-4 text-xl font-medium">
                  Sport Shoes
                </p>
                <p className="text-black text-base font-semibold">Starts at</p>
                <p className="text-grey-grey-3 text-base font-semibold">
                  ₹699/pair
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2 border bg-yellow-Tint-13 shadow-regular border-yellow-Tint-8 rounded-r-20 w-full  overflow-hidden">
            <div className="grid grid-rows-4">
              <div className="row-span-2 w-full relative">
                <Image src={shoesImage} alt="watch" fill />
              </div>
              <div className="row-span-2 flex-col text-center pt-2">
                <p className="text-yellow-shade-4 text-xl font-medium">
                  Sport Shoes
                </p>
                <p className="text-black text-base font-semibold">Starts at</p>
                <p className="text-grey-grey-3 text-base font-semibold">
                  ₹699/pair
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      {/*  */}
      <div className="py-5">
        <div className="w-full flex justify-between items-center py-3">
          <p className="text-xl font-semibold">Fresh deals of the day</p>
          <button className="border rounded-md border-yellow-Tint-7 bg-white py-3 px-2">
            View all
          </button>
        </div>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-5">
          <div className="col-span-3 flex flex-col border h-full bg-yellow-Tint-11 border-yellow-Tint-8 shadow-regular rounded-r-20 w-full items-center overflow-hidden">
            <Image src={medicineImage} alt="watch" width={500} />
            <div className="flex-col text-start ps-5 pt-2 w-full">
              <p className="text-yellow-shade-4 text-xl font-medium">
                Supplements
              </p>
              <p className="text-black text-2xl font-semibold">₹1,999</p>
            </div>
          </div>
          <div className="col-span-3 flex flex-col border h-full bg-yellow-Tint-11 border-yellow-Tint-8 shadow-regular rounded-r-20 w-full items-center overflow-hidden">
            <Image src={medicineImage} alt="watch" width={500} />
            <div className="flex-col text-start ps-5 pt-2 w-full">
              <p className="text-yellow-shade-4 text-xl font-medium">
                Supplements
              </p>
              <p className="text-black text-2xl font-semibold">₹1,999</p>
            </div>
          </div>
          <div className="col-span-3 flex flex-col border h-full bg-yellow-Tint-11 border-yellow-Tint-8 shadow-regular rounded-r-20 w-full items-center overflow-hidden">
            <Image src={medicineImage} alt="watch" width={500} />
            <div className="flex-col text-start ps-5 pt-2 w-full">
              <p className="text-yellow-shade-4 text-xl font-medium">
                Supplements
              </p>
              <p className="text-black text-2xl font-semibold">₹1,999</p>
            </div>
          </div>
          <div className="col-span-3 flex flex-col border h-full bg-yellow-Tint-11 border-yellow-Tint-8 shadow-regular rounded-r-20 w-full items-center overflow-hidden">
            <Image src={medicineImage} alt="watch" width={500} />
            <div className="flex-col text-start ps-5 pt-2 w-full">
              <p className="text-yellow-shade-4 text-xl font-medium">
                Supplements
              </p>
              <p className="text-black text-2xl font-semibold">₹1,999</p>
            </div>
          </div>
          <div className="col-span-3 flex flex-col border h-full bg-yellow-Tint-11 border-yellow-Tint-8 shadow-regular rounded-r-20 w-full items-center overflow-hidden">
            <Image src={medicineImage} alt="watch" width={500} />
            <div className="flex-col text-start ps-5 pt-2 w-full">
              <p className="text-yellow-shade-4 text-xl font-medium">
                Supplements
              </p>
              <p className="text-black text-2xl font-semibold">₹1,999</p>
            </div>
          </div>
          <div className="col-span-3 flex flex-col border h-full bg-yellow-Tint-11 border-yellow-Tint-8 shadow-regular rounded-r-20 w-full items-center overflow-hidden">
            <Image src={medicineImage} alt="watch" width={500} />
            <div className="flex-col text-start ps-5 pt-2 w-full">
              <p className="text-yellow-shade-4 text-xl font-medium">
                Supplements
              </p>
              <p className="text-black text-2xl font-semibold">₹1,999</p>
            </div>
          </div>
          <div className="col-span-3 flex flex-col border h-full bg-yellow-Tint-11 border-yellow-Tint-8 shadow-regular rounded-r-20 w-full items-center overflow-hidden">
            <Image src={medicineImage} alt="watch" width={500} />
            <div className="flex-col text-start ps-5 pt-2 w-full">
              <p className="text-yellow-shade-4 text-xl font-medium">
                Supplements
              </p>
              <p className="text-black text-2xl font-semibold">₹1,999</p>
            </div>
          </div>
          <div className="col-span-3 flex flex-col border h-full bg-yellow-Tint-11 border-yellow-Tint-8 shadow-regular rounded-r-20 w-full items-center overflow-hidden">
            <Image src={medicineImage} alt="watch" width={500} />
            <div className="flex-col text-start ps-5 py-2 w-full">
              <p className="text-yellow-shade-4 text-xl font-medium">
                Supplements
              </p>
              <p className="text-black text-2xl font-semibold">₹1,999</p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      {/*  */}

      <div className="py-5 w-full">
        <div className="w-full flex justify-between items-center py-3">
          <p className="text-xl font-semibold">Fresh deals of the day</p>
          <button className="border rounded-md border-yellow-Tint-7 bg-white py-3 px-2">
            View all
          </button>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-5">
          <div className="col-span-4 pt-4 px-4 flex flex-col border h-full shadow-regular bg-yellow-Tint-11 border-yellow-Tint-8 rounded-r-20 w-full items-center">
            <p className="pt-2 pb-3 text-xl font-semibold text-left text-black w-full">
              Top Chosen Brand
            </p>
            <div className="grid grid-cols-8 gap-4">
              <Image
                src={medicineImage}
                className="col-span-4 rounded-lg"
                alt="watch"
              />
              <Image
                src={medicineImage}
                className="col-span-4 rounded-lg"
                alt="watch"
              />
              <Image
                src={medicineImage}
                className="col-span-4 rounded-lg"
                alt="watch"
              />
              <Image
                src={medicineImage}
                className="col-span-4 rounded-lg"
                alt="watch"
              />
            </div>
            <div className="flex justify-center items-center py-3 w-full">
              <button className="border text-base font-medium rounded-md border-yellow-Tint-7 bg-white py-2 px-12">
                View all
              </button>
            </div>
          </div>
          <div className="col-span-4 pt-4 px-4 flex flex-col border h-full shadow-regular bg-yellow-Tint-11 border-yellow-Tint-8 rounded-r-20 w-full items-center">
            <p className="pt-2 pb-3 text-xl font-semibold text-left text-black w-full">
              Top Chosen Brand
            </p>
            <div className="grid grid-cols-8 gap-4">
              <Image
                src={medicineImage}
                className="col-span-4 rounded-lg"
                alt="watch"
              />
              <Image
                src={medicineImage}
                className="col-span-4 rounded-lg"
                alt="watch"
              />
              <Image
                src={medicineImage}
                className="col-span-4 rounded-lg"
                alt="watch"
              />
              <Image
                src={medicineImage}
                className="col-span-4 rounded-lg"
                alt="watch"
              />
            </div>
            <div className="flex justify-center items-center py-3 w-full">
              <button className="border text-base font-medium rounded-md border-yellow-Tint-7 bg-white py-2 px-12">
                View all
              </button>
            </div>
          </div>
          <div className="col-span-4 pt-4 px-4 flex flex-col border h-full shadow-regular bg-yellow-Tint-11 border-yellow-Tint-8 rounded-r-20 w-full items-center">
            <p className="pt-2 pb-3 text-xl font-semibold text-left text-black w-full">
              Top Chosen Brand
            </p>
            <div className="grid grid-cols-8 gap-4">
              <Image
                src={medicineImage}
                className="col-span-4 rounded-lg"
                alt="watch"
              />
              <Image
                src={medicineImage}
                className="col-span-4 rounded-lg"
                alt="watch"
              />
              <Image
                src={medicineImage}
                className="col-span-4 rounded-lg"
                alt="watch"
              />
              <Image
                src={medicineImage}
                className="col-span-4 rounded-lg"
                alt="watch"
              />
            </div>
            <div className="flex justify-center items-center py-3 w-full">
              <button className="border text-base font-medium rounded-md border-yellow-Tint-7 bg-white py-2 px-12">
                View all
              </button>
            </div>
          </div>

          {/*  */}
          {/*  */}
          {/*  */}

          <div className="col-span-4 pt-4 px-4 flex flex-col border h-full shadow-regular bg-Light-Gradient-4 border-yellow-Tint-8 rounded-r-20 w-full items-center">
            <p className="pt-2 pb-3 text-xl font-semibold text-left text-black w-full">
              Top Chosen Brand
            </p>
            <div className="grid grid-cols-8 gap-4">
              <Image
                src={medicineImage}
                className="col-span-4 rounded-lg"
                alt="watch"
              />
              <Image
                src={medicineImage}
                className="col-span-4 rounded-lg"
                alt="watch"
              />
              <Image
                src={medicineImage}
                className="col-span-4 rounded-lg"
                alt="watch"
              />
              <Image
                src={medicineImage}
                className="col-span-4 rounded-lg"
                alt="watch"
              />
            </div>
            <div className="flex justify-center items-center py-3 w-full">
              <button className="border text-base font-medium rounded-md border-yellow-Tint-7 bg-white py-2 px-12">
                View all
              </button>
            </div>
          </div>
          {/*  */}
          {/*  */}
          {/*  */}

          <div className="col-span-4 pt-4 px-4 flex flex-col border h-full shadow-regular bg-Light-Gradient-4 border-yellow-Tint-8 rounded-r-20 w-full items-center">
            <p className="pt-2 pb-3 text-xl font-semibold text-left text-black w-full">
              Top Chosen Brand
            </p>
            <div className="grid grid-cols-8 gap-4">
              <Image
                src={medicineImage}
                className="col-span-4 rounded-lg"
                alt="watch"
              />
              <Image
                src={medicineImage}
                className="col-span-4 rounded-lg"
                alt="watch"
              />
              <Image
                src={medicineImage}
                className="col-span-4 rounded-lg"
                alt="watch"
              />
              <Image
                src={medicineImage}
                className="col-span-4 rounded-lg"
                alt="watch"
              />
            </div>
            <div className="flex justify-center items-center py-3 w-full">
              <button className="border text-base font-medium rounded-md border-yellow-Tint-7 bg-white py-2 px-12">
                View all
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      {/*  */}
      <div className="py-5">
        <div className="w-full flex justify-between items-center py-3">
          <p className="text-xl font-semibold">Fresh deals of the day</p>
          <button className="border rounded-md border-yellow-Tint-7 bg-white py-3 px-2">
            View all
          </button>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8 xl:grid-cols-12 gap-6">
          <div className="col-span-4 grid grid-cols-6 py-4 px-4 border h-full bg-yellow-Tint-11 border-yellow-Tint-8 rounded-r-20 w-full items-center">
            <div className="col-span-2">
              <Image src={medicineImage} className=" rounded-lg" alt="watch" />
            </div>
            <div className="col-span-3 ps-3">
              <p className="text-complimentary-red text-2xl font-semibold">
                ₹1,999
              </p>
              <p className="text-yellow-shade-1 text-2xl font-semibold">
                20% OFF
              </p>
            </div>
            <button className="text-base font-medium col-span-1 py-2 px-4">
              &gt;
            </button>
          </div>
          <div className="col-span-4 grid grid-cols-6 py-4 px-4 border h-full bg-yellow-Tint-11 border-yellow-Tint-8 rounded-r-20 w-full items-center">
            <div className="col-span-2">
              <Image src={medicineImage} className=" rounded-lg" alt="watch" />
            </div>
            <div className="col-span-3 ps-3">
              <p className="text-complimentary-red text-2xl font-semibold">
                ₹1,999
              </p>
              <p className="text-yellow-shade-1 text-2xl font-semibold">
                20% OFF
              </p>
            </div>
            <button className="text-base font-medium col-span-1 py-2 px-4">
              &gt;
            </button>
          </div>
          <div className="col-span-4 grid grid-cols-6 py-4 px-4 border h-full bg-yellow-Tint-11 border-yellow-Tint-8 rounded-r-20 w-full items-center">
            <div className="col-span-2">
              <Image src={medicineImage} className=" rounded-lg" alt="watch" />
            </div>
            <div className="col-span-3 ps-3">
              <p className="text-complimentary-red text-2xl font-semibold">
                ₹1,999
              </p>
              <p className="text-yellow-shade-1 text-2xl font-semibold">
                20% OFF
              </p>
            </div>
            <button className="text-base font-medium col-span-1 py-2 px-4">
              &gt;
            </button>
          </div>
        </div>
      </div>

      <div className="py-5 relative">
        <FilterSortButtons />
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-3 hidden xl:block bg-white h-fit rounded-lg">
          <div className="flex justify-between items-center pe-3" >
              <p className="text-sm text-black font-semibold py-2 px-3">
                Filter options
              </p>
              <p className="text-sm font-semiboldtext-black bg-signal-red rounded-full min-w-6">
                9+
              </p>
            </div>
            <hr />
            <div className="px-3 py-3">
              <p className="text-sm text-grey-grey-3 font-semibold pb-1">
                PRICE RANGE
              </p>
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-2">
                  <DropDownButton
                    color={"basic"}
                    options={[
                      { id: 1, optionName: "100" },
                      { id: 2, optionName: "200" },
                      { id: 3, optionName: "300" },
                      { id: 4, optionName: "400" },
                    ]}
                    dropDownName={"Min"}
                    onOptionSelect={(option) => {
                      router.push(option);
                    }}
                    buttonStyle={"border border-yellow-Tint-9 justify-between"}
                  />
                </div>
                <div className="col-span-2">
                  <DropDownButton
                    color={"basic"}
                    options={[
                      { id: 1, optionName: "100" },
                      { id: 2, optionName: "200" },
                      { id: 3, optionName: "300" },
                      { id: 4, optionName: "400" },
                    ]}
                    dropDownName={"Min"}
                    onOptionSelect={(option) => {
                      router.push(option);
                    }}
                    buttonStyle={"border border-yellow-Tint-9 justify-between"}
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="px-3 py-3">
              <p className="text-sm text-grey-grey-3 font-semibold pb-1">
                BRAND
              </p>
              <div className="grid grid-cols-4">
                <div className="col-span-2 flex-row justify-center items-center py-1">
                  <input
                    type="checkbox"
                    id="appleCheckbox"
                    checked
                    className="text-yellow-shade-3"
                  />
                  <label htmlFor="appleCheckbox" className="px-2">
                    Apple
                  </label>
                </div>
                <div className="col-span-2 flex-row justify-center items-center">
                  <input type="checkbox" id="appleCheckbox" />
                  <label
                    htmlFor="appleCheckbox"
                    className="px-2 text-grey-grey-3"
                  >
                    Oneplus
                  </label>
                </div>
                <div className="col-span-2 flex-row justify-center items-center">
                  <input type="checkbox" id="appleCheckbox" />
                  <label
                    htmlFor="appleCheckbox"
                    className="px-2 text-grey-grey-3"
                  >
                    Apple
                  </label>
                </div>
                <div className="col-span-2 flex-row justify-center items-center">
                  <input type="checkbox" id="appleCheckbox" />
                  <label
                    htmlFor="appleCheckbox"
                    className="px-2 text-grey-grey-3"
                  >
                    Oneplus
                  </label>
                </div>
              </div>
            </div>
            <hr />
            <div className="px-3 py-3">
              <p className="text-sm text-grey-grey-3 font-semibold pb-1">
                CUSTOMER RATING
              </p>
              <div className="grid grid-cols-4">
                <div className="col-span-4 flex-row justify-center items-center py-1">
                  <input type="checkbox" id="appleCheckbox" />
                  <label
                    htmlFor="appleCheckbox"
                    className="px-2 text-grey-grey-3"
                  >
                    4 stars & up
                  </label>
                </div>
                <div className="col-span-4 flex-row justify-center items-center py-1">
                  <input type="checkbox" id="appleCheckbox" />
                  <label
                    htmlFor="appleCheckbox"
                    className="px-2 text-grey-grey-3"
                  >
                    3 stars & up
                  </label>
                </div>
                <div className="col-span-4 flex-row justify-center items-center py-1">
                  <input type="checkbox" id="appleCheckbox" />
                  <label
                    htmlFor="appleCheckbox"
                    className="px-2 text-grey-grey-3"
                  >
                    2 stars & up
                  </label>
                </div>
                <div className="col-span-4 flex-row justify-center items-center py-1">
                  <input type="checkbox" id="appleCheckbox" />
                  <label
                    htmlFor="appleCheckbox"
                    className="px-2 text-grey-grey-3"
                  >
                    1 stars & up
                  </label>
                </div>
              </div>
            </div>
            <hr />
            <div className="px-3 py-3">
              <p className="text-sm text-grey-grey-3 font-semibold pb-1">
                SIZE
              </p>
              <div className="grid grid-cols-4">
                <div className="col-span-2 flex-row justify-center items-center py-1">
                  <input type="checkbox" id="appleCheckbox" />
                  <label
                    htmlFor="appleCheckbox"
                    className="px-2 text-grey-grey-3"
                  >
                    4 GB + 64 GB
                  </label>
                </div>
                <div className="col-span-2 flex-row justify-center items-center">
                  <input type="checkbox" id="appleCheckbox" />
                  <label
                    htmlFor="appleCheckbox"
                    className="px-2 text-grey-grey-3"
                  >
                    4 GB + 64 GB
                  </label>
                </div>
                <div className="col-span-2 flex-row justify-center items-center">
                  <input type="checkbox" id="appleCheckbox" />
                  <label
                    htmlFor="appleCheckbox"
                    className="px-2 text-grey-grey-3"
                  >
                    8 GB + 124 GB
                  </label>
                </div>
                <div className="col-span-2 flex-row justify-center items-center">
                  <input type="checkbox" id="appleCheckbox" />
                  <label
                    htmlFor="appleCheckbox"
                    className="px-2 text-grey-grey-3"
                  >
                    14 GB + 64 GB
                  </label>
                </div>
                <div className="col-span-2 flex-row justify-center items-center">
                  <input type="checkbox" id="appleCheckbox" />
                  <label
                    htmlFor="appleCheckbox"
                    className="px-2 text-grey-grey-3"
                  >
                    14 GB + 64 GB
                  </label>
                </div>
                <div className="col-span-2 flex-row justify-center items-center">
                  <input type="checkbox" id="appleCheckbox" />
                  <label
                    htmlFor="appleCheckbox"
                    className="px-2 text-grey-grey-3"
                  >
                    14 GB + 64 GB
                  </label>
                </div>
                <div className="col-span-2 flex-row justify-center items-center">
                  <input type="checkbox" id="appleCheckbox" />
                  <label
                    htmlFor="appleCheckbox"
                    className="px-2 text-grey-grey-3"
                  >
                    14 GB + 64 GB
                  </label>
                </div>
              </div>
            </div>
            <hr />
            <div className="px-3 py-3">
              <p className="text-sm text-grey-grey-3 font-semibold pb-1">
                DISCOUNT
              </p>
              <div className="grid grid-cols-4">
                <div className="col-span-4 flex-row justify-center items-center py-1">
                  <input type="checkbox" id="appleCheckbox" />
                  <label
                    htmlFor="appleCheckbox"
                    className="px-2 text-grey-grey-3"
                  >
                    10% Off or more
                  </label>
                </div>
                <div className="col-span-4 flex-row justify-center items-center py-1">
                  <input type="checkbox" id="appleCheckbox" checked />
                  <label htmlFor="appleCheckbox" className="px-2 text-black">
                    20% Off or more
                  </label>
                </div>
                <div className="col-span-4 flex-row justify-center items-center py-1">
                  <input type="checkbox" id="appleCheckbox" />
                  <label
                    htmlFor="appleCheckbox"
                    className="px-2 text-grey-grey-3"
                  >
                    30% Off or more
                  </label>
                </div>
                <div className="col-span-4 flex-row justify-center items-center py-1">
                  <input type="checkbox" id="appleCheckbox" />
                  <label
                    htmlFor="appleCheckbox"
                    className="px-2 text-grey-grey-3"
                  >
                    40% Off or more
                  </label>
                </div>
              </div>
            </div>
            <hr />
            <div className="px-3 py-3">
              <p className="text-sm text-grey-grey-3 font-semibold pb-1">
                OTHERS
              </p>
              <div className="grid grid-cols-4">
                <div className="col-span-4 flex-row justify-center items-center py-1">
                  <input type="checkbox" id="appleCheckbox" checked />
                  <label htmlFor="appleCheckbox" className="px-2 text-black">
                    Get it Tomorrow
                  </label>
                </div>
                <div className="col-span-4 flex-row justify-center items-center py-1">
                  <input type="checkbox" id="appleCheckbox" />
                  <label
                    htmlFor="appleCheckbox"
                    className="px-2 text-grey-grey-3"
                  >
                    Free Delivery
                  </label>
                </div>
                <div className="col-span-4 flex-row justify-center items-center p-2 border">
                  <input type="checkbox" id="appleCheckbox" />
                  <label
                    htmlFor="appleCheckbox"
                    className="px-2 text-grey-grey-3"
                  >
                    Check for Delivery
                  </label>
                  <div className="flex-row justify-center border relative border-yellow-Tint-9 rounded-lg w-fit ">
                    <input
                      type="text"
                      inputMode="numeric"
                      id="appleCheckbox"
                      className="absulute focus:border-none"
                    />
                    <button
                      htmlFor="appleCheckbox"
                      className="absulute p-0.5 px-2 rounded-r-lg bg-yellow-Tint-9 "
                    >
                      Check
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-9 gap-4">
            <div className="flex justify-between items-center py-1 w-full">
              <p className="text-sm md:text-xl font-semibold" >Result (43k Items)</p>
              <IconTextButton
                color={"primary"}
                iconClasses="h-3 w-3 text-black "
                classes="text-xs md:text-base py-1 px-3"
                onClick={() => router.push("/")}
                Icon={ArrowsUpDownIcon}
                textPostion={"left"}
                textClasses=""  
              >
                Short
              </IconTextButton>
            </div>
            <div className="grid grid-cols-6 border-b-2 h-fit py-4 w-full items-center">
              <div className="col-span-2 relative h-full">
                <Image
                  src={medicineImage}
                  className=" rounded-lg"
                  alt="watch"
                  placeholder="blur"
                  loading="lazy"
                  fill
                />
              </div>
              <div className="col-span-4 px-2">
                <p className="text:xs md:text-xl font-medium text-yellow-shade-2">
                  Aquaguard Delight NXT RO+UV+Taste Adjuster Water Purifier (6L)
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
            </div>
            <div className="grid grid-cols-6 border-b-2 h-fit py-4 w-full items-center">
              <div className="col-span-2 relative h-full">
                <Image
                  src={medicineImage}
                  className=" rounded-lg"
                  alt="watch"
                  placeholder="blur"
                  loading="lazy"
                  fill
                />
              </div>
              <div className="col-span-4 px-2">
                <p className="text:xs md:text-xl font-medium text-yellow-shade-2">
                  Aquaguard Delight NXT RO+UV+Taste Adjuster Water Purifier (6L)
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
            </div>
            <div className="grid grid-cols-6 border-b-2 h-fit py-4 w-full items-center">
              <div className="col-span-2 relative h-full">
                <Image
                  src={medicineImage}
                  className=" rounded-lg"
                  alt="watch"
                  placeholder="blur"
                  loading="lazy"
                  fill
                />
              </div>
              <div className="col-span-4 px-2">
                <p className="text:xs md:text-xl font-medium text-yellow-shade-2">
                  Aquaguard Delight NXT RO+UV+Taste Adjuster Water Purifier (6L)
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
            </div>

            <div className="grid grid-cols-6 border-b-2 h-fit py-4 w-full items-center">
              <div className="col-span-2 relative h-full">
                <Image
                  src={medicineImage}
                  className=" rounded-lg"
                  alt="watch"
                  placeholder="blur"
                  loading="lazy"
                  fill
                />
              </div>
              <div className="col-span-4 px-2">
                <p className="text:xs md:text-xl font-medium text-yellow-shade-2">
                  Aquaguard Delight NXT RO+UV+Taste Adjuster Water Purifier (6L)
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
            </div>
            <div className="grid grid-cols-6 border-b-2 h-fit py-4 w-full items-center">
              <div className="col-span-2 relative h-full">
                <Image
                  src={medicineImage}
                  className=" rounded-lg"
                  alt="watch"
                  placeholder="blur"
                  loading="lazy"
                  fill
                />
              </div>
              <div className="col-span-4 px-2">
                <p className="text:xs md:text-xl font-medium text-yellow-shade-2">
                  Aquaguard Delight NXT RO+UV+Taste Adjuster Water Purifier (6L)
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
            </div>
            <div className="grid grid-cols-6 border-b-2 h-fit py-4 w-full items-center">
              <div className="col-span-2 relative h-full">
                <Image
                  src={medicineImage}
                  className=" rounded-lg"
                  alt="watch"
                  placeholder="blur"
                  loading="lazy"
                  fill
                />
              </div>
              <div className="col-span-4 px-2">
                <p className="text:xs md:text-xl font-medium text-yellow-shade-2">
                  Aquaguard Delight NXT RO+UV+Taste Adjuster Water Purifier (6L)
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
            </div>
            <div className="grid grid-cols-6 border-b-2 h-fit py-4 w-full items-center">
              <div className="col-span-2 relative h-full">
                <Image
                  src={medicineImage}
                  className=" rounded-lg"
                  alt="watch"
                  placeholder="blur"
                  loading="lazy"
                  fill
                />
              </div>
              <div className="col-span-4 px-2">
                <p className="text:xs md:text-xl font-medium text-yellow-shade-2">
                  Aquaguard Delight NXT RO+UV+Taste Adjuster Water Purifier (6L)
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
            </div>
            <div className="grid grid-cols-6 border-b-2 h-fit py-4 w-full items-center">
              <div className="col-span-2 relative h-full">
                <Image
                  src={medicineImage}
                  className=" rounded-lg"
                  alt="watch"
                  placeholder="blur"
                  loading="lazy"
                  fill
                />
              </div>
              <div className="col-span-4 px-2">
                <p className="text:xs md:text-xl font-medium text-yellow-shade-2">
                  Aquaguard Delight NXT RO+UV+Taste Adjuster Water Purifier (6L)
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
            </div>

            <div className="grid grid-cols-6 border-b-2 h-fit py-4 w-full items-center">
              <div className="col-span-2 relative h-full">
                <Image
                  src={medicineImage}
                  className=" rounded-lg"
                  alt="watch"
                  placeholder="blur"
                  loading="lazy"
                  fill
                />
              </div>
              <div className="col-span-4 px-2">
                <p className="text:xs md:text-xl font-medium text-yellow-shade-2">
                  Aquaguard Delight NXT RO+UV+Taste Adjuster Water Purifier (6L)
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
