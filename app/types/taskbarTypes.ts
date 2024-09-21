import { Dispatch } from "react";

export type Taskbar = {
  sleep: boolean;
  taskMenu: boolean;
  fileManager: boolean;
  edge: boolean;
};

export type TaskbarActionType = {
  type: "toggleTaskmenu" | "toggleSleep";
};

export type TaskbarContextType = {
  state: Taskbar;
  dispatch: Dispatch<TaskbarActionType>;
};
