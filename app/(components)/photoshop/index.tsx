"use client";

import { useDesktop } from "@/app/hooks/useDesktop";
import DraggableWrapper from "../draggableWrapper";
import PhotoshopLoading from "@/public/photoshop-loading.png";
import { useEffect, useState } from "react";
import Image from "next/image";
import PhotoshopHeader from "./PhotoshopHeader";

function PhotoshoLoading() {
  const { state } = useDesktop();

  return (
    <div
      className={`${
        state.photoshop.isOpen ? "opacity-100 z-20" : "opacity-0 -z-10"
      } absolute w-full h-[90%] grid place-items-center`}
    >
      <Image
        src={PhotoshopLoading}
        alt="photoshop loading"
        sizes="w-full shadow-lg"
      />
    </div>
  );
}

function Photoshop() {
  const { state } = useDesktop();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (state.photoshop.isOpen) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    } else {
      setLoading(true);
    }
  }, [state.photoshop.isOpen]);

  const isOpenStyle =
    state.photoshop.isOpen && state.photoshop.isMinimize
      ? "opacity-0 -z-10"
      : state.photoshop.isOpen && !state.photoshop.isMinimize
      ? "opacity-100 z-20"
      : "opacity-0 -z-10";

  return (
    <>
      {loading ? (
        <PhotoshoLoading />
      ) : (
        <DraggableWrapper>
          <div
            className={`${isOpenStyle} transition-opacity duration-150 w-[800px] border border-zinc-700 shadow-xl rounded-lg absolute bg-zinc-600 text-zinc-50`}
          >
            <PhotoshopHeader />
            <div>search</div>
            <div>
              <div>side panel</div>
              <div>images</div>
            </div>
          </div>
        </DraggableWrapper>
      )}
    </>
  );
}

export default Photoshop;
