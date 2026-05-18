import type { SupabaseClient } from "@supabase/supabase-js";

export type UserRole = "admin" | "customer";

export async function getUserRole(
  supabase: SupabaseClient,
  userId: string
): Promise<UserRole> {
  const { data, error } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", userId)
    .single();

  if (error || !data?.role) {
    return "customer";
  }

  return data.role === "admin" ? "admin" : "customer";
}
