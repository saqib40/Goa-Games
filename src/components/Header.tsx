const Header = () => (
  <header className="bg-sky-600 text-white shadow-md sticky top-0 z-50">
    <div className="container mx-auto flex items-center justify-between p-4">
      <h1 className="text-3xl font-bold tracking-tight">Goa Games</h1>
      <nav className="space-x-4">
        <a href="https://www.goavideo.com/#/register?invitationCode=231867795710" target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-2 font-semibold text-sky-600 bg-white rounded-lg hover:bg-gray-200 transition-colors duration-300">
              Register
            </button>
        </a>
      </nav>
    </div>
  </header>
);
export default Header;