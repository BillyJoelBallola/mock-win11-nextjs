import {
  ArrowDownUp,
  ChevronDown,
  CirclePlus,
  ClipboardList,
  Ellipsis,
  Files,
  FolderPen,
  Menu,
  Scissors,
  SquareArrowOutUpRight,
  Trash2,
} from "lucide-react";

const Divider = () => {
  return <div className="h-6 w-[1px] bg-zinc-600" />;
};

const FolderTools = () => {
  return (
    <div className="w-full flex items-center gap-4 bg-zinc-700 px-2 py-3 text-xs">
      <button className="flex items-center gap-1">
        <div className="flex items-center gap-1">
          <CirclePlus className="size-4" />
          <span>New</span>
        </div>
        <ChevronDown className="size-3" />
      </button>

      <Divider />

      <div className="flex items-center gap-4">
        <button>
          <Scissors className="size-4" />
        </button>
        <button>
          <Files className="size-4" />
        </button>
        <button>
          <ClipboardList className="size-4" />
        </button>
        <button>
          <FolderPen className="size-4" />
        </button>
        <button>
          <SquareArrowOutUpRight className="size-4" />
        </button>
        <button>
          <Trash2 className="size-4" />
        </button>
      </div>

      <Divider />

      <div className="flex items-center gap-4">
        <button className="flex items-center gap-1">
          <div className="flex items-center gap-1">
            <ArrowDownUp className="size-4" />
            <span>Sort</span>
          </div>
          <ChevronDown className="size-3" />
        </button>
        <button className="flex items-center gap-1">
          <div className="flex items-center gap-1">
            <Menu className="size-4" />
            <span>View</span>
          </div>
          <ChevronDown className="size-3" />
        </button>
      </div>

      <Divider />

      <button>
        <Ellipsis className="size-4" />
      </button>
    </div>
  );
};

export default FolderTools;
