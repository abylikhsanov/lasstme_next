"use client";

import React from "react";
import { CategoryProvider } from "./CategoryContext";
import { UserProvider } from "./UserContext";

export function Providers({ children }: { children: any }) {
  return (
    <UserProvider>
      <CategoryProvider>{children}</CategoryProvider>
    </UserProvider>
  );
}
