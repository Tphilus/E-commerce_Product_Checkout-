import React from "react";
import ShoppingCart from "./shopping/ShoppingCart";
import CartForms from "./forms/CartForms";

export default function Checkout() {
  return (
    <div className="  h-screen m-auto flex pt-1 justify-center items-center  ">
      <div className=" w-full lg:w-[80%] h-full p-2">
        <div className="flex w-full gap-4 lg:gap-10 flex-col md:flex-row justify-between mt-4">
          <ShoppingCart />
          <CartForms />

          {/* <ShoppingCart /> */}
        </div>
      </div>
    </div>
  );
}
