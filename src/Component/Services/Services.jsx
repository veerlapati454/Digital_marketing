import { useEffect, useRef, useState } from "react";
import {
  FaSearch, FaBullhorn, FaChartLine, FaEnvelope, FaRocket,
  FaLightbulb, FaCogs, FaArrowRight, FaCheck, FaPlay,
} from "react-icons/fa";
import "./services.css";
import h10 from "../../assets/h10.webp";
import h8 from "../../assets/h8.webp";
import h14 from "../../assets/h14.webp";
import h12 from "../../assets/h12.webp";
import h7 from "../../assets/h7.webp";
import h4 from "../../assets/h4.webp";
import h2 from "../../assets/h2.webp"
import { useNavigate } from "react-router-dom";


function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

const SERVICES = [
  {
    icon: <FaSearch />,
    color: "indigo",
    title: "SEO & Content Marketing",
    tagline: "Rank. Attract. Convert.",
    desc: "We build topical authority through in-depth keyword research, technical audits, and content that answers exactly what your buyers are searching for. Our SEO strategies outlast algorithm updates because they're built on fundamentals, not shortcuts.",
    bullets: ["Keyword & competitor gap analysis", "Technical site audit & Core Web Vitals", "Content calendar & pillar-cluster strategy", "Monthly rank & traffic reporting"],
    img:h8,
    imgAlt: "SEO analytics dashboard on laptop",
  },
  {
    icon: <FaBullhorn />,
    color: "violet",
    title: "Social Media Marketing",
    tagline: "Build community. Drive revenue.",
    desc: "From scroll-stopping reels to thought-leadership threads — we craft platform-native content that grows your audience and turns followers into buyers. Strategy, creation, scheduling, and community management all under one roof.",
    bullets: ["Platform strategy (IG, LinkedIn, TikTok, X)", "Content creation & short-form video", "Community management & engagement", "Monthly growth & reach reports"],
    img:h10,
    imgAlt: "Social media content creation",
  },
  {
    icon: <FaChartLine />,
    color: "emerald",
    title: "PPC & Paid Media",
    tagline: "Every dollar, tracked.",
    desc: "Full-funnel paid campaigns on Google, Meta, and LinkedIn. We build the creative, write the copy, structure the account, and optimise daily toward your real business KPIs — not vanity metrics.",
    bullets: ["Google Search, Display & Shopping", "Meta & LinkedIn Ads", "Transparent ROAS reporting", "Creative A/B testing"],
    img: h14,
    imgAlt: "PPC ad performance charts",
  },
  {
    icon: <FaEnvelope />,
    color: "sky",
    title: "Email Automation",
    tagline: "Nurture on autopilot.",
    desc: "Lifecycle sequences that move leads from interest to purchase without you lifting a finger. We map your customer journey, write every email, build the flows in your ESP, and continuously optimise open and click rates.",
    bullets: ["Welcome, nurture & win-back flows", "Segmentation & personalisation", "ESP setup (Klaviyo, HubSpot, Mailchimp)", "A/B testing & deliverability audits"],
    img: h12,
    imgAlt: "Email marketing campaign",
  },
  {
    icon: <FaRocket />,
    color: "amber",
    title: "Conversion Optimisation",
    tagline: "More revenue, same traffic.",
    desc: "We analyse your funnel with heatmaps, session recordings, and user research to find where visitors drop off — then fix it. Structured A/B tests compound over time into significant revenue lifts.",
    bullets: ["Heatmap & session recording analysis", "Landing page A/B testing", "Checkout & form optimisation", "CRO audit reports"],
    img: h7,
    imgAlt: "Conversion rate optimization data",
  },
  {
    icon: <FaLightbulb />,
    color: "rose",
    title: "Brand Strategy",
    tagline: "Unmistakable in a crowded market.",
    desc: "Positioning, messaging architecture, and visual identity that make you the obvious choice. We work with founders to articulate what makes them different and translate it into every customer touchpoint.",
    bullets: ["Positioning & differentiation workshops", "Messaging hierarchy & tone of voice", "Visual identity & style guide", "Brand audit & competitive analysis"],
    img: h4,
    imgAlt: "Brand strategy workshop",
  },
];

