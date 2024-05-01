import React from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";

function MobileMenuSearch({ onClick, icon="" }) {
  return (
    <button className="bg-white border-2 rounded-md border-yellow-Tint-5 px-3 md:px-4 md:py-1" onClick={onClick}>
      {icon == "search" ? (
        <MagnifyingGlassIcon className="text-black h-10 w-5 font-bold" />
      ) : (
        <XMarkIcon className="text-black h-10 w-5 font-bold" />
      )}
    </button>
  );
}

export default MobileMenuSearch;
