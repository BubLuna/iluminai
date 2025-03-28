
import React from "react";
import { Heart, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-iluminai-yellow-light text-iluminai-blue-dark pt-16 pb-8">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div className="flex flex-col items-center justify-center md:items-start">
            <div className="flex items-center justify-center mb-4">
              <div className="w-10 h-10 rounded-full bg-iluminai-yellow flex items-center justify-center text-iluminai-blue-dark font-bold text-lg mr-3">
                IL
              </div>
              <span className="text-xl font-bold">Iluminai</span>
            </div>
            <p className="text-iluminai-blue-dark text-center justify-center md:text-left">
              "Ilumine sua fé, ilumine o mundo!"
            </p>
            <div className="flex justify-center space-x-4 mt-6">
              <a
                href="https://www.instagram.com/iluminaiomundo/"
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
              <li className="flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2 text-iluminai-yellow" />
                <a href="https://wa.me/5599988505086?text=Olá,%20vim%20pelo%20site%20do%20ILUMINAI!%20Gostaria%20de%20mais%20informações%20:)">
                  (48) 9.9988-5086                
                </a>
              </li>
              <li className="flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2 text-iluminai-yellow" />
                <a href="mailto:contato@iluminai.com" className="text-gray-600 hover:text-efeta-500 transition-colors">
                  contato@iluminai.com
                </a>
              </li>
              <li className="flex items-center justify-center">
                <MapPin className="w-5 h-5 mr-2 text-iluminai-yellow" />
                <a href="https://maps.app.goo.gl/pR3gYQZWRKxH4wUMA">
                  Santuário da Beata Albertina | São Luis                
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center md:items-start">
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

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-center items-center">
          <p className="flex items-center justify-center">
            © {new Date().getFullYear()} Retiro ILUMINAI. Site feito com 
            <Heart size={14} className="mx-1 text-efeta-500" /> 
            <a href="https://www.instagram.com/rebecalunardibublitz/" className="hover:text-efeta-500 transition-colors">
              por Rebeca Lunardi Bublitz.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
