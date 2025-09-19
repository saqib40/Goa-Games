const AboutUs = () => {
  const salaryData = [
    { members: 3, salary: 300 },
    { members: 5, salary: 600 },
    { members: 12, salary: 1500 },
    { members: 20, salary: 2500 },
    { members: 35, salary: 5000 },
    { members: 60, salary: 10000 },
    { members: 80, salary: 15000 },
    { members: 130, salary: 20000 },
    { members: 250, salary: 30000 },
    { members: 400, salary: 40000 },
    { members: 700, salary: 70000 },
    { members: 1000, salary: 100000 },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        
        {/* Original About Us Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Goa Games</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Goa Games is India's premier online gaming platform, offering a diverse range of exciting and fair games. Our mission is to provide a secure, trustworthy, and exhilarating gaming environment for all our players.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            With state-of-the-art technology, dedicated customer support, and a vibrant community, we are committed to delivering the best online gaming experience. Join us for non-stop fun and the chance to win big!
          </p>

          {/* Contact Teacher Section - MOVED HERE */}
          <div className="mt-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                  To earn daily salary commission, more rewards, and up to ₹10,000 daily by working as an agent, get in touch with your mentor.
              </p>
              <a 
                href="https://t.me/sonari_rahul" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 font-bold text-white bg-sky-500 rounded-full hover:bg-sky-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                  Contact Teacher
              </a>
          </div>
        </div>

        {/* New Agent Salary Section */}
        <div className="md:w-1/2 flex flex-col items-center gap-8 w-full">
          {/* Agent Salary Table */}
          <div className="w-full max-w-md mx-auto">
            <div className="bg-gradient-to-br from-sky-500 to-sky-700 rounded-xl shadow-2xl text-white overflow-hidden">
              <h2 className="text-2xl font-bold text-center py-4 bg-black bg-opacity-20">
                Daily Member Active Salary
              </h2>
              <div className="grid grid-cols-2 text-center font-semibold bg-sky-800 bg-opacity-50 py-2">
                <h3>Active Members</h3>
                <h3>Agent Salary (₹)</h3>
              </div>
              <div className="text-center text-sm">
                {salaryData.map((row, index) => (
                  <div key={index} className="grid grid-cols-2 py-2 border-b border-sky-500 border-opacity-30 last:border-b-0">
                    <span className="font-medium">{row.members}</span>
                    <span className="font-semibold">{row.salary.toLocaleString('en-IN')}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
export default AboutUs;

