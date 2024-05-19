import DeleteButton from "@/app/_components/delete-button";
import { deleteImage, getImage } from "@/server/queries";

type FullPageImageViewProps = { id: number; intercepted?: boolean };

export default async function FullPageImageView({
  id,
  intercepted,
}: FullPageImageViewProps) {
  const image = await getImage(id);

  return (
    <div className={`${intercepted ? "text-white" : "text-black"} h-full`}>
      <div className="w-screen pt-5 px-4 flex justify-between">
        <p className="text-lg">
          {image.name} | Uploaded On: {image.createdAt.toLocaleDateString()}
        </p>

        <div>
          <form
            action={async () => {
              "use server";
              await deleteImage(id);
            }}
          >
            <DeleteButton intercepted={intercepted} />
          </form>
        </div>
      </div>

      <div className="flex justify-center items-center pt-5">
        <img src={image.url} alt={image.name} />
      </div>
    </div>
  );
}
