import React, { useState } from 'react';
import {
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  Send,
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck,
  Lock
} from 'lucide-react';
import { Github, Linkedin } from '../ui/icons';
import { Button } from '../ui/Button';
import {
  launchSecureMail,
  copySecureEmailToClipboard
} from '../../utils/security';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const emailDisplay = 'mayka708.ms@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/manuel-eduardo-santiago-feria-a04b5a332/';
  const githubUrl = 'https://github.com/Nano-DevCode';

  const handleCopyEmail = async (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const success = await copySecureEmailToClipboard();
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSendMail = (e: React.MouseEvent) => {
    e.preventDefault();
    launchSecureMail('Contacto Profesional - Portafolio de Software Engineer');
  };

  return (
    <section
      id="contacto"
      className="py-24 relative overflow-hidden transition-colors border-t border-zinc-200 dark:border-zinc-800/80 bg-gradient-to-b from-zinc-50/50 via-white to-zinc-50/80 dark:from-zinc-950 dark:via-zinc-900/30 dark:to-zinc-950"
    >
      {/* Trampa Señuelo Honeypot: Atrapa bots de spam automáticos que raspen 'mailto:' */}
      <a
        href="mailto:honeypot-reject-bots@null.invalid"
        tabIndex={-1}
        aria-hidden="true"
        rel="nofollow"
        className="sr-only select-none pointer-events-none opacity-0 absolute -z-50"
      >
        spamtrap-no-click@security.local
      </a>

      {/* Luces atmosféricas de fondo (Acentos Cyan & Indigo de alto contraste) */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-to-r from-cyan-500/15 to-blue-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 translate-x-1/2 w-[450px] h-[300px] bg-gradient-to-l from-indigo-500/15 to-violet-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Contenedor Principal Glassmorphic */}
        <div className="bg-white/95 dark:bg-zinc-900/85 border border-zinc-200/90 dark:border-zinc-800 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-xl shadow-cyan-500/5 dark:shadow-2xl dark:shadow-black/50 backdrop-blur-xl relative overflow-hidden transition-all">
          {/* Línea superior neón con gradiente */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-90 dark:opacity-100" />

          {/* Encabezado y Estado de Disponibilidad */}
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge de Disponibilidad Activa */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25 text-xs font-semibold mb-5 shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>Disponible para Nuevas Oportunidades & Proyectos</span>
            </div>

            {/* Título Principal */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-[1.15]">
              ¿Construimos el{' '}
              <span className="bg-gradient-to-r from-cyan-600 via-teal-500 to-blue-600 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-400 bg-clip-text text-transparent">
                siguiente gran proyecto
              </span>
              ?
            </h2>

            {/* Descripción */}
            <p className="mt-4 text-zinc-600 dark:text-zinc-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Abierto a discutir arquitectura frontend/mobile (<strong className="text-zinc-900 dark:text-white font-medium">React, React Native, Vue, Angular</strong>), 
              servicios backend (<strong className="text-zinc-900 dark:text-white font-medium">NestJS, Laravel</strong>), 
              despliegues cloud en <strong className="text-zinc-900 dark:text-white font-medium">GCP</strong> o redes corporativas seguras.
            </p>
          </div>

          {/* Grid de Canales Directos e Interactivos */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {/* Tarjeta 1: LinkedIn Profesional */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between p-6 rounded-2xl bg-zinc-50/80 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/40 hover:bg-blue-500/5 dark:hover:bg-blue-500/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  LinkedIn
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  Manuel Eduardo Santiago Feria
                </p>
              </div>
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-5 inline-flex items-center gap-1">
                Conectar perfil profesional →
              </span>
            </a>

            {/* Tarjeta 2: GitHub & Código */}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between p-6 rounded-2xl bg-zinc-50/80 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-800 hover:border-cyan-500/40 hover:bg-cyan-500/5 dark:hover:bg-cyan-500/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-cyan-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  GitHub
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  @Nano-DevCode
                </p>
              </div>
              <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mt-5 inline-flex items-center gap-1">
                Ver repositorios & proyectos →
              </span>
            </a>

            {/* Tarjeta 3: Correo Electrónico Seguro */}
            <div className="group flex flex-col justify-between p-6 rounded-2xl bg-zinc-50/80 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/40 hover:bg-emerald-500/5 dark:hover:bg-emerald-500/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/5">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-500/10 transition-colors cursor-pointer"
                    title="Copiar correo al portapapeles"
                    aria-label="Copiar correo al portapapeles"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Correo Electrónico
                  </h3>
                  <span title="Protegido con ofuscación anti-bot" className="inline-flex text-emerald-600 dark:text-emerald-400">
                    <Lock className="w-3 h-3" />
                  </span>
                </div>
                
                {/* Visualización protegida para dificultar extracción por crawlers */}
                <p className="text-xs font-mono text-zinc-600 dark:text-zinc-400 mt-1 truncate" title={emailDisplay}>
                  <span>mayka708.ms</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold select-none mx-0.5">@</span>
                  <span>gmail.com</span>
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={handleSendMail}
                  className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1 cursor-pointer bg-transparent border-none p-0"
                >
                  Enviar mensaje →
                </button>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-[11px] font-medium px-2 py-1 rounded bg-zinc-200/70 dark:bg-zinc-700/60 text-zinc-700 dark:text-zinc-300 hover:bg-emerald-500/15 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  {copied ? '¡Copiado!' : 'Copiar'}
                </button>
              </div>
            </div>
          </div>

          {/* Botones de Acción Primaria */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              onClick={handleSendMail}
              variant="primary"
              size="lg"
              icon={<Send className="w-4 h-4" />}
            >
              Enviar Mensaje Directo
            </Button>
            <Button
              asAnchor
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
              icon={<Linkedin className="w-4 h-4 text-blue-500" />}
            >
              Conectar en LinkedIn
            </Button>
            <Button
              asAnchor
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
              icon={<Github className="w-4 h-4" />}
            >
              Explorar GitHub
            </Button>
          </div>

          {/* Barra de Metadatos & Certificación de Seguridad */}
          <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs text-zinc-600 dark:text-zinc-400">
            <div className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>México (CST / UTC-6) • Trabajo Remoto o Presencial</span>
            </div>

            <div className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Respuesta garantizada en menos de 24 horas</span>
            </div>

            <div className="inline-flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Protección activa contra scrapers y bots</span>
            </div>

            <div className="inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <span>Clean Code, SOLID & Cloud Native</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
