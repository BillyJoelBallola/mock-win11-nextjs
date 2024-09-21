"use client";

import Image from "next/image";
import Win11LockscreenWallpaper from "@/public/win11-lockscreen.jpg";
import ProfileImg from "@/public/profilePicture.jpg";
import ProfileGIF from "@/public/profile.gif";
import { useEffect, useState } from "react";
import { useUser } from "@/app/hooks/useUser";
import { useRouter } from "next/navigation";
import { Globe, LoaderCircle, PersonStanding, Power } from "lucide-react";

const LockScreen = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const { dispatch } = useUser();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (username !== "") {
      dispatch({ type: "setUsername", payload: username });
    }
  };

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        router.push("/homeScreen");
      }, 1000);
    }
  }, [loading]);

  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <div className="absolute bottom-0 top-0 left-0 right-0">
        <Image
          src={Win11LockscreenWallpaper}
          alt="win11 lockscreen wallpaper"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-zinc-900/40 backdrop-blur-sm" />
      <div className="absolute size-full grid place-items-center">
        {loading ? (
          <LoaderCircle className="text-zinc-50 animate-spin" />
        ) : (
          <form
            onSubmit={handleLogin}
            className="flex flex-col gap-4 items-center text-zinc-50"
          >
            <div className="size-28 rounded-full overflow-hidden">
              <Image src={ProfileGIF} alt="profile" className="w-full h-full" />
            </div>
            <input
              type="text"
              placeholder="Enter Your Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-transparent text-2xl text-center font-semibold outline-none"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="mt-4 bg-zinc-900/30 p-2 rounded-lg text-sm w-[16rem] border-b-2 border-b-zinc-400 outline-none"
              required
            />
            <span className="mt-4 text-sm cursor-pointer">I forgot my PIN</span>
            <button className="hidden" />
          </form>
        )}
      </div>
      {!loading && (
        <div className="absolute bottom-8 right-10">
          <div className="text-zinc-50 flex items-center gap-4">
            <button className="text-xs">ENG</button>
            <button>
              <Globe className="size-5" />
            </button>
            <button>
              <PersonStanding className="size-5" />
            </button>
            <button>
              <Power className="size-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LockScreen;
