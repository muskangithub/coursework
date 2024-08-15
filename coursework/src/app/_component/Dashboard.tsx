"use client";
import React, { useState } from "react";
import Image from "next/image";
import Frame from "../../assets/images/Frame.png";
import Rectangle from "../../assets/images/Rectangle.png";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CourseCard from "./CourseCard";
import ExploreCoursework from "./ExploreCoursework";
import DragAnddrop from "./DragAndDrop";

export default function Dashboard() {
  const [files, setFiles] = useState([]);
  console.log(files, "file");

  return (
    <div className="flex bg-blue-100">
      <div className="w-16 p-2 bg-[#F8FAFC] h-screen rounded-lg"></div>
      <div className=" flex pt-[180px] justify-center max-w-[1099px] mx-auto flex-col gap-10">
        <div className="flex gap-4 justify-cente h-[574px]">
          <div className="flex flex-col">
            <div className="text-[#1E2026] font-extrabold text-xl">
              Hey IB Folks ! Unsure about the quality of your answers?
              <span className="text-[#6947BF]">We get you.</span>
            </div>
            <div className="bg-[#D6DFE4] p-5 flex flex-col gap-8">
              {/* <DndProvider backend={HTML5Backend}>
                <div style={{ maxWidth: "400px", margin: "50px auto" }}>
                  <h3>Upload Files</h3>
                  <FileDropZone onDrop={handleDrop} />
                </div>
              </DndProvider> */}
              <DragAnddrop onFilesSelected={setFiles} />
              <div className="flex flex-col gap-4">
                <div>
                  <span className="text-[#7A8196]">
                    Select your course & subjects*
                  </span>
                  <div className="flex gap-5">
                    <Select>
                      <SelectTrigger className="w-[180px] border-[#EAF0F2] rounded-3xl">
                        <SelectValue placeholder="Coursework Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Fruits</SelectLabel>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                          <SelectItem value="blueberry">Blueberry</SelectItem>
                          <SelectItem value="grapes">Grapes</SelectItem>
                          <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>

                    <Select>
                      <SelectTrigger className="w-[180px] border-[#EAF0F2] rounded-3xl">
                        <SelectValue placeholder="Subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Fruits</SelectLabel>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                          <SelectItem value="blueberry">Blueberry</SelectItem>
                          <SelectItem value="grapes">Grapes</SelectItem>
                          <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <span className="text-[#7A8196]">
                    Enter your essay title*(Required){" "}
                  </span>
                  <Input
                    className="border-[#FF4800] rounded-3xl py-1 px-2"
                    type="text"
                    placeholder="how nation works..."
                  />
                </div>
              </div>
              <Button className="bg-[#ADB8C9] rounded-3xl flex gap-2 py-2 w-[245px]">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.0870972"
                    width="24"
                    height="24"
                    rx="12"
                    fill="#EAF0F2"
                  />
                  <g clip-path="url(#clip0_2_6628)">
                    <path
                      d="M11.0396 7.46953L10.8886 7.41035L10.7373 7.46884L9.52713 7.93673L10.0047 6.74237L10.0641 6.59363L10.0087 6.44336L9.60569 5.35205L10.6846 5.7603L10.836 5.81757L10.9863 5.75766L12.1831 5.28077L11.7158 6.49336L11.657 6.64619L11.7179 6.79821L12.1636 7.91002L11.0396 7.46953ZM18.0337 14.4675L17.8837 14.4114L17.7347 14.4703L16.5444 14.941L17.0182 13.7559L17.0798 13.602L17.0188 13.4479L16.5715 12.3179L17.6893 12.7704L17.8444 12.8332L17.9999 12.7712L19.1874 12.298L18.7173 13.4908L18.658 13.6413L18.7158 13.7924L19.1309 14.8773L18.0337 14.4675ZM9.99688 16.6876L9.85199 16.6356L9.70806 16.6902L6.60829 17.8673L7.78537 14.7675L7.83987 14.624L7.78823 14.4795L6.682 11.3825L9.78894 12.4805L9.93236 12.5312L10.0747 12.4776L13.1611 11.3145L11.998 14.4009L11.9442 14.5437L11.9953 14.6874L13.1036 17.804L9.99688 16.6876Z"
                      fill="#98A1BB"
                      stroke="#98A1BB"
                      stroke-width="0.833333"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_6628">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(2.0871 2)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-[#fff]">Evaluate your Score</span>
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image src={Rectangle} alt={""} width={228} height={131} />
            <Image src={Frame} alt={""} width={290} height={392} />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-[#5B6170]">My coursework</span>
          <div className="flex gap-4">
            <CourseCard />
            <CourseCard />
          </div>
          <div className="flex items-center justify-center ">
            <span className="text-[#98A1BB]">View all</span>
          </div>
        </div>
        <ExploreCoursework />
      </div>
    </div>
  );
}
