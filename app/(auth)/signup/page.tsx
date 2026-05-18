"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { getSupabaseClient } from "@/lib/supabase/client";
import { getUserRole } from "@/lib/supabase/roles";

export default function SignupPage() {
	const router = useRouter();
	const supabase = getSupabaseClient();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [info, setInfo] = useState<string | null>(null);

	const handleSignup = async (event: React.FormEvent) => {
		event.preventDefault();
		setLoading(true);
		setError(null);
		setInfo(null);

		const { data, error: signUpError } = await supabase.auth.signUp({
			email,
			password,
		});

		if (signUpError || !data.user) {
			setError(signUpError?.message ?? "Sign up failed.");
			setLoading(false);
			return;
		}

		if (!data.session) {
			setInfo("Check your email to confirm your account.");
			setLoading(false);
			return;
		}

		const role = await getUserRole(supabase, data.user.id);
		router.replace(role === "admin" ? "/admin" : "/dashboard");
	};

	const handleOAuth = async (provider: "google" | "facebook") => {
		setLoading(true);
		setError(null);
		setInfo(null);

		const { error: oauthError } = await supabase.auth.signInWithOAuth({
			provider,
			options: {
				redirectTo: `${window.location.origin}/auth/callback`,
			},
		});

		if (oauthError) {
			setError(oauthError.message);
			setLoading(false);
		}
	};

	return (
		<div className="relative min-h-screen overflow-hidden bg-[#f5efe8] px-6 py-14">
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.7),_rgba(245,239,232,0.9))]" />
			<div className="relative mx-auto w-full max-w-md">
				<h1 className="text-3xl font-black text-[#1f1f28]">Create account</h1>

				<div className="mt-6 space-y-3">
					<button
						type="button"
						onClick={() => handleOAuth("google")}
						className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/70 bg-white/80 px-4 py-3 text-sm font-semibold text-[#1f1f28] shadow-[0_10px_25px_rgba(31,31,40,0.08)]"
						disabled={loading}
					>
						<FcGoogle className="h-5 w-5" />
						Continue with Google
					</button>
					<button
						type="button"
						onClick={() => handleOAuth("facebook")}
						className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#1877f2] px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(24,119,242,0.3)]"
						disabled={loading}
					>
						<FaFacebookF className="h-4 w-4" />
						Continue with Facebook
					</button>
				</div>

				<div className="my-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#8b7b73]">
					<span className="h-px flex-1 bg-[#c9bfb6]/70" />
					OR
					<span className="h-px flex-1 bg-[#c9bfb6]/70" />
				</div>

				<form onSubmit={handleSignup} className="space-y-5">
					<div className="space-y-2">
						<label className="text-sm font-semibold text-[#1f1f28]">Email</label>
						<input
							type="email"
							name="email"
							placeholder="you@example.com"
							value={email}
							onChange={(event) => setEmail(event.target.value)}
							className="w-full rounded-2xl border border-white/80 bg-white/80 px-4 py-3 text-sm text-[#2a2a32] shadow-[0_6px_18px_rgba(31,31,40,0.06)] outline-none focus:border-[#1f1f28]/30"
							required
						/>
					</div>

					<div className="space-y-2">
						<div className="flex items-center justify-between">
							<label className="text-sm font-semibold text-[#1f1f28]">
								Password
							</label>
							<button
								type="button"
								onClick={() => setShowPassword((prev) => !prev)}
								className="text-xs font-semibold text-[#3a3a44]"
							>
								{showPassword ? "Hide" : "Show"}
							</button>
						</div>
						<input
							type={showPassword ? "text" : "password"}
							name="password"
							placeholder="8+ characters"
							value={password}
							onChange={(event) => setPassword(event.target.value)}
							className="w-full rounded-2xl border border-white/80 bg-white/80 px-4 py-3 text-sm text-[#2a2a32] shadow-[0_6px_18px_rgba(31,31,40,0.06)] outline-none focus:border-[#1f1f28]/30"
							required
						/>
					</div>

					{error ? (
						<p className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-700">
							{error}
						</p>
					) : null}
					{info ? (
						<p className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">
							{info}
						</p>
					) : null}

					<button
						type="submit"
						disabled={loading}
						className="flex w-full items-center justify-center rounded-full bg-[#121728] px-6 py-4 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(18,23,40,0.35)] transition hover:-translate-y-0.5"
					>
						{loading ? "Creating account..." : "Create account"}
					</button>
				</form>

				<p className="mt-6 text-center text-xs text-[#6b5a52]">
					Already have an account?{" "}
					<Link href="/login" className="font-semibold text-[#1f1f28]">
						Log in
					</Link>
				</p>
			</div>
		</div>
	);
}
