import Icon from "@/components/ui/icon";

const ServerList = () => {
  const servers = [
    {
      id: 1,
      name: "Cammle Airport EU-1",
      players: "47/50",
      ping: 23,
      status: "online",
      region: "Europe",
    },
    {
      id: 2,
      name: "Cammle Airport US-West",
      players: "43/50",
      ping: 67,
      status: "online",
      region: "North America",
    },
    {
      id: 3,
      name: "Cammle Airport ASIA-1",
      players: "50/50",
      ping: 124,
      status: "full",
      region: "Asia",
    },
    {
      id: 4,
      name: "Cammle Airport EU-2",
      players: "31/50",
      ping: 28,
      status: "online",
      region: "Europe",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "text-neon-green";
      case "full":
        return "text-neon-pink";
      default:
        return "text-gray-400";
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-black/20">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16">
          <span className="text-neon-purple neon-text">СПИСОК</span>
          <br />
          <span className="text-white">СЕРВЕРОВ</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4">
            {servers.map((server) => (
              <div
                key={server.id}
                className="bg-card border border-gray-800 rounded-lg p-6 hover:border-neon-purple/50 transition-all duration-300 glow-hover"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 rounded-full bg-neon-green animate-pulse"></div>
                    <div>
                      <h3 className="text-lg font-orbitron font-bold text-white">
                        {server.name}
                      </h3>
                      <p className="text-sm text-gray-400">{server.region}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <Icon
                        name="Users"
                        size={16}
                        className="text-neon-cyan mx-auto mb-1"
                      />
                      <div className="text-sm font-bold text-white">
                        {server.players}
                      </div>
                    </div>

                    <div className="text-center">
                      <Icon
                        name="Wifi"
                        size={16}
                        className="text-neon-green mx-auto mb-1"
                      />
                      <div className="text-sm font-bold text-white">
                        {server.ping}ms
                      </div>
                    </div>

                    <div className="text-center">
                      <div
                        className={`text-sm font-bold uppercase ${getStatusColor(server.status)}`}
                      >
                        {server.status === "online" ? "Онлайн" : "Полный"}
                      </div>
                    </div>

                    <button
                      className="bg-neon-cyan text-black px-6 py-2 rounded-lg font-bold text-sm hover:bg-neon-cyan/80 transition-all glow-hover neon-border disabled:opacity-50"
                      disabled={server.status === "full"}
                    >
                      {server.status === "full" ? "ПОЛНЫЙ" : "ИГРАТЬ"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="border-2 border-neon-purple text-neon-purple px-8 py-3 rounded-lg font-bold hover:bg-neon-purple hover:text-black transition-all glow-hover neon-border">
              ПОКАЗАТЬ ВСЕ СЕРВЕРЫ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServerList;
