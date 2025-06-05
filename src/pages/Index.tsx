
import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Zap, Eye, Sparkles, ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Wakanda Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #8B5CF6 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, #E6B800 1px, transparent 1px),
              radial-gradient(circle at 50% 50%, #D2691E 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px, 80px 80px, 120px 120px'
          }} />
        </div>

        {/* Sacred Geometry */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 border border-amber-500/20 rounded-full animate-pulse" />
          <div className="absolute top-8 left-8 w-80 h-80 border border-purple-500/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-16 left-16 w-64 h-64 border border-amber-500/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
              MOVIMENTO
            </h1>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-amber-400 to-purple-400 bg-clip-text text-transparent">
              FUTURO ANCESTRAL
            </h1>
          </div>
          
          <div className="text-2xl md:text-3xl text-purple-300 mb-8 italic">
            A Revolução dos Magos Digitais
          </div>
          
          <div className="flex items-center justify-center space-x-4 mb-12">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-amber-500" />
            <Sparkles className="text-amber-400" size={24} />
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-amber-500" />
          </div>
          
          <div className="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto">
            "Reconectando código e consciência antes que seja tarde demais"
          </div>
          
          <Link
            to="/manual"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-amber-600 px-8 py-4 rounded-xl text-white font-bold text-lg hover:scale-105 transition-transform shadow-lg hover:shadow-purple-500/25"
          >
            <Book size={24} />
            <span>Acessar Manual Completo</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-4">
              Manual de Marca Wakanda-Tech
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              12 páginas de revolução digital que une códigos ancestrais com algoritmos modernos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-black/30 backdrop-blur-md border border-amber-500/30 rounded-xl p-8 hover:scale-105 transition-transform">
              <div className="mb-6">
                <Eye className="text-amber-400 w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Capacidade Oracular</h3>
              <p className="text-gray-300">
                Desenvolva a habilidade de ver padrões onde outros veem caos, através da união entre intuição ancestral e análise algorítmica.
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-md border border-purple-500/30 rounded-xl p-8 hover:scale-105 transition-transform">
              <div className="mb-6">
                <Zap className="text-purple-400 w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Magia Tecnológica</h3>
              <p className="text-gray-300">
                Use IA como ferramenta espiritual para despertar consciência, não apenas para produzir mais conteúdo sem alma.
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-md border border-amber-500/30 rounded-xl p-8 hover:scale-105 transition-transform">
              <div className="mb-6">
                <Sparkles className="text-amber-400 w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Manifestação Consciente</h3>
              <p className="text-gray-300">
                Aprenda a criar realidades através de tecnologia consciente, reconectando códigos ancestrais com códigos modernos.
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600/20 to-amber-600/20 border border-amber-500/50 rounded-xl p-8 inline-block">
              <p className="text-2xl text-white font-bold italic mb-4">
                "A tecnologia deve amplificar a alma, não substituí-la"
              </p>
              <p className="text-amber-400 text-lg">
                - Taynã, Mago do Futuro Ancestral
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 px-6 bg-gradient-to-r from-purple-900/50 to-amber-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para a Revolução?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Acesse o manual completo e descubra como se tornar um oráculo moderno
          </p>
          
          <Link
            to="/manual"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-600 to-purple-600 px-10 py-5 rounded-xl text-white font-bold text-xl hover:scale-105 transition-transform shadow-2xl"
          >
            <Book size={28} />
            <span>Ver Manual Completo</span>
            <ArrowRight size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
