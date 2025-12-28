import { Play, Calendar, User } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Sermons() {
  const sermons = [
    {
      id: 1,
      title: 'A Fé que Move Montanhas',
      pastor: 'Pastor João Silva',
      date: '24 de Dezembro, 2025',
      duration: '45 min',
      image: 'https://images.unsplash.com/photo-1547351137-6f92b9d8c30f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JzaGlwJTIwdGVhbSUyMG11c2ljfGVufDF8fHx8MTc2Njg1NzYzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      series: 'Série: Fortalecendo a Fé',
    },
    {
      id: 2,
      title: 'O Amor Incondicional de Deus',
      pastor: 'Pastora Maria Santos',
      date: '17 de Dezembro, 2025',
      duration: '38 min',
      image: 'https://images.unsplash.com/photo-1671275558351-ea067b3e5853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBwcmF5ZXIlMjBoYW5kc3xlbnwxfHx8fDE3NjY3MzA1Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      series: 'Série: O Caráter de Deus',
    },
    {
      id: 3,
      title: 'Vivendo em Comunhão',
      pastor: 'Pastor Pedro Oliveira',
      date: '10 de Dezembro, 2025',
      duration: '42 min',
      image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5JTIwZ3JvdXB8ZW58MXx8fHwxNzY2NzczMDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      series: 'Série: Igreja Unida',
    },
  ];

  return (
    <section id="sermons" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">Sermões Recentes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Assista ou ouça nossos sermões e seja edificado pela Palavra de Deus.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sermons.map((sermon) => (
            <div
              key={sermon.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={sermon.image}
                  alt={sermon.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-white rounded-full p-4 hover:bg-gray-100 transition-colors">
                    <Play className="w-8 h-8 text-blue-600" />
                  </button>
                </div>
                <span className="absolute top-3 right-3 bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                  {sermon.duration}
                </span>
              </div>
              
              <div className="p-6">
                <p className="text-sm text-blue-600 mb-2">{sermon.series}</p>
                <h3 className="mb-3">{sermon.title}</h3>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{sermon.pastor}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{sermon.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
