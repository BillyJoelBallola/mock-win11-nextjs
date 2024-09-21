"use client";

import { useDesktop } from "@/app/hooks/useDesktop";
import DraggableWrapper from "../draggableWrapper";
import EdgeHeader from "./EdgeHeader";

const Edge = () => {
  const { state } = useDesktop();

  const isOpenStyle =
    state.edge.isOpen && state.edge.isMinimize
      ? "opacity-0 -z-10"
      : state.edge.isOpen && !state.edge.isMinimize
      ? "opacity-100 z-20"
      : "opacity-0 -z-10";

  return (
    <DraggableWrapper>
      <div
        className={`${isOpenStyle} transition-opacity duration-150 w-[800px] border border-zinc-700 shadow-xl rounded-lg absolute bg-zinc-800 text-zinc-50`}
      >
        <EdgeHeader />
      </div>
    </DraggableWrapper>
  );
};

export default Edge;
