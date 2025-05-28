import React from "react";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import { London, Paris, Toronto } from "../../constants/constants";

export default function Templates() {
  return (
    <div className=" w-full relative bg-[#302c42]">
      <Header />
      <div className="jc-container  py-[50px]">
        <div className="w-full text-[32px] text-white font-[600] flex justify-center mb-[30px]">
          <span className="text-left ">Choose your favorite template.</span>
        </div>
        <div
          className="jc-grid mx-auto
         gap-y-[45px] sm:gap-x-[24px] sm:gap-y-[32px]
         max-w-[350px] sm:max-w-[625px] lg:max-w-[955px]
        "
        >
          <div className="col-span-12 sm:col-span-6 md:col-span-6  lg:col-span-4 xl:col-span-2 ">
            <Card name={Toronto} />
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-6  lg:col-span-4 xl:col-span-2 ">
            <Card name={Paris} />
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-6  lg:col-span-4 xl:col-span-2 ">
            <Card name={London} />
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-6  lg:col-span-4 xl:col-span-2 ">
            <Card name={Toronto} />
          </div>
        </div>
      </div>
    </div>
  );
}
