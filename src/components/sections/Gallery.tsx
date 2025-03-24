
import React, { useState } from "react";
import FadeIn from "../animations/FadeIn";
import { X } from "lucide-react";

// Placeholder for images - in a real implementation, these would be real URLs
const images = [
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (image: string) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="fotos" className="py-24 bg-white">
      <div className="container-wide">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-iluminai-yellow/20 rounded-full text-sm font-medium text-iluminai-blue-dark mb-4">
              Memórias
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Galeria de Fotos
            </h2>
            <div className="h-1 w-20 bg-iluminai-yellow mx-auto"></div>
            <p className="max-w-2xl mx-auto mt-6 text-iluminai-blue-dark/70">
              Confira alguns momentos especiais capturados em nossos retiros anteriores. Cada imagem conta uma história de fé, amizade e crescimento espiritual.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <FadeIn key={index} delay={0.1 * index} className="image-reveal">
              <div 
                className="aspect-square overflow-hidden rounded-2xl cursor-pointer relative group card-hover"
                onClick={() => openLightbox(image)}
              >
                <img
                  src={image}
                  alt={`Retiro Iluminai ${index + 1}`}
                  className="w-full h-full object-cover lazy-image transition-transform duration-500 group-hover:scale-105"
                  onLoad={(e) => {
                    (e.target as HTMLImageElement).classList.add("loaded");
                  }}
                />
                <div className="absolute inset-0 bg-iluminai-blue-dark/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-lg font-medium">Ver imagem</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Image Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-6xl w-full">
              <button
                className="absolute top-0 right-0 -mt-12 -mr-12 bg-white text-iluminai-blue-dark p-2 rounded-full z-10"
                onClick={closeLightbox}
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedImage}
                alt="Ampliada"
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>
            <div
              className="absolute inset-0 cursor-pointer"
              onClick={closeLightbox}
            ></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
