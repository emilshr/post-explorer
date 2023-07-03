import { BASE_ROUTE } from "@/config/constants";
import { ApiResponse } from "@/types/responseTypes";
import Link from "next/link";

async function getHomeFeed() {
  try {
    const response = await fetch(BASE_ROUTE, { method: "GET" });
    const data = await response.json();
    return data as ApiResponse[];
  } catch (error) {
    console.error(`Error while getting the home feed`);
    throw error;
  }
}

export default async function HomePage() {
  const homeFeed = await getHomeFeed();
  return (
    <div className="flex flex-col w-full">
      {homeFeed.map(({ id, title }) => {
        return (
          <div key={id} className="flex w-full justify-center">
            <Link href={`/post/${id}`}>
              <div className="flex flex-col  cursor-pointer hover:underline text-xl text-center w-full items-center">
                {title}
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
