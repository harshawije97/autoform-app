"use client";

import { useConvexAuth } from "convex/react";
import { Loader } from "lucide-react";
import { redirect } from "next/navigation";
import React from "react";
import MainSidebar from "./_components/main-sidebar";

interface HomeLayoutProps {
  children: Readonly<React.ReactNode>;
}

function HomeLayout({ children }: HomeLayoutProps) {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loader
          size={30}
          color="oklch(70.8% 0 0)"
          strokeWidth={2.5}
          className="animate-spin delay-100"
        />
      </div>
    );

  if (!isAuthenticated) return redirect("/");

  return (
    <div className="h-full flex">
      <MainSidebar />
      <main className="flex-1 h-full overflow-y-auto">{children}</main>
    </div>
  );
}

export default HomeLayout;
