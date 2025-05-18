import React from "react";
import "./card.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTemplate } from "../../features/user/userSlice";
export default function Card({ name, src, link, ...props }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleClick(e) {
    dispatch(setTemplate(name));
    navigate("/edit");
  }

  return (
    <div className="jc-template w-fit bg-black mx-auto ">
      <div className="jc-template__name text-center mb-[4px] text-[20px] text-white ">
        {name}
      </div>
      <picture onClick={handleClick} className="relative cursor-pointer">
        <img
          src={src ? src : "https://placewaifu.com/image/150"}
          className="jc-template__img lg:w-[164px] lg:h-[228px] w-[228px] h-[342px]  rounded-[3px] border-[4px] border-transparent cursor-pointer transform transition duration-100 ease-in-out hover:border-white z-0 relative"
        />
        <div className="flex justify-center items-center absolute top-0 left-0 w-full h-full rounded-[3px] border-[4px] border-transparent opacity-0 hover:opacity-100 z-10 transform transition duration-200 ease-in-out hover:border-white">
          <p className="text-white text-[14px] font-[600] bg-black/60 p-5 rounded-xl">
            Choose Template
          </p>
        </div>
      </picture>
    </div>
  );
}
