import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Phone,
  MessageCircle,
  ArrowRight,
  Zap,
  DoorOpen,
  Car,
  ShieldCheck,
  Clock,
  Award,
  Wrench,
  Cog,
  Cookie,
} from "lucide-react";

import carregadorAsset from "@/assets/carregador_energia_veicular.jpeg.asset.json";
import basculanteAsset from "@/assets/portao_basculante.png.asset.json";
import deslizanteAsset from "@/assets/portao_deslizante.png.asset.json";
import pivotanteAsset from "@/assets/portao_pivotante.png.asset.json";
import ppaAsset from "@/assets/portao_ppa.png.asset.json";
import logoAsset from "@/assets/logo-adv.png.asset.json";


const WHATSAPP = "5519993459229";
const PHONE_DISPLAY = "+55 (19) 99345-9229";
const PHONE_TEL = "+5519993459229";

const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ADV Elétrica — Portões e Carregadores Veiculares" },
      {
        name: "description",
        content:
          "Instalação e manutenção de portões eletrônicos e carregadores para veículos elétricos em toda a região. Orçamento rápido pelo WhatsApp.",
      },
    ],
  }),
  component: LandingPage,
});

type Service = {
  id: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  image?: string;
};

const services: Service[] = [
  {
    id: "portao-deslizante",
    title: "Portão Deslizante",
    desc: "Motores robustos para portões deslizantes residenciais e comerciais.",
    icon: DoorOpen,
    image: deslizanteAsset.url,
  },
  {
    id: "portao-basculante",
    title: "Portão Basculante",
    desc: "Instalação e automação de basculantes com alta segurança.",
    icon: Cog,
    image: basculanteAsset.url,
  },
  {
    id: "portao-pivotante",
    title: "Portão Pivotante",
    desc: "Pivotantes com abertura suave e acabamento impecável.",
    icon: DoorOpen,
    image: pivotanteAsset.url,
  },
  {
    id: "motor-ppa",
    title: "Motores PPA",
    desc: "Linha PPA completa: conforto, tecnologia e eficiência.",
    icon: Wrench,
    image: ppaAsset.url,
  },
  {
    id: "carregador-ve",
    title: "Carregador Veicular",
    desc: "Instalação de carregadores para carros elétricos (wallbox).",
    icon: Car,
    image: carregadorAsset.url,
  },
];

function GoogleReviews() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) return;

    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="elfsight-app-d1f25b32-f567-4da6-9df6-2ce21ba4d30b"
      data-elfsight-app-lazy
    />
  );
}

