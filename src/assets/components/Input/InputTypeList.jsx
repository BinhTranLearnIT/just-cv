import React from "react";
import { useDispatch } from "react-redux";
import "./Input.css";
export default function InputTypeList({ name, value, reducer, ...props }) {
  const dispatch = useDispatch();
  //action.payload = {[name]:value}
  // value = array [ ]
  function updateItem(e, key) {
    const newValue = [...value];
    newValue[key] = { ...newValue[key], [e.target.name]: e.target.value };
    console.log({ [name]: newValue });
    dispatch(reducer({ [name]: newValue }));
  }
  function addItem() {
    const newValue = [...value, {}];
    console.log({ [name]: newValue });
    dispatch(reducer({ [name]: newValue }));
  }
  function removeItem(key) {
    const newValue = value.filter((_, index) => index !== key);
    console.log({ [name]: newValue });
    dispatch(reducer({ [name]: newValue }));
  }
  return (
    <div className="jc-form__section-input--list  flex flex-col space-y-[8px]">
      {Array.isArray(value) &&
        value.map(({ name, level }, _key) => (
          <div
            className="relative jc-form__section-input  w-full px-[20px] py-[15px] border-gray-300  border "
            key={_key}
          >
            <input
              type="text"
              name="name"
              value={name ?? ""}
              onChange={(e) => updateItem(e, _key)}
              className="text-[15px] w-[50%] font-[500] capitalize jc-form__section-input--item   focus:outline-none"
            />
            <div className="show-select flex items-baseline">
              <span className="jc-text-gray mr-[4px] text-[12px]">Level -</span>
              <select
                id="underline_select"
                name="level"
                value={level}
                onChange={(e) => updateItem(e, _key)}
                class="block mt-[4px] font-[600] appearance-none px-[10px] w-fit text-[12px] jc-text-black  border-b-2 0 focus:outline-none focus:ring-0 focus:border-gray-200"
              >
                <option
                  selected
                  className="jc-text-gray  bg-slate-300"
                ></option>
                <option value="novice" className="font-[600] ">
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
                </option>
              </select>
            </div>

            <button
              onClick={() => removeItem(_key)}
              className=" flex absolute font-[400] text-[14px] right-[12px] top-1/2 transform -translate-y-1/2 px-[10px] py-[2px]  text-[#8281a2] hover:text-blue-500 transition-colors duration-100"
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
              Delete
            </button>

            <div class="jc-form__section-input--decor h-[2px] z-10 absolute bottom-0 left-0 right-0 jc-bg-linear opacity-0 transform scale-50 transition-all duration-200 ease-in-out"></div>
          </div>
        ))}

      <div className="font-[600] text-[14px] px-[20px] py-[15px]">
        <button className="jc-link" onClick={addItem}>
          + Add one more skill
        </button>
      </div>
    </div>
  );
}
