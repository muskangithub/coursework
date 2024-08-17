"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import CourseCard from "./CourseCard";
import MainComponent from "./MainComponent";
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import { FileStack, Folder, Info, LayoutDashboard } from "lucide-react";

export default function Dashboard() {
  const [files, setFiles] = useState([]);
  console.log(files, "file");

  return (
    <Tabs defaultValue="IA" className="flex w-full bg-blue-100  ">
      <TabsList className="flex gap-2 flex-col w-14 p-2 bg-[#F8FAFC] h-auto  rounded-lg items-start justify-start">
        <Image src={logo} alt={"logo"} height={36} width={36} />

        <TabsTrigger
          value="IA"
          className="rounded-xl data-[state=active]:text-[#6947BF]"
        >
          <LayoutDashboard />
        </TabsTrigger>
        <TabsTrigger
          value="EE"
          className="rounded-xl data-[state=active]:text-[#6947BF]"
        >
          <FileStack />
        </TabsTrigger>
        <TabsTrigger
          value="IO"
          className="rounded-xl data-[state=active]:text-[#6947BF]"
        >
          <Folder />
        </TabsTrigger>
        <TabsTrigger
          value="Tok"
          className="rounded-xl data-[state=active]:text-[#6947BF]"
        >
          <Info />
        </TabsTrigger>
      </TabsList>
      <TabsContent value="IA" className="w-full">
        <MainComponent setFiles={setFiles} />
      </TabsContent>
      <TabsContent value="EE" className="w-full">
        <div> test2</div>
      </TabsContent>
      <TabsContent value="IO" className="w-full">
        <div> test3</div>
      </TabsContent>
      <TabsContent value="Tok" className="full">
        <div> test4</div>
      </TabsContent>
    </Tabs>
  );
}
