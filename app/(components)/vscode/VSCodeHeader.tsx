"use client";

import { Minus, Square, X } from "lucide-react";
import VSCodeIcon from "@/public/vscode-icon.png";
import { useDesktop } from "@/app/hooks/useDesktop";
import Image from "next/image";

const headerMenu = [
  "File",
  "Edit",
  "Selection",
  "View",
  "Go",
  "Run",
  "Terminal",
  "Help",
];

const VSCodeHeader = () => {
  const { dispatch } = useDesktop();

  return (
    <div className="w-full flex items-center justify-between px-2 pt-2">
      <div className="flex items-center gap-4">
        <Image src={VSCodeIcon} alt="vscode icon" className="size-4" />
        <ul className="flex items-center text-sm gap-4">
          {headerMenu.map((menu) => (
            <li key={menu}>{menu}</li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-4 text-zinc-50">
        <button onClick={() => dispatch({ type: "toggleMinimizeVSCode" })}>
          <Minus className="size-4" />
        </button>
        <button>
          <Square className="size-3" />
        </button>
        <button onClick={() => dispatch({ type: "toggleVSCode" })}>
          <X className="size-4" />
        </button>
      </div>
    </div>
  );
};

export default VSCodeHeader;
