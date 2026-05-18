"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseClient } from "@/lib/supabase/client";
import { getUserRole } from "@/lib/supabase/roles";

export default function AuthCallbackPage() {
  const router = useRouter();
  useEffect(() => {
    const finalize = async () => {
      const supabase = getSupabaseClient();
      const { data, error } = await supabase.auth.getSession();

      if (error || !data.session?.user) {
        router.replace("/login?error=oauth");
        return;
      }

      const role = await getUserRole(supabase, data.session.user.id);
      router.replace(role === "admin" ? "/admin" : "/dashboard");
    };

    void finalize();
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f5efe8] text-sm text-slate-700">
      Finishing sign in...
    </div>
  );
}
