"use client";
import React from "react";
import MainComponent from "../_component/MainComponent";
import { useParams } from "next/navigation";
import Page from "../[id]/page";

const PageWrapper = () => {
  const params = useParams();
  return <div>{params.id ? <Page /> : <MainComponent />}</div>;
};

export default PageWrapper;
