"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getSupabaseClient } from "@/lib/supabase/client";
import { getUserRole } from "@/lib/supabase/roles";

export default function CustomerDashboardPage() {
  const router = useRouter();
  const supabase = getSupabaseClient();
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase.auth.getUser();
      const user = data.user;

      if (!user) {
        router.replace("/login");
        return;
      }

      const role = await getUserRole(supabase, user.id);
      if (role === "admin") {
        router.replace("/admin");
        return;
      }

      setEmail(user.email ?? "");
      setLoading(false);
    };

    void load();
  }, [router, supabase]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace("/login");
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fff9f2] text-sm text-slate-600">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fff9f2] px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9b7d6b]">
              Customer Dashboard
            </p>
            <h1 className="mt-2 text-3xl font-black text-[#1f1f28]">
              Welcome back
            </h1>
            <p className="mt-1 text-sm text-[#6b5a52]">{email}</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/lp_katalog"
              className="inline-flex items-center rounded-full border border-[#1f1f28]/10 bg-white px-5 py-2 text-sm font-semibold text-[#1f1f28] shadow-sm transition hover:-translate-y-0.5"
            >
              Browse Presets
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center rounded-full bg-[#1f1f28] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
            >
              Log out
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-[0_20px_60px_rgba(31,31,40,0.08)]">
            <h2 className="text-lg font-semibold text-[#1f1f28]">
              Your invitations
            </h2>
            <p className="mt-2 text-sm text-[#6b5a52]">
              Manage all invitations, track RSVP, and customize your templates.
            </p>
            <button
              type="button"
              className="mt-4 inline-flex items-center rounded-full bg-[#1f1f28] px-4 py-2 text-sm font-semibold text-white"
            >
              Create invitation
            </button>
          </div>

          <div className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-[0_20px_60px_rgba(31,31,40,0.08)]">
            <h2 className="text-lg font-semibold text-[#1f1f28]">Support</h2>
            <p className="mt-2 text-sm text-[#6b5a52]">
              Need help? Chat with support or check the knowledge base.
            </p>
            <button
              type="button"
              className="mt-4 inline-flex items-center rounded-full border border-[#1f1f28]/15 px-4 py-2 text-sm font-semibold text-[#1f1f28]"
            >
              Contact support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
