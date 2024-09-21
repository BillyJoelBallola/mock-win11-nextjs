"use client";

import { createContext, ReactNode, useReducer } from "react";
import {
  Taskbar,
  TaskbarActionType,
  TaskbarContextType,
} from "../types/taskbarTypes";

const initialState: Taskbar = {
  sleep: false,
  taskMenu: false,
  fileManager: false,
  edge: false,
};

export const TaskbarContext = createContext<TaskbarContextType | null>(null);

const reducer = (state: Taskbar, action: TaskbarActionType): Taskbar => {
  switch (action.type) {
    case "toggleTaskmenu":
      return { ...state, taskMenu: !state.taskMenu };
    case "toggleSleep":
      return { ...state, sleep: !state.sleep };
    default:
      return state;
  }
};

export const TaskbarContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TaskbarContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskbarContext.Provider>
  );
};
