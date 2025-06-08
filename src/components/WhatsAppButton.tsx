import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  className?: string;
  variant?: "floating" | "inline";
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}

const WhatsAppButton = ({
  phoneNumber = "553199913768",
  message = "Olá! Gostaria de obter um orçamento para climatizador industrial.",
  className,
  variant = "inline",
  children,
  onClick
}: WhatsAppButtonProps) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  if (variant === "floating") {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-all z-50",
          "hover:scale-110 active:bg-green-800 active:scale-95",
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
      className={cn("btn-whatsapp inline-flex items-center gap-2", className)}
      onClick={onClick}
    >
      <MessageCircle className="h-5 w-5" />
      {children || "Orçamento via WhatsApp"}
    </a>
  );
};

export default WhatsAppButton;
