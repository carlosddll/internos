import { Heart } from "lucide-react";
import logoDetecta from "@/assets/logo-detecta.png";

const Footer = () => {
  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={logoDetecta} alt="Clínica Detecta" className="h-12 w-auto brightness-0 invert" />
          </div>
          
          <p className="flex items-center gap-2 text-sm text-primary-foreground/80">
            Hecho con <Heart className="w-4 h-4 text-secondary fill-secondary" /> para nuestros internos
          </p>
          
          <p className="text-sm text-primary-foreground/60">
            © 2025 Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
