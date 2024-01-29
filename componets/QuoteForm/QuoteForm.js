import React, { useState } from "react";

import "./QuoteForm.css";

import { useForm } from "react-hook-form";

import { useRef } from "react";
import emailjs from "emailjs-com";

function QuoteForm({ textColor }) {
  const [formMessage, setFormMessage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const form = useRef();

  const onSubmit = (data) => {
    // form submission code
    setFormMessage("Sending your response...");

    const trimmedData = Object.fromEntries(
      Object.entries(data).map(([key, value]) => [key, value.trim()])
    );

    emailjs
      .send(
        "service_76r68yq",
        "template_u930eek",
        {
          name: trimmedData.name,
          email: trimmedData.email,
          phone: trimmedData.phone,
        },
        "xCNRqubvm1zpPRZCe"
      )
      .then(
        (result) => {
          // console.log(result.text);
          setFormMessage("We have received your Message!");
        },
        (error) => {
          console.log(error);
          setFormMessage(
            "Unable to process your request currently! Please try again later"
          );
        }
      );
    reset();
  };
  // console.log("text color form quote form");
  // console.log(textColor);

  let colorClass = "";
  if (textColor === "white") {
    colorClass = "white";
  }
  return (
    <div className={`quote-form `}>
      <h3>Let's Work Together to Explore Your Project!</h3>
      <span>
        Share Your Information Below and Request a Tailored Brand Marketing
        Strategy Today!
      </span>
      <div className="quote-form-input-section">
        {formMessage ? (
          <div>
            <h3>{formMessage}</h3>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} ref={form}>
            <div className="quote-form-input-border">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 6C11.4696 6 10.9609 6.21071 10.5858 6.58579C10.2107 6.96086 10 7.46957 10 8C10 8.53043 10.2107 9.03914 10.5858 9.41421C10.9609 9.78929 11.4696 10 12 10C12.5304 10 13.0391 9.78929 13.4142 9.41421C13.7893 9.03914 14 8.53043 14 8C14 7.46957 13.7893 6.96086 13.4142 6.58579C13.0391 6.21071 12.5304 6 12 6ZM12 13C14.67 13 20 14.33 20 17V20H4V17C4 14.33 9.33 13 12 13ZM12 14.9C9.03 14.9 5.9 16.36 5.9 17V18.1H18.1V17C18.1 16.36 14.97 14.9 12 14.9Z"
                  fill="#3D3D3D"
                />
              </svg>
              <input
                type="text"
                name="name"
                placeholder="Name*"
                {...register("name", { required: true })}
              />
              {errors.name && <p>This field is required</p>}
            </div>
            <div className="quote-form-input-border">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 15 12"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.39844 2.55357V9.61748C1.39844 10.0858 1.5845 10.535 1.91568 10.8662C2.24686 11.1974 2.69605 11.3835 3.16441 11.3835H11.9943C12.4627 11.3835 12.9118 11.1974 13.243 10.8662C13.5742 10.535 13.7603 10.0858 13.7603 9.61748V2.55357C13.7603 2.08521 13.5742 1.63602 13.243 1.30484C12.9118 0.973655 12.4627 0.787598 11.9943 0.787598H3.16441C2.69605 0.787598 2.24686 0.973655 1.91568 1.30484C1.5845 1.63602 1.39844 2.08521 1.39844 2.55357Z"
                  stroke="black"
                  stroke-width="0.882988"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.16406 3.43652L7.579 6.08549L11.9939 3.43652"
                  stroke="black"
                  stroke-width="0.882988"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <input
                type="email"
                name="email"
                placeholder="Email*"
                {...register("email", { required: true })}
              />
              {errors.email && <p>This field is required</p>}
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M15.2298 10.7567L11.4609 9.06793L11.4505 9.06313C11.2549 8.97944 11.0414 8.94586 10.8295 8.96541C10.6176 8.98497 10.4139 9.05705 10.2369 9.17513C10.2161 9.18889 10.196 9.20385 10.1769 9.21993L8.22969 10.8799C6.99608 10.2807 5.72246 9.01673 5.12326 7.79911L6.78567 5.82229C6.80167 5.80229 6.81687 5.78229 6.83127 5.76069C6.94682 5.58413 7.01692 5.38175 7.03534 5.17155C7.05377 4.96135 7.01994 4.74985 6.93687 4.55588V4.54628L5.24326 0.771045C5.13345 0.517655 4.94464 0.306573 4.705 0.169311C4.46537 0.0320479 4.18777 -0.0240334 3.91365 0.0094382C2.82961 0.152085 1.83457 0.684459 1.11436 1.50713C0.394161 2.3298 -0.00195276 3.3865 7.23898e-06 4.47988C7.23898e-06 10.8319 5.16806 16 11.5201 16C12.6135 16.002 13.6702 15.6058 14.4929 14.8856C15.3155 14.1654 15.8479 13.1704 15.9906 12.0864C16.0241 11.8123 15.9681 11.5348 15.831 11.2952C15.6939 11.0556 15.483 10.8667 15.2298 10.7567ZM11.5201 14.72C8.80519 14.717 6.2023 13.6372 4.28255 11.7174C2.3628 9.7977 1.28298 7.19481 1.28002 4.47988C1.27701 3.69867 1.55846 2.94306 2.07182 2.35419C2.58517 1.76531 3.29532 1.38342 4.06965 1.27985C4.06933 1.28304 4.06933 1.28626 4.06965 1.28945L5.74966 5.04949L4.09605 7.02871C4.07926 7.04802 4.06402 7.06861 4.05045 7.09031C3.93006 7.27504 3.85943 7.48775 3.84542 7.7078C3.8314 7.92786 3.87447 8.1478 3.97045 8.34632C4.69525 9.82873 6.18887 11.3111 7.68728 12.0352C7.88726 12.1302 8.10847 12.1718 8.32932 12.1558C8.55017 12.1398 8.7631 12.0668 8.94729 11.944C8.96783 11.9301 8.9876 11.9152 9.0065 11.8992L10.9513 10.2399L14.7114 11.924H14.7202C14.6178 12.6994 14.2365 13.411 13.6475 13.9256C13.0586 14.4402 12.3023 14.7226 11.5201 14.72Z"
                  fill="#3D3D3D"
                />
              </svg>
              <input
                type="tel"
                name="phone"
                placeholder="Phone*"
                {...register("phone", {
                  required: true,
                  pattern: {
                    value: /^\+?\d{8,}$/,
                    message: "Invalid phone number (minimum 8 digits required)",
                  },
                })}
              />
              {errors.phone && <p>{errors.phone.message}</p>}
            </div>
            <button type="submit">Get a Quote</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default QuoteForm;
