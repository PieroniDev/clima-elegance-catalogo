
import React from 'react';
import { Award, Users, Briefcase, Heart } from 'lucide-react';

const OwnerProfile = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full translate-y-12 -translate-x-12"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Owner Photo */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 lg:w-40 lg:h-40 relative">
              <div className="w-full h-full bg-gradient-to-br from-primary to-primary-light rounded-full p-1">
                <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
                  <Users className="h-16 w-16 text-primary" />
                </div>
              </div>
              {/* Status indicator */}
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
            </div>
          </div>
          
          {/* Owner Info */}
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-2xl font-bold text-primary mb-2">João Silva</h3>
            <p className="text-lg text-secondary font-medium mb-4">Fundador & CEO da Clima Elegance</p>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Com mais de 15 anos de experiência no setor de climatização industrial, 
              João fundou a Clima Elegance com a missão de revolucionar o mercado brasileiro 
              através de soluções inovadoras e sustentáveis.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-primary/5 rounded-lg">
                <div className="flex items-center justify-center mb-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-xs text-gray-600">Anos de Experiência</div>
              </div>
              
              <div className="text-center p-3 bg-secondary/5 rounded-lg">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-5 w-5 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-secondary">500+</div>
                <div className="text-xs text-gray-600">Clientes Atendidos</div>
              </div>
              
              <div className="text-center p-3 bg-primary/5 rounded-lg">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">25+</div>
                <div className="text-xs text-gray-600">Prêmios Recebidos</div>
              </div>
              
              <div className="text-center p-3 bg-secondary/5 rounded-lg">
                <div className="flex items-center justify-center mb-2">
                  <Heart className="h-5 w-5 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-secondary">98%</div>
                <div className="text-xs text-gray-600">Satisfação</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quote */}
        <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border-l-4 border-primary">
          <blockquote className="text-gray-700 italic text-lg">
            "Nosso compromisso é proporcionar soluções de climatização que não apenas 
            atendem às necessidades dos nossos clientes, mas superam suas expectativas, 
            sempre com foco na sustentabilidade e inovação."
          </blockquote>
          <cite className="block mt-3 text-primary font-medium">- João Silva, Fundador</cite>
        </div>
      </div>
    </div>
  );
};

export default OwnerProfile;
