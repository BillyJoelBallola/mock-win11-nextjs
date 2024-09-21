import { Minus, Square, X } from "lucide-react";
import PhotoshopLogo from "@/public/photoshop-icon.png";
import Image from "next/image";
import { useDesktop } from "@/app/hooks/useDesktop";

const headerMenu = [
  "File",
  "Edit",
  "Image",
  "Layer",
  "Type",
  "Select",
  "Filter",
  "3D",
  "View",
  "Window",
  "Help",
];

const PhotoshopHeader = () => {
  const { dispatch } = useDesktop();

  return (
    <div className="w-full flex items-center justify-between px-2 pt-2">
      <div className="flex items-center gap-4">
        <Image src={PhotoshopLogo} alt="photoshop icon" className="size-4" />
        <ul className="flex items-center text-sm gap-4">
          {headerMenu.map((menu) => (
            <li key={menu}>{menu}</li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-4 text-zinc-50">
        <button onClick={() => dispatch({ type: "toggleMinimizePhotoshop" })}>
          <Minus className="size-4" />
        </button>
        <button>
          <Square className="size-3" />
        </button>
        <button onClick={() => dispatch({ type: "togglePhotoshop" })}>
          <X className="size-4" />
        </button>
      </div>
    </div>
  );
};

export default PhotoshopHeader;
