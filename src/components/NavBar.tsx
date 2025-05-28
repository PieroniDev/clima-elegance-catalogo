
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const whatsappUrl = "https://wa.me/5511999999999?text=Olá! Gostaria de obter um orçamento para climatizador industrial.";

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img 
                src="/lovable-uploads/logo.jpeg" 
                alt="Guiasul Logo" 
                className="h-14 w-auto"
              />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <NavLink to="/">Início</NavLink>
              <NavLink to="/sobre">Sobre Nós</NavLink>
              <NavLink to="/catalogo">Catálogo</NavLink>
              <NavLink to="/contato">Contato</NavLink>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-primary-light hover:bg-primary/10 focus:outline-none transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
          <MobileNavLink to="/" onClick={toggleMenu}>Início</MobileNavLink>
          <MobileNavLink to="/sobre" onClick={toggleMenu}>Sobre Nós</MobileNavLink>
          <MobileNavLink to="/catalogo" onClick={toggleMenu}>Catálogo</MobileNavLink>
          <MobileNavLink to="/contato" onClick={toggleMenu}>Contato</MobileNavLink>
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full flex items-center justify-center gap-2"
              onClick={toggleMenu}
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink = ({ to, children, className }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className={cn("nav-link", className)}
    >
      {children}
    </Link>
  );
};

interface MobileNavLinkProps extends NavLinkProps {
  onClick?: () => void;
}

const MobileNavLink = ({ to, children, onClick }: MobileNavLinkProps) => {
  return (
    <Link
      to={to}
      className="mobile-nav-link"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default NavBar;
