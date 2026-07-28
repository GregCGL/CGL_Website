"use client";

import { useEffect, useState, type CSSProperties } from "react";

const expertise = [
  ["01", "Transformatie & groei", "Verandering richting geven en realiseren, met leiderschap, draagvlak, ritme en duidelijke prioriteiten."],
  ["02", "Strategie & sturing", "Ambitie vertalen naar scherpe keuzes, een werkbare roadmap en een beslissingsritme dat uitvoering versnelt."],
  ["03", "AI-adoptie & processen", "AI-kansen selecteren, teams praktisch opleiden en waardevolle toepassingen duurzaam in processen verankeren."],
  ["04", "Fractional leadership", "Senior leiderschap als fractional CFO, fractional CEO of interim executive — flexibel en rechtstreeks betrokken."],
  ["05", "Finance & performance", "Cashflow, KPI’s en rapportering omzetten in transparantie, betere beslissingen en aantoonbare voortgang."],
  ["06", "Boardroom partnership", "Discrete, onafhankelijke sparring voor ondernemers en management tijdens groei, verandering en moeilijke keuzes."],
];

const steps = [
  ["01", "Scherpstellen", "We brengen de echte uitdaging, beslissingscontext en doelstellingen terug tot de essentie."],
  ["02", "Structureren", "We maken prioriteiten, cijfers, verantwoordelijkheden en richting helder."],
  ["03", "Realiseren", "We vertalen beslissingen naar uitvoering, ritme en zichtbare voortgang."],
  ["04", "Verankeren", "We integreren processen, dashboards, governance en leiderschap duurzaam."],
];

