
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Catalogo from "./pages/Catalogo";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";
import ProdutoDetalhe from "./pages/ProdutoDetalhe";
import AtendimentosConcluidos from "./pages/AtendimentosConcluidos";
import Galeria from "./pages/Galeria";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="/produto/:id" element={<ProdutoDetalhe />} />
              <Route path="/atendimentos-concluidos" element={<AtendimentosConcluidos />} />
              <Route path="/galeria" element={<Galeria />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
