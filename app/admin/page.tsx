"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseClient } from "@/lib/supabase/client";
import { getUserRole } from "@/lib/supabase/roles";

export default function AdminDashboardPage() {
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
      if (role !== "admin") {
        router.replace("/dashboard");
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
        Loading admin dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fff9f2] px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b4c3b]">
              Admin Dashboard
            </p>
            <h1 className="mt-2 text-3xl font-black text-[#1f1f28]">
              Control center
            </h1>
            <p className="mt-1 text-sm text-[#6b5a52]">{email}</p>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center rounded-full bg-[#1f1f28] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
          >
            Log out
          </button>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-[0_20px_60px_rgba(31,31,40,0.08)]">
            <h2 className="text-lg font-semibold text-[#1f1f28]">Orders</h2>
            <p className="mt-2 text-sm text-[#6b5a52]">
              Review latest orders and payment status.
            </p>
          </div>
          <div className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-[0_20px_60px_rgba(31,31,40,0.08)]">
            <h2 className="text-lg font-semibold text-[#1f1f28]">Customers</h2>
            <p className="mt-2 text-sm text-[#6b5a52]">
              Manage active accounts and roles.
            </p>
          </div>
          <div className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-[0_20px_60px_rgba(31,31,40,0.08)]">
            <h2 className="text-lg font-semibold text-[#1f1f28]">Templates</h2>
            <p className="mt-2 text-sm text-[#6b5a52]">
              Approve and update invitation templates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
