const Hero = () => (
  <section className="bg-sky-500 text-white text-center py-20 px-4">
    <div className="container mx-auto">
      <h2 className="text-5xl font-extrabold mb-4 leading-tight">Welcome to the Ultimate Gaming Experience</h2>
      <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
        Discover a world of thrilling games, big wins, and endless entertainment. Join the Goa Games community today!
      </p>
      <a href="https://www.goavideo.com/#/register?invitationCode=231867795710" target="_blank" rel="noopener noreferrer">
        <button className="px-8 py-3 font-bold text-sky-600 bg-white rounded-full hover:bg-gray-200 transition-transform duration-300 transform hover:scale-105">
          Play Now
        </button>
      </a>
    </div>
  </section>
);
export default Hero;