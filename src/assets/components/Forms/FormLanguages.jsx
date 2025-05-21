import React from "react";
import { useSelector } from "react-redux";
import { updateLanguages } from "../../features/user/userSlice";
import InputTypeList from "../Input/InputTypeList";
export default function FormLanguages() {
  const userData = useSelector((state) => state.user.userData);

  return (
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
            reducer={updateLanguages}
            levels={[
              "native speaker",
              "highly proficient",
              "very good command",
              "good working knowledge",
              "working knowledge",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
