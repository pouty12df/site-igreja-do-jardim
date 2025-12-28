import { Calendar, Clock, MapPin } from 'lucide-react';

export function Events() {
  const events = [
    {
      id: 1,
      title: 'EBD - Escola Bíblica Dominical',
      date: 'Todos os domingos',
      time: '09:00',
      location: 'Igreja',
      description: 'Estudo bíblico para todas as idades com ensino da Palavra de Deus.',
      recurring: 'Todos os domingos',
    },
    {
      id: 2,
      title: 'Culto de Louvor e Adoração',
      date: 'Todos os domingos do mês',
      time: '19:00 - 20:40',
      location: 'Igreja',
      description: 'Culto de celebração com louvor, pregação da Palavra e Santa Ceia.',
      recurring: 'Todos os domingos',
    },
    {
      id: 3,
      title: 'Oração pelo Meet',
      date: 'Todas as terças',
      time: '19:00 - 20:00',
      location: 'Sala do meet',
      description: 'Momento de oração e intercessão.',
      recurring: 'Todas as terças-feiras',
    },
    {
      id: 4,
      title: 'Culto de Doutrina',
      date: 'Todas as quartas',
      time: '19:30 - 21:00',
      location: 'Igreja',
      description: 'Exposição da Palavra e ensiamentos para a nossa caminhada cristã.',
      recurring: 'Todas as quartas-feiras',
    },
    {
      id: 5,
      title: 'Encontro do PGM: Pequeno grupo multiplicador',
      date: 'Todas as três quintas do mês',
      time: '19:00 - 21:30',
      location: 'Procure seu grupo ou entre em contato.',
      description: 'Proclamando amor de Cristo de casa em casa.',
      recurring: 'Todas as quintas-feiras',
    },
  ];

  return (
    <section id="events" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">Conheça nossa agenda/programação</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Participe de nossos eventos e atividades. Todos são bem-vindos!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-[#3A7CA5] border-2 border-[#3A7CA5] rounded-lg p-6 hover:shadow-lg hover:border-white transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="flex-1 text-white">{event.title}</h3>
                <span className="bg-[#81B622] text-white text-sm px-3 py-1 rounded-full">
                  {event.recurring}
                </span>
              </div>
              
              <p className="text-white/90 mb-4">{event.description}</p>
              
              <div className="space-y-2 text-white">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#81B622]" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#81B622]" />
                  <span className="text-sm">{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#81B622]" />
                  <span className="text-sm">{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}