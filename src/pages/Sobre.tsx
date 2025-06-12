import React from "react";
import { CheckCircle, Award, Shield, Users, Star, Quote } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import WhatsAppButton from "@/components/WhatsAppButton";
import OwnerProfile from "@/components/OwnerProfile";
import InteractiveDifferentials from "@/components/InteractiveDifferentials";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "A Guiasul transformou nosso ambiente de trabalho. A redução na temperatura foi impressionante e nossos funcionários ficaram muito mais produtivos.",
    name: "Carlos Mendes",
    title: "Gerente de Produção - Metalúrgica São Paulo"
  },
  {
    quote:
      "Excelente qualidade e atendimento. O climatizador industrial superou nossas expectativas e a economia de energia foi significativa.",
    name: "Ana Paula Santos",
    title: "Diretora Operacional - Têxtil Premium"
  },
  {
    quote:
      "Profissionais extremamente qualificados. Desde a consultoria até a instalação, tudo foi perfeito. Recomendo a todos!",
    name: "Roberto Silva",
    title: "Proprietário - Indústria de Alimentos RJ"
  },
  {
    quote:
      "O climatizador da Guiasul foi a melhor escolha que fizemos. Ambiente mais fresco, funcionários mais felizes e conta de energia menor.",
    name: "Mariana Costa",
    title: "Supervisora de RH - Fábrica de Calçados"
  },
  {
    quote:
      "Tecnologia de ponta e suporte técnico excepcional. Já são 3 anos de funcionamento perfeito sem nenhum problema.",
    name: "Pedro Oliveira",
    title: "Engenheiro Chefe - Siderúrgica Nacional"
  }
];

const Sobre = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Atendimentos Concluídos
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
           Inovação, qualidade e compromisso com a eficiência energética.
          </p>
        </div>
      </section>
              

      {/* Nossa História */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Sobre Nós"
                subtitle="Uma trajetória de inovação e excelência"
                alignment="left"
              />
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  Na Guiasul, acreditamos que inovação, compromisso e qualidade
                  são os pilares de um bom atendimento e de soluções
                  verdadeiramente eficientes. Atuando como <b>
                    representante oficial
                    da Rotoplast em Minas Gerais
                  </b>, a Guiasul nasceu com o propósito
                  de conectar indústrias, empresas e profissionais a produtos de
                  alto desempenho e confiança no mercado de climatização.
                </p>
                <br />
                <p>
                  Sob a liderança de <b>Guilherme Leite de Andrade, fundador e 
                    representante
                    da Rotoplast em MG
                  </b>, nossa empresa se destaca por seu
                  atendimento próximo, consultivo e focado nas reais
                  necessidades de cada cliente. Mesmo sendo uma empresa jovem,
                  já conquistamos a confiança de parceiros exigentes por meio de
                  uma atuação ética, transparente e altamente comprometida com
                  resultados.
                </p>
                <p>
                  <br />
                  <b>Nossa Missão</b> é oferecer climatização  com
                  excelência no atendimento, promovendo o crescimento
                  sustentável de nossos clientes e parceiros em todo o estado de
                  Minas Gerais.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-secondary/30 rounded-full filter blur-3xl opacity-70" />
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-primary/30 rounded-full filter blur-3xl opacity-70" />
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Equipe Guiasul"
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
              Mais de 500 empresas confiam em nossas soluções de climatização
              industrial
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
              icon={<CheckCircle className="h-12 w-12 text-blue-600" />}
              title="Qualidade"
              description="Compromisso com a excelência em todos os nossos produtos e serviços, utilizando materiais de primeira linha e processos rigorosos de controle de qualidade."
            />
            <ValueCard
              icon={<Award className="h-12 w-12 text-blue-600" />}
              title="Inovação"
              description="Busca constante por novas tecnologias e soluções que possam melhorar a eficiência e performance dos nossos climatizadores."
            />
            <ValueCard
              icon={<Shield className="h-12 w-12 text-blue-600" />}
              title="Sustentabilidade"
              description="Desenvolvimento de produtos que minimizam o impacto ambiental e contribuem para a redução do consumo de energia."
            />
            <ValueCard
              icon={<Users className="h-12 w-12 text-blue-600" />}
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

          <div className="mt-16">
            <InteractiveDifferentials />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Conheça nossos produtos
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Descubra a linha completa de climatizadores industriais e encontre a
            solução ideal para sua empresa.
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
      <div className="mb-4 inline-flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-primary">
        {title}
      </h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default Sobre;
