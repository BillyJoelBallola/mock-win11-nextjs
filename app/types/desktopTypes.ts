import { Dispatch } from "react";

export type DesktopKey =
  | "folder"
  | "photoshop"
  | "vscode"
  | "chrome"
  | "edge"
  | "bin";

export type DesktopActionType = {
  type:
    | "toggleFolder"
    | "toggleMinimizeFolder"
    | "togglePhotoshop"
    | "toggleMinimizePhotoshop"
    | "toggleVSCode"
    | "toggleMinimizeVSCode"
    | "toggleChrome"
    | "toggleMinimizeChrome"
    | "toggleEdge"
    | "toggleMinimizeEdge"
    | "toggleBin"
    | "toggleMinimizeBin";
};

export type Desktop = {
  [key in DesktopKey]: {
    isOpen: boolean;
    isMinimize: boolean;
  };
};

export type DesktopContextType = {
  state: Desktop;
  dispatch: Dispatch<DesktopActionType>;
};
