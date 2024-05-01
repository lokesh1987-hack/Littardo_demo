import React from "react";

function HTextScroller({ data, classes }) {
  return (
    <div
      className={`container xl:max-w-container-xl 2xl:max-w-container-2xl bg-white px-6 py-2 w-full whitespace-nowrap overflow-auto flex flex-row ${classes}`}
    >
      {data?.map((category, i) => (
        <span className="text-sm" key={category.id}>
          {category.name}
          <span className={`mr-1 ml-1 px-1 2xl:px-4 ${data.length == i + 1 && "hidden"}`}>|</span>
        </span>
      ))}
    </div>
  );
}
export default HTextScroller;
