import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import CircularProgress from "../_component/CircularProgress";
import { Separator } from "@/components/ui/separator";
import ContentSection from "./ContentSection";

export default function AccordianItemContent({
  val,
  height,
  criteria,
  width,
  value,
  title,
  description,
  strengths,
  improvements,
}: any) {
  return (
    <AccordionItem
      value={value}
      className="bg-white py-3 px-4 rounded-3xl mb-2"
    >
      <AccordionTrigger className="flex ">
        <div className="flex gap-5 items-center">
          <CircularProgress
            type="small"
            height={`${height}`}
            width={`${width}`}
            val={val}
          />
          <div className="flex flex-col items-start">
            <span className="text-[#98A1BB] font-bold text-xs">
              Criteria:{criteria}
            </span>
            <span className="text-[#3D404B] font-bold text-xl">{title}</span>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 ">
        <Separator />
        <span className="text-[#5B6170] text-sm font-semibold">
          {description}
        </span>
        <ContentSection title="Strengths" items={strengths} type="strength" />
        <ContentSection
          title="Scope of Improvement"
          items={improvements}
          type="improvement"
        />
      </AccordionContent>
    </AccordionItem>
  );
}
