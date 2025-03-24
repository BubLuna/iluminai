
import React from "react";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-iluminai-blue-dark text-white pt-16 pb-8">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-iluminai-yellow flex items-center justify-center text-iluminai-blue-dark font-bold text-lg mr-3">
                IL
              </div>
              <span className="text-xl font-bold">Iluminai</span>
            </div>
            <p className="text-gray-300 text-center md:text-left">
              "Ilumine sua fé, ilumine o mundo!"
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-iluminai-yellow hover:text-iluminai-blue-dark transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-iluminai-yellow hover:text-iluminai-blue-dark transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-iluminai-yellow" />
                <span>(48) 99999-9999</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-iluminai-yellow" />
                <span>contato@iluminai.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-iluminai-yellow" />
                <span>Local do evento (endereço completo)</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4">Links Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#inicio" className="hover:text-iluminai-yellow transition-colors">
                Início
              </a>
              <a href="#inscricao" className="hover:text-iluminai-yellow transition-colors">
                Inscrição
              </a>
              <a href="#informacoes" className="hover:text-iluminai-yellow transition-colors">
                Informações
              </a>
              <a href="#fotos" className="hover:text-iluminai-yellow transition-colors">
                Fotos
              </a>
              <a href="#contribua" className="hover:text-iluminai-yellow transition-colors">
                Contribua
              </a>
              <a href="#faq" className="hover:text-iluminai-yellow transition-colors">
                FAQ
              </a>
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Iluminai. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 text-sm">
            Desenvolvido com ❤️ por Lovable
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
