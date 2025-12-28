import bannerImg from '../../assets/fotoprincipal.jpg';

export function Hero() {
  return (
    <section className="relative h-[500px] flex items-center justify-center">
      <img src={bannerImg} className="absolute inset-0 w-full h-full object-cover brightness-50" alt="Igreja do Jardim" />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4">Bem-vindo à Igreja do Jardim</h1>
        <p className="text-xl mb-8">Um lugar de esperança e recomeço.</p>
        <div className="flex gap-4 justify-center">
          {/* Botão Ver Agenda */}
          <a 
            href="#events" 
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-bold transition-all text-white flex items-center justify-center"
          >
            Ver Agenda
          </a>

          {/* Botão Entre em Contato */}
          <a 
            href="#contact" 
            className="bg-lime-500 hover:bg-lime-600 text-black px-8 py-3 rounded-full font-bold transition-all flex items-center justify-center"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
}