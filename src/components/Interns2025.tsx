import { motion } from "framer-motion";
import { GraduationCap, Users } from "lucide-react";

const interns = [
  "Ana Victoria Zegarra Ramos",
  "Angello Castillo Quincho",
  "Rodrigo Delgado Basurco",
  "Emanuel Alessandro Arias Ulfe",
  "Jhonny Alberto Orellana Gallegos",
  "Jose Jonathan Rondon Gonzales",
  "Katherine Lucía Perez Fuentes",
  "Mateo Joaquín Rodríguez Bambarén",
  "Milagros Nicole Peralta Gonzales",
  "Milca Paloma Portugal Limache",
  "Milton Sigur Knutzen Vargas",
  "Gabriel Aaron Yepez Cortez",
  "Christopher Giancarlo Rey Sánchez Bardales",
  "Lucero Castillo Poma",
];

const Interns2025 = () => {
  return (
    <section
      id="internos-2025"
      className="py-10 sm:py-16 md:py-24 bg-background relative"
    >
      <div className="container px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-xs sm:text-sm font-semibold mb-3">
            <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4" />
            Promoción 2025
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-3">
            Internos 2025
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto font-body">
            Felicitaciones a nuestra generación de internos que culminan su etapa en Clínica Detecta
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {interns.map((name, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative rounded-xl p-4 bg-card border border-border/50 hover:border-secondary/50 transition-all duration-300 hover:shadow-soft"
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <span className="text-secondary font-display font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <p className="font-body text-sm sm:text-base text-foreground font-medium leading-tight">
                    {name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 rounded-xl p-5 sm:p-6 bg-secondary/10 border border-secondary/30 text-center"
          >
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-secondary mx-auto mb-2" />
            <p className="text-foreground font-display font-semibold text-lg">
              14 Internos
            </p>
            <p className="text-muted-foreground text-xs sm:text-sm">
              ¡Éxitos en su carrera profesional!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Interns2025;
