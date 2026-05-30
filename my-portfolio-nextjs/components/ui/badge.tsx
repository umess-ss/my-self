import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={cn("resume-tag inline-flex max-w-full rounded-full px-3 py-1 text-xs font-medium", className)} {...props}>
      {children}
    </span>
  );
}
