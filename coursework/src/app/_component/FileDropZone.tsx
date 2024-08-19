import React, { useCallback, useRef } from "react";
import { useDropzone } from "react-dropzone";
import { useDrop } from "react-dnd";

// Define an interface for the item
interface DropItem {
  files: File[];
}

const FileDropZone: React.FC<{ onDrop: (files: File[]) => void }> = ({ onDrop }) => {
  const [{ isOver }, drop] = useDrop({
    accept: "FILE",
    drop: (item: DropItem) => {
      const files = item.files;
      onDrop(files);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const onFileDrop = useCallback(
    (acceptedFiles: File[]) => {
      onDrop(acceptedFiles);
    },
    [onDrop]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onFileDrop,
    noClick: true,
  });

  const dropRef = useRef<HTMLDivElement>(null);

  // Attach drop to the dropRef current
  React.useEffect(() => {
    if (dropRef.current) {
      drop(dropRef.current);
    }
  }, [drop]);

  const handleBrowseClick = () => {
    const fileInput = document.querySelector("input[type='file']") as HTMLInputElement;
    fileInput?.click();
  };

  return (
    <div
      {...getRootProps()}
      ref={dropRef}
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
        <p>Drag and drop some files here, or click to select files</p>
      )}
      <button
        type="button"
        onClick={handleBrowseClick}
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
