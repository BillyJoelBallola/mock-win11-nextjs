"use client";

import { useDesktop } from "@/app/hooks/useDesktop";
import DraggableWrapper from "../draggableWrapper";
import FolderHeader from "./FolderHeader";

function Folder() {
  const { state } = useDesktop();

  const isOpenStyle =
    state.folder.isOpen && state.folder.isMinimize
      ? "opacity-0 -z-10"
      : state.folder.isOpen && !state.folder.isMinimize
      ? "opacity-100 z-20"
      : "opacity-0 -z-10";

  return (
    <DraggableWrapper>
      <div
        className={`${isOpenStyle} transition-opacity duration-150 w-[800px] border border-zinc-700 shadow-xl rounded-lg absolute bg-zinc-800 text-zinc-50`}
      >
        <FolderHeader />
        <div>tools</div>
        <div>
          <div>sidebar</div>
          <div>main</div>
        </div>
      </div>
    </DraggableWrapper>
  );
}

export default Folder;
