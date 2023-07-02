import Navigator from "./navigator";
import { PropsWithChildren } from "react";

export default function PostLayout({ children }: PropsWithChildren) {
  console.log("Post layout");
  return (
    <div className="flex flex-col h-screen">
      <div
        className="flex flex-col overflow-y-auto h-full md:p-8 p-4"
        id="news-layout"
      >
        {children}
      </div>
      <div className="flex bg-slate-500 md:px-4 px-2 md:py-2 py-1">
        <Navigator />
      </div>
    </div>
  );
}
