"use client";

import { useDesktop } from "@/app/hooks/useDesktop";
import DraggableWrapper from "../draggableWrapper";
import VSCodeHeader from "./VSCodeHeader";

function VSCode() {
  const { state } = useDesktop();

  const isOpenStyle =
    state.vscode.isOpen && state.vscode.isMinimize
      ? "opacity-0 -z-10"
      : state.vscode.isOpen && !state.vscode.isMinimize
      ? "opacity-100 z-20"
      : "opacity-0 -z-10";

  return (
    <DraggableWrapper>
      <div
        className={`${isOpenStyle} w-[800px] transition-opacity duration-150 border border-zinc-700 shadow-xl rounded-lg absolute bg-zinc-800 text-zinc-50`}
      >
        <VSCodeHeader />

        <div>
          <div>activity bar</div>
          <div>side bar</div>
          <div>editor</div>
        </div>
      </div>
    </DraggableWrapper>
  );
}

export default VSCode;
