"use client";

import { FileText, Loader2 } from "lucide-react";

export default function PdfLoadingScreen({
  title = "Génération du PDF",
  subtitle = "On prépare le document…",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="min-h-[60vh] grid place-items-center">
      <div className="w-full max-w-md rounded-2xl border bg-background shadow-sm p-6">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl border bg-muted flex items-center justify-center">
            <FileText className="h-6 w-6" />
          </div>

          <div className="flex-1">
            <div className="text-lg font-semibold">{title}</div>
            <div className="text-sm text-muted-foreground">{subtitle}</div>
          </div>

          <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
        </div>

        <div className="mt-5">
          <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
            <div className="h-full w-1/2 animate-[progress_1.2s_ease-in-out_infinite] rounded-full bg-amber-600" />
          </div>
        </div>

        <style jsx>{`
          @keyframes progress {
            0% {
              transform: translateX(-60%);
            }
            50% {
              transform: translateX(40%);
            }
            100% {
              transform: translateX(140%);
            }
          }
        `}</style>
      </div>
    </div>
  );
}
