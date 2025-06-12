
import React from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import SectionTitle from '@/components/SectionTitle';
import WhatsAppButton from '@/components/WhatsAppButton';
import Swal from 'sweetalert2'


const Contato = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Processar envio do formulário (seria necessário integrar com um backend)
    Swal.fire({
      title: 'Sucesso!',
      text: 'Enviado com Sucesso!',
      icon: 'success',
      confirmButtonText: 'Fechar'
    })
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/90 z-0"></div>
        <div
          className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)'
          }}
        ></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Estamos prontos para atender suas necessidades e responder suas dúvidas
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <SectionTitle 
                title="Informações de Contato" 
                subtitle="Diversas formas de se comunicar conosco"
                alignment="left"
                className="mb-8"
              />
              
              <div className="space-y-8">
                <ContactInfo 
                  icon={<Phone className="h-6 w-6" />}
                  title="Telefone"
                  description="(31) 9991-3768"
                  link="tel:+553199913768"
                />
                <ContactInfo 
                  icon={<Mail className="h-6 w-6" />}
                  title="E-mail"
                  description="guiasulclimatizacao@gmail.com"
                  link="mailto:guiasulclimatizacao@gmail.com"
                />
                
                <ContactInfo 
                  icon={<Clock className="h-6 w-6" />}
                  title="Horário de Atendimento"
                  description="Segunda a Sexta: 08h às 18h"
                />
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-bold text-primary mb-4">Atendimento Rápido</h3>
                <p className="text-gray-600 mb-6">
                  Para um atendimento mais rápido, entre em contato via WhatsApp e fale diretamente 
                  com <b>Guilherme Leite</b>.
                </p>
                <WhatsAppButton className="mt-2">
                  Conversar pelo WhatsApp
                </WhatsAppButton>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <SectionTitle 
                title="Envie uma Mensagem" 
                subtitle="Preencha o formulário abaixo e entraremos em contato o mais breve possível"
                alignment="left"
                className="mb-8"
              />
              
              <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input id="name" placeholder="Seu nome completo" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" placeholder="Seu e-mail" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" placeholder="(XX) XXXXX-XXXX" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa</Label>
                    <Input id="company" placeholder="Nome da sua empresa" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto</Label>
                  <Input id="subject" placeholder="Assunto da mensagem" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Descreva sua necessidade em detalhes..." 
                    className="min-h-[150px]"
                    required 
                  />
                </div>
                
                <Button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  <Send className="h-4 w-4" />
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      

      {/* Floating WhatsApp Button */}
      <WhatsAppButton variant="floating" />
    </div>
  );
};

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
}

const ContactInfo = ({ icon, title, description, link }: ContactInfoProps) => {
  const content = (
    <>
      <div className="bg-accent p-3 rounded-lg text-primary">{icon}</div>
      <div>
        <h3 className="font-bold text-primary">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </>
  );

  return (
    <div className="flex items-start gap-4">
      {link ? (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-start gap-4 hover:text-secondary transition-colors"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
};

export default Contato;
