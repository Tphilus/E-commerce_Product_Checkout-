import Image from "next/image";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

interface Props {
  deletePost: (id: number) => void;
}

export default function ShoppingCartCard({ cartItem }: any) {
  return (
    <div className=" py-4 px-1 md:px-2 ">
      <div className="flex flex-row gap-1 w-full justify-between">
        <div className=" flex gap-2 md:gap-4">
          <div className="bg-[#F8F8F8] rounded-md w-30 lg:w-28 flex justify-center items-center">
            <Image
              src={cartItem.imgURL}
              alt="Img"
              className=" px-2 max-w-full max-h-full"
            />
          </div>

          <div>
            <h1 className=" text-xl md:text-2xl text-black mb-2 font-semibold ">
              {cartItem.title}
            </h1>
            <p className="text-[#909090] text-base mb-2">{cartItem.text}</p>
            <p className="text-[#909090] text-base"> ID: {cartItem.id} </p>
          </div>
        </div>

        <div className=" flex flex-row gap-1 md:gap-2">
          <div>
            <p className=" text-black text-2xl mb-2">${cartItem.price}</p>
            <p className="text-[#909090] mb-2 ">
              Size:
              <span className=" text-blue-500 font-bold ml-1 ">
                ${cartItem.size}
              </span>
            </p>
            <p className=" text-[#909090]">
              QTY:
              <span className=" text-blue-500 font-bold ml-1">
                {cartItem.qty}
              </span>
            </p>
          </div>

          <div>
            <AiOutlineClose className=" cursor-pointer  md:text-2xl text-[#909090]" />
          </div>
        </div>
      </div>
    </div>
  );
}
