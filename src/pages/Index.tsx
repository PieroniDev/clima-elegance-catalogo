
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import FeaturesSection from '@/components/FeaturesSection';
import SectionTitle from '@/components/SectionTitle';
import WhatsAppButton from '@/components/WhatsAppButton';
import ProductCard, { ProductProps } from '@/components/ProductCard';

// Exemplo de produtos em destaque
const featuredProducts: ProductProps[] = [
  {
    id: "1",
    name: "Climatizador Industrial GL 60",
    description: "Climatizador de grande porte para ambientes industriais, ideal para galpões e fábricas.",
    image: "https://images.unsplash.com/photo-1621193793262-4127d9855c91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
    features: [
      { label: "Vazão", value: "60.000m³/h" },
      { label: "Área de cobertura", value: "Até 300m²" },
      { label: "Consumo de energia", value: "1.5kW/h" },
      { label: "Abertura Parede", value: "1250x1250mm" }
    ]
  },
  {
    id: "2",
    name: "Climatizador Industrial GL 50",
    description: "Solução intermediária para médias indústrias e ambientes comerciais de grande porte.",
    image: "https://images.unsplash.com/photo-1580983218765-f663bec07b37?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
    features: [
      { label: "Vazão", value: "50.000m³/h" },
      { label: "Área de cobertura", value: "Até 250m²" },
      { label: "Consumo de energia", value: "1.2kW/h" },
      { label: "Abertura Parede", value: "1200x1200mm" }
    ]
  },
  {
    id: "3",
    name: "Climatizador Industrial GL 40",
    description: "Modelo compacto para pequenas indústrias, comércios e espaços corporativos.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
    features: [
      { label: "Vazão", value: "40.000m³/h" },
      { label: "Área de cobertura", value: "Até 200m²" },
      { label: "Consumo de energia", value: "1.1kW/h" },
      { label: "Abertura Parede", value: "1000x1000mm" }
    ]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/90 z-0"></div>
        <div
          className="absolute inset-0 z-0 opacity-30 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1565538420870-da08ff96a207?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)'
          }}
        ></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 animate-fade-in">
              Climatizadores Evaporativos Industriais
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Soluções de climatização de alta performance com até 95% de economia de energia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button asChild size="lg" className="btn-secondary">
                <Link to="/catalogo">Ver Produtos</Link>
              </Button>
              <WhatsAppButton className="sm:max-w-fit">
                Solicitar Orçamento
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nós Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2 animate-slide-in">
              <SectionTitle 
                title="Especialistas em Climatização Industrial" 
                subtitle="Mais de 10 anos de experiência em soluções eficientes para ambientes industriais."
                alignment="left"
              />
              <p className="text-gray-600 mb-6">
                Na Clima Elegance, desenvolvemos soluções de climatização industrial que combinam eficiência energética, 
                alta performance e respeito ao meio ambiente. Nossos climatizadores evaporativos são projetados para 
                atender às necessidades específicas de diversos tipos de indústrias.
              </p>
              <p className="text-gray-600 mb-6">
                Com tecnologia avançada e materiais de alta qualidade, nossos produtos garantem conforto térmico com 
                baixo custo operacional, representando a escolha ideal para empresas que buscam reduzir custos sem 
                comprometer a qualidade do ambiente de trabalho.
              </p>
              <Button asChild variant="default" className="btn-primary flex items-center gap-2">
                <Link to="/sobre">
                  Conheça Nossa História <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="lg:order-1 flex justify-center animate-slide-in">
              <div className="relative w-full max-w-lg">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-secondary/30 rounded-full filter blur-3xl opacity-70"></div>
                <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-primary/30 rounded-full filter blur-3xl opacity-70"></div>
                <img 
                  src="https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Climatizador industrial em operação" 
                  className="relative rounded-lg shadow-xl object-cover h-[450px] w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Produtos em Destaque */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Produtos em Destaque" 
            subtitle="Conheça nossos principais climatizadores industriais"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="btn-outline flex items-center gap-2 mx-auto">
              <Link to="/catalogo">
                Ver Catálogo Completo <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para transformar o clima da sua empresa?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Entre em contato conosco hoje mesmo e descubra como nossos climatizadores industriais 
            podem melhorar o ambiente de trabalho e reduzir seus custos com energia.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link to="/contato">Fale Conosco</Link>
            </Button>
            <WhatsAppButton className="sm:w-auto">
              Solicitar Orçamento
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton variant="floating" />
    </div>
  );
};

export default Index;
