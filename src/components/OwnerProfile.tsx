
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
          <p className="text-gray-600 leading-relaxed mb-8">
            Visionário no setor de climatização industrial, com foco em inovação tecnológica e desenvolvimento de soluções sustentáveis que transformam ambientes corporativos em todo o Brasil. Especialista em projetos customizados que aliam eficiência energética e alta performance.
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
          
          {/* Innovative Profile Section */}
          <div className="space-y-8">
            {/* Expertise Radar */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-2xl border border-slate-200">
              <h4 className="text-xl font-bold text-slate-800 mb-6 text-center">Expertise & Conquistas</h4>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="group relative bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Star className="h-3 w-3 text-yellow-800" />
                  </div>
                  <Zap className="h-8 w-8 text-yellow-500 mb-3 group-hover:scale-110 transition-transform" />
                  <h5 className="font-semibold text-slate-800 mb-1">Inovação Tecnológica</h5>
                  <p className="text-xs text-slate-600">Soluções de ponta em climatização</p>
                </div>
                
                <div className="group relative bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                    <Trophy className="h-3 w-3 text-green-800" />
                  </div>
                  <Globe className="h-8 w-8 text-green-500 mb-3 group-hover:scale-110 transition-transform" />
                  <h5 className="font-semibold text-slate-800 mb-1">Expansão Estratégica</h5>
                  <p className="text-xs text-slate-600">Representação oficial em MG</p>
                </div>
                
                <div className="group relative bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-400 rounded-full flex items-center justify-center">
                    <Flame className="h-3 w-3 text-red-800" />
                  </div>
                  <Shield className="h-8 w-8 text-red-500 mb-3 group-hover:scale-110 transition-transform" />
                  <h5 className="font-semibold text-slate-800 mb-1">Qualidade Premium</h5>
                  <p className="text-xs text-slate-600">Padrões internacionais</p>
                </div>
                
                <div className="group relative bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                    <Star className="h-3 w-3 text-blue-800" />
                  </div>
                  <Users className="h-8 w-8 text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
                  <h5 className="font-semibold text-slate-800 mb-1">Liderança Visionária</h5>
                  <p className="text-xs text-slate-600">Transformação de mercados</p>
                </div>
                
                <div className="group relative bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center">
                    <Trophy className="h-3 w-3 text-purple-800" />
                  </div>
                  <Target className="h-8 w-8 text-purple-500 mb-3 group-hover:scale-110 transition-transform" />
                  <h5 className="font-semibold text-slate-800 mb-1">Resultados Excepcionais</h5>
                  <p className="text-xs text-slate-600">Performance comprovada</p>
                </div>
                
                <div className="group relative bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center">
                    <Flame className="h-3 w-3 text-orange-800" />
                  </div>
                  <Heart className="h-8 w-8 text-orange-500 mb-3 group-hover:scale-110 transition-transform" />
                  <h5 className="font-semibold text-slate-800 mb-1">Compromisso Total</h5>
                  <p className="text-xs text-slate-600">Excelência em atendimento</p>
                </div>
              </div>
            </div>
            
            {/* Philosophy Quote */}
            <div className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10 p-8 rounded-2xl border border-primary/20">
              <div className="absolute top-0 left-0 w-full h-full opacity-5">
                <div className="absolute top-4 left-4 text-6xl font-bold text-primary">"</div>
                <div className="absolute bottom-4 right-4 text-6xl font-bold text-secondary rotate-180">"</div>
              </div>
              
              <div className="relative z-10 text-center">
                <h4 className="text-xl font-bold text-primary mb-4">Filosofia de Trabalho</h4>
                <p className="text-lg text-slate-700 italic font-medium leading-relaxed max-w-3xl mx-auto">
                  "Cada projeto é uma oportunidade única de revolucionar ambientes industriais. 
                  Não vendemos apenas equipamentos - criamos ecossistemas de eficiência energética 
                  que transformam a produtividade e o bem-estar das pessoas."
                </p>
                <div className="mt-6 flex items-center justify-center gap-2">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary"></div>
                  <span className="text-primary font-semibold px-3">Guilherme Leite</span>
                  <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-primary"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerProfile;
