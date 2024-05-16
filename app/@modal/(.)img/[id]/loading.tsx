"use client";

import { useState } from "react";
import LoadingBar from "react-top-loading-bar";

export default function Loading() {
  const [progress, setProgress] = useState(10);

  setInterval(() => {
    setProgress((prev) => prev + 15);
  }, 1000);

  return <LoadingBar color="#f11946" height={4} progress={progress} />;
}
