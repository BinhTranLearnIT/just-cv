import React, { useState } from "react";
import stringFromArrayWithBreaks from "../../utils/string/stringFromArrayWithBreaks";
import { useDispatch, useSelector } from "react-redux";
import { updateProjects } from "../../features/user/userSlice";
import stringWithBreaksToArray from "../../utils/string/stringWithBreaksToArray";

function ProjectInput({ name, value, label, onChange, index }) {
  const isDescription = name === "description";
  const handleChange = (e) => onChange(e, index, "change");
  const handleKeyDown = (e) => onChange(e, index, "keydown");

  return (
    <div className="relative font-sans jc-form__section-input">
      <label htmlFor={name} className="block mb-1 text-[16px] text-[#8281a2]">
        {label}
      </label>

      {isDescription ? (
        <textarea
          id={name}
          name={name}
          value={stringFromArrayWithBreaks(value || [])}
          rows={Math.max(value?.length || 1, 1)}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="bg-[#eff2f9] px-[16px] py-[12px] text-[16px] rounded-[3px] h-auto focus:outline-[#8176af] w-full"
        />
      ) : (
        <input
          type="text"
          id={name}
          name={name}
          value={value || ""}
          onChange={(e) => onChange(e, index)}
          className="bg-[#eff2f9] px-[16px] py-[12px] text-[16px] rounded-[3px] focus:outline-none w-full"
        />
      )}

      <div className="jc-form__section-input--decor h-[2px] absolute bottom-0 left-0 right-0 jc-bg-linear opacity-0 transform scale-50 transition-all duration-200 ease-in-out"></div>
    </div>
  );
}
export default function FormItemProject({ pj, index, ...props }) {
  const dispatch = useDispatch();
  const [showInputField, setShowInputField] = useState(false);
  const toggleInputField = () => {
    setShowInputField(!showInputField);
  };

  const userProjects = useSelector((state) => state.user.userData.projects);
  const removeItem = (index) => {
    const newList = [...userProjects].filter((_, i) => i !== index);

    console.log("xoa ne : list moi ", newList);
    dispatch(updateProjects({ projects: newList }));
  };

  const handleChange = (e, index) => {
    const updated = [...userProjects];
    updated[index] = {
      ...updated[index],
      [e.target.name]: e.target.value,
    };

    dispatch(updateProjects({ projects: updated }));
  };

  const handleDescriptionChange = (e, index, type) => {
    const updated = [...userProjects];
    const fieldName = e.target.name;

    if (type === "change") {
      updated[index] = {
        ...updated[index],
        [fieldName]: stringWithBreaksToArray(e.target.value),
      };
    } else if (type === "keydown" && e.key === "Enter") {
      updated[index] = {
        ...updated[index],
        [fieldName]: [...stringWithBreaksToArray(e.target.value), ""],
      };
    }

    dispatch(updateProjects({ projects: updated }));
  };
  const fields = [
    { name: "project", label: "Project" },
    { name: "link", label: "Link" },
  ];

  return (
    <div
      key={index}
      className="relative w-full px-[20px] py-[15px] border border-gray-300 overflow-hidden"
    >
      <div
        className={`pj-label ${
          showInputField ? "mb-[15px]" : ""
        } relative h-[53px] border-b border-gray-300 pb-[10px]`}
      >
        <div className="text-[16px] font-[600]">
          {pj.project ? pj.project : "Your Project"}
        </div>
        <div className="text-[14px] flex capitalize text-blue-500 ">
          <span>{pj.link}</span>
        </div>

        <div
          class="absolute  flex items-baseline border-l-2 sm:right-0 
        right-[-20px] sm:pl-[20px] top-[20px] transform -translate-y-1/2"
        >
          <button
            className="text-[#8281a2] hover:text-blue-500 flex items-baseline cursor-pointer px-[10px] py-[5px]"
            onClick={toggleInputField}
          >
            <div className="hidden sm:block">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="mr-[4px]"
              >
                <path d="M17.4413 6.25577c.7449.7448.7449 1.95236 0 2.69716L8.81405 17.5791c-.26829.2682-.63216.4189-1.01157.4189h-3.3719C3.64049 17.998 3 17.3576 3 16.5676v-3.3714c0-.3794.15072-.7432.41901-1.0115l8.62729-8.6261c.7449-.7448 1.9526-.7448 2.6975 0l2.6975 2.69717zM16.0926 7.6043l-2.6975-2.69717-6.62463 6.62377 2.69752 2.6971 6.62461-6.6237zm-7.97337 7.9723l-2.69752-2.6972-.44072.4407.01168 2.6855 2.68584.0117.44072-.4407z"></path>
              </svg>
            </div>

            <div
              className={`transform  ${
                showInputField ? "-rotate-90" : "rotate-90"
              } `}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                version="1.1"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.431 7.257l1.352-1.474 5.893 5.48a1 1 0 0 1 0 1.474l-5.893 5.45-1.352-1.475L14.521 12 9.43 7.257z"></path>
              </svg>
            </div>
          </button>
          <button
            onClick={() => removeItem(index)}
            class=" flex  font-[400] text-[14px]  px-[10px] py-[5px]  text-[#8281a2] hover:text-red-500 transition-colors duration-100"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              version="1.1"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-[4px]"
            >
              <path d="M14 6h3v2H3V6h3V3c0-.55228.44772-1 1-1h6c.5523 0 1 .44772 1 1v3zm-9 4h10v8H5v-8zm2 6h6v-4H7v4zm5-10V4H8v2h4z"></path>
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`grid gap-x-[40px] gap-y-[24px] grid-cols-2 ${
          showInputField
            ? "jc-animation-slide-down mb-6 "
            : "jc-animation-slide-up"
        }  `}
      >
        {fields.map(({ name, label }) => (
          <div className="col-span-2 sm:col-span-1" key={name}>
            <ProjectInput
              name={name}
              value={pj[name]}
              label={label}
              index={index}
              onChange={handleChange}
            />
          </div>
        ))}
        <div className="col-span-2">
          <ProjectInput
            name="description"
            value={Array.isArray(pj.description) ? pj.description : []}
            label="Description"
            index={index}
            onChange={handleDescriptionChange}
          />
        </div>
      </div>
    </div>
  );
}
