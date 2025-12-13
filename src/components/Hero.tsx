import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";
import logoDetecta from "@/assets/logo-detecta.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col bg-foreground overflow-hidden">
      {/* Background image area */}
      <div className="relative flex-1 min-h-[50vh] md:min-h-[55vh] flex items-end">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-foreground/40 to-foreground" />
        
        {/* Decorative medical pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container relative z-10 px-6 pb-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <img 
              src={logoDetecta} 
              alt="Clínica Detecta" 
              className="h-20 md:h-24 w-auto"
            />
          </motion.div>

          {/* Main title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight">
              Ceremonia de
              <br />
              <span className="font-bold text-secondary">Despedida de Internado</span>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Bottom card section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="relative z-10 bg-secondary rounded-t-[2.5rem] px-6 py-8 md:py-10"
      >
        <div className="container">
          {/* Tabs */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-foreground/10 rounded-full">
              <div className="w-1 h-4 bg-foreground rounded-full" />
              <span className="text-foreground font-medium text-sm">Invitación personal</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary-foreground/10 rounded-full">
              <span className="text-foreground/70 text-sm">+ Invitado</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-foreground/80 text-lg mb-6 font-body">
            Bienvenida oficial y despedida de los internos de medicina
          </p>

          {/* Date pills */}
          <div className="flex flex-wrap gap-3 mb-8">
            <div className="flex items-center gap-2 px-5 py-3 bg-secondary-foreground/10 rounded-full border border-foreground/20">
              <Calendar className="w-4 h-4 text-foreground/70" />
              <span className="text-foreground font-semibold">16 De Dic.</span>
            </div>
            <div className="flex items-center justify-center px-5 py-3 bg-secondary-foreground/10 rounded-full border border-foreground/20">
              <span className="text-foreground font-semibold">2025</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-3 bg-secondary-foreground/10 rounded-full border border-foreground/20">
              <Clock className="w-4 h-4 text-foreground/70" />
              <span className="text-foreground font-semibold">9:00 a.m.</span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3 text-foreground/80">
            <MapPin className="w-5 h-5" />
            <span className="font-medium">Clínica Detecta</span>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex justify-center mt-8"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-8 h-12 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2"
            >
              <div className="w-1.5 h-3 rounded-full bg-foreground/50" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
