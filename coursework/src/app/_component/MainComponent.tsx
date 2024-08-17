import React from "react";
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
import ExploreCoursework from "./ExploreCoursework";
import DragAnddrop from "./DragAndDrop";
import Image from "next/image";
import Frame from "../../assets/images/Frame.png";
import Rectangle from "../../assets/images/Rectangle.png";
import CourseCard from "./CourseCard";
import { Badge } from "@/components/ui/badge";
import { BriefcaseBusiness, Files } from "lucide-react";

export default function MainComponent({ setFiles }: any) {
  return (
    <div className="flex">
      <div className=" flex pt-[180px] justify-center max-w-[1099px] mx-auto flex-col gap-10">
        <div className="flex gap-4 h-[574px]">
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
      <div className="w-[86px] p-3 h-auto flex flex-col items-end">
        <div className="flex flex-col p-0.5 gap-1 ">
          <Badge className="flex border border-[#EAF0F2] py-1 px-2.5 bg-white text-[#5B6170] font-extrabold text-sm ">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99996 1.66675L12.1136 2.11169L14.1666 2.7832L15.7747 4.22538L17.2168 5.83341L17.8884 7.88639L18.3333 10.0001L17.8884 12.1138L17.2168 14.1667L15.7747 15.7748L14.1666 17.217L12.1136 17.8885L9.99996 18.3334L7.88627 17.8885L5.83329 17.217L4.22525 15.7748L2.78308 14.1667L2.11157 12.1138L1.66663 10.0001L2.11157 7.88639L2.78308 5.83341L4.22525 4.22538L5.83329 2.7832L7.88627 2.11169L9.99996 1.66675Z"
                fill="url(#paint0_radial_2_7062)"
              />
              <path
                d="M10 3.33325L11.691 3.6892L13.3334 4.22642L14.6198 5.38015L15.7735 6.66659L16.3108 8.30897L16.6667 9.99992L16.3108 11.6909L15.7735 13.3333L14.6198 14.6197L13.3334 15.7734L11.691 16.3106L10 16.6666L8.30909 16.3106L6.66671 15.7734L5.38028 14.6197L4.22654 13.3333L3.68933 11.6909L3.33337 9.99992L3.68933 8.30897L4.22654 6.66659L5.38028 5.38015L6.66671 4.22642L8.30909 3.6892L10 3.33325Z"
                fill="url(#paint1_radial_2_7062)"
              />
              <path
                d="M5.97 12.25V11.2367L8.11667 8.82333V8.74333H6.03667V7.85H9.29V8.95L7.21667 11.2833V11.3567H9.37667V12.25H5.97ZM12.0315 12.3433C11.7515 12.3433 11.5026 12.3144 11.2848 12.2567C11.067 12.2033 10.8781 12.1233 10.7181 12.0167C10.5581 11.91 10.4248 11.7811 10.3181 11.63C10.2159 11.4789 10.1381 11.31 10.0848 11.1233C10.0359 10.9322 10.0115 10.7256 10.0115 10.5033V7.85H11.0915V10.47C11.0915 10.6833 11.1248 10.8589 11.1915 10.9967C11.2581 11.1344 11.3603 11.2367 11.4981 11.3033C11.6359 11.3656 11.8115 11.3967 12.0248 11.3967C12.2381 11.3967 12.4137 11.3656 12.5515 11.3033C12.6892 11.2367 12.7915 11.1344 12.8581 10.9967C12.9248 10.8589 12.9581 10.6833 12.9581 10.47V7.85H14.0315V10.5033C14.0315 11.0856 13.8648 11.5389 13.5315 11.8633C13.2026 12.1833 12.7026 12.3433 12.0315 12.3433Z"
                fill="#834700"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_2_7062"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(9.99996 10.0001) rotate(90) scale(8.33333)"
                >
                  <stop stop-color="#FFC657" />
                  <stop offset="1" stop-color="#FFBA36" />
                </radialGradient>
                <radialGradient
                  id="paint1_radial_2_7062"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(10 9.99992) rotate(90) scale(6.66667)"
                >
                  <stop stop-color="#FFCC9D" />
                  <stop offset="1" stop-color="#F29100" />
                </radialGradient>
              </defs>
            </svg>
            <span>102</span>
          </Badge>
          <Badge className="flex border border-[#EAF0F2] py-1 px-2.5 bg-white text-[#5B6170] font-extrabold text-sm">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.89824 17.4098C6.79752 17.9338 4.77283 16.0268 4.14807 15.0078L4.73037 13.1699L5.40365 11.9871L5.89496 9.69433L7.31431 7.89286L8.77005 7.82007L11.9363 7.89286L14.9569 12.0963L15.976 14.6075C14.2 17.417 11.1841 17.6463 9.89824 17.4098Z"
                fill="url(#paint0_linear_2_7068)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.7734 12.7745C10.687 12.8318 10.5872 12.8657 10.4838 12.8729C10.3804 12.8802 10.2769 12.8605 10.1833 12.8159C10.0582 12.7423 9.95791 12.633 9.89521 12.5021C9.83251 12.3712 9.81029 12.2245 9.83137 12.0809C9.77776 11.3688 9.47545 10.6982 8.97733 10.1865C8.81335 10.91 8.52245 11.5987 8.11812 12.2207L7.63676 12.9557C7.17716 13.657 6.96075 14.4899 7.02082 15.3263C7.06622 15.8888 7.32123 16.4138 7.73535 16.7972C8.14946 17.1806 8.69247 17.3946 9.25683 17.3966H10.5612C11.2096 17.3966 11.8315 17.1394 12.2905 16.6814C12.7495 16.2234 13.008 15.602 13.0094 14.9536C13.0084 13.7121 12.5788 12.509 11.7931 11.5478C11.5716 12.0422 11.2189 12.4664 10.7734 12.7745Z"
                fill="url(#paint1_linear_2_7068)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.0609 3.42075L12.7917 3.18265C12.7917 3.18265 12.7917 3.28617 12.7917 3.45698C12.7282 4.11201 12.5214 4.74507 12.186 5.31127C11.8506 5.87748 11.3947 6.36298 10.8507 6.73336C10.8507 6.73336 10.8507 6.55221 10.8145 6.26753C10.7242 5.13961 10.3542 4.05199 9.73781 3.10306C9.12146 2.15413 8.27826 1.37384 7.28448 0.832764C7.28448 0.832764 7.24825 1.428 7.20685 2.075C7.14576 3.10812 6.81566 4.10733 6.24929 4.97354L4.73273 7.27684C3.70108 8.8527 3.21721 10.7245 3.35593 12.6029C3.42496 13.521 3.73762 14.4041 4.26169 15.1611C4.78575 15.918 5.50224 16.5215 6.33728 16.9093C6.04637 16.458 5.8688 15.943 5.81969 15.4083C5.74341 14.3128 6.02693 13.2223 6.62714 12.3027L7.1085 11.5729C7.61005 10.8313 7.90811 9.97101 7.97289 9.07808C7.98037 8.97894 8.01214 8.88317 8.0654 8.79921C8.11866 8.71526 8.19177 8.64572 8.27827 8.59671C8.36531 8.54821 8.4633 8.52276 8.56295 8.52276C8.66259 8.52276 8.76058 8.54821 8.84763 8.59671C9.77001 9.09913 10.4715 9.92797 10.8145 10.9207C10.868 10.7759 10.9011 10.6243 10.9128 10.4704C10.9044 10.3366 10.937 10.2034 11.0064 10.0887C11.0758 9.97398 11.1786 9.88322 11.301 9.82859C11.4341 9.78585 11.5772 9.78529 11.7106 9.82698C11.844 9.86868 11.9613 9.95059 12.0464 10.0615C12.7242 10.6826 13.2646 11.4386 13.6327 12.281C14.0009 13.1234 14.1887 14.0335 14.184 14.9528C14.1847 15.5772 14.0223 16.1909 13.713 16.7333C14.633 16.2531 15.4042 15.5306 15.9434 14.6439C16.4825 13.7572 16.7691 12.74 16.772 11.7023C16.7703 10.1386 16.4389 8.59281 15.7994 7.16583C15.16 5.73885 14.2268 4.46273 13.0609 3.42075Z"
                fill="#FF7A1A"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2_7068"
                  x1="10.062"
                  y1="7.82007"
                  x2="10.062"
                  y2="17.4992"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFC888" />
                  <stop offset="1" stop-color="#FFEBCD" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_2_7068"
                  x1="10.0102"
                  y1="10.1865"
                  x2="10.0102"
                  y2="17.3966"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFBD8D" />
                  <stop offset="1" stop-color="#FF6B00" />
                </linearGradient>
              </defs>
            </svg>
            <span>24</span>
          </Badge>
        </div>
        <div className="rounded-full w-11 h-11 items-center justify-center flex bg-gray-200">
          <div className="rounded-full w-9 h-9 items-center justify-center flex bg-white">
            <BriefcaseBusiness />
          </div>
        </div>
        <div className="rounded-full w-11 h-11 items-center justify-center flex bg-gray-200">
          <div className="rounded-full w-9 h-9 items-center justify-center flex bg-white">
            <Files />
          </div>
        </div>
      </div>
    </div>
  );
}
