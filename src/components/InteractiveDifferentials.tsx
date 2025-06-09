
import React, { useState } from 'react';
import { Shield, Award, Users, Zap, ChevronRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Differential {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  details: string[];
}

const differentials: Differential[] = [
  {
    id: 1,
    title: "Qualidade Comprovada",
    description: "Produtos testados e aprovados por centenas de clientes",
    icon: <Shield className="h-8 w-8" />,
    color: "from-blue-500 to-blue-600",
    details: [
      "Mais de 500 projetos entregues",
      "98% de satisfação dos clientes", 
      "Garantia de 2 anos em todos os produtos",
      "Certificações internacionais"
    ]
  },
  {
    id: 2,
    title: "Atendimento Personalizado",
    description: "Cada projeto recebe atenção especial e consultoria dedicada",
    icon: <Users className="h-8 w-8" />,
    color: "from-green-500 to-green-600",
    details: [
      "Consultoria técnica gratuita",
      "Projeto sob medida para sua necessidade",
      "Acompanhamento pós-venda",
      "Suporte técnico especializado"
    ]
  },
  {
    id: 3,
    title: "Tecnologia Avançada",
    description: "Componentes de última geração com sistemas inteligentes",
    icon: <Zap className="h-8 w-8" />,
    color: "from-purple-500 to-purple-600",
    details: [
      "Sistemas de controle automático",
      "Eficiência energética superior",
      "Materiais de alta durabilidade",
      "Inovação constante em P&D"
    ]
  },
  {
    id: 4,
    title: "Resultados Garantidos",
    description: "Soluções que realmente funcionam e geram economia",
    icon: <Award className="h-8 w-8" />,
    color: "from-orange-500 to-orange-600",
    details: [
      "Até 95% de economia energética",
      "ROI em menos de 18 meses",
      "Melhoria comprovada no ambiente",
      "Aumento da produtividade"
    ]
  }
];

const InteractiveDifferentials = () => {
  const [activeDifferential, setActiveDifferential] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary rounded-full" />
        <div className="absolute top-32 right-20 w-16 h-16 bg-secondary rounded-full" />
        <div className="absolute bottom-20 left-32 w-12 h-12 bg-primary rounded-full" />
        <div className="absolute bottom-40 right-10 w-8 h-8 bg-secondary rounded-full" />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {differentials.map((differential, index) => (
          <div
            key={differential.id}
            className={cn(
              "group relative overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer",
              "transform hover:scale-105 hover:-translate-y-2",
              activeDifferential === differential.id 
                ? "ring-4 ring-primary/30 shadow-2xl" 
                : "shadow-lg hover:shadow-2xl",
              hoveredCard === differential.id ? "z-20" : "z-10"
            )}
            onMouseEnter={() => setHoveredCard(differential.id)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => setActiveDifferential(
              activeDifferential === differential.id ? null : differential.id
            )}
          >
            {/* Card Background with Gradient */}
            <div className={cn(
              "absolute inset-0 bg-gradient-to-br opacity-90",
              differential.color
            )} />
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className={cn(
                "absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20 transition-transform duration-700",
                hoveredCard === differential.id ? "scale-150 rotate-45" : "scale-100 rotate-0",
                `bg-white`
              )} />
              <div className={cn(
                "absolute -bottom-10 -left-10 w-32 h-32 rounded-full opacity-10 transition-transform duration-700",
                hoveredCard === differential.id ? "scale-125 -rotate-45" : "scale-100 rotate-0",
                `bg-white`
              )} />
            </div>

            {/* Content */}
            <div className="relative p-8 text-white">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={cn(
                  "p-4 rounded-xl bg-white/20 backdrop-blur-sm transition-transform duration-300",
                  hoveredCard === differential.id ? "scale-110 rotate-6" : "scale-100 rotate-0"
                )}>
                  {differential.icon}
                </div>
                <div className={cn(
                  "transition-transform duration-300",
                  activeDifferential === differential.id ? "rotate-90" : "rotate-0"
                )}>
                  <ChevronRight className="h-6 w-6" />
                </div>
              </div>

              {/* Title and Description */}
              <h3 className="text-2xl font-bold mb-3 leading-tight">
                {differential.title}
              </h3>
              <p className="text-white/90 mb-4 leading-relaxed">
                {differential.description}
              </p>

              {/* Expandable Details */}
              <div className={cn(
                "transition-all duration-500 overflow-hidden",
                activeDifferential === differential.id 
                  ? "max-h-64 opacity-100" 
                  : "max-h-0 opacity-0"
              )}>
                <div className="pt-4 border-t border-white/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="h-4 w-4" />
                    <span className="font-semibold">Principais benefícios:</span>
                  </div>
                  <ul className="space-y-2">
                    {differential.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Interactive Indicator */}
              <div className="absolute bottom-4 right-4">
                <div className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  activeDifferential === differential.id 
                    ? "bg-white scale-150" 
                    : "bg-white/50 scale-100"
                )} />
              </div>
            </div>

            {/* Hover Glow Effect */}
            <div className={cn(
              "absolute inset-0 transition-opacity duration-300 pointer-events-none",
              "bg-gradient-to-br from-white/10 to-transparent",
              hoveredCard === differential.id ? "opacity-100" : "opacity-0"
            )} />
          </div>
        ))}
      </div>

      {/* Bottom Interaction Hint */}
      <div className="text-center mt-8">
        <p className="text-gray-600 text-sm flex items-center justify-center gap-2">
          <Sparkles className="h-4 w-4" />
          Clique nos cards para descobrir mais detalhes
        </p>
      </div>
    </div>
  );
};

export default InteractiveDifferentials;
