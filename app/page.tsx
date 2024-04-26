import { db } from "@/server/db";

const mockImages = [
  {
    id: 1,
    url: "https://utfs.io/f/ab3e4e6b-9d89-4200-85b4-39c06a5136e9-ym54qo.jpg",
  },
  {
    id: 2,
    url: "https://utfs.io/f/6c34764c-5a9b-45a8-84f9-9906ade55596-7c32st.at_by_ladyvenom_south_tyrol-231.jpg",
  },
  {
    id: 3,
    url: "https://utfs.io/f/341d1fbe-16ea-4f79-ae43-f5276150faa2-43ftnp.jpeg",
  },
  {
    id: 4,
    url: "https://utfs.io/f/15f712bb-0f42-4f3c-bb48-5ca29f276155-258xty.jpg",
  },
];

export default async function Home() {
  const users = await db.query.user.findMany();

  console.log(users);

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
