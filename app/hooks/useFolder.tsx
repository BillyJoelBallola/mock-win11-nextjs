"use client";

import { useContext } from "react";
import { FolderControlContext } from "../context/FolderControlContext";

export const useFolder = () => {
  const context = useContext(FolderControlContext);

  if (!context) {
    throw new Error("useFolder must be used within a FolderControlProvider");
  }

  return context;
};
