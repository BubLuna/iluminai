
import React from "react";
import FadeIn from "../animations/FadeIn";
import { Button } from "../ui/Button";
import { ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-iluminai-yellow/10 to-transparent z-0"></div>
      
      <div className="container-tight relative z-10">
        <div className="max-w-3xl mx-auto text-center stagger-animation">
          <div className="inline-block px-4 py-1 bg-iluminai-yellow/20 rounded-full text-sm font-medium text-iluminai-blue-dark mb-6">
            Retiro Católico para Jovens
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="inline-block">Retiro</span>{" "}
            <span className="inline-block text-iluminai-yellow">Iluminai</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-iluminai-blue-dark/80 max-w-2xl mx-auto">
            "Ilumine sua fé, ilumine o mundo!" - Uma jornada de fé, amizade e crescimento espiritual para jovens de 12 a 15 anos.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => {
                document.getElementById("inscricao")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Quero participar
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                document.getElementById("informacoes")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Saiba mais
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#inscricao"
          className="w-10 h-10 rounded-full bg-white shadow-subtle flex items-center justify-center text-iluminai-blue-dark hover:bg-iluminai-yellow transition-colors duration-300"
        >
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
