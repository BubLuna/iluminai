
import React from "react";
import FadeIn from "../animations/FadeIn";
import { Calendar, MapPin, Users, Clock, Target } from "lucide-react";

const EventInfo: React.FC = () => {
  return (
    <section id="informacoes" className="py-24 bg-iluminai-yellow-light">
      <div className="container-tight">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-iluminai-yellow/20 rounded-full text-sm font-medium text-iluminai-blue-dark mb-4">
              Detalhes do Evento
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Informações do Retiro
            </h2>
            <div className="h-1 w-20 bg-iluminai-yellow mx-auto"></div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <FadeIn direction="up" delay={0.1}>
            <div className="glass-card p-8 h-full shadow-subtle">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-iluminai-yellow flex items-center justify-center text-iluminai-blue-dark">
                  <Calendar className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Data do Evento</h3>
                  <p className="text-iluminai-blue-dark/70">
                    Data e horários completos
                  </p>
                </div>
              </div>
              <p className="text-iluminai-blue-dark">
                O retiro acontecerá no dia 03 de agosto, com início às 8 horas e encerramento às 18 horas.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="glass-card p-8 h-full shadow-subtle">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-iluminai-yellow flex items-center justify-center text-iluminai-blue-dark">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Local</h3>
                  <p className="text-iluminai-blue-dark/70">
                    Endereço completo
                  </p>
                </div>
              </div>
              <p className="text-iluminai-blue-dark mb-4">
                Santuário da Beata Albertina | São Luis, Imaruí 
              </p>
              <a
                href="https://maps.app.goo.gl/pR3gYQZWRKxH4wUMA"
                className="inline-flex items-center text-iluminai-yellow font-medium hover:underline"
              >
                Ver no Google Maps
              </a>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div className="glass-card p-8 h-full shadow-subtle">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-iluminai-yellow flex items-center justify-center text-iluminai-blue-dark">
                  <Users className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Público-alvo</h3>
                  <p className="text-iluminai-blue-dark/70">
                    Quem pode participar
                  </p>
                </div>
              </div>
              <p className="text-iluminai-blue-dark">
                O retiro é destinado a jovens com idade entre 12 e 15 anos. Todos são bem-vindos, independentemente do nível de conhecimento religioso.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div className="glass-card p-8 h-full shadow-subtle">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-iluminai-yellow flex items-center justify-center text-iluminai-blue-dark">
                  <Target className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Objetivo do Retiro</h3>
                  <p className="text-iluminai-blue-dark/70">
                    Propósito e benefícios
                  </p>
                </div>
              </div>
              <p className="text-iluminai-blue-dark">
                O Retiro Iluminai tem como objetivo proporcionar um ambiente de reflexão, oração e comunhão, fortalecendo a fé católica dos jovens e incentivando-os a serem luz para o mundo.
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.5}>
          <div className="mt-16 glass-card p-8 md:p-10 shadow-subtle">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Programação do Retiro
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-iluminai-yellow mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Acolhimento e Credenciamento</h4>
                    <p className="text-iluminai-blue-dark/70">Início das atividades com recepção aos participantes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-iluminai-yellow mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Momentos de Oração</h4>
                    <p className="text-iluminai-blue-dark/70">Reflexões espirituais e momentos de conexão com Deus</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-iluminai-yellow mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Palestras Formativas</h4>
                    <p className="text-iluminai-blue-dark/70">Ensinamentos sobre fé e valores cristãos</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-iluminai-yellow mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Dinâmicas em Grupo</h4>
                    <p className="text-iluminai-blue-dark/70">Atividades interativas para integração e aprendizado</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-iluminai-yellow mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Momentos de Partilha</h4>
                    <p className="text-iluminai-blue-dark/70">Oportunidades para compartilhar experiências</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-iluminai-yellow mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Celebração Eucarística</h4>
                    <p className="text-iluminai-blue-dark/70">Momento especial de comunhão</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-iluminai-blue-dark/70 mt-8">
              A programação detalhada não será divulgada, em pról de manter o envolvimento dos Iluminados com o momento.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default EventInfo;
