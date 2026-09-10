import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Info,
  GraduationCap,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const { state, toggleSidebar } = useSidebar();
  const isCollapsed = state === "collapsed";

  const navigationItems = [
    {
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboard,
    },
    {
      title: "Data Santri",
      url: "/santri",
      icon: Users,
    },
    {
      title: "About",
      url: "/about",
      icon: Info,
    },
  ];

  return (
    <Sidebar collapsible="icon" className="border-r border-slate-200/80 bg-white dark:border-slate-800 dark:bg-slate-950 transition-all duration-300 ease-out">
      {/* Sidebar Header: Logo & Branding */}
      <SidebarHeader className="p-4 border-b border-slate-100 dark:border-slate-800/60">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-slate-50 dark:text-slate-900 shadow-sm transition-transform duration-300">
            <GraduationCap className="h-5 w-5" />
          </div>
          {!isCollapsed && (
            <div className="flex flex-col min-w-0 transition-opacity duration-200 ease-out">
              <span className="font-semibold text-slate-900 dark:text-slate-100 text-sm tracking-tight truncate">
                SantriHub
              </span>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 truncate">
                Management System
              </span>
            </div>
          )}
        </div>
      </SidebarHeader>

      {/* Sidebar Menu */}
      <SidebarContent className="p-3">
        <div className="mb-2 px-2">
          {!isCollapsed && (
            <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
              Menu
            </span>
          )}
        </div>
        <SidebarMenu className="space-y-1">
          {navigationItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild tooltip={isCollapsed ? item.title : undefined}>
                <NavLink
                  to={item.url}
                  end={item.url === "/"}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-slate-900 text-white shadow-sm dark:bg-slate-100 dark:text-slate-900"
                        : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800/60"
                    }`
                  }
                >
                  <item.icon className="h-4 w-4 shrink-0" />
                  {!isCollapsed && <span className="truncate">{item.title}</span>}
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      {/* Sidebar Footer: Collapse Toggle Button inside Sidebar */}
      <SidebarFooter className="p-3 border-t border-slate-100 dark:border-slate-800/60">
        <button
          onClick={toggleSidebar}
          className="flex w-full items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-800/60 transition-all duration-200"
          title={isCollapsed ? "Buka Sidebar" : "Tutup Sidebar"}
        >
          {isCollapsed ? (
            <PanelLeftOpen className="h-4 w-4 shrink-0 mx-auto" />
          ) : (
            <>
              <PanelLeftClose className="h-4 w-4 shrink-0" />
              <span className="truncate">Tutup Sidebar</span>
            </>
          )}
        </button>
      </SidebarFooter>
    </Sidebar>
  );
}
