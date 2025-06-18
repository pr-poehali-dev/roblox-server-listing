import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20"></div>

      <div className="relative z-10 text-center px-4 animate-slide-up">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-orbitron font-black mb-4">
            <span className="text-neon-cyan neon-text animate-pulse-neon">
              CAMMLE
            </span>
            <br />
            <span className="text-neon-purple neon-text">AIRPORT</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-inter max-w-2xl mx-auto">
            Лучший сервер аэропорта в Roblox. Реалистичные полёты, множество
            самолётов и невероятные приключения ждут вас!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-neon-cyan text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-neon-cyan/80 transition-all glow-hover neon-border flex items-center gap-2">
            <Icon name="Play" size={20} />
            ИГРАТЬ СЕЙЧАС
          </button>
          <button className="border-2 border-neon-purple text-neon-purple px-8 py-4 rounded-lg font-bold text-lg hover:bg-neon-purple hover:text-black transition-all glow-hover neon-border flex items-center gap-2">
            <Icon name="Users" size={20} />
            СПИСОК СЕРВЕРОВ
          </button>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-orbitron font-bold text-neon-green neon-text">
              1,247
            </div>
            <div className="text-sm text-gray-400">Игроков онлайн</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-orbitron font-bold text-neon-pink neon-text">
              156
            </div>
            <div className="text-sm text-gray-400">Активных серверов</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-orbitron font-bold text-neon-cyan neon-text">
              24/7
            </div>
            <div className="text-sm text-gray-400">Доступность</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-orbitron font-bold text-neon-purple neon-text">
              4.9★
            </div>
            <div className="text-sm text-gray-400">Рейтинг игры</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-neon-cyan" />
      </div>
    </section>
  );
};

export default Hero;
