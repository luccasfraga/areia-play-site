import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import AnimatedCounter from "../components/AnimatedCounter";

const features = [
  {
    icon: "🏐",
    label: "Registre partidas",
    desc: "Salve placares, jogadores, fotos e local. Partidas, sessões ou aulas.",
  },
  {
    icon: "🏆",
    label: "Rankings automáticos",
    desc: "Acompanhe quem mais vence no seu grupo, arena ou cidade.",
  },
  {
    icon: "📍",
    label: "Encontre arenas",
    desc: "Descubra quadras de areia perto de você com busca por localização.",
  },
  {
    icon: "👥",
    label: "Conecte-se",
    desc: "Siga jogadores, veja o feed de partidas e encontre parceiros para jogar.",
  },
  {
    icon: "📊",
    label: "Estatísticas detalhadas",
    desc: "Vitórias, derrotas, sequências e evolução ao longo do tempo.",
  },
  {
    icon: "🎯",
    label: "Jogos abertos",
    desc: "Crie ou entre em partidas abertas próximas a você.",
  },
];

const sports = [
  { name: "Beach Tennis", emoji: "🎾" },
  { name: "Futevôlei", emoji: "⚽" },
  { name: "Vôlei de Areia", emoji: "🏐" },
  { name: "Futebol de Areia", emoji: "🏖️" },
];

const steps = [
  {
    n: "01",
    title: "Crie sua conta",
    desc: "Cadastro rápido com e-mail. Escolha seus esportes favoritos e pronto.",
  },
  {
    n: "02",
    title: "Registre partidas",
    desc: "Selecione o esporte, a arena, os jogadores e o placar. Adicione foto se quiser.",
  },
  {
    n: "03",
    title: "Acompanhe tudo",
    desc: "Veja seu feed, ranking, estatísticas e a evolução de cada jogador.",
  },
];

