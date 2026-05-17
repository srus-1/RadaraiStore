"use client";

import Link from "next/link";
import {
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";

const footerColumns = [
  {
    title: "Care Plans",
    links: ["Sexual Health", "Weight Loss", "Travel Kit"],
  },
  {
    title: "About",
    links: ["Providers", "About Us"],
  },
  {
    title: "Support",
    links: ["FAQs", "Contact Us"],
  },
];

const socialLinks = [
  { label: "WhatsApp", icon: <FaWhatsapp />, href: "/" },
  { label: "Instagram", icon: <FaInstagram />, href: "/" },
  { label: "YouTube", icon: <FaYoutube />, href: "/" },
  { label: "TikTok", icon: <FaTiktok />, href: "/" },
];

export default function Footer() {
  const handleHomeClick = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[#202020] text-[#b0b0b0]">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-3 lg:max-w-[1600px] lg:px-4">
        <div className="mx-auto flex min-h-[280px] max-w-3xl flex-col items-center justify-center text-center text-white sm:min-h-[320px]">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Ready to take control
            <br className="hidden sm:block" />
            of your health?
          </h2>
          <p className="mt-4 text-sm text-white/70 sm:text-base">
            Get expert care for weight loss, sexual health, wellness, and more
            all from the comfort of home.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#hero"
              className="cursor-pointer rounded-full bg-[#2f6fed] px-5 py-2 text-xs font-semibold text-white shadow-[0_10px_20px_rgba(47,111,237,0.35)] transition hover:bg-[#285fd0]"
            >
              Start Now
            </Link>
            <Link
              href="#hero"
              className="cursor-pointer rounded-full border border-white/70 bg-white/10 px-5 py-2 text-xs font-semibold text-white transition hover:bg-white/20"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="mt-0 rounded-[28px] bg-white px-9 py-9 text-[#1f2430] shadow-[0_18px_40px_rgba(15,23,42,0.18)] sm:px-9">
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-5">
              <Link
                href="/"
                scroll
                onClick={handleHomeClick}
                className="text-xl font-black tracking-tight text-[#111827]"
              >
                Radarai<span className="text-[#5f58f6]">Store.</span>
              </Link>
              <p className="text-sm text-[#6b7280]">
                Sign up to receive health tips.
              </p>
              <form
                className="max-w-xs space-y-3"
                onSubmit={(event) => event.preventDefault()}
              >
                <div className="flex items-center gap-2 rounded-full border border-[#e5e7eb] bg-white px-3 py-1.5">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent text-sm text-[#111827] placeholder:text-[#9aa0ad] focus:outline-none"
                  />
                  <Link
                    href="#hero"
                    className="cursor-pointer rounded-full bg-[#111827] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#1f2937]"
                  >
                    Submit
                  </Link>
                </div>
              </form>
              <p className="text-xs text-[#9aa0ad]">
                By subscribing, you agree to our Privacy Policy and provide
                consent to receive updates from our company.
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    scroll
                    onClick={handleHomeClick}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#e5e7eb] text-[#4b5563] transition-colors hover:border-[#c7cdd8] hover:text-[#111827]"
                    aria-label={item.label}
                  >
                    <span className="text-base">{item.icon}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <h4 className="text-sm font-semibold text-[#111827]">
                    {column.title}
                  </h4>
                  <ul className="mt-4 space-y-3 text-sm">
                    {column.links.map((link) => (
                      <li key={link}>
                        <Link
                          href="/"
                          scroll
                          onClick={handleHomeClick}
                          className="text-[#4b5563] transition-colors hover:text-[#111827]"
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>

          <div className="mt-3 flex flex-col items-center justify-between gap-3 border-t border-[#e5e7eb] pt-2 text-sm text-[#6b7280] sm:flex-row">
            <p>Copyright © 2026 Radarai Inc. All rights reserved.</p>
            <div className="hidden flex-wrap items-center gap-4 sm:flex">
              <Link
                href="/"
                scroll
                onClick={handleHomeClick}
                className="text-[#6b7280] transition-colors hover:text-[#111827]"
              >
                Terms of Service
              </Link>
              <span className="text-[#d1d5db]">|</span>
              <Link
                href="/"
                scroll
                onClick={handleHomeClick}
                className="text-[#6b7280] transition-colors hover:text-[#111827]"
              >
                Legal Terms
              </Link>
              <span className="text-[#d1d5db]">|</span>
              <Link
                href="/"
                scroll
                onClick={handleHomeClick}
                className="text-[#6b7280] transition-colors hover:text-[#111827]"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}