
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  className?: string;
  variant?: 'floating' | 'inline';
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void; // Add this line to support onClick prop
}

const WhatsAppButton = ({
  phoneNumber = "5511999999999",
  message = "Olá! Gostaria de obter um orçamento para climatizador industrial.",
  className,
  variant = 'inline',
  children,
  onClick, // Add this line to accept the onClick prop
}: WhatsAppButtonProps) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  if (variant === 'floating') {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-all z-50",
          "hover:scale-110",
          className
        )}
        onClick={onClick}
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    );
  }
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-all font-medium",
        className
      )}
      onClick={onClick}
    >
      <MessageCircle className="h-5 w-5" />
      {children || "Orçamento via WhatsApp"}
    </a>
  );
};

export default WhatsAppButton;
