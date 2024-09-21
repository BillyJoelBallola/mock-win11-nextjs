import FolderIcon from "@/public/desktop-folder-icon.png";
import ChromeIcon from "@/public/chrome-icon.png";
import RecycleBin from "@/public/recyclebin-icon.png";
import Edge from "@/public/edge-icon.png";
import VSCodeIcon from "@/public/vscode-icon.png";
import PhotoshopIcon from "@/public/photoshop-icon.png";

import DesktopApp from "./DesktopApp";
import Sleep from "../sleep";
import Folder from "../folder";
import Photoshop from "../photoshop";
import VSCode from "../vscode";
import Chrome from "../chrome";

const desktopIcons = [
  {
    imgSrc: RecycleBin,
    appname: "Recyle Bin",
    code: "bin",
  },
  {
    imgSrc: ChromeIcon,
    appname: "Google Chrome",
    code: "chrome",
  },
  {
    imgSrc: Edge,
    appname: "Mircosoft Edge",
    code: "edge",
  },
  {
    imgSrc: FolderIcon,
    appname: "My Documents",
    code: "folder",
  },
  {
    imgSrc: VSCodeIcon,
    appname: "Visual Studio Code",
    code: "vscode",
  },
  {
    imgSrc: PhotoshopIcon,
    appname: "Adobe Photoshop",
    code: "photoshop",
  },
];

const Desktop = () => {
  return (
    <>
      <Sleep />

      <div className="relative h-full w-full cursor-default">
        <div className="absolute top-1 bottom-0 left-1 right-1">
          <ul className="grid gap-4">
            {desktopIcons.map((app, idx) => (
              <li key={idx}>
                <DesktopApp
                  code={app.code}
                  appname={app.appname}
                  imgSrc={app.imgSrc}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full h-[90%] grid place-items-center">
          <Folder />
          <Photoshop />
          <VSCode />
          <Chrome />
        </div>
      </div>
    </>
  );
};

export default Desktop;
