import { Dispatch } from "react";

export type DesktopKey =
  | "folder"
  | "photoshop"
  | "vscode"
  | "chrome"
  | "edge"
  | "bin";

export type DesktopActionType = {
  type:
    | "toggleFolder"
    | "toggleMinimizeFolder"
    | "togglePhotoshop"
    | "toggleMinimizePhotoshop"
    | "toggleVSCode"
    | "toggleMinimizeVSCode"
    | "toggleChrome"
    | "toggleMinimizeChrome"
    | "toggleEdge"
    | "toggleMinimizeEdge"
    | "toggleBin"
    | "toggleMinimizeBin";
};

export type Desktop = {
  [key in DesktopKey]: {
    isOpen: boolean;
    isMinimize: boolean;
  };
};

export type DesktopContextType = {
  state: Desktop;
  dispatch: Dispatch<DesktopActionType>;
};

export type ImageResult = {
  kind: string;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
  pagemap: {
    cse_thumbnail?: {
      src: string;
      width: number;
      height: number;
    };
    cse_image?: { src: string }[];
    metatags?: { [key: string]: string };
  };
};

export type WebResult = {
  displayLink: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
  htmlSnippet: string;
  htmlTitle: string;
  link: string;
  pagemap: {
    cse_image?: { src: string }[];
    cse_thumbnail?: { src: string; height: string; width: string }[];
  };
  snippet: string;
  title: string;
};

export type SearchResultsProps = {
  results: {
    webResult: WebResult[];
    imageResult: ImageResult[];
  };
};