const audiences = [
  {
    title: "Jogadores amadores",
    desc: "Registre partidas com amigos e acompanhe sua evolução",
    emoji: "🏐",
  },
  {
    title: "Jogadores competitivos",
    desc: "Rankings, estatísticas e histórico completo de resultados",
    emoji: "🏆",
  },
  {
    title: "Professores e treinadores",
    desc: "Registre aulas, alunos e sessões de treino na areia",
    emoji: "🎓",
  },
  {
    title: "Arenas e quadras",
    desc: "Ganhe visibilidade para jogadores da região",
    emoji: "📍",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-light via-sand to-background" />

        {/* floating decorative blobs */}
        <div className="absolute top-16 -right-24 w-80 h-80 bg-brand/8 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-10 -left-16 w-64 h-64 bg-green/6 rounded-full blur-3xl animate-float-reverse" />
        <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-brand/20 rounded-full animate-float-slow" />
        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-green/20 rounded-full animate-float-reverse" />
        <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-brand/30 rounded-full animate-bounce-subtle" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-36">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* left */}
            <div className="space-y-8 animate-hero-left">
              <div className="inline-flex items-center gap-2 bg-brand/10 text-brand-dark px-4 py-1.5 rounded-full text-xs font-bold tracking-wide animate-pulse-glow">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand" />
                </span>
                EM BREVE NA APP STORE E GOOGLE PLAY
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight">
                Sua vida na areia
                <br />
                <span className="bg-gradient-to-r from-brand via-brand-dark to-green bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  em um só lugar
                </span>
              </h1>

              <p className="text-lg text-muted leading-relaxed max-w-lg">
                Registre partidas, acompanhe rankings e encontre parceiros. A
                rede social feita para quem joga na areia.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2.5 bg-foreground text-card px-6 py-3.5 rounded-xl font-semibold text-sm opacity-50 select-none cursor-default">
                  <AppleIcon />
                  App Store — em breve
                </span>
                <span className="inline-flex items-center gap-2.5 bg-foreground text-card px-6 py-3.5 rounded-xl font-semibold text-sm opacity-50 select-none cursor-default">
                  <PlayIcon />
                  Google Play — em breve
                </span>
              </div>
            </div>

            {/* right — mock card */}
            <div className="flex justify-center animate-hero-right">
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-br from-brand/15 to-green/10 rounded-[3rem] blur-3xl animate-pulse-glow" />
                <div className="relative bg-card border border-border rounded-3xl p-7 shadow-2xl w-[17rem] md:w-[19rem] space-y-5 animate-float">
                  <div className="flex items-center gap-3">
                    <img
                      src="/logo.png"
                      alt="Areia Play"
                      className="rounded-xl w-14 h-14"
                    />
                    <div>
                      <p className="font-bold text-sm">Areia Play</p>
                      <p className="text-[11px] text-muted">
                        Sua rede na areia
                      </p>
                    </div>
                  </div>

                  <div className="bg-sand rounded-2xl p-4 border border-border/60 space-y-3">
                    <p className="text-[10px] font-bold text-muted uppercase tracking-widest">
                      Última partida
                    </p>
                    <div className="flex items-center justify-between px-2">
                      <div className="text-center">
                        <p className="text-[10px] text-muted">Time A</p>
                        <p className="text-3xl font-extrabold text-green">
                          <AnimatedCounter value={7} duration={1200} />
                        </p>
                      </div>
                      <p className="text-base text-muted/40 font-bold">x</p>
                      <div className="text-center">
                        <p className="text-[10px] text-muted">Time B</p>
                        <p className="text-3xl font-extrabold text-muted/50">
                          <AnimatedCounter value={5} duration={1200} />
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] text-muted">
                      <span>🎾</span>
                      <span className="font-medium">Beach Tennis</span>
                      <span className="ml-auto">Arena Areia Play</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="flex-1 rounded-xl p-3 text-center bg-brand/10">
                      <p className="text-lg font-extrabold text-brand-dark">
                        <AnimatedCounter value={12} duration={1800} />
                      </p>
                      <p className="text-[10px] text-muted font-medium">
                        Vitórias
                      </p>
                    </div>
                    <div className="flex-1 rounded-xl p-3 text-center bg-sand border border-border/60">
                      <p className="text-lg font-extrabold">
                        <AnimatedCounter value={3} duration={1200} />
                      </p>
                      <p className="text-[10px] text-muted font-medium">
                        Derrotas
                      </p>
                    </div>
                    <div className="flex-1 rounded-xl p-3 text-center bg-sand border border-border/60">
                      <p className="text-lg font-extrabold">
                        <AnimatedCounter
                          value={80}
                          suffix="%"
                          duration={2000}
                        />
                      </p>
                      <p className="text-[10px] text-muted font-medium">
                        Win rate
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sport bar ── */}
      <section className="bg-card border-y border-border">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <ScrollReveal animation="fade-up">
            <div className="flex flex-wrap justify-center gap-8 md:gap-14">
              {sports.map((s) => (
                <div
                  key={s.name}
                  className="sport-chip flex items-center gap-2.5 text-muted cursor-default select-none"
                >
                  <span className="sport-emoji text-2xl">{s.emoji}</span>
                  <span className="font-semibold text-sm tracking-tight">
                    {s.name}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Funcionalidades ── */}
      <section id="funcionalidades" className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-14">
          <ScrollReveal animation="fade-up">
            <div className="space-y-4">
              <p className="text-brand font-bold text-xs uppercase tracking-[0.2em]">
                Funcionalidades
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold">
                Tudo pra sua vida na areia{" "}
                <span className="bg-gradient-to-r from-brand to-green bg-clip-text text-transparent">
                  em um app
                </span>
              </h2>
              <p className="text-muted max-w-xl mx-auto leading-relaxed">
                Ferramentas pensadas para quem joga, treina e vive os esportes
                de areia.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <ScrollReveal key={f.label} animation="fade-up" delay={i * 100}>
                <div className="feature-card bg-card rounded-2xl p-6 space-y-4 text-left border border-border hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5 h-full">
                  <div className="feature-icon w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-light to-brand/10 flex items-center justify-center text-xl transition-transform duration-300">
                    {f.icon}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{f.label}</p>
                    <p className="text-sm text-muted mt-1 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Como funciona ── */}
      <section className="bg-gradient-to-b from-sand to-background py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-14">
          <ScrollReveal animation="fade-up">
            <div className="space-y-4">
              <p className="text-green font-bold text-xs uppercase tracking-[0.2em]">
                Como funciona
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold">
                Comece em{" "}
                <span className="bg-gradient-to-r from-brand to-green bg-clip-text text-transparent">
                  3 passos simples
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((s, i) => (
              <ScrollReveal key={s.n} animation="scale-in" delay={i * 200}>
                <div className="space-y-5">
                  <div className="step-number w-16 h-16 rounded-2xl bg-gradient-to-br from-brand to-brand-dark flex items-center justify-center mx-auto shadow-lg shadow-brand/20 cursor-default">
                    <span className="text-xl font-extrabold text-white">
                      {s.n}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg">{s.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Para quem ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-14">
          <ScrollReveal animation="fade-up">
            <div className="space-y-4">
              <p className="text-brand font-bold text-xs uppercase tracking-[0.2em]">
                Para quem
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold">
                Feito para quem{" "}
                <span className="bg-gradient-to-r from-brand to-green bg-clip-text text-transparent">
                  joga na areia
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-4">
            {audiences.map((a, i) => (
              <ScrollReveal
                key={a.title}
                animation={i % 2 === 0 ? "slide-left" : "slide-right"}
                delay={i * 100}
              >
                <div className="audience-card flex items-center gap-4 bg-card rounded-2xl p-5 text-left border border-border hover:shadow-md cursor-default h-full">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-green-light to-green/10 flex items-center justify-center shrink-0">
                    <span className="text-lg">{a.emoji}</span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{a.title}</p>
                    <p className="text-sm text-muted mt-0.5">{a.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 cta-bg" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 animate-float-slow" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3 animate-float-reverse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full animate-spin-slow" />

        <ScrollReveal animation="scale-in" className="relative">
          <div className="max-w-3xl mx-auto px-6 py-24 md:py-32 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Pronto pra jogar?
            </h2>
            <p className="text-white/75 text-lg max-w-md mx-auto leading-relaxed">
              O Areia Play está chegando. Seja um dos primeiros a usar e faça
              parte da comunidade.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="inline-flex items-center gap-2.5 bg-white text-foreground px-8 py-4 rounded-2xl font-bold text-sm shadow-lg select-none cursor-default hover:scale-105 transition-transform">
                <AppleIcon />
                App Store — em breve
              </span>
              <span className="inline-flex items-center gap-2.5 bg-white text-foreground px-8 py-4 rounded-2xl font-bold text-sm shadow-lg select-none cursor-default hover:scale-105 transition-transform">
                <PlayIcon />
                Google Play — em breve
              </span>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
}

function AppleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M3.18 23.67a1.79 1.79 0 0 1-.18-.8V1.13c0-.28.06-.54.18-.78L14.52 12 3.18 23.67zm1.65.88L17.19 13.4l-2.56-2.56L4.83 24.55zm17.05-11.15l-3.47-2L15.3 12l3.11 3.11 3.47-2c.97-.55.97-1.46 0-2.01zM4.83-.55L14.63 9.6l2.56-2.56L4.83-.55z" />
    </svg>
  );
}
