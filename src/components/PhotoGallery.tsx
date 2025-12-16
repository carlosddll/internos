import { motion } from "framer-motion";
import { Camera, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const GOOGLE_DRIVE_FOLDER_URL = "https://drive.google.com/drive/folders/1XS0LJqRgnDyVgXZSP9xq_G0E5YTb0lzE?usp=sharing";

const PhotoGallery = () => {
  return (
    <section id="galeria" className="py-10 sm:py-16 md:py-24 bg-secondary">
      <div className="container px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-foreground/10 text-foreground text-xs sm:text-sm font-semibold mb-3">
            Momentos Especiales
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-3">
            Galería de Fotos
          </h2>
          <p className="text-foreground/70 text-sm sm:text-base max-w-2xl mx-auto mb-8 font-body">
            Revive los mejores momentos del evento en nuestra galería compartida
          </p>

          <Button
            asChild
            className="gap-2 bg-foreground text-primary-foreground hover:bg-foreground/90 px-6 py-6 text-base rounded-full"
          >
            <a href={GOOGLE_DRIVE_FOLDER_URL} target="_blank" rel="noopener noreferrer">
              <Camera className="w-5 h-5" />
              Ver Galería de Fotos
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PhotoGallery;
