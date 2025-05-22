import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateEducation } from "../../features/user/userSlice";
import FormItemEducation from "./FormItemEducation";

export default function FormEducation() {
  const userEducationList = useSelector(
    (state) => state.user.userData.education
  );
  const dispatch = useDispatch();
  const addItem = () => {
    const newList = [...userEducationList, {}];

    dispatch(updateEducation({ education: newList }));
  };
  return (
    <section className="jc-form__section w-full bg-white rounded px-[32px] py-[20px]">
      <div className="text-[23px] font-[600] mb-[20px] text-black">
        Education
      </div>
      <div className="flex flex-col space-y-[8px]">
        {userEducationList.map((edu, index) => (
          <FormItemEducation edu={edu} index={index} />
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
