import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Star, ChevronRight, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import SectionTitle from "@/components/SectionTitle";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import WhatsAppButton from "@/components/WhatsAppButton";


const AtendimentosConcluidos = () => {
  // Dados dos depoimentos
  const testimonials = [
    {
      quote:
        "A Guiasul transformou nosso ambiente de trabalho. A redução na temperatura foi impressionante e nossos funcionários ficaram muito mais produtivos.",
      name: "Carlos Mendes",
      title: "Dono da empresa tal"
    },
    {
      quote:
        "Excelente qualidade e atendimento. O climatizador industrial superou nossas expectativas e a economia de energia foi significativa.",
      name: "Ana Paula ",
      title: "Diretora industrial 123"
    },
    {
      quote:
        "Profissionais extremamente qualificados. Desde a consultoria até a instalação, tudo foi perfeito. Recomendo a todos!",
      name: "Roberto Silva",
      title: "Proprietário - Indústria ABC"
    },
    {
      quote:
        "O climatizador da Guiasul foi a melhor escolha que fizemos. Ambiente mais fresco, funcionários mais felizes e conta de energia menor.",
      name: "Mariana Costa",
      title: "Supervisora de Produção - Fábrica XYZ"
    },
    {
      quote:
        "Tecnologia de ponta e suporte técnico excepcional. Já são 3 anos de funcionamento perfeito sem nenhum problema.",
      name: "Pedro Oliveira",
      title: "Engenheiro de Produção - Indústria 456"
    }
  ];
  // Dados dos depoimentos
  const depoimentos = [
    {
      id: 1,
      nome: "João Silva",
      empresa: "Empresa XYZ",
      cargo: "Dono da empresa XYZ",
      texto:
        "Excelente serviço! O climatizador industrial que adquirimos melhorou muito o ambiente de trabalho e reduziu os custos com energia. Recomendo a todos.",
      rating: 5,
      data: "Janeiro 2024"
    },
    {
      id: 2,
      nome: "Maria das Quantas",
      empresa: "Empresa ABC",
      cargo: "Gerente da Empresa ABC",
      texto:
        "Excelente qualidade do equipamento e atendimento excepcional. O climatizador funciona perfeitamente há mais de 2 anos sem nenhum problema.",
      rating: 5,
      data: "Dezembro 2023"
    },
    {
      id: 3,
      nome: "Pedro ",
      empresa: "Industia 123",
      cargo: "Dono da Indústria 123",
      texto:
        "Investimento que valeu muito a pena. Reduzimos os custos com energia e melhoramos significativamente o conforto térmico do galpão industrial.",
      rating: 5,
      data: "Novembro 2023"
    }
  ];

  // Dados do FAQ
  const faqItems = [
    {
      pergunta: "Qual é o prazo de instalação de um climatizador industrial?",
      resposta:
        "O prazo varia de acordo com o tamanho e complexidade da instalação, mas normalmente leva de 3 a 7 dias úteis para instalações padrão."
    },
    {
      pergunta: "Os climatizadores funcionam em qualquer tipo de galpão?",
      resposta:
        "Sim, nossos climatizadores são adaptáveis a diferentes tipos de estruturas. Fazemos uma análise técnica prévia para determinar a melhor solução para cada caso."
    },
    {
      pergunta: "Qual é a garantia dos equipamentos?",
      resposta:
        "Oferecemos 2 anos de garantia para todos os equipamentos e 1 ano de garantia para a instalação, além de assistência técnica especializada."
    },
    {
      pergunta: "É necessário fazer manutenção regular?",
      resposta:
        "Sim, recomendamos manutenção preventiva a cada 6 meses para garantir o melhor desempenho e durabilidade do equipamento."
    },
    {
      pergunta: "Os climatizadores consomem muita energia?",
      resposta:
        "Nossos climatizadores são altamente eficientes energicamente, consumindo até 80% menos energia que sistemas de ar condicionado convencionais."
    },
    {
      pergunta: "Vocês atendem em todo o Brasil?",
      resposta:
        "Atendemos principalmente na região Sudeste, mas para projetos especiais podemos avaliar atendimento em outras regiões."
    }
  ];

  // Dados da galeria (preview)
  const galeriaPreview = [
    {
      id: 1,
      titulo: "Steinert Latinoamericana - Galpão Industrial",
      imagens: [
        "/public/midias/galeria/Steinert(2).jpeg",
        "/public/midias/galeria/Steinert(1).jpeg",
        "/public/midias/galeria/Steinert(4).jpeg"
      ],
      descricao: "Climatização de galpão industrial Steinert Latinoamericana"
    },
    {
      id: 2,
      titulo: "Indústria de alimentos Yupi",
      imagens: [
        "/public/midias/galeria/industriaDeAlimentosYupi(2).jpeg",
        "/public/midias/galeria/industriaDeAlimentosYupi(1).jpeg"
      ],
      descricao: "Sistema de climatização para ambiente de produção alimentícia"
    },
    {
      id: 3,
      titulo: "Supermercado JJ Faria (Candeias)",
      imagens: [
        "/public/midias/galeria/SupermercadoJJFaria1.jpeg",
        "/public/midias/galeria/SupermercadoJJFaria2.jpeg",
        "/public/midias/galeria/SupermercadoJJFaria3.jpeg"
      ],
      descricao:
        "Climatização de supermercado com foco em eficiência energética"
    },
    {
      id: 4,
      titulo: "Padrão Minas - Soluções Autoadesivas",
      imagens: [
        "/public/midias/galeria/PadraoMinas (1).jpeg",
        "/public/midias/galeria/PadraoMinas (2).jpeg"
      ],
      descricao: "Instalação em centro de distribuição de grande porte"
    }
  ];

  const renderStars = rating => {
    return Array.from({ length: 5 }, (_, i) =>
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating
          ? "fill-yellow-400 text-yellow-400"
          : "text-gray-300"}`}
      />
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Atendimentos Concluídos
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Conheça os resultados dos nossos projetos através de depoimentos,
            perguntas frequentes e galeria de instalações realizadas.
          </p>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Depoimentos de Clientes"
            subtitle="Veja o que nossos clientes falam sobre nossos serviços"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {depoimentos.map(depoimento =>
              <Card key={depoimento.id} className="card-hover bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex">
                      {renderStars(depoimento.rating)}
                    </div>
                    <span className="text-sm text-gray-500">
                      {depoimento.data}
                    </span>
                  </div>
                  <CardTitle className="text-lg">
                    {depoimento.nome}
                  </CardTitle>
                  <CardDescription>
                    {depoimento.cargo} - {depoimento.empresa}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">
                    "{depoimento.texto}"
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Alguns outros depoimentos de clientes satisfeitos
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Confira o que outros de nossos clientes dizem sobre a qualidade
              dos nossos produtos e serviços.
            </p>
          </div>

          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Perguntas Frequentes"
            subtitle="Tire suas dúvidas sobre nossos produtos e serviços"
          />

          <Accordion type="single" collapsible className="w-full mt-12">
            {faqItems.map((item, index) =>
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.pergunta}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.resposta}
                </AccordionContent>
              </AccordionItem>
            )}
          </Accordion>
        </div>
      </section>

      {/* Galeria Preview */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Galeria de Instalações"
            subtitle="Conheça alguns dos nossos projetos realizados"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {galeriaPreview.map(projeto =>
              <Card key={projeto.id} className="card-hover overflow-hidden">
                <div className="relative h-48 bg-gray-200">
                  <img
                    src={projeto.imagens[0]}
                    alt={projeto.titulo}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                  {projeto.imagens.length > 1 &&
                    <div className="absolute top-2 left-2">
                      <span className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                        +{projeto.imagens.length - 1} fotos
                      </span>
                    </div>}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {projeto.titulo}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {projeto.descricao}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/galeria"
              className="btn-primary inline-flex items-center gap-2"
            >
              Ver Galeria Completa
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para seu próximo projeto?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Entre em contato conosco e solicite um orçamento personalizado
          </p>
          <WhatsAppButton className="sm:w-auto">
            Solicitar Orçamento Personalizado
          </WhatsAppButton>
        </div>
      </section>
    </div>
  );
};

export default AtendimentosConcluidos;
