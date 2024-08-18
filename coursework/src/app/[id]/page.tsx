"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  ArrowRight,
  ChevronsUpDown,
  CircleCheck,
  Info,
  Maximize,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import CircularProgress from "../_component/CircularProgress";
import Image from "next/image";
import pdfimage from "../../assets/images/pdfimage.png";

export default function PageComponent() {
  const params = useParams();
  const [specificCoursework, setSpecificCoursework] = useState<any>(null);
  const [pdfData, setPdfData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isCollapsed, setIsCollapsed] = useState(false); // State for collapsing the image
  const [height, setHeight] = useState("auto"); // State to manage height
  const contentRef = useRef(null); // Ref to manage the height of the collapsible content

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("courseworkDataArray");
      if (savedData) {
        const courseworkArray = JSON.parse(savedData);
        const selectedCoursework = courseworkArray[parseInt(params.id)];

        if (selectedCoursework) {
          setSpecificCoursework(selectedCoursework);

          if (selectedCoursework.file) {
            setPdfData(selectedCoursework.file);
          } else {
            setError("No PDF file found.");
          }
        } else {
          setError("Coursework not found.");
        }
      } else {
        setError("No saved data found.");
      }
    }
  }, [params.id]);

  useEffect(() => {
    if (contentRef.current) {
      if (isCollapsed) {
        setHeight("0px");
      } else {
        setHeight(`${contentRef.current.scrollHeight}px`);
      }
    }
  }, [isCollapsed]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!specificCoursework || !pdfData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex bg-blue-100 pt-16 px-6 pb-6 gap-6">
      <div className="w-[50%]">
        <div className="rounded-t-3xl bg-gray-200 p-3 flex justify-between">
          <Badge className="flex border border-[#EAF0F2] py-1 px-2.5 bg-white text-[#5B6170] font-extrabold text-sm">
            <span>{specificCoursework.essayTitle}</span>
          </Badge>
          <div className="flex gap-3">
            <div className="flex gap-1 text-[#5B6170] font-bold">
              <ZoomOut />
              <span>60%</span>
              <ZoomIn />
            </div>
            <div className="bg-white p-1">
              <Maximize height={16} width={16} stroke="#5B6170" />
            </div>
            <Badge
              className="flex border hover:bg-gray-100 border-[#EAF0F2] py-1 px-2.5 bg-white text-[#5B6170] font-extrabold text-sm cursor-pointer"
              onClick={() => setIsCollapsed(!isCollapsed)} // Toggle collapse state
            >
              <ChevronsUpDown
                size={16}
                className={`transform transition-transform duration-300 ${
                  isCollapsed ? "rotate-180" : "rotate-0"
                }`}
              />
              <span>{isCollapsed ? "expand" : "collapse"}</span>
            </Badge>
          </div>
        </div>
        <div
          ref={contentRef}
          style={{ height }}
          className={`transition-height duration-1000 ease-in-out overflow-hidden bg-white`}
        >
          <div className="pt-5 px-16 h-[600px] overflow-y-auto opacity-100 transition-opacity duration-500">
            <Image src={pdfimage} alt={"pdf"} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-[50%]">
        <Card className="w-full h-[104px] p-0 rounded-3xl">
          <CardContent className="flex py-2 px-6 w-full justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-[#3D404B] font-semibold text-sm">
                Overall Score
              </span>
              <span className="font-extrabold text-2xl text-[#3D404B]">
                Remark :<span className="text-[#3CC28A]">Good</span>
              </span>
              <span className="text-[#98A1BB] text-xs font-semibold">
                Evaluated on 12 jul 2024
              </span>
            </div>
            <CircularProgress
              val={specificCoursework?.eveluation?.overallScore}
              height="80"
              width="80"
              type="overall"
            />
          </CardContent>
        </Card>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItemContent
            val={specificCoursework?.eveluation?.breakdown?.criteriaA}
            height="60"
            width="60"
            value="item-1"
            title="Understanding Knowledge Questions"
            description="The essay identifies and focuses on the knowledge question regarding the resolvability of disputes over knowledge claims within disciplines."
            strengths={[
              "Demonstrates a good understanding of the prescribed title and the associated knowledge questions.",
              "Demonstrates a good understanding of the prescribed title and the associated knowledge questions.",
            ]}
            improvements={[
              "Could provide more specific examples.",
              "Needs clearer arguments.",
            ]}
          />
          <AccordionItemContent
            val={specificCoursework?.eveluation?.breakdown?.criteriaB}
            height="60"
            width="60"
            value="item-2"
            title="Development of Ideas"
            description="The essay effectively develops ideas in a coherent manner."
            strengths={[
              "Clear progression of ideas.",
              "Well-structured paragraphs.",
            ]}
            improvements={[
              "Could use more transitions between ideas.",
              "Some arguments need more evidence.",
            ]}
          />
          <AccordionItemContent
            val={specificCoursework?.eveluation?.breakdown?.criteriaC}
            height="60"
            width="60"
            value="item-3"
            title="Use of Examples"
            description="The essay uses relevant examples to support arguments."
            strengths={[
              "Good use of historical examples.",
              "Examples are well-integrated into the text.",
            ]}
            improvements={[
              "Some examples could be more current.",
              "Consider adding more diverse examples.",
            ]}
          />
        </Accordion>
        <Button className="flex gap-2 bg-white rounded-3xl px-4 w-[276px] animate-bounce">
          <span className="text-[#6947BF] font-extrabold text-sm">
            Check detailed Evaluation
          </span>
          <ArrowRight stroke="#D9D9D9" size={20} />
        </Button>
      </div>
    </div>
  );
}

const AccordionItemContent = ({
  val,
  height,
  width,
  value,
  title,
  description,
  strengths,
  improvements,
}: any) => (
  <AccordionItem value={value} className="bg-white py-3 px-4 rounded-3xl mb-2">
    <AccordionTrigger className="flex ">
      <div className="flex gap-5 items-center">
        <CircularProgress
          type="small"
          height={`${height}`}
          width={`${width}`}
          val={val}
        />
        <div className="flex flex-col items-start">
          <span className="text-[#98A1BB] font-bold text-xs">Criteria:</span>
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

const ContentSection = ({ title, items, type }: any) => (
  <div className="flex flex-col gap-4">
    <span className="text-black font-extrabold text-xl">{title}</span>
    <div
      className={`flex flex-col border ${
        type === "strength"
          ? "border-[#3CC28A] bg-green-100"
          : "border-[#F9C94E] bg-orange-100"
      } p-4 gap-2 rounded-xl`}
    >
      {items.map((item, index) => (
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
