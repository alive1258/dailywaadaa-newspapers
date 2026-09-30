/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Clock, Menu, Search } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import Logo from "../Logo/Logo";
import MobileMenuSheet from "../MobileMenuSheet/MobileMenuSheet";
import { MENU_ITEMS, SOCIAL_LINKS } from "./menuItems";

const socialIconMap = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  youtube: FaYoutube,
  x: FaXTwitter,
} as const;

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  /* reset menus on route change */
  useEffect(() => {
    setOpenDropdown(null);
    setIsOpen(false);
    setOpenSubmenu(null);
  }, [pathname]);

  /* scroll shadow */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* lock body scroll when mobile drawer open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 w-full z-50">
        {/* ── TOP UTILITY BAR ─────────────────────────────── */}
        <div className="hidden lg:block bg-brand-900 text-white/80">
          <div className="container flex items-center justify-between h-9 text-xs">
            <span className="flex items-center gap-2">
              <Clock size={13} className="text-brand-300" />
              {new Date().toLocaleDateString("en-GB", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>

            <div className="flex items-center gap-5">
              <Link href="/epaper" className="hover:text-white transition">
                E-Paper
              </Link>
              <Link href="/login" className="hover:text-white transition">
                Login
              </Link>
              <Link
                href="/subscribe"
                className="bg-accent-500 text-white px-3.5 py-1 rounded-full text-xs font-semibold hover:bg-accent-600 transition"
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>

        {/* ── MAIN NAVBAR ─────────────────────────────────── */}
        <div
          className={`bg-white border-b border-brand-900/10 transition ${
            isScrolled ? "shadow-sm" : ""
          }`}
        >
          <div className="container flex items-center justify-between h-16 gap-4">
            {/* Left: mobile hamburger + logo */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
                className="lg:hidden p-2 -ml-2 text-brand-900 hover:text-brand-600"
              >
                <Menu size={22} />
              </button>

              <Link href="/" onClick={() => setIsOpen(false)}>
                <Logo variant="dark" />
              </Link>
            </div>

            {/* Center: desktop category menu */}
            <nav className="hidden lg:flex items-center gap-6">
              {MENU_ITEMS.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                if (!item.children) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-sm font-medium transition ${
                        isActive
                          ? "text-brand-600"
                          : "text-brand-900 hover:text-brand-600"
                      }`}
                    >
                      {item.display}
                    </Link>
                  );
                }

                const isDropdownOpen = openDropdown === item.href;

                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.href)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpenDropdown(null)}
                      className={`flex items-center gap-1 text-sm font-medium transition ${
                        isActive
                          ? "text-brand-600"
                          : "text-brand-900 hover:text-brand-600"
                      }`}
                    >
                      {item.display}
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </Link>

                    <div
                      className={`absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-3 transition duration-200 ${
                        isDropdownOpen
                          ? "visible opacity-100"
                          : "invisible opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden rounded-xl border border-brand-900/10 bg-white py-2 shadow-xl">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-4 py-2.5 text-sm text-brand-900/80 transition hover:bg-brand-50 hover:text-brand-700"
                          >
                            {child.display}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </nav>

            {/* Right: search + socials */}
            <div className="flex items-center gap-3">
              <button
                aria-label="Search"
                className="p-2 text-brand-900 hover:text-brand-600 transition"
              >
                <Search size={18} />
              </button>

              <div className="hidden lg:flex items-center gap-2">
                {SOCIAL_LINKS?.map((s) => {
                  const Icon = socialIconMap[s.icon];
                  return (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      className="w-8 h-8 flex items-center justify-center rounded-full text-brand-900/70 hover:bg-brand-50 hover:text-brand-600 transition"
                    >
                      <Icon size={14} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <MobileMenuSheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        openSubmenu={openSubmenu}
        onToggleSubmenu={(href) =>
          setOpenSubmenu((prev) => (prev === href ? null : href))
        }
      />

      {/* Spacer to offset the fixed header on desktop */}
      <div className="hidden lg:block lg:h-[100px]" />
    </>
  );
};

export default Navbar;
