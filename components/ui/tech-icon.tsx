import { cn } from "@/lib/cn";
import type { TechnologyIcon as TechnologyIconName } from "@/types/site-content";

type TechnologyIconProps = {
  name: TechnologyIconName;
  className?: string;
};

const baseSvgClass = "h-5 w-5";

export function TechnologyIcon({ name, className }: TechnologyIconProps) {
  switch (name) {
    case "nextjs":
      return (
        <svg viewBox="0 0 24 24" className={cn(baseSvgClass, className)} fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="11" fill="currentColor" className="text-slate-900" />
          <path d="M8 16V8L16 16V8" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "react":
      return (
        <svg viewBox="0 0 24 24" className={cn(baseSvgClass, className)} fill="none" aria-hidden="true">
          <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="currentColor" strokeWidth="1.8" className="text-sky-500" />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.5"
            transform="rotate(60 12 12)"
            stroke="currentColor"
            strokeWidth="1.8"
            className="text-sky-500"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.5"
            transform="rotate(120 12 12)"
            stroke="currentColor"
            strokeWidth="1.8"
            className="text-sky-500"
          />
          <circle cx="12" cy="12" r="2" fill="currentColor" className="text-sky-500" />
        </svg>
      );
    case "typescript":
      return (
        <svg viewBox="0 0 24 24" className={cn(baseSvgClass, className)} fill="none" aria-hidden="true">
          <rect x="2.5" y="2.5" width="19" height="19" rx="3" fill="currentColor" className="text-blue-600" />
          <path d="M7.2 8.3h9.6M11 8.3v7.4" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M14.2 12.7c.4-.4 1-.6 1.6-.6.9 0 1.7.5 1.7 1.3 0 2-3.3 1-3.3 3 0 .9.8 1.5 1.9 1.5.7 0 1.4-.2 2-.7" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "tailwind":
      return (
        <svg viewBox="0 0 24 24" className={cn(baseSvgClass, className)} fill="none" aria-hidden="true">
          <path
            d="M6 9.5c1.2-2 2.6-2.8 4.3-2.5 1 .2 1.8.9 2.7 1.7 1.4 1.2 3 2.6 5 2.3 1.4-.2 2.6-1 3.5-2.5-1.1 2.9-2.6 4.4-4.6 4.7-1.4.2-2.5-.3-3.6-1.2-1.2-1-2.3-1.9-3.8-1.6-1 .2-2 .8-3 2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            className="text-cyan-500"
          />
          <path
            d="M2 14.5c1.2-2 2.6-2.8 4.3-2.5 1 .2 1.8.9 2.7 1.7 1.4 1.2 3 2.6 5 2.3 1.4-.2 2.6-1 3.5-2.5-1.1 2.9-2.6 4.4-4.6 4.7-1.4.2-2.5-.3-3.6-1.2-1.2-1-2.3-1.9-3.8-1.6-1 .2-2 .8-3 2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            className="text-cyan-500"
          />
        </svg>
      );
    case "redux":
      return (
        <svg viewBox="0 0 24 24" className={cn(baseSvgClass, className)} fill="none" aria-hidden="true">
          <path d="M5.5 14.5c1.7 2.5 4.6 3.8 8 3.8 3.2 0 4.8-1.4 4.8-3.1 0-1.6-1.1-2.7-3.2-3.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-violet-600" />
          <path d="M8.5 10.8c1.1-2.8 3.7-4.8 6.9-4.8 1.5 0 2.6.5 3.3 1.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-violet-600" />
          <circle cx="6" cy="14.7" r="1.4" fill="currentColor" className="text-violet-600" />
          <circle cx="8.4" cy="9.9" r="1.4" fill="currentColor" className="text-violet-600" />
          <circle cx="18.3" cy="8.2" r="1.4" fill="currentColor" className="text-violet-600" />
        </svg>
      );
    case "nodejs":
      return (
        <svg viewBox="0 0 24 24" className={cn(baseSvgClass, className)} fill="none" aria-hidden="true">
          <path d="M12 2.8 4.5 7v10L12 21.2 19.5 17V7L12 2.8Z" fill="currentColor" className="text-green-600" />
          <path d="M8.8 8.5v7l1.8 1V11h2.8v4.5l1.8-1v-6Z" fill="white" />
        </svg>
      );
    case "java":
      return (
        <svg viewBox="0 0 24 24" className={cn(baseSvgClass, className)} fill="none" aria-hidden="true">
          <path d="M7.8 16.8c.6.8 1.6 1.3 3.1 1.3 1.3 0 2.4-.4 3.3-1.1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" className="text-orange-600" />
          <path d="M12 5.2c1.8 2.3 1.8 4 0 5.4M9.7 6.4c1.2 1.7 1.2 2.9 0 4M14.3 6.4c1.2 1.7 1.2 2.9 0 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="text-orange-600" />
          <path d="M6.6 13.6h10.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="text-orange-600" />
        </svg>
      );
    case "mysql":
      return (
        <svg viewBox="0 0 24 24" className={cn(baseSvgClass, className)} fill="none" aria-hidden="true">
          <ellipse cx="12" cy="6.8" rx="6.8" ry="3.2" fill="currentColor" className="text-blue-600" />
          <path d="M5.2 6.8v8c0 1.8 3 3.2 6.8 3.2s6.8-1.4 6.8-3.2v-8" stroke="currentColor" strokeWidth="1.8" className="text-blue-600" />
          <path d="M5.2 10.8c0 1.8 3 3.2 6.8 3.2s6.8-1.4 6.8-3.2" stroke="white" strokeWidth="1.1" />
        </svg>
      );
    case "github-actions":
      return (
        <svg viewBox="0 0 24 24" className={cn(baseSvgClass, className)} fill="none" aria-hidden="true">
          <path d="M12 2.8 4 7.3v9.4l8 4.5 8-4.5V7.3l-8-4.5Z" fill="currentColor" className="text-indigo-600" />
          <path d="M8.5 13.7 11 11.2l1.8 1.8 3.2-3.2" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
}
