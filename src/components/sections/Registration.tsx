
import React from "react";
import FadeIn from "../animations/FadeIn";
import { Button } from "../ui/Button";
import { Phone, Info } from "lucide-react";

const Registration: React.FC = () => {
  return (
    <section id="inscricao" className="bg-white py-24">
      <div className="container-tight">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-iluminai-yellow/20 rounded-full text-sm font-medium text-iluminai-blue-dark mb-4">
              Inscrições Abertas
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Como se inscrever no Retiro Iluminai
            </h2>
            <div className="h-1 w-20 bg-iluminai-yellow mx-auto"></div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <div className="glass-card p-8 md:p-10 h-full">
              <h3 className="text-2xl font-semibold mb-6">
                Processo de Inscrição
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-iluminai-yellow flex items-center justify-center font-semibold text-iluminai-blue-dark mr-3 flex-shrink-0 mt-1">
                    1
                  </span>
                  <p>
                    As inscrições são feitas somente através de fichas físicas, que exigem a assinatura dos pais ou responsáveis.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-iluminai-yellow flex items-center justify-center font-semibold text-iluminai-blue-dark mr-3 flex-shrink-0 mt-1">
                    2
                  </span>
                  <p>
                    Entre em contato pelo telefone (48) 99999-9999 para solicitar a sua ficha de inscrição.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-iluminai-yellow flex items-center justify-center font-semibold text-iluminai-blue-dark mr-3 flex-shrink-0 mt-1">
                    3
                  </span>
                  <p>
                    Após preencher a ficha com seus dados e obter a assinatura dos responsáveis, entregue-a para a equipe organizadora.
                  </p>
                </li>
              </ul>

              <div className="mt-8 flex justify-center md:justify-start">
                <Button
                  icon={<Phone size={16} />}
                  onClick={() => {
                    window.location.href = "tel:+5548999999999";
                  }}
                >
                  Solicite sua ficha agora!
                </Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="bg-iluminai-gray-light p-8 rounded-2xl border border-iluminai-yellow/30">
              <div className="flex items-center mb-6">
                <Info className="w-6 h-6 text-iluminai-yellow mr-3" />
                <h3 className="text-xl font-semibold">Informações Importantes</h3>
              </div>
              <ul className="space-y-4 text-iluminai-blue-dark/80">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-iluminai-yellow flex-shrink-0 mt-2 mr-3"></span>
                  <p>O retiro é destinado a jovens de 12 a 15 anos.</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-iluminai-yellow flex-shrink-0 mt-2 mr-3"></span>
                  <p>É necessária a autorização dos pais ou responsáveis.</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-iluminai-yellow flex-shrink-0 mt-2 mr-3"></span>
                  <p>As vagas são limitadas e preenchidas por ordem de inscrição.</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-iluminai-yellow flex-shrink-0 mt-2 mr-3"></span>
                  <p>Em caso de dúvidas, consulte a seção de <a href="#faq" className="text-iluminai-yellow font-medium hover:underline">Perguntas Frequentes</a>.</p>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Registration;
