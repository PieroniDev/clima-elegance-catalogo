
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <img 
              src="/lovable-uploads/5e1aea5c-66ab-4413-85bb-a9a9e2c423d2.png" 
              alt="Guiasul Logo" 
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm mt-4 text-gray-300">
              Especialistas em climatizadores industriais de alta performance.
              Tecnologia avançada para grandes ambientes industriais.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-600 pb-2">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-secondary transition-colors duration-300">Início</Link>
              </li>
              <li>
                <Link to="/sobre" className="hover:text-secondary transition-colors duration-300">Sobre Nós</Link>
              </li>
              <li>
                <Link to="/catalogo" className="hover:text-secondary transition-colors duration-300">Catálogo</Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-secondary transition-colors duration-300">Contato</Link>
              </li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-600 pb-2">Produtos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/catalogo" className="hover:text-secondary transition-colors duration-300">Climatizadores Industriais</Link>
              </li>
              <li>
                <Link to="/catalogo" className="hover:text-secondary transition-colors duration-300">Climatizadores para Galpões</Link>
              </li>
              <li>
                <Link to="/catalogo" className="hover:text-secondary transition-colors duration-300">Sistemas de Climatização</Link>
              </li>
              <li>
                <Link to="/catalogo" className="hover:text-secondary transition-colors duration-300">Manutenção e Assistência</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-600 pb-2">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-secondary flex-shrink-0 mt-0.5" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-secondary flex-shrink-0 mt-0.5" />
                <span>contato@guiasul.com.br</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-secondary flex-shrink-0 mt-0.5" />
                <span>Av. Industrial, 1000 - São Paulo, SP</span>
              </li>
              <li className="flex items-center space-x-4 pt-4">
                <a href="#" className="text-white hover:text-secondary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-white hover:text-secondary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-white hover:text-secondary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Guiasul. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/politica-privacidade" className="text-sm text-gray-300 hover:text-white transition-colors">
              Política de Privacidade
            </Link>
            <Link to="/termos-uso" className="text-sm text-gray-300 hover:text-white transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
