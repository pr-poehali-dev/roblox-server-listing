import Header from "@/components/Header";
import Icon from "@/components/ui/icon";

const Filters = () => {
  return (
    <div className="min-h-screen bg-background">
      <title>Фильтры - Cammle Airport</title>
      <Header />
      <div className="pt-32 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-orbitron font-bold text-center mb-16">
            <span className="text-neon-purple neon-text">ФИЛЬТРЫ</span>
            <br />
            <span className="text-white">СЕРВЕРОВ</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-neon-cyan mb-4 flex items-center">
                <Icon name="Users" size={20} className="mr-2" />
                По количеству игроков
              </h3>
              <div className="space-y-2">
                <label className="flex items-center text-gray-300">
                  <input type="checkbox" className="mr-2" />
                  Менее 25 игроков
                </label>
                <label className="flex items-center text-gray-300">
                  <input type="checkbox" className="mr-2" />
                  25-40 игроков
                </label>
                <label className="flex items-center text-gray-300">
                  <input type="checkbox" className="mr-2" />
                  Более 40 игроков
                </label>
              </div>
            </div>

            <div className="bg-card border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-neon-green mb-4 flex items-center">
                <Icon name="Globe" size={20} className="mr-2" />
                По регионам
              </h3>
              <div className="space-y-2">
                <label className="flex items-center text-gray-300">
                  <input type="checkbox" className="mr-2" />
                  Европа
                </label>
                <label className="flex items-center text-gray-300">
                  <input type="checkbox" className="mr-2" />
                  Северная Америка
                </label>
                <label className="flex items-center text-gray-300">
                  <input type="checkbox" className="mr-2" />
                  Азия
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
