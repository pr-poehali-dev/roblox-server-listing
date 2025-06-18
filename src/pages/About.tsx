import Header from "@/components/Header";
import GameFeatures from "@/components/GameFeatures";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <title>О игре - Cammle Airport</title>
      <Header />
      <div className="pt-20">
        <GameFeatures />
      </div>
    </div>
  );
};

export default About;
