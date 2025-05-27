
import { useState } from 'react';
import { Check, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import WhatsAppButton from './WhatsAppButton';
import { Link } from 'react-router-dom';
import { m, LazyMotion, domAnimation } from 'motion';
import { ProductProps } from './ProductCard';

interface AnimatedProductCardProps {
  product: ProductProps;
  className?: string;
}

const AnimatedProductCard = ({ product, className }: AnimatedProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const whatsappMessage = `Olá! Gostaria de obter um orçamento para o climatizador industrial ${product.name}.`;
  
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={cn(
          "relative group block h-full w-full p-2",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {isHovered && (
          <m.div
            className="absolute inset-0 h-full w-full bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 block rounded-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.2 },
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              transition: { duration: 0.15, delay: 0.1 },
            }}
          />
        )}
        
        <Link 
          to={`/produto/${product.id}`}
          className="block h-full"
        >
          <m.div
            className={cn(
              "rounded-2xl h-full w-full overflow-hidden bg-white border border-gray-200/50 relative z-20",
              "shadow-lg hover:shadow-2xl transition-all duration-300",
              "backdrop-blur-sm"
            )}
            whileHover={{ 
              boxShadow: "0 25px 50px -12px rgba(0, 116, 186, 0.25)",
              borderColor: "rgba(0, 116, 186, 0.3)"
            }}
          >
            {/* Image Section */}
            <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary/5 to-secondary/5">
              {product.image ? (
                <m.img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 bg-primary/20 rounded-full flex items-center justify-center">
                      <Check className="h-8 w-8 text-primary" />
                    </div>
                    <span className="text-primary font-medium text-sm">Produto Industrial</span>
                  </div>
                </div>
              )}
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              
              {/* Product name overlay */}
              <m.div 
                className="absolute bottom-0 left-0 right-0 p-4"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-white text-lg font-bold leading-tight">{product.name}</h3>
              </m.div>
            </div>
            
            {/* Content Section */}
            <div className="relative z-50 p-6">
              <m.p 
                className="text-gray-600 mb-4 text-sm leading-relaxed"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {product.description}
              </m.p>
              
              {/* Features */}
              <div className="space-y-2 mb-6">
                {product.features.slice(0, 3).map((feature, index) => (
                  <m.div 
                    key={index} 
                    className="flex items-start"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Check className="h-4 w-4 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-xs">
                      <span className="font-medium text-primary">{feature.label}:</span>{' '}
                      <span className="text-gray-600">{feature.value || 'Consulte especificações'}</span>
                    </p>
                  </m.div>
                ))}
                
                {product.features.length > 3 && (
                  <m.div 
                    className="flex items-center text-xs text-primary mt-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <span>Ver mais especificações</span>
                    <ChevronRight className="h-3 w-3 ml-1" />
                  </m.div>
                )}
              </div>
              
              {/* CTA Button */}
              <m.div 
                className="pt-4 border-t border-gray-100"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <WhatsAppButton 
                  message={whatsappMessage} 
                  className="w-full justify-center bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary transition-all duration-300"
                  onClick={(e) => e.preventDefault()}
                >
                  <m.span
                    initial={{ opacity: 0.9 }}
                    whileHover={{ opacity: 1 }}
                  >
                    Solicitar Orçamento
                  </m.span>
                </WhatsAppButton>
              </m.div>
            </div>
          </m.div>
        </Link>
      </m.div>
    </LazyMotion>
  );
};

export default AnimatedProductCard;