function LandingPage() {
  const [selectedService, setSelectedService] = useState<string>(services[0].id);
  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem("adv_cookie_consent")) setShowCookie(true);
  }, []);

  const dismissCookie = (v: "accept" | "reject") => {
    localStorage.setItem("adv_cookie_consent", v);
    setShowCookie(false);
  };

  const scrollToContact = (id: string) => {
    setSelectedService(id);
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  const currentService = services.find((s) => s.id === selectedService) ?? services[0];
  const waMsg = `Olá! Gostaria de um orçamento para: ${currentService.title}.`;

  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-border/60 backdrop-blur-xl bg-white/75">
        <div className="mx-auto max-w-6xl px-5 h-16 flex items-center gap-4">
          <a href="#top" className="flex items-center gap-2.5 min-w-0">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white overflow-hidden">
              <img src={logoAsset.url} alt="ADV Elétrica" className="h-10 w-10 object-contain" />
            </div>
            <div className="min-w-0 leading-tight">
              <div className="font-display font-bold text-sm tracking-tight truncate">ADV ELÉTRICA</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground truncate">
                Soluções em Energia
              </div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-7 mx-auto text-sm font-medium text-foreground/80">
            <a href="#servicos" className="hover:text-ember transition-colors">Serviços</a>
            <a href="#porque" className="hover:text-ember transition-colors">Por que escolher</a>
            <a href="#avaliacoes" className="hover:text-ember transition-colors">Avaliações</a>
            <a href="#contato" className="hover:text-ember transition-colors">Contato</a>
          </nav>
          <a
            href={waLink("Olá! Gostaria de um orçamento.")}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2 text-sm font-semibold text-white shadow-[var(--shadow-ember)] hover:brightness-110 transition"
          >
            Orçamento <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-70 pointer-events-none" />
        <div className="relative mx-auto max-w-5xl px-5 pt-20 pb-24 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 backdrop-blur px-4 py-1.5 text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-ember pulse-dot" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
            </span>
            Especialistas em automação e energia
          </div>

          <h1 className="h-display mt-6">
            Portões e{" "}
            <span className="text-gradient">Carregadores</span>{" "}
            para sua casa ou empresa
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
            A <strong className="text-foreground">ADV Elétrica</strong> instala e mantém sistemas de{" "}
            <strong className="text-foreground">portões automáticos</strong> e{" "}
            <strong className="text-foreground">carregadores para veículos elétricos</strong> com atendimento
            rápido e garantia de serviço.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={waLink("Olá! Gostaria de um orçamento.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-ember)] hover:brightness-110 transition w-full sm:w-auto justify-center"
            >
              <MessageCircle className="h-5 w-5" />
              Peça um Orçamento
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2.5 rounded-full border border-border bg-white px-7 py-3.5 text-sm font-semibold hover:border-ember transition w-full sm:w-auto justify-center"
            >
              <Phone className="h-5 w-5 text-ember" />
              Ligue Agora
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { k: "24h", l: "Atendimento" },
              { k: "100%", l: "Garantia" },
              { k: "10+", l: "Anos de experiência" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-gradient font-display font-bold text-3xl md:text-4xl">{s.k}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center max-w-2xl mx-auto">
            <div className="section-tag">Nossos serviços</div>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl">
              Soluções completas em <span className="text-gradient">automação e energia</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Clique em um serviço para receber um orçamento personalizado pelo WhatsApp.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {services.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToContact(s.id)}
                className="group relative text-left overflow-hidden rounded-[19px] border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:border-ember/60 hover:shadow-[var(--shadow-ember)]"
              >
                {s.image && (
                  <div className="mb-4 -mx-6 -mt-6 h-36 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-ember/10 border border-ember/10 transition-all group-hover:bg-gradient-brand group-hover:border-transparent">
                  <s.icon className="h-5 w-5 text-ember transition-colors group-hover:text-white" />
                </div>
                <h3 className="mt-4 font-display font-bold text-lg">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-4 h-[2px] w-0 rounded-full bg-gradient-brand transition-all duration-500 group-hover:w-full" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUE ESCOLHER */}
      <section id="porque" className="bg-cream py-24">
        <div className="mx-auto max-w-6xl px-5 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="section-tag">Por que escolher</div>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl leading-[1.05]">
              Técnica, <span className="text-gradient">segurança</span> e atendimento que faz diferença
            </h2>
          </div>
          <div>
            <p className="text-muted-foreground leading-relaxed">
              Somos uma equipe especializada em <strong className="text-foreground">instalações elétricas
              residenciais e comerciais</strong>, com foco em automação de portões e
              infraestrutura para <strong className="text-foreground">carregamento de veículos elétricos</strong>.
              Trabalhamos com as melhores marcas do mercado e oferecemos garantia total no serviço.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {[
                { icon: ShieldCheck, label: "Garantia total" },
                { icon: Clock, label: "Atendimento rápido" },
                { icon: Award, label: "Marcas top de linha" },
                { icon: Wrench, label: "Equipe certificada" },
              ].map((b) => (
                <div
                  key={b.label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium"
                >
                  <b.icon className="h-4 w-4 text-ember" />
                  {b.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AVALIAÇÕES */}
      <section id="avaliacoes" className="bg-cream py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center max-w-2xl mx-auto">
            <div className="section-tag">Avaliações</div>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl">
              O que nossos clientes <span className="text-gradient">dizem</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Confira as avaliações reais de quem já contratou nossos serviços.
            </p>
          </div>
          <div className="mt-12">
            <GoogleReviews />
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="bg-white py-24">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <div className="section-tag">Fale conosco</div>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl">
            Solicite seu <span className="text-gradient">orçamento</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Escolha o serviço desejado e envie sua mensagem — respondemos em minutos.
          </p>

          <div className="mt-8 text-left">
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
              Serviço
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 font-medium focus:outline-none focus:border-ember focus:ring-2 focus:ring-ember/20 transition"
            >
              {services.map((s) => (
                <option key={s.id} value={s.id}>{s.title}</option>
              ))}
            </select>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href={waLink(waMsg)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-ember)] hover:brightness-110 transition"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp — {currentService.title}
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-border bg-white px-7 py-3.5 text-sm font-semibold hover:border-ember transition"
            >
              <Phone className="h-5 w-5 text-ember" />
              Ligar — {PHONE_DISPLAY}
            </a>
          </div>

          <div className="mt-6 rounded-xl border border-border bg-cream px-5 py-4 text-sm text-muted-foreground">
            <strong className="text-foreground">Resposta rápida:</strong> respondemos em minutos no
            horário comercial.
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-white">
        <div className="mx-auto max-w-6xl px-5 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2.5">
            <img src={logoAsset.url} alt="ADV Elétrica" className="h-8 w-8 object-contain" />
            <span className="text-muted-foreground">
              © {new Date().getFullYear()} ADV Elétrica. Todos os direitos reservados.
            </span>
          </div>
          <a
            href="https://mjsites.com.br"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-ember transition"
          >
            Desenvolvido por <strong className="text-foreground">MJSITES</strong>
          </a>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={waLink("Olá! Gostaria de um orçamento.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Fale no WhatsApp"
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-xl ring-4 ring-white transition hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* COOKIE BANNER */}
      {showCookie && (
        <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50 rounded-2xl border border-border bg-white/90 backdrop-blur-xl p-4 shadow-2xl">
          <div className="flex items-start gap-3">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-brand">
              <Cookie className="h-4 w-4 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm text-foreground">
                Usamos cookies para melhorar sua experiência. Ao continuar, você concorda com nossa
                política de privacidade (LGPD).
              </p>
              <div className="mt-3 flex gap-2 justify-end">
                <button
                  onClick={() => dismissCookie("reject")}
                  className="rounded-full border border-border bg-white px-4 py-1.5 text-xs font-medium hover:border-ember transition"
                >
                  Recusar
                </button>
                <button
                  onClick={() => dismissCookie("accept")}
                  className="rounded-full bg-gradient-brand px-4 py-1.5 text-xs font-semibold text-white hover:brightness-110 transition"
                >
                  Aceitar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
