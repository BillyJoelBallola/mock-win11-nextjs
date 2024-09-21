import { Plus, Search } from "lucide-react";

type ChromeBodyProps = {
  handleSearch: (e: React.FormEvent<HTMLFormElement>) => void;
};

const ChromeBody = ({ handleSearch }: ChromeBodyProps) => {
  return (
    <div className="bg-zinc-700 grid place-items-center h-[500px]">
      <div className="grid place-items-center gap-8">
        <h1 className="text-6xl font-semibold">Google</h1>
        <form
          onSubmit={handleSearch}
          className="w-[500px] bg-zinc-50 rounded-full py-2 px-4 flex items-center gap-2"
        >
          <button type="submit">
            <Search className="size-4 text-zinc-500" />
          </button>
          <input
            type="search"
            name="query"
            placeholder="Search Goofle or type a URL"
            className="outline-none text-zinc-900 w-full"
          />
        </form>
        <div className="flex items-center">
          <button className="rounded-full size-10 bg-blue-500/50">
            <Plus className="size-5 mx-auto" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChromeBody;
