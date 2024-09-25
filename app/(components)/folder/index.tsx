"use client";

import { useDesktop } from "@/app/hooks/useDesktop";
import DraggableWrapper from "../draggableWrapper";
import FolderHeader from "./FolderHeader";
import FolderTools from "./FolderTools";
import FolderSidebar from "./FolderSidebar";

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
        className={`${isOpenStyle} overflow-hidden transition-opacity duration-150 h-[500px] w-[800px] border border-zinc-700 shadow-xl rounded-lg absolute bg-zinc-800 text-zinc-50`}
      >
        <FolderHeader />
        <FolderTools />
        <div className="grid grid-cols-[200px_1fr] h-full">
          <FolderSidebar />
          <div>main</div>
        </div>
      </div>
    </DraggableWrapper>
  );
}

export default Folder;
