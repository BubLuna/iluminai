
import React from "react";
import { Heart, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-iluminai-yellow-light text-iluminai-blue-dark pt-16 pb-8">
      <div className="container-wide">
        <div className="flex flex-col items-center text-center gap-10 mb-12">
              <ul className="space-y-3">
                <li className="flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2 text-iluminai-yellow" />
                  <a href="https://wa.me/48999885086?text=Olá,%20vim%20pelo%20site%20do%20ILUMINAI!%20Gostaria%20de%20mais%20informações%20:)"
                  className="text-iluminai-blue-dark hover:text-iluminai-yellow transition-colors">
                    (48) 9.9988-5086                
                  </a>
                </li>
                <li className="flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2 text-iluminai-yellow" />
                  <a href="mailto:contato@iluminai.com" 
                  className="text-iluminai-blue-dark hover:text-iluminai-yellow transition-colors">
                    contato@iluminai.com
                  </a>
                </li>
                <li className="flex items-center justify-center">
                  <MapPin className="w-5 h-5 mr-2 text-iluminai-yellow" />
                  <a href="https://maps.app.goo.gl/pR3gYQZWRKxH4wUMA" 
                  className="text-iluminai-blue-dark hover:text-iluminai-yellow transition-colors">
                    Santuário da Beata Albertina | São Luis, Imaruí                
                  </a>
                </li>
              </ul>
          </div>
            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-center items-center">
              <p className="flex items-center justify-center">
                © {new Date().getFullYear()} Retiro ILUMINAI. Site feito com 
                <Heart size={14} className="mx-1 text-efeta-500" /> 
                <a href="https://www.instagram.com/rebecalunardibublitz/" className="text-iluminai-yellow transition-colors">
                  por Rebeca Lunardi Bublitz.
                </a>
              </p>
            </div>
      </div>
  </footer>);
};

export default Footer;
