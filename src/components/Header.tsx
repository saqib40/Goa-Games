const Header = () => (
  <header className="bg-sky-600 text-white shadow-md sticky top-0 z-50">
    <div className="container mx-auto flex items-center justify-between p-5">
      <h1 className="text-4xl font-bold tracking-tight">Goa Games</h1>
      <nav>
        <a href="https://www.goavideo.com/#/register?invitationCode=231867795710" target="_blank" rel="noopener noreferrer">
            <button className="px-5 py-2 text-lg font-semibold text-sky-600 bg-white rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
              Register
            </button>
        </a>
      </nav>
    </div>
  </header>
);
export default Header;
