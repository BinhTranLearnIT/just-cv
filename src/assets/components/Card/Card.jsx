import React from "react";
import "./card.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUserTemplate } from "../../features/user/userSlice";
export default function Card({ name, src, link, ...props }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleClick(e) {
    dispatch(updateUserTemplate(name));
    navigate("/edit");
  }

  return (
    <div
      className="jc-template 
    
    mx-auto hover:shadow-[0_0_4px_0_rgb(222,225,227)] overflow-hidden mb-[16px]"
    >
      <div className="jc-template__name text-center text-[20px] font-[600] py-[5px]  jc-text-black bg-white capitalize ">
        {name}
      </div>
      <picture
        onClick={handleClick}
        className="relative cursor-pointer block 
        min-w-[350px] sm:min-w-[300px]
        h-[493px]  sm:h-[420px]
      
        "
      >
        <img
          src={src ? src : "https://placewaifu.com/image/150"}
          className="jc-template__img  w-full h-full"
        />
        <div
          className="flex justify-center items-end absolute bottom-0 left-0 w-full h-full
        bg-[linear-gradient(rgba(222,222,222,0)_0%,rgba(217,217,217,0.65)_90.55%)]
         opacity-0 hover:opacity-100  z-10 transform transition-all duration-200 ease-in-out "
        >
          <p className="text-white text-[14px] font-[600] bg-[#006dcc] py-[8px] px-[20px] mb-[20px] rounded-[8px]">
            Choose Template
          </p>
        </div>
      </picture>
    </div>
  );
}
