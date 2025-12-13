import { Heart } from "lucide-react";
import logoDetecta from "@/assets/logo-detecta.png";

const Footer = () => {
  return (
    <footer className="py-6 sm:py-8 bg-foreground text-primary-foreground">
      <div className="container px-5 sm:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <img src={logoDetecta} alt="Clínica Detecta" className="h-8 sm:h-10 w-auto" />
          
          <p className="flex items-center gap-2 text-xs sm:text-sm text-primary-foreground/70">
            Hecho con <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-secondary fill-secondary" /> para nuestros internos
          </p>
          
          <p className="text-xs text-primary-foreground/50">
            © 2025 Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
