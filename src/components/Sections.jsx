import { useEffect, useState } from 'react';
import { CLASSICS, FLAVORED, FLAVORED_TAGLINE, CLASSIC_TAGLINE, ATTRIBUTES, BEAN, REASONS } from '../data/catalog.js';
import { CONTACT, waLink } from '../data/site.js';
import { LevelMeter, Bean } from './ui.jsx';
import heroBeans from '../assets/photos/hero-beans.webp';
import roasted from '../assets/photos/roasted.webp';
import hands from '../assets/photos/hands.webp';
import greenBeans from '../assets/photos/green-beans.webp';
import beanA from '../assets/photos/bean-a.webp';
import amatiLogo from '../assets/brand/amati.webp';
import amatiMark from '../assets/brand/amati-mark.webp';
import corporateLogo from '../assets/brand/corporate-coffee.webp';

const NAV = [
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#origen', label: 'Origen' },
  { href: '#cafe', label: 'Nuestro café' },
  { href: '#tu-cafe', label: 'Tu café ideal' },
  { href: '#contacto', label: 'Contacto' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    const onKey = (e) => e.key === 'Escape' && close();
    const onClick = (e) => !e.target.closest('header') && close();
    window.addEventListener('keydown', onKey);
    window.addEventListener('hashchange', close);
    document.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('hashchange', close);
      document.removeEventListener('click', onClick);
    };
  }, [open]);
  const solid = scrolled || open;
  return (
    <header className={`print:hidden fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${solid ? 'bg-crema/95 shadow-[0_1px_0_rgba(43,23,15,0.08)] backdrop-blur' : 'bg-transparent'}`}>
      <a href="#contenido" className="sr-only rounded-full bg-grano px-4 py-2 text-sm text-crema focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60]">
        Saltar al contenido
      </a>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Principal">
        <a href="#inicio" className="flex items-center gap-2.5" aria-label="Café Amati, ir al inicio">
          <img src={amatiMark} alt="" width="27" height="30" className={`h-7 w-auto transition ${solid ? '' : 'invert'}`} />
          <span className={`font-display text-xl font-medium tracking-wide ${solid ? 'text-grano' : 'text-crema'}`}>Amati</span>
        </a>
        <ul className="hidden items-center gap-6 lg:flex">
          {NAV.map((n) => (
            <li key={n.href}>
              <a href={n.href} className={`navlink text-[13px] ${solid ? 'text-grano/80 hover:text-grano' : 'text-crema/85 hover:text-crema'}`}>
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => window.print()}
          className={`hidden rounded-full border px-4 py-2 text-[13px] transition lg:inline-flex ${solid ? 'border-grano/25 text-grano hover:border-grano/60' : 'border-white/30 text-crema hover:border-white/70'}`}
        >
          Descargar PDF
        </button>
        <button
          type="button"
          className={`grid h-10 w-10 place-items-center rounded-full lg:hidden ${solid ? 'text-grano' : 'text-crema'}`}
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            {open ? <path d="M5 5l12 12M17 5L5 17" strokeLinecap="round" /> : <path d="M3 7h16M3 15h16" strokeLinecap="round" />}
          </svg>
        </button>
      </nav>
      <div id="menu-movil" hidden={!open} className="border-t border-grano/10 bg-crema lg:hidden">
        <ul className="px-5 py-3">
          {NAV.map((n) => (
            <li key={n.href}>
              <a href={n.href} onClick={() => setOpen(false)} className="block py-3 font-display text-2xl text-grano">
                {n.label}
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setTimeout(() => window.print(), 50);
              }}
              className="block py-3 font-display text-2xl text-grano"
            >
              Descargar PDF
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="brochure-page relative flex min-h-[92svh] items-end overflow-hidden bg-grano text-crema">
      <img src={heroBeans} alt="" className="hero-img absolute inset-0 h-full w-full object-cover" fetchpriority="high" />
      <div className="absolute inset-0 bg-gradient-to-t from-grano via-grano/55 to-grano/30" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-24">
        <p className="hero-in text-sm text-arena/85" style={{ animationDelay: '0.05s' }}>
          Café Amati y Corporate Coffee · Presentación de marca 2026
        </p>
        <h1 className="hero-in mt-5 max-w-4xl font-display text-[3.2rem] font-medium leading-[0.95] sm:text-7xl lg:text-[6.4rem]" style={{ animationDelay: '0.15s' }}>
          Solo para amantes del verdadero café.
        </h1>
        <p className="hero-in mt-7 max-w-lg text-[15px] leading-relaxed text-arena/85" style={{ animationDelay: '0.3s' }}>
          Importamos café verde, lo tostamos cada semana en nuestra propia casa de tueste y lo llevamos a todo Chile. Trazabilidad al 100%, desde la finca a tu taza.
        </p>
        <div className="hero-in mt-9 flex flex-wrap gap-3 print:hidden" style={{ animationDelay: '0.42s' }}>
          <a href="#cafe" className="btn-light">
            Ver nuestro café
          </a>
          <a href="#tu-cafe" className="btn-ghost-dark">
            Encuentra tu café ideal
          </a>
        </div>
      </div>
    </section>
  );
}

function ClassicCard({ p }) {
  return (
    <article className="group flex flex-col">
      <div className="shelf relative flex h-64 items-end justify-center overflow-hidden rounded-[18px] sm:h-72 print:h-56">
        <span className="absolute inset-x-8 bottom-6 h-3 rounded-full bg-grano/25 blur-md" aria-hidden="true" />
        <img src={p.image} alt={`Bolsa de café Amati ${p.name}`} className="bag-img relative mb-6 h-[78%] w-auto object-contain" />
      </div>
      <h4 className="mt-5 font-display text-[1.7rem] font-medium leading-none text-grano">{p.name}</h4>
      <p className="mt-2 text-[13px] text-grano/65">100% Arábica</p>
      <div className="mt-3 space-y-2">
        {ATTRIBUTES.map((a) => (
          <LevelMeter key={a.key} label={a.label} level={p.attrs[a.key]} levelName={a.levels[p.attrs[a.key] - 1]} />
        ))}
      </div>
    </article>
  );
}

function FlavoredCard({ p }) {
  return (
    <article className="flex flex-col">
      <div className="shelf-soft relative flex h-56 items-end justify-center overflow-hidden rounded-[18px] sm:h-64 print:h-40">
        <span className="absolute inset-x-0 bottom-0 h-1/3 opacity-25" style={{ background: `linear-gradient(to top, ${p.accent}, transparent)` }} aria-hidden="true" />
        <span className="absolute inset-x-8 bottom-5 h-3 rounded-full bg-grano/25 blur-md" aria-hidden="true" />
        <img src={p.image} alt={`Bolsa de café Amati aromatizado ${p.name}`} className="bag-img relative mb-5 h-[78%] w-auto object-contain" />
      </div>
      <h4 className="mt-4 font-display text-[1.6rem] font-medium leading-none text-grano">{p.name}</h4>
      <p className="mt-2 flex items-center gap-2 text-[13px] text-grano/65">
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: p.accent }} aria-hidden="true" />
        Aroma {p.flavor.toLowerCase()} · 100% Arábica
      </p>
    </article>
  );
}

