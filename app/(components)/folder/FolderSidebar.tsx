import {
  ArrowDownToLine,
  ChevronDown,
  ChevronRight,
  File,
  Image,
  LucideIcon,
  Star,
  TvMinimal,
} from "lucide-react";
import { useState } from "react";

const quickAccessLink = [
  {
    label: "Desktop",
    code: "desktop",
    Icon: TvMinimal as LucideIcon,
  },
  {
    label: "Download",
    code: "download",
    Icon: ArrowDownToLine as LucideIcon,
  },
  {
    label: "Document",
    code: "document",
    Icon: File as LucideIcon,
  },
  {
    label: "Pictures",
    code: "pictures",
    Icon: Image as LucideIcon,
  },
];

const FolderSidebar = () => {
  const [sidebar, setSidebar] = useState({
    quickAccess: false,
    thisPC: false,
    network: false,
  });

  const toggleSublinks = (code: keyof typeof sidebar) => {
    setSidebar((curr) => ({
      ...curr,
      [code]: !curr[code],
    }));
  };

  return (
    <aside className="border-r border-zinc-700 py-4">
      <ul className="grid gap-4">
        <li className="text-sm">
          <button
            className="pl-2 py-1 flex items-center gap-2 w-full hover:bg-zinc-700"
            onClick={() => toggleSublinks("quickAccess")}
          >
            {sidebar.quickAccess ? (
              <ChevronDown className="size-4" />
            ) : (
              <ChevronRight className="size-4" />
            )}
            <div className="flex items-center gap-2">
              <Star className="size-4 text-yellow-500" fill="#eab308" />
              <span>Quick Access</span>
            </div>
          </button>
          {sidebar.quickAccess && (
            <ul className="grid">
              {quickAccessLink.map((item) => (
                <li key={item.code}>
                  <button className="pl-8 py-1 flex items-center gap-2 hover:bg-zinc-700 w-full">
                    <item.Icon className="size-4" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </li>

        <li className="text-sm">
          <button>This PC</button>
        </li>

        <li className="text-sm">
          <button>Network</button>
        </li>
      </ul>
    </aside>
  );
};

export default FolderSidebar;
