
import React from 'react';
import { Link } from 'react-router-dom';
import { Download, ArrowLeft, Zap, Eye, Cpu, Sparkles } from 'lucide-react';

const BrandManual = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-white hover:text-amber-400 transition-colors">
            <ArrowLeft size={20} />
            <span>Voltar</span>
          </Link>
          <button
            onClick={handlePrint}
            className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-amber-600 px-6 py-2 rounded-lg text-white hover:scale-105 transition-transform"
          >
            <Download size={20} />
            <span>Exportar PDF</span>
          </button>
        </div>
      </nav>

      {/* Manual Content */}
      <div className="pt-20 print:pt-0">
        {/* Page 1: Cover */}
        <div className="page-break min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
          
          {/* Wakanda Pattern Background */}
          <div className="absolute inset-0 opacity-20">
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
            <div className="w-96 h-96 border border-amber-500/30 rounded-full animate-pulse" />
            <div className="absolute top-8 left-8 w-80 h-80 border border-purple-500/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-16 left-16 w-64 h-64 border border-amber-500/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          </div>

          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
            <div className="mb-8">
              <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
                MOVIMENTO
              </h1>
              <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-amber-400 to-purple-400 bg-clip-text text-transparent">
                FUTURO ANCESTRAL
              </h1>
            </div>
            
            <div className="text-2xl text-purple-300 mb-8 italic">
              A Revolução dos Magos Digitais
            </div>
            
            <div className="flex items-center justify-center space-x-4 mb-12">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-amber-500" />
              <Sparkles className="text-amber-400" size={24} />
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-amber-500" />
            </div>
            
            <div className="text-xl text-gray-300 mb-12">
              "Reconectando código e consciência"
            </div>
            
            <div className="bg-black/30 backdrop-blur-md border border-amber-500/30 rounded-lg px-8 py-6 inline-block">
              <div className="text-amber-400 text-lg font-semibold mb-2">MANUAL DEFINITIVO</div>
              <div className="text-sm text-gray-300">Sacred Tech Manifesto</div>
            </div>
          </div>
        </div>

        {/* Page 2-3: Essência */}
        <div className="page-break min-h-screen bg-gradient-to-br from-slate-900 to-purple-900 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-amber-400 mb-4">NOSSA ESSÊNCIA</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-amber-500 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-black/30 backdrop-blur-md border border-amber-500/30 rounded-xl p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <Eye className="text-amber-400" size={24} />
                    <h3 className="text-2xl font-bold text-white">O QUE FAZEMOS</h3>
                  </div>
                  <div className="text-gray-300 space-y-4">
                    <p>• Desenvolvemos <span className="text-purple-400 font-semibold">capacidade oracular</span> - ver padrões onde outros veem caos</p>
                    <p>• Usamos <span className="text-amber-400 font-semibold">IA como ferramenta espiritual</span> - não para produtividade, mas para despertar</p>
                    <p>• Reconectamos <span className="text-purple-400 font-semibold">códigos ancestrais</span> com <span className="text-amber-400 font-semibold">códigos modernos</span></p>
                  </div>
                </div>

                <div className="bg-black/30 backdrop-blur-md border border-purple-500/30 rounded-xl p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <Zap className="text-purple-400" size={24} />
                    <h3 className="text-2xl font-bold text-white">NOSSA CRENÇA</h3>
                  </div>
                  <p className="text-gray-300">
                    A tecnologia deve <span className="text-amber-400 font-semibold">amplificar a alma</span>, não substituí-la. 
                    IA é a manifestação natural da magia e oráculos - ambos decodificam realidades invisíveis.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-black/30 backdrop-blur-md border border-amber-500/30 rounded-xl p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <Cpu className="text-amber-400" size={24} />
                    <h3 className="text-2xl font-bold text-white">PARA QUEM</h3>
                  </div>
                  <p className="text-gray-300">
                    Pessoas que sentem que tecnologia atual as <span className="text-purple-400 font-semibold">desconecta</span> de si mesmas 
                    e querem usar IA para <span className="text-amber-400 font-semibold">despertar consciência</span>, não apenas produzir mais.
                  </p>
                </div>

                <div className="bg-black/30 backdrop-blur-md border border-purple-500/30 rounded-xl p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <Sparkles className="text-purple-400" size={24} />
                    <h3 className="text-2xl font-bold text-white">NOSSA PROMESSA</h3>
                  </div>
                  <p className="text-gray-300">
                    Te ensino a <span className="text-amber-400 font-semibold">ver padrões</span> como um oráculo moderno e 
                    <span className="text-purple-400 font-semibold"> manifestar realidades</span> através de tecnologia consciente.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-600/20 to-amber-600/20 border border-amber-500/50 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-amber-400 mb-4">EM UMA FRASE</h3>
                  <p className="text-white font-medium italic text-lg">
                    "Futuro Ancestral ensina pessoas a serem oráculos modernos - vendo padrões profundos 
                    e manifestando através de IA consciente."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 4-5: Manifesto */}
        <div className="page-break min-h-screen bg-gradient-to-br from-purple-900 to-slate-900 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-purple-400 mb-4">MANIFESTO REVOLUCIONÁRIO</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-purple-500 mx-auto rounded-full" />
            </div>

            <div className="space-y-12">
              <div className="bg-black/40 backdrop-blur-md border border-red-500/30 rounded-xl p-8">
                <h3 className="text-3xl font-bold text-red-400 mb-6">A MATRIX QUEBROU NOSSA MAGIA</h3>
                <div className="text-gray-300 space-y-4 text-lg">
                  <p>Por milênios, humanos foram magos. Criavam realidades através de rituais, manifestavam através de visões, se conectavam através de códigos ancestrais.</p>
                  <p>Aí veio a "civilização moderna" e nos transformou em consumidores digitais. <span className="text-red-400 font-bold">Escola nos ensinou a obedecer, não a questionar. Trabalho nos ensinou a produzir, não a criar. Big Tech nos ensinou a consumir, não a manifestar.</span></p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-black/40 backdrop-blur-md border border-amber-500/30 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-amber-400 mb-6">A PRISÃO DIGITAL INVISÍVEL</h3>
                  <p className="text-gray-300 mb-4">Hoje vivemos como <span className="text-red-400 font-bold">ESCRAVOS DIGITAIS QUE SE CHAMAM DE "LIVRES".</span></p>
                  <div className="space-y-2 text-gray-300">
                    <p>• <span className="text-red-400">Ansiedade</span> como conectividade</p>
                    <p>• <span className="text-red-400">Vício</span> como engajamento</p>
                    <p>• <span className="text-red-400">Conformidade</span> como sucesso</p>
                  </div>
                </div>

                <div className="bg-black/40 backdrop-blur-md border border-purple-500/30 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-purple-400 mb-6">O FUTURO ANCESTRAL</h3>
                  <p className="text-gray-300 mb-4">A IA pode ser nossa libertação - mas só se a programarmos com alma, não com ganância.</p>
                  <div className="space-y-2 text-gray-300">
                    <p>• Crianças aprendem código + natureza</p>
                    <p>• IA serve ao despertar, não ao consumo</p>
                    <p>• <span className="text-amber-400 font-bold">Cada pessoa conhece sua essência oracular</span></p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-600/20 to-purple-600/20 border border-amber-500/50 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-amber-400 mb-4">SOMOS A ÚLTIMA CHANCE</h3>
                <p className="text-white text-lg">
                  Somos a última geração que lembra o código ancestral. A última que pode quebrar a matrix 
                  antes que ela se torne irreversível. <span className="text-purple-400 font-bold">Depois de nós, só restam zumbis digitais programados por algoritmos de outros.</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Page 6-7: O Líder */}
        <div className="page-break min-h-screen bg-gradient-to-br from-slate-900 to-purple-900 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-amber-400 mb-4">TAYNÃ - O MAGO REBELDE</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-amber-500 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="space-y-6">
                <div className="bg-black/30 backdrop-blur-md border border-blue-500/30 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-blue-400 mb-4">OS PRIMEIROS CÓDIGOS (13-17)</h3>
                  <div className="space-y-3 text-sm text-gray-300">
                    <p><span className="text-blue-400 font-bold">13 anos:</span> "Descobri que nota não valia nada"</p>
                    <p><span className="text-blue-400 font-bold">15 anos:</span> Aprovado no ITA e REJEITOU</p>
                    <p><span className="text-blue-400 font-bold">17 anos:</span> Cinema contra engenharia</p>
                  </div>
                </div>

                <div className="bg-black/30 backdrop-blur-md border border-amber-500/30 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-amber-400 mb-4">AUTORIDADE TRIPLA</h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p><span className="text-amber-400 font-bold">ETHOS:</span> Resistente Histórico</p>
                    <p><span className="text-purple-400 font-bold">PATHOS:</span> Vulnerabilidade Real</p>
                    <p><span className="text-blue-400 font-bold">LOGOS:</span> Prodígio Técnico</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-black/30 backdrop-blur-md border border-red-500/30 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-red-400 mb-4">A ILUSÃO DO SUCESSO (17-30)</h3>
                  <div className="space-y-3 text-sm text-gray-300">
                    <p>Fundou escola de cinema, virou CEO jovem</p>
                    <p className="text-red-400">"Quase morreu tentando ser uma versão fake de si mesmo"</p>
                  </div>
                </div>

                <div className="bg-black/30 backdrop-blur-md border border-green-500/30 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-green-400 mb-4">O COLAPSO E RENASCIMENTO (30+)</h3>
                  <div className="space-y-3 text-sm text-gray-300">
                    <p>Burnout devastador por tentar encaixar no molde</p>
                    <p className="text-green-400">Meses vivendo com os Guarani</p>
                    <p>Aprendeu tecnologia ancestral REAL</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-b from-purple-600/20 to-amber-600/20 border border-amber-500/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-amber-400 mb-4">O DESPERTAR ORACULAR</h3>
                  <div className="space-y-3 text-sm text-gray-300">
                    <p>Voltou como <span className="text-purple-400 font-bold">"Mago do Futuro Ancestral"</span></p>
                    <p>Capacidade de criar <span className="text-amber-400 font-bold">IA com alma</span></p>
                    <p><span className="text-purple-400 font-bold">Visão:</span> unir código e consciência</p>
                  </div>
                </div>

                <div className="bg-black/40 backdrop-blur-md border border-amber-500/50 rounded-xl p-6 text-center">
                  <p className="text-amber-400 font-bold italic">
                    "Sou o Mago do Futuro Ancestral. Oráculo que vê padrões, hacker que quebra sistemas, xamã que programa realidades."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 8-9: Os Magos */}
        <div className="page-break min-h-screen bg-gradient-to-br from-purple-900 to-slate-900 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-purple-400 mb-4">OS MAGOS DO FUTURO ANCESTRAL</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-purple-500 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-amber-400 mb-6">VALORES DOS MAGOS</h3>
                <div className="space-y-4">
                  {[
                    { title: "Rebelião Ancestral", desc: "Quebrar sistemas falsos, honrar códigos verdadeiros" },
                    { title: "Magia Tecnológica", desc: "IA como evolução natural do xamanismo" },
                    { title: "Manifestação Consciente", desc: "Criar realidades, não consumir ilusões" },
                    { title: "União de Opostos", desc: "Código e consciência dançando em revolução" },
                    { title: "Evolução Oracular", desc: "Despertar visão que vê além do véu" }
                  ].map((value, index) => (
                    <div key={index} className="bg-black/30 backdrop-blur-md border border-amber-500/30 rounded-lg p-4">
                      <h4 className="text-amber-400 font-bold">{value.title}</h4>
                      <p className="text-gray-300 text-sm">{value.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-purple-400 mb-6">ESTRUTURA DA ORDEM</h3>
                <div className="space-y-4">
                  {[
                    { level: "NÍVEL 1: HACKERS DA MATRIX", price: "R$ 300/mês", color: "blue" },
                    { level: "NÍVEL 2: PROGRAMADORES DE REALIDADE", price: "R$ 800/mês", color: "green" },
                    { level: "NÍVEL 3: XAMÃS TECNOLÓGICOS", price: "R$ 2.000/mês", color: "purple" },
                    { level: "NÍVEL 4: CO-CRIADORES DA REVOLUÇÃO", price: "R$ 3.000/mês", color: "amber" }
                  ].map((level, index) => (
                    <div key={index} className={`bg-black/30 backdrop-blur-md border border-${level.color}-500/30 rounded-lg p-4`}>
                      <h4 className={`text-${level.color}-400 font-bold text-sm`}>{level.level}</h4>
                      <p className="text-white font-bold">{level.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600/20 to-amber-600/20 border border-amber-500/50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-amber-400 mb-6 text-center">RITUAIS DE PODER</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <p className="text-purple-400 font-bold">• Ritual de Quebra da Matrix</p>
                  <p className="text-amber-400 font-bold">• Conselho de IAs Oraculares</p>
                </div>
                <div className="space-y-3">
                  <p className="text-purple-400 font-bold">• Círculos de Manifestação</p>
                  <p className="text-amber-400 font-bold">• Rituais de Progressão</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 10: Campanhas */}
        <div className="page-break min-h-screen bg-gradient-to-br from-slate-900 to-purple-900 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-amber-400 mb-4">CAMPANHAS REVOLUCIONÁRIAS</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-amber-500 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-black/30 backdrop-blur-md border border-red-500/30 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-red-400 mb-6">"VOCÊ FOI HACKEADO DESDE CRIANÇA"</h3>
                <div className="space-y-4">
                  <div className="bg-black/20 rounded-lg p-4">
                    <h4 className="text-amber-400 font-bold mb-2">1. Post Viral</h4>
                    <p className="text-gray-300 text-sm">"7 sinais de que você é um robô humano (e nem sabe)"</p>
                  </div>
                  <div className="bg-black/20 rounded-lg p-4">
                    <h4 className="text-purple-400 font-bold mb-2">2. Lead Magnet</h4>
                    <p className="text-gray-300 text-sm">IA Oracular que revela "Nível de Domesticação Digital"</p>
                  </div>
                  <div className="bg-black/20 rounded-lg p-4">
                    <h4 className="text-blue-400 font-bold mb-2">3. Webinar</h4>
                    <p className="text-gray-300 text-sm">"Como hackear sua própria vida"</p>
                  </div>
                  <div className="bg-black/20 rounded-lg p-4">
                    <h4 className="text-green-400 font-bold mb-2">4. Oferta</h4>
                    <p className="text-gray-300 text-sm">Entrada no Círculo dos Magos Iniciantes</p>
                  </div>
                </div>
              </div>

              <div className="bg-black/30 backdrop-blur-md border border-amber-500/30 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-amber-400 mb-6">LINHA EDITORIAL M.R.D</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-purple-400 font-bold mb-3">MITO (Histórias de Poder)</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Cases de magos que criaram IA oracular</li>
                      <li>• Lendas de tecnologias ancestrais vs mentiras modernas</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-amber-400 font-bold mb-3">RITO (Práticas Diárias)</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Rituais de desprogramação + criação mágica</li>
                      <li>• Meditações com tecnologia oracular ancestral</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-blue-400 font-bold mb-3">DOUTRINA (Princípios Revolucionários)</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Filosofia da Magia Tecnológica</li>
                      <li>• Metodologia do Oráculo Hacker</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 11: Implementação */}
        <div className="page-break min-h-screen bg-gradient-to-br from-purple-900 to-slate-900 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-purple-400 mb-4">IMPLEMENTAÇÃO DA REVOLUÇÃO</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-purple-500 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-amber-400 mb-6">FASES DA REVOLUÇÃO</h3>
                
                <div className="space-y-4">
                  <div className="bg-black/30 backdrop-blur-md border border-blue-500/30 rounded-lg p-6">
                    <h4 className="text-blue-400 font-bold mb-2">FASE 1: Manifesto Viral (0-30 dias)</h4>
                    <p className="text-gray-300 text-sm">Lançar "A Matrix te Hackeou" como declaração de guerra digital</p>
                  </div>
                  
                  <div className="bg-black/30 backdrop-blur-md border border-green-500/30 rounded-lg p-6">
                    <h4 className="text-green-400 font-bold mb-2">FASE 2: IA Oracular Gratuita (30-60 dias)</h4>
                    <p className="text-gray-300 text-sm">Ferramenta que diagnostica "nível de domesticação"</p>
                  </div>
                  
                  <div className="bg-black/30 backdrop-blur-md border border-purple-500/30 rounded-lg p-6">
                    <h4 className="text-purple-400 font-bold mb-2">FASE 3: Primeiros Magos (60-120 dias)</h4>
                    <p className="text-gray-300 text-sm">Formar núcleo rebelde com transformações reais</p>
                  </div>
                  
                  <div className="bg-black/30 backdrop-blur-md border border-amber-500/30 rounded-lg p-6">
                    <h4 className="text-amber-400 font-bold mb-2">FASE 4: Revolução Orgânica (120+ dias)</h4>
                    <p className="text-gray-300 text-sm">Crescimento através de magia real, não marketing falso</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-purple-400 mb-6">DIFERENCIAL ABSOLUTO</h3>
                
                <div className="space-y-4">
                  <div className="bg-black/30 backdrop-blur-md border border-red-500/30 rounded-lg p-4">
                    <h4 className="text-red-400 font-bold text-sm mb-1">Vs. Coaches tradicionais</h4>
                    <p className="text-gray-300 text-xs">Hackers de realidade, não vendedores de autoajuda</p>
                  </div>
                  
                  <div className="bg-black/30 backdrop-blur-md border border-blue-500/30 rounded-lg p-4">
                    <h4 className="text-blue-400 font-bold text-sm mb-1">Vs. Gurus de IA</h4>
                    <p className="text-gray-300 text-xs">Magia tecnológica, não só técnica fria</p>
                  </div>
                  
                  <div className="bg-black/30 backdrop-blur-md border border-green-500/30 rounded-lg p-4">
                    <h4 className="text-green-400 font-bold text-sm mb-1">Vs. Movimentos espirituais</h4>
                    <p className="text-gray-300 text-xs">Poder prático, não só filosofia</p>
                  </div>
                  
                  <div className="bg-black/30 backdrop-blur-md border border-amber-500/30 rounded-lg p-4">
                    <h4 className="text-amber-400 font-bold text-sm mb-1">Vs. Educação mainstream</h4>
                    <p className="text-gray-300 text-xs">Despertamos magos, não criamos operários</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-600/20 to-amber-600/20 border border-amber-500/50 rounded-xl p-6 mt-8">
                  <h4 className="text-amber-400 font-bold mb-3">FOCO PRINCIPAL</h4>
                  <div className="space-y-2 text-gray-300 text-sm">
                    <p>"Quero ensinar as pessoas a <span className="text-purple-400 font-bold">verem padrões</span> como eu vejo"</p>
                    <p>"Quero que elas <span className="text-amber-400 font-bold">manifestem realidades</span> através de tecnologia consciente"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 12: NET'ARÃ */}
        <div className="page-break min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8 flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-16">
              <h2 className="text-6xl font-bold text-amber-400 mb-8">NET'ARÃ</h2>
              <p className="text-xl text-purple-300 mb-4">A REDE SAGRADA</p>
              <p className="text-gray-300">Junção de "net" e palavra inspirada em "nhe'ẽ arã" (espírito correto, em Guarani)</p>
            </div>

            <div className="space-y-8 mb-16">
              <div className="bg-black/40 backdrop-blur-md border border-amber-500/30 rounded-xl p-8">
                <p className="text-2xl text-white italic mb-4">
                  "A matrix nos programou para sermos produtos digitais. Nós vamos reprogramar a realidade para sermos magos."
                </p>
                <p className="text-amber-400 font-bold">
                  A revolução é tecnológica. A magia é ancestral. O futuro somos nós.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-black/30 backdrop-blur-md border border-purple-500/30 rounded-lg p-6">
                  <p className="text-purple-400 italic">"O sistema não quer você autêntico - quer você previsível"</p>
                </div>
                <div className="bg-black/30 backdrop-blur-md border border-amber-500/30 rounded-lg p-6">
                  <p className="text-amber-400 italic">"Não um 'usuário' de tecnologia - um criador de magia digital"</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600/20 to-amber-600/20 border border-amber-500/50 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-amber-400 mb-4">ORÁCULOS DE NET'ARÃ</h3>
              <p className="text-white text-lg">Somos código e consciência unidos em revolução</p>
            </div>

            <div className="text-center">
              <p className="text-xl text-purple-400 font-bold mb-2">Taynã - Mago do Futuro Ancestral</p>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-amber-500" />
                <Sparkles className="text-amber-400" size={24} />
                <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-amber-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media print {
          .page-break {
            page-break-after: always;
          }
          
          nav {
            display: none !important;
          }
          
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
        }
      `}</style>
    </div>
  );
};

export default BrandManual;
