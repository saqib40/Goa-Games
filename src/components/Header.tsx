const Header = () => (
  <header className="bg-slate-900/90 backdrop-blur-md text-slate-100 shadow-lg sticky top-0 z-50 border-b border-slate-800">
    <div className="container mx-auto flex items-center justify-between p-5">
      <h1 className="text-3xl font-extrabold tracking-tight text-white">
        Goa<span className="text-yellow-500">Games</span>
      </h1>
      <nav>
        <a href="https://www.goavideo.com/#/register?invitationCode=231867795710" target="_blank" rel="noopener noreferrer">
          <button className="px-6 py-2 text-lg font-bold text-black bg-yellow-500 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(234,179,8,0.5)]">
            Register
          </button>
        </a>
      </nav>
    </div>
  </header>
);
export default Header;
