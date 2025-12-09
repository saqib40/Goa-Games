import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const Referral = () => {
    const [copied, setCopied] = useState(false);
    const referralCode = "231867795710";

    const handleCopy = () => {
        navigator.clipboard.writeText(referralCode);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <section className="py-20 bg-slate-900 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]">
            <div className="container mx-auto px-4 flex justify-center">
                {/* Main Card - Darker, cleaner look matching the image */}
                <div className="bg-[#1e2330]/90 backdrop-blur-sm border border-white/10 rounded-[2rem] shadow-2xl p-8 w-full max-w-md relative overflow-hidden">

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-center mb-8 text-yellow-400 tracking-wide">
                        Exclusive Referral Code
                    </h3>

                    {/* Inner Dark Container */}
                    <div className="bg-[#11141d] rounded-2xl p-6 space-y-6 shadow-inner">

                        {/* Platform Row */}
                        <div className="flex justify-between items-center border-b border-gray-700/50 pb-4">
                            <span className="font-medium text-gray-400 text-sm">Platform</span>
                            <span className="font-bold text-white tracking-wide text-lg">Goa Games</span>
                        </div>

                        {/* Code Section */}
                        <div className="flex flex-col space-y-3">
                            <span className="font-medium text-gray-400 text-sm">Your Invitation Code</span>

                            {/* Input Box Look */}
                            <div
                                onClick={handleCopy}
                                className="flex items-center justify-between bg-[#1c2230] rounded-xl p-4 border border-slate-700/50 shadow-sm relative group cursor-pointer hover:border-yellow-500/30 transition-all duration-200"
                            >
                                <input
                                    readOnly
                                    value={referralCode}
                                    className="bg-transparent font-mono text-2xl font-bold text-yellow-500 tracking-widest outline-none w-full cursor-pointer selection:bg-yellow-500/30"
                                />

                                {/* Copy Button/Indicator */}
                                <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-300 ${copied ? 'bg-green-500/10 text-green-400' : 'bg-slate-800/50 text-slate-400 group-hover:text-white group-hover:bg-slate-700'}`}>
                                    {copied ? <Check size={16} /> : <Copy size={16} />}
                                    <span className="text-xs font-bold uppercase tracking-wider">
                                        {copied ? 'Copied!' : 'Copy'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Text */}
                    <p className="text-center text-slate-500 text-xs mt-6 px-4 leading-relaxed">
                        Use this code during registration to unlock exclusive bonuses and rewards.
                    </p>
                </div>
            </div>
        </section>
    );
};
export default Referral;