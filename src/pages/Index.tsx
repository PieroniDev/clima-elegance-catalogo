
import React from "react";
import { ArrowRight, Wind, Fan, Factory } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FeaturesSection from "@/components/FeaturesSection";
import SectionTitle from "@/components/SectionTitle";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductCard, { ProductProps } from "@/components/ProductCard";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const featuredProducts: ProductProps[] = [
  {
    id: "1",
    name: "Climatizador Industrial G7000",
    description:
      "Climatizador de grande porte para ambientes industriais, ideal para galpões, fábricas e armazéns de grande escala.",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
    features: [
      { label: "Vazão", value: "70.000m³/h" },
      { label: "Área de cobertura", value: "Até 350m²" },
      { label: "Consumo de energia", value: "1.2kW/h" },
      { label: "Abertura Parede", value: "1350x1350mm" }
    ]
  },
  {
    id: "2",
    name: "Climatizador Industrial G5000",
    description:
      "Solução de alta eficiência para médias indústrias, galpões e centros logísticos com ampla área de cobertura.",
    image:
      "https://images.unsplash.com/photo-1580983218765-f663bec07b37?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
    features: [
      { label: "Vazão", value: "50.000m³/h" },
      { label: "Área de cobertura", value: "Até 250m²" },
      { label: "Consumo de energia", value: "0.9kW/h" },
      { label: "Abertura Parede", value: "1150x1150mm" }
    ]
  },
  {
    id: "3",
    name: "Climatizador Industrial G3000",
    description:
      "Modelo potente e versátil para pequenas indústrias, oficinas e ambientes que necessitam de climatização eficiente.",
    image:
      "https://images.unsplash.com/photo-1621193793262-4127d9855c91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
    features: [
      { label: "Vazão", value: "30.000m³/h" },
      { label: "Área de cobertura", value: "Até 150m²" },
      { label: "Consumo de energia", value: "0.7kW/h" },
      { label: "Abertura Parede", value: "950x950mm" }
    ]
  }
];

