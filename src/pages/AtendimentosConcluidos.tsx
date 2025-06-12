import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronRight, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import SectionTitle from '@/components/SectionTitle';

const AtendimentosConcluidos = () => {
  // Dados dos depoimentos
  const depoimentos = [
    {
      id: 1,
      nome: "João Silva",
      empresa: "Metalúrgica Silva Ltda",
      cargo: "Diretor de Operações",
      texto: "A instalação do climatizador industrial da Guiasul transformou nosso ambiente de trabalho. A temperatura agora é constante e agradável, melhorando muito a produtividade da equipe.",
      rating: 5,
      data: "Janeiro 2024"
    },
    {
      id: 2,
      nome: "Maria Santos",
      empresa: "Fábrica Santos & Cia",
      cargo: "Gerente de Produção",
      texto: "Excelente qualidade do equipamento e atendimento excepcional. O climatizador funciona perfeitamente há mais de 2 anos sem nenhum problema.",
      rating: 5,
      data: "Dezembro 2023"
    },
    {
      id: 3,
      nome: "Carlos Oliveira",
      empresa: "Indústria Oliveira",
      cargo: "Responsável Técnico",
      texto: "Investimento que valeu muito a pena. Reduzimos os custos com energia e melhoramos significativamente o conforto térmico do galpão industrial.",
      rating: 5,
      data: "Novembro 2023"
    }
  ];

  // Dados do FAQ
  const faqItems = [
    {
      pergunta: "Qual é o prazo de instalação de um climatizador industrial?",
      resposta: "O prazo varia de acordo com o tamanho e complexidade da instalação, mas normalmente leva de 3 a 7 dias úteis para instalações padrão."
    },
    {
      pergunta: "Os climatizadores funcionam em qualquer tipo de galpão?",
      resposta: "Sim, nossos climatizadores são adaptáveis a diferentes tipos de estruturas. Fazemos uma análise técnica prévia para determinar a melhor solução para cada caso."
    },
    {
      pergunta: "Qual é a garantia dos equipamentos?",
      resposta: "Oferecemos 2 anos de garantia para todos os equipamentos e 1 ano de garantia para a instalação, além de assistência técnica especializada."
    },
    {
      pergunta: "É necessário fazer manutenção regular?",
      resposta: "Sim, recomendamos manutenção preventiva a cada 6 meses para garantir o melhor desempenho e durabilidade do equipamento."
    },
    {
      pergunta: "Os climatizadores consomem muita energia?",
      resposta: "Nossos climatizadores são altamente eficientes energicamente, consumindo até 80% menos energia que sistemas de ar condicionado convencionais."
    },
    {
      pergunta: "Vocês atendem em todo o Brasil?",
      resposta: "Atendemos principalmente na região Sul e Sudeste, mas para projetos especiais podemos avaliar atendimento em outras regiões."
    }
  ];

  // Dados da galeria (preview) - agora com múltiplas imagens
  const galeriaPreview = [
    {
      id: 1,
      titulo: "Instalação Metalúrgica - SP",
      imagens: [
        "/public/midias/industrial1.jpeg",
        "/public/midias/images.jpg",
        "/public/midias/galeria/SupermercadoJJFaria1.jpeg"
      ],
      descricao: "Climatização completa de galpão industrial de 2000m²"
    },
    {
      id: 2,
      titulo: "Fábrica Têxtil - RJ",
      imagens: [
        "/public/midias/images.jpg",
        "/public/midias/industrial1.jpeg"
      ],
      descricao: "Sistema de climatização para ambiente de produção têxtil"
    },
    {
      id: 3,
      titulo: "Indústria Alimentícia - MG",
      imagens: [
        "/public/midias/galeria/SupermercadoJJFaria2.jpeg",
        "/public/midias/galeria/SupermercadoJJFaria3.jpeg",
        "/public/midias/industrial1.jpeg"
      ],
      descricao: "Climatização especial para controle de temperatura em produção"
    },
    {
      id: 4,
      titulo: "Galpão Logístico - SP",
      imagens: [
        "/public/midias/images.jpg",
        "/public/midias/industrial1.jpeg"
      ],
      descricao: "Instalação em centro de distribuição de grande porte"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
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
            {depoimentos.map((depoimento) => (
              <Card key={depoimento.id} className="card-hover bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex">{renderStars(depoimento.rating)}</div>
                    <span className="text-sm text-gray-500">{depoimento.data}</span>
                  </div>
                  <CardTitle className="text-lg">{depoimento.nome}</CardTitle>
                  <CardDescription>
                    {depoimento.cargo} - {depoimento.empresa}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{depoimento.texto}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
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
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.pergunta}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.resposta}
                </AccordionContent>
              </AccordionItem>
            ))}
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
            {galeriaPreview.map((projeto) => (
              <Card key={projeto.id} className="card-hover overflow-hidden">
                <div className="relative h-48 bg-gray-200">
                  <img
                    src={projeto.imagens[0]}
                    alt={projeto.titulo}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                  {projeto.imagens.length > 1 && (
                    <div className="absolute top-2 left-2">
                      <span className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                        +{projeto.imagens.length - 1} fotos
                      </span>
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{projeto.titulo}</h3>
                  <p className="text-sm text-gray-600">{projeto.descricao}</p>
                </CardContent>
              </Card>
            ))}
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
          <Link to="/contato" className="btn-secondary inline-flex items-center gap-2">
            Solicitar Orçamento
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AtendimentosConcluidos;
