import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logoImage from '../../assets/logo.jpg';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Início', href: '#' },
    { name: 'Sobre', href: '#about' },
    { name: 'Pastor', href: '#pastor' },
    { name: 'Agenda', href: '#events' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Ministérios', href: '#ministries' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src={logoImage}
              alt="Logo Igreja do Jardim" 
              className="w-14 h-14 object-cover rounded-full" 
            />
            <span className="font-semibold text-xl text-[#2C3E50]">Igreja do Jardim</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-[#2C3E50] hover:text-[#3A7CA5] transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#2C3E50]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-2 pb-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block py-2 text-[#2C3E50] hover:text-[#3A7CA5] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}