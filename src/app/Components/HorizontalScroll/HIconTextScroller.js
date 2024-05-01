import React from 'react'
import Image from "next/image";

function HIconTextScroller({data, classes}) {
  return (
    <div className="py-3 md:py-5">
        <ul className={`flex overflow-auto ${classes}`}>
          {data?.map((category) => (
            <li
              key={category.id}
              style={{ margin: "0 1rem", minWidth: "53px", maxWidth: "54px" }}
            >
              <Image
                src={category.image}
                alt={category.name}
                width={76}
                height={76}
              />
              <p
                className="text-xs mt-2"
                style={{ textAlign: "center", wordSpacing: "0px" }}
              >
                {category.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
  )
}

export default HIconTextScroller