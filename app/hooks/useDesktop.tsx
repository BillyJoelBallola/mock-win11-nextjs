"use client";

import { useContext } from "react";
import { DesktopContext } from "../context/DesktopContext";

export const useDesktop = () => {
  const context = useContext(DesktopContext);

  if (!context) {
    throw new Error("useDesktop must be used within a UserProvider");
  }

  return context;
};
