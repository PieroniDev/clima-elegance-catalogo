
import React from 'react';
import { CheckCircle, Award, Shield, Users, Star, Quote } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import WhatsAppButton from '@/components/WhatsAppButton';
import OwnerProfile from '@/components/OwnerProfile';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';

const testimonials = [
  {
    quote: "A Clima Elegance transformou nosso ambiente de trabalho. A redução na temperatura foi impressionante e nossos funcionários ficaram muito mais produtivos.",
    name: "Carlos Mendes",
    title: "Gerente de Produção - Metalúrgica São Paulo",
  },
  {
    quote: "Excelente qualidade e atendimento. O climatizador industrial superou nossas expectativas e a economia de energia foi significativa.",
    name: "Ana Paula Santos",
    title: "Diretora Operacional - Têxtil Premium",
  },
  {
    quote: "Profissionais extremamente qualificados. Desde a consultoria até a instalação, tudo foi perfeito. Recomendo a todos!",
    name: "Roberto Silva",
    title: "Proprietário - Indústria de Alimentos RJ",
  },
  {
    quote: "O climatizador da Clima Elegance foi a melhor escolha que fizemos. Ambiente mais fresco, funcionários mais felizes e conta de energia menor.",
    name: "Mariana Costa",
    title: "Supervisora de RH - Fábrica de Calçados",
  },
  {
    quote: "Tecnologia de ponta e suporte técnico excepcional. Já são 3 anos de funcionamento perfeito sem nenhum problema.",
    name: "Pedro Oliveira",
    title: "Engenheiro Chefe - Siderúrgica Nacional",
  }
];

const Sobre = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/80 z-0"></div>
        <div
          className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)'
          }}
        ></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Sobre a Clima Elegance
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Inovação, qualidade e compromisso com a eficiência energética.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Nossa História" 
                subtitle="Uma trajetória de inovação e excelência"
                alignment="left"
              />
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  A Clima Elegance nasceu da visão de transformar o mercado de climatização industrial no Brasil. 
                  Fundada em 2010 por engenheiros com ampla experiência no setor, nossa empresa se dedicou desde 
                  o início ao desenvolvimento de soluções que combinam tecnologia de ponta, eficiência energética 
                  e respeito ao meio ambiente.
                </p>
                <p>
                  Ao longo de nossa jornada, investimos continuamente em pesquisa e desenvolvimento, 
                  aprimorando nossas técnicas e processos para oferecer produtos cada vez mais eficientes e duráveis. 
                  Hoje, somos reconhecidos como referência no segmento de climatizadores evaporativos industriais.
                </p>
                <p>
                  Nossa missão é proporcionar ambientes de trabalho mais confortáveis e saudáveis, contribuindo 
                  para o aumento da produtividade e bem-estar dos colaboradores, enquanto ajudamos as empresas 
                  a reduzirem significativamente seus custos com energia.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-secondary/30 rounded-full filter blur-3xl opacity-70"></div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-primary/30 rounded-full filter blur-3xl opacity-70"></div>
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Equipe Clima Elegance" 
                className="relative rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Owner Profile Section */}
      <section className="py-20 bg-gradient-to-br from-accent via-white to-accent/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Conheça Nosso Fundador" 
            subtitle="A visão por trás da inovação"
          />
          <div className="mt-12">
            <OwnerProfile />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Mais de 500 empresas confiam em nossas soluções de climatização industrial
            </p>
          </div>
          
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Nossos Valores" 
            subtitle="Princípios que guiam nossa atuação no mercado"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <ValueCard 
              icon={<CheckCircle className="h-12 w-12" />}
              title="Qualidade"
              description="Compromisso com a excelência em todos os nossos produtos e serviços, utilizando materiais de primeira linha e processos rigorosos de controle de qualidade."
            />
            <ValueCard 
              icon={<Award className="h-12 w-12" />}
              title="Inovação"
              description="Busca constante por novas tecnologias e soluções que possam melhorar a eficiência e performance dos nossos climatizadores."
            />
            <ValueCard 
              icon={<Shield className="h-12 w-12" />}
              title="Sustentabilidade"
              description="Desenvolvimento de produtos que minimizam o impacto ambiental e contribuem para a redução do consumo de energia."
            />
            <ValueCard 
              icon={<Users className="h-12 w-12" />}
              title="Atendimento"
              description="Foco total na satisfação do cliente, oferecendo suporte técnico especializado e atendimento personalizado em todas as etapas."
            />
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Nossos Diferenciais" 
            subtitle="O que nos torna a escolha ideal para sua empresa"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1581093196277-9f6e9b96cc00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Fábrica Clima Elegance" 
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">Tecnologia Avançada</h3>
                  <p className="text-gray-600">
                    Nossos climatizadores são equipados com componentes de última geração, garantindo 
                    maior eficiência e durabilidade. Utilizamos sistemas de controle inteligente que 
                    otimizam o funcionamento de acordo com as condições do ambiente.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">Produção Nacional</h3>
                  <p className="text-gray-600">
                    Todos os nossos produtos são fabricados em nossa planta industrial no Brasil, o que 
                    nos permite manter um rigoroso controle de qualidade e oferecer assistência técnica 
                    rápida e eficiente em todo o território nacional.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">Soluções Personalizadas</h3>
                  <p className="text-gray-600">
                    Desenvolvemos projetos sob medida para cada cliente, considerando as características 
                    específicas do ambiente a ser climatizado e as necessidades operacionais da empresa, 
                    garantindo assim a máxima eficiência do sistema.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">Suporte Técnico Especializado</h3>
                  <p className="text-gray-600">
                    Contamos com uma equipe de engenheiros e técnicos altamente qualificados, prontos para 
                    oferecer todo o suporte necessário desde a especificação do produto até a manutenção preventiva.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Conheça nossos produtos</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Descubra a linha completa de climatizadores industriais e encontre a solução ideal para sua empresa.
          </p>
          <WhatsAppButton className="mx-auto">
            Solicitar Catálogo Completo
          </WhatsAppButton>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton variant="floating" />
    </div>
  );
};

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard = ({ icon, title, description }: ValueCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center">
      <div className="mb-4 text-secondary inline-flex items-center justify-center">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-primary">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Sobre;
