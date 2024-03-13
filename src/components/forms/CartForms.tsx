"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import { CiLock } from "react-icons/ci";
import * as Yup from "yup";
import CardPay from "../CardPay";

interface CartFormsValue {
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
}

export default function CartForms() {
  const [loading, setLoading] = useState(false);
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "First name must be minimum 2")
      .max(100, "First name must not be more than 100 characters")
      .required("First name is required"),
    lastName: Yup.string()
      .min(2, "Last name must be minimum 2")
      .max(100, "Last name must not be more than 100 characters")
      .required("Last name is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zip: Yup.string().required("Zip is required"),
    phone: Yup.string().required("Phone is required"),
    cardNumber: Yup.string().required("Card number is required"),
    expiry: Yup.string().required("Expiry is required"),
    cvc: Yup.string().required("CVC is required"),
  });

  const handleSubmit = async (values: CartFormsValue) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    const queryParams = new URLSearchParams();
    Object.entries(values).forEach(([key, value]) => {
      queryParams.append(key, value);
    });
    const queryString = queryParams.toString();
    window.location.href = `/preview?${queryString}`;
  };

  const formik = useFormik({
    initialValues: {
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
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <main className="flex-1">
      <form
        onSubmit={formik.handleSubmit}
        className=" px-1 md:px-4 flex flex-col gap-4"
      >
        {/* DELIVERY INFO  */}
        <div className="bg-white border rounded-lg px-2 md:px-4 shadow-lg ">
          <div className="pt-3 ">
            <h1 className=" text-3xl font-bold">Delivery Info</h1>
            <hr className=" my-3" />
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4 mt-2  ">
            <div className="flex flex-col gap-2 mb-3 w-full ">
              <label htmlFor="firstName " className="font-bold text-[#545454]">
                First name*
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                placeholder="Robert"
                className="border border-[#D8D9DD] bg-white text-black  px-4 py-3 rounded-md w-full "
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <div className="error text-red-600">
                  {formik.errors.firstName}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2 mb-3 w-full">
              <label htmlFor="lastName" className="font-bold text-[#545454]">
                Last name*
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                placeholder="Damas"
                className="border border-[#D8D9DD] bg-white text-black  px-4 py-3 rounded-md w-full "
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <div className="error text-red-600">
                  {formik.errors.lastName}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-3 w-full ">
            <label htmlFor="address" className="font-bold text-[#545454]">
              Address*
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              placeholder="8729 Bay Ave Brooklyn"
              className="border border-[#D8D9DD] bg-white text-black px-4 py-3 rounded-md w-full "
            />
            {formik.touched.address && formik.errors.address && (
              <div className="error text-red-600">{formik.errors.address}</div>
            )}
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-4 ">
            <div className="flex flex-col gap-2 mb-3 w-full ">
              <label htmlFor="city" className="font-bold text-[#545454]">
                City*
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                placeholder="New York"
                className="border border-[#D8D9DD] bg-white text-black px-4 py-3 rounded-md w-full "
              />
              {formik.touched.city && formik.errors.city && (
                <div className="error text-red-600">{formik.errors.city}</div>
              )}
            </div>
            <div className="flex flex-col gap-2 mb-3 w-full ">
              <label htmlFor="state" className="font-bold text-[#545454]">
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formik.values.state}
                onChange={formik.handleChange}
                placeholder="Hudson"
                className="border border-[#D8D9DD] bg-white text-black px-4 py-3 rounded-md w-full "
              />
              {/* {formik.touched.lastName && formik.errors.lastName && (
              <div className="error">{formik.errors.lastName}</div>
            )} */}
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-4 ">
            <div className="flex flex-col gap-2 mb-3 w-full ">
              <label htmlFor="zip" className="font-bold text-[#545454]">
                Zip*
              </label>
              <input
                type="text"
                id="zip"
                name="zip"
                value={formik.values.zip}
                onChange={formik.handleChange}
                placeholder="NY 11218"
                className="border border-[#D8D9DD] bg-white text-black px-4 py-3 rounded-md w-full "
              />
              {formik.touched.zip && formik.errors.zip && (
                <div className="error text-red-600">{formik.errors.zip}</div>
              )}
            </div>
            <div className="flex flex-col gap-2 mb-3 w-full ">
              <label htmlFor="phone" className="font-bold text-[#545454]">
                Phone*
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                placeholder="+1 262-872-0778"
                className="border border-[#D8D9DD] bg-white text-black px-4 py-3 rounded-md w-full "
              />
              {formik.touched.phone && formik.errors.phone && (
                <div className="error text-red-600">{formik.errors.phone}</div>
              )}
            </div>
          </div>
        </div>

        {/* PAYMENT MODE (CREDIT CARD | PAYPAL) */}
        <div className="bg-white border rounded-lg px-4 shadow-lg ">
          <div className="pt-3 ">
            <div className="flex flex-row justify-between">
              <h1 className=" text-3xl font-bold">Payment</h1>
              <div>
                <CardPay />
              </div>
            </div>
            <hr className=" my-3" />
          </div>
          <div>
            <div className="flex flex-col gap-2 mb-3 w-full ">
              <label htmlFor="cardNumber" className="font-bold text-[#545454]">
                Card Number*
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formik.values.cardNumber}
                onChange={formik.handleChange}
                placeholder="4114 555 999 9999 222 "
                className="border border-[#D8D9DD] bg-white text-black px-4 py-3 rounded-md w-full "
              />
              {formik.touched.cardNumber && formik.errors.cardNumber && (
                <div className="error text-red-600">
                  {formik.errors.cardNumber}
                </div>
              )}
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-4 ">
              <div className="flex flex-col gap-2 mb-3 w-full ">
                <label htmlFor="expiry" className="font-bold text-[#545454]">
                  Expiry*
                </label>
                <input
                  type="text"
                  id="expiry"
                  name="expiry"
                  value={formik.values.expiry}
                  onChange={formik.handleChange}
                  placeholder="20 / 30"
                  className="border border-[#D8D9DD] bg-white text-black px-4 py-3 rounded-md w-full "
                />
                {formik.touched.expiry && formik.errors.expiry && (
                  <div className="error text-red-600">
                    {formik.errors.expiry}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-2 mb-3 w-full ">
                <label htmlFor="cvc" className="font-bold text-[#545454]">
                  CVC*
                </label>
                <input
                  type="text"
                  id="cvc"
                  name="cvc"
                  value={formik.values.cvc}
                  onChange={formik.handleChange}
                  placeholder="888"
                  className="border border-[#D8D9DD] bg-white text-black px-4 py-3 rounded-md w-full "
                />
                {formik.touched.cvc && formik.errors.cvc && (
                  <div className="error text-red-600">{formik.errors.cvc}</div>
                )}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className=" bg-[#0469FF] w-full flex items-center justify-center gap-2 px-4 py-4  my-3 rounded-md text-white"
          >
            <CiLock />
            <span>{loading ? "loading" : "Pay Now $895"}</span>
          </button>
        </div>
      </form>
    </main>
  );
}
