import type { IMovie } from "../types/type";

interface FooterProps {
  movies: IMovie[];
  onChange: React.Dispatch<React.SetStateAction<IMovie[]>>;
}

const Footer = ({ onChange, movies }: FooterProps) => {
  const resetList = movies.map((movie) => ({ ...movie, watched: false }));
  return (
    <footer className="px-5">
      <div className="container mx-auto border-t-1 md:border-t-2 border-gray-500 py-5">
        <div className="flex items-center justify-between">
          <p className="uppercase tracking-[1px] text-gray-500 font-bold text-xs md:text-base">
            Reset Movie List
          </p>
          <button
            onClick={() => onChange(resetList)}
            className="text-sm md:text-base cursor-pointer border-1 md:border-2 border-gray-600 py-1.5 md:py-2 px-4 font-medium text-gray-600 hover:bg-gray-600 hover:text-white transition-all"
          >
            Reset list
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
