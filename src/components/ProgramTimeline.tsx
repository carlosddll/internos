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
  CalendarDays,
  LucideIcon
} from "lucide-react";

interface ProgramItem {
  icon: LucideIcon;
  title: string;
  speaker: string;
  description: string;
  highlight: boolean;
  time: string;
}

const programItems: ProgramItem[] = [
  {
    icon: Users,
    title: "Bienvenida Nuevos Internos 2026",
    speaker: "Dr. Ladd",
    description: "Presentación y bienvenida a la nueva generación de internos",
    highlight: false,
    time: "9:00",
  },
  {
    icon: Stethoscope,
    title: "Recepción de Bata y Fotocheck",
    speaker: "",
    description: "Ceremonia de entrega oficial de bata y credenciales",
    highlight: true,
    time: "9:15",
  },
  {
    icon: PartyPopper,
    title: "Despedida Internos 2025",
    speaker: "Dr. Sam",
    description: "Palabras de despedida para los internos salientes",
    highlight: false,
    time: "9:30",
  },
  {
    icon: Video,
    title: "Video Despedida",
    speaker: "Internos 2025",
    description: "Un homenaje especial preparado por los internos",
    highlight: true,
    time: "9:45",
  },
  {
    icon: Award,
    title: "Premiación Especial",
    speaker: "Dr. Ladd",
    description: "Reconocimiento a José Jonah Rondón González",
    highlight: true,
    time: "10:00",
  },
  {
    icon: MessageCircle,
    title: "Testimonios",
    speaker: "Valeria, Rodrigo, Samir y Laura",
    description: "Experiencias y vivencias compartidas",
    highlight: false,
    time: "10:15",
  },
  {
    icon: PenTool,
    title: "Premiación y Palabras",
    speaker: "Jonnah",
    description: "Entrega de reconocimiento especial",
    highlight: false,
    time: "10:30",
  },
  {
    icon: Rocket,
    title: "Expansión y Sueño Detecta",
    speaker: "Dr. Mendoza",
    description: "Visión del futuro y línea de tiempo de la clínica",
    highlight: true,
    time: "10:45",
  },
];

const ProgramTimeline = () => {
  return (
    <section id="programa" className="py-10 sm:py-16 md:py-24 bg-foreground">
      <div className="container px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-foreground text-xs sm:text-sm font-semibold mb-3">
            <CalendarDays className="w-3 h-3 sm:w-4 sm:h-4" />
            Agenda del Evento
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-primary-foreground mb-3">
            Programa
          </h2>
          <p className="text-primary-foreground/60 text-sm sm:text-base max-w-2xl mx-auto font-body">
            Un recorrido por los momentos más importantes de nuestra ceremonia
          </p>
        </motion.div>

        <div className="max-w-lg sm:max-w-2xl md:max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {programItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className={`relative rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 transition-all duration-300 ${
                  item.highlight 
                    ? 'bg-secondary' 
                    : 'bg-primary-foreground/5 hover:bg-primary-foreground/10'
                }`}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  {/* Time */}
                  <div className={`flex-shrink-0 w-12 sm:w-14 text-center ${
                    item.highlight ? 'text-foreground' : 'text-secondary'
                  }`}>
                    <span className="font-display text-sm sm:text-base font-bold">{item.time}</span>
                    <span className="block text-[10px] sm:text-xs opacity-60">a.m.</span>
                  </div>

                  {/* Icon */}
                  <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center ${
                    item.highlight 
                      ? 'bg-foreground/10' 
                      : 'bg-secondary/20'
                  }`}>
                    <IconComponent className={`w-4 h-4 sm:w-5 sm:h-5 ${
                      item.highlight ? 'text-foreground' : 'text-secondary'
                    }`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col gap-1.5 mb-1">
                      <h3 className={`font-display text-base sm:text-lg font-semibold leading-tight ${
                        item.highlight ? 'text-foreground' : 'text-primary-foreground'
                      }`}>
                        {item.title}
                      </h3>
                      {item.speaker && (
                        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full w-fit ${
                          item.highlight 
                            ? 'bg-foreground/10 text-foreground/80' 
                            : 'bg-secondary/20 text-secondary'
                        }`}>
                          {item.speaker}
                        </span>
                      )}
                    </div>
                    <p className={`text-xs sm:text-sm leading-relaxed ${
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
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-xl sm:rounded-2xl p-5 sm:p-6 bg-gradient-to-r from-secondary via-secondary to-gold text-center"
          >
            <PartyPopper className="w-6 h-6 sm:w-8 sm:h-8 text-foreground mx-auto mb-2" />
            <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">
              ¡Fin del Evento!
            </h3>
            <p className="text-foreground/70 text-xs sm:text-sm">
              Celebremos juntos este momento especial
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProgramTimeline;
