"use client";

import { useDesktop } from "@/app/hooks/useDesktop";
import {
  ArrowLeft,
  ArrowRight,
  Chrome,
  EllipsisVertical,
  Minus,
  RotateCw,
  Square,
  X,
} from "lucide-react";
import Profile from "@/public/profilePicture.jpg";
import Image from "next/image";

type ChromeHeaderProps = {
  handleSearch: (e: React.FormEvent<HTMLFormElement>) => void;
  setQuery: React.Dispatch<string>;
  query: string;
  handleReset: () => void;
};

const ChromeHeader = ({
  handleSearch,
  query,
  setQuery,
  handleReset,
}: ChromeHeaderProps) => {
  const { dispatch } = useDesktop();

  return (
    <div className="w-full">
      <div className=" flex items-center justify-between px-2 pt-2">
        <div className="flex items-center justify-between bg-zinc-700 w-52 px-2 py-1 rounded-se-lg rounded-ss-lg">
          <div className="flex items-center gap-2">
            <Chrome className="size-5" />
            <span className="text-xs">New Tab</span>
          </div>
          <button>
            <X className="size-4" />
          </button>
        </div>
        <div className="flex items-center gap-4 text-zinc-50">
          <button onClick={() => dispatch({ type: "toggleMinimizeChrome" })}>
            <Minus className="size-4" />
          </button>
          <button>
            <Square className="size-3" />
          </button>
          <button onClick={() => dispatch({ type: "toggleChrome" })}>
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
          <button onClick={handleReset}>
            <RotateCw className="size-4" />
          </button>
        </div>
        <form
          onSubmit={handleSearch}
          className="flex-1 gap-2 py-1 px-2 rounded-full bg-zinc-800 flex items-center"
        >
          <div className="rounded-full bg-zinc-700 font-semibold px-2">G</div>
          <input
            type="search"
            placeholder="Search Google or type a URL"
            className="outline-none bg-transparent w-full text-sm"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="hidden" />
        </form>
        <div className="flex items-center gap-4">
          <div className="rounded-full overflow-hidden size-6">
            <Image
              src={Profile}
              alt="google profile"
              className="w-full h-full"
            />
          </div>
          <button>
            <EllipsisVertical className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChromeHeader;
