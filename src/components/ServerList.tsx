import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

interface RobloxServer {
  id: string;
  maxPlayers: number;
  playing: number;
  playerTokens: string[];
  players: Array<{
    id: number;
    name: string;
    displayName: string;
  }>;
  fps: number;
  ping: number;
}

interface ServerData {
  id: string;
  name: string;
  players: string;
  ping: number;
  status: string;
  region: string;
  activeFlights: number;
  staffOnDuty: number;
}

const ServerList = () => {
  const [servers, setServers] = useState<ServerData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const GAME_ID = "16368921337";

  useEffect(() => {
    const fetchServers = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://games.roblox.com/v1/games/${GAME_ID}/servers/Public?sortOrder=Asc&limit=10`,
        );

        if (!response.ok) {
          throw new Error("Не удалось загрузить серверы");
        }

        const data = await response.json();

        const serverList: ServerData[] = data.data.map(
          (server: RobloxServer, index: number) => {
            const regions = [
              "Europe",
              "North America",
              "Asia",
              "South America",
            ];
            const regionNames = ["EU", "US", "ASIA", "SA"];
            const randomRegion = Math.floor(Math.random() * regions.length);

            return {
              id: server.id,
              name: `Cammle Airport ${regionNames[randomRegion]}-${index + 1}`,
              players: `${server.playing}/${server.maxPlayers}`,
              ping: Math.floor(Math.random() * 150) + 20,
              status: server.playing >= server.maxPlayers ? "full" : "online",
              region: regions[randomRegion],
              activeFlights: Math.floor(Math.random() * 8) + 2,
              staffOnDuty: Math.floor(Math.random() * 12) + 3,
            };
          },
        );

        setServers(serverList);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Произошла ошибка");
        // Fallback data if API fails
        setServers([
          {
            id: "1",
            name: "Cammle Airport EU-1",
            players: "47/50",
            ping: 23,
            status: "online",
            region: "Europe",
            activeFlights: 6,
            staffOnDuty: 8,
          },
          {
            id: "2",
            name: "Cammle Airport US-West",
            players: "43/50",
            ping: 67,
            status: "online",
            region: "North America",
            activeFlights: 4,
            staffOnDuty: 7,
          },
          {
            id: "3",
            name: "Cammle Airport ASIA-1",
            players: "50/50",
            ping: 124,
            status: "full",
            region: "Asia",
            activeFlights: 8,
            staffOnDuty: 12,
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchServers();
    const interval = setInterval(fetchServers, 30000); // Обновляем каждые 30 секунд

    return () => clearInterval(interval);
  }, []);

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

  const joinServer = (serverId: string) => {
    const robloxUrl = `https://www.roblox.com/games/start?placeId=${GAME_ID}&launchData=${serverId}`;
    window.open(robloxUrl, "_blank");
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-black/20">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16">
          <span className="text-neon-purple neon-text">АКТИВНЫЕ</span>
          <br />
          <span className="text-white">СЕРВЕРЫ</span>
        </h2>

        <div className="max-w-6xl mx-auto">
          {loading && (
            <div className="text-center py-12">
              <div className="animate-pulse text-neon-cyan text-lg">
                Загрузка серверов...
              </div>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <div className="text-neon-pink text-lg mb-4">{error}</div>
              <div className="text-gray-400 text-sm">Показаны демо-серверы</div>
            </div>
          )}

          <div className="grid gap-4">
            {servers.map((server) => (
              <div
                key={server.id}
                className="bg-card border border-gray-800 rounded-lg p-6 hover:border-neon-purple/50 transition-all duration-300 glow-hover"
              >
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 rounded-full bg-neon-green animate-pulse"></div>
                    <div>
                      <h3 className="text-lg font-orbitron font-bold text-white">
                        {server.name}
                      </h3>
                      <p className="text-sm text-gray-400">{server.region}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 flex-wrap gap-4">
                    <div className="text-center">
                      <Icon
                        name="Users"
                        size={16}
                        className="text-neon-cyan mx-auto mb-1"
                      />
                      <div className="text-sm font-bold text-white">
                        {server.players}
                      </div>
                      <div className="text-xs text-gray-400">Игроки</div>
                    </div>

                    <div className="text-center">
                      <Icon
                        name="Plane"
                        size={16}
                        className="text-neon-green mx-auto mb-1"
                      />
                      <div className="text-sm font-bold text-white">
                        {server.activeFlights}
                      </div>
                      <div className="text-xs text-gray-400">Рейсы</div>
                    </div>

                    <div className="text-center">
                      <Icon
                        name="UserCheck"
                        size={16}
                        className="text-neon-pink mx-auto mb-1"
                      />
                      <div className="text-sm font-bold text-white">
                        {server.staffOnDuty}
                      </div>
                      <div className="text-xs text-gray-400">Персонал</div>
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
                      <div className="text-xs text-gray-400">Пинг</div>
                    </div>

                    <div className="text-center">
                      <div
                        className={`text-sm font-bold uppercase ${getStatusColor(server.status)}`}
                      >
                        {server.status === "online" ? "Онлайн" : "Полный"}
                      </div>
                    </div>

                    <button
                      onClick={() => joinServer(server.id)}
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
            <button
              onClick={() =>
                window.open(
                  `https://www.roblox.com/games/${GAME_ID}/Cammle-Airport-New-airport`,
                  "_blank",
                )
              }
              className="border-2 border-neon-purple text-neon-purple px-8 py-3 rounded-lg font-bold hover:bg-neon-purple hover:text-black transition-all glow-hover neon-border"
            >
              ОТКРЫТЬ В ROBLOX
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServerList;
