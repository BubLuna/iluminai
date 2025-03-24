
import React, { useState } from "react";
import FadeIn from "../animations/FadeIn";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "O que devo levar para o retiro?",
    answer:
      "Você deve levar roupas confortáveis, itens de higiene pessoal, bíblia, caderno para anotações, e qualquer medicamento que precise usar regularmente. Uma lista detalhada será fornecida após a inscrição.",
  },
  {
    question: "Como faço para chegar ao local?",
    answer:
      "O endereço completo do local do retiro é [inserir endereço]. Nós também forneceremos instruções detalhadas e opções de transporte após a confirmação da sua inscrição.",
  },
  {
    question: "Há alimentação inclusa?",
    answer:
      "Sim, todas as refeições durante o período do retiro estão inclusas na inscrição. Informamos que temos opções para restrições alimentares, basta nos comunicar com antecedência.",
  },
  {
    question: "O retiro é aberto para amigos (não católicos)?",
    answer:
      "Sim, o retiro é aberto para todos os jovens, independentemente de sua formação religiosa. É uma oportunidade para conhecer mais sobre a fé católica em um ambiente acolhedor.",
  },
  {
    question: "Preciso de autorização dos pais para participar?",
    answer:
      "Sim, todos os participantes menores de 18 anos precisam de autorização por escrito dos pais ou responsáveis. O formulário de autorização faz parte da ficha de inscrição.",
  },
  {
    question: "Como faço para me inscrever?",
    answer:
      "As inscrições são feitas através de fichas físicas, que exigem assinatura dos pais ou responsáveis. Entre em contato pelo telefone (48) 99999-9999 para solicitar sua ficha.",
  },
  {
    question: "Tem custo de participação?",
    answer:
      "Sim, o retiro tem um valor de inscrição que ajuda a cobrir os custos de alimentação, materiais e estrutura. Porém, temos opções de ajuda financeira para quem necessitar. Entre em contato para mais informações.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container-tight">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-iluminai-yellow/20 rounded-full text-sm font-medium text-iluminai-blue-dark mb-4">
              Dúvidas
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perguntas Frequentes
            </h2>
            <div className="h-1 w-20 bg-iluminai-yellow mx-auto"></div>
            <p className="max-w-2xl mx-auto mt-6 text-iluminai-blue-dark/70">
              Encontre respostas para as perguntas mais comuns sobre o Retiro Iluminai. Se sua dúvida não estiver aqui, entre em contato conosco.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FadeIn key={index} delay={0.1 * index} direction="up">
                <div className="border border-iluminai-yellow/30 rounded-xl overflow-hidden shadow-subtle bg-white">
                  <button
                    className="w-full px-6 py-4 flex items-center justify-between text-left transition-colors hover:bg-iluminai-yellow/5 focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openIndex === index}
                  >
                    <h3 className="text-lg font-medium">{faq.question}</h3>
                    <div className="flex-shrink-0 ml-4">
                      {openIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-iluminai-yellow" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-iluminai-yellow" />
                      )}
                    </div>
                  </button>
                  <div
                    className={`px-6 transition-all duration-300 overflow-hidden ${
                      openIndex === index ? "py-4 opacity-100 max-h-96" : "max-h-0 opacity-0 py-0"
                    }`}
                  >
                    <p className="text-iluminai-blue-dark/70">{faq.answer}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5}>
            <div className="text-center mt-12">
              <p className="mb-6 text-iluminai-blue-dark/70">
                Ainda tem dúvidas? Entre em contato direto conosco.
              </p>
              <div className="inline-flex items-center justify-center">
                <a
                  href="tel:+5548999999999"
                  className="button-iluminai"
                >
                  (48) 99999-9999
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
