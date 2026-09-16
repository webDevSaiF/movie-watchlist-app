const Header = () => {
  return (
    <header className="bg-base-100 shadow-sm px-5">
      <nav className="navbar container mx-auto">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-lg md:text-2xl font-bold">Movie Index</h2>
          <p className="text-xs md:text-sm mt-2 font-bold uppercase">
            Watchlist
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
