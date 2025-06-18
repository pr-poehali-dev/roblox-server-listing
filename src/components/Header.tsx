import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-cyber-dark backdrop-blur-md border-b border-neon-cyan/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-neon-cyan rounded-lg flex items-center justify-center neon-border">
              <Icon name="Zap" size={20} className="text-black" />
            </div>
            <h1 className="text-xl font-orbitron font-bold text-neon-cyan neon-text">
              ROBLOX SERVERS
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/servers"
              className="text-sm font-medium hover:text-neon-cyan transition-colors glow-hover"
            >
              Серверы
            </Link>
            <Link
              to="/filters"
              className="text-sm font-medium hover:text-neon-purple transition-colors glow-hover"
            >
              Фильтры
            </Link>
            <Link
              to="/stats"
              className="text-sm font-medium hover:text-neon-green transition-colors glow-hover"
            >
              Статистика
            </Link>
            <Link
              to="/help"
              className="text-sm font-medium hover:text-neon-pink transition-colors glow-hover"
            >
              Помощь
            </Link>
          </nav>

          <button className="md:hidden">
            <Icon name="Menu" size={24} className="text-neon-cyan" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
