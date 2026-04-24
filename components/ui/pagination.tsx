// components/ui/pagination.tsx
import React from "react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
};

type PageItem = number | "dots";

function getPages(current: number, total: number): PageItem[] {
  const pages: PageItem[] = [];

  if (total <= 10) {
    for (let i = 1; i <= total; i++) pages.push(i);
    return pages;
  }

  const showAround = 2;

  const pushRange = (from: number, to: number) => {
    for (let i = from; i <= to; i++) {
      if (i >= 1 && i <= total) pages.push(i);
    }
  };

  // Toujours 1
  pages.push(1);

  // Début
  if (current <= 1 + showAround + 2) {
    pushRange(2, 1 + showAround * 2 + 2); // ex: 2..7
    pages.push("dots");
    pages.push(total - 1, total);
    return pages;
  }

  // Fin
  if (current >= total - (showAround + 2)) {
    pages.push("dots");
    pushRange(total - (showAround * 2 + 2), total);
    return pages;
  }

  // Milieu
  pages.push("dots");
  pushRange(current - showAround, current + showAround);
  pages.push("dots");
  pages.push(total - 1, total);

  return pages;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = getPages(currentPage, totalPages);

  const goTo = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    onPageChange(page);
  };

  return (
    <div
      className={
        className ??
        "mt-4 flex justify-center border-t bg-slate-50 dark:bg-slate-900 py-3"
      }
    >
      <nav className="inline-flex items-center gap-1 rounded-md border bg-white dark:bg-slate-950">
        {/* Précédent */}
        <button
          type="button"
          onClick={() => goTo(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-2 text-sm disabled:text-slate-300"
        >
          ‹
        </button>

        {pages.map((p, idx) =>
          p === "dots" ? (
            <span
              key={`dots-${idx}`}
              className="px-3 py-2 text-sm text-slate-400"
            >
              …
            </span>
          ) : (
            <button
              key={p}
              type="button"
              onClick={() => goTo(p)}
              className={`px-3 py-2 text-sm ${
                p === currentPage
                  ? "bg-blue-600 text-white"
                  : "text-blue-600 hover:bg-blue-50"
              }`}
            >
              {p}
            </button>
          ),
        )}

        {/* Suivant */}
        <button
          type="button"
          onClick={() => goTo(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-2 text-sm disabled:text-slate-300"
        >
          ›
        </button>
      </nav>
    </div>
  );
}
