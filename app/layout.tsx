'use client';

import { Inter } from "next/font/google";
import "../app/globals.css"; // Pastikan path globals.css lo bener ya!
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

const menuItems = {
  Resources: [
    { label: "Documentation", href: "/docs" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
  ],
  Product: [
    { label: "Clean White", href: "/demo/clean-white" },
    { label: "Ocean Elegance", href: "/demo/ocean-elegance" },
    { label: "Rustic Earth", href: "/demo/rustic-earth" },
    { label: "Soft Peony", href: "/demo/Soft-Peony" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const menu = [
    { label: "Resources", type: "dropdown" as const },
    { label: "Product", type: "dropdown" as const },
    { label: "Preset", type: "link" as const, href: "/lp_katalog" },
    { label: "Pricing", type: "link" as const, href: "/#pricing" },
  ];

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setOpenDropdown(null), 150);
    setHoverTimeout(timeout);
  };

  const handleMouseEnter = (item: string) => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setOpenDropdown(item);
  };

  const handleMobileNavClick = () => setIsMobileOpen(false);

  return (
    <html lang="id">
      <body className={`${inter.className} bg-white text-slate-900`}>
        <nav className="relative z-50 w-full border-b border-white/10 bg-[#1E2121]">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-0">
            <Link href="/" className="text-xl font-black tracking-tight text-white">
              Radarai<span className="text-[#76220b]">Store.</span>
            </Link>

            <div className="hidden items-center gap-7 text-sm font-medium text-white/80 md:flex">
              {menu.map((item) => (
                <div key={item.label} className="relative">
                  {item.type === "dropdown" ? (
                    <div
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        type="button"
                        className="inline-flex cursor-pointer items-center gap-1 transition-colors hover:text-white"
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-3.5 w-3.5 transition-transform ${
                            openDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      {openDropdown === item.label && (
                        <div className="absolute left-0 top-full -mt-1 w-48 rounded-lg border border-[#e5e7eb] bg-white shadow-lg z-50">
                          {menuItems[item.label as keyof typeof menuItems]?.map((subitem, index) => (
                            <Link
                              key={subitem.href}
                              href={subitem.href}
                              className={`block px-4 py-2.5 text-sm text-[#5f6476] transition-colors hover:bg-[#f3f4f6] hover:text-[#151827] ${
                                index === 0 ? "rounded-t-lg" : ""
                              } ${
                                index ===
                                menuItems[item.label as keyof typeof menuItems].length - 1
                                  ? "rounded-b-lg"
                                  : ""
                              }`}
                            >
                              {subitem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="inline-flex cursor-pointer items-center gap-1 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="hidden items-center gap-2 md:flex">
              <Link
                href="/login"
                className="btn-3d inline-flex h-10 items-center rounded-lg border border-white/25 px-4 text-sm font-semibold text-white/90 transition-colors duration-200 ease-out hover:bg-white/10 [--btn-3d-border:rgba(255,255,255,0.35)]"
              >
                Log in
              </Link>
              <Link
                href="/lp_katalog"
                className="btn-3d inline-flex h-10 items-center rounded-lg bg-white px-4 text-sm font-semibold text-[#1E2121] transition-colors hover:bg-[#f2f2f2]"
              >
                Sign up
              </Link>
            </div>

            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={isMobileOpen}
              onClick={() => setIsMobileOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-white/20 text-white/90 transition hover:bg-white/10 md:hidden"
            >
              {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {isMobileOpen && (
            <div className="border-t border-white/10 bg-[#1E2121] md:hidden">
              <div className="space-y-5 px-4 pb-5 pt-4 text-sm text-white/85">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
                    Resources
                  </p>
                  <div className="space-y-2">
                    {menuItems.Resources.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={handleMobileNavClick}
                        className="block rounded-md px-2 py-2 transition-colors hover:bg-white/10"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
                    Product
                  </p>
                  <div className="space-y-2">
                    {menuItems.Product.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={handleMobileNavClick}
                        className="block rounded-md px-2 py-2 transition-colors hover:bg-white/10"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Link
                    href="/lp_katalog"
                    onClick={handleMobileNavClick}
                    className="block rounded-md px-2 py-2 transition-colors hover:bg-white/10"
                  >
                    Preset
                  </Link>
                  <Link
                    href="/#pricing"
                    onClick={handleMobileNavClick}
                    className="block rounded-md px-2 py-2 transition-colors hover:bg-white/10"
                  >
                    Pricing
                  </Link>
                </div>

                <div className="flex flex-col gap-2 pt-2">
                  <Link
                    href="/login"
                    onClick={handleMobileNavClick}
                    className="btn-3d inline-flex h-11 items-center justify-center rounded-lg border border-white/25 px-4 text-sm font-semibold text-white/90 transition-colors duration-200 ease-out hover:bg-white/10 [--btn-3d-border:rgba(255,255,255,0.35)]"
                  >
                    Log in
                  </Link>
                  <Link
                    href="/lp_katalog"
                    onClick={handleMobileNavClick}
                    className="btn-3d inline-flex h-11 items-center justify-center rounded-lg bg-white px-4 text-sm font-semibold text-[#1E2121] transition-colors hover:bg-[#f2f2f2]"
                  >
                    Sign up
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>

        <AnimatePresence mode="wait">
          <motion.main
            key={pathname}
            className="min-h-screen"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </body>
    </html>
  );
}