import React from "react";
import { FormCompo } from "./FormCompo";
import Image from "next/image";
import Frame from "../../assets/images/Frame.png";

export default function Dashboard() {
  return (
    <div className="flex bg-blue-100">
      <div className="w-16 p-2">
        <div className="bg-[#F8FAFC] w-full h-screen rounded-lg">hello</div>
      </div>
      <div className=" flex pt-[180px] justify-center max-w-[1099px]">
        <div>
          <div>
            <div className="text-[#1E2026] font-extrabold text-xl">
              Hey IB Folks ! Unsure about the quality of your answers?
              <span className="text-[#6947BF]">We get you.</span>
            </div>
            <div></div>
          </div>
          <div>
            <Image src={Frame} alt={""} width={343} height={464} />
          </div>
        </div>
        {/* <FormCompo /> */}
      </div>
      <div></div>
    </div>
  );
}
