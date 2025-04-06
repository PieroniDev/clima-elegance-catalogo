
import { Droplet, Wind, Zap, BarChart4, ThumbsUp, Wrench } from 'lucide-react';
import { cn } from '@/lib/utils';
import SectionTitle from './SectionTitle';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <Droplet className="h-10 w-10" />,
    title: "Refrigeração Natural",
    description: "Utiliza o princípio da evaporação da água para resfriar o ambiente, sem uso de gases nocivos."
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: "Economia de Energia",
    description: "Até 95% de economia em comparação com sistemas de ar condicionado convencionais."
  },
  {
    icon: <Wind className="h-10 w-10" />,
    title: "Grande Vazão de Ar",
    description: "Altos volumes de renovação de ar, mantendo o ambiente sempre fresco e saudável."
  },
  {
    icon: <BarChart4 className="h-10 w-10" />,
    title: "Alta Performance",
    description: "Desenvolvido para atender grandes áreas com eficiência e baixo custo operacional."
  },
  {
    icon: <ThumbsUp className="h-10 w-10" />,
    title: "Fácil Instalação",
    description: "Sistema prático que não requer obras complexas ou instalações especiais."
  },
  {
    icon: <Wrench className="h-10 w-10" />,
    title: "Baixa Manutenção",
    description: "Componentes de alta durabilidade e fácil manutenção, reduzindo custos operacionais."
  }
];

const FeatureCard = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="mb-4 text-secondary">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

interface FeaturesSectionProps {
  className?: string;
}

const FeaturesSection = ({ className }: FeaturesSectionProps) => {
  return (
    <section className={cn("py-16 bg-accent", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Por que escolher nossos climatizadores?" 
          subtitle="Descubra as vantagens que fazem nossos produtos se destacarem no mercado"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
