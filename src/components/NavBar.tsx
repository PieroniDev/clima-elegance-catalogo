
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img 
                src="/lovable-uploads/5e1aea5c-66ab-4413-85bb-a9a9e2c423d2.png" 
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
              <Button className="btn-primary flex items-center gap-2">
                <span>Orçamento</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-primary-light focus:outline-none"
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
            <Button className="btn-primary w-full">Orçamento</Button>
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
      className={cn(
        "text-primary font-medium hover:text-secondary relative transition-colors duration-300",
        "after:absolute after:w-full after:h-0.5 after:bg-secondary after:bottom-[-4px] after:left-0",
        "after:scale-x-0 hover:after:scale-x-100 after:origin-bottom-right hover:after:origin-bottom-left",
        "after:transition-transform after:duration-300",
        className
      )}
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
      className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:bg-accent transition-colors duration-300"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default NavBar;
