import { motion } from 'framer-motion';
import { CheckCircle, Headphones, PenLine, BookOpenText } from 'lucide-react';

const examAreas = [
  { icon: Headphones, area: 'Comprensión Auditiva', questions: '50 preguntas', time: '35 min' },
  { icon: PenLine, area: 'Estructura y Expresión Escrita', questions: '40 preguntas', time: '25 min' },
  { icon: BookOpenText, area: 'Lectura', questions: '50 preguntas', time: '55 min' },
];

const features = [
  'Curso intensivo de preparación (presencial o en línea)',
  'Sesiones mínimas de 5 horas',
  'Aplicación del examen al término del programa',
  'Resultados en aproximadamente 5 días',
  'Segundo intento sin costo adicional',
  'Material de estudio incluido',
];

export default function CapacitacionSection() {
  return (
    <section id="capacitacion" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-widest uppercase text-accent mb-3">Preparación Profesional</p>
          <h2 className="font-heading font-800 text-4xl md:text-5xl text-foreground mb-4">Capacitación TOEFL ITP</h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            El examen TOEFL ITP evalúa tus habilidades en inglés como segundo idioma en tres áreas específicas.
            Escala de puntuación: <span className="font-semibold text-foreground">310–677 puntos</span>.
          </p>
        </motion.div>

        {/* Exam Areas */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {examAreas.map((item, i) => (
            <motion.div
              key={item.area}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-secondary/50 border border-border/50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                <item.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-700 text-lg text-foreground mb-2">{item.area}</h3>
              <p className="font-body text-muted-foreground">
                {item.questions} · {item.time}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading font-700 text-2xl md:text-3xl text-foreground mb-6">
              ¿Qué incluye nuestro programa?
            </h3>
            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="font-body text-muted-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden"
          >
            <img
              src="https://media.base44.com/images/public/69d9477f7158f9d279692b12/bdd9c4afa_generated_4d0c1847.png"
              alt="Certificación oficial TOEFL"
              className="w-full h-80 md:h-96 object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}