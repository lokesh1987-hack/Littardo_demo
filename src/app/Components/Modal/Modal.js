import React, { useState, useEffect, useRef } from "react";
import style from '@Styles/Modal.module.scss'

function Modal() {
  const SearchFormRef = useRef();

//   useEffect(() => {
//     document.getElementsByTagName("main")[0].className = "blur-sm";
// }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        SearchFormRef.current &&
        !SearchFormRef.current.contains(event.target)
      ) {
        setShowSearch(false);
        setShowSearchResult(false);
        document.getElementsByTagName("main")[0].className = "";
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [SearchFormRef]);
  return (
    <div className={`${style.modal_popup} absolute top-1/2 left-1/2 bg-white p-5 `}>
      <div ref={SearchFormRef} className=" bg-white p-5">
        <div>ddlld</div>
        <div>jbhdbhbdh</div>
        <div>ddlld</div>
        <div>jbhdbhbdh</div>
        <div>ddlld</div>
        <div>jbhdbhbdh</div>
        <div>ddlld</div>
        <div>jbhdbhbdh</div>
        <div>ddlld</div>
        <div>jbhdbhbdh</div>
      </div>
    </div>
  );
}

export default Modal;
