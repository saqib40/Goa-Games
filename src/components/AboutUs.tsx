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

  // Reusable component for the contact section to avoid duplicating code
  const ContactTeacherSection = ({ className = "" }) => (
    <div className={`mt-8 text-center md:text-left ${className}`}>
      <p className="text-slate-300 leading-relaxed mb-6 font-medium">
        To earn daily salary commission, more rewards, and up to ₹10,000 daily by working as an agent, get in touch with your mentor.
      </p>
      <a
        href="https://t.me/sonari_rahul"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-3 font-bold text-black bg-yellow-500 rounded-full hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(234,179,8,0.5)]"
      >
        Contact Mentor
      </a>
    </div>
  );

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8 lg:p-12 flex flex-col md:flex-row items-center gap-12 shadow-2xl">

          {/* Left Column Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-white mb-6">About Goa Games</h2>
            <p className="text-slate-400 leading-relaxed mb-4 text-lg">
              Goa Games is India's premier online gaming platform, offering a diverse range of exciting and fair games. Our mission is to provide a secure, trustworthy, and exhilarating gaming environment for all our players.
            </p>
            <p className="text-slate-400 leading-relaxed mb-6 text-lg">
              With state-of-the-art technology, dedicated customer support, and a vibrant community, we are committed to delivering the best online gaming experience. Join us for non-stop fun and the chance to win big!
            </p>

            {/* Contact section for desktop view */}
            <ContactTeacherSection className="hidden md:block" />
          </div>

          {/* Right Column Content */}
          <div className="md:w-1/2 flex flex-col items-center gap-8 w-full">
            {/* Agent Salary Table */}
            <div className="w-full max-w-md mx-auto">
              <div className="bg-slate-900 rounded-xl shadow-xl border border-slate-700 overflow-hidden">
                <h2 className="text-xl font-bold text-center py-4 bg-yellow-500 text-black">
                  Daily Member Active Salary
                </h2>
                <div className="grid grid-cols-2 text-center font-bold bg-slate-800 text-yellow-500 py-3 border-b border-slate-700">
                  <h3>Active Members</h3>
                  <h3>Agent Salary (₹)</h3>
                </div>
                <div className="text-center text-sm">
                  {salaryData.map((row, index) => (
                    <div key={index} className="grid grid-cols-2 py-3 border-b border-slate-800 hover:bg-slate-800/80 transition-colors text-slate-300">
                      <span className="font-semibold">{row.members}</span>
                      <span className="font-bold text-white">{row.salary.toLocaleString('en-IN')}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact section for mobile view */}
            <ContactTeacherSection className="block md:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
