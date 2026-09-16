import type { FilterState } from "../types/type";

interface HandleFilterProps {
  onChange: (filter: FilterState) => void;
  filter: FilterState;
}
const FilterButtons = ({ filter, onChange }: HandleFilterProps) => {
  return (
    <section className="px-5">
      <div className="container py-2 md:py-5 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-5">
            <button
              className={`border-1 md:border-2 border-black uppercase py-1 px-3 md:py-2 md:px-4.5 min-w-20 font-bold cursor-pointer text-xs md:text-base ${filter === "all" ? "bg-black text-white" : ""}`}
              onClick={() => onChange("all")}
            >
              All
            </button>
            <button
              className={`border-1 md:border-2 border-black uppercase py-1  px-3 md:py-2 md:px-4.5 md:min-w-20 font-bold cursor-pointer text-xs md:text-base ${filter === "watched" ? "bg-black text-white" : ""}`}
              onClick={() => onChange("watched")}
            >
              Watched
            </button>
            <button
              className={`border-1 md:border-2 border-black uppercase py-1  px-3 md:py-2 md:px-4.5 md:min-w-20 font-bold cursor-pointer text-xs md:text-base ${filter === "remaining" ? "bg-black text-white" : ""}`}
              onClick={() => onChange("remaining")}
            >
              Remaining
            </button>
          </div>
          <p className="hidden md:block text-sm font-medium tracking-[1px]">
            5 FILMS
          </p>
        </div>
      </div>
    </section>
  );
};

export default FilterButtons;
