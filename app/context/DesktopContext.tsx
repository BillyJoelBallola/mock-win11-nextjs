"use client";

import { createContext, ReactNode, useReducer } from "react";
import {
  Desktop,
  DesktopActionType,
  DesktopContextType,
} from "../types/desktopTypes";

const initialState: Desktop = {
  folder: { isOpen: false, isMinimize: false },
  photoshop: { isOpen: false, isMinimize: false },
  vscode: { isOpen: false, isMinimize: false },
  chrome: { isOpen: false, isMinimize: false },
  edge: { isOpen: false, isMinimize: false },
  bin: { isOpen: false, isMinimize: false },
};

export const DesktopContext = createContext<DesktopContextType | null>(null);

const reducer = (state: Desktop, action: DesktopActionType): Desktop => {
  switch (action.type) {
    case "toggleFolder":
      return {
        ...state,
        folder: { ...state.folder, isOpen: !state.folder.isOpen },
      };
    case "toggleMinimizeFolder":
      return {
        ...state,
        folder: { ...state.folder, isMinimize: !state.folder.isMinimize },
      };
    case "togglePhotoshop":
      return {
        ...state,
        photoshop: { ...state.photoshop, isOpen: !state.photoshop.isOpen },
      };
    case "toggleMinimizePhotoshop":
      return {
        ...state,
        photoshop: {
          ...state.photoshop,
          isMinimize: !state.photoshop.isMinimize,
        },
      };
    case "toggleVSCode":
      return {
        ...state,
        vscode: { ...state.vscode, isOpen: !state.vscode.isOpen },
      };
    case "toggleMinimizeVSCode":
      return {
        ...state,
        vscode: { ...state.vscode, isMinimize: !state.vscode.isMinimize },
      };
    case "toggleChrome":
      return {
        ...state,
        chrome: { ...state.chrome, isOpen: !state.chrome.isOpen },
      };
    case "toggleMinimizeChrome":
      return {
        ...state,
        chrome: { ...state.chrome, isMinimize: !state.chrome.isMinimize },
      };
    default:
      return state;
  }
};

export const DesktopContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DesktopContext.Provider value={{ state, dispatch }}>
      {children}
    </DesktopContext.Provider>
  );
};
