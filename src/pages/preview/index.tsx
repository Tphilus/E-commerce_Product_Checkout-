"use client";
import React, { useState, useEffect } from "react";
import { CiLock } from "react-icons/ci";

type Props = {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  cardNumber: string;
  expiry: string;
  cvc: string;
};

export default function index() {
  const [loading, setLoading] = useState(false);
  const [deliveryInfo, setDeliveryInfo] = useState<Props>({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const firstName = urlParams.get("firstName");
    const lastName = urlParams.get("lastName");
    const address = urlParams.get("address");
    const city = urlParams.get("city");
    const state = urlParams.get("state");
    const zip = urlParams.get("zip");
    const phone = urlParams.get("phone");
    const cardNumber = urlParams.get("cardNumber");
    const expiry = urlParams.get("expiry");
    const cvc = urlParams.get("cvc");

    setDeliveryInfo({
      firstName: firstName || "",
      lastName: lastName || "",
      address: address || "",
      city: city || "",
      state: state || "",
      zip: zip || "",
      phone: phone || "",
      cardNumber: cardNumber || "",
      expiry: expiry || "",
      cvc: cvc || "",
    });
  }, []);

  return (
    <main className="w-full md:w-[50%] border bg-white text-black rounded-lg px-4 shadow-lg m-auto mt-2 py-4 lg:mt-20">
      <div className="px-4">
        <div>
          <h1 className="text-3xl mt-3">Delivery info</h1>
          <hr className="my-4" />
          <div className="flex justify-between ">
            <div className="text-xl">
              <h2>First Name</h2>
              <h2>Last Name</h2>
              <h2>Address</h2>
              <h2>City</h2>
              <h2>State</h2>
              <h2>Zip</h2>
              <h2>Phone</h2>
            </div>

            <div className="text-xl text-end">
              <p>{deliveryInfo.firstName}</p>
              <p>{deliveryInfo.lastName}</p>
              <p>{deliveryInfo.address}</p>
              <p>{deliveryInfo.city}</p>
              <p>{deliveryInfo.state}</p>
              <p>{deliveryInfo.zip}</p>
              <p>{deliveryInfo.phone}</p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-3xl mt-3">Amount</h1>
          <hr className="my-4" />
          <div className="flex justify-between ">
            <div className="text-xl">
              <p>Subtotal</p>
              <p>Delivery</p>
              <p>Total</p>
            </div>
            <div className="text-xl text-end">
              <p>$895.00</p>
              <p>$0.00</p>
              <p>$895.00</p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-3xl mt-3">Payment</h1>
          <hr className="my-4" />
          <div className="flex justify-between ">
            <div className="text-xl">
              <h1>Payment</h1>
              <h2>Card Number</h2>
              <h2>Expiry</h2>
              <h2>CVC</h2>
            </div>

            <div className="text-xl text-end">
              <p>{deliveryInfo.cardNumber}</p>
              <p>{deliveryInfo.expiry}</p>
              <p>{deliveryInfo.cvc}</p>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#0469FF] w-full flex items-center justify-center gap-2 px-4 py-4 my-4 rounded-md text-white"
        >
          <CiLock />
          <span>{loading ? "loading" : "Pay Now "}</span>
        </button>
      </div>
    </main>
  );
}
