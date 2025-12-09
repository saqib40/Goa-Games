const Support = () => (
  <section className="py-20 bg-slate-900 border-t border-slate-800">
    <div className="container mx-auto text-center px-4">
      <h2 className="text-3xl font-bold text-white mb-4">Dedicated Support</h2>
      <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-lg">
        Get exclusive access and personalized help from our team. We are here to guide you to success.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        <a href="https://t.me/+uGPNJyrgLhQ0MGFl" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto px-8 py-4 font-bold text-black bg-yellow-500 rounded-xl hover:bg-yellow-400 transition-all duration-300 shadow-[0_0_15px_rgba(234,179,8,0.4)] transform hover:-translate-y-1">
            Join VIP Group
          </button>
        </a>
        <a href="https://t.me/sonari_rahul" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto px-8 py-4 font-bold text-yellow-500 bg-transparent border-2 border-yellow-500 rounded-xl hover:bg-yellow-500/10 transition-all duration-300 transform hover:-translate-y-1">
            Contact Your Mentor
          </button>
        </a>
      </div>
    </div>
  </section>
);
export default Support;