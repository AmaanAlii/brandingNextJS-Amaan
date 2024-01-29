'use client'
import React from "react";
import "./ContactForm.css";

import { useForm, Controller } from "react-hook-form";

import { useRef, useState } from "react";

import emailjs from "emailjs-com";

import "react-phone-input-2/lib/bootstrap.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function ContactForm() {
  const [formMessage, setFormMessage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();

  const form = useRef();

  const onSubmit = (data) => {
    // Form submission code
    const trimmedData = Object.fromEntries(
      Object.entries(data).map(([key, value]) => [key, value.trim()])
    );

    setFormMessage("Sending your response...");

    emailjs
      .send(
        "service_76r68yq",
        "template_dhq1f93",
        {
          name: trimmedData.name,
          email: trimmedData.email,
          website: trimmedData.website,
          message: trimmedData.message,
          phone: trimmedData.phone,
        },
        "xCNRqubvm1zpPRZCe"
      )
      .then(
        (result) => {
          setFormMessage("We have received your Message!");
        },
        (error) => {
          setFormMessage(
            "Unable to process your request currently! Please try again later"
          );
        }
      );
    reset();
  };

  return (
    <div className="contact-form-main">
      {formMessage ? (
        <div>
          <h3>{formMessage}</h3>
        </div>
      ) : (
        <form
          className="main-form"
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name*"
              {...register("name", {
                required: true,
                pattern: {
                  value: /\S/,
                  message: "Please enter a valid name",
                },
                validate: (value) => {
                  return !!value.trim();
                },
              })}
            />
            {errors.name && <p>This field is required</p>}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email*"
              {...register("email", {
                required: true,
                pattern: {
                  value: /\S/,
                  message: "Please enter a valid email",
                },
                validate: (value) => {
                  return !!value.trim();
                },
              })}
            />
            {errors.email && <p>This field is required</p>}
          </div>
          <div>
            <Controller
              name="phone"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <PhoneInput
                  inputProps={{
                    name: "phone",
                    required: true,
                    autoFocus: true,
                  }}
                  {...field}
                  country={"ae"}
                  enableSearch={true}
                  placeholder="Phone*"
                />
              )}
            />
            {errors.phone && <p>{errors.phone.message}</p>}
          </div>
          <div>
            <input
              type="text"
              name="website"
              placeholder="Website"
              {...register("website", {
                required: false,
                pattern: {
                  value: /^www\.[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/,
                  message: "Please enter a valid URL - www.example.com",
                },
              })}
            />
            {errors.website && <p>{errors.website.message}</p>}
          </div>
          <div className="main-form-textarea">
            <textarea
              type="text"
              name="message"
              placeholder="Message*"
              {...register("message", {
                required: true,
                pattern: {
                  value: /\S/,
                  message: "Please enter a valid message",
                },
                validate: (value) => {
                  return !!value.trim();
                },
              })}
            />
            {errors.message && <p>This field is required</p>}
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default ContactForm;
