import { CONTACT, waLink } from '../data/site.js';

function ChatIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M4 19.5l1.3-3.9A8 8 0 1 1 8.4 18.7L4 19.5z" strokeLinejoin="round" />
      <path d="M9 10.5h6M9 13.5h4" strokeLinecap="round" />
    </svg>
  );
}

const GREETING = 'Hola, me gustaría conocer más sobre su café.';

export default function Contact() {
  return (
    <section id="contacto" className="brochure-page scroll-mt-16 bg-grano text-crema" aria-labelledby="contact-title">
      <div className="mx-auto max-w-7xl px-5 py-24 text-center sm:px-8 lg:py-32">
        <h2 id="contact-title" className="mx-auto max-w-3xl font-display text-[2.8rem] font-medium leading-[1.02] sm:text-7xl">
          Conversemos de café.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-arena/80">
          Escríbenos y te contamos más sobre nuestras variedades.
        </p>
        <a
          href={waLink(GREETING)}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-block font-display text-4xl text-crema underline decoration-arena/40 decoration-1 underline-offset-8 transition hover:decoration-arena sm:text-5xl"
        >
          {CONTACT.phone}
        </a>
        <div className="mt-10 print:hidden">
          <a href={waLink(GREETING)} target="_blank" rel="noreferrer" className="btn-primary">
            <ChatIcon size={18} />
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export function WhatsAppFab() {
  return (
    <a
      href={waLink(GREETING)}
      target="_blank"
      rel="noreferrer"
      aria-label={`Escribir por WhatsApp al ${CONTACT.phone}`}
      data-wa="boton_flotante"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-medium text-[#0B3B22] shadow-[0_12px_30px_-10px_rgba(0,0,0,0.45)] transition hover:brightness-105 focus-visible:outline-offset-4 print:hidden"
      style={{ marginBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <ChatIcon />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
