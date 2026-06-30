import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Sparkles,
  Flower2,
  HeartHandshake,
  MapPin,
  Phone,
  Instagram,
  Clock,
  ArrowRight,
  Star,
  Quote,
  Menu,
  X,
} from "lucide-react";

import logoAsset from "@/assets/vitta-bella-logo.asset.json";
import heroImg from "@/assets/hero-spa.jpg";
import facialImg from "@/assets/treatment-facial.jpg";
import massageImg from "@/assets/treatment-massage.jpg";
import lashesImg from "@/assets/treatment-lashes.jpg";
import lotusImg from "@/assets/lotus-detail.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Spazio Vitta Bella · Estética Avançada em Santo André" },
      {
        name: "description",
        content:
          "Referência em transformação e cuidados personalizados em Santo André. Especialistas em Beleza Integrada e Estética Avançada. Agende sua experiência.",
      },
      { property: "og:title", content: "Spazio Vitta Bella · Estética em Santo André" },
      {
        property: "og:description",
        content:
          "Um espaço dedicado à sua beleza integrada. Tratamentos faciais, corporais e bem-estar com toque de luxo.",
      },
      { property: "og:image", content: logoAsset.url },
      { name: "twitter:image", content: logoAsset.url },
    ],
  }),
  component: Index,
});

const treatments = [
  { name: "Lipoenzimática", desc: "Modelagem corporal que reduz medidas com ativos lipolíticos.", img: facialImg },
  { name: "Botox", desc: "Suavização de linhas de expressão com aplicação especializada.", img: lashesImg },
  { name: "Drenagem Linfática", desc: "Movimentos precisos que aliviam, desincham e renovam.", img: massageImg },
  { name: "Limpeza de Pele", desc: "Protocolo profundo para uma pele radiante e equilibrada.", img: facialImg },
  { name: "Massagem Modeladora 360", desc: "Esculpe e tonifica com técnica e pressão personalizadas.", img: massageImg },
  { name: "Microagulhamento Facial", desc: "Estímulo de colágeno para uma pele firme e luminosa.", img: facialImg },
  { name: "Preenchimento Facial", desc: "Volume e harmonia com ácido hialurônico de alta performance.", img: lashesImg },
  { name: "Hena Labial", desc: "Lábios definidos, hidratados e com cor por mais tempo.", img: lashesImg },
  { name: "Extensão de Cílios", desc: "Olhar marcante, fio a fio, com aplicação delicada.", img: lashesImg },
];

const pillars = [
  {
    icon: Flower2,
    title: "Beleza Integrada",
    text: "Cuidamos da pele, do corpo e da sensação de bem-estar como um todo único.",
  },
  {
    icon: Sparkles,
    title: "Estética Avançada",
    text: "Tecnologia, técnica e ativos de alta performance em cada protocolo.",
  },
  {
    icon: HeartHandshake,
    title: "Cuidado Personalizado",
    text: "Cada cliente é única. Cada plano de cuidado também.",
  },
];

