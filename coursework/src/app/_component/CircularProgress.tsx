import React from "react";

export default function CircularProgress({
  val,
  type,
  height,
  width,
}: {
  val: number;
  type: string;
  height: string;
  width: string;
}) {
  let percentage = type === "overall" ? (val / 20) * 100 : (val / 10) * 100;
  const dashOffset = 100 - percentage;

  return (
    <div
      style={{ height: `${height}px`, width: `${width}px` }}
      className="relative"
    >
      <svg
        className="w-full h-full -rotate-90"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="stroke-current text-gray-200 dark:text-neutral-700"
          strokeWidth="2"
        ></circle>
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className={`stroke-current ${
            val >= 7
              ? "text-green-400"
              : val <= 3
              ? "text-red-400"
              : "text-yellow-400"
          } dark:text-blue-500`}
          strokeWidth="3"
          strokeDasharray="100"
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
        ></circle>
      </svg>
      <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <span
          className={`text-center font-bold text-black ${
            height <= "60" ? "text-sm" : "text-2xl"
          }`}
        >
          {type == "overall" ? `${val}/20` : `${val}/10`}
        </span>
      </div>
    </div>
  );
}
