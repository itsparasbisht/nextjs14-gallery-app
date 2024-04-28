import { getMyImages } from "@/server/queries";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex flex-col items-center">
          <div className="w-56 h-36 relative">
            <Image
              src={image.url}
              alt={image.name}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function Home() {
  return (
    <main>
      <SignedOut>
        <div className="text-center">Please sign in</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
