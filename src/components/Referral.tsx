const Referral = () => (
    <section className="py-12 bg-white">
        <div className="container mx-auto px-4 flex justify-center">
            <div className="bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-xl shadow-2xl p-6 w-full max-w-md">
                <h3 className="text-2xl font-bold text-center mb-4">Your Referral Code</h3>
                <div className="bg-white/20 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between items-center text-lg">
                        <span className="font-medium opacity-80">App Name:</span>
                        <span className="font-bold">Goa Games</span>
                    </div>
                    <div className="flex justify-between items-center text-lg">
                        <span className="font-medium opacity-80">Referral Code:</span>
                        <span className="font-mono bg-sky-800 text-sky-100 px-3 py-1 rounded">GOA2024WIN</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
export default Referral;