export function Explore() {
  return (
    <section id="cafe" className="brochure-page scroll-mt-16 bg-crema" aria-labelledby="cafes-title">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div>
          <div>
            <h2 id="cafes-title" className="font-display text-[2.6rem] font-medium leading-[1.02] text-grano sm:text-6xl">
              Nuestro café.
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-grano/70">
              Diez variedades 100% Arábica: cinco clásicos con perfiles distintos de intensidad, tueste y acidez, y cinco aromatizados.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-grano/15 pb-5">
            <div>
              <h3 className="font-display text-3xl font-medium text-grano">Clásicos</h3>
              <p className="mt-1 text-sm text-grano/65">{CLASSIC_TAGLINE}</p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 lg:grid-cols-5 print:grid-cols-5 print:gap-x-4">
            {CLASSICS.map((p) => (
              <ClassicCard key={p.id} p={p} />
            ))}
          </div>
        </div>

        <div className="mt-24 print:mt-0 print:break-before-page print:pt-10">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-grano/15 pb-5">
            <div>
              <h3 className="font-display text-3xl font-medium text-grano">Aromatizados</h3>
              <p className="mt-1 text-sm text-grano/65">{FLAVORED_TAGLINE}</p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5 print:grid-cols-5 print:gap-x-4">
            {FLAVORED.map((p) => (
              <FlavoredCard key={p.id} p={p} />
            ))}
          </div>
        </div>

        {/* Guía de perfiles: solo en la versión impresa / PDF */}
        <div className="mt-8 hidden print:block">
          <h3 className="font-display text-3xl font-medium text-grano">Guía de perfiles</h3>
          <table className="mt-4 w-full text-left text-sm">
            <thead>
              <tr className="border-b border-grano/20 text-grano/60">
                <th className="py-1.5 font-normal">Variedad</th>
                {ATTRIBUTES.map((a) => (
                  <th key={a.key} className="py-1.5 font-normal">{a.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CLASSICS.map((p) => (
                <tr key={p.id} className="border-b border-grano/10">
                  <td className="py-1.5 font-display text-lg">{p.name}</td>
                  {ATTRIBUTES.map((a) => (
                    <td key={a.key} className="py-1.5">
                      <span className="inline-flex gap-[2px]">
                        {[1, 2, 3].map((n) => <Bean key={n} filled={n <= p.attrs[a.key]} size={13} className="text-espresso" />)}
                      </span>{' '}
                      <span className="text-grano/60">{a.levels[p.attrs[a.key] - 1]}</span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function Origin() {
  return (
    <section id="origen" className="brochure-page scroll-mt-16 bg-crema" aria-labelledby="origen-title">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <h2 id="origen-title" className="font-display text-[2.6rem] font-medium leading-[1.02] text-grano sm:text-6xl">
          Origen
        </h2>
        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-grano/70">Importamos café verde de diferentes orígenes y lo tostamos cada semana en nuestra propia casa de tueste.</p>
        <div className="mt-12 grid overflow-hidden rounded-[22px] bg-arena md:grid-cols-2 print:grid-cols-2">
          <img src={greenBeans} alt="Café verde antes del tueste" className="h-64 w-full object-cover md:h-full" />
          <div className="relative p-8 sm:p-12">
            <img src={beanA} alt="" aria-hidden="true" className="pointer-events-none absolute -right-8 -top-8 w-28 rotate-12 opacity-90" />
            <h3 className="font-display text-4xl font-medium text-grano">Nuestro grano</h3>
            <p className="mt-2 text-grano/70">
              {BEAN.species} de {BEAN.origin}.
            </p>
            <p className="mt-5 max-w-md font-display text-2xl leading-snug text-grano">{BEAN.profile}</p>
            <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-grano/15 pt-6">
              <div>
                <dt className="text-xs text-grano/60">Puntaje SCA</dt>
                <dd className="font-display text-3xl text-grano">{BEAN.score}</dd>
              </div>
              <div>
                <dt className="text-xs text-grano/60">Altitud</dt>
                <dd className="font-display text-3xl text-grano">{BEAN.altitude}</dd>
              </div>
            </dl>
          </div>
        </div>
        <img src={roasted} alt="Granos de café arábica tostados" className="mt-6 h-56 w-full rounded-[22px] object-cover sm:h-72 print:hidden" />
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section id="nosotros" className="brochure-page scroll-mt-16 bg-arena" aria-labelledby="why-title">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:py-28 print:grid-cols-[0.75fr_1.25fr] print:gap-12">
        <div className="relative">
          <img src={hands} alt="Manos sosteniendo granos de café tostado" className="aspect-[4/5] w-full rounded-[22px] object-cover print:aspect-auto print:h-[690px]" />
          <div className="absolute -bottom-5 -right-3 hidden h-24 w-24 rounded-full bg-espresso sm:block" aria-hidden="true" />
        </div>
        <div className="self-center">
          <h2 id="why-title" className="font-display text-[2.6rem] font-medium leading-[1.02] text-grano sm:text-6xl">
            ¿Por qué elegirnos?
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-grano/70">Del café verde a tu bodega: controlamos cada etapa para que nunca te falte.</p>
          <ul className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 print:mt-6 print:grid-cols-2 print:gap-y-5">
            {REASONS.map((r) =>
              r.featured ? (
                <li key={r.title} className="rounded-2xl bg-espresso px-6 py-5 text-crema sm:col-span-2">
                  <h3 className="font-display text-3xl font-medium leading-tight">{r.title}</h3>
                  <p className="mt-1 text-[15px] text-arena/85">{r.text}</p>
                </li>
              ) : (
                <li key={r.title} className="border-t border-grano/20 pt-4">
                  <h3 className="font-display text-2xl font-medium leading-tight text-grano">{r.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-grano/70">{r.text}</p>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}


export function Footer() {
  const contacts = [
    CONTACT.phone && { label: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, '')}` },
    CONTACT.whatsapp && { label: 'WhatsApp', href: waLink() },
    CONTACT.instagram && { label: `@${CONTACT.instagram.replace(/^@/, '')}`, href: `https://instagram.com/${CONTACT.instagram.replace(/^@/, '')}` },
    CONTACT.website && { label: CONTACT.website.replace(/^https?:\/\//, ''), href: CONTACT.website },
  ].filter(Boolean);
  return (
    <footer className="bg-tinta text-arena/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-14 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-8">
          <img src={corporateLogo} alt="Corporate Coffee" width="120" height="91" className="h-16 w-auto invert" />
          <span className="h-14 w-px bg-arena/30" aria-hidden="true" />
          <img src={amatiLogo} alt="Amati" width="90" height="79" className="h-16 w-auto invert" />
        </div>
        {contacts.length > 0 && (
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {contacts.map((c) => (
              <li key={c.href}>
                <a href={c.href} className="hover:text-crema" target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        )}
        <p className="text-xs text-arena/50">Presentación de marca 2026.</p>
      </div>
    </footer>
  );
}
