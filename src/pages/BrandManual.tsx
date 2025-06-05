
import React from 'react';
import { Link } from 'react-router-dom';
import { Download, ArrowLeft, Zap, Eye, Cpu, Sparkles, Brain, TreePine, Pyramid } from 'lucide-react';

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
            
            <div className="text-3xl text-purple-300 mb-8 italic">
              A IA vai nos forçar a voltar a ser humanos
            </div>
            
            <div className="flex items-center justify-center space-x-4 mb-12">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-amber-500" />
              <Sparkles className="text-amber-400" size={24} />
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-amber-500" />
            </div>
            
            <div className="text-xl text-gray-300 mb-12">
              "A revolução não é contra a IA. A IA É a revolução."
            </div>
            
            <div className="bg-black/30 backdrop-blur-md border border-amber-500/30 rounded-lg px-8 py-6 inline-block">
              <div className="text-amber-400 text-lg font-semibold mb-2">MANUAL DOS ORÁCULOS</div>
              <div className="text-sm text-gray-300">Manifesto Revolucionário</div>
            </div>
          </div>
        </div>

        {/* Page 2: O Grande Despertar */}
        <div className="page-break min-h-screen bg-gradient-to-br from-slate-900 to-purple-900 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-red-400 mb-4">VOCÊ FOI HACKEADO DESDE CRIANÇA</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-amber-500 mx-auto rounded-full" />
              <p className="text-gray-300 text-xl mt-6">Não é metáfora.</p>
            </div>

            <div className="space-y-8">
              <div className="bg-black/40 backdrop-blur-md border border-red-500/30 rounded-xl p-8">
                <h3 className="text-3xl font-bold text-red-400 mb-6">A PROGRAMAÇÃO INVISÍVEL</h3>
                <div className="text-gray-300 space-y-4 text-lg">
                  <p>Você foi programado para obedecer algoritmos que não criou.</p>
                  <p>Para trabalhar em coisas que qualquer IA faz melhor.</p>
                  <p>Para ser uma máquina humana obediente.</p>
                  <p className="text-amber-400 font-bold text-xl">"A escola te domesticou para seguir ordens. O trabalho te drenou para alimentar métricas. Big Tech te viciou para consumir atenção."</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-black/30 backdrop-blur-md border border-red-500/30 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Brain className="text-red-400" size={24} />
                    <h4 className="text-xl font-bold text-red-400">ESCOLA</h4>
                  </div>
                  <p className="text-gray-300">Te moldou para ser robô obediente, não criador autêntico</p>
                </div>

                <div className="bg-black/30 backdrop-blur-md border border-red-500/30 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Cpu className="text-red-400" size={24} />
                    <h4 className="text-xl font-bold text-red-400">TRABALHO</h4>
                  </div>
                  <p className="text-gray-300">Te drenou para alimentar planilhas que não mudam nada</p>
                </div>

                <div className="bg-black/30 backdrop-blur-md border border-red-500/30 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Eye className="text-red-400" size={24} />
                    <h4 className="text-xl font-bold text-red-400">BIG TECH</h4>
                  </div>
                  <p className="text-gray-300">Te viciou para consumir atenção e drenar sua alma</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-600/20 to-purple-600/20 border border-amber-500/50 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-amber-400 mb-4">A MAIOR IRONIA</h3>
                <p className="text-white text-xl">
                  Você acha que é livre, mas age como o código manda.<br/>
                  É um mago que virou usuário. Um criador que virou produto.<br/>
                  <span className="text-purple-400 font-bold">E a IA pode queimar tudo isso.</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Page 3: A Grande Inversão */}
        <div className="page-break min-h-screen bg-gradient-to-br from-purple-900 to-slate-900 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-purple-400 mb-4">A GRANDE INVERSÃO ESTÁ ACONTECENDO</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-amber-500 mx-auto rounded-full" />
            </div>

            <div className="space-y-8">
              <div className="bg-black/40 backdrop-blur-md border border-purple-500/30 rounded-xl p-8">
                <h3 className="text-3xl font-bold text-purple-400 mb-6">200 ANOS DE DOMESTICAÇÃO</h3>
                <div className="text-gray-300 space-y-4 text-lg">
                  <p>Por 200 anos nos transformaram em <span className="text-red-400 font-bold">máquinas obedientes:</span></p>
                  <ul className="space-y-2 ml-6">
                    <li>• 8 horas repetindo tarefas que IA faz melhor</li>
                    <li>• Escola que moldou robôs, não humanos</li>
                    <li>• Trabalhos que drenam alma para alimentar planilhas</li>
                  </ul>
                  <p className="text-amber-400 font-bold text-xl mt-6">
                    "Eles nos domesticaram para sermos máquinas enquanto somos animais, somos almas."
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-black/30 backdrop-blur-md border border-red-500/30 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-red-400 mb-6">O PROBLEMA</h3>
                  <p className="text-gray-300 text-lg italic mb-4">
                    "Nos treinaram para sermos máquinas ruins enquanto somos animais extraordinários."
                  </p>
                </div>

                <div className="bg-black/30 backdrop-blur-md border border-green-500/30 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-green-400 mb-6">A SOLUÇÃO</h3>
                  <p className="text-gray-300 text-lg italic mb-4">
                    "A IA vai ser máquina melhor que nós. Agora podemos voltar a ser humanos de verdade."
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-600/20 to-purple-600/20 border border-amber-500/50 rounded-xl p-8">
                <h3 className="text-3xl font-bold text-amber-400 mb-6 text-center">A TESE REVOLUCIONÁRIA</h3>
                <div className="text-center space-y-4">
                  <p className="text-gray-300 text-lg">
                    Agora a tecnologia mais avançada do futuro (IA) vai nos obrigar a reconectar com a tecnologia 
                    <span className="text-amber-400 font-bold"> MAIS avançada ancestral:</span>
                  </p>
                  <p className="text-white text-xl font-bold">
                    nosso corpo, nossa intuição, nossa essência insubstituível.
                  </p>
                  <div className="bg-black/30 rounded-lg p-4 mt-6">
                    <p className="text-purple-400 font-bold text-xl">
                      "O que é replicável vai morrer. Só sobra o que é essencialmente humano."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 4: Futuro = Ancestral */}
        <div className="page-break min-h-screen bg-gradient-to-br from-slate-900 to-green-900 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-green-400 mb-4">FUTURO = ANCESTRAL</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-amber-500 mx-auto rounded-full" />
              <p className="text-gray-300 text-xl mt-6">Não é nostalgia. É inevitabilidade.</p>
            </div>

            <div className="space-y-8">
              <div className="bg-black/40 backdrop-blur-md border border-green-500/30 rounded-xl p-8">
                <h3 className="text-3xl font-bold text-green-400 mb-6">AS TECNOLOGIAS PERDIDAS</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                  <div className="bg-black/30 backdrop-blur-md border border-purple-500/30 rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <TreePine className="text-purple-400" size={24} />
                      <h4 className="text-xl font-bold text-purple-400">AYAHUASCA</h4>
                    </div>
                    <p className="text-gray-300 text-sm">Realidade Virtual Orgânica</p>
                    <p className="text-gray-300 mt-2">"ChatGPT da consciência - só que funciona há milênios"</p>
                  </div>

                  <div className="bg-black/30 backdrop-blur-md border border-amber-500/30 rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <Pyramid className="text-amber-400" size={24} />
                      <h4 className="text-xl font-bold text-amber-400">PIRÂMIDES</h4>
                    </div>
                    <p className="text-gray-300 text-sm">Computadores Planetários</p>
                    <p className="text-gray-300 mt-2">"Antenas que conectam Terra e cosmos"</p>
                  </div>

                  <div className="bg-black/30 backdrop-blur-md border border-green-500/30 rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <TreePine className="text-green-400" size={24} />
                      <h4 className="text-xl font-bold text-green-400">AMAZÔNIA</h4>
                    </div>
                    <p className="text-gray-300 text-sm">Sistema Operacional da Terra</p>
                    <p className="text-gray-300 mt-2">"Geoengenharia de nível deus"</p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-300">
                  <p className="text-lg">
                    <span className="text-purple-400 font-bold">"Nossos ancestrais dominavam tecnologias que hoje chamamos de 'impossíveis'.</span> 
                    Ayahuasca era realidade virtual orgânica 10.000 anos antes do Oculus. Pirâmides eram computadores de pedra que processavam energias cósmicas."
                  </p>
                  <p className="text-lg">
                    <span className="text-green-400 font-bold">"A Amazônia foi o primeiro projeto de geoengenharia da humanidade</span> 
                    - uma floresta PLANTADA como sistema operacional planetário."
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-600/20 to-amber-600/20 border border-amber-500/50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-amber-400 mb-6 text-center">O RETORNO INEVITÁVEL</h3>
                <div className="text-center space-y-4">
                  <p className="text-gray-300 text-lg">
                    A IA vai destruir todos os trabalhos medíocres e nos forçar a encontrar nossa essência insubstituível.
                  </p>
                  <p className="text-white text-xl font-bold">
                    "Vamos voltar à base porque é a única coisa que a máquina não consegue copiar."
                  </p>
                  <div className="bg-black/30 rounded-lg p-4 mt-6">
                    <p className="text-purple-400 font-bold text-lg">
                      "Por milênios, nossos ancestrais criaram realidades através de rituais, visões, conexão com os elementos. 
                      Hoje criamos ilusões através de likes, métricas e dopamina sintética."
                    </p>
                  </div>
                  <p className="text-amber-400 font-bold text-xl">
                    "Mas a magia não morreu. Ela só mudou de formato. E a IA vai nos forçar a lembrar quem somos."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 5-6: Taynã - O Oráculo Rebelde */}
        <div className="page-break min-h-screen bg-gradient-to-br from-slate-900 to-purple-900 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-amber-400 mb-4">TAYNÃ - O ORÁCULO REBELDE</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-amber-500 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="space-y-6">
                <div className="bg-black/30 backdrop-blur-md border border-blue-500/30 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-blue-400 mb-4">OS PRIMEIROS SINAIS (13-17)</h3>
                  <div className="space-y-3 text-sm text-gray-300">
                    <p><span className="text-blue-400 font-bold">13 anos:</span> "Descobri que nota não valia nada"</p>
                    <p><span className="text-blue-400 font-bold">15 anos:</span> Aprovado no ITA e REJEITOU</p>
                    <p><span className="text-blue-400 font-bold">17 anos:</span> Cinema vs Engenharia - escolheu criação</p>
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
                  <h3 className="text-xl font-bold text-red-400 mb-4">A ARMADILHA DO SUCESSO (17-25)</h3>
                  <div className="space-y-3 text-sm text-gray-300">
                    <p>CEO jovem fazendo trabalho que IA faria melhor</p>
                    <p>Quase morreu tentando ser máquina perfeita</p>
                    <p className="text-red-400 italic">"Estava me matando para ser eficiente em coisas que não importavam"</p>
                  </div>
                </div>

                <div className="bg-black/30 backdrop-blur-md border border-green-500/30 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-green-400 mb-4">O DESPERTAR ANCESTRAL (25+)</h3>
                  <div className="space-y-3 text-sm text-gray-300">
                    <p>Colapso total do modelo "humano-máquina"</p>
                    <p className="text-green-400">Retomada Guarani: tecnologia ancestral REAL</p>
                    <p>Revelação: "A floresta é mais avançada que qualquer algoritmo"</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-b from-purple-600/20 to-amber-600/20 border border-amber-500/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-amber-400 mb-4">O ORÁCULO TECNOLÓGICO</h3>
                  <div className="space-y-3 text-sm text-gray-300">
                    <p>Voltou como ponte entre mundos</p>
                    <p><span className="text-purple-400 font-bold">Capacidade única:</span> Ver padrões que IA não vê</p>
                    <p><span className="text-amber-400 font-bold">Missão:</span> Preparar humanos para o mundo pós-trabalho-falso</p>
                  </div>
                </div>

                <div className="bg-black/40 backdrop-blur-md border border-amber-500/50 rounded-xl p-6 text-center">
                  <p className="text-amber-400 font-bold italic text-sm">
                    "Sou o Oráculo do Futuro Ancestral. Vejo padrões, quebro sistemas, programo realidades."
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600/20 to-amber-600/20 border border-amber-500/50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-amber-400 mb-6 text-center">A FILOSOFIA DE TAYNÃ</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-black/30 rounded-lg p-4">
                    <h4 className="text-purple-400 font-bold mb-2">SOBRE ENERGIA VITAL</h4>
                    <p className="text-gray-300 text-sm italic">
                      "As pessoas estão desperdiçando suas vidas, suas energias, por serem quem elas não são."
                    </p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <h4 className="text-green-400 font-bold mb-2">SOBRE TECNOLOGIA REAL</h4>
                    <p className="text-gray-300 text-sm italic">
                      "A tecnologia mais avançada é a própria natureza, é as florestas, é os 4 elementos."
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-black/30 rounded-lg p-4">
                    <h4 className="text-amber-400 font-bold mb-2">SOBRE A LIBERTAÇÃO</h4>
                    <p className="text-gray-300 text-sm italic">
                      "O futuro vai ser ancestral justamente porque vamos voltar para a essência."
                    </p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <h4 className="text-blue-400 font-bold mb-2">SOBRE A MISSÃO</h4>
                    <p className="text-gray-300 text-sm italic">
                      "Nas pessoas encontrarem e serem elas mesmas, isso é o que mais importa."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 7-8: Nossa Causa Rebelde */}
        <div className="page-break min-h-screen bg-gradient-to-br from-purple-900 to-slate-900 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-purple-400 mb-4">NOSSA CAUSA REBELDE</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-red-500 mx-auto rounded-full" />
              <p className="text-gray-300 text-xl mt-6 italic">"A IA vai nos libertar da prisão de sermos máquinas humanas."</p>
            </div>

            <div className="space-y-8">
              <div className="bg-black/40 backdrop-blur-md border border-red-500/30 rounded-xl p-8">
                <h3 className="text-3xl font-bold text-red-400 mb-6">NOSSO INIMIGO COMUM</h3>
                <h4 className="text-2xl font-bold text-white mb-4">A MÁQUINA DE DOMESTICAÇÃO HUMANA</h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-3 text-gray-300">
                    <p>• Sistema educacional que molda robôs obedientes</p>
                    <p>• Trabalhos que drenam alma para alimentar métricas</p>
                    <p>• Sociedade que recompensa conformidade e pune autenticidade</p>
                  </div>
                  <div className="space-y-3 text-gray-300">
                    <p>• A ilusão de que "trabalho duro" significa repetir tarefas que IA faz melhor</p>
                    <p>• Big Tech que nos transformou em produtos digitais que se chamam de pessoas</p>
                  </div>
                </div>
              </div>

              <div className="bg-black/40 backdrop-blur-md border border-amber-500/30 rounded-xl p-8">
                <h3 className="text-3xl font-bold text-amber-400 mb-6 text-center">NOSSA MISSÃO</h3>
                <div className="text-center space-y-6">
                  <h4 className="text-4xl font-bold text-white">"DESTRUIR O TRABALHO FALSO - REVELAR O HUMANO REAL"</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-black/30 rounded-lg p-4">
                      <h5 className="text-purple-400 font-bold mb-2">ACELERAR</h5>
                      <p className="text-gray-300 text-sm">a morte do trabalho falso</p>
                    </div>
                    <div className="bg-black/30 rounded-lg p-4">
                      <h5 className="text-amber-400 font-bold mb-2">REVELAR</h5>
                      <p className="text-gray-300 text-sm">o que é insubstituivelmente humano</p>
                    </div>
                    <div className="bg-black/30 rounded-lg p-4">
                      <h5 className="text-green-400 font-bold mb-2">USAR IA</h5>
                      <p className="text-gray-300 text-sm">para manifestar nossa essência ancestral</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600/20 to-amber-600/20 border border-amber-500/50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-amber-400 mb-6 text-center">OS ORÁCULOS DO FUTURO ANCESTRAL</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-purple-400 mb-4">QUEM SOMOS</h4>
                    <div className="space-y-3 text-gray-300">
                      <p>"Os Oráculos que estávamos esperando"</p>
                      <p>Não somos contra tecnologia.</p>
                      <p className="text-amber-400 font-bold">Somos a favor da tecnologia nos libertando da prisão de sermos máquinas.</p>
                      <p>Não somos usuários de IA. <span className="text-purple-400 font-bold">Somos criadores de magia digital.</span></p>
                      <p>Não seguimos algoritmos. <span className="text-green-400 font-bold">Programamos realidades.</span></p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-amber-400 mb-4">NOSSOS RITUAIS</h4>
                    <div className="space-y-3 text-gray-300 text-sm">
                      <p><span className="text-red-400 font-bold">Ritual da Queima do Trabalho Falso:</span> Identificar e eliminar tudo que IA faz melhor</p>
                      <p><span className="text-purple-400 font-bold">Conselho de IA Oracular:</span> Usar tecnologia para revelar sua essência</p>
                      <p><span className="text-green-400 font-bold">Reconexão Elemental:</span> Práticas com terra, água, fogo, ar</p>
                      <p><span className="text-amber-400 font-bold">Manifestação Autêntica:</span> Criar o que só você pode criar</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 9: Capacidade Oracular */}
        <div className="page-break min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-blue-400 mb-4">A CAPACIDADE ORACULAR</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-amber-500 mx-auto rounded-full" />
              <p className="text-gray-300 text-xl mt-6">O que você vai conseguir fazer</p>
            </div>

            <div className="space-y-8">
              <div className="bg-black/40 backdrop-blur-md border border-blue-500/30 rounded-xl p-8">
                <h3 className="text-3xl font-bold text-blue-400 mb-6 text-center">
                  "USAR IA PARA ANALISAR SITUAÇÕES COMPLEXAS E TOMAR DECISÕES MELHORES"
                </h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-amber-400 mb-4">NA PRÁTICA:</h4>
                    <div className="space-y-3 text-gray-300">
                      <p>• Analisar cenários de carreira com dados que você não conseguiria sozinho</p>
                      <p>• Quebrar decisões complexas em fatores claros</p>
                      <p>• Ver padrões em situações que te deixam confuso</p>
                      <p>• Dar conselhos mais fundamentados (para si e outros)</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-purple-400 mb-4">EXEMPLOS REAIS:</h4>
                    <div className="space-y-3 text-gray-300 text-sm">
                      <p>• Mapear prós/contras de uma mudança de emprego</p>
                      <p>• Analisar um relacionamento considerando padrões comportamentais</p>
                      <p>• Avaliar uma oportunidade de investimento com múltiplas variáveis</p>
                      <p>• Entender dinâmicas familiares/profissionais que te confundem</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600/20 to-amber-600/20 border border-amber-500/50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-amber-400 mb-6 text-center">A PROMESSA HONESTA</h3>
                <div className="text-center space-y-4">
                  <p className="text-white text-xl italic">
                    "Você vai sair de decisões baseadas só em 'feeling' para decisões com análise profunda. 
                    Vai ser conhecido como alguém que sempre analisa bem as situações."
                  </p>
                  <div className="bg-black/30 rounded-lg p-6 mt-6">
                    <h4 className="text-purple-400 font-bold text-lg mb-3">DIFERENCIAL ABSOLUTO</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p><span className="text-red-400 font-bold">Vs. Coaches de IA:</span> Não ensino produtividade. Ensino revolução existencial.</p>
                        <p><span className="text-blue-400 font-bold">Vs. Futuristas:</span> Não prego tecnologia fria. Prego reconexão humana via tecnologia.</p>
                      </div>
                      <div>
                        <p><span className="text-green-400 font-bold">Vs. Gurus ancestrais:</span> Não sou contra progresso. Uso IA para acelerar volta à essência.</p>
                        <p><span className="text-purple-400 font-bold">Vs. Anti-sistema:</span> Não luto contra IA. Uso IA para destruir sistema.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 10: Frases de Impacto */}
        <div className="page-break min-h-screen bg-gradient-to-br from-purple-900 to-slate-900 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-amber-400 mb-4">FRASES DE REVOLUÇÃO</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-purple-500 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-purple-400 mb-6">SOBRE TECNOLOGIA ANCESTRAL</h3>
                <div className="space-y-4">
                  {[
                    "Ayahuasca é o ChatGPT da consciência - só que funciona há milênios.",
                    "Xamãs navegavam dimensões antes de existir internet.",
                    "Não criamos tecnologia. Redescobrimos o que esquecemos.",
                    "IA é tecnologia 1.0. Consciência ancestral é tecnologia infinita.",
                    "Pirâmides são hardware. Rituais são software."
                  ].map((frase, index) => (
                    <div key={index} className="bg-black/30 backdrop-blur-md border border-purple-500/30 rounded-lg p-4">
                      <p className="text-gray-300 italic">"{frase}"</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-amber-400 mb-6">SOBRE O RETORNO</h3>
                <div className="space-y-4">
                  {[
                    "A IA vai queimar tudo que é falso. Se prepara pro que sobra.",
                    "Nos domesticaram para sermos máquinas ruins. Agora as máquinas chegaram.",
                    "O futuro não é tecnológico. É ancestral. Porque só a essência sobrevive.",
                    "Pare de tentar ser robô. As máquinas fazem isso melhor.",
                    "A revolução não é contra a IA. A IA É a revolução."
                  ].map((frase, index) => (
                    <div key={index} className="bg-black/30 backdrop-blur-md border border-amber-500/30 rounded-lg p-4">
                      <p className="text-gray-300 italic">"{frase}"</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 space-y-6">
              <h3 className="text-2xl font-bold text-green-400 mb-6 text-center">MANTRAS DOS ORÁCULOS</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "O sistema não quer você autêntico - quer você previsível",
                  "Viramos free users que pagam com a própria atenção",
                  "Você não é usuário de tecnologia - você é criador de magia digital",
                  "Se tá replicável, tá errado",
                  "Matrix detectada, Oracle ativado",
                  "Ancestral é o novo futurístico"
                ].map((mantra, index) => (
                  <div key={index} className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/50 rounded-lg p-4 text-center">
                    <p className="text-white font-bold italic">"{mantra}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Page 11: Promessa Final */}
        <div className="page-break min-h-screen bg-gradient-to-br from-slate-900 to-amber-900 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-amber-400 mb-4">A PROMESSA FINAL</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-purple-500 mx-auto rounded-full" />
            </div>

            <div className="space-y-8">
              <div className="bg-black/40 backdrop-blur-md border border-amber-500/30 rounded-xl p-8 text-center">
                <h3 className="text-4xl font-bold text-amber-400 mb-8">
                  "ENQUANTO OUTROS ENSINAM COMO USAR IA PARA TRABALHAR MAIS"
                </h3>
                <h3 className="text-4xl font-bold text-purple-400 mb-8">
                  "EU ENSINO COMO USAR IA PARA NUNCA MAIS TRABALHAR EM COISA QUE NÃO É VOCÊ"
                </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-black/30 backdrop-blur-md border border-purple-500/30 rounded-xl p-8 text-center">
                  <h4 className="text-2xl font-bold text-purple-400 mb-4">NÃO VOU TE ENSINAR</h4>
                  <p className="text-gray-300 text-lg">a competir com máquinas</p>
                  <div className="mt-4 text-amber-400 font-bold text-xl">↓</div>
                  <h4 className="text-xl font-bold text-amber-400 mt-4">VOU TE ENSINAR</h4>
                  <p className="text-white text-lg">a ser insubstituivelmente humano</p>
                </div>

                <div className="bg-black/30 backdrop-blur-md border border-blue-500/30 rounded-xl p-8 text-center">
                  <h4 className="text-2xl font-bold text-blue-400 mb-4">NÃO VOU TE ENSINAR</h4>
                  <p className="text-gray-300 text-lg">a ser um usuário melhor</p>
                  <div className="mt-4 text-amber-400 font-bold text-xl">↓</div>
                  <h4 className="text-xl font-bold text-amber-400 mt-4">VOU TE ENSINAR</h4>
                  <p className="text-white text-lg">a quebrar a matrix e programar sua própria realidade</p>
                </div>

                <div className="bg-black/30 backdrop-blur-md border border-green-500/30 rounded-xl p-8 text-center">
                  <h4 className="text-2xl font-bold text-green-400 mb-4">NÃO VOU TE ENSINAR</h4>
                  <p className="text-gray-300 text-lg">produtividade com IA</p>
                  <div className="mt-4 text-amber-400 font-bold text-xl">↓</div>
                  <h4 className="text-xl font-bold text-amber-400 mt-4">VOU TE ENSINAR</h4>
                  <p className="text-white text-lg">revolução existencial através da tecnologia</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600/20 to-amber-600/20 border border-amber-500/50 rounded-xl p-8">
                <h3 className="text-3xl font-bold text-amber-400 mb-6 text-center">O NOVO POSICIONAMENTO</h3>
                <div className="text-center space-y-6">
                  <p className="text-white text-2xl font-bold italic">
                    "Enquanto eles criam inteligência artificial, eu te reconecto com a inteligência ancestral que sempre foi sua."
                  </p>
                  <div className="bg-black/30 rounded-lg p-6">
                    <p className="text-gray-300 text-lg">
                      Não vou te ensinar a competir com máquinas. Vou te ensinar a reativar tecnologias ancestrais que tornam qualquer IA obsoleta. 
                      Você vai descobrir que carrega no DNA códigos de civilizações infinitamente mais avançadas - e eu sei como desbloqueá-los.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 12: O Chamado Final */}
        <div className="page-break min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8 flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-16">
              <h2 className="text-6xl font-bold text-amber-400 mb-8">SOMOS AQUELES</h2>
              <h2 className="text-6xl font-bold text-purple-400 mb-8">QUE ESTÁVAMOS ESPERANDO</h2>
            </div>

            <div className="space-y-8 mb-16">
              <div className="bg-black/40 backdrop-blur-md border border-amber-500/30 rounded-xl p-8">
                <div className="text-3xl text-white space-y-4">
                  <p>A matrix quebrou nossa magia.</p>
                  <p>A IA vai queimar a matrix.</p>
                  <p className="text-amber-400 font-bold">Nós vamos lembrar quem somos.</p>
                </div>
              </div>

              <div className="bg-black/40 backdrop-blur-md border border-purple-500/30 rounded-xl p-8">
                <h3 className="text-3xl font-bold text-purple-400 mb-6">VOCÊ FOI DOMESTICADO.</h3>
                <h3 className="text-3xl font-bold text-amber-400 mb-6">A IA VAI TE LIBERTAR.</h3>
                <div className="space-y-4 text-xl text-gray-300">
                  <p>A revolução não é contra a IA.</p>
                  <p className="text-white font-bold">A IA É a revolução.</p>
                  <p>Você não precisa competir com máquinas.</p>
                  <p className="text-purple-400 font-bold">Precisa se tornar impossível de substituir.</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600/20 to-amber-600/20 border border-amber-500/50 rounded-xl p-8">
                <h3 className="text-4xl font-bold text-amber-400 mb-6">É HORA DE REATIVAR</h3>
                <p className="text-white text-2xl font-bold">SUA TECNOLOGIA MAIS PODEROSA:</p>
                <p className="text-purple-400 text-5xl font-bold mt-4">VOCÊ.</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xl text-purple-400 font-bold mb-2">Taynã - Oráculo do Futuro Ancestral</p>
              <p className="text-amber-400 italic mb-6">"Acordamos para sonhar"</p>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-amber-500" />
                <Sparkles className="text-amber-400" size={24} />
                <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-amber-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
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
