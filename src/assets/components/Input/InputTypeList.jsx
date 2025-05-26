import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Input.css";
import stringToNormalizeAndDashify from "../../utils/string/stringToNormalizeAndDashify";
// for object like this: { name: "  " , level: " "}
export default function InputTypeList({
  name,
  value,
  reducer,
  levels,
  ...props
}) {
  useEffect(() => {
    // console.log(levels);
  }, []);
  const dispatch = useDispatch();
  //action.payload = {[name]:value}
  // value = array [ ]
  function updateItem(e, key) {
    // const newValue = Array.isArray(value) ? [...value, {}] : [{}];
    const newValue = [...value];
    newValue[key] = { ...newValue[key], [e.target.name]: e.target.value };
    console.log({ [name]: newValue });
    dispatch(reducer({ [name]: newValue }));
  }
  function addItem() {
    // const newValue = Array.isArray(value) ? [...value, {}] : [{}];
    const newValue = [...value, {}];
    console.log({ [name]: newValue });
    dispatch(reducer({ [name]: newValue }));
  }
  function removeItem(key) {
    const newValue = [...value].filter((_, index) => index !== key);
    console.log({ [name]: newValue });
    dispatch(reducer({ [name]: newValue }));
  }
  return (
    <div className="jc-form__section-input--list  flex flex-col space-y-[8px]">
      {Array.isArray(value) &&
        value.map(({ name, level }, _key) => (
          <div
            className="relative jc-form__section-input  w-full sm:px-[20px] sm:py-[15px] px-[10px] py-[8px] border-gray-300  border "
            key={_key}
          >
            <input
              type="text"
              name="name"
              id={`${stringToNormalizeAndDashify(name)}-${_key}`}
              placeholder="Type here"
              value={name ?? ""}
              onChange={(e) => updateItem(e, _key)}
              className="text-[16px] w-[60%] sm:w-[50%] font-[500]  capitalize placeholder:font-[400] placeholder:normal-case jc-form__section-input--item   focus:outline-none"
            />

            <div className="jc-form__section-input--decor h-[2px] z-10 absolute bottom-0 left-0 right-0 jc-bg-linear opacity-0 transform scale-50 transition-all duration-200 ease-in-out"></div>

            {Array.isArray(levels) && (
              <div className="show-select flex items-baseline">
                <span className="jc-text-gray mr-[4px] text-[12px]">
                  Level -
                </span>

                <select
                  id="underline_select"
                  name="level"
                  value={level}
                  onChange={(e) => updateItem(e, _key)}
                  className="block capitalize mt-[4px] font-[600] appearance-none px-[10px] w-fit text-[12px] jc-text-black  border-b-2 0 focus:outline-none focus:ring-0 focus:border-gray-200"
                >
                  <option
                    defaultValue
                    className="jc-text-gray  bg-slate-300"
                    value=""
                  >
                    Choose level
                  </option>
                  {/* <option value="novice" className="font-[600] ">
                  Novice
                </option>
                <option value="beginner" className="font-[600]">
                  Beginner
                </option>
                <option value="skillful" className="font-[600]">
                  Skillful
                </option>
                <option value="experienced" className="font-[600]">
                  Experienced
                </option>
                <option value="expert" className="font-[600]">
                  Expert
                </option> */}
                  {levels.map((level, index) => (
                    <option
                      key={index}
                      value={level}
                      className="font-[600] capitalize"
                    >
                      {level}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div className="absolute flex border-l-2 right-0 sm:right-[12px] sm:pl-[20px] top-1/2 transform -translate-y-1/2">
              <button className=" flex  font-[400] text-[14px]  px-[10px] py-[5px]  text-[#8281a2] hover:text-blue-500 transition-colors duration-100">
                <label htmlFor={`${stringToNormalizeAndDashify(name)}-${_key}`}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="mr-[4px]"
                  >
                    <path d="M17.4413 6.25577c.7449.7448.7449 1.95236 0 2.69716L8.81405 17.5791c-.26829.2682-.63216.4189-1.01157.4189h-3.3719C3.64049 17.998 3 17.3576 3 16.5676v-3.3714c0-.3794.15072-.7432.41901-1.0115l8.62729-8.6261c.7449-.7448 1.9526-.7448 2.6975 0l2.6975 2.69717zM16.0926 7.6043l-2.6975-2.69717-6.62463 6.62377 2.69752 2.6971 6.62461-6.6237zm-7.97337 7.9723l-2.69752-2.6972-.44072.4407.01168 2.6855 2.68584.0117.44072-.4407z"></path>
                  </svg>
                </label>
              </button>

              <button
                onClick={() => removeItem(_key)}
                className=" flex  font-[400] text-[14px]  px-[10px] py-[5px]  text-[#8281a2] hover:text-red-500 transition-colors duration-100"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  version="1.1"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-[4px]"
                >
                  <path d="M14 6h3v2H3V6h3V3c0-.55228.44772-1 1-1h6c.5523 0 1 .44772 1 1v3zm-9 4h10v8H5v-8zm2 6h6v-4H7v4zm5-10V4H8v2h4z"></path>
                </svg>
              </button>
            </div>
          </div>
        ))}

      <div className="font-[600] text-[14px] px-[20px] py-[15px]">
        <button className="jc-link" onClick={addItem}>
          + Add item
        </button>
      </div>
    </div>
  );
}
