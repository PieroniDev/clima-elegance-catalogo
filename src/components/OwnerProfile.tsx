
import React from 'react';
import { Award, Users, Briefcase, Heart, MapPin, Calendar, Star } from 'lucide-react';

const OwnerProfile = () => {
  return (
    <div className="relative">
      {/* Main Profile Card */}
      <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10 opacity-60" />
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary" />
        
        {/* Floating Elements */}
        <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-full blur-xl animate-pulse delay-1000" />
        
        <div className="relative z-10 p-8">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row items-center gap-8 mb-8">
            {/* Avatar with Glow Effect */}
            <div className="relative group">
              <div className="w-32 h-32 lg:w-40 lg:h-40 relative">
                {/* Glow Ring */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                
                {/* Main Avatar */}
                <div className="relative w-full h-full bg-gradient-to-br from-primary to-secondary p-1 rounded-full">
                  <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-50 transition-colors duration-300">
                    <Users className="h-16 w-16 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                
                {/* Status Indicator */}
                <div className="absolute bottom-2 right-2 flex items-center gap-1">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
                </div>
              </div>
            </div>
            
            {/* Info Section */}
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-4">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  Guilherme Leite
                </h3>
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <p className="text-lg text-primary font-medium">
                    Dono da Guiasul & Representante Oficial Rotoplast - MG
                  </p>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>Minas Gerais, Brasil</span>
                  <Calendar className="h-4 w-4 ml-2" />
                  <span>15+ anos de experiência</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed max-w-2xl">
                Com mais de 15 anos de experiência no setor de climatização industrial, 
                Guilherme fundou a Guiasul com a missão de revolucionar o mercado brasileiro 
                através de soluções inovadoras e sustentáveis em climatização.
              </p>
            </div>
          </div>
          
          {/* Interactive Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="group relative overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 p-4 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-300" />
              <div className="relative z-10 text-center">
                <div className="flex items-center justify-center mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <Briefcase className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden bg-gradient-to-br from-secondary/5 to-secondary/10 p-4 rounded-xl border border-secondary/10 hover:border-secondary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/5 group-hover:from-secondary/5 group-hover:to-secondary/10 transition-all duration-300" />
              <div className="relative z-10 text-center">
                <div className="flex items-center justify-center mb-3">
                  <div className="p-2 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors duration-300">
                    <Users className="h-6 w-6 text-secondary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-secondary mb-1">500+</div>
                <div className="text-sm text-gray-600">Clientes Atendidos</div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 p-4 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-300" />
              <div className="relative z-10 text-center">
                <div className="flex items-center justify-center mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <Award className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary mb-1">25+</div>
                <div className="text-sm text-gray-600">Prêmios Recebidos</div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden bg-gradient-to-br from-secondary/5 to-secondary/10 p-4 rounded-xl border border-secondary/10 hover:border-secondary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/5 group-hover:from-secondary/5 group-hover:to-secondary/10 transition-all duration-300" />
              <div className="relative z-10 text-center">
                <div className="flex items-center justify-center mb-3">
                  <div className="p-2 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors duration-300">
                    <Heart className="h-6 w-6 text-secondary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-secondary mb-1">98%</div>
                <div className="text-sm text-gray-600">Satisfação</div>
              </div>
            </div>
          </div>
          
          {/* Quote Section with Enhanced Design */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-2xl" />
            <div className="relative bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-primary/20 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">"</span>
                  </div>
                </div>
                <div className="flex-1">
                  <blockquote className="text-gray-700 italic text-lg leading-relaxed mb-4">
                    "Nosso compromisso é proporcionar soluções de climatização que não apenas 
                    atendem às necessidades dos nossos clientes, mas superam suas expectativas, 
                    sempre com foco na sustentabilidade e inovação."
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <cite className="text-primary font-medium">Guilherme Leite, Fundador</cite>
                  </div>
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
