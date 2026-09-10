import React from "react";
import { Outlet } from "react-router-dom";

export function SantriLayout() {
  return (
    <div className="w-full">
      <Outlet />
    </div>
  );
}