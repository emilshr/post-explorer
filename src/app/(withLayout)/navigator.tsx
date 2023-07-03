"use client";

export default function Navigator() {
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
