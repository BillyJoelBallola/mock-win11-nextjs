"use client";

import { useDesktop } from "@/app/hooks/useDesktop";
import Image, { StaticImageData } from "next/image";

type DesktopAppProps = {
  imgSrc: StaticImageData;
  appname: string;
  code: string;
};

const DesktopApp = ({ imgSrc, appname, code }: DesktopAppProps) => {
  const { state, dispatch } = useDesktop();

  const handleAppDoubleClick = () => {
    switch (code) {
      case "folder":
        return !state.folder.isOpen ? dispatch({ type: "toggleFolder" }) : null;
      case "photoshop":
        return !state.photoshop.isOpen
          ? dispatch({ type: "togglePhotoshop" })
          : null;
      case "vscode":
        return !state.vscode.isOpen ? dispatch({ type: "toggleVSCode" }) : null;
      case "chrome":
        return !state.chrome.isOpen ? dispatch({ type: "toggleChrome" }) : null;
      case "edge":
        return !state.edge.isOpen ? dispatch({ type: "toggleEdge" }) : null;
      default:
        break;
    }
  };

  const handleAppOneClick = () => {
    switch (code) {
      case "folder":
        return state.folder.isOpen
          ? dispatch({ type: "toggleMinimizeFolder" })
          : null;
      case "photoshop":
        return state.photoshop.isOpen
          ? dispatch({ type: "toggleMinimizePhotoshop" })
          : null;
      case "vscode":
        return state.vscode.isOpen
          ? dispatch({ type: "toggleMinimizeVSCode" })
          : null;
      case "chrome":
        return state.chrome.isOpen
          ? dispatch({ type: "toggleMinimizeChrome" })
          : null;
      case "edge":
        return state.edge.isOpen
          ? dispatch({ type: "toggleMinimizeEdge" })
          : null;
      default:
        break;
    }
  };

  return (
    <button
      onClick={handleAppOneClick}
      onDoubleClick={handleAppDoubleClick}
      className="cursor-default flex flex-col gap-1 w-20 min-h-fit items-center hover:bg-zinc-50/10 duration-150"
    >
      <Image src={imgSrc} alt={appname} className="size-8" />
      <span className="text-xs text-zinc-50">{appname}</span>
    </button>
  );
};

export default DesktopApp;
