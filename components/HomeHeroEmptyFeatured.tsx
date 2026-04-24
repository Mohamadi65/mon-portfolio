"use client";

import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  text?: string;
};

export default function HomeHeroEmptyFeatured({
  className,
  text = "No news Yet",
}: Props) {
  return (
    <div
      className={cn(
        "h-full min-h-[360px] rounded-sm border border-slate-200 bg-white shadow",
        "dark:border-slate-800 dark:bg-slate-950",
        className,
      )}
    >
      <div className="flex h-full items-center justify-center p-6">
        <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
          {text}
        </p>
      </div>
    </div>
  );
}
