import { Ticket, Dice5, Gem, Plane, Star, Fish, Trophy, Gamepad2 } from 'lucide-react';
import type { ReactNode } from 'react';

interface IconWrapperProps {
  children: ReactNode;
}

const IconWrapper = ({ children }: IconWrapperProps) => (
  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-700/50 text-yellow-400 mb-4 shadow-[0_0_10px_rgba(250,204,21,0.3)] transition-all group-hover:bg-yellow-500 group-hover:text-black group-hover:scale-110 duration-300">
    {children}
  </div>
);

const TopGames = () => {
  const games = [
    { name: 'Lottery', icon: <Ticket size={32} /> },
    { name: 'Casino', icon: <Dice5 size={32} /> },
    { name: 'Slots', icon: <Gem size={32} /> },
    { name: 'Aviator', icon: <Plane size={32} /> },
    { name: 'Popular', icon: <Star size={32} /> },
    { name: 'PVC', icon: <Gamepad2 size={32} /> },
    { name: 'Fishing', icon: <Fish size={32} /> },
    { name: 'Sports', icon: <Trophy size={32} /> },
  ];

  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-white mb-12 relative inline-block">
          Top Played Games
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-yellow-500 rounded-full"></div>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {games.map((game) => (
            <a
              key={game.name}
              href="https://www.goavideo.com/#/register?invitationCode=231867795710"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-yellow-500/50 hover:shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <IconWrapper>{game.icon}</IconWrapper>
              <h3 className="text-xl font-bold text-slate-200 group-hover:text-white transition-colors">{game.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TopGames;
