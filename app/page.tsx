import { getMyImages } from "@/server/queries";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  if (images.length === 0) {
    return (
      <p className="w-screen h-[600px] text-lg text-gray-400 flex justify-center items-center">
        Start uploading your images
      </p>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {images.map((image) => (
        <div key={image.id} className="flex flex-col items-center">
          <div className="relative w-[42vw] h-[42vw] md:w-56 md:h-56">
            <Link href={`/img/${image.id}`}>
              <Image
                src={image.url}
                alt={image.name}
                layout="fill"
                objectFit="cover"
                className="rounded-sm border"
              />
            </Link>
          </div>
          <div className="w-[42vw] md:w-56 truncate text-center">
            {image.name}
          </div>
        </div>
      ))}
    </div>
  );
}

export default async function Home() {
  return (
    <main>
      <SignedOut>
        <div className="w-screen h-[600px] text-lg text-gray-400 flex justify-center items-center">
          Please sign in
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
