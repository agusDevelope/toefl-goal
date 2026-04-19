import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/69d9477f7158f9d279692b12/874558a20_generated_2096f904.png"
          alt="Professional in modern workspace"
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}>
            
            <p className="font-body text-sm tracking-widest uppercase text-accent mb-4">
              Centro Autorizado TOEFL ITP
            </p>
            <h1 className="font-heading font-900 text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight text-foreground mb-6">
              ENGLISH<br />
              <span className="text-accent">GOAL</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mb-10">27 años de experiencia preparando profesionales para el examen TOEFL ITP. Capacitación intensiva, certificación oficial y resultados garantizados.


            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-body text-sm tracking-widest uppercase h-14 px-8 rounded-full">
                
                <a href="https://wa.me/5518000243?text=Hola%2C%20quiero%20obtener%20más%20información%20sobre%20la%20certificación%20del%20TOEFL%20ITP" target="_blank" rel="noopener noreferrer">
                  Empieza Tu Certificación
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-body text-sm tracking-widest uppercase h-14 px-8 rounded-full border-foreground/20">
                
                <a href="#cursos">
                  Ver Cursos
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}