"use client";

import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";

export default function Navigator() {
  const { id } = useParams();
  const params = useSearchParams();

  console.log(params.values());

  const currentPage = Number(id) || 0;

  const isBrowser = () => typeof window !== "undefined";

  const scrollToTop = () => {
    if (isBrowser()) {
      document
        .getElementById("news-layout")
        ?.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-between  w-full">
      <div
        className="cursor-pointer"
        onClick={(event) => {
          event.stopPropagation();
          scrollToTop();
        }}
      >
        Top
      </div>
    </div>
  );
}
