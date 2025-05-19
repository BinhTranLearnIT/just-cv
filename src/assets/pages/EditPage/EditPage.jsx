import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Templates } from "../../template/templateMap";
import {
  setAvatar,
  updateName,
  updateContact,
  setObjective,
  updateSkills,
} from "../../features/user/userSlice";
import "./EditPage.css";
import InputTypeText from "../../components/Input/InputTypeText";
import InputTypeList from "../../components/Input/InputTypeList";
export default function EditPage() {
  const dispatch = useDispatch();
  const userTemplate = useSelector((state) => state.user.userTemplate);
  const PreviewTemplate = Templates[userTemplate];
  const userData = useSelector((state) => state.user.userData);

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
    dispatch(setAvatar({ avatar: "" }));
  }

  return (
    <div>
      <div className="">
        <div className="jc-grid bg-[#302c42]">
          <div className="jc-form col-span-12 lg:col-span-6   flex space-y-[4px] relative  flex-col">
            <div className="jc-breadcrumb shadow-lg sticky z-10 top-0 px-[32px] py-[20px] text-[#19a1f0]  bg-white rounded-b-[4px]">
              <button className="jc-link">{`< Back`}</button>
            </div>
            {/* ---Persional Details--- */}
            <section
              id="personal-details"
              className="jc-form__section w-full bg-white rounded px-[32px] py-[20px]"
            >
              <div className="jc-form__section-title mb-[20px] text-[23px] jc-text-black font-[600]">
                Personal details
              </div>
              <div className="jc-form__section-input--wrapper grid gap-x-[40px] gap-y-[24px] mb-6 grid-cols-2">
                {/* ---input job title--- */}
                <div className="col-span-1">
                  <InputTypeText
                    label="Job Title"
                    placeholder=""
                    name="jobTitle"
                    value={userData.name.jobTitle}
                    reducer={updateName}
                  />
                </div>
                {/* ---input avatar--- */}
                <div className="col-span-1 jc-form__section-input relative flex align-bottom mt-[14px]">
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
                        class="hidden"
                        onChange={(e) => handleImageUpload(e, setAvatar)}
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

                <div className="col-span-1">
                  <InputTypeText
                    label="First Name"
                    placeholder=""
                    name="firstName"
                    value={userData.name.firstName}
                    reducer={updateName}
                  />
                </div>
                <div className="col-span-1">
                  <InputTypeText
                    label="Last Name"
                    placeholder=""
                    name="lastName"
                    value={userData.name.lastName}
                    reducer={updateName}
                  />
                </div>

                <div className="col-span-1">
                  <InputTypeText
                    label="Email"
                    placeholder=""
                    name="email"
                    value={userData.contact.email}
                    reducer={updateContact}
                  />
                </div>

                <div className="col-span-1">
                  <InputTypeText
                    label="Phone"
                    placeholder=""
                    name="phone"
                    value={userData.contact.phone}
                    reducer={updateContact}
                  />
                </div>

                <div className="col-span-2">
                  <InputTypeText
                    label="Address"
                    placeholder=""
                    name="address"
                    value={userData.contact.address}
                    reducer={updateContact}
                  />
                </div>

                <div className="col-span-1">
                  <InputTypeText
                    label="Country"
                    placeholder=""
                    name="nationality"
                    value={userData.contact.nationality}
                    reducer={updateContact}
                  />
                </div>

                <div className="col-span-1">
                  <InputTypeText
                    label="Social"
                    placeholder=""
                    explain="Your social, linkein, github..."
                    name="social"
                    value={userData.contact.social}
                    reducer={updateContact}
                  />
                </div>
              </div>
            </section>
            {/* ---Summary--- */}
            <section id="summary" className="jc-form__section">
              <div className="jc-form__section-title mb-[20px] text-[23px] jc-text-black font-[600]">
                Professional Summary
                <p className="text-sm jc-text-gray font-[400] mt-2">
                  Write 2-4 short, energetic sentences about how great you are.
                  Mention the role and what you did. What were the big
                  achievements? Describe your motivation and list your skills.
                </p>
              </div>
              <div className="jc-form__section-input--wrapper grid gap-x-[40px] gap-y-[24px] mb-6 grid-cols-2">
                <div className="col-span-2">
                  <textarea
                    name="objective"
                    id="objective"
                    value={userData.objective}
                    onChange={(e) => handleOnChange(e, setObjective)}
                    className="w-full bg-[#eff2f9] p-[16px]  focus:outline-none h-[200px] text-md"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum reiciendis beatae ratione unde laudantium soluta
                    placeat voluptatibus esse corporis delectus.
                  </textarea>
                </div>
              </div>
            </section>
            {/* ---Skills--- */}
            <section id="skills" className="jc-form__section">
              <div className="jc-form__section-title mb-[20px] text-[23px] jc-text-black font-[600]">
                Skills
                <p className="text-sm jc-text-gray font-[400] mt-2">
                  Choose 5 important skills that show you fit the position. Make
                  sure they match the key skills mentioned in the job listing
                  (especially when applying via an online system).
                </p>
              </div>
              <div className="jc-form__section-input--wrapper grid gap-x-[40px] gap-y-[24px] mb-6 grid-cols-2">
                <div className="col-span-2">
                  <InputTypeList
                    name="skills"
                    value={userData.skills}
                    reducer={updateSkills}
                  />
                </div>
              </div>
            </section>
            {/* ---Language--- */}
            <section id="languages" className="jc-form__section">
              <div className="jc-form__section-title mb-[20px] text-[23px] jc-text-black font-[600]">
                Languages
                <p className="text-sm jc-text-gray font-[400] mt-2"></p>
              </div>
              <div className="jc-form__section-input--wrapper grid gap-x-[40px] gap-y-[24px] mb-6 grid-cols-2">
                <div className="col-span-2">
                  <InputTypeList
                    name="languages"
                    value={userData.languages}
                    reducer={updateSkills}
                  />
                </div>
              </div>
            </section>
          </div>

          {/* <div className="col-span-12 lg:col-span-6  h-screen bg-slate-50 relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-[0.2] origin-top-left">
              <PreviewTemplate />
            </div>
          </div> */}
          {/* <div className="col-span-12 lg:col-span-6 lg:self-stretch lg:bg-slate-50 relative  ">
            <div className=" w-full  h-auto bg-green-400 fixed top-0">
              <div className="w-full h-full bg-slate-500  relative overflow-hidden">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 scale-50 origin-top ">
                  <PreviewTemplate />
                </div>
              </div>
            </div>
          </div> */}
          <div className="hidden lg:block lg:col-span-6  relative">
            <div className="fixed top-0 right-0 w-1/2 h-screen  z-10 overflow-hidden">
              <div className="w-full h-full  relative">
                <button className=" absolute top-[20px] right-[100px] px-[8px] py-[12px] bg-[#1a91f0] hover:bg-[#1170cd] transition-all duration-150 ease-in-out text-white text-[16px] font-[600]">
                  Download PDF
                </button>
                <div className="absolute top-[100px] left-1/2 transform -translate-x-1/2 scale-50 origin-top">
                  <PreviewTemplate />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
