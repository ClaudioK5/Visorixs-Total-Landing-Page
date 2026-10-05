import { Link } from "react-router-dom";
import { site } from "../config/site";
import { pricingCustom, pricingFaq, pricingHero, pricingPlans } from "../content/pricing";
import { usePageMeta } from "../hooks/usePageMeta";
import { useReveal } from "../hooks/useReveal";
import "../App.css";

function PricingPage() {
  const pageRef = useReveal();
  usePageMeta(
    "Visorix — Pricing",
    "Simple pricing for the way you work with video. Choose a plan based on how much video you analyze each month.",
  );

  return (
    <div className="page" ref={pageRef}>
      <header className="nav">
        <Link to="/" className="nav-brand">
          <span className="nav-mark" aria-hidden="true" />
          {site.productName}
        </Link>
        <div className="nav-actions">
          <Link to="/pricing" className="nav-link" aria-current="page">
            Pricing
          </Link>
          <a href={site.appUrl} className="btn btn-primary btn-sm" rel="noopener noreferrer">
            {site.ctaLabel}
          </a>
        </div>
      </header>

      <main>
        <section className="hero band-mango pricing-hero">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-inner pricing-hero-inner">
            <div className="hero-content pricing-hero-content">
              <p className="hero-eyebrow animate-in">{pricingHero.eyebrow}</p>
              <h1 className="hero-brand animate-in delay-1">{pricingHero.title}</h1>
              <p className="hero-support animate-in delay-2">{pricingHero.support}</p>
              <p className="pricing-note animate-in delay-3">{pricingHero.note}</p>
            </div>
          </div>
        </section>

        <section className="section band-cream section-pricing">
          <div className="section-inner">
            <div className="pricing-grid">
              {pricingPlans.map((plan) => (
                <article
                  key={plan.name}
                  className={"featured" in plan && plan.featured ? "pricing-card is-featured" : "pricing-card"}
                >
                  {"badge" in plan ? <p className="pricing-badge">{plan.badge}</p> : null}
                  <h2>{plan.name}</h2>
                  <p className="pricing-audience">{plan.audience}</p>
                  <p className="pricing-price">{plan.price}</p>
                  <p className="pricing-hours">
                    <span>{plan.hoursLabel}</span>
                    <strong>{plan.hoursValue}</strong>
                  </p>
                  <ul>
                    {plan.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <a href={site.appUrl} className="btn btn-primary btn-sm" rel="noopener noreferrer">
                    {site.ctaLabel}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section band-mango-soft section-faq" aria-labelledby="faq-heading">
          <div className="section-inner">
            <header className="section-header">
              <p className="eyebrow">Questions</p>
              <h2 id="faq-heading">Before you choose a plan</h2>
            </header>
            <div className="faq-list">
              {pricingFaq.map((item) => (
                <article key={item.question} className="faq-item">
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section band-cream section-custom">
          <div className="section-inner narrow">
            <h2>{pricingCustom.title}</h2>
            <p className="what-body">{pricingCustom.body}</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <span className="footer-brand">{site.productName}</span>
          <Link to="/">Home</Link>
          <a href={site.appUrl} rel="noopener noreferrer">
            Open the app
          </a>
        </div>
      </footer>
    </div>
  );
}

export default PricingPage;
