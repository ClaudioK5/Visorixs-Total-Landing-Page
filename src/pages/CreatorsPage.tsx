import { site } from "../config/segmentSite";
import {
  benefits,
  differentiator,
  finalCta,
  howItWorks,
  testimonial,
  whatIs,
} from "../content/creators";
import { usePageMeta } from "../hooks/usePageMeta";
import { useReveal } from "../hooks/useReveal";
import analysisExample from "../assets/envision-analysis-example.png";
import creatorResult from "../assets/creator-result-candace.jpg";
import envisionAppUi from "../assets/envision-app-ui.png";
import "../App.css";

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
    case "specific":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v4l2.5 1.5" />
        </svg>
      );
    case "ask":
      return (
        <svg {...common}>
          <path d="M21 15a4 4 0 01-4 4H8l-5 3V7a4 4 0 014-4h10a4 4 0 014 4z" />
          <path d="M8.5 9.5h7M8.5 13h4.5" />
        </svg>
      );
    case "pro":
      return (
        <svg {...common}>
          <path d="M12 3l2.2 4.5 5 .7-3.6 3.5.9 5L12 14.8 7.5 16.7l.9-5L4.8 8.2l5-.7L12 3z" />
        </svg>
      );
    case "fast":
      return (
        <svg {...common}>
          <path d="M13 3L5 13h6l-1 8 9-12h-6l1-6z" />
        </svg>
      );
    default:
      return null;
  }
}

function CreatorsPage() {
  const pageRef = useReveal();
  usePageMeta(
    "Visorixs — Your AI creator consultant for every Reel",
    "Visorixs — upload your Reel or TikTok and get specific, professional-style feedback based on the real content of your video.",
  );

  return (
    <div className="page" ref={pageRef}>
      <header className="nav">
        <a href="#top" className="nav-brand">
          <span className="nav-mark" aria-hidden="true" />
          {site.productName}
        </a>
        <a href={site.appUrl} className="btn btn-primary btn-sm" rel="noopener noreferrer">
          {site.ctaLabel}
        </a>
      </header>

      <main id="top">
        {/* Mango hero */}
        <section className="hero band-mango">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-orb hero-orb-a" aria-hidden="true" />
          <div className="hero-orb hero-orb-b" aria-hidden="true" />
          <div className="hero-inner">
            <div className="hero-content">
              <p className="hero-eyebrow animate-in">{site.productName}</p>
              <h1 className="hero-brand animate-in delay-1">{site.tagline}</h1>
              <p className="hero-support animate-in delay-2">{site.description}</p>
              <div className="hero-ctas animate-in delay-3">
                <a href={site.appUrl} className="btn btn-primary btn-lg" rel="noopener noreferrer">
                  {site.ctaLabel}
                </a>
              </div>
              <p className="hero-note animate-in delay-4">{site.freeTrialNote}</p>
            </div>

            <div className="hero-product animate-in delay-2">
              <img
                src={envisionAppUi}
                alt="Visorixs app — upload a video and ask questions"
                width={1200}
                height={900}
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* White — What is Visorixs */}
        <section className="section band-cream section-what">
          <div className="section-inner narrow reveal">
            <p className="eyebrow">{whatIs.title}</p>
            <h2 className="what-headline">{whatIs.headline}</h2>
            <p className="what-body">{whatIs.body}</p>
          </div>
        </section>

        {/* Light mango — How it works */}
        <section className="section band-mango-soft section-how">
          <div className="section-inner reveal">
            <header className="section-header">
              <p className="eyebrow">How it works</p>
              <h2>Upload. Ask. Get answers.</h2>
            </header>

            <ol className="flow">
              {howItWorks.map((item, i) => (
                <li key={item.step} className="flow-step">
                  <div className="flow-main">
                    <span className="flow-num">{item.step}</span>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.body}</p>
                    </div>
                  </div>
                  {i < howItWorks.length - 1 ? (
                    <span className="flow-arrow" aria-hidden="true">
                      →
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* White — Benefits */}
        <section className="section band-cream section-benefits">
          <div className="section-inner">
            <header className="section-header">
              <p className="eyebrow">What you get</p>
              <h2>Clarity on every Reel</h2>
            </header>

            <div className="benefit-grid">
              {benefits.map((b) => (
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

        {/* Strong mango — Differentiator */}
        <section className="section band-mango-strong section-diff">
          <div className="section-inner diff-grid">
            <div className="diff-copy">
              <p className="eyebrow">{differentiator.eyebrow}</p>
              <h2>{differentiator.title}</h2>
              <p>{differentiator.body}</p>
            </div>
            <figure className="diff-shot">
              <img
                src={analysisExample}
                alt={differentiator.imageAlt}
                width={1200}
                height={800}
                decoding="async"
              />
            </figure>
          </div>
        </section>

        {/* White — Creator result */}
        <section className="section band-cream section-proof">
          <div className="section-inner">
            <header className="section-header">
              <p className="eyebrow">Creator result</p>
              <h2>What creators are reporting</h2>
            </header>

            <div className="proof-card">
              <figure className="proof-shot">
                <img
                  src={creatorResult}
                  alt={testimonial.imageAlt}
                  width={720}
                  height={1280}
                  decoding="async"
                />
              </figure>

              <div className="proof-copy">
                <p className="proof-stat">+80%</p>
                <blockquote>
                  <p>“{testimonial.quote}”</p>
                  <footer>
                    <span>{testimonial.attribution}</span>
                    <small>{testimonial.disclaimer}</small>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Premium final CTA */}
        <section className="section-final" aria-labelledby="final-heading">
          <div className="final-glow" aria-hidden="true" />
          <div className="final-card">
            <p className="final-eyebrow">Ready for your next Reel?</p>
            <h2 id="final-heading">{finalCta.title}</h2>
            <p className="final-support">{finalCta.support}</p>
            <a
              href={site.appUrl}
              className="btn btn-primary btn-lg final-cta-btn"
              rel="noopener noreferrer"
            >
              {site.ctaLabel}
            </a>
            <p className="final-note">{site.freeTrialNote}</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <span className="footer-brand">{site.productName}</span>
          <a href={site.appUrl} rel="noopener noreferrer">
            Open the app
          </a>
        </div>
      </footer>
    </div>
  );
}

export default CreatorsPage;
