"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const Form: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Name is required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .min(10, "Invalid number!")
      .required("Phone number is required"),
    message: Yup.string()
      .min(2, "Too Short!")
      .max(100, "Too Long!")
      .required("Message is required"),
  });

  const handleSubmit = (values: FormValues) => {
    alert(JSON.stringify(values, null, 2));
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className=" flex justify-center items-center h-screen">
      <div className=" w-full md:w-[480px] h-full md:h-[700px] ">
        <div className=" text-center">
          <h4 className="text-[#FA58A1] text-xl pb-1 font-bold ">Contact us</h4>
          <h1 className="text-[#101828] text-5xl font-bold  pb-1">
            Get in touch
          </h1>
          <p className="text-[#475467] text-base md:text-[20px]  ">
            We’d love to hear from you. Please fill out this form.
          </p>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-4 pt-8 px-1 md:px-8 "
        >
          <div className="flex gap-2 flex-col md:flex-row justify-between">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="text-[#344054]">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                placeholder="First name"
                className=" px-2 py-3 mt-1 border border-[#D0D5DD] rounded-md"
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <div className=" text-red-600">{formik.errors.firstName}</div>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                placeholder="Last name"
                className=" px-2 py-3 mt-1 border border-[#D0D5DD] rounded-md"
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <div className=" text-red-600">{formik.errors.lastName}</div>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="you@gmail.com"
              className="px-2 py-3 mt-1 border border-[#D0D5DD] rounded-md"
            />
            {formik.touched.email && formik.errors.email && (
              <div className=" text-red-600">{formik.errors.email}</div>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="number"
              id="phone"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              placeholder=" +1233 (540) 977-343"
              className="px-2 py-3 mt-1 border border-[#D0D5DD] rounded-md"
            />
            {formik.touched.phone && formik.errors.phone && (
              <div className=" text-red-600">{formik.errors.phone}</div>
            )}
          </div>

          <div className="flex flex-col items-start">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              placeholder="Leave us a message.............."
              className="px-2 py-3 mt-1 border border-[#D0D5DD] rounded-md w-full h-[134px] "
            />
            {formik.touched.message && formik.errors.message && (
              <div className=" text-red-600">{formik.errors.message}</div>
            )}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className=" bg-[#FC6DC1] text-white py-4 text-base rounded-md mt-4"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
