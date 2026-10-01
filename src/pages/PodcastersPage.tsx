import { Link } from "react-router-dom";
import { site } from "../config/segmentSite";
import {
  podcastBenefits,
  podcastDifferentiator,
  podcastExamples,
  podcastFinalCta,
  podcastHero,
  podcastHowItWorks,
  podcastWhatIs,
} from "../content/podcast";
import { usePageMeta } from "../hooks/usePageMeta";
import { useReveal } from "../hooks/useReveal";
import "../App.css";
import "../podcast.css";

function BenefitIcon({ name }: { name: string }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "find":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="6.5" />
          <path d="M16 16.5L20 20.5" />
        </svg>
      );
    case "time":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "insights":
      return (
        <svg {...common}>
          <path d="M8 4h7l4 4v12a1 1 0 01-1 1H8a1 1 0 01-1-1V5a1 1 0 011-1z" />
          <path d="M15 4v4h4" />
          <path d="M9 13h6M9 17h4" />
        </svg>
      );
    default:
      return null;
  }
}

function HeroMock() {
  return (
    <div className="pod-mock">
      <div className="pod-mock-top">
        <span className="nav-mark" aria-hidden="true" />
        <strong>Visorix</strong>
        <span className="pod-mock-pill">Example</span>
      </div>
      <div className="pod-mock-card">
        <p className="pod-mock-status">Episode analysis</p>
        <p className="pod-mock-episode">Founder interview · 58:12</p>
        <div className="pod-mock-question">
          <span>Your question</span>
          <p>“{podcastHero.heroPrompt}”</p>
        </div>
        <div className="pod-mock-answer">
          <p>
            <span className="pod-time">{podcastHero.heroTime}</span>
            {" — "}
            {podcastHero.heroAnswer}
          </p>
        </div>
        <div className="pod-track" aria-hidden="true">
          <span className="pod-track-fill" />
          <span className="pod-track-pin" />
        </div>
        <div className="pod-track-labels" aria-hidden="true">
          <span>0:00</span>
          <span>{podcastHero.heroTime}</span>
          <span>58:12</span>
        </div>
      </div>
    </div>
  );
}

