import Header from "@/components/Header";
import ServerList from "@/components/ServerList";

const Servers = () => {
  return (
    <div className="min-h-screen bg-background">
      <title>Серверы - Cammle Airport</title>
      <Header />
      <div className="pt-20">
        <ServerList />
      </div>
    </div>
  );
};

export default Servers;
