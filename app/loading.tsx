"use client";

import { usePathname } from "next/navigation";

export default function Loading() {
  const pathname = usePathname();

  if (pathname.startsWith("/img")) return null;

  return (
    <div className="w-screen h-[600px] text-lg text-gray-400 flex justify-center items-center">
      loading...
    </div>
  );
}
