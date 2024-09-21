import { LucideIcon } from "lucide-react";

const TaskBarInfo = ({ icon: Icon }: { icon: LucideIcon }) => {
  return (
    <button className="cursor-default px-1 py-2 hover:bg-zinc-800 duration-150">
      <Icon className="size-4" />
    </button>
  );
};

export default TaskBarInfo;
