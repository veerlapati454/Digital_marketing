import { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaStar, FaChartLine, FaUsers, FaBolt } from "react-icons/fa";
import "./Results.css";
import h11 from "../../assets/h11.webp";
import h1 from "../../assets/h1.webp";
import h6 from "../../assets/h6.webp";
import h4 from "../../assets/h4.webp";
import h5 from "../../assets/h5.webp";
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

function Counter({ end, suffix = "" }) {
  const [val, setVal] = useState(0);
  const [ref, visible] = useReveal(0.4);
  useEffect(() => {
    if (!visible) return;
    const n = parseInt(end.toString().replace(/\D/g, ""), 10);
    const step = Math.ceil(n / 60);
    let cur = 0;
    const t = setInterval(() => {
      cur = Math.min(cur + step, n);
      setVal(cur);
      if (cur >= n) clearInterval(t);
    }, 20);
    return () => clearInterval(t);
  }, [visible, end]);
  return <span ref={ref}>{val}{suffix}</span>;
}

const CASE_STUDIES = [
  {
    client: "Luminos",
    industry: "SaaS",
    color: "indigo",
    service: "SEO & Content",
    challenge: "Luminos had strong product-market fit but zero organic presence. Paid acquisition costs were climbing and the team needed a sustainable channel.",
    solution: "We built a topical authority cluster around their core use case, produced 24 optimised articles in 90 days, and fixed 40+ technical issues identified in the initial audit.",
    results: [
      { metric: "Organic traffic", value: "+312%", period: "in 4 months" },
      { metric: "Keyword rankings", value: "850+", period: "page-one positions" },
      { metric: "Qualified leads", value: "+180%", period: "from organic channel" },
    ],
    quote: "Their SEO strategy increased our organic traffic by over 300% in four months. More importantly, the leads actually convert.",
    person: "Sarah Johnson",
    role: "CMO, Luminos",
    img: h1,
    imgAlt: "Analytics dashboard showing traffic growth",
  },
  {
    client: "Nexlify",
    industry: "E-commerce",
    color: "emerald",
    service: "PPC & Paid Media",
    challenge: "Google Ads account had grown organically for 3 years with no structure. CPAs were 2× above target and wasted spend was significant.",
    solution: "Full account restructure around funnel stage, new creative testing framework, and a performance-max campaign layered over brand search. Bidding strategy migrated to Target CPA.",
    results: [
      { metric: "Cost per acquisition", value: "−42%", period: "within 6 weeks" },
      { metric: "ROAS", value: "4.8×", period: "sustained over 6 months" },
      { metric: "Ad spend saved", value: "$28k", period: "in first quarter" },
    ],
    quote: "Best ROAS I've seen on paid media. They restructured our entire Google account, and within 6 weeks our cost-per-acquisition dropped by 42%.",
    person: "David Smith",
    role: "Founder, Nexlify",
    img: h11,
    imgAlt: "Paid media performance dashboard",
  },
  {
    client: "Vortex IO",
    industry: "B2B Software",
    color: "violet",
    service: "Email Automation",
    challenge: "Vortex IO was generating demo requests but only closing 18% of them. Follow-up was manual, inconsistent, and depended on individual sales reps.",
    solution: "Mapped the full post-demo journey, built 7 automated sequences in HubSpot (nurture, re-engagement, champion, and post-close onboarding), and personalised send times by segment.",
    results: [
      { metric: "Demo-to-close rate", value: "+61%", period: "in 90 days" },
      { metric: "Email open rate", value: "48%", period: "average across sequences" },
      { metric: "Pipeline influenced", value: "$1.2M", period: "in first 6 months" },
    ],
    quote: "We'd tried three agencies before finding this team. The difference is their rigor — every decision is backed by data.",
    person: "Priya Mehta",
    role: "CEO, Vortex IO",
    img: h6,
    imgAlt: "Email marketing automation workflow",
  },
  {
    client: "Stackwave",
    industry: "Developer Tools",
    color: "sky",
    service: "Brand Strategy + Social",
    challenge: "Stackwave's product was technically superior but indistinguishable from competitors in messaging. Sales cycles were long because buyers couldn't articulate the difference.",
    solution: "2-week positioning sprint to define the unique value frame, rebuilt all website copy, launched a LinkedIn thought-leadership programme, and created a content flywheel powered by customer stories.",
    results: [
      { metric: "Sales cycle length", value: "−35%", period: "after rebrand launch" },
      { metric: "LinkedIn followers", value: "+9,200", period: "in 6 months" },
      { metric: "Inbound demos", value: "+220%", period: "year-on-year" },
    ],
    quote: "Highly professional, data-obsessed, and genuinely creative. They feel like an in-house team — except better.",
    person: "Michael Brown",
    role: "VP Growth, Stackwave",
    img: h4,
    imgAlt: "Brand strategy session",
  },
];

