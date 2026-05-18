"use client";

import { useState } from "react";
import Link from "next/link";
import { getSupabaseClient } from "@/lib/supabase/client";

export default function ResetPasswordPage() {
  const supabase = getSupabaseClient();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleReset = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setStatus(null);

    const { error: resetError } = await supabase.auth.resetPasswordForEmail(
      email,
      {
        redirectTo: `${window.location.origin}/reset-password/confirm`,
      }
    );

    if (resetError) {
      setError(resetError.message);
      setLoading(false);
      return;
    }

    setStatus("Check your email for the reset link.");
    setLoading(false);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f5efe8] px-6 py-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.7),_rgba(245,239,232,0.9))]" />
      <div className="relative mx-auto w-full max-w-md">
        <h1 className="text-3xl font-black text-[#1f1f28]">Reset password</h1>
        <p className="mt-2 text-sm text-[#6b5a52]">
          Enter your email and we will send you a reset link.
        </p>

        <form onSubmit={handleReset} className="mt-6 space-y-4">
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-2xl border border-white/80 bg-white/80 px-4 py-3 text-sm text-[#2a2a32] shadow-[0_6px_18px_rgba(31,31,40,0.06)] outline-none focus:border-[#1f1f28]/30"
            required
          />

          {error ? (
            <p className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-700">
              {error}
            </p>
          ) : null}
          {status ? (
            <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">
              {status}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center rounded-full bg-[#121728] px-6 py-4 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(18,23,40,0.35)] transition hover:-translate-y-0.5"
          >
            {loading ? "Sending..." : "Send reset link"}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-[#6b5a52]">
          <Link href="/login" className="font-semibold text-[#1f1f28]">
            Back to log in
          </Link>
        </p>
      </div>
    </div>
  );
}
