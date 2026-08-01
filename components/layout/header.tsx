"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Sparkles, Bell, Search } from "lucide-react";

export function Header() {
  return (
    <header className="h-[72px] border-b bg-background/95 backdrop-blur sticky top-0 z-40 flex items-center justify-between px-6">
      
      {/* 1. Logo  +  2. Search */}
      <div className="flex items-center gap-6 flex-1">
        <div className="flex items-center gap-2.5 min-w-[180px]">
          <div className="bg-primary text-primary-foreground p-2 rounded-lg shadow-sm">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight">GLAM SaaS</span>
        </div>

        <div className="relative w-72 md:w-96">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search customer, phone, appointment..."
            className="w-full pl-9 pr-4 py-2 text-sm bg-muted/50 rounded-lg border border-transparent focus:outline-none focus:border-primary transition-all"
          />
        </div>
      </div>

      {/* 3. Notification  +  4. Profile */}
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" className="relative rounded-full w-10 h-10">
          <Bell className="w-5 h-5 text-muted-foreground" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <div className="relative h-10 w-10 rounded-full border hover:opacity-80 transition-opacity cursor-pointer flex items-center justify-center">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/avatar-placeholder.png" alt="Staff Profile" />
                <AvatarFallback className="bg-primary/10 text-primary font-bold">
                  JZ
                </AvatarFallback>
              </Avatar>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">Zheng Jiajun</p>
                <p className="text-xs text-muted-foreground">Admin / Owner</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Account Settings</DropdownMenuItem>
            <DropdownMenuItem>Switch Branch</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-rose-600">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

      </div>
    </header>
  );
}