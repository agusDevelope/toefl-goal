import { motion } from 'framer-motion';
import { ArrowRight, Clock, BookOpen, FileText, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';

const courseDetails = [
{ icon: Clock, label: 'Duración mínima', value: '20 horas' },
{ icon: BookOpen, label: 'Sesiones mínimas', value: '5 horas por sesión' },
{ icon: FileText, label: 'Modalidad', value: 'Presencial o en línea' },
{ icon: CreditCard, label: 'Inversión', value: '$4,800.00 MXN p/persona' }];


const requirements = [
'2 copias de identificación oficial (credencial de elector o pasaporte)',
'1 copia de comprobante de domicilio',
'1 fotografía tamaño infantil reciente',
'Cubrir el pago correspondiente'];


export default function CursosSection() {
  return (
    <section id="cursos" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          
          <p className="font-body text-sm tracking-widest uppercase text-accent mb-3">Programa Intensivo</p>
          <h2 className="font-heading font-800 text-4xl md:text-5xl text-foreground mb-4">Curso TOEFL ITP</h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Incluye curso, material y aplicación del examen oficial. Nuestro compromiso es que alcances tu puntaje requerido.
          </p>
        </motion.div>

        {/* Course Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-background border border-border rounded-3xl overflow-hidden max-w-4xl mx-auto shadow-sm">
          
          {/* Header */}
          <div className="bg-primary text-primary-foreground px-8 py-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="font-heading font-800 text-2xl">Preparación TOEFL ITP</h3>
                <p className="font-body text-primary-foreground/70 text-sm mt-1">Nivel Intermedio – Avanzado</p>
              </div>
              <div className="text-right">
                <p className="font-heading font-800 text-3xl text-accent"></p>
                <p className="font-body text-primary-foreground/60 text-xs"></p>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {courseDetails.map((d) =>
              <div key={d.label} className="text-center">
                  <d.icon className="h-5 w-5 mx-auto mb-2 text-accent" />
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-wide mb-1">{d.label}</p>
                  <p className="font-heading font-600 text-sm text-foreground">{d.value}</p>
                </div>
              )}
            </div>

            <div className="border-t border-border pt-8">
              <h4 className="font-heading font-700 text-lg text-foreground mb-4">Requisitos</h4>
              <ul className="space-y-3 mb-8">
                {requirements.map((req) =>
                <li key={req} className="flex items-start gap-3 font-body text-muted-foreground text-sm">
                    <span className="h-1.5 w-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                    {req}
                  </li>
                )}
              </ul>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-8">
                <p className="font-body text-sm text-foreground leading-relaxed">
                  <span className="font-semibold">Nota importante:</span> Si necesitas más horas de clase o un segundo intento de examen, se otorga sin costo adicional (siempre que no exista una diferencia mayor a 50 puntos entre tu puntaje inicial y tu objetivo).
                </p>
              </div>

              <div className="text-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-body text-sm tracking-widest uppercase h-14 px-10 rounded-full">
                  
                  <a href="https://wa.me/5518000243?text=Hola%2C%20deseo%20inscribirme%20al%20curso%20TOEFL%20ITP" target="_blank" rel="noopener noreferrer">
                    Inscríbete Ahora
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}