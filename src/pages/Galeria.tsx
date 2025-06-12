import React, { useState } from 'react';
import { ArrowLeft, X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '@/components/SectionTitle';

const Galeria = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Dados completos da galeria com múltiplas imagens
  const projetos = [
    {
      id: 1,
      titulo: "Instalação Metalúrgica - SP",
      imagens: [
        "/public/midias/industrial1.jpeg",
        "/public/midias/images.jpg",
        "/public/midias/galeria/SupermercadoJJFaria1.jpeg"
      ],
      descricao: "Climatização completa de galpão industrial de 2000m²",
      categoria: "Industrial",
      ano: "2024"
    },
    {
      id: 2,
      titulo: "Fábrica Têxtil - RJ",
      imagens: [
        "/public/midias/images.jpg",
        "/public/midias/industrial1.jpeg"
      ],
      descricao: "Sistema de climatização para ambiente de produção têxtil",
      categoria: "Têxtil",
      ano: "2023"
    },
    {
      id: 3,
      titulo: "Supermercado JJ Faria (Candeias)",
      imagens: [
        "/public/midias/galeria/SupermercadoJJFaria1.jpeg",
        "/public/midias/galeria/SupermercadoJJFaria2.jpeg",
        "/public/midias/galeria/SupermercadoJJFaria3.jpeg"
      ],
      descricao: "Climatização de supermercado com foco em eficiência energética",
      categoria: "Alimentícia",
      ano: "2023"
    },
    {
      id: 4,
      titulo: "Galpão Logístico - SP",
      imagens: [
        "/public/midias/images.jpg",
        "/public/midias/industrial1.jpeg"
      ],
      descricao: "Instalação em centro de distribuição de grande porte",
      categoria: "Logística",
      ano: "2024"
    },
    {
      id: 5,
      titulo: "Indústria Automotiva - SP",
      imagens: [
        "/public/midias/industrial1.jpeg",
        "/public/midias/images.jpg"
      ],
      descricao: "Sistema de climatização para linha de produção automotiva",
      categoria: "Automotiva",
      ano: "2023"
    },
    {
      id: 6,
      titulo: "Centro de Distribuição - RJ",
      imagens: [
        "/public/midias/images.jpg",
        "/public/midias/industrial1.jpeg",
        "/public/midias/galeria/SupermercadoJJFaria1.jpeg"
      ],
      descricao: "Climatização de amplo centro de distribuição",
      categoria: "Logística",
      ano: "2024"
    }
  ];

  const [filtroCategoria, setFiltroCategoria] = useState('Todos');
  const categorias = ['Todos', ...new Set(projetos.map(p => p.categoria))];

  const projetosFiltrados = filtroCategoria === 'Todos' 
    ? projetos 
    : projetos.filter(p => p.categoria === filtroCategoria);

  const abrirModal = (projeto) => {
    setSelectedProject(projeto);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const fecharModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'auto';
  };

  const proximaImagem = () => {
    if (selectedProject && currentImageIndex < selectedProject.imagens.length - 1) {
      setCurrentImageIndex(prev => prev + 1);
    }
  };

  const imagemAnterior = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/atendimentos-concluidos" 
            className="inline-flex items-center gap-2 text-gray-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para Atendimentos Concluídos
          </Link>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Galeria de Instalações
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Explore todos os nossos projetos realizados e veja a qualidade 
              das nossas instalações de climatização industrial.
            </p>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setFiltroCategoria(categoria)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filtroCategoria === categoria
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projetosFiltrados.map((projeto) => (
              <div
                key={projeto.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 card-hover cursor-pointer"
                onClick={() => abrirModal(projeto)}
              >
                <div className="relative h-64 bg-gray-200 group">
                  <img
                    src={projeto.imagens[0]}
                    alt={projeto.titulo}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {projeto.categoria}
                    </span>
                  </div>
                  {projeto.imagens.length > 1 && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                        +{projeto.imagens.length - 1} fotos
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{projeto.titulo}</h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {projeto.ano}
                    </span>
                  </div>
                  <p className="text-gray-600">{projeto.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal com navegação entre imagens */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={fecharModal}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all z-10"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="relative h-96 md:h-[500px]">
                <img
                  src={selectedProject.imagens[currentImageIndex]}
                  alt={`${selectedProject.titulo} - ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Navegação entre imagens */}
                {selectedProject.imagens.length > 1 && (
                  <>
                    {currentImageIndex > 0 && (
                      <button
                        onClick={imagemAnterior}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all"
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </button>
                    )}
                    
                    {currentImageIndex < selectedProject.imagens.length - 1 && (
                      <button
                        onClick={proximaImagem}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all"
                      >
                        <ChevronRight className="h-6 w-6" />
                      </button>
                    )}
                    
                    {/* Indicador de posição */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                      {currentImageIndex + 1} / {selectedProject.imagens.length}
                    </div>
                  </>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">{selectedProject.titulo}</h2>
                  <div className="flex gap-2">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                      {selectedProject.categoria}
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {selectedProject.ano}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-lg">{selectedProject.descricao}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Galeria;
