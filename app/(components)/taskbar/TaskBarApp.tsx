"use client";

import { useDesktop } from "@/app/hooks/useDesktop";
import { useTaskbar } from "@/app/hooks/useTaskbar";
import { DesktopKey } from "@/app/types/desktop.types";
import Image, { StaticImageData } from "next/image";

type TaskBarAppProps = {
  imgSrc: StaticImageData;
  appname?: string;
  code?: string;
};

const TaskBarApp = ({ imgSrc, appname, code }: TaskBarAppProps) => {
  const { dispatch: taskbarDispatch } = useTaskbar();
  const { state: desktopState, dispatch: desktopDispatch } = useDesktop();

  const handleOnClick = () => {
    switch (code) {
      case "window":
        return taskbarDispatch({ type: "toggleTaskmenu" });
      case "folder":
        return !desktopState.folder.isOpen
          ? desktopDispatch({ type: "toggleFolder" })
          : desktopDispatch({ type: "toggleMinimizeFolder" });
      case "photoshop":
        return desktopDispatch({ type: "toggleMinimizePhotoshop" });
      case "vscode":
        return desktopDispatch({ type: "toggleMinimizeVSCode" });
      case "chrome":
        return desktopDispatch({ type: "toggleMinimizeChrome" });
      default:
        break;
    }
  };

  return (
    <button
      onClick={handleOnClick}
      className={`${
        appname ? "flex flex-col gap-1 items-center w-16" : "p-2"
      } cursor-default hover:bg-zinc-800 duration-150 relative`}
    >
      <Image src={imgSrc} alt="icon" className="size-6" />
      {appname && <span className="text-xs">{appname}</span>}
      {desktopState[code as DesktopKey]?.isOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-1 bg-zinc-300 h-[2px] w-2 rounded-full" />
      )}
    </button>
  );
};

export default TaskBarApp;
