
import React from 'react';
import { Award, Users, Briefcase, Heart, MapPin, Calendar } from 'lucide-react';

const OwnerProfile = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Main Profile Card */}
      <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        {/* Header Section */}
        <div className="relative bg-gradient-to-r from-primary/10 to-secondary/10 p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Avatar */}
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <Users className="h-12 w-12 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white" />
            </div>
            
            {/* Info */}
            <div className="text-center md:text-left flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                Guilherme Leite de Andrade
              </h3>
              <p className="text-primary font-medium mb-2">
                Dono da Guiasul & Representante Oficial Rotoplast - MG
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>Minas Gerais</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>Dono da Guiasul</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-8">
          <p className="text-gray-600 leading-relaxed mb-8">
            Empreendedor especializado em climatização industrial, com atuação estratégica no desenvolvimento de soluções sustentáveis e tecnológicas que elevam a performance de empresas em todo o Brasil.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="text-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <Briefcase className="h-6 w-6 text-primary mx-auto mb-2" />
              <div className="text-xl font-bold text-gray-900"></div>
              <div className="text-sm text-gray-600">Dono Guiasul & Representante </div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <Users className="h-6 w-6 text-secondary mx-auto mb-2" />
              <div className="text-xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-600">Clientes</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <Award className="h-6 w-6 text-primary mx-auto mb-2" />
              <div className="text-xl font-bold text-gray-900">25+</div>
              <div className="text-sm text-gray-600">Prêmios</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <Heart className="h-6 w-6 text-secondary mx-auto mb-2" />
              <div className="text-xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-600">Satisfação</div>
            </div>
          </div>
          
          {/* Quote */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-xl border-l-4 border-primary">
            <blockquote className="text-gray-700 italic mb-3">
              "Nosso compromisso é proporcionar soluções de climatização que não apenas 
              atendem às necessidades dos nossos clientes, mas superam suas expectativas, 
              sempre com foco na sustentabilidade e inovação."
            </blockquote>
            <cite className="text-primary font-medium">— Guilherme Leite de Andrade, Fundador</cite>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerProfile;
