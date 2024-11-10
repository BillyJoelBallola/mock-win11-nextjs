import { Dispatch } from "react";

export type FolderKey = "quickAccess" | "thisPC" | "network";
export type FolderControls = "toggleSidebarSubLinks" | "toggleSubLinks";

export type Folder = {
  [key in FolderKey]: {
    isOpen: boolean;
    subTabs: { code: string; isOpen: boolean }[] | [];
  };
};

export type FolderActionType = {
  type: FolderControls | FolderKey;
  // payload?: { code: string } | { sidebarCode: FolderKey; sublinkIdx: number };
  payload: any;
};

export type FolderContextType = {
  state: Folder;
  dispatch: Dispatch<FolderActionType>;
};
