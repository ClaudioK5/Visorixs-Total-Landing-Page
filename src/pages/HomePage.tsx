import { Link } from "react-router-dom";
import { site } from "../config/site";
import {
  benefits,
  benefitsSection,
  differentiator,
  finalCta,
  howItWorks,
  howItWorksSection,
  useCases,
  useCasesSection,
  whatIs,
} from "../content/copy";
import { pricingTeaser } from "../content/pricing";
import { usePageMeta } from "../hooks/usePageMeta";
import { useReveal } from "../hooks/useReveal";
import analysisExample from "../assets/envision-analysis-example.png";
import envisionAppUi from "../assets/envision-app-ui.png";
import "../App.css";

const iconProps = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function BenefitIcon({ name }: { name: string }) {
  switch (name) {
    case "find":
      return (
        <svg {...iconProps}>
          <circle cx="11" cy="11" r="6.5" />
          <path d="M16 16.5L20 20.5" />
        </svg>
      );
    case "analyze":
      return (
        <svg {...iconProps}>
          <path d="M4 19V5M4 19h16" />
          <path d="M8 15v-4M12 15V8M16 15v-6" />
        </svg>
      );
    case "understand":
      return (
        <svg {...iconProps}>
          <path d="M21 15a4 4 0 01-4 4H8l-5 3V7a4 4 0 014-4h10a4 4 0 014 4z" />
          <path d="M8.5 9.5h7M8.5 13h4.5" />
        </svg>
      );
    case "act":
      return (
        <svg {...iconProps}>
          <path d="M13 3L5 13h6l-1 8 9-12h-6l1-6z" />
        </svg>
      );
    default:
      return null;
  }
}

function UseCaseIcon({ name }: { name: string }) {
  switch (name) {
    case "media":
      return (
        <svg {...iconProps}>
          <rect x="3" y="5" width="18" height="14" rx="3" />
          <path d="M10 9.5l5.5 2.5L10 14.5v-5z" />
        </svg>
      );
    case "longform":
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "review":
      return (
        <svg {...iconProps}>
          <path d="M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12z" />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      );
    case "custom":
      return (
        <svg {...iconProps}>
          <path d="M4 7h16M4 12h10M4 17h13" />
          <circle cx="16" cy="7" r="2" />
          <circle cx="10" cy="12" r="2" />
          <circle cx="14" cy="17" r="2" />
        </svg>
      );
    default:
      return null;
  }
}

function BreakText({ text }: { text: string }) {
  const lines = text.split("\n");
  return lines.map((line, index) => (
    <span key={line}>
      {index > 0 ? <br /> : null}
      {line}
    </span>
  ));
}

function HomePage() {
  const pageRef = useReveal();
  usePageMeta(
    "Visorix — Turn video into useful intelligence",
    "Visorix analyzes the actual video and turns that understanding into specialized work — find moments, summarize recordings, improve content, and extract what matters.",
  );

  return (
    <div className="page page-home" ref={pageRef}>
      <header className="nav">
        <a href="#top" className="nav-brand">
          <span className="nav-mark" aria-hidden="true" />
          {site.productName}
        </a>
        <div className="nav-actions">
          <Link to="/pricing" className="nav-link">
            Pricing
          </Link>
          <a href={site.appUrl} className="btn btn-primary btn-sm" rel="noopener noreferrer">
            {site.ctaLabel}
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
              <p className="hero-eyebrow animate-in">{site.productName}</p>
              <h1 className="hero-brand animate-in delay-1">
                <BreakText text={site.tagline} />
              </h1>
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
                alt="Visorix app — upload a video and turn it into useful work"
                width={1200}
                height={900}
                decoding="async"
              />
            </div>
          </div>
        </section>

        <section className="section band-cream section-what">
          <div className="section-inner narrow reveal">
            <p className="eyebrow">{whatIs.title}</p>
            <h2 className="what-headline">
              <BreakText text={whatIs.headline} />
            </h2>
            {whatIs.paragraphs.map((paragraph) => (
              <p key={paragraph} className="what-body">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="section band-mango-soft section-how" id="how">
          <div className="section-inner reveal">
            <header className="section-header">
              <p className="eyebrow">{howItWorksSection.eyebrow}</p>
              <h2>
                <BreakText text={howItWorksSection.headline} />
              </h2>
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

        <section className="section band-cream section-usecases" aria-labelledby="usecases-heading">
          <div className="section-inner reveal">
            <header className="section-header">
              <p className="eyebrow">{useCasesSection.eyebrow}</p>
              <h2 id="usecases-heading">
                <BreakText text={useCasesSection.headline} />
              </h2>
              <p className="section-lead">{useCasesSection.lead}</p>
            </header>

            <div className="benefit-grid grid-4">
              {useCases.map((item) => (
                <article key={item.title} className="benefit-item usecase-item">
                  <div className="benefit-icon">
                    <UseCaseIcon name={item.icon} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section band-mango-soft section-benefits">
          <div className="section-inner">
            <header className="section-header">
              <p className="eyebrow">{benefitsSection.eyebrow}</p>
              <h2>
                <BreakText text={benefitsSection.headline} />
              </h2>
            </header>

            <div className="benefit-grid grid-4">
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

        <section className="section band-mango-strong section-diff">
          <div className="section-inner diff-grid">
            <div className="diff-copy">
              <p className="eyebrow">{differentiator.eyebrow}</p>
              <h2>
                <BreakText text={differentiator.title} />
              </h2>
              {differentiator.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
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

        <section className="section band-cream section-pricing-teaser">
          <div className="section-inner narrow">
            <p className="eyebrow">{pricingTeaser.eyebrow}</p>
            <h2 className="what-headline">{pricingTeaser.title}</h2>
            <p className="what-body">{pricingTeaser.support}</p>
            <Link to="/pricing" className="btn btn-primary btn-lg pricing-teaser-btn">
              {pricingTeaser.cta}
            </Link>
          </div>
        </section>

        <section className="section-final" aria-labelledby="final-heading">
          <div className="final-glow" aria-hidden="true" />
          <div className="final-card">
            <p className="final-eyebrow">{finalCta.eyebrow}</p>
            <h2 id="final-heading">
              <BreakText text={finalCta.title} />
            </h2>
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

export default HomePage;
