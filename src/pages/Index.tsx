import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GameFeatures from "@/components/GameFeatures";
import ServerList from "@/components/ServerList";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <GameFeatures />
      <ServerList />
    </div>
  );
};

export default Index;
