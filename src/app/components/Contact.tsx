import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Número do WhatsApp da igreja (formato: código do país + DDD + número, sem espaços ou caracteres especiais)
    const whatsappNumber = '5586994599430'; // Substitua pelo número da igreja
    
    // Formata a mensagem
    const mensagem = `*Mensagem do Site da Igreja*%0A%0A` +
                    `*Nome:* ${formData.name}%0A` +
                    `*Email:* ${formData.email}%0A` +
                    `*Telefone:* ${formData.phone}%0A%0A` +
                    `*Mensagem:*%0A${formData.message}`;
    
    // Abre o WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${mensagem}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">Entre em Contato</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos aqui para você. Entre em contato conosco ou venha nos visitar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-6">Informações de Contato</h3>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#81B622]/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-[#3E8E4A]" />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium mb-1 text-[#2C3E50]">Endereço</p>
                    <p className="text-gray-600">Rua Eudes Pereira de Souza<br />Jardim do Mulato - PI, Centro<br />CEP: 64495-000</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#81B622]/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-[#3E8E4A]" />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium mb-1 text-[#2C3E50]">Telefone</p>
                    <p className="text-gray-600">(86) 99448-1480<br />(86) 99459-9430</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#81B622]/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-[#3E8E4A]" />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium mb-1 text-[#2C3E50]">E-mail</p>
                    <p className="text-gray-600">igrejabatistaemjardimdomulato@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#81B622]/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-[#3E8E4A]" />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium mb-1 text-[#2C3E50]">Horário de Atendimento</p>
                    <p className="text-gray-600">Segunda a Sexta: 9h às 17h<br />Domingo: 8h às 13h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="mb-6">Envie uma Mensagem</h3>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A7CA5] focus:border-[#3A7CA5] transition-colors"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A7CA5] focus:border-[#3A7CA5] transition-colors"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A7CA5] focus:border-[#3A7CA5] transition-colors"
                  placeholder="(11) 98765-4321"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A7CA5] focus:border-[#3A7CA5] transition-colors resize-none"
                  placeholder="Sua mensagem..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#3A7CA5] hover:bg-[#2C3E50] text-white py-3 rounded-lg transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}