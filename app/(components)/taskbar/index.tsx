"use client";

import { ChevronUp, Globe, Volume2 } from "lucide-react";
import Window from "@/public/window-icon.png";
import Folder from "@/public/folder-icon.png";
import Edge from "@/public/edge-icon.png";
import Chrome from "@/public/chrome-icon.png";
import RecycleBin from "@/public/recyclebin-icon.png";
import VSCode from "@/public/vscode-icon.png";
import Photoshop from "@/public/photoshop-icon.png";
import TaskBarApp from "./TaskBarApp";
import TaskBarInfo from "./TaskBarInfo";
import TaskMenu from "./TaskMenu";
import { useTaskbar } from "@/app/hooks/useTaskbar";
import { useDesktop } from "@/app/hooks/useDesktop";
import { DesktopKey } from "@/app/types/desktop.types";
import React from "react";

const taskBarFunctionalApps = [
  {
    imgSrc: Chrome,
    code: "chrome",
  },
  {
    imgSrc: RecycleBin,
    code: "bin",
  },
  {
    imgSrc: VSCode,
    code: "vscode",
  },
  {
    imgSrc: Photoshop,
    code: "photoshop",
  },
];

const taskBarInfoIcons = [
  {
    icon: ChevronUp,
  },
  {
    icon: Globe,
  },
  {
    icon: Volume2,
  },
];

const TaskBar = () => {
  const { state } = useTaskbar();
  const { state: desktopState } = useDesktop();

  const isOpenOrIsMinimize = (code: DesktopKey): boolean => {
    return desktopState[code].isOpen || desktopState[code].isMinimize;
  };

  return (
    <div className="z-20 px-4 absolute bottom-0 w-full bg-zinc-900/80 text-zinc-50 backdrop-blur-sm grid grid-cols-[200px_1fr_200px] items-center">
      <div />

      {state.taskMenu && <TaskMenu />}

      <ul className="flex items-center justify-center">
        <li>
          <TaskBarApp imgSrc={Window} code={"window"} />
        </li>
        <li>
          <TaskBarApp imgSrc={Folder} code={"folder"} />
        </li>
        <li>
          <TaskBarApp imgSrc={Edge} code={"edge"} />
        </li>

        {taskBarFunctionalApps.map((icon) => {
          return (
            isOpenOrIsMinimize(icon.code as DesktopKey) && (
              <li key={icon.code}>
                <TaskBarApp imgSrc={icon.imgSrc} code={icon.code} />
              </li>
            )
          );
        })}
      </ul>

      <ul className="flex items-center justify-end">
        {taskBarInfoIcons.map((icon, idx) => (
          <li key={idx}>
            <TaskBarInfo icon={icon.icon} />
          </li>
        ))}
        <div className="cursor-default flex flex-col text-xs text-center pl-2">
          <span>11:11 AM</span>
          <span>6/1/2002</span>
        </div>
      </ul>
    </div>
  );
};

export default TaskBar;
