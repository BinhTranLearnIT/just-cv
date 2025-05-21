// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { updateExperience } from "../../features/user/userSlice";
// import stringFromArrayWithBreaks from "../../utils/string/stringFromArrayWithBreaks";
// import stringWithBreaksToArray from "../../utils/string/stringWithBreaksToArray";

// function InputExperienceInfo({ _name, _value, _label, _callback, _key }) {
//   if (_name === "description") {
//     return (
//       <div className="relative font-sans jc-form__section-input">
//         <label htmlFor={_name} className="block mb-1 text-[16px] text-gray-700">
//           {_label}
//         </label>
//         <textarea
//           id={_name}
//           name={_name}
//           value={stringFromArrayWithBreaks(_value)}
//           rows={Math.max(_value.length, 1)}
//           onChange={(e) => _callback(e, _key, "change")}
//           onKeyDown={(e) => _callback(e, _key, "keydown")}
//           className="bg-[#eff2f9] px-[16px] py-[12px] leading-normal text-sm rounded-[3px] h-auto focus:outline-[#8176af] w-full "
//         />
//         <div className="jc-form__section-input--decor h-[2px] absolute bottom-0 left-0 right-0 jc-bg-linear opacity-0 transform scale-50 transition-all duration-200 ease-in-out"></div>
//       </div>
//     );
//   } else {
//     return (
//       <div className="relative font-sans jc-form__section-input">
//         <label htmlFor={_name} className="block mb-1 text-[16px] text-gray-700">
//           {_label}
//         </label>
//         <input
//           type="text"
//           id={_name}
//           name={_name}
//           value={_value}
//           onChange={(e) => _callback(e, _key)}
//           className="bg-[#eff2f9] px-[16px] py-[12px] text-sm rounded-[3px] focus:outline-none w-full"
//         />
//         <div className="jc-form__section-input--decor h-[2px] absolute bottom-0 left-0 right-0 jc-bg-linear opacity-0 transform scale-50 transition-all duration-200 ease-in-out"></div>
//       </div>
//     );
//   }
// }

// export default function FormExperience() {
//   const dispatch = useDispatch();
//   const globalExperience = useSelector(
//     (state) => state.user.userData.experience
//   );
//   const [localExperience, setLocalExperience] = useState([]);

//   useEffect(() => {
//     setLocalExperience(globalExperience || []);
//   }, [globalExperience]);

//   const handleOnChange = (e, key) => {
//     const updated = [...localExperience];

//     updated[key] = {
//       ...updated[key],
//       [e.target.name]: e.target.value,
//     };
//     setLocalExperience(updated);
//     dispatch(updateExperience({ experience: updated }));
//   };
//   const handleOnChangeDescription = (e, key, type) => {
//     const updated = [...localExperience];
//     if (type === "change") {
//       console.log("change run :", {
//         ...updated[key],
//         [e.target.name]: stringWithBreaksToArray(e.target.value),
//       });

//       updated[key] = {
//         ...updated[key],
//         [e.target.name]: stringWithBreaksToArray(e.target.value),
//       };
//     } else if (type === "keydown") {
//       if (e.key === "Enter") {
//         console.log("enter ne");

//         updated[key] = {
//           ...updated[key],
//           [e.target.name]: [...stringWithBreaksToArray(e.target.value), ""],
//         };
//       }
//     }

//     setLocalExperience(updated);
//     dispatch(updateExperience({ experience: updated }));
//   };
//   const addItem = () => {
//     const newValue = [...localExperience, {}];
//     setLocalExperience(newValue);
//     dispatch(updateExperience({ experience: newValue }));
//   };

//   const removeItem = (key) => {
//     const newValue = localExperience.filter((_, index) => index !== key);
//     setLocalExperience(newValue);
//     dispatch(updateExperience({ experience: newValue }));
//   };

//   const renderExperience = (exp, key) => {
//     const { position, company, location, startDate, endDate, description } =
//       exp;

