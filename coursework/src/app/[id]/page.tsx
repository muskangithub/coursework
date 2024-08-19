"use client";
import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronsUpDown,
  Maximize,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import CircularProgress from "../_component/CircularProgress";
import Image from "next/image";
import pdfimage from "../../assets/images/pdfimage.png";
import { toast } from "@/components/ui/use-toast";
import AccordianItemContent from "./AccordianItemContent";

export default function PageComponent() {
  const params = useParams();
  const [specificCoursework, setSpecificCoursework] = useState<any>(null);
  const [pdfData, setPdfData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isCollapsed, setIsCollapsed] = useState(false); // State for collapsing the image
  function convertDateFormat(dateStr: string) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const [year, month, day] = dateStr.split("-");
    const monthName = monthNames[parseInt(month, 10) - 1];
    return `${day} ${monthName} ${year}`;
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("courseworkDataArray");
      if (savedData) {
        const courseworkArray = JSON.parse(savedData);
  
        // Ensure params.id is a string and handle the case if it is an array
        const id = Array.isArray(params.id) ? params.id[0] : params.id;
        const selectedCoursework = courseworkArray[parseInt(id)];
  
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
    if (specificCoursework) {
      const score = (specificCoursework.eveluation?.overallScore / 20) * 100;
      if (score >= 70) {
        toast({
          variant: "success",
          title: "Nice Job",
          description: "Good job, keep it up",
        });
      } else if (score <= 30) {
        toast({
          variant: "destructive",
          title: "Poor Performance",
          description: "You need to improve your score",
        });
      } else {
        toast({
          variant: "middle",
          title: "Need to Do Better",
          description: "You can do better",
        });
      }
    }
  }, [specificCoursework]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!specificCoursework || !pdfData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex bg-blue-100 pt-8 px-6 pb-6 gap-6">
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
              <span>{isCollapsed ? "Expand" : "Collapse"}</span>
            </Badge>
          </div>
        </div>
        <div
          className={`overflow-hidden bg-white rounded-b-3xl ${
            isCollapsed
              ? "max-h-0 transition-max-height duration-1000 ease-in-out"
              : "max-h-[600px] transition-max-height duration-1000 ease-in-out"
          }`}
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
                Evaluated on{" "}
                {convertDateFormat(
                  specificCoursework?.eveluation?.evaluationDate
                )}
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
          <AccordianItemContent
            val={specificCoursework?.eveluation?.breakdown?.criteriaA}
            height="60"
            width="60"
            criteria={"A"}
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
          <AccordianItemContent
            val={specificCoursework?.eveluation?.breakdown?.criteriaB}
            height="60"
            width="60"
            criteria={"B"}
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
          <AccordianItemContent
            val={specificCoursework?.eveluation?.breakdown?.criteriaC}
            height="60"
            width="60"
            criteria={"C"}
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
            Check Detailed Evaluation
          </span>
          <ArrowRight stroke="#D9D9D9" size={20} />
        </Button>
      </div>
    </div>
  );
}
