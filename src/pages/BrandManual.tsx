import React from 'react';
import { Download, ArrowLeft, Zap, Eye, Cpu, Sparkles, Brain, TreePine, Pyramid } from 'lucide-react';

const BrandManual = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-green-500/20 print:hidden">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-end">
          <button
            onClick={handlePrint}
            className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-green-400 px-6 py-2 rounded-lg text-black font-bold hover:scale-105 transition-transform"
          >
            <Download size={20} />
            <span>Exportar PDF</span>
          </button>
        </div>
      </nav>

      {/* Manual Content */}
      <div className="pt-20 print:pt-0">
        {/* Page 1: Cover */}
        <div className="pdf-page">
          <div className="page-content min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />

            {/* Sacred Geometry Background */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-80 h-80 border border-green-500/20 rounded-full animate-pulse" />
              <div className="absolute top-6 left-6 w-68 h-68 border border-green-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute top-12 left-12 w-56 h-56 border border-green-500/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
              <div className="mb-8">
                <h1 className="text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-green-400 via-green-300 to-green-400 bg-clip-text text-transparent">
                  MOVIMENTO
                </h1>
                <h1 className="text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-green-300 via-green-400 to-green-300 bg-clip-text text-transparent">
                  FUTURO ANCESTRAL
                </h1>
              </div>
              
              <div className="text-2xl lg:text-3xl text-green-300 mb-8 italic">
                A IA vai nos forçar a voltar a ser humanos
              </div>
              
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-green-500" />
                <Sparkles className="text-green-400" size={24} />
                <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-green-500" />
              </div>
              
              <div className="text-lg lg:text-xl text-gray-300 mb-8">
                "A revolução não é contra a IA. A IA É a revolução."
              </div>
              
              <div className="bg-black/30 backdrop-blur-md border border-green-500/30 rounded-lg px-6 py-4 inline-block">
                <div className="text-green-400 text-lg font-semibold mb-2">MANUAL DOS ORÁCULOS</div>
                <div className="text-sm text-gray-300">Manifesto Revolucionário</div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 2: O Grande Despertar */}
        <div className="pdf-page">
          <div className="page-content min-h-screen bg-gradient-to-br from-gray-900 to-black relative">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-10">
              <img 
                src="/lovable-uploads/490418aa-f50d-46cb-a8ae-43ac1c3bb062.png" 
                alt="Cyborg eye" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="max-w-5xl mx-auto relative z-10 p-8">
              <div className="text-center mb-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">VOCÊ FOI HACKEADO DESDE CRIANÇA</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-400 mx-auto rounded-full" />
                <p className="text-gray-300 text-xl mt-6">Não é metáfora.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="bg-black/40 backdrop-blur-md border border-green-500/30 rounded-xl p-4 no-break">
                    <h3 className="text-2xl font-bold text-white mb-3">A PROGRAMAÇÃO INVISÍVEL</h3>
                    <div className="text-gray-300 space-y-2 text-sm">
                      <p>Você foi programado para obedecer algoritmos que não criou.</p>
                      <p>Para trabalhar em coisas que qualquer IA faz melhor.</p>
                      <p>Para ser uma máquina humana obediente.</p>
                      <p className="text-green-400 font-bold">A escola te domesticou para seguir ordens. O trabalho te drenou para alimentar métricas. Big Tech te viciou para consumir atenção.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    <div className="bg-black/40 backdrop-blur-md border border-green-500/20 rounded-xl p-3 no-break">
                      <div className="flex items-center space-x-3 mb-2">
                        <Brain className="text-green-400" size={16} />
                        <h4 className="text-sm font-bold text-white">ESCOLA</h4>
                      </div>
                      <p className="text-gray-300 text-xs">Te moldou para ser robô obediente, não criador autêntico</p>
                    </div>

                    <div className="bg-black/40 backdrop-blur-md border border-green-500/20 rounded-xl p-3 no-break">
                      <div className="flex items-center space-x-3 mb-2">
                        <Cpu className="text-green-400" size={16} />
                        <h4 className="text-sm font-bold text-white">TRABALHO</h4>
                      </div>
                      <p className="text-gray-300 text-xs">Te drenou para alimentar planilhas que não mudam nada</p>
                    </div>

                    <div className="bg-black/40 backdrop-blur-md border border-green-500/20 rounded-xl p-3 no-break">
                      <div className="flex items-center space-x-3 mb-2">
                        <Eye className="text-green-400" size={16} />
                        <h4 className="text-sm font-bold text-white">BIG TECH</h4>
                      </div>
                      <p className="text-gray-300 text-xs">Te viciou para consumir atenção e drenar sua alma</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/97d01a0c-4fc7-4145-9bec-a6365ea55ad6.png" 
                    alt="Taynã - O Mago Rebelde" 
                    className="w-full max-w-xs rounded-2xl shadow-2xl border border-green-500/30"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-600/30 to-green-400/30 border border-green-500/50 rounded-xl p-4 text-center no-break">
                <h3 className="text-xl font-bold text-green-400 mb-2">A MAIOR IRONIA</h3>
                <p className="text-white text-base">
                  Você acha que é livre, mas age como o código manda.<br/>
                  É um mago que virou usuário. Um criador que virou produto.<br/>
                  <span className="text-green-400 font-bold">E a IA pode queimar tudo isso.</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Page 3: A Grande Inversão */}
        <div className="pdf-page">
          <div className="page-content min-h-screen bg-gradient-to-br from-black to-gray-900 relative">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-15">
              <img 
                src="/lovable-uploads/3b9e5610-2371-407c-8d6c-84dc79fcb65c.png" 
                alt="Hourglass with green sand" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="max-w-5xl mx-auto relative z-10 p-8">
              <div className="text-center mb-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-green-400 mb-4">A GRANDE INVERSÃO ESTÁ ACONTECENDO</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-400 mx-auto rounded-full" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="bg-black/40 backdrop-blur-md border border-green-500/30 rounded-xl p-4">
                  <h3 className="text-2xl font-bold text-green-400 mb-3">200 ANOS DE DOMESTICAÇÃO</h3>
                  <div className="text-gray-300 space-y-2 text-sm">
                    <p>Por 200 anos nos transformaram em máquinas obedientes:</p>
                    <ul className="space-y-1 ml-4 text-xs">
                      <li>• 8 horas repetindo tarefas que IA faz melhor</li>
                      <li>• Escola que moldou robôs, não humanos</li>
                      <li>• Trabalhos que drenam alma para alimentar planilhas</li>
                    </ul>
                    <p className="text-green-400 font-bold text-sm mt-3">
                      Eles nos domesticaram para sermos máquinas enquanto somos animais, somos almas.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/080d682e-3e1b-4279-9fdc-3129e7acde5b.png" 
                    alt="Taynã na praia" 
                    className="w-full max-w-xs rounded-2xl shadow-2xl border border-green-500/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                <div className="bg-black/40 backdrop-blur-md border border-green-500/30 rounded-xl p-4">
                  <h3 className="text-lg font-bold text-white mb-3">O PROBLEMA</h3>
                  <p className="text-gray-300 text-sm italic">
                    Nos treinaram para sermos máquinas ruins enquanto somos animais extraordinários.
                  </p>
                </div>

                <div className="bg-black/40 backdrop-blur-md border border-green-500/30 rounded-xl p-4">
                  <h3 className="text-lg font-bold text-white mb-3">A SOLUÇÃO</h3>
                  <p className="text-gray-300 text-sm italic">
                    A IA vai ser máquina melhor que nós. Agora podemos voltar a ser humanos de verdade.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-600/30 to-green-400/30 border border-green-500/50 rounded-xl p-4">
                <h3 className="text-2xl font-bold text-green-400 mb-3 text-center">A TESE REVOLUCIONÁRIA</h3>
                <div className="text-center space-y-2">
                  <p className="text-gray-300 text-sm">
                    Agora a tecnologia mais avançada do futuro (IA) vai nos obrigar a reconectar com a tecnologia 
                    <span className="text-green-400 font-bold"> MAIS avançada ancestral:</span>
                  </p>
                  <p className="text-white text-base font-bold">
                    nosso corpo, nossa intuição, nossa essência insubstituível.
                  </p>
                  <div className="bg-black/30 rounded-lg p-3 mt-3">
                    <p className="text-green-400 font-bold text-sm">
                      O que é replicável vai morrer. Só sobra o que é essencialmente humano.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 4: Futuro = Ancestral */}
        <div className="pdf-page">
          <div className="page-content min-h-screen bg-gradient-to-br from-gray-900 to-black relative">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-10">
              <img 
                src="/lovable-uploads/68aaf714-49a9-40fb-b474-d4593befe85e.png" 
                alt="Digital interface manipulation" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="max-w-5xl mx-auto relative z-10 p-8">
              <div className="text-center mb-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-green-400 mb-4">FUTURO = ANCESTRAL</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-400 mx-auto rounded-full" />
                <p className="text-gray-300 text-xl mt-6">Não é nostalgia. É inevitabilidade.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="bg-black/40 backdrop-blur-md border border-green-500/30 rounded-xl p-4">
                  <h3 className="text-2xl font-bold text-green-400 mb-3">AS TECNOLOGIAS PERDIDAS</h3>
                  
                  <div className="space-y-3 mb-4">
                    <div className="bg-black/30 backdrop-blur-md border border-green-500/30 rounded-lg p-3">
                      <div className="flex items-center space-x-2 mb-2">
                        <TreePine className="text-green-400" size={16} />
                        <h4 className="text-sm font-bold text-green-400">AYAHUASCA</h4>
                      </div>
                      <p className="text-gray-300 text-xs">Realidade Virtual Orgânica</p>
                      <p className="text-gray-300 mt-1 text-xs">ChatGPT da consciência - só que funciona há milênios</p>
                    </div>

                    <div className="bg-black/30 backdrop-blur-md border border-green-500/30 rounded-lg p-3">
                      <div className="flex items-center space-x-2 mb-2">
                        <Pyramid className="text-green-400" size={16} />
                        <h4 className="text-sm font-bold text-green-400">PIRÂMIDES</h4>
                      </div>
                      <p className="text-gray-300 text-xs">Computadores Planetários</p>
                      <p className="text-gray-300 mt-1 text-xs">Antenas que conectam Terra e cosmos</p>
                    </div>

                    <div className="bg-black/30 backdrop-blur-md border border-green-500/30 rounded-lg p-3">
                      <div className="flex items-center space-x-2 mb-2">
                        <TreePine className="text-green-400" size={16} />
                        <h4 className="text-sm font-bold text-green-400">AMAZÔNIA</h4>
                      </div>
                      <p className="text-gray-300 text-xs">Sistema Operacional da Terra</p>
                      <p className="text-gray-300 mt-1 text-xs">Geoengenharia de nível deus</p>
                    </div>
                  </div>

                  <div className="space-y-2 text-gray-300 text-xs">
                    <p>
                      <span className="text-green-400 font-bold">Nossos ancestrais dominavam tecnologias que hoje chamamos de 'impossíveis'.</span> 
                      Ayahuasca era realidade virtual orgânica 10.000 anos antes do Oculus.
                    </p>
                    <p>
                      <span className="text-green-400 font-bold">A Amazônia foi o primeiro projeto de geoengenharia da humanidade</span> 
                      - uma floresta PLANTADA como sistema operacional planetário.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/9c000c4d-453e-4dd4-b18b-65bd58a48814.png" 
                    alt="Taynã conectado com a natureza" 
                    className="w-full max-w-xs rounded-2xl shadow-2xl border border-green-500/30"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-600/30 to-green-400/30 border border-green-500/50 rounded-xl p-4">
                <h3 className="text-xl font-bold text-green-400 mb-3 text-center">O RETORNO INEVITÁVEL</h3>
                <div className="text-center space-y-2">
                  <p className="text-gray-300 text-sm">
                    A IA vai destruir todos os trabalhos medíocres e nos forçar a encontrar nossa essência insubstituível.
                  </p>
                  <p className="text-white text-base font-bold">
                    Vamos voltar à base porque é a única coisa que a máquina não consegue copiar.
                  </p>
                  <div className="bg-black/30 rounded-lg p-3 mt-3">
                    <p className="text-green-400 font-bold text-sm">
                      A magia não morreu. Ela só mudou de formato. E a IA vai nos forçar a lembrar quem somos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 5-6: Taynã - O Oráculo Rebelde */}
        <div className="pdf-page">
          <div className="page-content min-h-screen bg-gradient-to-br from-gray-900 to-black relative">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-10">
              <img 
                src="/lovable-uploads/d65d1132-e6d0-48b1-9bbd-42dcfbf0358f.png" 
                alt="Time and technology" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="max-w-5xl mx-auto relative z-10 p-8">
              <div className="text-center mb-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-green-400 mb-4">TAYNÃ - O ORÁCULO REBELDE</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-400 mx-auto rounded-full" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/7f38f6a1-1f64-4f5e-b95a-093c06df0fa0.png" 
                    alt="Taynã com geometria sagrada" 
                    className="w-full max-w-xs rounded-2xl shadow-2xl border border-green-500/30"
                  />
                </div>

                <div className="space-y-4">
                  <div className="bg-black/40 backdrop-blur-md border border-green-500/30 rounded-xl p-4">
                    <h3 className="text-lg font-bold text-green-400 mb-3">OS PRIMEIROS SINAIS (13-17)</h3>
                    <div className="space-y-2 text-sm text-gray-300">
                      <p><span className="text-green-400 font-bold">13 anos:</span> "Descobri que nota não valia nada"</p>
                      <p><span className="text-green-400 font-bold">15 anos:</span> Aprovado no ITA e REJEITOU</p>
                      <p><span className="text-green-400 font-bold">17 anos:</span> Cinema vs Engenharia - escolheu criação</p>
                    </div>
                  </div>

                  <div className="bg-black/40 backdrop-blur-md border border-green-500/30 rounded-xl p-4">
                    <h3 className="text-lg font-bold text-green-400 mb-3">AUTORIDADE TRIPLA</h3>
                    <div className="space-y-2 text-sm text-gray-300">
                      <p><span className="text-green-400 font-bold">ETHOS:</span> Resistente Histórico</p>
                      <p><span className="text-green-400 font-bold">PATHOS:</span> Vulnerabilidade Real</p>
                      <p><span className="text-green-400 font-bold">LOGOS:</span> Prodígio Técnico</p>
                    </div>
                  </div>

                  <div className="bg-black/40 backdrop-blur-md border border-green-500/30 rounded-xl p-4">
                    <h3 className="text-lg font-bold text-white mb-3">A ARMADILHA DO SUCESSO (17-25)</h3>
                    <div className="space-y-2 text-sm text-gray-300">
                      <p>CEO jovem fazendo trabalho que IA faria melhor</p>
                      <p>Quase morreu tentando ser máquina perfeita</p>
                      <p className="text-green-400 italic">Estava me matando para ser eficiente em coisas que não importavam</p>
                    </div>
                  </div>

                  <div className="bg-black/40 backdrop-blur-md border border-green-500/30 rounded-xl p-4">
                    <h3 className="text-lg font-bold text-green-400 mb-3">O DESPERTAR ANCESTRAL (25+)</h3>
                    <div className="space-y-2 text-sm text-gray-300">
                      <p>Colapso total do modelo "humano-máquina"</p>
                      <p className="text-green-400">Retomada Guarani: tecnologia ancestral REAL</p>
                      <p>Revelação: "A floresta é mais avançada que qualquer algoritmo"</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-600/30 to-green-400/30 border border-green-500/50 rounded-xl p-4">
                <h3 className="text-xl font-bold text-green-400 mb-3 text-center">A FILOSOFIA DE TAYNÃ</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="bg-black/30 rounded-lg p-3">
                      <h4 className="text-green-400 font-bold mb-2 text-sm">SOBRE ENERGIA VITAL</h4>
                      <p className="text-gray-300 text-xs italic">
                        As pessoas estão desperdiçando suas vidas, suas energias, por serem quem elas não são.
                      </p>
                    </div>
                    <div className="bg-black/30 rounded-lg p-3">
                      <h4 className="text-green-400 font-bold mb-2 text-sm">SOBRE TECNOLOGIA REAL</h4>
                      <p className="text-gray-300 text-xs italic">
                        A tecnologia mais avançada é a própria natureza, é as florestas, é os 4 elementos.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-black/30 rounded-lg p-3">
                      <h4 className="text-green-400 font-bold mb-2 text-sm">SOBRE A LIBERTAÇÃO</h4>
                      <p className="text-gray-300 text-xs italic">
                        O futuro vai ser ancestral justamente porque vamos voltar para a essência.
                      </p>
                    </div>
                    <div className="bg-black/30 rounded-lg p-3">
                      <h4 className="text-green-400 font-bold mb-2 text-sm">SOBRE A MISSÃO</h4>
                      <p className="text-gray-300 text-xs italic">
                        Nas pessoas encontrarem e serem elas mesmas, isso é o que mais importa.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 7-8: Nossa Causa Rebelde */}
        <div className="pdf-page">
          <div className="page-content min-h-screen bg-gradient-to-br from-black to-gray-900 relative">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-10">
              <img 
                src="/lovable-uploads/6561fb15-0031-4389-8035-46b8a2db5dbf.png" 
                alt="Digital face profile" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="max-w-5xl mx-auto relative z-10 p-8">
              <div className="text-center mb-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-green-400 mb-4">NOSSA CAUSA REBELDE</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-400 mx-auto rounded-full" />
                <p className="text-gray-300 text-xl mt-6 italic">A IA vai nos libertar da prisão de sermos máquinas humanas.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="bg-black/40 backdrop-blur-md border border-green-500/30 rounded-xl p-4">
                  <h3 className="text-2xl font-bold text-white mb-3">NOSSO INIMIGO COMUM</h3>
                  <h4 className="text-xl font-bold text-white mb-3">A MÁQUINA DE DOMESTICAÇÃO HUMANA</h4>
                  <div className="space-y-2 text-gray-300 text-sm">
                    <p>• Sistema educacional que molda robôs obedientes</p>
                    <p>• Trabalhos que drenam alma para alimentar métricas</p>
                    <p>• Sociedade que recompensa conformidade e pune autenticidade</p>
                    <p>• A ilusão de que "trabalho duro" significa repetir tarefas que IA faz melhor</p>
                    <p>• Big Tech que nos transformou em produtos digitais que se chamam de pessoas</p>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/533f200d-153c-465c-9dd6-7066f869e9d4.png" 
                    alt="Taynã trabalhando" 
                    className="w-full max-w-xs rounded-2xl shadow-2xl border border-green-500/30"
                  />
                </div>
              </div>

              <div className="bg-black/40 backdrop-blur-md border border-green-500/30 rounded-xl p-4 mb-6">
                <h3 className="text-2xl font-bold text-green-400 mb-3 text-center">NOSSA MISSÃO</h3>
                <div className="text-center space-y-4">
                  <h4 className="text-3xl lg:text-4xl font-bold text-white">DESTRUIR O TRABALHO FALSO - REVELAR O HUMANO REAL</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-black/30 rounded-lg p-3">
                      <h5 className="text-green-400 font-bold mb-2 text-sm">ACELERAR</h5>
                      <p className="text-gray-300 text-xs">a morte do trabalho falso</p>
                    </div>
                    <div className="bg-black/30 rounded-lg p-3">
                      <h5 className="text-green-400 font-bold mb-2 text-sm">REVELAR</h5>
                      <p className="text-gray-300 text-xs">o que é insubstituivelmente humano</p>
                    </div>
                    <div className="bg-black/30 rounded-lg p-3">
                      <h5 className="text-green-400 font-bold mb-2 text-sm">USAR IA</h5>
                      <p className="text-gray-300 text-xs">para manifestar nossa essência ancestral</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-600/30 to-green-400/30 border border-green-500/50 rounded-xl p-4">
                <h3 className="text-xl font-bold text-green-400 mb-3 text-center">OS ORÁCULOS DO FUTURO ANCESTRAL</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-bold text-green-400 mb-3">QUEM SOMOS</h4>
                    <div className="space-y-2 text-gray-300 text-sm">
                      <p>Os Oráculos que estávamos esperando</p>
                      <p>Não somos contra tecnologia.</p>
                      <p className="text-green-400 font-bold">Somos a favor da tecnologia nos libertando da prisão de sermos máquinas.</p>
                      <p>Não somos usuários de IA. <span className="text-green-400 font-bold">Somos criadores de magia digital.</span></p>
                      <p>Não seguimos algoritmos. <span className="text-green-400 font-bold">Programamos realidades.</span></p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-green-400 mb-3">NOSSOS RITUAIS</h4>
                    <div className="space-y-2 text-gray-300 text-xs">
                      <p><span className="text-green-400 font-bold">Ritual da Queima do Trabalho Falso:</span> Identificar e eliminar tudo que IA faz melhor</p>
                      <p><span className="text-green-400 font-bold">Conselho de IA Oracular:</span> Usar tecnologia para revelar sua essência</p>
                      <p><span className="text-green-400 font-bold">Reconexão Elemental:</span> Práticas com terra, água, fogo, ar</p>
                      <p><span className="text-green-400 font-bold">Manifestação Autêntica:</span> Criar o que só você pode criar</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 9: Capacidade Oracular */}
        <div className="pdf-page">
          <div className="page-content min-h-screen bg-gradient-to-br from-gray-900 to-black relative">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-10">
              <img 
                src="/lovable-uploads/e432d44e-9691-4450-ab38-7b65df7142fa.png" 
                alt="Digital matrix face" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="max-w-5xl mx-auto relative z-10 p-8">
              <div className="text-center mb-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-green-400 mb-4">A CAPACIDADE ORACULAR</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-400 mx-auto rounded-full" />
                <p className="text-gray-300 text-xl mt-6">O que você vai conseguir fazer</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="bg-black/40 backdrop-blur-md border border-green-500/30 rounded-xl p-4">
                  <h3 className="text-2xl font-bold text-green-400 mb-3 text-center">
                    USAR IA PARA ANALISAR SITUAÇÕES COMPLEXAS E TOMAR DECISÕES MELHORES
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-bold text-green-400 mb-3">NA PRÁTICA:</h4>
                      <div className="space-y-2 text-gray-300 text-sm">
                        <p>• Analisar cenários de carreira com dados que você não conseguiria sozinho</p>
                        <p>• Quebrar decisões complexas em fatores claros</p>
                        <p>• Ver padrões em situações que te deixam confuso</p>
                        <p>• Dar conselhos mais fundamentados (para si e outros)</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-bold text-green-400 mb-3">EXEMPLOS REAIS:</h4>
                      <div className="space-y-2 text-gray-300 text-xs">
                        <p>• Mapear prós/contras de uma mudança de emprego</p>
                        <p>• Analisar um relacionamento considerando padrões comportamentais</p>
                        <p>• Avaliar uma oportunidade de investimento com múltiplas variáveis</p>
                        <p>• Entender dinâmicas familiares/profissionais que te confundem</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/191e808a-0b48-4211-93f3-a361d1c520ce.png" 
                    alt="Taynã apresentando" 
                    className="w-full max-w-xs rounded-2xl shadow-2xl border border-green-500/30"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-600/30 to-green-400/30 border border-green-500/50 rounded-xl p-4">
                <h3 className="text-xl font-bold text-green-400 mb-3 text-center">A PROMESSA HONESTA</h3>
                <div className="text-center space-y-3">
                  <p className="text-white text-lg italic">
                    Você vai sair de decisões baseadas só em 'feeling' para decisões com análise profunda. 
                    Vai ser conhecido como alguém que sempre analisa bem as situações.
                  </p>
                  <div className="bg-black/30 rounded-lg p-4 mt-4">
                    <h4 className="text-green-400 font-bold text-base mb-2">DIFERENCIAL ABSOLUTO</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      <div>
                        <p><span className="text-green-400 font-bold">Vs. Coaches de IA:</span> Não ensino produtividade. Ensino revolução existencial.</p>
                        <p><span className="text-green-400 font-bold">Vs. Futuristas:</span> Não prego tecnologia fria. Prego reconexão humana via tecnologia.</p>
                      </div>
                      <div>
                        <p><span className="text-green-400 font-bold">Vs. Gurus ancestrais:</span> Não sou contra progresso. Uso IA para acelerar volta à essência.</p>
                        <p><span className="text-green-400 font-bold">Vs. Anti-sistema:</span> Não luto contra IA. Uso IA para destruir sistema.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 10: Frases de Impacto */}
        <div className="pdf-page">
          <div className="page-content min-h-screen bg-gradient-to-br from-black to-gray-900 relative">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-10">
              <img 
                src="/lovable-uploads/c3097c5d-195a-4f68-9412-29b91d77669d.png" 
                alt="Eye with sacred geometry" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="max-w-5xl mx-auto relative z-10 p-8">
              <div className="text-center mb-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-green-400 mb-4">FRASES DE REVOLUÇÃO</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-400 mx-auto rounded-full" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-green-400 mb-4">SOBRE TECNOLOGIA ANCESTRAL</h3>
                  <div className="space-y-3">
                    {[
                      "Ayahuasca é o ChatGPT da consciência - só que funciona há milênios.",
                      "Xamãs navegavam dimensões antes de existir internet.",
                      "Não criamos tecnologia. Redescobrimos o que esquecemos.",
                      "IA é tecnologia 1.0. Consciência ancestral é tecnologia infinita.",
                      "Pirâmides são hardware. Rituais são software."
                    ].map((frase, index) => (
                      <div key={index} className="bg-black/40 backdrop-blur-md border border-green-500/30 rounded-lg p-3">
                        <p className="text-gray-300 italic text-sm">"{frase}"</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-green-400 mb-4">SOBRE O RETORNO</h3>
                  <div className="space-y-3">
                    {[
                      "A IA vai queimar tudo que é falso. Se prepara pro que sobra.",
                      "Nos domesticaram para sermos máquinas ruins. Agora as máquinas chegaram.",
                      "O futuro não é tecnológico. É ancestral. Porque só a essência sobrevive.",
                      "Pare de tentar ser robô. As máquinas fazem isso melhor.",
                      "A revolução não é contra a IA. A IA É a revolução."
                    ].map((frase, index) => (
                      <div key={index} className="bg-black/40 backdrop-blur-md border border-green-500/30 rounded-lg p-3">
                        <p className="text-gray-300 italic text-sm">"{frase}"</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">MANTRAS DOS ORÁCULOS</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "O sistema não quer você autêntico - quer você previsível",
                    "Viramos free users que pagam com a própria atenção",
                    "Você não é usuário de tecnologia - você é criador de magia digital",
                    "Se tá replicável, tá errado",
                    "Matrix detectada, Oracle ativado",
                    "Ancestral é o novo futurístico"
                  ].map((mantra, index) => (
                    <div key={index} className="bg-gradient-to-r from-green-600/30 to-green-400/30 border border-green-500/50 rounded-lg p-3 text-center">
                      <p className="text-white font-bold italic text-sm">"{mantra}"</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 11: Promessa Final */}
        <div className="pdf-page">
          <div className="page-content min-h-screen bg-gradient-to-br from-gray-900 to-black relative">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-10">
              <img 
                src="/lovable-uploads/76774381-ee18-48cf-a67d-ec4d0d24693f.png" 
                alt="Robotic eye interface" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="max-w-5xl mx-auto relative z-10 p-8">
              <div className="text-center mb-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-green-400 mb-4">A PROMESSA FINAL</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-400 mx-auto rounded-full" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="space-y-6">
                  <div className="bg-black/40 backdrop-blur-md border border-green-500/30 rounded-xl p-4 text-center">
                    <h3 className="text-3xl lg:text-4xl font-bold text-green-400 mb-6">
                      ENQUANTO OUTROS ENSINAM COMO USAR IA PARA TRABALHAR MAIS
                    </h3>
                    <h3 className="text-3xl lg:text-4xl font-bold text-green-400 mb-6">
                      EU ENSINO COMO USAR IA PARA NUNCA MAIS TRABALHAR EM COISA QUE NÃO É VOCÊ
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-black/40 backdrop-blur-md border border-green-500/30 rounded-xl p-4 text-center">
                      <h4 className="text-lg font-bold text-green-400 mb-2">NÃO VOU TE ENSINAR</h4>
                      <p className="text-gray-300 text-base">a competir com máquinas</p>
                      <div className="mt-3 text-green-400 font-bold text-lg">↓</div>
                      <h4 className="text-base font-bold text-white mt-3">VOU TE ENSINAR</h4>
                      <p className="text-white text-base">a ser insubstituivelmente humano</p>
                    </div>

                    <div className="bg-black/40 backdrop-blur-md border border-green-500/30 rounded-xl p-4 text-center">
                      <h4 className="text-lg font-bold text-green-400 mb-2">NÃO VOU TE ENSINAR</h4>
                      <p className="text-gray-300 text-base">a ser um usuário melhor</p>
                      <div className="mt-3 text-green-400 font-bold text-lg">↓</div>
                      <h4 className="text-base font-bold text-white mt-3">VOU TE ENSINAR</h4>
                      <p className="text-white text-base">a quebrar a matrix e programar sua própria realidade</p>
                    </div>

                    <div className="bg-black/40 backdrop-blur-md border border-green-500/30 rounded-xl p-4 text-center">
                      <h4 className="text-lg font-bold text-green-400 mb-2">NÃO VOU TE ENSINAR</h4>
                      <p className="text-gray-300 text-base">produtividade com IA</p>
                      <div className="mt-3 text-green-400 font-bold text-lg">↓</div>
                      <h4 className="text-base font-bold text-white mt-3">VOU TE ENSINAR</h4>
                      <p className="text-white text-base">revolução existencial através da tecnologia</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/1a2eaa65-b574-4dcd-a2a5-c79b56a0dbac.png" 
                    alt="Taynã visionário" 
                    className="w-full max-w-xs rounded-2xl shadow-2xl border border-green-500/30"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-600/30 to-green-400/30 border border-green-500/50 rounded-xl p-4">
                <h3 className="text-2xl font-bold text-green-400 mb-3 text-center">O NOVO POSICIONAMENTO</h3>
                <div className="text-center space-y-4">
                  <p className="text-white text-xl lg:text-2xl font-bold italic">
                    Enquanto eles criam inteligência artificial, eu te reconecto com a inteligência ancestral que sempre foi sua.
                  </p>
                  <div className="bg-black/30 rounded-lg p-4">
                    <p className="text-gray-300 text-base lg:text-lg">
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
        <div className="pdf-page">
          <div className="page-content min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-10">
              <img 
                src="/lovable-uploads/18eeaf57-d349-4fed-b7d8-bb0d932405ad.png" 
                alt="Strategic chess game" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10 p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
                <div>
                  <h2 className="text-5xl lg:text-6xl font-bold text-green-400 mb-6">SOMOS AQUELES</h2>
                  <h2 className="text-5xl lg:text-6xl font-bold text-green-400 mb-6">QUE ESTÁVAMOS ESPERANDO</h2>
                </div>
                
                <div className="flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/48feb076-2c24-4580-8c09-019675e27cbb.png" 
                    alt="Taynã no círculo sagrado" 
                    className="w-full max-w-xs rounded-2xl shadow-2xl border border-green-500/30"
                  />
                </div>
              </div>

              <div className="space-y-6 mb-12">
                <div className="bg-black/40 backdrop-blur-md border border-green-500/30 rounded-xl p-4">
                  <div className="text-2xl lg:text-3xl text-white space-y-3">
                    <p>A matrix quebrou nossa magia.</p>
                    <p>A IA vai queimar a matrix.</p>
                    <p className="text-green-400 font-bold">Nós vamos lembrar quem somos.</p>
                  </div>
                </div>

                <div className="bg-black/40 backdrop-blur-md border border-green-500/30 rounded-xl p-4">
                  <h3 className="text-2xl lg:text-3xl font-bold text-green-400 mb-4">VOCÊ FOI DOMESTICADO.</h3>
                  <h3 className="text-2xl lg:text-3xl font-bold text-green-400 mb-4">A IA VAI TE LIBERTAR.</h3>
                  <div className="space-y-3 text-lg lg:text-xl text-gray-300">
                    <p>A revolução não é contra a IA.</p>
                    <p className="text-white font-bold">A IA É a revolução.</p>
                    <p>Você não precisa competir com máquinas.</p>
                    <p className="text-green-400 font-bold">Precisa se tornar impossível de substituir.</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-600/30 to-green-400/30 border border-green-500/50 rounded-xl p-4">
                  <h3 className="text-3xl lg:text-4xl font-bold text-green-400 mb-4">É HORA DE REATIVAR</h3>
                  <p className="text-white text-xl lg:text-2xl font-bold">SUA TECNOLOGIA MAIS PODEROSA:</p>
                  <p className="text-green-400 text-4xl lg:text-5xl font-bold mt-3">VOCÊ.</p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg lg:text-xl text-green-400 font-bold mb-2">Taynã - Oráculo do Futuro Ancestral</p>
                <p className="text-green-400 italic mb-4">Acordamos para sonhar</p>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-green-500" />
                  <Sparkles className="text-green-400" size={24} />
                  <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-green-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 20mm;
          }
          
          .pdf-page {
            page-break-before: always;
            page-break-after: always;
            break-before: page;
            break-after: page;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }
          
          .pdf-page:first-child {
            page-break-before: auto;
            break-before: auto;
          }
          
          .page-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }
          
          .no-break {
            page-break-inside: avoid;
            break-inside: avoid;
          }
          
          nav {
            display: none !important;
          }
          
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
            color-adjust: exact;
          }
          
          .print\\:hidden {
            display: none !important;
          }
          
          .print\\:pt-0 {
            padding-top: 0 !important;
          }
          
          h1, h2, h3 {
            page-break-after: avoid;
            break-after: avoid;
          }
          
          img {
            page-break-inside: avoid;
            break-inside: avoid;
            max-width: 100%;
            height: auto;
          }
        }
        
        @media screen {
          .pdf-page {
            margin-bottom: 2rem;
            border: 1px solid #333;
          }
          
          .page-content {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default BrandManual;