export default function Services() {
  const navigate = useNavigate();

  const goTo404 = () => {
    navigate("/404");
  };
  const [hRef, hVis] = useReveal(0.1);
  const [processRef, processVis] = useReveal(0.1);

  return (
    <div className="pg-services">
      {/* ── HERO ── */}
      <section className="pg-hero pg-hero--services">
        <div className="pg-hero-img-wrap">
          <img
            src={h2}
            alt="Marketing team collaborating"
            className="pg-hero-img"
          />
          <div className="pg-hero-overlay" />
        </div>
        <div ref={hRef} className={`container pg-hero-content ${hVis ? "reveal" : ""}`}>
          <span className="pg-eyebrow">Our Services</span>
          <h1>Marketing that <span className="accent-text">compounds</span></h1>
          <p>Six interconnected disciplines working together to grow your business — not in isolation, but as a system.</p>
          <button
  className="pg-primary-btn"
  onClick={goTo404}
>
  Book Free Audit <FaArrowRight />
</button>
        </div>
      </section>

      {/* ── SERVICE CARDS ── */}
      <section className="pg-section">
        <div className="container">
          {SERVICES.map((s, i) => {
            const [ref, vis] = [useRef(null), useState(false)];
            // inline reveal per card
            return (
              <ServiceRow
    key={i}
    s={s}
    i={i}
    goTo404={goTo404}
  />
            );
          })}
        </div>
      </section>

      {/* ── HOW IT FITS TOGETHER ── */}
      <section className="pg-section pg-section--gray">
        <div className="container">
          <div ref={processRef} className={`pg-section-header ${processVis ? "reveal" : ""}`}>
            <span className="pg-eyebrow">The System</span>
            <h2>Services that feed each other</h2>
            <p>SEO fuels content. Content drives email. Email closes paid. It's a flywheel, not a funnel.</p>
          </div>
          <div className={`pg-process-grid ${processVis ? "reveal stagger" : ""}`}>
            {[
              { num: "01", label: "Attract", desc: "SEO + Social bring qualified visitors to your site." },
              { num: "02", label: "Convert", desc: "CRO + Brand strategy turn visitors into leads." },
              { num: "03", label: "Close", desc: "Email + Paid media nurture and close the sale." },
              { num: "04", label: "Retain", desc: "Ongoing content and email keep customers coming back." },
            ].map((p) => (
              <div key={p.num} className="pg-process-card">
                <span className="pg-step-num">{p.num}</span>
                <h3>{p.label}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pg-cta-strip">
        <div className="container pg-cta-inner">
          <h2>Not sure which service you need?</h2>
          <p>Book a free 30-min audit and we'll tell you exactly where to focus first.</p>
<button
  className="pg-primary-btn pg-primary-btn--lg"
  onClick={goTo404}
>
  Get Free Audit <FaArrowRight />
</button>
        </div>
      </section>
    </div>
  );
}

function ServiceRow({ s, i, goTo404 }) {
  const [ref, visible] = useReveal(0.1);
  const even = i % 2 === 0;
  return (
    <div
      ref={ref}
      className={`pg-service-row ${even ? "pg-service-row--normal" : "pg-service-row--reverse"} ${visible ? "reveal" : ""}`}
    >
      <div className="pg-service-img-col">
        <div className={`pg-service-img-frame pg-service-img-frame--${s.color}`}>
          <img src={s.img} alt={s.imgAlt} loading="lazy" />
        </div>
      </div>
      <div className="pg-service-body">
        <div className={`pg-svc-icon pg-svc-icon--${s.color}`}>{s.icon}</div>
        <p className="pg-svc-tagline">{s.tagline}</p>
        <h2>{s.title}</h2>
        <p className="pg-svc-desc">{s.desc}</p>
        <ul className="pg-svc-bullets">
          {s.bullets.map((b, bi) => (
            <li key={bi}><FaCheck className="pg-check" /> {b}</li>
          ))}
        </ul>
        <button
  className="pg-ghost-btn"
  onClick={goTo404}
>
  Learn more <FaArrowRight />
</button>
      </div>
    </div>
  );
}