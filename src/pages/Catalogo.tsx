import React, { useState, useEffect } from 'react';
import { Filter, Search, Building, Fan, Home, SunSnow } from 'lucide-react';
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
  // 1
  {
    id: "1",
    name: "Roto 160 Evolution",
    description: "Climatizador de grande porte para ambientes industriais, ideal para galpões e fábricas.",
    image: "",
    features: [
      { label: "Vazão", value: "57.000m³/h" },
      { label: "Tensão", value: "M/F 220v" },
      { label: "Dimensão Externa", value: "1560x1980x1230 mm (ALP)" },
      { label: "Abertura da Parede", value: "1570x1570mm (AL)" },
      { label: "Peso", value: "261 Kg (sem água)" }
    ]
  },
  // 2
  {
    id: "2",
    name: "Roto 140 Evolution",
    description: "Solução intermediária para médias indústrias e ambientes comerciais de grande porte.",
    image: "",
    features: [
      { label: "Vazão", value: "57.000m³/h" },
      { label: "Tensão", value: "M/F 220v" },
      { label: "Dimensão Externa", value: "1560x1980x1230 mm (ALP)" },
      { label: "Abertura da Parede", value: "1570x1570mm (AL)" },
      { label: "Peso", value: "261 Kg (sem água)" }
    ]
  },
  // 3
  {
    id: "3",
    name: "Roto 100 Evolution",
    description: "Modelo compacto para pequenas indústrias, comércios e espaços corporativos.",
    image: "",
    features: [
      { label: "Vazão", value: "" },
      { label: "Tensão", value: "" },
      { label: "Dimensão Externa", value: "" },
      { label: "Abertura da Parede", value: "" },
      { label: "Peso", value: "" }
    ]
  },
  // 4
  {
    id: "4",
    name: "Roto 95 Evolution",
    description: "Sistema de exaustão profissional para ambientes industriais que necessitam de renovação constante de ar.",
    image: "",
    features: [
      { label: "Vazão", value: "" },
      { label: "Tensão", value: "" },
      { label: "Dimensão Externa", value: "" },
      { label: "Abertura da Parede", value: "" },
      { label: "Peso", value: "" }
    ]
  },
  // 5
  {
    id: "5",
    name: "Roto 80 Evolution",
    description: "Exaustor de médio porte ideal para cozinhas industriais, restaurantes e áreas de produção.",
    image: "",
    features: [
      { label: "Vazão", value: "" },
      { label: "Tensão", value: "" },
      { label: "Dimensão Externa", value: "" },
      { label: "Abertura da Parede", value: "" },
      { label: "Peso", value: "" }
    ]
  },
  // 6
  {
    id: "6",
    name: "Roto 180 Confort/Touch",
    description: "Solução compacta para pequenos ambientes comerciais que necessitam de renovação de ar.",
    image: "",
    features: [
      { label: "Vazão", value: "" },
      { label: "Tensão", value: "" },
      { label: "Dimensão Externa", value: "" },
      { label: "Abertura da Parede", value: "" },
      { label: "Peso", value: "" }
    ]
  },
  // 7
  {
    id: "7",
    name: "Roto 170 Confort/Touch",
    description: "Descrição do produto 7.",
    image: "",
    features: [{ label: "Vazão", value: "" },
      { label: "Tensão", value: "" },
      { label: "Dimensão Externa", value: "" },
      { label: "Abertura da Parede", value: "" },
      { label: "Peso", value: "" }]
  },
  // 8
  {
    id: "8",
    name: "Roto 160 Confort/Touch",
    description: "Descrição do produto 8.",
    image: "",
    features: [{ label: "Vazão", value: "" },
      { label: "Tensão", value: "" },
      { label: "Dimensão Externa", value: "" },
      { label: "Abertura da Parede", value: "" },
      { label: "Peso", value: "" }]
  },
  // 9
  {
    id: "9",
    name: "Roto 140 Confort/Touch",
    description: "Descrição do produto 9.",
    image: "",
    features: [{ label: "Vazão", value: "" },
      { label: "Tensão", value: "" },
      { label: "Dimensão Externa", value: "" },
      { label: "Abertura da Parede", value: "" },
      { label: "Peso", value: "" }]
  },
  // 10
  {
    id: "10",
    name: "Roto 100 Confort/Touch",
    description: "Descrição do produto 10.",
    image: "",
    features: [{ label: "Vazão", value: "" },
      { label: "Tensão", value: "" },
      { label: "Dimensão Externa", value: "" },
      { label: "Abertura da Parede", value: "" },
      { label: "Peso", value: "" }]
  },
  // 11
  {
    id: "11",
    name: "Roto 95 Confort/Touch",
    description: "Descrição do produto 11.",
    image: "",
    features: [{ label: "Vazão", value: "" },
      { label: "Tensão", value: "" },
      { label: "Dimensão Externa", value: "" },
      { label: "Abertura da Parede", value: "" },
      { label: "Peso", value: "" }]
  },
  // 12
  {
    id: "12",
    name: "Roto 80 Touch",
    description: "Descrição do produto 12.",
    image: "",
    features: [{ label: "Vazão", value: "" },
      { label: "Tensão", value: "" },
      { label: "Dimensão Externa", value: "" },
      { label: "Abertura da Parede", value: "" },
      { label: "Peso", value: "" }]
  },
  // 13
  {
    id: "13",
    name: "Roto 70 Touch",
    description: "Descrição do produto 13.",
    image: "",
    features: [{ label: "Vazão", value: "" },
      { label: "Tensão", value: "" },
      { label: "Dimensão Externa", value: "" },
      { label: "Abertura da Parede", value: "" },
      { label: "Peso", value: "" }]
  },
  // 14
  {
    id: "14",
    name: "Roto 170 Standard",
    description: "Descrição do produto 14.",
    image: "",
    features: [{ label: "Vazão", value: "" },
      { label: "Tensão", value: "" },
      { label: "Dimensão Externa", value: "" },
      { label: "Abertura da Parede", value: "" },
      { label: "Peso", value: "" }]
  },
  // 15
  {
    id: "15",
    name: "Roto 160 Standard",
    description: "Descrição do produto 15.",
    image: "",
    features: [{ label: "Vazão", value: "" },
      { label: "Tensão", value: "" },
      { label: "Dimensão Externa", value: "" },
      { label: "Abertura da Parede", value: "" },
      { label: "Peso", value: "" }]
  },
  // 16
  {
    id: "16",
    name: "Roto 140 Standard",
    description: "Descrição do produto 16.",
    image: "",
    features: [{ label: "Vazão", value: "" },
      { label: "Tensão", value: "" },
      { label: "Dimensão Externa", value: "" },
      { label: "Abertura da Parede", value: "" },
      { label: "Peso", value: "" }]
  },
  // 17
  {
    id: "17",
    name: "Roto 100 Standard",
    description: "Descrição do produto 17.",
    image: "",
    features: [{ label: "Vazão", value: "" },
      { label: "Tensão", value: "" },
      { label: "Dimensão Externa", value: "" },
      { label: "Abertura da Parede", value: "" },
      { label: "Peso", value: "" }]
  },
  // 18
  {
    id: "18",
    name: "Roto 95 Standard",
    description: "Descrição do produto 18.",
    image: "",
    features: [{ label: "Vazão", value: "" },
      { label: "Tensão", value: "" },
      { label: "Dimensão Externa", value: "" },
      { label: "Abertura da Parede", value: "" },
      { label: "Peso", value: "" }]
  },
  // 19
  {
    id: "19",
    name: "Roto 80 Standard",
    description: "Descrição do produto 19.",
    image: "",
    features: [{ label: "Vazão", value: "" },
      { label: "Tensão", value: "" },
      { label: "Dimensão Externa", value: "" },
      { label: "Abertura da Parede", value: "" },
      { label: "Peso", value: "" }]
  },
  // 20
  {
    id: "20",
    name: "Central 200 Evaporativa",
    description: "Descrição do produto 20.",
    image: "",
    features: [{ label: "Vazão", value: "" },
      { label: "Tensão", value: "" },
      { label: "Dimensão Externa", value: "" },
      { label: "Abertura da Parede", value: "" },
      { label: "Peso", value: "" }]
  },
  // 21
  {
    id: "21",
    name: "Roto 155 Siroco",
    description: "Descrição do produto 21.",
    image: "",
    features: [{ label: "Vazão", value: "" },
      { label: "Tensão", value: "" },
      { label: "Dimensão Externa", value: "" },
      { label: "Abertura da Parede", value: "" },
      { label: "Peso", value: "" }]
  },
  // 22
  {
    id: "22",
    name: "Roto 115 Siroco",
    description: "Descrição do produto 22.",
    image: "",
    features: [{ label: "Vazão", value: "" },
      { label: "Tensão", value: "" },
      { label: "Dimensão Externa", value: "" },
      { label: "Abertura da Parede", value: "" },
      { label: "Peso", value: "" }]
  },
  // 23
  {
    id: "23",
    name: "Roto 85 Siroco",
    description: "Descrição do produto 23.",
    image: "",
    features: [{ label: "Vazão", value: "" },
      { label: "Tensão", value: "" },
      { label: "Dimensão Externa", value: "" },
      { label: "Abertura da Parede", value: "" },
      { label: "Peso", value: "" }]
  },
  // 24
  {
    id: "24",
    name: "Roto 25 Siroco",
    description: "Descrição do produto 24.",
    image: "",
    features: [{ label: "Vazão", value: "" },
      { label: "Tensão", value: "" },
      { label: "Dimensão Externa", value: "" },
      { label: "Abertura da Parede", value: "" },
      { label: "Peso", value: "" }]
  },
  // 25
  {
    id: "25",
    name: "Roto 150 Teto",
    description: "Descrição do produto 25.",
    image: "",
    features: [{ label: "Vazão", value: "" },
      { label: "Tensão", value: "" },
      { label: "Dimensão Externa", value: "" },
      { label: "Abertura da Parede", value: "" },
      { label: "Peso", value: "" }]
  },
  // 26
  {
    id: "26",
    name: "Roto 100 Teto",
    description: "Descrição do produto 26.",
    image: "",
    features: [{ label: "Vazão", value: "" },
      { label: "Tensão", value: "" },
      { label: "Dimensão Externa", value: "" },
      { label: "Abertura da Parede", value: "" },
      { label: "Peso", value: "" }]
  },
  // 27
  {
    id: "27",
    name: "Roto 90 Teto",
    description: "Descrição do produto 27.",
    image: "",
    features: [{ label: "Vazão", value: "" },
      { label: "Tensão", value: "" },
      { label: "Dimensão Externa", value: "" },
      { label: "Abertura da Parede", value: "" },
      { label: "Peso", value: "" }]
  },
  // 28
  {
    id: "28",
    name: "Exaustor 160",
    description: "Descrição do produto 28.",
    image: "",
    features: [{ label: "Vazão", value: "" },
      { label: "Tensão", value: "" },
      { label: "Dimensão Externa", value: "" },
      { label: "Abertura da Parede", value: "" },
      { label: "Peso", value: "" }]
  },
  // 29
  {
    id: "29",
    name: "Exaustor 140",
    description: "Descrição do produto 29.",
    image: "",
    features: [{ label: "Vazão", value: "" },
      { label: "Tensão", value: "" },
      { label: "Dimensão Externa", value: "" },
      { label: "Abertura da Parede", value: "" },
      { label: "Peso", value: "" }]
  },
  // 30
  {
    id: "30",
    name: "Exaustor 100",
    description: "Descrição do produto 30.",
    image: "",
    features: [{ label: "Vazão", value: "" },
      { label: "Tensão", value: "" },
      { label: "Dimensão Externa", value: "" },
      { label: "Abertura da Parede", value: "" },
      { label: "Peso", value: "" }]
  },
  // 31
  {
    id: "31",
    name: "Exaustor 80",
    description: "Descrição do produto 31.",
    image: "",
    features: [{ label: "Vazão", value: "" },
      { label: "Tensão", value: "" },
      { label: "Dimensão Externa", value: "" },
      { label: "Abertura da Parede", value: "" },
      { label: "Peso", value: "" }]
  },
  // 32
  {
    id: "32",
    name: "Exaustor 54",
    description: "Descrição do produto 32.",
    image: "",
    features: [{ label: "Vazão", value: "" },
      { label: "Tensão", value: "" },
      { label: "Dimensão Externa", value: "" },
      { label: "Abertura da Parede", value: "" },
      { label: "Peso", value: "" }]
  },
  // 33
  {
    id: "33",
    name: "Roto 65 Sense",
    description: "Descrição do produto 33.",
    image: "",
    features: [{ label: "Vazão", value: "" },
      { label: "Tensão", value: "" },
      { label: "Dimensão Externa", value: "" },
      { label: "Abertura da Parede", value: "" },
      { label: "Peso", value: "" }]
  },
  // 34
  {
    id: "34",
    name: "Roto 60 Sense",
    description: "Descrição do produto 34.",
    image: "",
    features: [{ label: "Vazão", value: "" },
      { label: "Tensão", value: "" },
      { label: "Dimensão Externa", value: "" },
      { label: "Abertura da Parede", value: "" },
      { label: "Peso", value: "" }]
  },
  // 35
  {
    id: "35",
    name: "Roto 30 Sense",
    description: "Descrição do produto 35.",
    image: "",
    features: [{ label: "Vazão", value: "" },
      { label: "Tensão", value: "" },
      { label: "Dimensão Externa", value: "" },
      { label: "Abertura da Parede", value: "" },
      { label: "Peso", value: "" }]
  },
  // 36
  {
    id: "36",
    name: "Exaustor 60 Sense",
    description: "Descrição do produto 36.",
    image: "",
    features: [{ label: "Vazão", value: "" },
      { label: "Tensão", value: "" },
      { label: "Dimensão Externa", value: "" },
      { label: "Abertura da Parede", value: "" },
      { label: "Peso", value: "" }]
  },
  // 37
  {
    id: "37",
    name: "Roto 58 Portátil",
    description: "Descrição do produto 37.",
    image: "",
    features: [{ label: "Vazão", value: "" },
      { label: "Tensão", value: "" },
      { label: "Dimensão Externa", value: "" },
      { label: "Abertura da Parede", value: "" },
      { label: "Peso", value: "" }]
  },
  // 38
  {
    id: "38",
    name: "Roto 55 Portátil Alongado", 
    description: "Descrição do produto 38.",
    image: "",
    features: [{ label: "Vazão", value: "" },
      { label: "Tensão", value: "" },
      { label: "Dimensão Externa", value: "" },
      { label: "Abertura da Parede", value: "" },
      { label: "Peso", value: "" }]
  },
  // 39
  {
    id: "39",
    name: "Roto 55 Portátil",
    description: "Descrição do produto 39.",
    image: "",
    features: [{ label: "Vazão", value: "" },
      { label: "Tensão", value: "" },
      { label: "Dimensão Externa", value: "" },
      { label: "Abertura da Parede", value: "" },
      { label: "Peso", value: "" }]
  },
  // 40
  {
    id: "40",
    name: "Roto 52 Portátil",
    description: "Descrição do produto 40.",
    image: "",
    features: [{ label: "Vazão", value: "" },
      { label: "Tensão", value: "" },
      { label: "Dimensão Externa", value: "" },
      { label: "Abertura da Parede", value: "" },
      { label: "Peso", value: "" }]
  },
  // 41
  {
    id: "41",
    name: "Roto 49 Portátil",
    description: "Descrição do produto 42.",
    image: "",
    features: [{ label: "Vazão", value: "14.000 m³/h" },
      { label: "Tensão", value: "M/F 220V" },
      { label: "Dimensão Externa", value: "1960x680x420mm (ALP)" },
      { label: "Peso", value: "35 Kg (sem água)" }]
  },
  {
    id: "42",
    name: "Roto 46 Portátil",
    description: "Descrição do produto 43.",
    image: "",
    features: [{ label: "Vazão", value: "7.000 m³/h" },
      { label: "Tensão", value: "M/F 127v | 220v" },
      { label: "Consumo de Energia", value: " 0,320 Kwh" },
      { label: "Dimensão Externa", value: "1930x680x420mm (ALP)" },
      { label: "Peso", value: "20 Kg (sem água)" }]
  },
  {
    id: "43",
    name: "Roto 44 Portátil",
    description: "Descrição do produto 44.",
    image: "",
    features: [{ label: "Vazão", value: "7.000 m³/h" },
      { label: "Tensão", value: "M/F 127v | 220v" },
      { label: "Consumo de Energia", value: " 0,320 Kwh" },
      { label: "Dimensão Externa", value: "1930x680x420mm (ALP)" },
      { label: "Peso", value: "20 Kg (sem água)" }]
  },
  {
    id: "44",
    name: "Ventilador HVLS 7000",
    description: "Descrição do produto 42.",
    image: "",
    features: [{ label: "Vazão", value: "430.000m³/h" },
      { label: "Tensão", value: "M/F 220v" },
      { label: "Consumo de Energia", value: " 1,5 Kwh" },
      { label: "Dimensão Externa", value: "Altura: 900mm | Diâmetro: 7000 mm" },
      { label: "Peso", value: "250 Kg" }]
  },{
    id: "45",
    name: "Ventilador HVLS 5000",
    description: "Descrição do produto 43.",
    image: "",
    features: [{ label: "Vazão", value: "280000" },
      { label: "Tensão", value: "M/F 220v" },
      { label: "Consumo de Energia", value: " 1,1 Kwh" },
      { label: "Dimensão Externa", value: "Altura: 900mm | Diâmetro: 5315 mm" },
      { label: "Peso", value: "200 Kg" }]
  },{
    id: "46",
    name: "Vetilador HVLS 3000",
    description: "Descrição do produto 44.",
    image: "",
    features: [{ label: "Vazão", value: "120.000 m³/h" },
      { label: "Tensão", value: "M/F 120v " },
      { label: "Consumo de Energia", value: "0.75kWh" },
      { label: "Dimensão Externa", value: "Altura: 760mm | Diâmetro: 3.370mm " },
      { label: "Peso", value: "150 Kg" }]
  },{
    id: "47",
    name: "Ventilador HVLS 2500",
    description: "Descrição do produto 47.",
    image: "",
    features: [{ label: "Vazão", value: " 170.000 m³/h" },
      { label: "Tensão", value: "M/F 220v" },
      { label: "Consumo de Energia", value: "0.75 kWh" },
      { label: "Dimensão Externa", value: " Altura: 760mm | Diâmetro: 3.370mm" },
      { label: "Peso", value: "150 Kg" }]
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
  { value: "portateis", label: "Portáteis", icon: SunSnow },
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
                
                <Separator className="my-4" />
                
                <div>
                  <h3 className="text-lg font-bold text-primary mb-3">Categorias</h3>
                  <RadioGroup value={selectedCategory} onValueChange={setSelectedCategory} className="space-y-1.5">
                    {categories.map((category) => (
                      <div key={category.value} className="flex items-center space-x-2">
                        <RadioGroupItem id={category.value} value={category.value} />
                        <Label htmlFor={category.value} className="cursor-pointer">{category.label}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                
                <Separator className="my-4" />
                
                <div>
  <h3 className="text-lg font-bold text-primary mb-3">Linha de Produtos</h3>
  <RadioGroup value={selectedLine} onValueChange={setSelectedLine} className="grid gap-2">
    
    {/* Todas as linhas */}
    <div className="flex items-center space-x-2 mb-1">
      <RadioGroupItem id="all-lines" value="" />
      <Label htmlFor="all-lines" className="cursor-pointer">Todas as linhas</Label>
    </div>

    {/* Grid das opções */}
    <div className="grid grid-cols-2 gap-2">
      {productLines.map((line, index) => {
        const isLastOdd = index === productLines.length - 1 && productLines.length % 2 === 1;

        return (
          <div 
            key={line.value} 
            className={`
              flex items-center p-2 rounded-md cursor-pointer transition-colors
              ${selectedLine === line.value ? 'bg-primary/10 shadow-sm' : 'bg-gray-50 hover:bg-gray-100'}
              ${isLastOdd ? 'col-span-2' : ''}
            `}
            onClick={() => setSelectedLine(line.value)}
          >
            <RadioGroupItem id={line.value} value={line.value} className="mr-2" />
            <div className="flex justify-between items-center w-full">
              <Label htmlFor={line.value} className="cursor-pointer text-sm">
                {line.label}
              </Label>
              <Badge variant="outline" className="ml-1 text-xs bg-primary/5 whitespace-nowrap">
                {line.count}
              </Badge>
            </div>
          </div>
        );
      })}
    </div>
  </RadioGroup>
</div>

                
                <Separator className="my-4" />
                
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
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-primary mb-3">Buscar Produtos</h3>
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
                  
                  <Separator className="my-4" />
                  
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-3">Categorias</h3>
                    <RadioGroup value={selectedCategory} onValueChange={setSelectedCategory} className="space-y-1.5">
                      {categories.map((category) => (
                        <div key={category.value} className="flex items-center space-x-2">
                          <RadioGroupItem id={`mobile-${category.value}`} value={category.value} />
                          <Label htmlFor={`mobile-${category.value}`} className="cursor-pointer">{category.label}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-3">Linha de Produtos</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {productLines.map((line) => (
                        <div 
                          key={line.value} 
                          className={`
                            flex items-center p-2 rounded-md cursor-pointer transition-colors
                            ${selectedLine === line.value ? 'bg-primary/10 shadow-sm' : 'bg-gray-50 hover:bg-gray-100'}
                          `}
                          onClick={() => setSelectedLine(line.value)}
                        >
                          <RadioGroupItem id={`mobile-${line.value}`} value={line.value} className="mr-2" />
                          <div className="flex justify-between items-center w-full">
                            <Label htmlFor={`mobile-${line.value}`} className="cursor-pointer text-sm">
                              {line.label}
                            </Label>
                            <Badge variant="outline" className="ml-1 text-xs bg-primary/5">
                              {line.count}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
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
