import React from "react";
import { useSelector } from "react-redux";
import { updateSkills } from "../../features/user/userSlice";
import InputTypeList from "../Input/InputTypeList";
export default function FormSkills() {
  const userData = useSelector((state) => state.user.userData);

  return (
    <section id="skills" className="jc-form__section">
      <div className="jc-form__section-title mb-[20px] text-[23px] jc-text-black font-[600]">
        Skills
        <p className="text-sm jc-text-gray font-[400] mt-2">
          Choose 5 important skills that show you fit the position. Make sure
          they match the key skills mentioned in the job listing (especially
          when applying via an online system).
        </p>
      </div>
      {/* grid gap-x-[40px] gap-y-[24px] mb-6 grid-cols-2 */}
      <div className="jc-form__section-input--wrapper ">
        <div className="col-span-2">
          <InputTypeList
            name="skills"
            value={userData.skills}
            reducer={updateSkills}
            levels={["novice", "Beginner", "Skillful", "Experienced", "Expert"]}
          />
        </div>
      </div>
    </section>
  );
}
