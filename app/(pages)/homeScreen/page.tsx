"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Win11HomeScreenWallpaper from "@/public/win11-homescreen.jpg";
import TaskBar from "@/app/(components)/taskbar";
import Desktop from "@/app/(components)/desktop";

const HomeScreen = () => {
  const router = useRouter();

  useEffect(() => {
    if (window) {
      const username = window.localStorage.getItem("username");
      if (username === "") router.push("/");
    }
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <Image
          src={Win11HomeScreenWallpaper}
          alt="win11 homescreen wallpaper"
          className="w-full h-full object-cover"
        />
      </div>
      <Desktop />
      <TaskBar />
    </div>
  );
};

export default HomeScreen;
