import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Link } from "react-router-dom";
import GameFeatures from "@/components/GameFeatures";
import ServerList from "@/components/ServerList";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <title>
        Cammle Airport - Список серверов | Реалистичный аэропорт Roblox
      </title>
      <Header />
      <Hero />

      {/* Quick Navigation */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-orbitron font-bold mb-8 text-white">
            Быстрый переход
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              to="/servers"
              className="bg-card border border-neon-cyan/30 rounded-lg p-6 hover:border-neon-cyan transition-all glow-hover"
            >
              <h3 className="text-xl font-bold text-neon-cyan mb-2">Серверы</h3>
              <p className="text-gray-400">Найди активные серверы</p>
            </Link>

            <Link
              to="/about"
              className="bg-card border border-neon-purple/30 rounded-lg p-6 hover:border-neon-purple transition-all glow-hover"
            >
              <h3 className="text-xl font-bold text-neon-purple mb-2">
                О игре
              </h3>
              <p className="text-gray-400">Узнай больше о функциях</p>
            </Link>

            <Link
              to="/stats"
              className="bg-card border border-neon-green/30 rounded-lg p-6 hover:border-neon-green transition-all glow-hover"
            >
              <h3 className="text-xl font-bold text-neon-green mb-2">
                Статистика
              </h3>
              <p className="text-gray-400">Посмотри игровую статистику</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
