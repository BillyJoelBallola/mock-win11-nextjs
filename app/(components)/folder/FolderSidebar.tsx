"use client";

import { useFolder } from "@/app/hooks/useFolder";
import { FolderKey } from "@/app/types/folder.types";
import {
  ArrowDownToLine,
  ChevronDown,
  ChevronRight,
  File,
  Image,
  LucideIcon,
  Star,
  TvMinimal,
} from "lucide-react";

const quickAccessLink = {
  links: [
    {
      label: "Desktop",
      code: "desktop",
      Icon: TvMinimal as LucideIcon,
    },
    {
      label: "Download",
      code: "download",
      Icon: ArrowDownToLine as LucideIcon,
    },
    {
      label: "Document",
      code: "document",
      Icon: File as LucideIcon,
    },
    {
      label: "Pictures",
      code: "pictures",
      Icon: Image as LucideIcon,
    },
  ],
};

const FolderSidebar = () => {
  const { state, dispatch } = useFolder();

  return (
    <aside className="border-r border-zinc-700 py-4">
      <ul className="grid gap-4">
        <li className="text-sm">
          <button
            className="pl-2 py-1 flex items-center gap-2 w-full hover:bg-zinc-700"
            onClick={() =>
              dispatch({
                type: "toggleSidebarSubLinks",
                payload: { code: "quickAccess" },
              })
            }
          >
            {state.quickAccess.isOpen ? (
              <ChevronDown className="size-4" />
            ) : (
              <ChevronRight className="size-4" />
            )}
            <div className="flex items-center gap-2">
              <Star className="size-4 text-yellow-500" fill="#eab308" />
              <span>Quick Access</span>
            </div>
          </button>
          {state.quickAccess.isOpen && (
            <ul className="grid">
              {quickAccessLink.links.map((item, idx) => (
                <li key={item.code}>
                  <button
                    onClick={() =>
                      dispatch({
                        type: "toggleSubLinks",
                        payload: {
                          sidebarCode: "quickAccess",
                          sublinkIdx: idx,
                        },
                      })
                    }
                    className="pl-8 py-1 flex items-center gap-2 hover:bg-zinc-700 w-full"
                  >
                    <item.Icon className="size-4" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </li>

        <li className="text-sm">
          <button>This PC</button>
        </li>

        <li className="text-sm">
          <button>Network</button>
        </li>
      </ul>
    </aside>
  );
};

export default FolderSidebar;
