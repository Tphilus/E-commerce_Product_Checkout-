import React from "react";
import ShoppingCartCard from "./ShoppingCartCard";
import { SHOPPINCARTDATA } from "@/DammyData/dammy_data";

export default function ShoppingCart() {
  // const handlerDelete = (id: number) => {};
  return (
    <div className=" flex-1 bg-white rounded-lg shadow-lg">
      <div className=" p-3">
        <h1 className=" text-3xl font-bold">Shopping Cart</h1>
        <hr className=" mt-3" />

        <div className="mt-6">
          {SHOPPINCARTDATA?.map((cartItem) => (
            <ShoppingCartCard
              key={cartItem.id}
              cartItem={cartItem}
              // handlerDelete={handlerDelete}
            />
          ))}
        </div>

        <hr className=" mt-3" />

        <div className="flex justify-between px-2">
          <div className="my-2 ">
            <h2 className=" text-xl text-[#909090] font-semibold mb-2">
              Subtotal
            </h2>
            <h2 className=" text-xl text-[#909090] font-semibold">Delivery</h2>
          </div>
          <div className="my-2">
            <p className=" text-xl text-black font-semibold mb-2">$895.00</p>
            <p className=" text-xl text-black font-semibold"> $0.00 </p>
          </div>
        </div>
        <hr className=" mt-3" />
        <div className="mt-3 mb-5 px-2 flex justify-between">
          <div>
            <h2 className=" text-xl text-[#909090] font-semibold ">Total</h2>
          </div>
          <div>
            <p className=" text-xl text-black font-semibold">$895.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
