import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/contact-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WorkGrid } from "@/components/work-grid";
import { practice } from "@/data/portfolio";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div id="top">
      <SiteHeader />
      <main>
        <Hero />
        <WorkGrid />
        <About />
        <Practice />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-10 pb-16 md:px-8 md:pt-16 md:pb-24">
      <p className="rise text-xs tracking-widest text-muted uppercase">Studio index · Addis Ababa</p>
      <h1 className="rise rise-2 mt-5 font-display text-hero text-fg italic">
        Rooms, marks,
        <br />
        and the quiet
        <br />
        between them.
      </h1>
      <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-12 md:gap-6">
        <p className="rise rise-3 max-w-xl text-lg text-fg md:col-span-6">
          Daniel Nigatu designs architecture studies, interiors, and identity systems.
          The palette stays small. The light does most of the talking.
        </p>
        <dl className="rise rise-4 grid grid-cols-2 gap-x-6 gap-y-5 text-sm md:col-span-5 md:col-start-8">
          <div>
            <dt className="text-xs tracking-widest text-muted uppercase">Based</dt>
            <dd className="mt-1 text-fg">Addis Ababa</dd>
          </div>
          <div>
            <dt className="text-xs tracking-widest text-muted uppercase">Practice</dt>
            <dd className="mt-1 text-fg">Independent studio</dd>
          </div>
          <div>
            <dt className="text-xs tracking-widest text-muted uppercase">Now</dt>
            <dd className="mt-1 text-fg">Open for a commission</dd>
          </div>
          <div>
            <dt className="text-xs tracking-widest text-muted uppercase">This issue</dt>
            <dd className="mt-1 text-fg tabular-nums">08 studies</dd>
          </div>
        </dl>
      </div>
      <a
        href="#work"
        className="mt-12 inline-flex min-h-11 items-center gap-3 text-sm text-accent"
      >
        <span className="h-px w-10 bg-accent" aria-hidden="true" />
        Enter the index
      </a>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-12 md:px-8 md:py-20">
        <div className="md:col-span-4">
          <p className="text-xs tracking-widest text-muted uppercase">About</p>
          <h2 className="mt-2 font-display text-section text-fg">A studio, not a department.</h2>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <p className="text-lg text-fg">
            I draw spaces before they exist, then the marks that help people find them.
            Most of the work is a study in proportion: how a wall meets light, how a word
            sits on a sheet, how a room feels at four in the afternoon.
          </p>
          <p className="mt-5 font-display text-2xl text-fg italic md:text-3xl">
            Light first. Then the wall. Then the word that names it.
          </p>
          <p className="mt-5 text-muted">
            Commissions run from a single room to a full identity. I work directly — the
            person who has to live with the result is the person I talk to.
          </p>
          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-6">
            <div>
              <dt className="text-xs tracking-widest text-muted uppercase">Studies</dt>
              <dd className="mt-1 font-display text-3xl text-fg tabular-nums">08</dd>
            </div>
            <div>
              <dt className="text-xs tracking-widest text-muted uppercase">Disciplines</dt>
              <dd className="mt-1 font-display text-3xl text-fg tabular-nums">04</dd>
            </div>
            <div>
              <dt className="text-xs tracking-widest text-muted uppercase">City</dt>
              <dd className="mt-1 font-display text-3xl text-fg tabular-nums">01</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

function Practice() {
  return (
    <section id="practice" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="max-w-xl">
          <p className="text-xs tracking-widest text-muted uppercase">Practice</p>
          <h2 className="mt-2 font-display text-section text-fg">What the studio actually does.</h2>
        </div>
        <dl className="mt-10 border-t border-line">
          {practice.map((item) => (
            <div
              key={item.index}
              className="grid gap-2 border-b border-line py-6 md:grid-cols-12 md:items-baseline md:gap-6"
            >
              <dt className="font-display text-2xl text-fg md:col-span-4">{item.name}</dt>
              <dd className="text-muted md:col-span-7">{item.detail}</dd>
              <span className="text-sm text-muted tabular-nums md:col-span-1 md:text-right">{item.index}</span>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-12 md:px-8 md:py-20">
        <div className="md:col-span-4">
          <p className="text-xs tracking-widest text-muted uppercase">Note</p>
          <h2 className="mt-2 font-display text-section text-fg">Tell me the room, the mark, or the deadline.</h2>
          <p className="mt-4 text-muted">
            A short note is enough. I’ll open it in your mail app so you can send it from your own address.
          </p>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
