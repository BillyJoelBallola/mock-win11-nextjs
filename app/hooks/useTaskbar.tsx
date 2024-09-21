"use client";

import { useContext } from "react";
import { TaskbarContext } from "@/app/context/TaskbarContext";

export const useTaskbar = () => {
  const context = useContext(TaskbarContext);

  if (!context) {
    throw new Error("useTaskbar must be used within a UserProvider");
  }

  return context;
};
