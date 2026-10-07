import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, Github, Linkedin, Youtube, Twitter, Codepen, BookOpen } from "lucide-react";
import planet from "@/assets/planet.png";
import spacecraft from "@/assets/spacecraft.png";
import landscape from "@/assets/landscape.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chirag Lohar — Software Developer" },
      { name: "description", content: "Personal index of Chirag Lohar, software developer. Find me across the web." },
      { property: "og:title", content: "Chirag Lohar — Software Developer" },
      { property: "og:description", content: "Personal index of Chirag Lohar, software developer." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const links = [
  { name: "X / Twitter", icon: Twitter, href: "https://x.com" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
  { name: "GitHub", icon: Github, href: "https://github.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "CodePen", icon: Codepen, href: "https://codepen.io" },
  { name: "Blog", icon: BookOpen, href: "https://medium.com" },
];

const focus = ["Web platforms", "Developer tools", "UI engineering", "Open source", "Side quests"];
const stats: [string, number][] = [["Curiosity", 90], ["Code", 85], ["Design", 70], ["Chai", 96], ["Energy", 100]];

function useClock() {
  const [t, setT] = useState("");
  useEffect(() => {
    const f = () => setT(new Date().toISOString().slice(11, 19));
    f();
    const id = setInterval(f, 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

function Index() {
  const time = useClock();
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* top bar */}
      <div className="desktop-progress absolute right-10 top-8 hidden items-center gap-6 lg:flex">
        <span className="label text-muted-foreground"><b className="text-foreground">Learn</b> / Build / Ship / Repeat</span>
        <div className="h-0.5 w-56 bg-border"><div className="h-full w-1/4 bg-primary" /></div>
      </div>

      <div className="portfolio-content relative z-10 mx-auto grid max-w-[1500px] gap-10 px-6 pt-8 lg:grid-cols-[1fr_1fr] lg:px-10">
        <div>
          <div className="identity-row grid grid-cols-[auto_minmax(0,1fr)] items-start gap-5 sm:flex sm:gap-10">
            {/* badge */}
            <div className="index-badge relative w-52 shrink-0 bg-primary p-5 text-primary-foreground [clip-path:polygon(0_0,85%_0,100%_20%,100%_100%,0_100%)]">
              <div className="font-display text-7xl leading-none">01</div>
              <div className="label mt-4">Personal Index</div>
              <div className="mt-2 h-0.5 bg-primary-foreground/60" />
            </div>
            <div className="coordinates min-w-0 border-l-2 border-primary pl-4 text-xs leading-6 tracking-widest">
              <div className="label text-muted-foreground">Coordinates</div>
              <div className="font-bold">MILKY WAY · INDIA</div>
              <div className="text-muted-foreground">UTC {time}</div>
              <div className="hatch mt-1 h-2 w-20" />
            </div>
          </div>

          <div className="mobile-progress mt-5 flex items-center gap-4 lg:hidden">
            <span className="label min-w-0 text-muted-foreground"><b className="text-foreground">Learn</b> / Build / Ship / Repeat</span>
            <div className="h-0.5 w-14 shrink-0 bg-border"><div className="h-full w-1/4 bg-primary" /></div>
          </div>

          <h1 className="portfolio-name animate-rise mt-12 font-display text-6xl leading-[0.9] sm:text-8xl xl:text-9xl">
            CHIRAG<br />LOHAR <span className="hatch inline-block h-8 w-20 align-middle" />
          </h1>
          <div className="mt-6 h-1 w-14 bg-primary" />
          <p className="portfolio-intro mt-6 max-w-lg text-base leading-7">
            Software developer — building fast, thoughtful products for the web and beyond.
            <span className="animate-blink ml-1 inline-block h-4 w-2 bg-primary align-middle" />
          </p>

          <div className="social-grid mt-10 grid max-w-3xl grid-cols-2 gap-5 sm:grid-cols-3">
            {links.map((l, i) => (
              <a key={l.name} href={l.href} target="_blank" rel="noreferrer"
                className="social-link group relative flex items-center gap-3 border border-border bg-card p-5">
                <span className="absolute -left-1 -top-1 h-3 w-3 border-l-2 border-t-2 border-primary" />
                <l.icon className="h-6 w-6 shrink-0" />
                <div className="min-w-0">
                  <div className="social-link-label label text-muted-foreground">Fig. 0{i + 2}</div>
                  <div className="truncate text-sm">{l.name}</div>
                </div>
                <ArrowUpRight className="ml-auto h-4 w-4 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                <span className="hatch absolute bottom-1 left-3 h-1 w-16" />
                <span className="target-lock label" aria-hidden="true">Target lock <ArrowUpRight className="h-3 w-3" /></span>
              </a>
            ))}
          </div>

          <p className="portfolio-contact mt-8 border-l-4 border-primary pl-6 text-sm leading-6">
            Want to collaborate?<br />
             Reach out on <a className="contact-link underline decoration-primary underline-offset-4" href="https://x.com">X</a> or{" "}
             <a className="contact-link underline decoration-primary underline-offset-4" href="https://linkedin.com">LinkedIn</a>.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 bottom-0 hidden border-l-2 border-primary pl-3 xl:block">
            <div className="label text-primary">Fig. 01</div>
            <div className="label text-muted-foreground">Launch vehicle</div>
            <div className="label text-muted-foreground">C-7 Cargo</div>
          </div>
          <div className="space-scene relative mx-auto aspect-square w-full max-w-[640px]" aria-label="Spacecraft floating in front of an orange planet">
            <img src={planet} alt="Orange planet" width={768} height={768}
              className="absolute left-[10%] top-[8%] w-[80%]" />
            <div className="spacecraft-levitate absolute inset-0">
              <img src={spacecraft} alt="C-7 spacecraft" width={768} height={768}
                className="spacecraft-vibrate h-full w-full object-contain" />
            </div>
          </div>

          <div className="focus-panel relative mt-4 ml-auto max-w-xs border border-border bg-card p-5">
            <span className="absolute -left-1 -top-1 h-3 w-3 border-l-2 border-t-2 border-primary" />
            <div className="label mb-3 font-bold">Current focus</div>
            <ul className="focus-list space-y-2">
              {focus.map((f) => (
                <li key={f} className="label flex items-center gap-3 text-muted-foreground">
                  <span className="h-2 w-2 bg-primary" />{f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="portfolio-bottom relative mt-10 flex flex-col">
        <img src={landscape} alt="" width={1920} height={640} loading="lazy" className="w-full mix-blend-multiply" />
        <div className="absolute bottom-8 left-8 label text-primary-foreground">
          Turning ideas<br />into shipped things
          <div className="mt-2 h-0.5 w-10 bg-primary" />
        </div>
        <div className="status-panel order-first mx-6 mb-8 border border-border bg-card lg:absolute lg:bottom-8 lg:right-8 lg:order-none lg:mx-0 lg:mb-0 lg:w-[520px]">
          <div className="flex items-center justify-between">
            <div className="label bg-primary px-4 py-2 font-bold text-primary-foreground [clip-path:polygon(0_0,100%_0,92%_100%,0_100%)] pr-12">▸ System status</div>
            <span className="label pr-4 text-muted-foreground">All systems go</span>
          </div>
          <div className="space-y-3 p-4">
            {stats.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[110px_1fr_40px] items-center gap-3">
                <span className="label">{k}</span>
                <div className="flex gap-0.5">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <span key={i} className={`h-2 flex-1 ${i < Math.round(v / 6.25) ? "bg-primary" : "border border-border"}`} />
                  ))}
                </div>
                <span className="text-right text-xs">{v}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
