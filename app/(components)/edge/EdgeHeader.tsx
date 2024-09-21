"use client";

import { useDesktop } from "@/app/hooks/useDesktop";
import Profile from "@/public/profilePicture.jpg";
import {
  ArrowLeft,
  ArrowRight,
  EllipsisVertical,
  Minus,
  RotateCw,
  Search,
  Square,
  Table2,
  X,
} from "lucide-react";
import Image from "next/image";

const EdgeHeader = () => {
  const { dispatch } = useDesktop();

  return (
    <div className="w-full">
      <div className=" flex items-center justify-between px-2 pt-2">
        <div className="flex items-center justify-between bg-zinc-700 w-52 px-2 py-1 rounded-se-lg rounded-ss-lg">
          <div className="flex items-center gap-2">
            <Table2 className="size-5" />
            <span className="text-xs">New Tab</span>
          </div>
          <button>
            <X className="size-4" />
          </button>
        </div>
        <div className="flex items-center gap-4 text-zinc-50">
          <button onClick={() => dispatch({ type: "toggleMinimizeEdge" })}>
            <Minus className="size-4" />
          </button>
          <button>
            <Square className="size-3" />
          </button>
          <button onClick={() => dispatch({ type: "toggleEdge" })}>
            <X className="size-4" />
          </button>
        </div>
      </div>
      <div className="p-2 bg-zinc-700 flex items-center justify-between gap-4 rounded-se-lg rounded-ss-lg">
        <div className="flex items-center gap-4">
          <button>
            <ArrowLeft className="size-4" />
          </button>
          <button>
            <ArrowRight className="size-4" />
          </button>
          <button>
            <RotateCw className="size-4" />
          </button>
        </div>
        <form className="flex-1 gap-2 py-1 px-2 rounded-full bg-zinc-800 flex items-center">
          <div className="font-semibold p-1">
            <Search className="size-4" />
          </div>
          <button type="submit" className="hidden" />
          <input
            type="search"
            name="query"
            placeholder="Search or enter web address"
            className="outline-none bg-transparent w-full text-sm"
          />
        </form>
        <div className="flex items-center gap-4">
          <div className="rounded-full overflow-hidden size-6">
            <Image src={Profile} alt="edge profile" className="w-full h-full" />
          </div>
          <button>
            <EllipsisVertical className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EdgeHeader;
