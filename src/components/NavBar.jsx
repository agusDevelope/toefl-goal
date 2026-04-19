import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
{ label: 'Capacitación', href: '#capacitacion' },
{ label: 'Cursos', href: '#cursos' },
{ label: 'Sobre Nosotros', href: '#sobre-nosotros' }];


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img
            src="/src/assets/LogoEG.png"
            alt="English Goals Logo"
            className="h-10 w-10 object-contain" />

          <span className="font-heading font-800 text-lg tracking-wide text-foreground">ENGLISH GOAL

          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) =>
          <a
            key={link.href}
            href={link.href}
            className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors relative group">

              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
            </a>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground">

          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open &&
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border">

            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) =>
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">

                  {link.label}
                </a>
            )}
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </nav>);

}
