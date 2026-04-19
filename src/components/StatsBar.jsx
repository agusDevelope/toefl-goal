import { motion } from 'framer-motion';
import { Clock, BookOpen, Award, Users } from 'lucide-react';

const stats = [
{ icon: Clock, label: 'Formato', value: 'Presencial / En Línea' },
{ icon: BookOpen, label: 'Duración', value: 'Mínimo 20 horas' },
{ icon: Award, label: 'Certificación', value: 'TOEFL ITP Oficial' },
{ icon: Users, label: 'Experiencia', value: '27 Años' }];


export default function StatsBar() {
  return (
    <section className="relative z-10 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) =>
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center">
            
              <stat.icon className="h-6 w-6 mx-auto mb-3 text-accent" />
              <p className="font-heading font-700 text-lg mb-1">{stat.value}</p>
              <p className="font-body text-xs tracking-widest uppercase text-primary-foreground/60">{stat.label}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}