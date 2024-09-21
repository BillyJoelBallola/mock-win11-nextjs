"use client";

import { useState } from "react";
import {
  SearchResultsProps,
  WebResult,
  ImageResult,
} from "@/app/types/desktop.types";
import { Image, Search } from "lucide-react";

const WebResults = ({ webResults }: { webResults: WebResult[] }) => {
  return (
    <div className="grid gap-4 p-4">
      {webResults.map((item, idx) => (
        <div
          key={idx}
          className="hover:bg-zinc-700 duration-300 rounded-lg p-4 flex gap-4"
        >
          <div className="flex-1">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-blue-600 hover:underline"
              dangerouslySetInnerHTML={{ __html: item.htmlTitle }}
            />
            <p
              className="text-sm text-zinc-500"
              dangerouslySetInnerHTML={{ __html: item.htmlFormattedUrl }}
            />
            <p
              className="text-sm text-gray-100 mt-1"
              dangerouslySetInnerHTML={{ __html: item.htmlSnippet }}
            />
          </div>
          {item.pagemap.cse_thumbnail && (
            <img
              src={item.pagemap.cse_thumbnail[0]?.src || ""}
              alt={item.title}
              className="w-32 h-32 rounded-lg object-cover"
            />
          )}
        </div>
      ))}
    </div>
  );
};

const ImageResults = ({ imageResults }: { imageResults: ImageResult[] }) => {
  return (
    <div className="grid grid-cols-4 p-4 gap-4">
      {imageResults.map((item, idx) => (
        <img
          key={idx}
          src={item.pagemap.cse_image ? item.pagemap.cse_image[0]?.src : ""}
          alt={item.title}
          className="size-40 rounded-lg mr-4 object-cover"
        />
      ))}
    </div>
  );
};

const SearchResult = ({ results }: SearchResultsProps) => {
  const [activeTab, setActiveTab] = useState<"web" | "image">("web");

  return (
    <div className="h-[500px] overflow-auto relative">
      <div className="w-full bg-zinc-800 flex items-center gap-4 border-b border-b-zinc-700 pt-4 px-4">
        <button
          onClick={() => setActiveTab("web")}
          className={`${
            activeTab === "web" ? "border-b-zinc-300" : "border-b-transparent"
          } pb-2 border-b-[3px] flex items-center gap-1`}
        >
          <Search className="size-4" />
          <span>All</span>
        </button>
        <button
          onClick={() => setActiveTab("image")}
          className={`${
            activeTab === "image" ? "border-b-zinc-300" : "border-b-transparent"
          } pb-2 border-b-[3px] flex items-center gap-1`}
        >
          <Image className="size-4" />
          <span>Images</span>
        </button>
      </div>
      {activeTab === "web" && <WebResults webResults={results.webResult} />}
      {activeTab === "image" && (
        <ImageResults imageResults={results.imageResult} />
      )}
    </div>
  );
};

export default SearchResult;
