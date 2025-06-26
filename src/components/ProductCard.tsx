import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import WhatsAppButton from "./WhatsAppButton";
import { Link } from "react-router-dom";

export interface ProductProps {
  id: string;
  name: string;
  description: string;
  image: string;
  features: {
    label: string;
    value: string;
  }[];
}

interface ProductCardProps {
  product: ProductProps;
  className?: string;
}

const ProductCard = ({ product, className }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappMessage = `Olá! Gostaria de obter um orçamento para o climatizador industrial ${product.name}.`;

  return (
    <Link
      to={`/produto/${product.id}`}
      className={cn(
        "block bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300",
        "hover:shadow-xl hover:-translate-y-1",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-64">
        <img
          src={product.image}
          alt={product.name}
          className={cn(
            "w-full h-full object-cover transition-transform duration-500",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
          <h3 className="text-white text-xl font-bold p-4">
            {product.name}
          </h3>
        </div>
      </div>

      <div className="p-4">
        <p className="text-gray-600 mb-4">
          {product.description}
        </p>

        <div className="space-y-2 mb-6">
          {product.features.map((feature, index) =>
            <div key={index} className="flex items-start">
              <Check className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-sm">
                <span className="font-medium">{feature.label}:</span>{" "}
                {feature.value}
              </p>
            </div>
          )}
        </div>

        <div className="pt-4 border-t border-gray-200">
          <WhatsAppButton
            message={whatsappMessage}
            className="w-full justify-center"
            onClick={e => e.preventDefault()}
          >
            Solicitar Orçamento
          </WhatsAppButton>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
