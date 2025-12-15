import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";
import logoDetecta from "@/assets/logo-detecta.png";
const Hero = () => {
  return <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background image area */}
      <div className="relative flex-1 min-h-[45vh] flex items-end">

        {/* Logo centered at top */}
        <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="absolute top-6 left-0 right-0 flex justify-center z-20">
          <img src={logoDetecta} alt="Clínica Detecta" className="h-16 sm:h-20 md:h-24 w-auto brightness-0 invert" />
        </motion.div>

        <div className="container relative z-10 px-5 pb-6">

          {/* Main title */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2,
          duration: 0.6
        }}>
            <h1 className="sm:text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight font-normal text-2xl font-display">
              Ceremonia de
              <br />
              <span className="font-bold text-secondary font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl">Graduación de Internado</span>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Bottom card section */}
      <motion.div initial={{
      opacity: 0,
      y: 40
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.4,
      duration: 0.6
    }} className="relative z-10 bg-secondary rounded-t-[2rem] px-5 py-6 sm:px-6 sm:py-8">
        <div className="container max-w-lg mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black">
              <div className="w-0.5 h-3 rounded-full bg-white" />
              <span className="font-medium text-xs sm:text-sm text-white">Invitación personal</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/55">
              <span className="text-xs sm:text-sm text-white">+ 1 Invitado</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-foreground/80 text-base sm:text-lg mb-5 font-body leading-relaxed">
            Bienvenida oficial y despedida de los internos de medicina
          </p>

          {/* Date pills */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-secondary-foreground/10 rounded-full border border-foreground/20">
              <Calendar className="w-4 h-4 text-foreground/70" />
              <span className="text-foreground font-semibold text-sm">Sábado 20 De Dic.</span>
            </div>
            
            <div className="flex items-center gap-2 px-4 py-2.5 bg-secondary-foreground/10 rounded-full border border-foreground/20">
              <Clock className="w-4 h-4 text-foreground/70" />
              <span className="text-foreground font-semibold text-sm">8:00 a.m. - 11:00 a.m.</span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-3 text-foreground/80 mb-6">
            <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-medium text-sm sm:text-base block">Hotel Hilton Garden Inn

 </span>
              <span className="text-sm text-foreground/60">Calle Monte Rosa 287 Urb. Chacarilla del estanque - Surco </span>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 1,
          duration: 0.6
        }} className="flex justify-center">
            <motion.div animate={{
            y: [0, 6, 0]
          }} transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut"
          }} className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-1.5">
              <div className="w-1 h-2 rounded-full bg-foreground/50" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>;
};
export default Hero;