import { CircleCheck, Info } from "lucide-react";
import React from "react";

export default function ContentSection({ title, items, type }: any) {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-black font-extrabold text-xl">{title}</span>
      <div
        className={`flex flex-col border ${
          type === "strength"
            ? "border-[#3CC28A] bg-green-100"
            : "border-[#F9C94E] bg-orange-100"
        } p-4 gap-2 rounded-xl`}
      >
        {items.map((item: any, index: number) => (
          <div key={index} className="flex gap-3">
            {type === "strength" ? (
              <CircleCheck fill="#3CC28A" stroke="#ffffff" />
            ) : (
              <Info fill="#F9C94E" stroke="#ffffff" />
            )}
            <span className="text-[#3D404B] font-bold text-sm">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
