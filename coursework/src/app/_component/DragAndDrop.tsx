"use client";
import React from "react";
import { FileUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DragAnddropProps {
  onFilesSelected: (file: File | null) => void;
  files: File | null;
}

const MAX_FILE_SIZE_MB = 25; // Maximum file size in MB
const DragAnddrop: React.FC<DragAnddropProps> = ({
  onFilesSelected,
  files,
}) => {
  const checkFileSize = (file: File) => {
    const fileSizeMB = file.size / (1024 * 1024); // Convert bytes to MB
    if (fileSizeMB > MAX_FILE_SIZE_MB) {
      alert(`File size exceeds the limit of ${MAX_FILE_SIZE_MB} MB.`);
      return false;
    }
    return true;
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    if (selectedFile) {
      if (
        selectedFile.type === "application/pdf" &&
        checkFileSize(selectedFile)
      ) {
        onFilesSelected(selectedFile);
      } else {
        alert("Please select a valid PDF file.");
      }
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      if (
        droppedFile.type === "application/pdf" &&
        checkFileSize(droppedFile)
      ) {
        onFilesSelected(droppedFile);
      } else {
        alert("Please drop a valid PDF file.");
      }
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
          accept=".pdf"
        />
        <label
          htmlFor="browse"
          className="browse-btn border border-[#CEC4EB] py-2 px-3 bg-[#FCFBFD] shadow-md rounded-2xl w-[173px] text-[#6947BF] font-extrabold text-sm text-center"
        >
          Browse files
        </label>

        {files && (
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
