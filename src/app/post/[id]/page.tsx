import { BASE_ROUTE } from "@/config/constants";
import { ApiResponse } from "@/types/responseTypes";

async function getHomeFeed(page: number): Promise<ApiResponse> {
  const res = await fetch(`${BASE_ROUTE}/${page}`, {
    cache: "no-cache",
  });
  return res.json();
}

export default async function IndividualPost({
  params: { id },
}: {
  params: { id: number };
}) {
  const data = await getHomeFeed(id);

  const { body, title } = data;
  return (
    <div className="flex flex-col gap-y-2 items-center w-full">
      <div className="flex gap-y-2 py-2 px-4 border-2 border-gray-500 rounded-md cursor-pointer w-full">
        <div className="flex flex-col w-full text-gray-400">
          <div className="italic text-slate-300">{title}</div>
          {body}
        </div>
      </div>
    </div>
  );
}
