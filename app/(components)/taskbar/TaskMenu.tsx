"use client";

import TaskBarApp from "./TaskBarApp";
import { ChevronRight, Moon, Power, RotateCcw, Search } from "lucide-react";
import Edge from "@/public/edge-icon.png";
import Chrome from "@/public/chrome-icon.png";
import Word from "@/public/word-icon.png";
import Excel from "@/public/excel-icon.png";
import PP from "@/public/powerpoint-icon.png";
import Mail from "@/public/mail-icon.png";
import Calendar from "@/public/calendar-icon.png";
import Whiteboard from "@/public/whiteboard-icon.png";
import Calculator from "@/public/calculator-icon.png";
import Clock from "@/public/clock-icon.png";
import Settings from "@/public/settings-icon.png";
import VSCode from "@/public/vscode-icon.png";
import Figma from "@/public/figma-icon.png";
import Profile from "@/public/profile.gif";
import Photoshop from "@/public/photoshop-icon.png";
import Image from "next/image";

import { useUser } from "@/app/hooks/useUser";
import { useRouter } from "next/navigation";
import { useTaskbar } from "@/app/hooks/useTaskbar";

const pinnedApps = [
  {
    imgSrc: Edge,
    appname: "Edge",
  },
  {
    imgSrc: Chrome,
    appname: "Chrome",
  },
  {
    imgSrc: Word,
    appname: "Word",
  },
  {
    imgSrc: Excel,
    appname: "Excel",
  },
  {
    imgSrc: PP,
    appname: "Powerpoint",
  },
  {
    imgSrc: Mail,
    appname: "Mail",
  },
  {
    imgSrc: Calendar,
    appname: "Calendar",
  },
  {
    imgSrc: Whiteboard,
    appname: "Whiteboard",
  },
  {
    imgSrc: Calculator,
    appname: "Calculator",
  },
  {
    imgSrc: Clock,
    appname: "Clock",
  },
  {
    imgSrc: Settings,
    appname: "Settings",
  },
  {
    imgSrc: VSCode,
    appname: "Code",
  },
  {
    imgSrc: Figma,
    appname: "Figma",
  },
  {
    imgSrc: Photoshop,
    appname: "Photoshop",
  },
];

const PowerMenu = () => {
  const { dispatch } = useUser();
  const { dispatch: taskbarDispatch } = useTaskbar();
  const router = useRouter();

  return (
    <div className="group-hover:opacity-100 group-hover:z-30 opacity-0 -z-10 absolute bg-zinc-800/90 shadow-md text-xs bottom-8 right-0 w-36 py-2 rounded-md">
      <button
        onClick={() => {
          taskbarDispatch({ type: "toggleSleep" });
          taskbarDispatch({ type: "toggleTaskmenu" });
        }}
        className="flex items-center gap-2 p-2 w-full hover:bg-zinc-900/50"
      >
        <Moon className="size-4" />
        <span>Sleep</span>
      </button>
      <button
        onClick={() => {
          dispatch({ type: "signOut" });
          taskbarDispatch({ type: "toggleTaskmenu" });
          router.push("/signout");
        }}
        className="flex items-center gap-2 p-2 w-full hover:bg-zinc-900/50"
      >
        <Power className="size-4" />
        <span>Shut down</span>
      </button>
      <button
        onClick={() => {
          dispatch({ type: "signOut" });
          taskbarDispatch({ type: "toggleTaskmenu" });
          router.push("/restart");
        }}
        className="flex items-center gap-2 p-2 w-full hover:bg-zinc-900/50"
      >
        <RotateCcw className="size-4" />
        <span>Restart</span>
      </button>
    </div>
  );
};

const TaskMenu = () => {
  const { state } = useUser();

  return (
    <div className="overflow-hidden flex flex-col gap-8 pt-4 absolute bottom-12 left-1/2 -translate-x-1/2 rounded-lg bg-zinc-900/90 backdrop-blur-sm shadow-2xl">
      <div className="px-10">
        <div className="p-2 flex items-center gap-2 bg-zinc-900/30 rounded-md border-b-2 border-b-zinc-400">
          <Search className="size-4" />
          <input
            type="text"
            placeholder="Type here to search"
            className="text-sm w-full outline-none bg-transparent"
            required
          />
        </div>
      </div>

      <div className="px-10 flex flex-col gap-6">
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold">Pinned</span>
          <button className="flex items-center gap-2 pl-2 pr-1 rounded-md bg-zinc-800/90 hover:bg-zinc-700 duration-150 shadow-sm">
            <span>All apps</span>
            <ChevronRight className="size-4" />
          </button>
        </div>
        <ul className="grid grid-cols-6 gap-4">
          {pinnedApps.map((app, idx) => (
            <li key={idx}>
              <TaskBarApp imgSrc={app.imgSrc} appname={app.appname} />
            </li>
          ))}
        </ul>
      </div>

      <div className="px-10 flex flex-col gap-6">
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold">Recommended</span>
          <button className="flex items-center gap-2 pl-2 pr-1 rounded-md bg-zinc-800/90 hover:bg-zinc-700 duration-150 shadow-sm">
            <span>More</span>
            <ChevronRight className="size-4" />
          </button>
        </div>
        <ul className="grid grid-cols-2 gap-4">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="cursor-default p-1 flex items-center gap-2 hover:bg-zinc-800 duration-150"
            >
              <Image src={Photoshop} alt="icon" className="size-6" />
              <div className="text-xs flex flex-col">
                <span>window11-icons.psd</span>
                <span className="text-zinc-400">Apr 14</span>
              </div>
            </div>
          ))}
        </ul>
      </div>

      <div className="bg-zinc-800/70 px-10 py-2 flex items-center justify-between">
        <button className="flex items-center gap-2 text-xs p-2 rounded-md hover:bg-zinc-700">
          <div className="rounded-full overflow-hidden text-zinc-50 size-6">
            <Image src={Profile} alt="profile" className="size-full" />
          </div>
          <span>{state.username ? state.username : "Billy Joel Ballola"}</span>
        </button>
        <div className="relative group rounded-md">
          <PowerMenu />
          <button className="cursor-default duration-150 p-2 rounded-md hover:bg-zinc-700">
            <Power className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskMenu;
