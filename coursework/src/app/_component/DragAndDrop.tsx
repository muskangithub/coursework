"use client";
import React, { useEffect, useState } from "react";
import { FileUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { object } from "zod";

const DragAnddrop = ({ onFilesSelected, files }: any) => {
  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      onFilesSelected(selectedFile);
    }
  };

  const handleDrop = (event: any) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      onFilesSelected(droppedFile);
    }
  };

  const handleRemoveFile = () => {
    onFilesSelected(null);
  };

  return (
    <section className="drag-drop bg-[#FCFBFD] w-full h-[240px] flex justify-center border-2 border-[#CEC4EB] border-dashed rounded-xl">
      <div
        className={`document-uploader items-center justify-center flex flex-col gap-5 ${
          files ? "upload-box active" : "upload-box"
        }`}
        onDrop={handleDrop}
        onDragOver={(event) => event.preventDefault()}
      >
        <div className="upload-info flex flex-col gap-2 items-center">
          <FileUp stroke="#98A1BB" />
          <div className="flex flex-col text-[#7A8196] font-bold">
            <p>Drag and drop a PDF</p>
            <p>*Limit 25 MB per file.</p>
          </div>
        </div>
        <input
          type="file"
          hidden
          id="browse"
          onChange={handleFileChange}
          accept=".pdf,.docx,.pptx,.txt,.xlsx"
        />
        <label
          htmlFor="browse"
          className="browse-btn border border-[#CEC4EB] py-2 px-3 bg-[#FCFBFD] shadow-md rounded-2xl w-[173px] text-[#6947BF] font-extrabold text-sm text-center"
        >
          Browse files
        </label>

        {Object.keys(files).length > 0 && (
          <div className="file-list">
            <div className="file-item">
              <div className="file-info">
                <p>{files.name}</p>
              </div>
              <div className="file-actions">
                <Button onClick={handleRemoveFile}>Remove File</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DragAnddrop;
