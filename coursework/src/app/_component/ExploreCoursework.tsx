import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseCard from "./CourseCard";

export default function ExploreCoursework() {
  return (
    <div>
      <span className="text-[#5B6170] font-bold text-xl">
        Explore coursework
      </span>
      <div>
        <Tabs defaultValue="all" className="w-full ">
          <TabsList className="flex flex-wrap gap-1 w-full bg-blue-100 items-start justify-start ">
            <TabsTrigger
              value="all"
              className="rounded-xl data-[state=active]:text-[#6947BF]"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="IA"
              className="rounded-xl data-[state=active]:text-[#6947BF]"
            >
              IA Example
            </TabsTrigger>
            <TabsTrigger
              value="EE"
              className="rounded-xl data-[state=active]:text-[#6947BF]"
            >
              EE Example
            </TabsTrigger>
            <TabsTrigger
              value="IO"
              className="rounded-xl data-[state=active]:text-[#6947BF]"
            >
              IO Example
            </TabsTrigger>
            <TabsTrigger
              value="Tok"
              className="rounded-xl data-[state=active]:text-[#6947BF]"
            >
              Tok Example
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <div className="w-[900px] flex flex-wrap gap-4 max-md:w-screen">
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
            </div>
          </TabsContent>
          <TabsContent value="IA">
            <div className="w-[900px] max-md:w-screen"> IA Example</div>
          </TabsContent>
          <TabsContent value="EE" className="w-[900px]  max-md:w-screen">
            <div className="w-[900px]"> EE Example</div>
          </TabsContent>
          <TabsContent value="IO" className="w-[900px]  max-md:w-screen">
            <div className="w-[900px]"> IO Example</div>
          </TabsContent>
          <TabsContent value="Tok" className="w-[900px]  max-md:w-screen">
            <div className="w-[900px]"> ToK Example</div>
          </TabsContent>
        </Tabs>
      </div>
      <div></div>
    </div>
  );
}
