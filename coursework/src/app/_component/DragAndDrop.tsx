"use client";
import React, { useEffect, useState } from "react";
import { CloudUpload, FileUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const DragAnddrop = ({ onFilesSelected }: any) => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    console.log(selectedFiles, "selected");
    if (selectedFiles && selectedFiles.length > 0) {
      const newFiles = Array.from(selectedFiles);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };
  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    if (droppedFiles) {
      console.log(droppedFiles[0].size, "drop");
    }
    if (droppedFiles.length > 0) {
      const newFiles = Array.from(droppedFiles);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  useEffect(() => {
    onFilesSelected(files);
  }, [files, onFilesSelected]);

  return (
    <section className="drag-drop bg-[#FCFBFD] w-full h-[240px] flex justify-center  border-2 border-[#CEC4EB] border-dashed rounded-xl">
      <div
        className={`document-uploader  items-center justify-center flex flex-col gap-5 ${
          files.length > 0 ? "upload-box active" : "upload-box"
        }`}
        onDrop={handleDrop}
        onDragOver={(event) => event.preventDefault()}
      >
        <div className="upload-info flex flex-col gap-2 items-center">
          {/* <CloudUpload /> */}
          <FileUp stroke="#98A1BB" />
          <div className="flex flex-col text-[#7A8196] font-bold">
            <p>Drag and drop a PDF </p>
            <p>*Limit 25 MB per file.</p>
          </div>
        </div>
        <input
          type="file"
          hidden
          id="browse"
          onChange={handleFileChange}
          accept=".pdf,.docx,.pptx,.txt,.xlsx"
          multiple
        />
        <label
          htmlFor="browse"
          className="browse-btn border border-[#CEC4EB] py-2 px-3 bg-[#FCFBFD] shadow-md rounded-2xl w-[173px] text-[#6947BF] font-extrabold text-sm text-center"
        >
          Browse files
        </label>

        {files.length > 0 && (
          <div className="file-list">
            <div className="file-list__container">
              {files.map((file, index) => (
                <div className="file-item" key={index}>
                  <div className="file-info">
                    <p>{file.name}</p>
                    {/* <p>{file.type}</p> */}
                  </div>
                  <div className="file-actions">
                    <Button onClick={() => handleRemoveFile(index)}>
                      Remove File
                    </Button>{" "}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DragAnddrop;