function DiffMock() {
  return (
    <div className="pod-mock pod-mock-diff">
      <div className="pod-mock-top">
        <span className="nav-mark" aria-hidden="true" />
        <strong>Visorix</strong>
        <span className="pod-mock-pill">Example</span>
      </div>
      <div className="pod-mock-card">
        <p className="pod-mock-status">Full episode</p>
        <p className="pod-mock-episode">Same recording · two moments</p>
        <div className="pod-mock-question">
          <span>Your question</span>
          <p>“{podcastDifferentiator.prompt}”</p>
        </div>
        <ul className="pod-mock-moments">
          {podcastDifferentiator.answers.map((item) => (
            <li key={item.time}>
              <span className="pod-time">{item.time}</span>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function PodcastersPage() {
  const pageRef = useReveal();
  usePageMeta(
    "Visorix for Podcasts — Understand an entire podcast without rewatching it",
    "Upload a podcast episode and let Visorix find discussions, timestamps, summaries, highlights and answers — without rewatching the recording.",
  );

  return (
    <div className="page" ref={pageRef}>
      <header className="nav">
        <a href="#top" className="nav-brand">
          <span className="nav-mark" aria-hidden="true" />
          Visorix
        </a>
        <div className="nav-actions">
          <Link to="/pricing" className="nav-link">
            Pricing
          </Link>
          <a href={site.appUrl} className="btn btn-primary btn-sm" rel="noopener noreferrer">
            {podcastHero.cta}
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero band-mango">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-orb hero-orb-a" aria-hidden="true" />
          <div className="hero-orb hero-orb-b" aria-hidden="true" />
          <div className="hero-inner">
            <div className="hero-content">
              <p className="hero-eyebrow animate-in">{podcastHero.eyebrow}</p>
              <h1 className="hero-brand animate-in delay-1">{podcastHero.headline}</h1>
              <p className="hero-support animate-in delay-2">{podcastHero.subheadline}</p>
              <div className="hero-ctas animate-in delay-3">
                <a href={site.appUrl} className="btn btn-primary btn-lg" rel="noopener noreferrer">
                  {podcastHero.cta}
                </a>
              </div>
              <p className="hero-note animate-in delay-4">{site.freeTrialNote}</p>
            </div>

            <div className="hero-product animate-in delay-2">
              <HeroMock />
            </div>
          </div>
        </section>

        <section className="section band-cream section-what">
          <div className="section-inner narrow reveal">
            <p className="eyebrow">{podcastWhatIs.eyebrow}</p>
            <h2 className="what-headline">{podcastWhatIs.headline}</h2>
            <p className="what-body">{podcastWhatIs.body}</p>
          </div>
        </section>

        <section className="section band-mango-soft section-how">
          <div className="section-inner reveal">
            <header className="section-header">
              <p className="eyebrow">How it works</p>
              <h2>Upload. Ask. Get answers.</h2>
            </header>

            <ol className="flow">
              {podcastHowItWorks.map((item, i) => (
                <li key={item.step} className="flow-step">
                  <div className="flow-main">
                    <span className="flow-num">{item.step}</span>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.body}</p>
                    </div>
                  </div>
                  {i < podcastHowItWorks.length - 1 ? (
                    <span className="flow-arrow" aria-hidden="true">
                      →
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section band-cream section-benefits">
          <div className="section-inner">
            <header className="section-header">
              <p className="eyebrow">What you get</p>
              <h2>Everything you need to navigate an episode faster.</h2>
            </header>

            <div className="benefit-grid">
              {podcastBenefits.map((b) => (
                <article key={b.title} className="benefit-item">
                  <div className="benefit-icon">
                    <BenefitIcon name={b.icon} />
                  </div>
                  <h3>{b.title}</h3>
                  <p>{b.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section band-mango-strong section-diff">
          <div className="section-inner diff-grid">
            <div className="diff-copy">
              <p className="eyebrow">{podcastDifferentiator.eyebrow}</p>
              <h2>{podcastDifferentiator.title}</h2>
              <p>{podcastDifferentiator.body}</p>
            </div>
            <figure className="diff-shot pod-shot">
              <DiffMock />
            </figure>
          </div>
        </section>

        <section className="section band-cream section-examples" aria-labelledby="examples-heading">
          <div className="section-inner">
            <header className="section-header">
              <p className="eyebrow">See what you can ask</p>
              <h2 id="examples-heading">Ask Visorix about anything inside the episode.</h2>
              <p className="example-note">Product examples. Not customer testimonials.</p>
            </header>

            <div className="example-grid">
              {podcastExamples.map((example) => (
                <article key={example.question} className="example-card">
                  <p className="example-badge">Example</p>
                  <p className="example-question">“{example.question}”</p>
                  <div className="example-answer">
                    {example.kind === "timestamp" ? (
                      <p>
                        <span className="pod-time">{example.time}</span>
                        {" — "}
                        {example.answer}
                      </p>
                    ) : null}
                    {example.kind === "list" ? (
                      <ol className="example-list">
                        {example.items.map((item, index) => (
                          <li key={item}>
                            <span>{index + 1}</span>
                            <p>{item}</p>
                          </li>
                        ))}
                      </ol>
                    ) : null}
                    {example.kind === "moments" ? (
                      <ul className="example-list">
                        {example.moments.map((moment) => (
                          <li key={moment.time}>
                            <span className="pod-time">{moment.time}</span>
                            <p>{moment.text}</p>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-final" aria-labelledby="final-heading">
          <div className="final-glow" aria-hidden="true" />
          <div className="final-card">
            <p className="final-eyebrow">{podcastFinalCta.eyebrow}</p>
            <h2 id="final-heading">{podcastFinalCta.title}</h2>
            <p className="final-support">{podcastFinalCta.body}</p>
            <a
              href={site.appUrl}
              className="btn btn-primary btn-lg final-cta-btn"
              rel="noopener noreferrer"
            >
              {podcastFinalCta.cta}
            </a>
            <p className="final-note">{site.freeTrialNote}</p>
          </div>
        </section>
      </main>

      <footer className="footer footer-podcast">
        <div className="footer-inner">
          <span className="footer-brand">Visorix</span>
          <a href={site.appUrl} rel="noopener noreferrer">
            Open the app
          </a>
          <a href="/podcasters" aria-current="page">
            Podcasts
          </a>
        </div>
      </footer>
    </div>
  );
}

export default PodcastersPage;
