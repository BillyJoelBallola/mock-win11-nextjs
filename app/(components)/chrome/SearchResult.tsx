"use client";

import { useState } from "react";
import { SearchResultsProps } from "@/app/types/desktop.types";

const SearchResult = ({ results }: SearchResultsProps) => {
  const [activeTab, setActiveTab] = useState<"web" | "image">("web");

  return (
    <div className="h-[500px] overflow-auto relative">
      <div className="fixed w-full bg-zinc-800 flex items-center gap-4 border-b border-b-zinc-700 pt-4 px-4">
        <button
          onClick={() => setActiveTab("web")}
          className={`${
            activeTab === "web" ? "border-b-zinc-300" : "border-b-transparent"
          } pb-2 border-b-2`}
        >
          Web
        </button>
        <button
          onClick={() => setActiveTab("image")}
          className={`${
            activeTab === "image" ? "border-b-zinc-300" : "border-b-transparent"
          } pb-2 border-b-2`}
        >
          Images
        </button>
      </div>
      <div className="mt-14">
        {activeTab === "web" ? (
          results.webResult.map((item, idx) => (
            <div key={idx} className="flex p-4">
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
                  className="w-32 h-32 rounded-lg mr-4 object-cover"
                />
              )}
            </div>
          ))
        ) : (
          <div className="grid grid-cols-4 p-4 gap-4">
            {results.imageResult.map((item, idx) => (
              <img
                key={idx}
                src={item.pagemap.cse_image[0]?.src || ""}
                alt={item.title}
                className="size-40 rounded-lg mr-4 object-cover"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