//     return (
//       <div
//         key={key}
//         className="relative w-full px-[20px] py-[15px] border border-gray-300"
//       >
//         <div className="grid gap-x-[40px] gap-y-[24px] mb-6 grid-cols-2">
//           {[
//             { name: "position", value: position, label: "Position" },
//             { name: "company", value: company, label: "Company" },
//             { name: "location", value: location, label: "Location" },
//             { name: "startDate", value: startDate, label: "Start Date" },
//             { name: "endDate", value: endDate, label: "End Date" },
//           ].map(({ name, value, label }) => (
//             <div className="col-span-1" key={name}>
//               <InputExperienceInfo
//                 _name={name}
//                 _value={value || ""}
//                 _label={label}
//                 _key={key}
//                 _callback={handleOnChange}
//               />
//             </div>
//           ))}

//           <div className="col-span-2">
//             <InputExperienceInfo
//               _name="description"
//               _value={description || ""}
//               _label="Description"
//               _key={key}
//               _callback={handleOnChangeDescription}
//             />
//           </div>
//         </div>
//         <button
//           className="text-red-500 text-sm mt-2"
//           onClick={() => removeItem(key)}
//         >
//           Remove
//         </button>
//       </div>
//     );
//   };

//   return (
//     <section className="jc-form__section w-full bg-white rounded px-[32px] py-[20px]">
//       <div className="text-[23px] font-[600] mb-[20px] text-black ">
//         Experience
//       </div>

//       <div className="flex flex-col space-y-[8px]">
//         {localExperience.map((exp, key) => renderExperience(exp, key))}
//       </div>

//       <div className="font-[600] text-[14px] px-[20px] py-[15px]">
//         <button className="jc-link" onClick={addItem}>
//           + Add item
//         </button>
//       </div>
//     </section>
//   );
// }
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateExperience } from "../../features/user/userSlice";
import stringFromArrayWithBreaks from "../../utils/string/stringFromArrayWithBreaks";
import stringWithBreaksToArray from "../../utils/string/stringWithBreaksToArray";
import FormTest from "./FormTest";

// Reusable input component
function ExperienceInput({ name, value, label, onChange, index }) {
  const isDescription = name === "description";
  const handleChange = (e) => onChange(e, index, "change");
  const handleKeyDown = (e) => onChange(e, index, "keydown");

  return (
    <div className="relative font-sans jc-form__section-input">
      <label htmlFor={name} className="block mb-1 text-[16px] text-gray-700">
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
          className="bg-[#eff2f9] px-[16px] py-[12px] text-sm rounded-[3px] h-auto focus:outline-[#8176af] w-full"
        />
      ) : (
        <input
          type="text"
          id={name}
          name={name}
          value={value || ""}
          onChange={(e) => onChange(e, index)}
          className="bg-[#eff2f9] px-[16px] py-[12px] text-sm rounded-[3px] focus:outline-none w-full"
        />
      )}

      <div className="jc-form__section-input--decor h-[2px] absolute bottom-0 left-0 right-0 jc-bg-linear opacity-0 transform scale-50 transition-all duration-200 ease-in-out"></div>
    </div>
  );
}

