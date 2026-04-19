import { motion } from 'framer-motion';
import { Shield, GraduationCap, Globe, Building } from 'lucide-react';

const highlights = [
{ icon: Shield, title: 'Centro Autorizado', desc: 'Autorizado por ETS para aplicar el examen TOEFL ITP.' },
{ icon: GraduationCap, title: '27 Años de Servicio', desc: 'Experiencia especializada en preparación TOEFL ITP.' },
{ icon: Globe, title: 'Alcance Nacional', desc: 'Área metropolitana e interior de la República Mexicana.' },
{ icon: Building, title: 'Alianzas Institucionales', desc: 'Colaboración con universidades públicas, privadas y CONACYT.' }];


export default function SobreNosotros() {
  return (
    <section id="sobre-nosotros" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden">
            
            <img
              src="https://media.base44.com/images/public/69d9477f7158f9d279692b12/92f981e11_generated_7362f72f.png"
              alt="Equipo de English Goals"
              className="w-full h-80 md:h-[28rem] object-cover" />
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}>
            
            <p className="font-body text-sm tracking-widest uppercase text-accent mb-3">Quiénes Somos</p>
            <h2 className="font-heading font-800 text-4xl md:text-5xl text-foreground mb-6">
              Sobre Nosotros
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-4">English Goal, S.C. cuenta con 27 años de servicio especializado en la preparación para el examen TOEFL ITP. Trabajamos en colaboración con universidades públicas, privadas y en apoyo directo a CONACYT.

            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              El Instituto únicamente aplica los exámenes y estos se envían a calificar al ETS (Educational Testing Service) quien emite las boletas oficiales correspondientes, siguiendo los lineamientos establecidos.
            </p>

            <div className="grid grid-cols-2 gap-5">
              {highlights.map((h, i) =>
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-4 rounded-xl bg-secondary/50 border border-border/50">
                
                  <h.icon className="h-5 w-5 text-accent mb-2" />
                  <h4 className="font-heading font-700 text-sm text-foreground mb-1">{h.title}</h4>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">{h.desc}</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}