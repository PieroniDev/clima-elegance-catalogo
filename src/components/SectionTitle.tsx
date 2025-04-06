
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  alignment = 'center',
  className 
}: SectionTitleProps) => {
  return (
    <div className={cn(
      "mb-12",
      {
        "text-left": alignment === 'left',
        "text-center": alignment === 'center',
        "text-right": alignment === 'right',
      },
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">{title}</h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
      )}
      <div className={cn(
        "h-1 bg-secondary w-20 mt-4",
        {
          "ml-0 mr-auto": alignment === 'left',
          "mx-auto": alignment === 'center',
          "ml-auto mr-0": alignment === 'right',
        }
      )} />
    </div>
  );
};

export default SectionTitle;
