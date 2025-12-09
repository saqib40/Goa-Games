import { ShieldCheck, CreditCard, Lock, Smartphone } from 'lucide-react';

const Footer = () => (
  <footer className="bg-slate-950 text-slate-400 py-10 border-t border-slate-900">
    <div className="container mx-auto px-4">

      {/* Trust Badges */}
      <div className="flex flex-wrap justify-center gap-8 mb-8 opacity-70">
        <div className="flex items-center gap-2">
          <ShieldCheck size={24} className="text-green-500" />
          <span className="text-sm font-semibold">100% Secure</span>
        </div>
        <div className="flex items-center gap-2">
          <CreditCard size={24} className="text-blue-500" />
          <span className="text-sm font-semibold">Fast Payments</span>
        </div>
        <div className="flex items-center gap-2">
          <Lock size={24} className="text-yellow-500" />
          <span className="text-sm font-semibold">Data Encrypted</span>
        </div>
        <div className="flex items-center gap-2">
          <Smartphone size={24} className="text-purple-500" />
          <span className="text-sm font-semibold">Mobile Friendly</span>
        </div>
      </div>

      <div className="text-center border-t border-slate-900 pt-8">
        <h1 className="text-2xl font-extrabold text-white mb-2">Goa<span className="text-yellow-500">Games</span></h1>
        <p className="text-sm mb-4">The ultimate destination for online gaming entertainment.</p>
        <p className="text-xs opacity-50">&copy; {new Date().getFullYear()} Goa Games. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);
export default Footer;