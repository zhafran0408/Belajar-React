import { Outlet } from "react-router-dom";

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";

import AppSidebar from "@/components/AppSidebar";
import Navbar from "@/components/Navbar";

function MainLayout() {
  return (
    <SidebarProvider>

      <AppSidebar />

      <SidebarInset>

        <Navbar />

        <main className="min-h-[calc(100vh-4rem)] bg-muted/20 p-4 sm:p-6">
          <div className="mx-auto w-full max-w-7xl">
            <Outlet />
          </div>
        </main>

      </SidebarInset>

    </SidebarProvider>
  );
}

export default MainLayout;