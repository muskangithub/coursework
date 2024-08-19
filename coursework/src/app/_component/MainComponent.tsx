"use client";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ExploreCoursework from "./ExploreCoursework";
import DragAnddrop from "./DragAndDrop";
import Image from "next/image";
import Frame from "../../assets/images/Frame.png";
import Rectangle from "../../assets/images/Rectangle.png";
import CourseCard from "./CourseCard";
import { UploadIcon } from "../../SvgIcons";

export default function MainComponent() {
  const [files, setFiles] = useState<File | null>(null);
  const [course, setCourse] = useState("");
  const [subject, setSubject] = useState("");
  const [essayTitle, setEssayTitle] = useState("");
  const [courseworkArray, setCourseworkArray] = useState<any[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem("courseworkDataArray");
    if (savedData) {
      const courseworkArray = JSON.parse(savedData);
      setCourseworkArray(courseworkArray);
      const lastCoursework = courseworkArray[courseworkArray.length - 1];

      if (lastCoursework) {
        setCourse(lastCoursework.course || "");
        setSubject(lastCoursework.subject || "");
        setEssayTitle(lastCoursework.essayTitle || "");
        setFiles(lastCoursework.file || null);
      }
    }
  }, []);

  const handleFileSelection = (file: File | null) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result?.toString().split(",")[1];
        setFiles({ name: file.name, type: file.type, base64String });
      };
      reader.readAsDataURL(file);
    } else {
      setFiles(null);
    }
  };

  const handleSubmit = () => {
    if (!course || !subject || !essayTitle || !files) {
      alert("Please fill out all required fields.");
      return;
    }

    const currentDate = new Date().toISOString().split("T")[0];

    const courseworkData = {
      file: files,
      course,
      subject,
      essayTitle,
      eveluation: {
        overallScore: Math.floor(Math.random() * 21),
        breakdown: {
          criteriaA: Math.floor(Math.random() * 11),
          criteriaB: Math.floor(Math.random() * 11),
          criteriaC: Math.floor(Math.random() * 11),
        },
        evaluationDate: currentDate,
      },
    };

    const savedCourseworkArray =
      JSON.parse(localStorage.getItem("courseworkDataArray")) || [];
    savedCourseworkArray.push(courseworkData);

    localStorage.setItem(
      "courseworkDataArray",
      JSON.stringify(savedCourseworkArray)
    );
    setCourseworkArray(savedCourseworkArray);
  };

  const visibleCoursework = showAll
    ? courseworkArray
    : courseworkArray.slice(0, 2);

  return (
    <div className="flex">
      <div className="flex pt-[180px] justify-center max-w-[1099px] max-md:w-full mx-auto flex-col gap-10">
        <div className="flex gap-4 h-[574px]">
          <div className="flex flex-col">
            <div className="text-[#1E2026] font-extrabold text-xl">
              Hey IB Folks! Unsure about the quality of your answers?
              <span className="text-[#6947BF]">We get you.</span>
            </div>
            <div className="bg-[#D6DFE4] p-5 flex flex-col gap-8">
              <DragAnddrop
                onFilesSelected={handleFileSelection}
                files={files}
              />
              <div className="flex flex-col gap-4">
                <div>
                  <span className="text-[#7A8196]">
                    Select your course & subjects*
                  </span>
                  <div className="flex gap-5 max-md:flex-col">
                    <Select
                      value={course}
                      onValueChange={(value) => setCourse(value)}
                    >
                      <SelectTrigger className="w-[180px] border-[#EAF0F2] rounded-3xl max-md:w-full">
                        <SelectValue placeholder="Coursework Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="essay">Essay</SelectItem>
                          <SelectItem value="researchPaper">
                            Research Paper
                          </SelectItem>
                          <SelectItem value="presentation">
                            Presentation
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>

                    <Select
                      value={subject}
                      onValueChange={(value) => setSubject(value)}
                    >
                      <SelectTrigger className="w-[180px] border-[#EAF0F2] rounded-3xl  max-md:w-full">
                        <SelectValue placeholder="Subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="history">History</SelectItem>
                          <SelectItem value="science">Science</SelectItem>
                          <SelectItem value="mathematics">
                            Mathematics
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <span className="text-[#7A8196]">
                    Enter your essay title* (Required)
                  </span>
                  <Input
                    className="border-[#FF4800] rounded-3xl py-1 px-2"
                    type="text"
                    placeholder="How nation works..."
                    value={essayTitle}
                    onChange={(e) => setEssayTitle(e.target.value)}
                  />
                </div>
              </div>
              <Button
                className="bg-[#ADB8C9] rounded-3xl flex gap-2 py-2 w-[245px]"
                onClick={handleSubmit}
              >
                <UploadIcon />
                <span className="text-white">Evaluate your Score</span>
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center max-md:hidden">
            <Image src={Rectangle} alt="" width={228} height={131} />
            <Image src={Frame} alt="" width={290} height={392} />
          </div>
        </div>
        <div
          className={`flex flex-col gap-3 w-[930px] max-md:w-screen max-md:justify-center max-md:flex-wrap`}
        >
          <span className="text-[#5B6170]">My coursework</span>
          <div
            className={`flex flex-wrap gap-4 w-full ${
              showAll ? "h-[300px] overflow-y-scroll gap-1" : ""
            }`}
          >
            {visibleCoursework.map((coursework, index) => (
              <CourseCard key={index} item={coursework} id={index} />
            ))}
          </div>
          <div className="flex items-center justify-center w-full">
            <Button
              className="text-[#98A1BB] bg-blue-100 py-1 px-1.5 font-bold text-sm"
              onClick={() => setShowAll(!showAll)}
            >
              View all
            </Button>
          </div>
        </div>
        <ExploreCoursework />
      </div>
    </div>
  );
}
