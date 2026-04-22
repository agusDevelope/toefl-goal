import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function InscripcionModal({ open, onClose }) {
  const [form, setForm] = useState({
    nombre: '',
    apellidos: '',
    fechaNacimiento: '',
    email: '',
    celular: '',
  });

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mensaje = encodeURIComponent(
      `Hola, quiero inscribirme al curso TOEFL ITP.
Nombre: ${form.nombre}
Apellidos: ${form.apellidos}
Fecha de nacimiento: ${form.fechaNacimiento}
Email: ${form.email}
Celular: ${form.celular}`
    );

    window.open(`https://wa.me/5518000243?text=${mensaje}`, '_blank');

    if (onClose) onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-background rounded-2xl shadow-2xl w-full max-w-md mx-4 p-8">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="font-heading font-800 text-2xl text-foreground mb-6">
          Formulario de Inscripción
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Nombre */}
          <div>
            <label className="font-body text-sm text-muted-foreground mb-1 block">
              Nombre
            </label>
            <input
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              className="w-full border border-border rounded-lg px-4 py-2.5 font-body text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-accent/50"
              placeholder="Tu nombre"
            />
          </div>

          {/* Apellidos */}
          <div>
            <label className="font-body text-sm text-muted-foreground mb-1 block">
              Apellidos
            </label>
            <input
              name="apellidos"
              value={form.apellidos}
              onChange={handleChange}
              required
              className="w-full border border-border rounded-lg px-4 py-2.5 font-body text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-accent/50"
              placeholder="Tus apellidos"
            />
          </div>

          {/* Fecha */}
          <div>
            <label className="font-body text-sm text-muted-foreground mb-1 block">
              Fecha de nacimiento
            </label>
            <input
              type="date"
              name="fechaNacimiento"
              value={form.fechaNacimiento}
              onChange={handleChange}
              required
              className="w-full border border-border rounded-lg px-4 py-2.5 font-body text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-accent/50"
            />
          </div>

          {/* Email */}
          <div>
            <label className="font-body text-sm text-muted-foreground mb-1 block">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-border rounded-lg px-4 py-2.5 font-body text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-accent/50"
              placeholder="tucorreo@ejemplo.com"
            />
          </div>

          {/* Celular */}
          <div>
            <label className="font-body text-sm text-muted-foreground mb-1 block">
              Celular
            </label>
            <input
              type="tel"
              name="celular"
              value={form.celular}
              onChange={handleChange}
              required
              className="w-full border border-border rounded-lg px-4 py-2.5 font-body text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-accent/50"
              placeholder="55 1234 5678"
            />
          </div>

          {/* Submit */}
          <Button
            type="submit"
            size="lg"
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-body text-sm tracking-widest uppercase h-12 rounded-full mt-2"
          >
            Enviar por WhatsApp
          </Button>

        </form>
      </div>
    </div>
  );
}