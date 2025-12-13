import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Upload, X, ImageIcon, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface Photo {
  id: string;
  url: string;
  uploadedBy: string;
  timestamp: Date;
}

const PhotoGallery = () => {
  const [photos, setPhotos] = useState<Photo[]>([
    {
      id: "1",
      url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop",
      uploadedBy: "Organizadores",
      timestamp: new Date(),
    },
    {
      id: "2",
      url: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop",
      uploadedBy: "Organizadores",
      timestamp: new Date(),
    },
    {
      id: "3",
      url: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop",
      uploadedBy: "Organizadores",
      timestamp: new Date(),
    },
  ]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const selectedPhoto = selectedIndex !== null ? photos[selectedIndex] : null;

  const goToPrevious = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null && selectedIndex < photos.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);

    Array.from(files).forEach((file, index) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setTimeout(() => {
          const newPhoto: Photo = {
            id: `upload-${Date.now()}-${index}`,
            url: e.target?.result as string,
            uploadedBy: "Tú",
            timestamp: new Date(),
          };
          setPhotos((prev) => [newPhoto, ...prev]);
          
          if (index === files.length - 1) {
            setIsUploading(false);
            toast({
              title: "¡Fotos subidas!",
              description: `${files.length} foto(s) agregada(s) a la galería`,
            });
          }
        }, 500 * (index + 1));
      };
      reader.readAsDataURL(file);
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <section id="galeria" className="py-10 sm:py-16 md:py-24 bg-secondary">
      <div className="container px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-foreground/10 text-foreground text-xs sm:text-sm font-semibold mb-3">
            Momentos Especiales
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-3">
            Galería de Fotos
          </h2>
          <p className="text-foreground/70 text-sm sm:text-base max-w-2xl mx-auto mb-6 font-body">
            Comparte tus fotos del evento y revive los mejores momentos
          </p>

          {/* Upload button */}
          <div className="flex flex-col items-center gap-3">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileSelect}
              className="hidden"
              id="photo-upload"
            />
            <Button
              onClick={() => fileInputRef.current?.click()}
              disabled={isUploading}
              className="gap-2 bg-foreground text-primary-foreground hover:bg-foreground/90 px-5 py-5 text-sm rounded-full w-full max-w-xs"
            >
              {isUploading ? (
                <>
                  <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Subiendo...
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4" />
                  Subir mis fotos
                </>
              )}
            </Button>
            <div className="flex items-center gap-2 text-foreground/60 text-xs sm:text-sm">
              <Camera className="w-4 h-4" />
              <span>{photos.length} fotos compartidas</span>
            </div>
          </div>
        </motion.div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
          <AnimatePresence>
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-foreground/10 cursor-pointer shadow-lg"
                onClick={() => setSelectedIndex(index)}
              >
                <img
                  src={photo.url}
                  alt={`Foto del evento por ${photo.uploadedBy}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 text-primary-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-xs sm:text-sm font-medium">{photo.uploadedBy}</p>
                </div>
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-secondary/90 backdrop-blur-sm flex items-center justify-center">
                    <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Empty state placeholder */}
          {photos.length < 8 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="aspect-square rounded-xl sm:rounded-2xl border-2 border-dashed border-foreground/20 flex flex-col items-center justify-center gap-1.5 text-foreground/50 cursor-pointer hover:border-foreground/40 hover:text-foreground/70 transition-colors"
              onClick={() => fileInputRef.current?.click()}
            >
              <ImageIcon className="w-6 h-6 sm:w-8 sm:h-8" />
              <span className="text-xs text-center px-2">Añade fotos</span>
            </motion.div>
          )}
        </div>

        {/* Slider Lightbox */}
        <AnimatePresence>
          {selectedPhoto && selectedIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/95 backdrop-blur-sm"
              onClick={() => setSelectedIndex(null)}
            >
              {/* Previous button */}
              {selectedIndex > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                  className="absolute left-2 sm:left-4 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary/90 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              )}

              {/* Next button */}
              {selectedIndex < photos.length - 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  className="absolute right-2 sm:right-4 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary/90 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              )}

              <motion.div
                key={selectedPhoto.id}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-4xl max-h-[90vh] mx-12 sm:mx-20 rounded-xl sm:rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedPhoto.url}
                  alt={`Foto del evento por ${selectedPhoto.uploadedBy}`}
                  className="max-w-full max-h-[90vh] object-contain"
                />
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="absolute top-3 right-3 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-secondary/90 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-foreground/80 to-transparent">
                  <p className="text-primary-foreground font-medium text-sm sm:text-base">
                    Subida por {selectedPhoto.uploadedBy}
                  </p>
                  <p className="text-primary-foreground/60 text-xs sm:text-sm">
                    {selectedIndex + 1} / {photos.length}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PhotoGallery;
