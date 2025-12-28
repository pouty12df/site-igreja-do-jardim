import { Music, Baby, Heart, BookOpen, Users, Sparkles } from 'lucide-react';

export function Ministries() {
  const ministries = [
    {
      id: 1,
      icon: Music,
      name: 'Louvor e Adoração',
      description: 'Ministério responsável pela música e adoração nos cultos e eventos.',
      members: '25+ membros',
    },
    {
      id: 2,
      icon: Baby,
      name: 'Ministério Infantil',
      description: 'Ensino bíblico e atividades voltadas para crianças de 0 a 12 anos.',
      members: '15+ professores',
    },
    {
      id: 3,
      icon: Sparkles,
      name: 'JUBA JARDIM',
      description: 'Grupo focado nos jovens de nossa cidade.',
      members: '40+ jovens',
    },
    {
      id: 4,
      icon: Heart,
      name: 'Ação Social',
      description: 'Projetos de ajuda humanitária e assistência à comunidade.',
      members: '20+ voluntários',
    },
    {
      id: 5,
      icon: BookOpen,
      name: 'Escola Bíblica',
      description: 'Cursos e estudos teológicos para aprofundamento na Palavra.',
      members: '30+ alunos',
    },
    {
      id: 6,
      icon: Users,
      name: 'PGM',
      description: 'Pequenos grupos multiplicadores, indo de casa em casa.',
      members: '12 células ativas',
    },
  ];

  return (
    <section id="ministries" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">Nossos Ministérios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Encontre um lugar para servir e usar seus dons. Há espaço para todos na obra do Senhor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {ministries.map((ministry) => (
            <div
              key={ministry.id}
              className="bg-white border-2 border-[#3A7CA5]/20 rounded-lg p-6 hover:border-[#3A7CA5] hover:shadow-md transition-all group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#81B622]/10 rounded-lg mb-4 group-hover:bg-[#3E8E4A] transition-colors">
                <ministry.icon className="w-6 h-6 text-[#3E8E4A] group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="mb-2 text-[#2C3E50]">{ministry.name}</h3>
              <p className="text-gray-600 mb-4">{ministry.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{ministry.members}</span>
                <button className="text-[#3A7CA5] hover:text-[#2C3E50] text-sm">
                  Saiba mais →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}