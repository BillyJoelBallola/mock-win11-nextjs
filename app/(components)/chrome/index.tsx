"use client";

import { useDesktop } from "@/app/hooks/useDesktop";
import DraggableWrapper from "../draggableWrapper";
import { useState } from "react";
import axios from "axios";
import ChromeHeader from "./ChromeHeader";
import ChromeBody from "./ChromeBody";
import SearchResult from "./SearchResult";

const Chrome = () => {
  const { state } = useDesktop();
  const [searching, setSearching] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");
  const [results, setResults] = useState<any>({
    webResult: [],
    imageResult: [],
  });

  const isOpenStyle =
    state.chrome.isOpen && state.chrome.isMinimize
      ? "opacity-0 -z-10"
      : state.chrome.isOpen && !state.chrome.isMinimize
      ? "opacity-100 z-20"
      : "opacity-0 -z-10";

  const handleReset = () => {
    setResults({ webResult: [], imagesResult: [] });
    setCurrentUrl("");
  };

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const query = Object.values(e.currentTarget)[1].value;

    if (query === "") return;

    setSearching(true);

    try {
      const webResults: any[] = [];
      const imageResults: any[] = [];
      const response: { data: { items?: any[] } } = await axios.get(
        `${process.env.NEXT_PUBLIC_GOOGLE_API}`,
        {
          params: {
            key: process.env.NEXT_PUBLIC_API_KEY as string,
            cx: process.env.NEXT_PUBLIC_SEARCH_ENGINE_KEY as string,
            q: query,
            searchType: ["web", "image"],
          },
        }
      );
      response.data.items?.map((result: any) => {
        if (result.kind === "customsearch#result") {
          webResults.push(result);
          if (result.pagemap && result.pagemap.cse_image) {
            imageResults.push(result);
          } else {
            webResults.push(result);
          }
        }
      });
      setResults({ webResult: webResults, imageResult: imageResults });
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      setSearching(false);
    }
  };

  return (
    <DraggableWrapper>
      <div
        className={`${isOpenStyle} transition-opacity duration-150 w-[800px] border border-zinc-700 shadow-xl rounded-lg absolute bg-zinc-800 text-zinc-50`}
      >
        <ChromeHeader handleSearch={handleSearch} handleReset={handleReset} />
        {results.webResult.length === 0 || results.imageResult.length === 0 ? (
          <ChromeBody
            currentUrl={currentUrl}
            setCurrentUrl={setCurrentUrl}
            handleSearch={handleSearch}
          />
        ) : (
          <SearchResult results={results} />
        )}
      </div>
    </DraggableWrapper>
  );
};

export default Chrome;
