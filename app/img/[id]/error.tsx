"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2 className="w-screen h-[600px] text-lg text-gray-400 flex justify-center items-center">
        Something went wrong!
      </h2>
    </div>
  );
}
