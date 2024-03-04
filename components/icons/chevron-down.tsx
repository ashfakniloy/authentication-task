import { cn } from "@/lib/utils";

export function ChevronDown({ className }: { className?: string }) {
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
      <path d="M6 9l6 6 6-6"></path>
    </svg>
  );
}
