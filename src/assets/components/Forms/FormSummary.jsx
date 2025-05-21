import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateObjective } from "../../features/user/userSlice";
export default function FormSummary() {
  const dispatch = useDispatch();
  const userObjective = useSelector((state) => state.user.userData.objective);
  function handleOnChange(_event, _reduce) {
    const { name, value } = _event.target;
    console.log({ [name]: value });

    dispatch(_reduce({ [name]: value }));
  }
  return (
    <section id="summary" className="jc-form__section">
      <div className="jc-form__section-title mb-[20px] text-[23px] jc-text-black font-[600]">
        Professional Summary
        <p className="text-sm jc-text-gray font-[400] mt-2">
          Write 2-4 short, energetic sentences about how great you are. Mention
          the role and what you did. What were the big achievements? Describe
          your motivation and list your skills.
        </p>
      </div>
      <div className="jc-form__section-input--wrapper grid gap-x-[40px] gap-y-[24px] mb-6 grid-cols-2">
        <div className="col-span-2">
          <textarea
            name="objective"
            id="objective"
            value={userObjective}
            onChange={(e) => handleOnChange(e, updateObjective)}
            className="w-full bg-[#eff2f9] p-[16px]  focus:outline-none h-[200px] text-md"
          ></textarea>
        </div>
      </div>
    </section>
  );
}
