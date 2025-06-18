import Icon from "@/components/ui/icon";

const GameFeatures = () => {
  const features = [
    {
      icon: "Plane",
      title: "Реалистичные полёты",
      description:
        "Управляйте настоящими самолётами с детализированной физикой полёта",
      color: "text-neon-cyan",
    },
    {
      icon: "Building2",
      title: "Огромный аэропорт",
      description:
        "Исследуйте масштабный аэропорт с множеством терминалов и взлётных полос",
      color: "text-neon-purple",
    },
    {
      icon: "Users",
      title: "Мультиплеер",
      description:
        "Играйте с друзьями, создавайте команды и соревнуйтесь с другими пилотами",
      color: "text-neon-green",
    },
    {
      icon: "Trophy",
      title: "Достижения",
      description:
        "Зарабатывайте награды, повышайте ранг и становитесь лучшим пилотом",
      color: "text-neon-pink",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16">
          <span className="text-neon-cyan neon-text">ОСОБЕННОСТИ</span>
          <br />
          <span className="text-white">ИГРЫ</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-gray-800 rounded-lg p-6 hover:border-neon-cyan/50 transition-all duration-300 glow-hover"
            >
              <div
                className={`w-12 h-12 rounded-lg ${feature.color} bg-current/10 flex items-center justify-center mb-4 neon-border`}
              >
                <Icon
                  name={feature.icon as any}
                  size={24}
                  className={feature.color}
                />
              </div>
              <h3 className="text-xl font-orbitron font-bold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameFeatures;
