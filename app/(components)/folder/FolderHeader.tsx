"use client";

import { useDesktop } from "@/app/hooks/useDesktop";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ChevronRight,
  Home,
  HomeIcon,
  Minus,
  Plus,
  RotateCw,
  Square,
  X,
} from "lucide-react";

const FolderHeader = () => {
  const { dispatch } = useDesktop();

  return (
    <div className="w-full">
      <div className="flex items-center justify-between px-2 pt-2">
        {/* tabs */}
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-between bg-zinc-700 w-52 px-2 py-1 rounded-se-lg rounded-ss-lg">
            <div className="flex items-center gap-2">
              <Home className="size-5" />
              <span className="text-xs">Home</span>
            </div>
            <button>
              <X className="size-4" />
            </button>
          </div>
          <button>
            <Plus className="size-4" />
          </button>
        </div>
        {/* container controls */}
        <div className="flex items-center gap-4 text-zinc-500">
          <button onClick={() => dispatch({ type: "toggleMinimizeFolder" })}>
            <Minus className="size-4" />
          </button>
          <button>
            <Square className="size-3" />
          </button>
          <button onClick={() => dispatch({ type: "toggleFolder" })}>
            <X className="size-4" />
          </button>
        </div>
      </div>
      {/* control & path & filter */}
      <div className="bg-zinc-700 px-2 py-2 flex items-center gap-4">
        <div className="flex items-center gap-6">
          <button>
            <ArrowLeft className="size-4" />
          </button>
          <button>
            <ArrowRight className="size-4" />
          </button>
          <button>
            <ArrowUp className="size-4" />
          </button>
          <button>
            <RotateCw className="size-4" />
          </button>
        </div>
        <div className="flex-1 shadow-md rounded-md bg-zinc-600 flex items-center gap-2 py-1 px-2">
          <HomeIcon className="size-4" />
          <ChevronRight className="size-4" />
          <span className="text-sm">Home</span>
        </div>
        <input
          type="search"
          placeholder="Search here"
          className="bg-zinc-800/20 py-1 px-2 rounded-md text-sm border-b border-b-zinc-400 outline-none w-52"
          required
        />
      </div>
    </div>
  );
};

export default FolderHeader;
