import { getMyImages } from "@/server/queries";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id} className="w-48">
          <img src={image.url} />
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
