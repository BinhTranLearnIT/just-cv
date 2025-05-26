import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProjects } from "../../features/user/userSlice";
import FormItemProject from "./FormItemProject";

export default function FormProjects() {
  const userProjects = useSelector((state) => state.user.userData.projects);

  const dispatch = useDispatch();
  const addItem = () => {
    const newList = [...userProjects, {}];

    dispatch(updateProjects({ projects: newList }));
  };
  return (
    <section className="jc-form__section ">
      <div className="text-[23px] font-[600] mb-[20px] text-black">Project</div>

      <div className="flex flex-col space-y-[8px]">
        {userProjects.map((pj, index) => (
          <FormItemProject pj={pj} index={index} />
        ))}
      </div>

      <div className="font-[600] text-[14px] px-[20px] py-[15px]">
        <button className="jc-link" onClick={addItem}>
          + Add one more project
        </button>
      </div>
    </section>
  );
}
