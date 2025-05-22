import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FormItemExperience from "./FormItemExperience";
import { updateExperience } from "../../features/user/userSlice";

export default function FormExperience() {
  const userExperienceList = useSelector(
    (state) => state.user.userData.experience
  );
  const dispatch = useDispatch();
  const addItem = () => {
    const newList = [...userExperienceList, {}];

    dispatch(updateExperience({ experience: newList }));
  };

  return (
    <section className="jc-form__section w-full bg-white rounded px-[32px] py-[20px]">
      <div className="text-[23px] font-[600] mb-[20px] text-black">
        Experience
      </div>

      <div className="flex flex-col space-y-[8px]">
        {userExperienceList.map((exp, index) => (
          <FormItemExperience exp={exp} index={index} />
        ))}
      </div>

      <div className="font-[600] text-[14px] px-[20px] py-[15px]">
        <button className="jc-link" onClick={addItem}>
          + Add one more
        </button>
      </div>
    </section>
  );
}
