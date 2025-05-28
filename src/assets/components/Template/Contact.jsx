import React from "react";

export default function Contact({
  data,
  showIcon,
  contactClass,
  contactItemClass,
  contactItemIconClass,
  contactItemNameClass,
  ...props
}) {
  if (data) {
    // data={
    //   email:"",
    //   address:"",
    //   phone:"",
    //   birthday:"",
    //   nationality:"",
    //   social:""
    // }
    return (
      <section
        id="contact-information"
        // className="text-[12px] font-[600] text-[#3f3f3f] space-y-[12px] flex flex-col"
        className={`${contactClass}`}
      >
        <div
          id="email"
          className={`tp-contact__item   ${
            data?.email ? "flex" : "hidden"
          }  gap-[10px] ${contactItemClass} `}
        >
          <div
            className={`tp-contact__item-icon h-[22px] flex items-center ${contactItemIconClass} `}
          >
            <svg
              width="12"
              height="10"
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.5 0A1.5 1.5 0 0 0 0 1.5v1a.5.5 0 0 0 .26.439l5.5 3a.5.5 0 0 0 .48 0l5.5-3A.5.5 0 0 0 12 2.5v-1A1.5 1.5 0 0 0 10.5 0h-9zm-.354 1.146A.5.5 0 0 1 1.5 1h9a.5.5 0 0 1 .5.5v.703L6 4.93 1 2.203V1.5a.5.5 0 0 1 .146-.354zM1 4.5a.5.5 0 0 0-1 0v4A1.5 1.5 0 0 0 1.5 10h9A1.5 1.5 0 0 0 12 8.5v-4a.5.5 0 0 0-1 0v4a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-4z"
                fill="#3f3f3f"
                fillOpacity=".7"
              ></path>
            </svg>
          </div>
          <div
            className={`tp-contact__item-name  flex items-center ${contactItemNameClass}`}
          >
            {data.email}
          </div>
        </div>

        <div
          id="address"
          className={`tp-contact__item   ${
            data?.address ? "flex" : "hidden"
          } gap-[10px] ${contactItemClass}`}
        >
          <div
            className={`tp-contact__item-icon h-[22px] flex items-center  ${contactItemIconClass}`}
          >
            <svg
              width="10"
              height="12"
              viewBox="0 0 10 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.332.126a.5.5 0 0 0-.664 0l-4.5 4A.5.5 0 0 0 0 4.5v6A1.5 1.5 0 0 0 1.5 12h7a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-.168-.374l-4.5-4zM1 10.5V4.725l4-3.556 4 3.556V10.5a.5.5 0 0 1-.5.5H6V8H4v3H1.5a.5.5 0 0 1-.5-.5z"
                fill="#3f3f3f"
                fillOpacity=".7"
              ></path>
            </svg>
          </div>
          <div
            className={`tp-contact__item-name  ${contactItemNameClass}  break-words `}
          >
            {data.address}
          </div>
        </div>

        <div
          id="phone"
          className={`tp-contact__item    ${
            data?.phone ? "flex" : "hidden"
          } gap-[10px] ${contactItemClass} `}
        >
          <div
            className={`tp-contact__item-icon h-[22px]  flex items-center ${contactItemIconClass}`}
          >
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 1.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-9zM1.5 0A1.5 1.5 0 0 0 0 1.5v9A1.5 1.5 0 0 0 1.5 12h5A1.5 1.5 0 0 0 8 10.5v-9A1.5 1.5 0 0 0 6.5 0h-5zm1 9a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3z"
                fill="#3f3f3f"
                fillOpacity=".7"
              ></path>
            </svg>
          </div>
          <div
            className={`tp-contact__item-name  ${contactItemNameClass} tracking-[1.5px] `}
          >
            {data.phone}
          </div>
        </div>

        <div
          id="birthday"
          className={`tp-contact__item   ${
            data?.birthday ? "flex" : "hidden"
          } gap-[10px] ${contactItemClass}`}
        >
          <div
            className={`tp-contact__item-icon h-[22px] flex items-center ${contactItemIconClass}`}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 .5a.5.5 0 0 0-1 0V2h-.5A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12h9a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 10.5 2H10V.5a.5.5 0 0 0-1 0V2H3V.5zM9.5 3h-8a.5.5 0 0 0-.5.5V5h10V3.5a.5.5 0 0 0-.5-.5h-1zM11 6H1v4.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V6z"
                fill="#3f3f3f"
                fillOpacity=".7"
              ></path>
            </svg>
          </div>
          <div className={`tp-contact__item-name  ${contactItemNameClass}`}>
            {data.birthday}
          </div>
        </div>

        <div
          id="nationality"
          className={`tp-contact__item   ${
            data?.nationality ? "flex" : "hidden"
          } gap-[10px] ${contactItemClass}`}
        >
          <div
            className={`tp-contact__item-icon h-[22px] flex items-center ${contactItemIconClass}`}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.227 9.795C6.737 10.775 6.246 11 6 11c-.246 0-.737-.225-1.227-1.205-.41-.818-.702-1.97-.762-3.295H7.99c-.06 1.326-.353 2.477-.762 3.295zM7.989 5.5H4.01c.06-1.326.353-2.477.762-3.295C5.263 1.225 5.754 1 6 1c.246 0 .737.225 1.227 1.205.41.818.702 1.97.762 3.295zm1 1c-.068 1.655-.472 3.12-1.075 4.12a5.004 5.004 0 0 0 3.061-4.12H8.99zm1.986-1H8.99c-.069-1.655-.473-3.12-1.076-4.12a5.004 5.004 0 0 1 3.061 4.12zm-7.965 0c.069-1.655.473-3.12 1.076-4.12A5.004 5.004 0 0 0 1.025 5.5H3.01zm-1.985 1a5.004 5.004 0 0 0 3.061 4.12c-.603-1-1.007-2.465-1.076-4.12H1.025zM12 6A6 6 0 1 0 0 6a6 6 0 0 0 12 0z"
                fill="#3f3f3f"
                fillOpacity=".7"
              ></path>
            </svg>
          </div>
          <div className={`tp-contact__item-name  ${contactItemNameClass}`}>
            {data.nationality}
          </div>
        </div>

        <div
          id="social"
          className={`tp-contact__item   ${
            data?.social ? "flex" : "hidden"
          }  gap-[10px] ${contactItemClass}`}
        >
          <div
            className={`tp-contact__item-icon h-[22px] flex items-center  ${contactItemIconClass}`}
          >
            <svg
              width="12"
              height="10"
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.146 1.146A.5.5 0 0 1 1.5 1h6a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 9 5.5v-4A1.5 1.5 0 0 0 7.5 0h-6A1.5 1.5 0 0 0 0 1.5v4A1.5 1.5 0 0 0 1.5 7a.5.5 0 0 0 0-1 .5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .146-.354zm3 3A.5.5 0 0 1 4.5 4h2a.5.5 0 0 0 0-1h-2A1.5 1.5 0 0 0 3 4.5v4A1.5 1.5 0 0 0 4.5 10h6A1.5 1.5 0 0 0 12 8.5v-4A1.5 1.5 0 0 0 10.5 3a.5.5 0 0 0 0 1 .5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .146-.354z"
                fill="#3f3f3f"
                fillOpacity=".7"
              ></path>
            </svg>
          </div>
          <div className={`tp-contact__item-name  ${contactItemNameClass}`}>
            {data.social}
          </div>
        </div>
      </section>
    );
  }
}
