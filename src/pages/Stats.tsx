import Header from "@/components/Header";
import Icon from "@/components/ui/icon";

const Stats = () => {
  const stats = [
    {
      label: "Активных игроков",
      value: "1,247",
      icon: "Users",
      color: "text-neon-cyan",
    },
    {
      label: "Серверов онлайн",
      value: "8",
      icon: "Server",
      color: "text-neon-green",
    },
    {
      label: "Активных рейсов",
      value: "43",
      icon: "Plane",
      color: "text-neon-purple",
    },
    {
      label: "Персонала на смене",
      value: "67",
      icon: "UserCheck",
      color: "text-neon-pink",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <title>Статистика - Cammle Airport</title>
      <Header />
      <div className="pt-32 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-orbitron font-bold text-center mb-16">
            <span className="text-neon-green neon-text">СТАТИСТИКА</span>
            <br />
            <span className="text-white">ИГРЫ</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card border border-gray-800 rounded-lg p-6 text-center hover:border-neon-cyan/50 transition-all glow-hover"
              >
                <Icon
                  name={stat.icon as any}
                  size={32}
                  className={`${stat.color} mx-auto mb-4`}
                />
                <div
                  className={`text-3xl font-orbitron font-bold ${stat.color} mb-2`}
                >
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
