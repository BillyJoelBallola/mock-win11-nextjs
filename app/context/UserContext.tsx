"use client";

import { createContext, ReactNode, useEffect, useReducer } from "react";
import { UserActionType, UserContextType, UserType } from "../types/userTypes";

const initialState: UserType = {
  username: null,
};

export const UserContext = createContext<UserContextType | null>(null);

const reducer = (state: UserType, action: UserActionType): UserType => {
  switch (action.type) {
    case "setUsername":
      localStorage.setItem("username", action.payload as string);
      return { username: action.payload as string };
    case "getUsername":
      const localUsername = localStorage.getItem("username");
      return { username: localUsername };
    case "signOut":
      localStorage.setItem("username", "");
      return { username: null };
    default:
      return state;
  }
};

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.username === null) {
      dispatch({ type: "getUsername" });
    }
  }, [state.username]);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
