const AboutUs = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Goa Games</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Goa Games is India's premier online gaming platform, offering a diverse range of exciting and fair games. Our mission is to provide a secure, trustworthy, and exhilarating gaming environment for all our players.
        </p>
        <p className="text-gray-600 leading-relaxed">
          With state-of-the-art technology, dedicated customer support, and a vibrant community, we are committed to delivering the best online gaming experience. Join us for non-stop fun and the chance to win big!
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center">
          {/* I've replaced the generic shield icon with your image here. */}
          <img src="ok.png" alt="Goa Games Illustration" className="max-w-xs md:max-w-sm rounded-2xl shadow-xl transform transition-transform duration-300 hover:scale-105" />
      </div>
    </div>
  </section>
);
export default AboutUs;