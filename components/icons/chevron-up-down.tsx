import { cn } from "@/lib/utils";

export function ChevronUpDown({ className }: { className?: string }) {
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
      <path d="M7 15l5 5 5-5M7 9l5-5 5 5"></path>
    </svg>
  );
}
