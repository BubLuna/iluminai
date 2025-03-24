
import React from "react";
import FadeIn from "../animations/FadeIn";
import { Button } from "../ui/Button";
import { Heart, DollarSign, Gift, Smartphone } from "lucide-react";

const Contribute: React.FC = () => {
  return (
    <section id="contribua" className="py-24 bg-iluminai-yellow-light">
      <div className="container-tight">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-iluminai-yellow/20 rounded-full text-sm font-medium text-iluminai-blue-dark mb-4">
              Sua Ajuda é Importante
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contribua para que o Retiro Iluminai aconteça
            </h2>
            <div className="h-1 w-20 bg-iluminai-yellow mx-auto"></div>
            <p className="max-w-2xl mx-auto mt-6 text-iluminai-blue-dark/70">
              O Retiro Iluminai é realizado com muito amor e dedicação. Sua contribuição é fundamental para que possamos oferecer uma experiência transformadora para os jovens.
            </p>
          </div>
        </FadeIn>

        <div className="glass-card p-8 md:p-10 shadow-subtle">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <FadeIn direction="left">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">
                  Como Sua Contribuição Ajuda
                </h3>
                <p className="text-iluminai-blue-dark/80">
                  Suas doações são fundamentais para cobrir custos com:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-8 h-8 rounded-full bg-iluminai-yellow flex items-center justify-center text-iluminai-blue-dark mr-3 flex-shrink-0">
                      <Gift className="w-4 h-4" />
                    </span>
                    <div>
                      <h4 className="font-medium">Materiais</h4>
                      <p className="text-iluminai-blue-dark/70">
                        Apostilas, camisetas, materiais para dinâmicas e atividades.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-8 h-8 rounded-full bg-iluminai-yellow flex items-center justify-center text-iluminai-blue-dark mr-3 flex-shrink-0">
                      <DollarSign className="w-4 h-4" />
                    </span>
                    <div>
                      <h4 className="font-medium">Alimentação</h4>
                      <p className="text-iluminai-blue-dark/70">
                        Refeições e lanches de qualidade para todos os participantes.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-8 h-8 rounded-full bg-iluminai-yellow flex items-center justify-center text-iluminai-blue-dark mr-3 flex-shrink-0">
                      <Heart className="w-4 h-4" />
                    </span>
                    <div>
                      <h4 className="font-medium">Estrutura</h4>
                      <p className="text-iluminai-blue-dark/70">
                        Locação do espaço, equipamentos de som e decoração.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div className="bg-white rounded-2xl p-8 border border-iluminai-yellow/30 shadow-subtle">
                <h3 className="text-2xl font-semibold mb-6">
                  Formas de Contribuição
                </h3>

                <div className="space-y-6">
                  <div className="border-b border-iluminai-yellow/20 pb-6">
                    <h4 className="font-medium mb-2">Transferência Bancária</h4>
                    <p className="text-sm text-iluminai-blue-dark/70 mb-3">
                      Banco: [Nome do Banco]<br />
                      Agência: [Número]<br />
                      Conta: [Número]<br />
                      Titular: [Nome]<br />
                      PIX: [Chave PIX]
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      icon={<Smartphone size={16} />}
                      onClick={() => {
                        navigator.clipboard.writeText("[Chave PIX]");
                        alert("Chave PIX copiada para a área de transferência!");
                      }}
                    >
                      Copiar chave PIX
                    </Button>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Outras Formas de Ajudar</h4>
                    <ul className="space-y-2 text-iluminai-blue-dark/70">
                      <li className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-iluminai-yellow mr-2"></span>
                        Doação de alimentos não perecíveis
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-iluminai-yellow mr-2"></span>
                        Materiais para as atividades
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <Button
                    fullWidth
                    icon={<Heart size={16} />}
                    onClick={() => {
                      window.location.href = "tel:+5548999999999";
                    }}
                  >
                    Quero contribuir
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contribute;
