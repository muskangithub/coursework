"use client";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { DndProvider, useDrag, useDrop } from "react-dnd";

const FileDropZone = ({ onDrop }: any) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: "FILE",
    drop: (item, monitor) => {
      const files = monitor.getItem().files;
      onDrop(files);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const onFileDrop = useCallback(
    (acceptedFiles: any) => {
      onDrop(acceptedFiles);
    },
    [onDrop]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onFileDrop,
    noClick: true,
  });

  return (
    <div
      {...getRootProps()}
      ref={drop}
      style={{
        border: "2px dashed #007bff",
        padding: "20px",
        textAlign: "center",
        backgroundColor: isOver ? "#e6f7ff" : "white",
        borderRadius: "4px",
      }}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
      <button
        type="button"
        onClick={() => document.querySelector("input[type='file']").click()}
        style={{
          marginTop: "10px",
          padding: "8px 16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Browse Files
      </button>
    </div>
  );
};

export default FileDropZone;
