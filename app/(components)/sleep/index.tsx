"use client";

import { useTaskbar } from "@/app/hooks/useTaskbar";
import Image from "next/image";

const Sleep = () => {
  const { state, dispatch } = useTaskbar();

  return (
    <div
      onDoubleClick={() => dispatch({ type: "toggleSleep" })}
      className={`${
        state.sleep ? "opacity-100 z-50" : "opacity-0 z-0"
      } duration-300 absolute inset-0 overflow-hidden grid place-items-center bg-zinc-800`}
    >
      <div className="grid gap-4">
        <Image
          src={
            "https://media1.tenor.com/m/Cj0YvuE94eoAAAAC/onimai-anime-sleep.gif"
          }
          alt="sleeping"
          width={300}
          height={300}
          className="size-auto"
        />
        <span className="text-center text-zinc-600 text-sm">
          Double click to return to desktop
        </span>
      </div>
    </div>
  );
};

export default Sleep;
