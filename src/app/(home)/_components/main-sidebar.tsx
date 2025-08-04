/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { cn } from "@/lib/utils";
import { PanelRight } from "lucide-react";
import React, { ComponentRef } from "react";
import { useMediaQuery } from "usehooks-ts";

function MainSidebar() {
  return (
    <>
      <aside className="w-60 h-[100vh] flex overflow-y-auto z-[99999] relative flex-col group/sidebar bg-secondary">
        <div>
          <p>Actions</p>
        </div>
        <div className="mt-4">
          <p>Documents</p>
        </div>
      </aside>
    </>
  );
}

export default MainSidebar;
