"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function Navigator() {
  const { id } = useParams();

  const currentPage = Number(id);

  console.log({ id, currentPage });

  return (
    <div className="flex justify-between  w-full">
      <Link href="/home">Home</Link>
      <div className="flex justify-end  gap-x-2">
        <Link href={`/post/${currentPage - 1}`}>Prev</Link>
        <Link href={`/post/${currentPage + 1}`}>next</Link>
      </div>
    </div>
  );
}
