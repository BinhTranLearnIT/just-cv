import React from "react";
import { useDispatch } from "react-redux";

export default function InputTypeText({
  label,
  placeholder,
  name,
  value,
  reduce,
  ...props
}) {
  const dispatch = useDispatch();
  function handleOnChange(_event, _reduce) {
    const { name, value } = _event.target;
    console.log({ [name]: value });

    dispatch(_reduce({ [name]: value }));
  }
  return (
    <div className=" jc-form__section-input relative">
      <label
        htmlFor={name}
        className="block mb-[6px] text-[16px] jc-text-gray "
      >
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        class="bg-[#eff2f9] px-[16px] py-[12px] text-sm  rounded-[3px] focus:outline-none block w-full "
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleOnChange(e, reduce)}
      />
      <div className="jc-form__section-input--decor h-[2px] absolute bottom-0 left-0 right-0 jc-bg-linear opacity-0 transform scale-50 transition-all duration-200 ease-in-out"></div>
    </div>
  );
}
