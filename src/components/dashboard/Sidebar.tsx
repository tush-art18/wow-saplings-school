"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import {
  LayoutDashboard,
  Users,
  Image as ImageIcon,
  MessageSquare,
  Settings,
  LogOut
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "Leads / Inquiries", href: "/dashboard/leads", icon: Users },
    { name: "Gallery", href: "/dashboard/gallery", icon: ImageIcon },
    { name: "Testimonials", href: "/dashboard/testimonials", icon: MessageSquare },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/logout", { method: "POST" });
      if (res.ok) {
        router.push("/dashboard/login");
        router.refresh();
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <aside className="w-64 bg-primary-dark text-white flex flex-col h-screen fixed left-0 top-0 z-30 shadow-2xl border-r border-white/5">
      {/* Brand Header */}
      <div className="p-6 border-b border-white/10 flex items-center gap-3">
        <div className="bg-white p-1.5 rounded-xl shadow-md flex items-center justify-center">
          <Image src="/sapling-logo-0003.png" alt="WOW Saplings" width={32} height={32} className="object-contain" />
        </div>
        <div>
          <h1 className="font-heading font-black text-lg tracking-wide leading-none">
            WOW Saplings
          </h1>
          <span className="text-[10px] text-white/50 font-bold tracking-widest uppercase">
            Admin Panel
          </span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3.5 px-4 py-3 rounded-2xl text-sm font-bold transition-all duration-200 group relative ${
                isActive
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon
                size={18}
                className={`transition-transform duration-200 group-hover:scale-110 ${
                  isActive ? "text-accent-yellow" : "text-white/40 group-hover:text-white/70"
                }`}
              />
              {item.name}
              
              {isActive && (
                <div className="absolute right-3 w-1.5 h-1.5 rounded-full bg-accent-yellow shadow-glow" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Logout Footer */}
      <div className="p-4 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-4 py-3 rounded-2xl text-sm font-bold text-white/60 hover:text-white hover:bg-red-500/10 hover:text-red-300 transition-all duration-200"
        >
          <LogOut size={18} className="text-white/40" />
          Log Out
        </button>
      </div>
    </aside>
  );
}
