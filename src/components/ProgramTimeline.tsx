import { motion } from "framer-motion";
import { 
  Users, 
  Award, 
  Video, 
  MessageCircle, 
  PenTool, 
  Rocket, 
  PartyPopper,
  Stethoscope,
  LucideIcon
} from "lucide-react";

interface ProgramItem {
  icon: LucideIcon;
  title: string;
  speaker: string;
  description: string;
  highlight: boolean;
}

const programItems: ProgramItem[] = [
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
    <section id="programa" className="py-16 md:py-24 bg-foreground">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-secondary text-foreground text-sm font-semibold mb-4">
            Agenda del Evento
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Programa
          </h2>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto font-body">
            Un recorrido por los momentos más importantes de nuestra ceremonia
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {programItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`relative rounded-2xl p-5 md:p-6 transition-all duration-300 ${
                  item.highlight 
                    ? 'bg-secondary' 
                    : 'bg-primary-foreground/5 hover:bg-primary-foreground/10'
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                    item.highlight 
                      ? 'bg-foreground/10' 
                      : 'bg-secondary/20'
                  }`}>
                    <IconComponent className={`w-5 h-5 ${
                      item.highlight ? 'text-foreground' : 'text-secondary'
                    }`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-1">
                      <h3 className={`font-display text-lg font-semibold ${
                        item.highlight ? 'text-foreground' : 'text-primary-foreground'
                      }`}>
                        {item.title}
                      </h3>
                      {item.speaker && (
                        <span className={`text-sm font-medium px-3 py-1 rounded-full w-fit ${
                          item.highlight 
                            ? 'bg-foreground/10 text-foreground/80' 
                            : 'bg-secondary/20 text-secondary'
                        }`}>
                          {item.speaker}
                        </span>
                      )}
                    </div>
                    <p className={`text-sm ${
                      item.highlight ? 'text-foreground/70' : 'text-primary-foreground/50'
                    }`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Final marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="rounded-2xl p-6 bg-gradient-to-r from-secondary via-secondary to-gold text-center"
          >
            <PartyPopper className="w-8 h-8 text-foreground mx-auto mb-2" />
            <h3 className="font-display text-xl font-bold text-foreground">
              ¡Fin del Evento!
            </h3>
            <p className="text-foreground/70 text-sm">
              Celebremos juntos este momento especial
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProgramTimeline;
