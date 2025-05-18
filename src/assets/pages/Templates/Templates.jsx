import React from "react";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import { Paris, Toronto } from "../../constants/constants";

export default function Templates() {
  return (
    <div className=" w-full relative bg-[#302c42] pt-[25px] lg:pt-[50px]">
      <Header />
      <div className="jc-container h-[2000px] bg-white mt-[56px]">
        <div className="w-full text-[32px] text-white font-[600] bg-black text-center mt-[32px] mb-[16px]">
          CHOOSE YOUR RESUME
        </div>
        <div className="jc-grid gap-4">
          <div className="col-span-12 md:col-span-6  lg:col-span-3 xl:col-span-2 hover">
            <Card name={Toronto} />
          </div>
          <div className="col-span-12 md:col-span-6  lg:col-span-3 xl:col-span-2 hover">
            <Card name={Paris} />
          </div>
        </div>
      </div>
    </div>
  );
}
