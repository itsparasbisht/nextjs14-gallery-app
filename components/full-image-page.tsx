import { getImage } from "@/server/queries";
import { clerkClient } from "@clerk/nextjs/server";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  const userInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="text-white h-full flex justify-between">
      <div className="flex justify-center items-center">
        <img src={image.url} className="" alt={image.name} />
      </div>
      <div className="p-2 border-l border-gray-500">
        <div className="text-2xl p-2 border-b border-gray-500">
          {image.name}
        </div>

        <div className=" p-2 border-b border-gray-500">
          <div className="text-lg">Uploaded By: {userInfo.fullName}</div>
        </div>

        <div className="p-2">
          <div className="text-lg">
            Uploaded On: {image.createdAt.toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  );
}
