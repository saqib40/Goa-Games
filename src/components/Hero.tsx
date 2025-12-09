const Hero = () => (
  <section className="relative bg-gradient-to-b from-slate-900 to-black text-white py-20 lg:py-32 px-4 overflow-hidden">
    {/* Background Pattern Overlay */}
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10">

      {/* Text Content */}
      <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
        <h2 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
          Welcome to the <br />
          <span className="text-yellow-500">Ultimate Gaming</span> Experience
        </h2>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          Discover a world of thrilling games, big wins, and endless entertainment. Join the Goa Games community today and start winning!
        </p>
        <a href="https://www.goavideo.com/#/register?invitationCode=231867795710" target="_blank" rel="noopener noreferrer">
          <button className="px-10 py-4 text-xl font-bold text-black bg-yellow-500 rounded-full hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(234,179,8,0.6)]">
            Play Now
          </button>
        </a>
      </div>

      {/* Hero Graphic / Phone Mockup Placeholder */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end">
        <div className="relative w-72 h-[540px] border-4 border-slate-800 rounded-[3rem] bg-slate-900 shadow-2xl flex items-center justify-center overflow-hidden">
          {/* Screen content */}
          <div className="absolute inset-0 bg-slate-900 flex flex-col p-4 pt-10 overflow-hidden">

            {/* Header/Status Bar Mock */}
            <div className="flex justify-between items-center mb-4 px-1">
              <h3 className="text-sm font-bold text-yellow-500">Goa Games</h3>
              <div className="text-[10px] text-slate-400">9:41 AM</div>
            </div>

            {/* Wallet Card */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-4 border border-slate-700 shadow-md mb-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-500/10 rounded-full blur-xl -mr-8 -mt-8"></div>
              <div className="flex justify-between items-start mb-2">
                <div className="text-xs text-slate-400">Username</div>
                <div className="text-xs font-bold text-white">User_King</div>
              </div>
              <div className="text-xs text-slate-400 mb-1">Total Balance</div>
              <div className="text-2xl font-bold text-yellow-500">₹ 24,500.00</div>
            </div>

            {/* Live Game Section */}
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 mb-4 relative">
              {/* LIVE Badge */}
              <div className="absolute top-2 right-2 flex items-center gap-1 bg-red-500/20 px-2 py-0.5 rounded text-[10px] font-bold text-red-500">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
                LIVE
              </div>

              <div className="text-xs font-bold text-slate-300 mb-3">Color Prediction</div>

              {/* Game Circles Grid */}
              <div className="flex justify-between gap-2 mb-2">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-700 shadow-lg shadow-green-500/20 flex items-center justify-center text-[10px] font-bold text-white">1x</div>
                  <span className="text-[10px] text-slate-400">Green</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 shadow-lg shadow-purple-500/20 flex items-center justify-center text-[10px] font-bold text-white">4.5x</div>
                  <span className="text-[10px] text-slate-400">Violet</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-700 shadow-lg shadow-red-500/20 flex items-center justify-center text-[10px] font-bold text-white flex-col leading-none">
                    <span>2x</span>
                  </div>
                  <span className="text-[10px] text-slate-400">Red</span>
                </div>
              </div>
            </div>

            {/* Betting Mock */}
            <div className="bg-slate-800 rounded-xl p-3 border border-slate-700 flex-grow">
              <div className="text-xs font-bold text-slate-300 mb-2">Place Your Bet</div>

              {/* Amount Selector */}
              <div className="flex justify-between gap-1 mb-3">
                {['100', '500', '1K', '5K'].map(amt => (
                  <div key={amt} className="bg-slate-900 rounded px-2 py-1 text-[10px] text-slate-400 border border-slate-700 hover:border-yellow-500 cursor-pointer text-center flex-1">
                    {amt}
                  </div>
                ))}
              </div>

              {/* Big/Small Toggle */}
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-lg p-2 flex items-center justify-center text-xs font-bold text-black shadow-lg">
                  Big
                </div>
                <div className="bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg p-2 flex items-center justify-center text-xs font-bold text-white shadow-lg border border-slate-500">
                  Small
                </div>
              </div>

              <div className="mt-3 text-[10px] text-center text-slate-500">
                Win Streak: <span className="text-green-500">4x</span>
              </div>
            </div>

          </div>

          {/* Phone Notch/Details */}
          <div className="absolute top-0 w-32 h-6 bg-slate-800 rounded-b-xl z-20"></div>
        </div>
      </div>
    </div>
  </section>
);
export default Hero;