const AGG_STATS = [
  { icon: <FaChartLine />, value: "4", suffix: "×", label: "Average ROAS across paid clients" },
  { icon: <FaUsers />,     value: "2400", suffix: "+", label: "Founders & teams served" },
  { icon: <FaBolt />,      value: "98", suffix: "%", label: "Client retention rate" },
];

export default function Results() {
  const [hRef, hVis] = useReveal(0.1);
  const [statRef, statVis] = useReveal(0.15);
   const navigate = useNavigate();

  const goTo404 = () => {
    navigate("/404");
  };

  return (
    <div className="pg-results">
      {/* ── HERO ── */}
      <section className="pg-hero pg-hero--results">
        <div className="pg-hero-img-wrap">
          <img
            src={h5}
            alt="Growth chart and analytics"
            className="pg-hero-img"
          />
          <div className="pg-hero-overlay" />
        </div>
        <div ref={hRef} className={`container pg-hero-content ${hVis ? "reveal" : ""}`}>
          <span className="pg-eyebrow">Proven Results</span>
          <h1>Numbers don't <span className="accent-text">lie</span></h1>
          <p>Real outcomes for real businesses. Every case study below is a client we still work with today.</p>
          <button
  className="pg-primary-btn"
  onClick={goTo404}
>
  See How We Do It <FaArrowRight />
</button>
        </div>
      </section>

      {/* ── AGGREGATE STATS ── */}
      <section className="pg-stats-band">
        <div ref={statRef} className={`container pg-stats-row ${statVis ? "reveal stagger" : ""}`}>
          {AGG_STATS.map((s, i) => (
            <div key={i} className="pg-stat-pill">
              <div className="pg-stat-icon">{s.icon}</div>
              <strong><Counter end={s.value} suffix={s.suffix} /></strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section className="pg-section">
        <div className="container">
          <div className="pg-section-header">
            <span className="pg-eyebrow">Case Studies</span>
            <h2>From the work</h2>
            <p>Four businesses, four channels, four very different problems — all solved.</p>
          </div>

          {CASE_STUDIES.map((cs, i) => (
            <CaseStudyCard key={i} cs={cs} i={i} />
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pg-cta-strip">
        <div className="container pg-cta-inner">
          <h2>Want results like these?</h2>
          <p>Tell us about your business. We'll map exactly which levers will move first.</p>
          <button
  className="pg-primary-btn pg-primary-btn--lg"
  onClick={goTo404}
>
  Book Free Strategy Call <FaArrowRight />
</button>
        </div>
      </section>
    </div>
  );
}

function CaseStudyCard({ cs, i }) {
  const [ref, visible] = useReveal(0.08);
  return (
    <div ref={ref} className={`pg-case-card ${visible ? "reveal" : ""}`}>
      <div className="pg-case-header">
        <div>
          <span className={`pg-case-badge pg-case-badge--${cs.color}`}>{cs.service}</span>
          <h3>{cs.client} <span className="pg-case-industry">— {cs.industry}</span></h3>
        </div>
      </div>

      <div className="pg-case-body">
        <div className="pg-case-img-col">
          <img src={cs.img} alt={cs.imgAlt} loading="lazy" className="pg-case-img" />
        </div>
        <div className="pg-case-text">
          <div className="pg-case-section">
            <h4>Challenge</h4>
            <p>{cs.challenge}</p>
          </div>
          <div className="pg-case-section">
            <h4>What we did</h4>
            <p>{cs.solution}</p>
          </div>
        </div>
      </div>

      <div className="pg-case-results">
        {cs.results.map((r, ri) => (
          <div key={ri} className={`pg-result-block pg-result-block--${cs.color}`}>
            <strong>{r.metric}</strong>
            <span className="pg-result-value">{r.value}</span>
            <span className="pg-result-period">{r.period}</span>
          </div>
        ))}
      </div>

      <blockquote className="pg-case-quote">
        <div className="pg-quote-stars">{[...Array(5)].map((_, s) => <FaStar key={s} />)}</div>
        <p>"{cs.quote}"</p>
        <cite>— {cs.person}, {cs.role}</cite>
      </blockquote>
    </div>
  );
}