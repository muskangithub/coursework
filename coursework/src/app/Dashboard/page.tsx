"use client";
import React, { useEffect } from "react";
import MainComponent from "../_component/MainComponent";
import { useParams } from "next/navigation";
import Page from "../[id]/page";

export default function page() {
  const params = useParams();
  return <div>{params.id ? <Page /> : <MainComponent />}</div>;
}
