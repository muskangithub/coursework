import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import CardImg from "../../assets/images/card-img.png";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  CourseIcon,
  ReadTimeIcon,
  SevenIcon,
  SubjectIcon,
  WordIcon,
} from "../../SvgIcons";

export default function CourseCard({ item, id }: any) {
  return (
    <div className="w-[440px] max-md:w-full border-[#F4EAD8] rounded-xl bg-gradient-to-r from-[#ffffff] to-[#F4EAD8] flex gap-1 h-[172px] p-[6px]">
      <Image src={CardImg} alt={"card"} height={160} width={120} />
      <Card className="h-full p-0  bg-card-none border-none">
        <CardHeader className="p-0 py-1 px-2">
          <CardTitle className="text-[#3D404B] font-semibold text-lg">
            <Link href={`/${id}`}>
              {item?.essayTitle
                ? item?.essayTitle
                : "How does the temperature of a Copper... "}
            </Link>
          </CardTitle>
          <CardDescription className="text-[#7A8196] font-semibold text-xs">
            How does the temperature of a Copper pipe affect the time it takes a
            magnet to fall thought{" "}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0 border-none">
          <div className="flex flex-wrap gap-1">
            <Badge className="bg-[#ffffff] flex gap-1 rounded-2xl">
              <CourseIcon />
              <span className="text-[#5B6170]">
                {item?.course ? item?.course : "Physics HL"}
              </span>
            </Badge>
            <Badge className="bg-[#ffffff] flex gap-1 rounded-2xl">
              <ReadTimeIcon />

              <span className="text-[#5B6170]">18 min read</span>
            </Badge>
            <Badge className="bg-[#ffffff] flex gap-1 rounded-2xl">
              <WordIcon />
              <span className="text-[#5B6170]">2388 words</span>
            </Badge>
            <Badge className="bg-[#ffffff] flex gap-1 rounded-2xl">
              <SevenIcon />
              <span className="text-[#5B6170]">7/7</span>
            </Badge>
            <Badge className="bg-[#ffffff] flex gap-1 rounded-2xl">
              <SubjectIcon />
              <span className="text-[#5B6170]">
                {item?.subject ? item?.subject : "English"}
              </span>
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
