import { Dispatch } from "react";

export type UserType = {
  username: string | null;
};

export type UserActionType = {
  type: "setUsername" | "getUsername" | "signOut";
  payload?: string;
};

export type UserContextType = {
  state: UserType;
  dispatch: Dispatch<UserActionType>;
};
