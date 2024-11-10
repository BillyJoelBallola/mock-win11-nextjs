"use client";

import { createContext, ReactNode, useReducer } from "react";
import {
  Folder,
  FolderActionType,
  FolderContextType,
  FolderKey,
} from "../types/folder.types";

const initialState: Folder = {
  quickAccess: {
    isOpen: true,
    subTabs: [
      {
        code: "desktop",
        isOpen: true,
      },
      {
        code: "download",
        isOpen: false,
      },
      {
        code: "documents",
        isOpen: false,
      },
      {
        code: "pictures",
        isOpen: false,
      },
    ],
  },
  thisPC: {
    isOpen: false,
    subTabs: [],
  },
  network: {
    isOpen: false,
    subTabs: [],
  },
};

export const FolderControlContext = createContext<FolderContextType | null>(
  null
);

const reducer = (state: Folder, action: FolderActionType): Folder => {
  switch (action.type) {
    case "toggleSidebarSubLinks":
      const toggleSidebarSubLink = (state: Folder, code: FolderKey): Folder => {
        return {
          ...state,
          [code]: {
            ...state[code],
            isOpen: !state[code].isOpen,
          },
        };
      };

      return toggleSidebarSubLink(state, action.payload.code);

    case "toggleSubLinks":
      const toggleSubLinks = (
        state: Folder,
        payload: { sidebarCode: FolderKey; sublinkIdx: number }
      ): Folder => {
        const folder = state[payload.sidebarCode];

        if (!folder || !folder.subTabs) {
          console.warn(
            `No folder found for sidebarCode: ${payload.sidebarCode}`
          );
          return state;
        }

        const newSubTabs = folder.subTabs.map((sublink, idx) => ({
          ...sublink,
          isOpen: idx === payload.sublinkIdx ? true : false,
        }));

        return {
          ...state,
          [payload.sidebarCode]: {
            ...folder,
            subTabs: newSubTabs,
          },
        };
      };

      return toggleSubLinks(state, action.payload);
    default:
      return state;
  }
};

export const FolderControlContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FolderControlContext.Provider value={{ state, dispatch }}>
      {children}
    </FolderControlContext.Provider>
  );
};
