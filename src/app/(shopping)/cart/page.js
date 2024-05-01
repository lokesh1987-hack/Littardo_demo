import React from "react";
import Cart from "@Components/Cart/Cart";
import WishList from "@Components/Cart/WishList"

function CartPage() {
  return (
    <div className="container px-3 md:px:6 xl:px-4 2xl:px-6 mx-auto sm:max-w-container-sm md:max-w-container-md lg:max-w-container-lg xl:max-w-container-xl 2xl:max-w-container-2xl bg-custom-grey relative" >
      <Cart />
      <WishList />
    </div>
  );
}

export default CartPage;