const cases = [
  ["Transformatie & strategie", "Van ambitie naar uitvoerbare verandering.", "Strategie, leiderschap en uitvoering komen samen in een heldere roadmap met eigenaarschap en zichtbare voortgang."],
  ["AI-adoptie", "Van losse AI-tools naar praktische bedrijfswaarde.", "We prioriteren relevante toepassingen, versterken AI-vaardigheden en verankeren wat werkt in teams en processen."],
  ["Fractional leadership", "Senior leiderschap wanneer richting én uitvoering tellen.", "Een fractional CFO, fractional CEO of interim executive stapt mee in, brengt focus en versnelt cruciale beslissingen."],
];

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCase, setActiveCase] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    let frame = 0;
    const moveLight = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
        document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
        document.body.classList.add("pointer-active");
      });
    };
    const hideLight = () => document.body.classList.remove("pointer-active");
    window.addEventListener("pointermove", moveLight, { passive: true });
    document.documentElement.addEventListener("mouseleave", hideLight);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("pointermove", moveLight);
      document.documentElement.removeEventListener("mouseleave", hideLight);
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="progress" style={{ width: `${progress}%` }} />
      <div className="cursor-light" aria-hidden="true"><span /><i /></div>
      <header className="nav">
        <a className="brand" href="#top" aria-label="CGL home">
          <span>CGL</span><small>Change &amp; Growth<br />Leadership</small>
        </a>
        <nav className={menuOpen ? "navlinks open" : "navlinks"} aria-label="Hoofdnavigatie">
          <a href="#ai" onClick={() => setMenuOpen(false)}>AI &amp; uw bedrijf</a>
          <a href="#expertise" onClick={() => setMenuOpen(false)}>Expertise</a>
          <a href="#werkwijze" onClick={() => setMenuOpen(false)}>Werkwijze</a>
          <a href="#impact" onClick={() => setMenuOpen(false)}>Impact</a>
          <a href="#over" onClick={() => setMenuOpen(false)}>Over CGL</a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Bespreek uw uitdaging</a>
        </nav>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Menu openen">Menu</button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="eyebrow reveal">Transformation <i /> Strategy <i /> AI adoption <i /> Fractional CFO <i /> Fractional CEO</div>
          <h1 className="reveal">Helderheid<br />brengt <em>beweging.</em></h1>
          <div className="hero-bottom reveal">
            <p>Transformatie, strategie en praktische AI-adoptie, versterkt met fractional leiderschap wanneer uw organisatie het nodig heeft.</p>
            <div className="actions">
              <a className="button primary" href="#contact">Bespreek uw uitdaging <span>↗</span></a>
              <a className="button ghost" href="#expertise">Ontdek onze expertise <span>↓</span></a>
            </div>
          </div>
          <div className="hero-orbit" aria-hidden="true"><span /><i /><b /></div>
          <div className="hero-mark" aria-hidden="true"><span>Clarity</span><span>Direction</span><span>Momentum</span></div>
        </section>

        <div className="trust" aria-label="Kernwaarden">
          {["Transformatie & strategie", "Praktische AI-adoptie", "Fractional CFO & CEO", "Finance & performance", "Discrete samenwerking"].map((item) => <span key={item}>{item}</span>)}
        </div>

        <section className="ai-section" id="ai">
          <div className="ai-flow" aria-hidden="true">
            {Array.from({ length: 12 }, (_, index) => <i key={index} style={{ "--i": index } as CSSProperties} />)}
          </div>
          <div className="ai-copy reveal">
            <span className="kicker">01 — AI &amp; uw bedrijf</span>
            <h2>Van AI begrijpen<br />naar AI <em>gebruiken.</em></h2>
            <p className="lead">AI raakt niet alleen finance. Het verandert hoe uw mensen werken, hoe processen lopen en hoe beslissingen worden genomen.</p>
            <p>CGL koppelt bedrijfsinzicht en implementatiekracht aan de didactische expertise van een gespecialiseerde AI-trainer. Zo krijgt uw team niet alleen inspiratie, maar ook vaardigheden en toepassingen die morgen bruikbaar zijn.</p>
            <div className="ai-partnership"><span>CGL</span><b>×</b><span>AI-trainer</span><small>Bedrijfsadvies · opleiding · implementatie</small></div>
          </div>
          <div className="ai-panel reveal">
            <div className="panel-top"><span><b>CGL</b> / AI Navigator</span><span className="status">● Vier concrete routes</span></div>
            <p className="prompt">Waar kan AI uw bedrijf versterken?</p>
            {["AI-workshops voor teams", "Slimmere bedrijfsprocessen", "AI in management & finance", "Van use case naar implementatie"].map((item, index) => <a key={item} href="#contact"><span>0{index + 1}</span>{item}<b>→</b></a>)}
            <small>Kies een richting en bespreek rechtstreeks wat voor uw organisatie relevant is.</small>
          </div>
        </section>

        <section className="light-section expertise-section" id="expertise">
          <div className="section-head reveal">
            <div><span className="kicker">02 — Expertise</span><h2>Diepgang die<br />tot uitvoering leidt.</h2></div>
            <p>Groei begint met heldere keuzes en menselijk leiderschap. CGL brengt structuur en energie waar het vastloopt.</p>
          </div>
          <div className="expertise-signals reveal" aria-label="Wanneer CGL inschakelen">
            <span>Wanneer CGL?</span>
            <a href="#contact">Transformatie vraagt richting <b>↗</b></a>
            <a href="#contact">Strategie moet uitvoering worden <b>↗</b></a>
            <a href="#ai">AI moet praktische waarde leveren <b>↗</b></a>
            <a href="#contact">Executive slagkracht is tijdelijk nodig <b>↗</b></a>
          </div>
          <div className="expertise-grid">
            {expertise.map(([number, title, copy]) => (
              <article className="expertise-card reveal" key={title}>
                <span className="card-number">{number}</span><span className="card-arrow">↗</span>
                <h3>{title}</h3><p>{copy}</p>
              </article>
            ))}
          </div>
          <div className="expertise-next reveal"><p><b>Niet zeker welke expertise u nodig heeft?</b><br />Vertrek van uw uitdaging. CGL helpt de juiste vorm scherpstellen.</p><a className="button expertise-button" href="#contact">Plan een eerste gesprek <span>↗</span></a></div>
        </section>

        <section className="route-section" id="werkwijze">
          <div className="route-intro reveal"><span className="kicker gold">03 — Werkwijze</span><h2>Geen hol advies.<br />Wel <em>verandering.</em></h2><p>Pragmatisch, discreet en afgestemd op uw realiteit. Van scherpe diagnose tot duurzame verankering.</p></div>
          <div className="route">
            <div className="route-line"><span style={{ width: `${Math.min(100, Math.max(8, progress * 1.35 - 14))}%` }} /></div>
            {steps.map(([number, title, copy]) => <article className="step reveal" key={title}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </section>

        <section className="impact-section" id="impact">
          <div className="section-head reveal">
            <div><span className="kicker">04 — Typische vraagstukken</span><h2>Impact begint<br />bij de juiste vraag.</h2></div>
            <p>Elke context is anders. Daarom tonen we onze impact als concrete vraagstukken, zonder vertrouwelijke resultaten te claimen.</p>
          </div>
          <div className="case-tabs reveal" role="tablist">
            {cases.map((item, index) => <button className={activeCase === index ? "active" : ""} onClick={() => setActiveCase(index)} key={item[0]} role="tab">{item[0]}</button>)}
          </div>
          <article className="case-display reveal">
            <span>Toepassing / 0{activeCase + 1}</span>
            <h3>{cases[activeCase][1]}</h3>
            <div><p>{cases[activeCase][2]}</p><dl><dt>Focus</dt><dd>{activeCase === 0 ? "Richting · Verandering" : activeCase === 1 ? "Mensen · Processen" : "CFO · CEO"}</dd><dt>Aanpak</dt><dd>{activeCase === 0 ? "Strategie · Realisatie" : activeCase === 1 ? "Leren · Implementeren" : "Instappen · Leiden"}</dd><dt>Resultaat</dt><dd>Helderheid · Beweging</dd></dl></div>
          </article>
          <div className="engagement reveal">
            <div className="engagement-intro"><span className="kicker">Samenwerkingsvormen</span><h3>De juiste intensiteit<br />voor uw moment.</h3><p>Geen standaardpakket. Wel een duidelijke vorm, verantwoordelijkheid en verwacht resultaat.</p></div>
            <div className="engagement-options">
              <article><span>01</span><div><h4>Transformatiesprint</h4><p>Van uitdaging naar scherpe keuzes, een gedragen roadmap en een concreet eerste uitvoeringsritme.</p><small>Voor richting en beweging</small></div></article>
              <article><span>02</span><div><h4>AI-adoptietraject</h4><p>Van AI-awareness en use cases naar praktische toepassingen, werkafspraken en verankering in uw team.</p><small>Voor leren en waarde realiseren</small></div></article>
              <article><span>03</span><div><h4>Fractional leadership</h4><p>Senior verantwoordelijkheid als fractional CFO, fractional CEO of interim executive, rechtstreeks betrokken bij uitvoering.</p><small>Voor slagkracht en continuïteit</small></div></article>
            </div>
          </div>
        </section>

        <section className="about-section" id="over">
          <div className="portrait reveal"><div className="portrait-monogram">GDV</div><span>Profielbeeld<br />Greg De Vadder</span></div>
          <div className="about-copy reveal">
            <span className="kicker gold">05 — Over CGL</span>
            <blockquote>“Samen bouwen we aan een veerkrachtige organisatie die klaar is voor morgen.”</blockquote>
            <p>Transformatie, strategische helderheid, praktische AI-adoptie en executive daadkracht — naast ondernemer en management.</p>
            <h3>Greg De Vadder</h3>
            <ul><li>Transformation &amp; strategy leader</li><li>Fractional CFO &amp; CEO</li><li>AI-adoptie &amp; implementatie</li><li>Finance &amp; performance</li><li>Executive MBA</li></ul>
          </div>
        </section>

        <section className="testimonial">
          <span className="quote">“</span>
          <p>“Greg heeft een strategische denkwijze en uitgebreide financiële expertise, met focus op groei en efficiëntie. Hij legt de nadruk op daadkracht en beslissingen om stappen vooruit te kunnen zetten.”</p>
          <p className="testimonial-detail">“Greg past zich goed aan naargelang de persoon die voor hem zit en schept vertrouwen. Onderling vertrouwen is het begin van elke goede samenwerking.”</p>
          <div><b>Jim Smets</b><span>ARTISO NV</span></div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy reveal">
            <span className="kicker gold">06 — Contact</span>
            <h2>Een uitdaging<br />die om richting <em>vraagt?</em></h2>
            <p>Een eerste gesprek is discreet, concreet en zonder verplichtingen.</p>
            <address className="contact-details"><a href="tel:+32498163007">+32 498 16 30 07</a><a href="mailto:greg@cglpartners.be">greg@cglpartners.be</a><span>Kloosterveld 40 · 2960 Brecht · België</span><span>BTW BE 1022.024.761</span><a href="https://www.linkedin.com/in/greg-de-vadder-mba-14735039/" target="_blank" rel="noreferrer">LinkedIn</a></address>
          </div>
          <div className="contact-actions reveal">
            <span className="contact-label">Rechtstreeks contact</span>
            <a className="contact-action primary-action" href="tel:+32498163007"><span><small>Bel Greg rechtstreeks</small>+32 498 16 30 07</span></a>
            <a className="contact-action" href="mailto:greg@cglpartners.be?subject=Kennismaking%20met%20CGL"><span><small>Stuur een e-mail</small>greg@cglpartners.be</span></a>
            <a className="contact-action" href="https://www.linkedin.com/in/greg-de-vadder-mba-14735039/" target="_blank" rel="noreferrer"><span><small>Connecteer professioneel</small>LinkedIn-profiel</span></a>
            <p>Geen formulier, geen wachtrij. U komt rechtstreeks bij Greg terecht.</p>
          </div>
        </section>
      </main>

      <footer><a className="brand" href="#top"><span>CGL</span><small>Change &amp; Growth<br />Leadership</small></a><p>© {new Date().getFullYear()} CGL — Change &amp; Growth Leadership BV<br />Kloosterveld 40 · 2960 Brecht · België · BTW BE 1022.024.761</p><div><a href="tel:+32498163007">Bel +32 498 16 30 07</a><a href="mailto:greg@cglpartners.be">E-mail</a><a href="https://www.linkedin.com/in/greg-de-vadder-mba-14735039/" target="_blank" rel="noreferrer">LinkedIn</a></div></footer>

    </>
  );
}
