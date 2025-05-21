import React from "react";
import { useDispatch } from "react-redux";
import "./Input.css";
export default function InputTypeText({
  label,
  placeholder,
  explain,
  name,
  value,
  reducer,
  ...props
}) {
  const dispatch = useDispatch();
  function handleOnChange(_event, _reduce) {
    const { name, value } = _event.target;
    console.log({ [name]: value });
    dispatch(_reduce({ [name]: value }));
  }
  return (
    <div className=" jc-form__section-input relative font-sans">
      <label
        htmlFor={name}
        className="flex items-baseline mb-[6px] text-[16px] jc-text-gray "
      >
        {label}
        {explain && (
          <div
            className=" ml-[6px] relative 
       jc-form__section-input--explain cursor-pointer jc-link 
        "
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              className="explain__icon"
            >
              <path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-1.5c5.799 0 10.5-4.701 10.5-10.5S17.799 1.5 12 1.5 1.5 6.201 1.5 12 6.201 22.5 12 22.5zm3.69-13.47c0 2.73-2.827 2.73-2.827 5.558H10.62c0-3.608 2.73-3.608 2.73-5.363 0-.877-.585-1.462-1.56-1.462-.877 0-1.56.682-1.56 1.852H7.89c.098-2.438 1.657-3.998 3.9-3.998 2.438 0 3.9 1.463 3.9 3.413zm-5.167 7.8a1.29 1.29 0 0 1 1.267-1.267 1.29 1.29 0 0 1 1.268 1.267 1.29 1.29 0 0 1-1.268 1.268 1.29 1.29 0 0 1-1.267-1.268z"></path>
            </svg>
            <div
              className=" explain__tag w-[150px] bg-[#302c42] text-[12px] font-[500] font-sans  rounded-[3px] text-white 
              absolute px-[12px] py-[8px] jc-bg-black
   pointer-events-none
              before:absolute before:bottom-[-18px] before:left-1/2 before:-translate-x-1/2 before:border-[10px] before:border-transparent before:border-t-[#1e2532] content-['']
            "
            >
              {explain}
            </div>
          </div>
        )}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        className="bg-[#eff2f9] px-[16px] py-[12px] text-sm  font-sans rounded-[3px] focus:outline-none block w-full "
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleOnChange(e, reducer)}
      />
      <div className="jc-form__section-input--decor h-[2px] absolute bottom-0 left-0 right-0 jc-bg-linear opacity-0 transform scale-50 transition-all duration-200 ease-in-out"></div>
    </div>
  );
}