const testimonials = [
  {
    name: "Camila R.",
    text: "Saio de cada sessão me sentindo renovada. O ambiente é um abraço e os resultados, visíveis.",
  },
  {
    name: "Patrícia M.",
    text: "Profissionais atentas, escuta verdadeira e tratamentos que entregam. Virei cliente fiel.",
  },
  {
    name: "Letícia S.",
    text: "O Spazio Vitta Bella não é só um espaço de estética. É uma experiência de autocuidado.",
  },
];

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/85 backdrop-blur-md shadow-[0_1px_0_0_var(--color-border)]" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
          <a href="#top" className="flex min-w-0 items-center gap-2 sm:gap-3">
            <img src={logoAsset.url} alt="Spazio Vitta Bella" className="h-10 w-10 shrink-0 rounded-full object-cover ring-1 ring-[var(--color-gold)]/40 sm:h-12 sm:w-12" />
            <div className="min-w-0 leading-tight">
              <p className="truncate font-display text-base text-[var(--color-rose-deep)] sm:text-lg">Spazio Vitta Bella</p>
              <p className="truncate text-[9px] uppercase tracking-[0.22em] text-[var(--color-gold)] sm:text-[10px] sm:tracking-[0.25em]">Estética · Santo André</p>
            </div>
          </a>
          <nav className="hidden items-center gap-9 md:flex">
            {[
              ["O Espaço", "#espaco"],
              ["Tratamentos", "#tratamentos"],
              ["Experiência", "#experiencia"],
              ["Depoimentos", "#depoimentos"],
              ["Visite", "#visite"],
            ].map(([label, href]) => (
              <a key={href} href={href} className="text-sm text-foreground/80 transition hover:text-[var(--color-rose-deep)]">
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#agendar"
            className="hidden items-center gap-2 rounded-full bg-[var(--color-rose-deep)] px-5 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-cream)] shadow-gold transition hover:bg-[var(--color-rose)] md:inline-flex"
          >
            Agendar
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <button className="shrink-0 p-2 text-[var(--color-rose-deep)] md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-border bg-background">
            <nav className="flex flex-col px-6 py-4">
              {[
                ["O Espaço", "#espaco"],
                ["Tratamentos", "#tratamentos"],
                ["Experiência", "#experiencia"],
                ["Depoimentos", "#depoimentos"],
                ["Visite", "#visite"],
                ["Agendar", "#agendar"],
              ].map(([label, href]) => (
                <a key={href} href={href} onClick={() => setOpen(false)} className="py-3 text-sm text-foreground/80">
                  {label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden bg-gradient-blush pt-28 pb-16 sm:pt-32 sm:pb-24 md:pt-40 md:pb-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full opacity-50 blur-3xl"
          style={{ background: "radial-gradient(closest-side, var(--color-gold-light), transparent)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(closest-side, var(--color-rose), transparent)" }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-6 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)]/40 bg-background/60 px-4 py-1.5 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-[var(--color-gold)]" />
              <span className="text-[10px] uppercase tracking-[0.28em] text-[var(--color-rose-deep)]">
                Beleza Integrada · Santo André
              </span>
            </div>
            <h1 className="mt-6 font-display text-[2.5rem] leading-[1.05] text-[var(--color-rose-deep)] sm:text-5xl md:text-7xl">
              Onde a sua beleza
              <span className="block italic text-gradient-gold">floresce em cuidado.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/70 md:text-lg">
              Um espaço pensado para você desacelerar, ser ouvida e ver sua melhor versão emergir. Estética avançada, mãos atentas
              e um ritual sob medida — do primeiro toque ao último respiro.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <a
                href="#agendar"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-rose-deep)] px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-cream)] shadow-gold transition hover:translate-y-[-2px] hover:bg-[var(--color-rose)] sm:px-7 sm:text-xs sm:tracking-[0.22em]"
              >
                Agende sua experiência
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#tratamentos"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-rose-deep)]/30 px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-rose-deep)] transition hover:bg-[var(--color-rose-deep)]/5 sm:px-7 sm:text-xs sm:tracking-[0.22em]"
              >
                Conheça os tratamentos
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-5 sm:gap-8">
              <div>
                <p className="font-display text-2xl text-[var(--color-rose-deep)] sm:text-3xl">+8</p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-foreground/60 sm:text-xs sm:tracking-[0.2em]">Especialidades</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <p className="font-display text-2xl text-[var(--color-rose-deep)] sm:text-3xl">+460</p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-foreground/60 sm:text-xs sm:tracking-[0.2em]">Clientes ativas</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[var(--color-gold)] text-[var(--color-gold)]" />
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-6">
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-[var(--color-gold-light)]/40 to-[var(--color-rose)]/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] shadow-soft ring-1 ring-[var(--color-gold)]/40">
                <img src={heroImg} alt="Sala de tratamento Spazio Vitta Bella" width={1600} height={1200} className="aspect-[4/5] w-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden w-56 rounded-2xl bg-background/95 p-4 shadow-soft ring-1 ring-border backdrop-blur md:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-rose)]/15">
                    <Flower2 className="h-5 w-5 text-[var(--color-rose-deep)]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-foreground/60">Ritual exclusivo</p>
                    <p className="font-display text-base text-[var(--color-rose-deep)]">Chá, aroma & escuta</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 hidden h-24 w-24 items-center justify-center rounded-full bg-[var(--color-gold)] font-display text-xs uppercase tracking-[0.2em] text-[var(--color-cream)] shadow-gold md:flex">
                <span className="text-center leading-tight">Estética<br />Avançada</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section id="espaco" className="bg-[var(--color-cream)] py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[var(--color-gold)]">O Espaço</p>
            <h2 className="mt-4 font-display text-3xl text-[var(--color-rose-deep)] sm:text-4xl md:text-5xl">
              Um refúgio de elegância <span className="italic">e cuidado.</span>
            </h2>
            <p className="mt-5 text-foreground/70">
              No Spazio Vitta Bella, cada detalhe foi pensado para que você sinta — desde a recepção ao toque final — que está
              num lugar feito para a sua melhor versão.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {pillars.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-3xl border border-[var(--color-gold)]/20 bg-background p-8 transition hover:shadow-soft"
              >
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[var(--color-rose)]/8 transition group-hover:scale-125" />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-gold-light)] to-[var(--color-gold)] text-[var(--color-cream)] shadow-gold">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="relative mt-6 font-display text-2xl text-[var(--color-rose-deep)]">{title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-foreground/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TREATMENTS */}
      <section id="tratamentos" className="relative py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="text-[10px] uppercase tracking-[0.32em] text-[var(--color-gold)]">Tratamentos</p>
              <h2 className="mt-4 font-display text-3xl text-[var(--color-rose-deep)] sm:text-4xl md:text-5xl">
                Procedimentos estéticos <span className="italic">para cuidar de você.</span>
              </h2>
            </div>
            <p className="max-w-md text-foreground/70">
              Protocolos faciais, corporais e de bem-estar conduzidos por especialistas. Cada sessão é única, como você.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.map((t, i) => (
              <article
                key={t.name}
                className="group relative overflow-hidden rounded-3xl bg-[var(--color-cream)] ring-1 ring-[var(--color-gold)]/15 transition hover:ring-[var(--color-gold)]/60 hover:shadow-soft"
              >
                <div className="aspect-[5/4] overflow-hidden">
                  <img
                    src={t.img}
                    alt={t.name}
                    width={1200}
                    height={960}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.24em] text-[var(--color-gold)]">
                      0{i + 1}
                    </span>
                    <Flower2 className="h-4 w-4 text-[var(--color-rose)]/60" />
                  </div>
                  <h3 className="mt-3 font-display text-2xl text-[var(--color-rose-deep)]">{t.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">{t.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="font-display text-2xl italic text-[var(--color-rose-deep)]">
              Pronta para ficar ainda mais linda?
            </p>
            <a
              href="#agendar"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--color-rose-deep)] px-7 py-3.5 text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-cream)] shadow-gold transition hover:bg-[var(--color-rose)]"
            >
              Agende seu horário
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experiencia" className="relative overflow-hidden bg-[var(--color-rose-deep)] py-16 text-[var(--color-cream)] sm:py-24 md:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(at 20% 20%, var(--color-gold) 0, transparent 40%), radial-gradient(at 80% 80%, var(--color-rose) 0, transparent 45%)",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 md:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] ring-1 ring-[var(--color-gold)]/40 shadow-soft">
              <img src={lotusImg} alt="Detalhe lótus" width={1200} height={1200} loading="lazy" className="aspect-square w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 left-4 right-4 max-w-[16rem] rounded-2xl bg-[var(--color-cream)] p-4 text-[var(--color-rose-deep)] shadow-soft sm:-bottom-8 sm:left-auto sm:right-4 sm:p-5 md:-right-8">
              <Quote className="h-5 w-5 text-[var(--color-gold)]" />
              <p className="mt-2 font-display text-base italic">
                "Não é um procedimento. É um ritual de retorno a si mesma."
              </p>
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-[var(--color-gold-light)]">A Experiência Vitta Bella</p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl">
              Do primeiro toque <span className="italic text-[var(--color-gold-light)]">ao último respiro.</span>
            </h2>
            <p className="mt-5 text-[var(--color-cream)]/80">
              Acreditamos que estética é um gesto de amor próprio. Por isso, cuidamos do ambiente, do tempo e da escuta com a
              mesma dedicação que aplicamos a cada técnica.
            </p>

            <ol className="mt-10 space-y-6">
              {[
                ["Acolhimento", "Você é recebida com chá, aroma e uma conversa sem pressa."],
                ["Plano Personalizado", "Uma avaliação cuidadosa traduz seus desejos em um protocolo único."],
                ["Ritual de Cuidado", "Mãos especialistas conduzem a sessão num ambiente pensado em cada detalhe."],
                ["Pós & Continuidade", "Acompanhamento e orientações para que sua transformação continue em casa."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-gold)]/50 font-display text-sm text-[var(--color-gold-light)]">
                    0{i + 1}
                  </div>
                  <div>
                    <p className="font-display text-xl text-[var(--color-cream)]">{t}</p>
                    <p className="mt-1 text-sm text-[var(--color-cream)]/70">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="depoimentos" className="bg-gradient-blush py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[var(--color-gold)]">Depoimentos</p>
            <h2 className="mt-4 font-display text-3xl text-[var(--color-rose-deep)] sm:text-4xl md:text-5xl">
              Histórias de transformação <span className="italic">e cuidado.</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-3xl bg-background p-8 shadow-soft ring-1 ring-[var(--color-gold)]/20">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[var(--color-gold)] text-[var(--color-gold)]" />
                  ))}
                </div>
                <Quote className="mt-4 h-6 w-6 text-[var(--color-rose)]/40" />
                <blockquote className="mt-3 font-display text-xl leading-snug text-[var(--color-rose-deep)]">
                  "{t.text}"
                </blockquote>
                <figcaption className="mt-6 text-xs uppercase tracking-[0.22em] text-foreground/60">— {t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT / CTA */}
      <section id="visite" className="py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
          <div id="agendar">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[var(--color-gold)]">Agende sua visita</p>
            <h2 className="mt-4 font-display text-4xl text-[var(--color-rose-deep)] md:text-5xl">
              Sua transformação <span className="italic">começa aqui.</span>
            </h2>
            <p className="mt-5 max-w-md text-foreground/70">
              Reserve seu horário e descubra a experiência completa Vitta Bella. Atendimento sob agendamento para garantir um
              cuidado integral a cada cliente.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href="tel:+5511978813648"
                className="flex items-center gap-4 rounded-2xl border border-border bg-background p-5 transition hover:border-[var(--color-gold)]/60 hover:shadow-soft"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-rose)]/12 text-[var(--color-rose-deep)]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-foreground/60">Agendamento</p>
                  <p className="font-display text-xl text-[var(--color-rose-deep)]">(11) 97881-3648</p>
                </div>
              </a>

              <a
                href="https://www.trinks.com/vitta-bella1"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-border bg-background p-5 transition hover:border-[var(--color-gold)]/60 hover:shadow-soft"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-gold)]/15 text-[var(--color-gold)]">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-foreground/60">Agendamento online</p>
                  <p className="font-display text-xl text-[var(--color-rose-deep)]">trinks.com/vitta-bella1</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-border bg-background p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-leaf)]/12 text-[var(--color-leaf)]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-foreground/60">Localização</p>
                  <p className="font-display text-xl text-[var(--color-rose-deep)]">Santo André · SP</p>
                </div>
              </div>

              <a
                href="https://www.instagram.com/svittabella"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[var(--color-rose-deep)] underline-offset-4 hover:underline"
              >
                <Instagram className="h-4 w-4" /> @svittabella
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-[var(--color-rose)]/15 to-[var(--color-gold-light)]/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] shadow-soft ring-1 ring-[var(--color-gold)]/40">
              <img src={facialImg} alt="Cuidado facial" width={1200} height={1400} loading="lazy" className="aspect-[4/5] w-full object-cover" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-background/90 p-5 backdrop-blur ring-1 ring-border">
              <p className="font-display text-base italic text-[var(--color-rose-deep)]">
                "Sua melhor versão merece um espaço à sua altura."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-[var(--color-cream)] py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Spazio Vitta Bella" className="h-10 w-10 rounded-full object-cover ring-1 ring-[var(--color-gold)]/40" />
            <div>
              <p className="font-display text-base text-[var(--color-rose-deep)]">Spazio Vitta Bella</p>
              <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-gold)]">Estética · Santo André</p>
            </div>
          </div>
          <p className="text-xs text-foreground/60">
            © {new Date().getFullYear()} Spazio Vitta Bella. Beleza integrada com cuidado de quem ama.
          </p>
          <a
            href="https://www.instagram.com/svittabella"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[var(--color-rose-deep)]"
          >
            <Instagram className="h-4 w-4" /> @svittabella
          </a>
        </div>
      </footer>
    </div>
  );
}
