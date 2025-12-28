import fotoPastor from '../../assets/pastor.jpg';
import fotoCasal from '../../assets/pastor e esposa.jpg';

export function Pastor() {
  return (
    <section id="pastor" className="py-20 bg-[#F5F5F0]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="grid grid-cols-1 gap-4 w-full md:w-1/3">
            <div className="relative">
              <img src={fotoPastor} alt="Pr. Antonio Filho" className="rounded-2xl border-4 border-blue-200 shadow-xl w-full h-80 object-cover" />
              <span className="absolute bottom-4 right-4 bg-lime-400 text-xs font-bold px-3 py-1 rounded-full">Pastor</span>
            </div>
        <div className="relative">
        <img
         src={fotoCasal}
         alt="Pastor e Esposa"
         className="rounded-2xl border-4 border-blue-200 shadow-xl w-full h-80 object-top object-cover"
        />
      <span className="absolute bottom-4 right-4 bg-lime-400 text-xs font-bold px-3 py-1 rounded-full">
       Pastor e Esposa
     </span>
</div>

          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Antonio Nunes dos Santos</h2>
            <p className="text-gray-500 mb-6 italic">Pr. Antonio Filho</p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">Comunicação é meu forte, perseverança nos relacionamentos e dedicação no Reino de Deus. Fui chamado em 2015 após ser desafiado para liderar a congregação em Jardim do Mulato - Piauí.</p>
            <div className="flex items-center gap-2 mb-8 text-gray-600">
               <span>👨‍👩‍👧‍👦 Casado com <strong>Crisneide Oliveira</strong></span>
            </div>
            <div className="space-y-3">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg w-fit">📅 Pastor desde 20/06/2015</div>
              <div className="bg-blue-500 text-white px-4 py-2 rounded-lg w-fit">🎓 Bacharel em Teologia</div>
              <div className="bg-lime-600 text-white px-4 py-2 rounded-lg w-fit">⛪ Ordenado em 20/07/2020</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}