import { Ticket, Dice5, Gem, Plane, Star, Fish, Trophy, Gamepad2 } from 'lucide-react';
import type { ReactNode } from 'react';

interface IconWrapperProps {
    children: ReactNode;
  }

const IconWrapper = ({ children } : IconWrapperProps ) => (
    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sky-100 text-sky-500 mb-4">
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
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Top Played Games</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {games.map((game) => (
              <div key={game.name} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <IconWrapper>{game.icon}</IconWrapper>
                <h3 className="text-xl font-semibold text-gray-700">{game.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};
export default TopGames;