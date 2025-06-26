import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ArrowLeft, Check, FileText, Factory, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import WhatsAppButton from "@/components/WhatsAppButton";
import BrasilIcon from "../icons/brasil.svg";
import MotorIcon from "../icons/motor.svg";
import RotorIcon from "../icons/rotor.svg";
import VelocidadeIcon from "../icons/velocidade.svg";
import VelocimetroIcon from "../icons/velocimetro.svg";
import VoltagemIcon from "../icons/voltagem.svg";

// We need to export productData from Catalogo
import { productData } from "@/pages/Catalogo";

const ProdutoDetalhe = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("ficha-tecnica");

  // Encontra o produto com base no ID da URL
  const produto = productData.find(p => p.id === id);

  const form = useForm({
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      cidade: "",
      estado: "",
      pais: "Brasil",
      privacidade: false
    }
  });

  if (!produto) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Produto não encontrado</h1>
        <Button onClick={() => navigate("/catalogo")}>
          Voltar para o Catálogo
        </Button>
      </div>
    );
  }

  const handleSubmit = (data: any) => {
    if (!data.privacidade) {
      toast({
        title: "Erro no formulário",
        description: "Você precisa concordar com a política de privacidade.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Solicitação enviada",
      description: "Entraremos em contato em breve com seu orçamento."
    });

    form.reset();
  };

  // Adicionamos algumas especificações técnicas fictícias para demonstração
  const especificacoes = [
    { label: "Modelo", value: produto.name },
    { label: "Vazão", value: "180.000 m³/h" },
    { label: "Consumo de energia", value: "32 kWh | 40(cv)" },
    { label: "Dimensão externa", value: "2380x3300x3300 mm (ALP)" },
    { label: "Abertura para duto", value: "1140x1140 mm (AL)" },
    { label: "Peso", value: "1400 kg (sem água)" }
  ];

  // Características adicionais
  const caracteristicas = [
    { icon: RotorIcon, label: "Rotor em Aço Inox" },
    { icon: VelocimetroIcon, label: "Painel Analógico de 10 Velocidades" },
    { icon: BrasilIcon, label: "Produzido no Brasil" },
    { icon: VoltagemIcon, label: "Tensão T/F 220v | 380v | 440v" },
    { icon: VelocidadeIcon, label: "10 Velocidades" },
    { icon: MotorIcon, label: "Motores WEG" }
  ];

  // Opcionais disponíveis
  const opcionais = [
    { icon: "https://placehold.co/60", label: "Painel digital (IHM)" }
  ];

  // Aplicações do produto
  const aplicacoes = [
    "Indústrias têxteis",
    "Galpões industriais",
    "Fábricas",
    "Áreas de produção",
    "Armazéns",
    "Eventos de grande porte"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with breadcrumbs */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-2 text-sm">
          <Button
            variant="ghost"
            size="sm"
            className="gap-1"
            onClick={() => navigate("/catalogo")}
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao Catálogo
          </Button>
          <span className="text-gray-400">/</span>
          <span className="text-primary font-medium">
            {produto.name}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coluna da esquerda - Imagem e informações principais */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h1 className="text-3xl font-bold text-primary mb-4">
                  {produto.name}
                </h1>
                <p className="text-gray-600 mb-6">
                  {produto.description}
                </p>

                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-6">
                  <img
                    src={produto.image}
                    alt={produto.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h2 className="text-xl font-bold mb-4">Características</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {caracteristicas.map((item, index) =>
                    <div
                      key={index}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mb-3">
                        <img
                          src={item.icon}
                          alt={item.label}
                          className="w-12 h-12"
                        />
                      </div>
                      <p className="text-sm">
                        {item.label}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <div className="border-b">
                  <TabsList className="bg-transparent h-auto p-0">
                    <TabsTrigger
                      value="ficha-tecnica"
                      className={cn(
                        "flex gap-2 py-4 px-6 rounded-none border-b-2 border-transparent data-[state=active]:border-primary",
                        "data-[state=active]:shadow-none data-[state=active]:bg-transparent"
                      )}
                    >
                      <FileText className="h-5 w-5" />
                      Ficha Técnica
                    </TabsTrigger>
                    <TabsTrigger
                      value="aplicacoes"
                      className={cn(
                        "flex gap-2 py-4 px-6 rounded-none border-b-2 border-transparent data-[state=active]:border-primary",
                        "data-[state=active]:shadow-none data-[state=active]:bg-transparent"
                      )}
                    >
                      <Factory className="h-5 w-5" />
                      Aplicações
                    </TabsTrigger>
                    <TabsTrigger
                      value="opcionais"
                      className={cn(
                        "flex gap-2 py-4 px-6 rounded-none border-b-2 border-transparent data-[state=active]:border-primary",
                        "data-[state=active]:shadow-none data-[state=active]:bg-transparent"
                      )}
                    >
                      <Settings className="h-5 w-5" />
                      Opcionais
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="ficha-tecnica" className="mt-0 p-6">
                  <div className="space-y-4">
                    {especificacoes.map((spec, index) =>
                      <div key={index} className="flex">
                        <div className="w-10 flex-shrink-0 flex items-center justify-center">
                          <div className="w-6 h-6 rounded-full bg-yellow-300 flex items-center justify-center">
                            <span className="text-primary text-xs">→</span>
                          </div>
                        </div>
                        <div className="flex-grow border-b pb-3">
                          <h3 className="font-bold text-gray-800">
                            {spec.label}
                          </h3>
                          <p className="text-gray-600">
                            {spec.value}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="aplicacoes" className="mt-0 p-6">
                  <h2 className="text-xl font-bold mb-4">
                    Aplicações do Produto
                  </h2>
                  <p className="mb-6">
                    Veja alguns exemplos de aplicações desse produto:
                  </p>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {aplicacoes.map((aplicacao, index) =>
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span>
                          {aplicacao}
                        </span>
                      </li>
                    )}
                  </ul>
                </TabsContent>

                <TabsContent value="opcionais" className="mt-0 p-6">
                  <h2 className="text-xl font-bold mb-4">Itens Opcionais</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {opcionais.map((item, index) =>
                      <Card key={index}>
                        <CardContent className="p-4 flex flex-col items-center text-center">
                          <div className="mb-3 p-2">
                            <img
                              src={item.icon}
                              alt={item.label}
                              className="w-12 h-12"
                            />
                          </div>
                          <p>
                            {item.label}
                          </p>
                        </CardContent>
                      </Card>
                    )}
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-bold mb-3">
                      Formas de pagamento
                    </h3>
                    <div className="flex flex-wrap gap-3 items-center">
                      <img
                        src="https://via.placeholder.com/80x40"
                        alt="BNDES"
                        className="h-8"
                      />
                      <img
                        src="https://via.placeholder.com/80x40"
                        alt="Cartão de Crédito"
                        className="h-8"
                      />
                      <img
                        src="https://via.placeholder.com/80x40"
                        alt="Boleto"
                        className="h-8"
                      />
                    </div>

                    <div className="mt-4">
                      <p className="text-sm text-gray-500">
                        Outras formas de pagamento: BNDES | PROGER | FINAME |
                        LEASING
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Coluna da direita - Formulário de orçamento */}
          <div className="lg:col-span-1">
            <div className="bg-yellow-400 rounded-lg shadow-md overflow-hidden sticky top-24">
              <div className="p-6">
                <h2 className="text-xl font-bold mb-6">
                  Solicitar orçamento deste produto:
                </h2>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="space-y-4"
                  >
                    <FormField
                      control={form.control}
                      name="nome"
                      render={({ field }) =>
                        <FormItem>
                          <FormLabel className="sr-only">Nome</FormLabel>
                          <FormControl>
                            <Input placeholder="Nome *" required {...field} />
                          </FormControl>
                        </FormItem>}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) =>
                        <FormItem>
                          <FormLabel className="sr-only">E-mail</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="E-mail *"
                              required
                              {...field}
                            />
                          </FormControl>
                        </FormItem>}
                    />

                    <FormField
                      control={form.control}
                      name="telefone"
                      render={({ field }) =>
                        <FormItem>
                          <FormLabel className="sr-only">Telefone</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Telefone ou celular *"
                              required
                              {...field}
                            />
                          </FormControl>
                        </FormItem>}
                    />

                    <FormField
                      control={form.control}
                      name="cidade"
                      render={({ field }) =>
                        <FormItem>
                          <FormLabel className="sr-only">Cidade</FormLabel>
                          <FormControl>
                            <Input placeholder="Cidade *" required {...field} />
                          </FormControl>
                        </FormItem>}
                    />

                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="estado"
                        render={({ field }) =>
                          <FormItem>
                            <FormLabel className="sr-only">Estado</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Estado *"
                                required
                                {...field}
                              />
                            </FormControl>
                          </FormItem>}
                      />

                      <FormField
                        control={form.control}
                        name="pais"
                        render={({ field }) =>
                          <FormItem>
                            <FormLabel className="sr-only">País</FormLabel>
                            <FormControl>
                              <Input placeholder="País *" required {...field} />
                            </FormControl>
                          </FormItem>}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="privacidade"
                      render={({ field }) =>
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm font-normal">
                              Eu concordo com a{" "}
                              <a href="#" className="text-primary underline">
                                política de privacidade
                              </a>{" "}
                              do site
                            </FormLabel>
                          </div>
                        </FormItem>}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-gray-800 hover:bg-gray-900"
                    >
                      Quero um orçamento
                    </Button>
                  </form>
                </Form>

                <div className="mt-6">
                  <WhatsAppButton
                    message={`Olá! Gostaria de obter um orçamento para ${produto.name}`}
                    className="w-full justify-center"
                  >
                    Falar com um Consultor
                  </WhatsAppButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdutoDetalhe;