const carouselCards = [
  {
    src: "midias/industrial1.jpeg",
    title: "Indústrias de Grande Porte",
    category: "Climatização Industrial",
    content: (
      <div>
        <p className="text-gray-600 mb-4">
          Soluções especializadas para indústrias de grande porte, garantindo ambiente climatizado 
          e confortável para os trabalhadores.
        </p>
        <p className="text-gray-600">
          Nossos climatizadores são projetados para atender grandes volumes de ar e 
          proporcionar eficiência energética máxima.
        </p>
      </div>
    ),
  },
  {
    src: "https://images.unsplash.com/photo-1581093196277-9f6e9b96cc00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
    title: "Centros Logísticos",
    category: "Armazéns e Galpões",
    content: (
      <div>
        <p className="text-gray-600 mb-4">
          Climatização eficiente para centros de distribuição e armazéns, 
          mantendo produtos e funcionários em condições ideais.
        </p>
        <p className="text-gray-600">
          Sistemas que garantem a conservação adequada de mercadorias e 
          o bem-estar da equipe de trabalho.
        </p>
      </div>
    ),
  },
  {
    src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
    title: "Fábricas Modernas",
    category: "Tecnologia Avançada",
    content: (
      <div>
        <p className="text-gray-600 mb-4">
          Equipamentos de última geração para fábricas que buscam 
          excelência em climatização industrial.
        </p>
        <p className="text-gray-600">
          Controle inteligente de temperatura e umidade para 
          processos produtivos que exigem precisão.
        </p>
      </div>
    ),
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Aceternity Background */}
      <section className="relative overflow-hidden">
        <BackgroundGradientAnimation
          gradientBackgroundStart="rgb(30, 64, 175)"
          gradientBackgroundEnd="rgb(37, 99, 235)"
          firstColor="59, 130, 246"
          secondColor="96, 165, 250"
          thirdColor="147, 197, 253"
          fourthColor="191, 219, 254"
          fifthColor="219, 234, 254"
          pointerColor="59, 130, 246"
          size="90%"
          blendingValue="multiply"
          interactive={true}
          containerClassName="absolute inset-0"
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-primary/30 backdrop-blur-[1px]" />
        </BackgroundGradientAnimation>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6 animate-fade-in">
              <Wind className="h-8 w-8 text-white animate-pulse" />
              <div className="h-px bg-white/30 flex-1" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 animate-fade-in text-white">
              Climatizadores Industriais de Alto Desempenho
            </h1>
            
            <p
              className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Soluções avançadas para climatização de grandes ambientes com até
              80% de economia de energia.
            </p>
            
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                <Link to="/catalogo">Conheça Nossos Produtos</Link>
              </Button>
              <WhatsAppButton className="sm:max-w-fit bg-green hover:bg-green/90">
                Solicitar Orçamento
              </WhatsAppButton>
            </div>

            <div className="flex items-center gap-6 mt-8 text-white/80 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="flex items-center gap-2">
                <Fan className="h-5 w-5" />
                <span className="text-sm">Alta Performance</span>
              </div>
              <div className="flex items-center gap-2">
                <Factory className="h-5 w-5" />
                <span className="text-sm">Soluções Customizadas</span>
              </div>
              <div className="flex items-center gap-2">
                <Wind className="h-5 w-5" />
                <span className="text-sm">Economia de Energia</span>
              </div>
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
                title="Referência em Climatização Industrial"
                subtitle="Mais de 15 anos de experiência fornecendo soluções de climatização para os mais diversos segmentos industriais."
                alignment="left"
              />
              <p className="text-gray-600 mb-6">
                A Guiasul é especializada no desenvolvimento e instalação de
                climatizadores industriais de alta performance que proporcionam
                conforto térmico com baixo consumo energético para grandes
                ambientes como fábricas, galpões logísticos, centros de
                distribuição e indústrias de diversos segmentos.
              </p>
              <p className="text-gray-600 mb-6">
                Nossos equipamentos são projetados para oferecer máxima
                eficiência em ambientes de grande porte, utilizando tecnologia
                avançada de climatização evaporativa que garante redução
                significativa nos custos operacionais quando comparados a
                sistemas de ar condicionado convencionais.
              </p>
              <Button
                asChild
                variant="default"
                className="btn-primary flex items-center gap-2"
              >
                <Link to="/sobre">
                  Conheça Nossa História <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="lg:order-1 flex justify-center animate-slide-in">
              <div className="w-full">
                <Carousel items={carouselCards.map((card, index) => (
                  <Card key={index} card={card} index={index} />
                ))} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Por que escolher a Guiasul?"
            subtitle="Vantagens que nos destacam no mercado de climatização industrial"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Fan className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">
                Alta Performance
              </h3>
              <p className="text-gray-600">
                Climatizadores de alto desempenho com capacidade para atender
                grandes áreas industriais com eficiência energética.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Factory className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">
                Soluções Customizadas
              </h3>
              <p className="text-gray-600">
                Desenvolvimento de projetos personalizados de acordo com as
                características específicas de cada ambiente industrial.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Wind className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">
                Economia de Energia
              </h3>
              <p className="text-gray-600">
                Reduza em até 80% os custos de energia em comparação com
                sistemas de ar condicionado convencionais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos em Destaque */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Climatizadores Industriais"
            subtitle="Conheça nossa linha de equipamentos de alta performance"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {featuredProducts.map(product =>
              <ProductCard key={product.id} product={product} />
            )}
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              variant="outline"
              className="btn-outline flex items-center gap-2 mx-auto"
            >
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para melhorar a climatização da sua indústria?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Entre em contato com a Guiasul e descubra como nossos climatizadores
            industriais podem proporcionar conforto térmico com alta eficiência
            energética.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
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
