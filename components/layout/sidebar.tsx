"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavItems } from "@/config/navigation";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex w-[260px] flex-col fixed inset-y-0 z-50 border-r bg-background">
      {/* 顶高对齐 Navbar 的 72px */}
      <div className="h-[72px] border-b flex items-center px-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Main Menu
        </span>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
        {mainNavItems.map((item) => {
          const isActive = 
            item.href === "/dashboard" 
              ? pathname === "/dashboard" 
              : pathname.startsWith(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center justify-between px-3.5 py-2.5 rounded-md text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <div className="flex items-center gap-3">
                <Icon className="w-4.5 h-4.5" />
                <span>{item.title}</span>
              </div>
              {item.badge && (
                <Badge 
                  variant={isActive ? "outline" : "secondary"} 
                  className={cn("text-[10px] px-1.5 py-0", isActive && "text-primary-foreground border-primary-foreground/30")}
                >
                  {item.badge}
                </Badge>
              )}
            </Link>
          );
        })}
      </div>

      {/* Footer Store Info */}
      <div className="p-4 border-t bg-muted/30">
        <div className="text-xs text-muted-foreground font-medium">Store Location</div>
        <div className="text-sm font-semibold truncate">Cheras Branch</div>
      </div>
    </aside>
  );
}