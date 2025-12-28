import { Facebook, Instagram, Youtube } from 'lucide-react';
import logoImage from '../../assets/logo.jpg';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImage} alt="Logo Igreja do Jardim" className="w-12 h-12 object-cover rounded-full" />
              <span className="text-white font-semibold text-xl">Igreja do Jardim</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md italic">Um lugar de esperança e recomeço.</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#3A7CA5] rounded-full flex items-center justify-center transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#3A7CA5] rounded-full flex items-center justify-center transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#3A7CA5] rounded-full flex items-center justify-center transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#sobre" className="hover:text-white">Sobre Nós</a></li>
              <li><a href="#pastor" className="hover:text-white">Pastor</a></li>
              <li><a href="#agenda" className="hover:text-white">Agenda</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Horário dos Cultos</h4>
            <p>Domingo: 09h EBD e 19h Culto</p>
            <p>Quarta: 19h30</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>© 2025 Igreja Comunidade. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}