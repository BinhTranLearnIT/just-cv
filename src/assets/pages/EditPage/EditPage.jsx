import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Templates } from "../../template/templateMap";

import "./EditPage.css";
import InputTypeText from "../../components/Input/InputTypeText";
import InputTypeList from "../../components/Input/InputTypeList";
import {
  FormPersonalDetails,
  FormSkills,
  FormSummary,
  FormLanguages,
} from "../../components/Forms";
import FormExperience from "../../components/Forms/FormExperience";

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

  return (
    <div>
      <div className="">
        <div className="jc-grid bg-[#302c42]">
          <div className="jc-form col-span-12 lg:col-span-6   flex space-y-[4px] relative  flex-col">
            <div className="jc-breadcrumb shadow-lg sticky z-10 top-0 px-[32px] py-[20px] text-[#19a1f0]  bg-white rounded-b-[4px]">
              <button className="jc-link">{`< Back`}</button>
            </div>
            {/* ---Persional Details--- */}

            <FormPersonalDetails />
            {/* ---Summary--- */}

            <FormSummary />
            {/* ---Skills--- */}
            {/* <section id="skills" className="jc-form__section">
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
                    levels={[
                      "Novice",
                      "Beginner",
                      "Skillful",
                      "Experienced",
                      "Expert",
                    ]}
                  />
                </div>
              </div>
            </section> */}
            <FormSkills />
            <FormLanguages />
            <FormExperience />
            {/* ---Language--- */}
            {/* <section id="languages" className="jc-form__section">
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
            </section> */}
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
