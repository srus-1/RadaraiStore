import React from "react";

type PembatasProps = {
  className?: string;
};

export default function Pembatas({ className = "" }: PembatasProps) {
  return (
    <div
      className={`mx-auto flex w-full max-w-4xl items-center justify-center gap-4 px-6 lg:px-8 ${className}`}
    >
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#e5e7eb] to-transparent" />
      <span className="h-2 w-2 rounded-[2px] border border-[#e5e7eb] bg-white" />
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[#e5e7eb] bg-white shadow-[0_6px_16px_rgba(17,19,29,0.06)]">
        <span className="inline-flex h-4 w-4 items-center justify-center rounded-md border border-[#e5e7eb] bg-[#f7f8fb]" />
      </span>
      <span className="h-2 w-2 rounded-[2px] border border-[#e5e7eb] bg-white" />
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#e5e7eb] to-transparent" />
    </div>
  );
}
