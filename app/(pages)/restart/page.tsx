"use client";

import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Restart() {
  const route = useRouter();

  useEffect(() => {
    setTimeout(() => {
      route.push("/lockScreen");
    }, 5000);
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden bg-zinc-800 grid place-items-center">
      <div className="text-zinc-50 flex flex-col items-center gap-4">
        <LoaderCircle className="animate-spin size-20" />
        <span className="text-xl">Restarting...</span>
      </div>
    </div>
  );
}

export default Restart;
