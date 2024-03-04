import { cn } from "@/lib/utils";

export function Spinner({ className }: { className?: string }) {
  return (
    <>
      <span
        role="status"
        className={cn(
          "inline-block size-6 animate-spin rounded-full border-4 border-solid border-gray-100 border-r-gray-100/30 border-b-gray-100/30",
          className
        )}
      ></span>
      <span className="sr-only">Loading...</span>
    </>
  );
}

export function PageSpinner({ className }: { className?: string }) {
  return (
    <div className="h-screen flex justify-center items-center">
      <span
        role="status"
        className={cn(
          "inline-block size-20 animate-spin rounded-full border-[6px] border-solid border-custom-blue border-r-custom-blue/30 border-b-custom-blue/30",
          className
        )}
      ></span>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
