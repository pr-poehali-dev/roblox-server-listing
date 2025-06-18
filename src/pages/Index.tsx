import Header from "@/components/Header";
import Hero from "@/components/Hero";
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
      <GameFeatures />
      <ServerList />
    </div>
  );
};

export default Index;
