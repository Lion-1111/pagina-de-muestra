import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Star, Scale, Users, Home, FileText, HeartHandshake, Gavel, Quote } from "lucide-react";
import despacho from "@/assets/despacho.jpg";
import retrato from "@/assets/amparo-garcia.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lic. Amparo García Ascencio | Abogada Familiar y Civil en Tijuana" },
      { name: "description", content: "Abogada especialista en derecho familiar y civil en Tijuana, B.C. Divorcios, pensión alimenticia, custodia y juicios civiles. 5.0 con 87 opiniones." },
      { property: "og:title", content: "Lic. Amparo García Ascencio — Abogada en Tijuana" },
      { property: "og:description", content: "Divorcios, pensión alimenticia, custodia y asuntos civiles con ética y profesionalismo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const TEL = "+52 664 170 8459";
const TEL_HREF = "tel:+526641708459";
const WA = "https://wa.me/526641708459";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Allende+202+Fracc+Moreno+Dimenstein+22105+Tijuana";

const servicios = [
  { icon: HeartHandshake, t: "Divorcios", d: "Divorcio voluntario e incausado, con trato humano y discreción en cada etapa." },
  { icon: Users, t: "Guarda y custodia", d: "Protección del interés superior de sus hijos y régimen de convivencia." },
  { icon: Scale, t: "Pensión alimenticia", d: "Fijación, aumento, reducción y cobro de pensiones alimenticias." },
  { icon: FileText, t: "Sucesiones", d: "Juicios sucesorios testamentarios e intestamentarios." },
  { icon: Home, t: "Derecho civil", d: "Contratos, arrendamiento, prescripción y controversias patrimoniales." },
  { icon: Gavel, t: "Trámites a distancia", d: "Atención para clientes fuera de Tijuana o en Estados Unidos." },
];

const opiniones = [
  { n: "Fernando Yáñez", t: "Quiero expresarle mi más profundo agradecimiento por la labor realizada durante mi trámite de divorcio. Muchísimas gracias por su ética y profesionalismo, y la paciencia que tiene hacia sus clientes." },
  { n: "Martha Rosales", t: "Recomiendo ampliamente a la Lic. Amparo García Ascencio por su buen trabajo: fue eficiente, amable, educada y con mucha rapidez. Ojalá hubiera más personas como usted con valores." },
  { n: "Álvarez", t: "Gracias por el excelente trabajo realizado. Es usted una persona muy profesional y dedicada a dar resultados muy satisfactorios. Totalmente recomendable, quedé muy contento con el resultado." },
];

function Stars() {
  return (
    <span className="inline-flex gap-0.5 text-accent">
      {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
    </span>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-primary-foreground">
          <a href="#" className="font-serif text-xl tracking-wide">A. García Ascencio</a>
          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#servicios" className="hover:text-accent">Servicios</a>
            <a href="#perfil" className="hover:text-accent">Perfil</a>
            <a href="#opiniones" className="hover:text-accent">Opiniones</a>
            <a href="#contacto" className="hover:text-accent">Contacto</a>
          </nav>
          <a href={TEL_HREF} className="hidden items-center gap-2 border border-accent px-4 py-2 text-sm text-accent hover:bg-accent hover:text-accent-foreground sm:flex">
            <Phone className="h-4 w-4" /> {TEL}
          </a>
        </div>
      </header>

      {/* Portada */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <img src={despacho} alt="Despacho jurídico" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto w-full max-w-6xl px-6 py-32 text-primary-foreground">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-accent">Abogada · Tijuana, Baja California</p>
          <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] md:text-7xl">Lic. Amparo García Ascencio</h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/80">
            Especialista en Derecho Familiar y Civil. Defensa jurídica con ética, claridad y el tacto que los asuntos familiares merecen.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={WA} target="_blank" rel="noreferrer" className="bg-accent px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-accent-foreground hover:opacity-90">Agendar consulta</a>
            <a href={TEL_HREF} className="border border-primary-foreground/40 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider hover:border-accent hover:text-accent">Llamar ahora</a>
          </div>
          <div className="mt-14 flex items-center gap-3 text-sm text-primary-foreground/80">
            <Stars /> <span><strong className="text-primary-foreground">5.0</strong> · 87 opiniones en Google</span>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Áreas de práctica</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Asesoría legal integral para usted y su familia</h2>
        </div>
        <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map(({ icon: Icon, t, d }) => (
            <div key={t} className="bg-card p-8 transition-colors hover:bg-secondary">
              <Icon className="h-7 w-7 text-accent" strokeWidth={1.5} />
              <h3 className="mt-5 font-serif text-2xl">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Perfil */}
      <section id="perfil" className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-[2fr_3fr]">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full border border-accent" />
            <img src={retrato.url} alt="Lic. Amparo García Ascencio" loading="lazy" className="relative aspect-[4/5] w-full object-cover object-top" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Sobre la licenciada</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Más que derechos y obligaciones</h2>
            <p className="mt-6 leading-relaxed text-primary-foreground/80">
              "En asuntos familiares no solo se trata de derechos y obligaciones; también hay muchas emociones involucradas en cada asunto. Por eso siempre trato de dar ese extra en la atención a mis clientes."
            </p>
            <p className="mt-4 leading-relaxed text-primary-foreground/80">
              Desde su despacho en Tijuana, la Lic. García Ascencio acompaña a cada cliente con honestidad, precios justos y comunicación clara, tanto de forma presencial como a distancia.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-primary-foreground/15 pt-8">
              <div><p className="font-serif text-4xl text-accent">5.0</p><p className="mt-1 text-xs uppercase tracking-wider text-primary-foreground/60">Calificación</p></div>
              <div><p className="font-serif text-4xl text-accent">87</p><p className="mt-1 text-xs uppercase tracking-wider text-primary-foreground/60">Opiniones</p></div>
              <div><p className="font-serif text-4xl text-accent">100%</p><p className="mt-1 text-xs uppercase tracking-wider text-primary-foreground/60">Recomendable</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Opiniones */}
      <section id="opiniones" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Testimonios</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Lo que dicen nuestros clientes</h2>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground"><Stars /> 5.0 de 5 · 87 opiniones verificadas en Google</div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {opiniones.map((o) => (
            <figure key={o.n} className="flex flex-col border border-border bg-card p-8">
              <Quote className="h-8 w-8 text-accent" strokeWidth={1.25} />
              <blockquote className="mt-4 flex-1 font-serif text-lg leading-relaxed">{o.t}</blockquote>
              <figcaption className="mt-6 flex items-center justify-between border-t border-border pt-4 text-sm">
                <span className="font-semibold">{o.n}</span><Stars />
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm italic text-muted-foreground">
          <span>"Excelente servicio, muy rápido y eficiente"</span><span>·</span>
          <span>"Dedicación y tacto al explicar cada tema"</span>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="border-t border-border bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Contacto</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Agende su consulta</h2>
            <p className="mt-4 max-w-md text-muted-foreground">Cuéntenos su caso. Le orientaremos con claridad sobre el mejor camino legal a seguir.</p>
            <ul className="mt-10 space-y-6">
              <li className="flex gap-4"><MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" /><a href={MAPS} target="_blank" rel="noreferrer" className="hover:underline">Allende 202, Fracc. Moreno, Dimenstein<br />22105 Tijuana, B.C., México</a></li>
              <li className="flex gap-4"><Phone className="mt-1 h-5 w-5 shrink-0 text-accent" /><a href={TEL_HREF} className="hover:underline">{TEL}</a></li>
              <li className="flex gap-4"><Clock className="mt-1 h-5 w-5 shrink-0 text-accent" /><span>Lunes a viernes · hasta las 6:00 p.m.</span></li>
            </ul>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={WA} target="_blank" rel="noreferrer" className="bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:opacity-90">Escribir por WhatsApp</a>
              <a href={MAPS} target="_blank" rel="noreferrer" className="border border-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground">Cómo llegar</a>
            </div>
          </div>
          <div className="min-h-[380px] overflow-hidden border border-border">
            <iframe title="Ubicación del despacho" className="h-full min-h-[380px] w-full" loading="lazy"
              src="https://www.google.com/maps?q=Allende+202,+Moreno,+Dimenstein,+22105+Tijuana,+B.C.&output=embed" />
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm md:flex-row">
          <span className="font-serif text-lg text-primary-foreground">Lic. Amparo García Ascencio</span>
          <span>Abogada especialista en Derecho Familiar y Civil · Tijuana, B.C.</span>
        </div>
      </footer>
    </div>
  );
}
