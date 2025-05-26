import React from "react";
import InputTypeText from "../Input/InputTypeText";
import {
  updateName,
  updateContact,
  updateAvatar,
} from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
export default function FormPersonalDetails() {
  const userData = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();
  function handleOnChange(_event, _reduce) {
    const { name, value } = _event.target;
    console.log({ [name]: value });

    dispatch(_reduce({ [name]: value }));
  }
  const handleImageUpload = (e, _reduce) => {
    const MAX_FILE_SIZE = 500 * 1024; // 500 KB
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > MAX_FILE_SIZE) {
      alert("Image too large. Please upload a file smaller than 500KB.");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;

      // Trigger the reducer using your existing function
      handleOnChange(
        { target: { name: "avatar", value: base64 } }, // mock event
        _reduce
      );
    };

    reader.readAsDataURL(file);
  };
  function removeAvatar() {
    dispatch(updateAvatar({ avatar: "" }));
  }
  return (
    <section
      id="personal-details"
      className="jc-form__section w-full bg-white rounded sm:px-[32px] sm:py-[20px] px-[20px] py-[12px]"
    >
      <div className="jc-form__section-title mb-[20px] text-[23px] jc-text-black font-[600]">
        Personal details
      </div>
      <div className="jc-form__section-input--wrapper grid sm:gap-x-[40px] sm:gap-y-[24px] gap-x-[20px] gap-y-[24px] mb-6 grid-cols-2">
        {/* ---input job title--- */}
        <div className="col-span-2 sm:col-span-1 order-2 sm:order-none">
          <InputTypeText
            label="Job Title"
            placeholder=""
            name="jobTitle"
            value={userData.name.jobTitle}
            reducer={updateName}
          />
        </div>
        {/* ---input avatar--- */}
        <div className="sm:col-span-1 col-span-2 jc-form__section-input relative flex ml-[10px] sm:ml-0 order-1 sm:order-none align-bottom mt-[14px]">
          <picture className="mr-[16px]">
            <img
              src={
                userData.avatar
                  ? userData.avatar
                  : "./imgs/template/empty-avatar.jpg"
              }
              alt=""
              className="w-[60px] h-[60px]"
            />
          </picture>
          <div className="flex flex-col">
            <label
              htmlFor="avatar"
              className="text-[#19a1f0] text-[15px] flex cursor-pointer py-[4px] hover:text-[#10529b] transition-colors duration-100"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="text-inherit"
              >
                <path d="M17.4413 6.25577c.7449.7448.7449 1.95236 0 2.69716L8.81405 17.5791c-.26829.2682-.63216.4189-1.01157.4189h-3.3719C3.64049 17.998 3 17.3576 3 16.5676v-3.3714c0-.3794.15072-.7432.41901-1.0115l8.62729-8.6261c.7449-.7448 1.9526-.7448 2.6975 0l2.6975 2.69717zM16.0926 7.6043l-2.6975-2.69717-6.62463 6.62377 2.69752 2.6971 6.62461-6.6237zm-7.97337 7.9723l-2.69752-2.6972-.44072.4407.01168 2.6855 2.68584.0117.44072-.4407z"></path>
              </svg>
              <span className="ml-[8px] underline">Upload image</span>
              <input
                type="file"
                id="avatar"
                className="hidden"
                onChange={(e) => handleImageUpload(e, updateAvatar)}
              />
            </label>
            <button
              onClick={removeAvatar}
              className="text-[15px] jc-text-gray flex mt-[8px] hover:text-red-600 transition-colors duration-100"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                version="1.1"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14 6h3v2H3V6h3V3c0-.55228.44772-1 1-1h6c.5523 0 1 .44772 1 1v3zm-9 4h10v8H5v-8zm2 6h6v-4H7v4zm5-10V4H8v2h4z"></path>
              </svg>
              <span className="ml-[8px]">Remove</span>
            </button>
          </div>
        </div>

        <div className="col-span-1 order-3 sm:order-none">
          <InputTypeText
            label="First Name"
            placeholder=""
            name="firstName"
            value={userData.name.firstName}
            reducer={updateName}
          />
        </div>
        <div className="col-span-1 order-4 sm:order-none">
          <InputTypeText
            label="Last Name"
            placeholder=""
            name="lastName"
            value={userData.name.lastName}
            reducer={updateName}
          />
        </div>

        <div className="col-span-1 order-7 sm:order-none">
          <InputTypeText
            label="Email"
            placeholder=""
            name="email"
            value={userData.contact.email}
            reducer={updateContact}
          />
        </div>

        <div className="col-span-1 order-5 sm:order-none">
          <InputTypeText
            label="Phone"
            placeholder=""
            name="phone"
            value={userData.contact.phone}
            reducer={updateContact}
          />
        </div>

        <div className="col-span-2 order-9 sm:order-none">
          <InputTypeText
            label="Address"
            placeholder=""
            name="address"
            value={userData.contact.address}
            reducer={updateContact}
          />
        </div>

        <div className="col-span-1 order-8 sm:order-none">
          <InputTypeText
            label="Country"
            placeholder=""
            name="nationality"
            value={userData.contact.nationality}
            reducer={updateContact}
          />
        </div>
        <div className="col-span-1 order-6 sm:order-none">
          <InputTypeText
            label="Birthday"
            placeholder=""
            name="birthday"
            value={userData.contact.birthday}
            reducer={updateContact}
          />
        </div>
        <div className="col-span-2 order-10 sm:order-none">
          <InputTypeText
            label="Social"
            placeholder=""
            explain="your social or personal link "
            name="social"
            value={userData.contact.social}
            reducer={updateContact}
          />
        </div>
      </div>
    </section>
  );
}
