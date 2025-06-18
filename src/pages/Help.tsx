import Header from "@/components/Header";
import Icon from "@/components/ui/icon";

const Help = () => {
  return (
    <div className="min-h-screen bg-background">
      <title>Помощь - Cammle Airport</title>
      <Header />
      <div className="pt-32 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-orbitron font-bold text-center mb-16">
            <span className="text-neon-pink neon-text">ПОМОЩЬ</span>
            <br />
            <span className="text-white">И КОНТАКТЫ</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-neon-cyan mb-4 flex items-center">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Discord
              </h3>
              <p className="text-gray-400 mb-4">
                Присоединяйтесь к нашему Discord серверу для общения с другими
                игроками
              </p>
              <button className="bg-neon-cyan text-black px-4 py-2 rounded font-bold hover:bg-neon-cyan/80 transition-all">
                Присоединиться
              </button>
            </div>

            <div className="bg-card border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-neon-purple mb-4 flex items-center">
                <Icon name="Mail" size={20} className="mr-2" />
                Поддержка
              </h3>
              <p className="text-gray-400 mb-4">
                Нужна помощь? Свяжитесь с нашей службой поддержки
              </p>
              <button className="bg-neon-purple text-black px-4 py-2 rounded font-bold hover:bg-neon-purple/80 transition-all">
                Написать
              </button>
            </div>
          </div>

          <div className="mt-12 bg-card border border-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-neon-green mb-4">
              Часто задаваемые вопросы
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-white mb-2">
                  Как начать играть?
                </h4>
                <p className="text-gray-400 text-sm">
                  Выберите сервер на странице "Серверы" и нажмите кнопку
                  "Играть"
                </p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">
                  Как стать персоналом?
                </h4>
                <p className="text-gray-400 text-sm">
                  Подайте заявку в нашем Discord сервере в специальном канале
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
