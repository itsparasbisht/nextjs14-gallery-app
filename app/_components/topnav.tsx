"use client";

import { UploadButton } from "@/utils/uploadthing";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";

export function TopNav() {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between w-full p-4 text-xl font-semibold border-b border-gray-500">
      <div className="text-2xl">Gallery</div>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <div className="flex items-start gap-4">
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={() => {
                router.refresh();
              }}
            />
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}
