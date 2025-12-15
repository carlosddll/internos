import { motion } from "framer-motion";
import { GraduationCap, Users } from "lucide-react";

const interns = [
  "Minerva Diana Verde Vásquez",
  "Alvaro Yamir Bazán Hernández",
  "Maria Lourdes Gutierrez Falconi",
  "Judith Rosario Arenas Vásquez",
  "Marlon Erick Ruiz Gonzalez Calderon",
  "Estrella Anaís Osorio Herrera",
  "Camila Xiomara Ñiquen Pareja",
  "Lucy Maribel Nicoll Centurion",
  "Genny Isabel Geldres Pinto",
  "Orlando Hernan Ernesto Correa Luna",
  "Lidia Miyoko Okimura Nunes",
  "Valeria Melanie Arias Quintanilla",
  "Gianella Ximena Rosas Villegas",
  "Jose Antonio Rojas",
  "", // Pendiente
];

const Interns2026 = () => {
  return (
    <section
      id="internos-2026"
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
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary text-xs sm:text-sm font-semibold mb-3">
            <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4" />
            Promoción 2026
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-3">
            Internos Ingresantes
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto font-body">
            Bienvenidos a nuestra nueva generación de internos que inician su etapa en Clínica Detecta
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
                className="relative rounded-xl p-4 bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-soft"
              >
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden border-2 border-primary/30">
                    <span className="text-primary font-display font-bold text-xl sm:text-2xl">
                      {name 
                        ? name.split(' ').map(n => n[0]).slice(0, 2).join('')
                        : "?"
                      }
                    </span>
                  </div>
                  <p className="font-body text-sm sm:text-base text-foreground font-medium leading-tight">
                    {name || "Pendiente"}
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
            className="mt-8 rounded-xl p-5 sm:p-6 bg-primary/10 border border-primary/30 text-center"
          >
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2" />
            <p className="text-foreground font-display font-semibold text-lg">
              15 Internos
            </p>
            <p className="text-muted-foreground text-xs sm:text-sm">
              ¡Bienvenidos a la familia Detecta!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Interns2026;
