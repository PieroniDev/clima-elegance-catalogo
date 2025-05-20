import React, { useState, useEffect } from 'react';
import { Filter, Search, Building, Fan, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import SectionTitle from '@/components/SectionTitle';
import ProductCard, { ProductProps } from '@/components/ProductCard';
import WhatsAppButton from '@/components/WhatsAppButton';

// Dados simulados dos produtos - Exportamos aqui para que outros arquivos possam usar
export const productData: ProductProps[] = [
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

// Novas categorias de produtos
const categories = [
  { value: "all", label: "Todos os Produtos" },
  { value: "climatizadores", label: "Climatizadores" },
  { value: "exaustores", label: "Exaustores" }
];

// Linhas de produtos
const productLines = [
  { value: "confort-touch", label: "Confort/Touch", count: 8 },
  { value: "evolution", label: "Evolution", count: 5 },
  { value: "exaustor", label: "Exaustor", count: 5 },
  { value: "portatil", label: "Portátil", count: 7 },
  { value: "sense", label: "Sense", count: 4 },
  { value: "siroco", label: "Siroco", count: 5 },
  { value: "standard", label: "Standard", count: 6 },
  { value: "teto", label: "Teto", count: 3 },
  { value: "ventiladores-hvls", label: "Ventiladores HVLS", count: 4 },
];

// Categorias de aplicação
const applicationCategories = [
  { value: "empresarial", label: "Empresarial", icon: Building },
  { value: "industrial", label: "Industrial", icon: Fan },
  { value: "portateis", label: "Portáteis", icon: null },
  { value: "residencial", label: "Residencial", icon: Home },
];

const Catalogo = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLine, setSelectedLine] = useState("");
  const [selectedApplication, setSelectedApplication] = useState("");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState<ProductProps[]>([]);
  const [page, setPage] = useState(1);
  const productsPerPage = 8;

  // Aplicar todos os filtros
  const filteredProducts = productData.filter((product) => {
    // Filtro de busca por texto
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filtro por categoria principal
    const matchesCategory = 
      selectedCategory === "all" || 
      (selectedCategory === "climatizadores" && product.name.toLowerCase().includes("climatizador")) ||
      (selectedCategory === "exaustores" && product.name.toLowerCase().includes("exaustor"));
    
    // Simulação de filtro por linha de produto (agora usando radio button com uma única seleção)
    const matchesProductLine = selectedLine === "" || 
      product.name.toLowerCase().includes(selectedLine);
    
    // Simulação de filtro por aplicação (empresarial, industrial, etc.)
    const matchesApplication = selectedApplication === "" || 
      (selectedApplication === "industrial" && product.name.toLowerCase().includes("industrial"));
    
    return matchesSearch && matchesCategory && matchesProductLine && matchesApplication;
  });

  // Implementar lazy loading com efeito de animação
  useEffect(() => {
    const productsToShow = filteredProducts.slice(0, page * productsPerPage);
    setVisibleProducts(productsToShow);
  }, [page, filteredProducts]);

  // Detectar quando o usuário rola até o final da página
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >= 
        document.documentElement.offsetHeight - 500 &&
        visibleProducts.length < filteredProducts.length
      ) {
        setPage(prevPage => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleProducts.length, filteredProducts.length]);

  // Define the keyframes animation styles in the component
  const fadeInAnimationStyle = {
    opacity: 0,
    animation: "fadeIn 0.5s ease-out forwards"
  };

  // Add the keyframe animation to the head of the document once, on component mount
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(styleElement);

    // Clean up on unmount
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

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

      {/* Filtro de aplicação por círculos */}
      <section className="bg-white py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Filtrar por aplicação</h2>
            
            <div className="flex flex-wrap justify-center gap-6">
              {applicationCategories.map((category) => (
                <div 
                  key={category.value}
                  className="flex flex-col items-center"
                >
                  <button
                    onClick={() => setSelectedApplication(
                      selectedApplication === category.value ? "" : category.value
                    )}
                    className={`
                      w-16 h-16 rounded-full flex items-center justify-center transition-all
                      ${selectedApplication === category.value 
                        ? "bg-primary text-white shadow-lg" 
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"}
                    `}
                  >
                    {category.icon && <category.icon className="h-8 w-8" />}
                    {!category.icon && <span className="text-lg font-bold">P</span>}
                  </button>
                  <span className="text-sm font-medium mt-2">{category.label}</span>
                </div>
              ))}
            </div>
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
                        <Label htmlFor={category.value} className="cursor-pointer">{category.label}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                
                <Separator className="my-6" />
                
                <div>
                  <h3 className="text-lg font-bold text-primary mb-4">Linha de Produtos</h3>
                  <RadioGroup value={selectedLine} onValueChange={setSelectedLine} className="space-y-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <RadioGroupItem id="all-lines" value="" />
                      <Label htmlFor="all-lines" className="cursor-pointer">Todas as linhas</Label>
                    </div>
                    {productLines.map((line) => (
                      <div key={line.value} className="flex items-center bg-gray-50 p-3 rounded-md hover:bg-gray-100 transition-colors">
                        <RadioGroupItem id={line.value} value={line.value} className="mr-3" />
                        <div className="flex justify-between items-center w-full">
                          <Label htmlFor={line.value} className="cursor-pointer font-medium">
                            {line.label}
                          </Label>
                          <Badge variant="outline" className="ml-2 bg-primary/10">
                            {line.count}
                          </Badge>
                        </div>
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
                    setSelectedLine("");
                    setSelectedApplication("");
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
                          <Label htmlFor={`mobile-${category.value}`} className="cursor-pointer">{category.label}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                  
                  <Separator className="my-6" />
                  
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-4">Linha de Produtos</h3>
                    <RadioGroup value={selectedLine} onValueChange={setSelectedLine} className="space-y-3">
                      <div className="flex items-center space-x-2 mb-3">
                        <RadioGroupItem id="mobile-all-lines" value="" />
                        <Label htmlFor="mobile-all-lines" className="cursor-pointer">Todas as linhas</Label>
                      </div>
                      {productLines.map((line) => (
                        <div key={line.value} className="flex items-center p-2 rounded-md">
                          <RadioGroupItem id={`mobile-${line.value}`} value={line.value} className="mr-3" />
                          <div className="flex justify-between items-center w-full">
                            <Label htmlFor={`mobile-${line.value}`} className="cursor-pointer">
                              {line.label}
                            </Label>
                            <Badge variant="outline" className="ml-2 bg-primary/10">
                              {line.count}
                            </Badge>
                          </div>
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
                      setSelectedLine("");
                      setSelectedApplication("");
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
                    {selectedApplication ? 
                      applicationCategories.find(c => c.value === selectedApplication)?.label :
                      selectedCategory === "all" ? "Todos os Produtos" : 
                      selectedCategory === "climatizadores" ? "Climatizadores" : "Exaustores"
                    }
                  </h2>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">
                      {filteredProducts.length} {filteredProducts.length === 1 ? "produto encontrado" : "produtos encontrados"}
                    </span>
                    {selectedLine && (
                      <Badge variant="outline" className="ml-2 bg-primary/10">
                        {productLines.find(line => line.value === selectedLine)?.label}
                      </Badge>
                    )}
                  </div>
                </div>
                
                {filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {visibleProducts.map((product, index) => (
                      <div 
                        key={product.id} 
                        className="animate-fade-in" 
                        style={{ 
                          ...fadeInAnimationStyle,
                          animationDelay: `${index % productsPerPage * 0.1}s` 
                        }}
                      >
                        <ProductCard product={product} />
                      </div>
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
                        setSelectedLine("");
                        setSelectedApplication("");
                      }}
                    >
                      Limpar Filtros
                    </Button>
                  </div>
                )}
                
                {visibleProducts.length < filteredProducts.length && (
                  <div className="flex justify-center mt-8">
                    <div className="loader w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
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
