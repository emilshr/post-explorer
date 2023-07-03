"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center gap-y-2">
      <div className="flex">Error</div>
      <div className="flex font-mono bg-slate-600 p-4 rounded-md">
        {error.stack}
      </div>
    </div>
  );
}
