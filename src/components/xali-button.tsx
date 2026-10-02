import type { ComponentProps } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const xaliButtonClass =
  "min-h-12 rounded-none border border-magenta bg-magenta px-8 font-body text-xs font-bold uppercase tracking-[0.16em] text-cream shadow-none transition-colors duration-300 hover:border-magenta-deep hover:bg-magenta-deep hover:text-cream";

export function XaliButton({ className, ...props }: ComponentProps<typeof Button>) {
  return <Button className={cn(xaliButtonClass, className)} {...props} />;
}