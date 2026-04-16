import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps = {
  title?: string;
  description?: string;
  className?: string;
  children?: ReactNode;
};

export function Card({ title, description, className, children }: CardProps) {
  return (
    <article
      className={cn(
        "rounded-3xl border border-white/70 bg-white/85 p-6 shadow-[0_20px_65px_-40px_rgba(15,23,42,0.65)] backdrop-blur",
        className,
      )}
    >
      {title ? <h3 className="text-lg font-bold tracking-tight text-slate-900">{title}</h3> : null}
      {description ? <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p> : null}
      {children ? <div className={cn(title || description ? "mt-5" : undefined)}>{children}</div> : null}
    </article>
  );
}
