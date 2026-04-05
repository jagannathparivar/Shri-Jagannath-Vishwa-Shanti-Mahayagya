import { useState } from "react";
import Gallery1 from "../assets/Gallery1.webp";
import Gallery2 from "../assets/Gallery2.webp";
import Gallery3 from "../assets/Gallery3.webp";
import Gallery4 from "../assets/Gallery4.webp";
import Gallery5 from "../assets/Gallery5.webp";
import Gallery6 from "../assets/Gallery6.webp";
import Gallery7 from "../assets/Gallery7.webp";
import { X } from "lucide-react";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: Gallery1, alt: "Gallery Image 1", className: "md:col-span-2 md:row-span-2 shadow-lg", position: "object-center" },
    { src: Gallery6, alt: "Gallery Image 6", className: "md:col-span-1 md:row-span-2 shadow-lg", position: "object-top" },
    { src: Gallery2, alt: "Gallery Image 2", className: "md:col-span-1 md:row-span-1 shadow-lg", position: "object-top" },
    { src: Gallery3, alt: "Gallery Image 3", className: "md:col-span-1 md:row-span-1 shadow-lg", position: "object-top" },
    { src: Gallery4, alt: "Gallery Image 4", className: "md:col-span-1 md:row-span-1 shadow-lg", position: "object-center" },
    { src: Gallery5, alt: "Gallery Image 5", className: "md:col-span-2 md:row-span-1 shadow-lg", position: "object-center" },
    { src: Gallery7, alt: "Gallery Image 7", className: "md:col-span-1 md:row-span-1 shadow-lg", position: "object-center" },
  ];

  return (
    <section id="gallery" className="py-20 px-4 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 drop-shadow-sm">
            Event Gallery
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg italic">
            "Capturing the divine moments of spiritual awakening and universal peace."
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((img, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl cursor-pointer group shadow-lg transition-all duration-500 hover:shadow-glow-gold hover:-translate-y-1 ${img.className}`}
              onClick={() => setSelectedImage(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full h-full object-cover ${img.position || 'object-center'} transition-transform duration-700 group-hover:scale-110`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] p-4 animate-in zoom-in-95 duration-300">
            <button
              className="absolute -top-12 right-0 p-2 text-primary hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Gallery Preview"
              className="w-full h-full object-contain rounded-lg shadow-2xl border border-primary/20"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
