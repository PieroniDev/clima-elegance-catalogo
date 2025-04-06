
import React, { useState } from 'react';
import { Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import SectionTitle from '@/components/SectionTitle';
import ProductCard, { ProductProps } from '@/components/ProductCard';
import WhatsAppButton from '@/components/WhatsAppButton';

// Dados simulados dos produtos
const productData: ProductProps[] = [
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
  },
  {
    id: "4",
    name: "Exaustor GL 36",
    description: "Sistema de exaustão profissional para ambientes industriais que necessitam de renovação constante de ar.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
    features: [
      { label: "Vazão", value: "36.000m³/h" },
      { label: "Abertura Parede", value: "1200x1200mm" },
      { label: "Consumo de energia", value: "1.1kW" },
      { label: "Alimentação", value: "220V" }
    ]
  },
  {
    id: "5",
    name: "Exaustor GL 25",
    description: "Exaustor de médio porte ideal para cozinhas industriais, restaurantes e áreas de produção.",
    image: "https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
    features: [
      { label: "Vazão", value: "25.000m³/h" },
      { label: "Abertura Parede", value: "1000x1000mm" },
      { label: "Consumo de energia", value: "0.87kW/h" },
      { label: "Alimentação", value: "220V" }
    ]
  },
  {
    id: "6",
    name: "Exaustor GL 15",
    description: "Solução compacta para pequenos ambientes comerciais que necessitam de renovação de ar.",
    image: "https://images.unsplash.com/photo-1535350356005-fd52b3b524fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
    features: [
      { label: "Vazão", value: "15.000m³/h" },
      { label: "Abertura Parede", value: "820x820mm" },
      { label: "Consumo de energia", value: "0.67kW/h" },
      { label: "Alimentação", value: "220V" }
    ]
  }
];

const categories = [
  { value: "all", label: "Todos os Produtos" },
  { value: "climatizadores", label: "Climatizadores" },
  { value: "exaustores", label: "Exaustores" }
];

const Catalogo = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredProducts = productData.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = 
      selectedCategory === "all" || 
      (selectedCategory === "climatizadores" && product.name.toLowerCase().includes("climatizador")) ||
      (selectedCategory === "exaustores" && product.name.toLowerCase().includes("exaustor"));
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/90 z-0"></div>
        <div
          className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)'
          }}
        ></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Catálogo de Produtos
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Encontre o climatizador ideal para sua empresa
            </p>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar/Filters */}
            <div className="lg:w-1/4">
              <div className="sticky top-24 bg-white rounded-lg shadow-md p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-primary mb-4">Buscar Produtos</h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      type="text"
                      placeholder="Buscar produtos..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div>
                  <h3 className="text-lg font-bold text-primary mb-4">Categorias</h3>
                  <RadioGroup value={selectedCategory} onValueChange={setSelectedCategory}>
                    {categories.map((category) => (
                      <div key={category.value} className="flex items-center space-x-2 mb-3">
                        <RadioGroupItem id={category.value} value={category.value} />
                        <Label htmlFor={category.value}>{category.label}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                
                <Separator className="my-6" />
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                  }}
                >
                  Limpar Filtros
                </Button>
              </div>
            </div>
            
            {/* Mobile Filters Toggle */}
            <div className="lg:hidden mb-6">
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-center gap-2"
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              >
                <Filter className="h-4 w-4" />
                <span>Filtros</span>
              </Button>
              
              {mobileFiltersOpen && (
                <div className="mt-4 bg-white rounded-lg shadow-md p-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-primary mb-4">Buscar Produtos</h3>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        type="text"
                        placeholder="Buscar produtos..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <Separator className="my-6" />
                  
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-4">Categorias</h3>
                    <RadioGroup value={selectedCategory} onValueChange={setSelectedCategory}>
                      {categories.map((category) => (
                        <div key={category.value} className="flex items-center space-x-2 mb-3">
                          <RadioGroupItem id={`mobile-${category.value}`} value={category.value} />
                          <Label htmlFor={`mobile-${category.value}`}>{category.label}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                  
                  <Separator className="my-6" />
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("all");
                    }}
                  >
                    Limpar Filtros
                  </Button>
                </div>
              )}
            </div>
            
            {/* Products Grid */}
            <div className="lg:w-3/4">
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-primary">
                    {selectedCategory === "all" ? "Todos os Produtos" : 
                     selectedCategory === "climatizadores" ? "Climatizadores" : "Exaustores"}
                  </h2>
                  <p className="text-gray-600">
                    {filteredProducts.length} {filteredProducts.length === 1 ? "produto encontrado" : "produtos encontrados"}
                  </p>
                </div>
                
                {filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-lg text-gray-600 mb-4">
                      Nenhum produto encontrado para os filtros selecionados.
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedCategory("all");
                      }}
                    >
                      Limpar Filtros
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Não encontrou o que procura?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Entre em contato conosco para conhecer nossa linha completa de produtos ou solicitar uma solução personalizada para sua empresa.
          </p>
          <WhatsAppButton className="mx-auto">
            Falar com um Especialista
          </WhatsAppButton>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton variant="floating" />
    </div>
  );
};

export default Catalogo;
