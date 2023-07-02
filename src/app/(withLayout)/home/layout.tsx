import { PropsWithChildren } from "react";

export default function HomeLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="text-4xl font-bold text-center">Posts</div>
      {children}
    </div>
  );
}
