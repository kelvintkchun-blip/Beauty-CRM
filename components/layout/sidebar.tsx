"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavItems } from "@/config/navigation";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r bg-background flex flex-col h-screen sticky top-0">
      {/* Logo 区域 */}
      <div className="h-16 flex items-center px-6 border-b">
        <span className="font-bold text-lg text-primary">BEAUTY CRM</span>
      </div>

      {/* 导航菜单 */}
      <div className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {mainNavItems.map((item) => {
          const isActive = pathname === item.href;

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
    </aside>
  );
}