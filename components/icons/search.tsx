import { cn } from "@/lib/utils";

export function Search({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      className={cn(className)}
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="M21 21l-4.3-4.3"></path>
    </svg>
  );
}
