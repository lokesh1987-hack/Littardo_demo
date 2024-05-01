import React, { useState } from "react";
import {
  AdjustmentsHorizontalIcon,
  ArrowsUpDownIcon,
} from "@heroicons/react/24/solid";
import DropDownButton from "@app/Components/Buttons/DropDownButton";

function FilterSortButtons() {
  const [isFilterShow, setIsFilterShow] = useState(false);

  return (
    <>
      {!isFilterShow && (
        <div className="sticky top-[92%] flex justify-center md:hidden z-10">
          <div className="w-fit flex xl:hidden border border-yellow-Tint-7 rounded-full text-xs text-black font-medium overflow-hidden">
            <button
              className="bg-white py-1 px-1 min-w-24 flex items-center justify-center"
              onClick={() => {
                console.log("Filter");
                setIsFilterShow(true);
              }}
            >
              <AdjustmentsHorizontalIcon className="mr-1 w-4 h-5" />
              <p> Filter </p>
            </button>
            <button
              className="bg-yellow-Tint-7 py-1 px-1 min-w-24 flex items-center justify-center"
              onClick={() => {
                console.log("Sort");
              }}
            >
              <ArrowsUpDownIcon className="mr-1 w-4 h-5" />
              <p> Sort by </p>
            </button>
          </div>
        </div>
      )}
      <div className="w-full md:flex justify-between items-center py-3">
        <p className="text-xl font-semibold">Listing Page</p>
        <div className="hidden w-fit md:flex xl:hidden border border-yellow-Tint-7 rounded-full text-xs text-black font-medium overflow-hidden">
          <button
            className="bg-white py-1 px-1 min-w-24 flex items-center justify-center"
            onClick={() => {
              setIsFilterShow(true);
              console.log("fliter");
            }}
          >
            <AdjustmentsHorizontalIcon className="mr-1 w-4 h-5" />
            <p> Filter </p>
          </button>
          <button
            className="bg-yellow-Tint-7 py-1 px-1 min-w-24 flex items-center justify-center"
            onClick={() => {
              console.log("Sort");
            }}
          >
            <ArrowsUpDownIcon className="mr-1 w-4 h-5" />
            <p> Sort by </p>
          </button>
        </div>
      </div>
      {isFilterShow && (
        <div className="absolute z-10 flex justify-center items-center col-span-3 md:inset-0 h-[calc(100%-1rem)] max-h-full rounded-lg">
          <div className="max-w-[90%] md:min-w-[60%] md:max-w-[70%] bg-white">
            <p className="text-sm text-black font-semibold py-2 px-3">
              Filter options
            </p>
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
        </div>
      )}
    </>
  );
}

export default FilterSortButtons;