export default function FormExperience() {
  const dispatch = useDispatch();
  const globalExperience = useSelector(
    (state) => state.user.userData.experience
  );
  const [localExperience, setLocalExperience] = useState([]);

  useEffect(() => {
    setLocalExperience(globalExperience || []);
  }, [globalExperience]);

  const handleChange = (e, index) => {
    const updated = [...localExperience];
    updated[index] = {
      ...updated[index],
      [e.target.name]: e.target.value,
    };
    setLocalExperience(updated);
    dispatch(updateExperience({ experience: updated }));
  };

  const handleDescriptionChange = (e, index, type) => {
    const updated = [...localExperience];
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

    setLocalExperience(updated);
    dispatch(updateExperience({ experience: updated }));
  };

  const addItem = () => {
    const newList = [...localExperience, {}];
    setLocalExperience(newList);
    dispatch(updateExperience({ experience: newList }));
  };

  const removeItem = (index) => {
    const newList = localExperience.filter((_, i) => i !== index);
    setLocalExperience(newList);
    dispatch(updateExperience({ experience: newList }));
  };
  const [showInputField, setShowInputField] = useState(false);
  const toggleInputField = () => {
    console.log("vo ne");

    setShowInputField(!showInputField);
  };
  const renderExperience = (exp, index) => {
    const fields = [
      { name: "position", label: "Position" },
      { name: "company", label: "Company" },
      { name: "startDate", label: "Start Date" },
      { name: "endDate", label: "End Date" },
      { name: "location", label: "Location" },
    ];

    return (
      <div
        key={index}
        className={`relative w-full px-[20px] py-[15px] border border-gray-300 overflow-hidden
          showInputField ? "" : "max-h-[200px]"
          `}
      >
        <div className="exp-label mb-[15px] relative h-[53px] border-b border-gray-300 pb-[10px]">
          <div className="text-[16px] font-[600]">{exp.position}</div>
          <div className="text-[12px] flex capitalize jc-text-gray ">
            <span>{exp.startDate}</span>
            {exp.endDate && <span className="mx-[8px]">-</span>}

            <span>{exp.endDate}</span>
          </div>
          <div class="absolute flex border-l-2 right-[12px] pl-[20px] top-[20px] transform -translate-y-1/2">
            <button className="text-[#8281a2] hover:text-blue-500">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                version="1.1"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.5,14 C5.67157288,14 5,13.3284271 5,12.5 C5,11.6715729 5.67157288,11 6.5,11 C7.32842712,11 8,11.6715729 8,12.5 C8,13.3284271 7.32842712,14 6.5,14 Z M12.5,14 C11.6715729,14 11,13.3284271 11,12.5 C11,11.6715729 11.6715729,11 12.5,11 C13.3284271,11 14,11.6715729 14,12.5 C14,13.3284271 13.3284271,14 12.5,14 Z M18.5,14 C17.6715729,14 17,13.3284271 17,12.5 C17,11.6715729 17.6715729,11 18.5,11 C19.3284271,11 20,11.6715729 20,12.5 C20,13.3284271 19.3284271,14 18.5,14 Z"></path>
              </svg>
            </button>
            <button
              onClick={toggleInputField}
              className={`text-[#8281a2] hover:text-blue-500 transform ${
                showInputField ? "-rotate-90" : "rotate-90"
              } rotate-90`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                version="1.1"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.431 7.257l1.352-1.474 5.893 5.48a1 1 0 0 1 0 1.474l-5.893 5.45-1.352-1.475L14.521 12 9.43 7.257z"></path>
              </svg>
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
        <div className="grid gap-x-[40px] gap-y-[24px] mb-6 grid-cols-2">
          {fields.map(({ name, label }) => (
            <div className="col-span-1" key={name}>
              <ExperienceInput
                name={name}
                value={exp[name]}
                label={label}
                index={index}
                onChange={handleChange}
              />
            </div>
          ))}
          <div className="col-span-2">
            <ExperienceInput
              name="description"
              value={Array.isArray(exp.description) ? exp.description : []}
              label="Description"
              index={index}
              onChange={handleDescriptionChange}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    // <section className="jc-form__section w-full bg-white rounded px-[32px] py-[20px]">
    //   <div className="text-[23px] font-[600] mb-[20px] text-black">
    //     Experience
    //   </div>

    //   <div className="flex flex-col space-y-[8px]">
    //     {localExperience.map((exp, index) => renderExperience(exp, index))}
    //   </div>

    //   <div className="font-[600] text-[14px] px-[20px] py-[15px]">
    //     <button className="jc-link" onClick={addItem}>
    //       + Add one more experience
    //     </button>
    //   </div>
    // </section>
    <FormTest />
  );
}
