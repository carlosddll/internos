import { motion } from "framer-motion";
import { 
  Users, 
  Award, 
  Video, 
  MessageCircle, 
  PenTool, 
  Rocket, 
  PartyPopper,
  Stethoscope
} from "lucide-react";

const programItems = [
  {
    icon: Users,
    title: "Bienvenida Nuevos Internos 2026",
    speaker: "Dr. Ladd",
    description: "Presentación y bienvenida a la nueva generación de internos",
    highlight: false,
  },
  {
    icon: Stethoscope,
    title: "Recepción de Bata y Fotocheck",
    speaker: "",
    description: "Ceremonia de entrega oficial de bata y credenciales",
    highlight: true,
  },
  {
    icon: PartyPopper,
    title: "Despedida Internos 2025",
    speaker: "Dr. Sam",
    description: "Palabras de despedida para los internos salientes",
    highlight: false,
  },
  {
    icon: Video,
    title: "Video Despedida",
    speaker: "Internos 2025",
    description: "Un homenaje especial preparado por los internos",
    highlight: true,
  },
  {
    icon: Award,
    title: "Premiación Especial",
    speaker: "Dr. Ladd",
    description: "Reconocimiento a José Jonah Rondón González",
    highlight: true,
  },
  {
    icon: MessageCircle,
    title: "Testimonios",
    speaker: "Valeria, Rodrigo, Samir y Laura",
    description: "Experiencias y vivencias compartidas",
    highlight: false,
  },
  {
    icon: PenTool,
    title: "Premiación y Palabras",
    speaker: "Jonnah",
    description: "Entrega de reconocimiento especial",
    highlight: false,
  },
  {
    icon: Rocket,
    title: "Expansión y Sueño Detecta",
    speaker: "Dr. Mendoza",
    description: "Visión del futuro y línea de tiempo de la clínica",
    highlight: true,
  },
];

const ProgramTimeline = () => {
  return (
    <section id="programa" className="py-24 bg-cream">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Agenda del Evento
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Programa
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un recorrido por los momentos más importantes de nuestra ceremonia
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {programItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline line */}
              {index < programItems.length - 1 && (
                <div className="absolute left-6 md:left-8 top-16 w-0.5 h-full bg-border" />
              )}

              <div className={`flex gap-4 md:gap-6 mb-6 ${item.highlight ? '' : ''}`}>
                {/* Icon */}
                <div className={`relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shadow-soft ${
                  item.highlight 
                    ? 'bg-gradient-gold text-primary-foreground' 
                    : 'bg-card text-primary'
                }`}>
                  <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>

                {/* Content */}
                <div className={`flex-1 p-5 md:p-6 rounded-2xl transition-all duration-300 ${
                  item.highlight 
                    ? 'bg-card shadow-elevated border border-secondary/20' 
                    : 'bg-card/50 hover:bg-card hover:shadow-soft'
                }`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h3 className="font-display text-lg md:text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    {item.speaker && (
                      <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                        item.highlight 
                          ? 'bg-secondary/20 text-secondary' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {item.speaker}
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Final marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-center gap-4 md:gap-6"
          >
            <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-soft">
              <PartyPopper className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
            </div>
            <div className="flex-1 p-5 md:p-6 rounded-2xl bg-primary text-primary-foreground">
              <h3 className="font-display text-lg md:text-xl font-semibold">
                ¡Fin del Evento! 🎉
              </h3>
              <p className="text-primary-foreground/80 text-sm md:text-base">
                Celebremos juntos este momento especial
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProgramTimeline;
