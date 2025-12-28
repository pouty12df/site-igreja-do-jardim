import { Calendar, Clock, MapPin, Phone, Heart, Users, Globe, HandHeart, Crown } from 'lucide-react';

export function Projects() {
  const sportsProjects = [
    {
      id: 1,
      title: 'Vôlei',
      image: '/src/assets/volei-jm.jpg',
      description: 'Venha participar dos nossos treinos de vôlei! Uma ótima oportunidade para se exercitar e fazer novas amizades.',
      schedule: 'Terças e Sextas-feiras',
      time: ' Terça 20:00 - 22:00, Sexta 19:30 - 20:00', 
      location: 'Quadra da Escola José Borba de Carvalho',
      contact: '(86) 99513-0492 ou (86) 99981-8653 - Bento Rodrigues ou Lara Sousa',
    },
    {
      id: 2,
      title: 'Funcional',
      image: '/src/assets/funcional-jm.jpg',
      description: 'Treino funcional para todas as idades! Melhore sua saúde física e bem-estar em um ambiente acolhedor.',
      schedule: 'Quinta',
      time: '17:00',
      location: 'Área externa da Igreja',
      contact: '(86) 99433-9343 - Crisneide Oliveria',
    },
    {
      id: 3,
      title: 'Futsal Masculino',
      image: 'https://images.unsplash.com/photo-1712325485668-6b6830ba814e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBzb2NjZXIlMjBmdXRzYWx8ZW58MXx8fHwxNzY2ODYxODk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Campeonato de futsal para os homens da igreja. Confraternização, esporte e muita diversão!',
      schedule: 'Segunda e Quinta',
      time: '18:00 - 20:00',
      location: 'Quadra da Escola José Borba de Carvalho',
      contact: '(86) 99447-4591 - João Neto',
    },
  ];

  const missionProjects = [
    {
      id: 4,
      title: 'MCM',
      icon: Heart,
      image: '/src/assets/mcmulher.jpg',
      description: 'Mulheres Cristãs em Missão - MCM. Nosso propósito é compartilhar o amor de Cristo através de ações práticas e evangelismo.',
      details: 'Grupo dedicado ao serviço missionário e evangelização.',
      activities: ['Evangelismo', 'Ações sociais', 'Estudos bíblicos', 'Apoio às famílias'],
    },
    {
      id: 5,
      title: 'UMBB',
      icon: Users,
      image: '/src/assets/umbb.jpg',
      description: 'União de Missões Batistas Brasileiras - UMBB. Promovendo o ensino bíblico e ações missionárias.',
      details: 'Organização focada em missões e educação cristã.',
      activities: ['Ensino bíblico', 'Missões', 'Formação de líderes', 'Eventos especiais'],
    },
    {
      id: 6,
      title: 'MR',
      icon: Globe,
      image: '/src/assets/mrei.jpg',
      description: 'Missão Real - MR. Servindo com excelência e dedicação ao Reino de Deus.',
      details: 'Projeto focado em missões e serviço comunitário.',
      activities: ['Missões urbanas', 'Plantação de igrejas', 'Discipulado', 'Treinamentos'],
    },
    {
      id: 7,
      title: 'Amigos de Missões',
      icon: HandHeart,
      image: '/src/assets/amigos-de-missoes.jpg',
      description: 'Grupo de apoio e suporte aos missionários. Juntos fortalecendo o trabalho missionário global.',
      details: 'Rede de apoio para missionários nacionais e internacionais.',
      activities: ['Apoio financeiro', 'Oração pelos missionários', 'Envio de recursos', 'Comunicação'],
    },
    {
      id: 8,
      title: 'Embaixadores do Rei',
      icon: Crown,
      image: '/src/assets/erei.jpg',
      description: 'Ministério voltado para crianças e pré-adolescentes. Formando pequenos discípulos de Cristo.',
      details: 'Programa de discipulado infantil com atividades educativas e espirituais.',
      activities: ['Estudos bíblicos', 'Atividades recreativas', 'Acampamentos', 'Eventos especiais'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-[#3A7CA5]/5 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-[#2C3E50]">Nossos Projetos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça os projetos e atividades que desenvolvemos para fortalecer a comunidade e cumprir nossa missão.
          </p>
        </div>

        {/* Projetos Esportivos */}
        <div className="mb-16">
          <h3 className="text-center mb-8 text-[#3A7CA5]">Projetos Esportivos</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {sportsProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow border-2 border-[#3A7CA5]/10"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="mb-3 text-[#2C3E50]">{project.title}</h4>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2 text-gray-700">
                      <Calendar className="w-4 h-4 mt-0.5 text-[#3A7CA5] flex-shrink-0" />
                      <span>{project.schedule}</span>
                    </div>
                    <div className="flex items-start gap-2 text-gray-700">
                      <Clock className="w-4 h-4 mt-0.5 text-[#81B622] flex-shrink-0" />
                      <span>{project.time}</span>
                    </div>
                    <div className="flex items-start gap-2 text-gray-700">
                      <MapPin className="w-4 h-4 mt-0.5 text-[#2C3E50] flex-shrink-0" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-start gap-2 text-gray-700">
                      <Phone className="w-4 h-4 mt-0.5 text-[#3E8E4A] flex-shrink-0" />
                      <span>{project.contact}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projetos Missionários */}
        <div>
          <h3 className="text-center mb-8 text-[#81B622]">Projetos Missionários</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {missionProjects.map((project) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={project.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1 border-2 border-[#81B622]/10"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
                      <IconComponent className="w-6 h-6 text-[#81B622]" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="mb-3 text-[#2C3E50]">{project.title}</h4>
                    <p className="text-gray-600 mb-3 text-sm">{project.description}</p>
                    <p className="text-gray-500 text-sm mb-4 italic">{project.details}</p>
                    
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-xs font-semibold text-[#3A7CA5] mb-2">ATIVIDADES PRINCIPAIS:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.activities.map((activity, index) => (
                          <span
                            key={index}
                            className="bg-[#81B622]/10 text-[#3E8E4A] px-2 py-1 rounded text-xs"
                          >
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}