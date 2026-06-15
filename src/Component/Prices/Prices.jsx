import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCheck,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa";
import "./Prices.css";
import h2 from "../../assets/h2.webp";
import h15 from "../../assets/h15.webp";

function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold }
    );

    if (ref.current) obs.observe(ref.current);

    return () => obs.disconnect();
  }, []);

  return [ref, visible];
}

const PLANS = [
  {
    tier: "Starter",
    price: { monthly: "$99", annual: "$79" },
    desc: "For founders testing digital marketing for the first time.",
    color: "indigo",
    features: [
      { text: "Monthly SEO audit", included: true },
      { text: "Analytics dashboard access", included: true },
      { text: "2 blog posts / month", included: true },
      { text: "Email support (48 hr SLA)", included: true },
      { text: "PPC campaign management", included: false },
      { text: "Social media marketing", included: false },
      { text: "Strategy calls", included: false },
      { text: "Dedicated account manager", included: false },
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    tier: "Professional",
    price: { monthly: "$299", annual: "$239" },
    desc: "For growing businesses ready to invest in multi-channel growth.",
    color: "violet",
    badge: "Most Popular",
    features: [
      { text: "Everything in Starter", included: true },
      { text: "PPC campaign management", included: true },
      { text: "Social media marketing (3 platforms)", included: true },
      { text: "6 blog posts / month", included: true },
      { text: "Bi-weekly strategy call", included: true },
      { text: "Email automation setup", included: true },
      { text: "Priority support (4 hr SLA)", included: true },
      { text: "Dedicated account manager", included: false },
    ],
    cta: "Start Free Trial",
    featured: true,
  },
  {
    tier: "Enterprise",
    price: { monthly: "Custom", annual: "Custom" },
    desc: "For established teams that need a full-service growth partner.",
    color: "emerald",
    features: [
      { text: "Everything in Professional", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Full brand strategy", included: true },
      { text: "Custom integrations", included: true },
      { text: "Unlimited platforms & channels", included: true },
      { text: "SLA guarantee", included: true },
      { text: "Weekly strategy calls", included: true },
      { text: "White-glove onboarding", included: true },
    ],
    cta: "Book a Call",
    featured: false,
  },
];

const COMPARE_ROWS = [
  {
    feature: "SEO audit frequency",
    starter: "Monthly",
    pro: "Weekly",
    enterprise: "Continuous",
  },
  {
    feature: "Blog posts / month",
    starter: "2",
    pro: "6",
    enterprise: "Unlimited",
  },
  {
    feature: "PPC management",
    starter: "✕",
    pro: "✓",
    enterprise: "✓",
  },
  {
    feature: "Social platforms",
    starter: "✕",
    pro: "3",
    enterprise: "Unlimited",
  },
  {
    feature: "Email automation flows",
    starter: "✕",
    pro: "Up to 5",
    enterprise: "Unlimited",
  },
  {
    feature: "Strategy calls",
    starter: "✕",
    pro: "Bi-weekly",
    enterprise: "Weekly",
  },
  {
    feature: "Support SLA",
    starter: "48 hrs",
    pro: "4 hrs",
    enterprise: "1 hr",
  },
  {
    feature: "Account manager",
    starter: "✕",
    pro: "✕",
    enterprise: "✓",
  },
  {
    feature: "Brand strategy",
    starter: "✕",
    pro: "✕",
    enterprise: "✓",
  },
  {
    feature: "Custom integrations",
    starter: "✕",
    pro: "✕",
    enterprise: "✓",
  },
];

const FAQS = [
  {
    q: "Is there a free trial?",
    a: "Yes — the Professional plan comes with a 14-day free trial.",
  },
  {
    q: "Can I change plans later?",
    a: "Absolutely. Upgrade or downgrade any time.",
  },
  {
    q: "What's the contract length?",
    a: "All plans are month-to-month.",
  },
  {
    q: "Do you offer discounts for annual billing?",
    a: "Yes, annual plans save you ~20%.",
  },
  {
    q: "What counts as a platform?",
    a: "Each social channel counts as one platform.",
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`pg-faq-item ${open ? "pg-faq-open" : ""}`}
      onClick={() => setOpen(!open)}
    >
      <div className="pg-faq-q">
        <span>{q}</span>
        <span>{open ? "−" : "+"}</span>
      </div>

      {open && <div className="pg-faq-a">{a}</div>}
    </div>
  );
}

export default function Prices() {
  const navigate = useNavigate();

  const goTo404 = () => {
    navigate("/404");
  };

  const [annual, setAnnual] = useState(false);

  const [hRef, hVis] = useReveal(0.1);
  const [planRef, planVis] = useReveal(0.1);
  const [compareRef, compareVis] = useReveal(0.1);
  const [faqRef, faqVis] = useReveal(0.1);

  return (
    <div className="pg-pricing">
      <section className="pg-hero pg-hero--pricing">
        <div className="pg-hero-img-wrap">
          <img src={h15} alt="" className="pg-hero-img" />
          <div className="pg-hero-overlay" />
        </div>

        <div
          ref={hRef}
          className={`container pg-hero-content ${
            hVis ? "reveal" : ""
          }`}
        >
          <span className="pg-eyebrow">Transparent Pricing</span>

          <h1>
            Simple plans,
            <span className="accent-text"> real results</span>
          </h1>

          <p>
            No hidden fees. No long contracts.
            Scale up or down as your business grows.
          </p>
        </div>
      </section>

      <div className="pg-billing-toggle-wrap">
        <div className="pg-billing-toggle">
          <span className={!annual ? "pg-toggle-active" : ""}>
            Monthly
          </span>

          <button
            className={`pg-toggle-btn ${
              annual ? "pg-toggle-btn--on" : ""
            }`}
            onClick={() => setAnnual(!annual)}
          >
            <span className="pg-toggle-knob" />
          </button>

          <span className={annual ? "pg-toggle-active" : ""}>
            Annual
          </span>
        </div>
      </div>

      <section className="pg-section pg-section--plans">
        <div className="container">
          <div
            ref={planRef}
            className={`pg-plan-grid ${
              planVis ? "reveal stagger" : ""
            }`}
          >
            {PLANS.map((p, i) => (
              <div
                key={i}
                className={`pg-plan-card pg-plan-card--${p.color} ${
                  p.featured
                    ? "pg-plan-card--featured"
                    : ""
                }`}
              >
                {p.badge && (
                  <div className="pg-plan-badge">
                    {p.badge}
                  </div>
                )}

                <h3>{p.tier}</h3>

                <p className="pg-plan-desc">{p.desc}</p>

                <div className="pg-plan-price">
                  <span className="pg-price-num">
                    {annual
                      ? p.price.annual
                      : p.price.monthly}
                  </span>
                </div>

                <ul className="pg-plan-features">
                  {p.features.map((f, fi) => (
                    <li
                      key={fi}
                      className={
                        f.included
                          ? ""
                          : "pg-feature-off"
                      }
                    >
                      {f.included ? (
                        <FaCheck />
                      ) : (
                        <FaTimes />
                      )}
                      {f.text}
                    </li>
                  ))}
                </ul>

                <button
                  className={
                    p.featured
                      ? "pg-primary-btn"
                      : "pg-outline-btn"
                  }
                  onClick={goTo404}
                >
                  {p.cta}
                  <FaArrowRight />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pg-section">
        <div className="container pg-narrow">
          <div
            ref={faqRef}
            className={`pg-section-header ${
              faqVis ? "reveal" : ""
            }`}
          >
            <span className="pg-eyebrow">
              Pricing FAQ
            </span>
            <h2>Still have questions?</h2>
          </div>

          <div
            className={`pg-faq-list ${
              faqVis ? "reveal" : ""
            }`}
          >
            {FAQS.map((f, i) => (
              <FaqItem
                key={i}
                q={f.q}
                a={f.a}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="pg-enterprise-strip">
        <div className="container pg-enterprise-inner">
          <img
            src={h2}
            alt=""
            className="pg-enterprise-img"
          />

          <div className="pg-enterprise-text">
            <span className="pg-eyebrow">
              Enterprise
            </span>

            <h2>Need a custom solution?</h2>

            <p>
              Let's build a plan around your goals.
            </p>

            <button
              className="pg-primary-btn"
              onClick={goTo404}
            >
              Talk to Sales
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}