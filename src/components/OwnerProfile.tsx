
import React from 'react';
import { Award, Users, Briefcase, Heart, MapPin, Calendar, Building, Target, Zap, Trophy, Flame, Star, Globe, Shield } from 'lucide-react';

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
                Fundador da Guiasul & Representante Oficial Rotoplast - MG
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>Minas Gerais</span>
                </div>
                <div className="flex items-center gap-1">
                  <Building className="h-4 w-4" />
                  <span>Empresário</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-8">
          <p className="text-gray-600 leading-relaxed mb-8 text-center">
            <span className="text-lg font-medium text-primary">"Transformando ambientes industriais com tecnologia de ponta."</span>
            <br /><br />
            Especialista em climatização industrial, comprometido em entregar soluções eficientes que fazem a diferença real no dia a dia das empresas.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="text-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <Building className="h-6 w-6 text-primary mx-auto mb-2" />
              <div className="text-xl font-bold text-gray-900">Guiasul</div>
              <div className="text-sm text-gray-600">Fundador & CEO</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <Users className="h-6 w-6 text-secondary mx-auto mb-2" />
              <div className="text-xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-600">Projetos Entregues</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <Target className="h-6 w-6 text-primary mx-auto mb-2" />
              <div className="text-xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-600">Foco em Resultados</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <Heart className="h-6 w-6 text-secondary mx-auto mb-2" />
              <div className="text-xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-600">Satisfação</div>
            </div>
          </div>
          
          {/* Simple Highlights */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-xl">
            <h4 className="text-xl font-bold text-center text-gray-800 mb-6">Por que confiar na Guiasul?</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h5 className="font-semibold text-gray-800 mb-2">Qualidade Comprovada</h5>
                <p className="text-sm text-gray-600">Produtos testados e aprovados por centenas de clientes</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Handshake className="h-6 w-6 text-secondary" />
                </div>
                <h5 className="font-semibold text-gray-800 mb-2">Atendimento Personalizado</h5>
                <p className="text-sm text-gray-600">Cada projeto recebe atenção especial e consultoria dedicada</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h5 className="font-semibold text-gray-800 mb-2">Resultados Garantidos</h5>
                <p className="text-sm text-gray-600">Soluções que realmente funcionam e geram economia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerProfile;
