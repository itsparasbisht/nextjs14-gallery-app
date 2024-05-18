import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React from "react";
import { SimpleUploadButton } from "./simple-upload-button";

export function TopNav() {
  return (
    <nav className="flex items-center justify-between w-full p-4 text-xl font-semibold menu-bar-shadow">
      <div className="text-2xl">Gallery</div>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <div className="flex items-center gap-4">
            <SimpleUploadButton />
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}
