import { Heart, Users, BookOpen } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Heart,
      title: 'Amor',
      description: 'Compartilhamos o amor de Cristo em tudo que fazemos, acolhendo a todos de coração aberto.',
    },
    {
      icon: Users,
      title: 'Comunidade',
      description: 'Construímos relacionamentos genuínos e nos apoiamos mutuamente em nossa jornada de fé.',
    },
    {
      icon: BookOpen,
      title: 'Palavra',
      description: 'Fundamentamos nossa vida e ensinamentos na verdade das Sagradas Escrituras.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">Sobre Nós</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Somos a Primeira Igreja Batista em Jardim do Mulato – PI, fundada há 16 anos.
            Ao longo dessa caminhada, Deus tem nos abençoado e hoje contamos com mais de 100 irmãos em Cristo que caminham juntos na fé e no serviço.
            <br /><br />
            Nossa missão é cumprir a Grande Comissão, anunciando o Evangelho e levando a mensagem de esperança e salvação para toda a nossa comunidade.
            Mais do que uma igreja, somos uma família espiritual, comprometida em viver o amor de Cristo e compartilhar esse amor com todos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow border-2 border-[#3A7CA5]/20 hover:border-[#3A7CA5]"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#81B622]/10 rounded-full mb-6">
                <value.icon className="w-8 h-8 text-[#3E8E4A]" />
              </div>
              <h3 className="mb-4 text-[#2C3E50]">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}