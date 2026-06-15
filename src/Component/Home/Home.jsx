import { useEffect, useRef, useState } from "react";
import {
  FaSearch,
  FaBullhorn,
  FaChartLine,
  FaEnvelope,
  FaArrowRight,
  FaCheck,
  FaPlay,
  FaStar,
  FaChevronDown,
  FaChevronUp,
  FaRocket,
  FaLightbulb,
  FaCogs,
  FaHeadset,
  FaLock,
  FaGlobe,
  FaBolt,
  FaUsers,
  FaAward,
} from "react-icons/fa";
import "./Home.css";
import hero from "../../assets/h6.webp";
import { useNavigate } from "react-router-dom";

/* ─── Scroll reveal hook ─── */
function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* ─── FAQ Item ─── */
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? "faq-open" : ""}`} onClick={() => setOpen(!open)}>
      <div className="faq-question">
        <span>{q}</span>
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {open && <div className="faq-answer">{a}</div>}
    </div>
  );
}

/* ─── Animated counter ─── */
function AnimatedNumber({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [ref, visible] = useScrollReveal(0.5);
  useEffect(() => {
    if (!visible) return;
    const numeric = parseInt(target.replace(/\D/g, ""), 10);
    const step = Math.ceil(numeric / 60);
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, numeric);
      setCount(current);
      if (current >= numeric) clearInterval(timer);
    }, 25);
    return () => clearInterval(timer);
  }, [visible, target]);
  const display = target.includes("M") ? count + "M" : count + suffix;
  return <span ref={ref}>{display}</span>;
}

/* ══════════════════════════════════════════ */
function Home() {
  const [heroRef, heroVisible] = useScrollReveal(0.1);
  const [servRef, servVisible] = useScrollReveal(0.1);
  const [procRef, procVisible] = useScrollReveal(0.1);
  const [facRef,  facVisible]  = useScrollReveal(0.1);
  const [testRef, testVisible] = useScrollReveal(0.1);
  const [priceRef, priceVisible] = useScrollReveal(0.1);
  const [faqRef, faqVisible] = useScrollReveal(0.1);
  const [statsRef, statsVisible] = useScrollReveal(0.1);
  const navigate = useNavigate();

const goTo404 = () => {
  navigate("/404");
};

  return (
    <>
      {/* ══ 1. HERO — full-bleed background image ══ */}
      <section className="hero">
        <div
          className="hero-bg"
          style={{ backgroundImage: `url(${hero})` }}
          aria-hidden="true"
        />
        <div className="hero-bg-overlay" aria-hidden="true" />

        {/* floating accent lines */}
        <div className="hero-line hero-line-1" aria-hidden="true" />
        <div className="hero-line hero-line-2" aria-hidden="true" />

        <div
          ref={heroRef}
          className={`container hero-content ${heroVisible ? "reveal" : ""}`}
        >
          <span className="tag">
            <span className="tag-dot" /> DIGITAL MARKETING
          </span>

          <h1 className="hero-headline">
            Turn Clicks Into
            <br />
            <span className="headline-accent">Loyal Customers</span>
          </h1>

          <p className="hero-sub">
            Data-driven growth systems—not one-off campaigns—that compound long
            after launch. Built for founders who think in years, not quarters.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn" onClick={goTo404}>
              Start Growing <FaArrowRight />
            </button>
            <button className="ghost-btn ghost-btn--light" onClick={goTo404}>
              <FaPlay /> Watch Our Story
            </button>
          </div>

          <div className="hero-trust">
            <div className="trust-avatars">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="avatar-placeholder" />
              ))}
            </div>
            <p>
              <strong>2,400+ founders</strong> grew with us this year
            </p>
          </div>
        </div>

        {/* scroll cue */}
        <div className="hero-scroll-cue" aria-hidden="true">
          <span />
        </div>
      </section>

      {/* ══ LOGOS BAR ══ */}
      <div className="hero-logos">
        <p className="logos-label">Trusted by teams at</p>
        <div className="logos-row">
          {["Acme Corp", "Nexlify", "Vortex IO", "Luminos", "Stackwave", "Prismatic"].map(
            (n) => <div key={n} className="logo-chip">{n}</div>
          )}
        </div>
      </div>

      {/* ══ 2. STATS STRIP ══ */}
      <section className="stats-strip">
        <div ref={statsRef} className={`container stats-inner ${statsVisible ? "reveal stagger" : ""}`}>
          {[
            { value: "500", suffix: "+", label: "Projects delivered" },
            { value: "2400", suffix: "+", label: "Founders served" },
            { value: "98",   suffix: "%", label: "Client retention" },
            { value: "4",    suffix: "×", label: "Average ROAS" },
          ].map((s, i) => (
            <div key={i} className="stat-block">
              <strong>
                <AnimatedNumber target={s.value} suffix={s.suffix} />
              </strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══ 3. SERVICES ══ */}
      <section id="services" className="services">
        <div className="container">
          <div ref={servRef} className={`section-header ${servVisible ? "reveal" : ""}`}>
            <span className="eyebrow">What We Do</span>
            <h2 className="section-title">Services Built for Scale</h2>
            <p className="section-sub">
              Every service is engineered around one goal: sustainable, compounding growth.
            </p>
          </div>

          <div className={`service-grid ${servVisible ? "reveal stagger" : ""}`}>
            {[
              { icon: <FaSearch />,    title: "SEO & Content",           desc: "Rank for the keywords your buyers are already searching. We build topical authority that outlasts algorithm updates.",                    color: "indigo"  },
              { icon: <FaBullhorn />,  title: "Social Media Marketing",  desc: "From reels to thought-leadership posts—content that builds community and converts followers into revenue.",                              color: "violet"  },
              { icon: <FaChartLine />, title: "PPC & Paid Media",        desc: "Full-funnel paid campaigns on Google, Meta, and LinkedIn with transparent ROAS reporting.",                                              color: "emerald" },
              { icon: <FaEnvelope />,  title: "Email Automation",        desc: "Lifecycle sequences that nurture leads on autopilot and turn one-time buyers into repeat customers.",                                     color: "sky"     },
              { icon: <FaRocket />,    title: "Conversion Optimisation", desc: "A/B tests, heatmaps, and UX audits that squeeze more revenue from the traffic you already have.",                                        color: "amber"   },
              { icon: <FaLightbulb />, title: "Brand Strategy",          desc: "Positioning, messaging frameworks, and visual identity that make you unmistakable in a crowded market.",                                 color: "rose"    },
            ].map((s, i) => (
              <div
  key={i}
  className={`service-card service-card--${s.color}`}
  onClick={goTo404}
  style={{ cursor: "pointer" }}
>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="card-link">Learn more <FaArrowRight /></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4. FACILITIES ══ */}
      <section id="facilities" className="facilities">
        <div className="container">
          <div ref={facRef} className={`section-header ${facVisible ? "reveal" : ""}`}>
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="section-title">Everything You Need, Nothing You Don't</h2>
            <p className="section-sub">
              Infrastructure, talent, and tooling that lets us move fast without breaking things.
            </p>
          </div>

          <div className={`facilities-grid ${facVisible ? "reveal stagger" : ""}`}>
            {[
              {
                icon: <FaBolt />,
                title: "Real-Time Analytics",
                desc: "Live dashboards updated every hour. You always know exactly what's working—no waiting for end-of-month reports.",
                stat: "< 1 hr latency",
              },
              {
                icon: <FaHeadset />,
                title: "Dedicated Support",
                desc: "A named account manager available on Slack. Direct line to the strategist running your campaigns, not a ticketing queue.",
                stat: "2 hr response SLA",
              },
              {
                icon: <FaGlobe />,
                title: "Global Infrastructure",
                desc: "Campaign management across 40+ markets with localised copy, bidding, and compliance built in from day one.",
                stat: "40+ markets",
              },
              {
                icon: <FaLock />,
                title: "Data Security & Compliance",
                desc: "GDPR, CCPA, and ISO 27001-aligned processes. Your customer data stays yours—never shared, never sold.",
                stat: "ISO 27001 aligned",
              },
              {
                icon: <FaUsers />,
                title: "In-House Creative Studio",
                desc: "Copywriters, designers, and video editors under one roof. No outsourcing, no briefing lag—just fast, on-brand output.",
                stat: "12-person studio",
              },
              {
                icon: <FaAward />,
                title: "Proven Playbooks",
                desc: "500+ projects refined into repeatable systems. We bring battle-tested frameworks to your campaigns from day one.",
                stat: "500+ projects",
              },
            ].map((f, i) => (
              <div key={i} className="facility-card">
                <div className="facility-icon-wrap">{f.icon}</div>
                <div className="facility-body">
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                  <span className="facility-stat">{f.stat}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5. PROCESS ══ */}
      <section id="process" className="process">
        <div className="container">
          <div ref={procRef} className={`section-header ${procVisible ? "reveal" : ""}`}>
            <span className="eyebrow">Our Process</span>
            <h2 className="section-title">From Zero to Growth Engine</h2>
            <p className="section-sub">A repeatable 4-step system refined across 500+ projects.</p>
          </div>

          <div className={`process-steps ${procVisible ? "reveal stagger" : ""}`}>
            {[
              { step: "01", icon: <FaSearch />,    title: "Audit & Discover", desc: "We map your funnel, benchmark competitors, and surface the highest-leverage growth levers in your market." },
              { step: "02", icon: <FaLightbulb />, title: "Strategise",        desc: "A custom 90-day roadmap with prioritised experiments, channel mix, and forecasted outcomes." },
              { step: "03", icon: <FaCogs />,       title: "Execute",           desc: "Our specialists run campaigns, publish content, and optimise daily—so you don't have to." },
              { step: "04", icon: <FaChartLine />,  title: "Report & Scale",    desc: "Weekly dashboards and monthly strategy calls. We double down on what works and cut what doesn't." },
            ].map((p) => (
              <div key={p.step} className="process-step">
                <div className="step-number">{p.step}</div>
                <div className="step-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. TESTIMONIALS ══ */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div ref={testRef} className={`section-header ${testVisible ? "reveal" : ""}`}>
            <span className="eyebrow">Client Love</span>
            <h2 className="section-title">Don't Take Our Word For It</h2>
          </div>

          <div className={`testimonial-grid ${testVisible ? "reveal stagger" : ""}`}>
            {[
              { name: "Sarah Johnson",  role: "CMO, Luminos",         stars: 5, quote: "Their SEO strategy increased our organic traffic by over 300% in four months. More importantly, the leads actually convert—qualified buyers, not just clicks." },
              { name: "David Smith",    role: "Founder, Nexlify",     stars: 5, quote: "Best ROAS I've seen on paid media. They restructured our entire Google account, and within 6 weeks our cost-per-acquisition dropped by 42%. Incredible team." },
              { name: "Michael Brown",  role: "VP Growth, Stackwave", stars: 5, quote: "Highly professional, data-obsessed, and genuinely creative. They feel like an in-house team—except better, because they've seen what works across dozens of industries." },
              { name: "Priya Mehta",    role: "CEO, Vortex IO",       stars: 5, quote: "We'd tried three agencies before finding this team. The difference is their rigor—every decision is backed by data, and every week we see measurable progress." },
            ].map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="stars">{[...Array(t.stars)].map((_, s) => <FaStar key={s} />)}</div>
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar" />
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 7. PRICING ══ */}
      <section id="pricing" className="pricing">
        <div className="container">
          <div ref={priceRef} className={`section-header ${priceVisible ? "reveal" : ""}`}>
            <span className="eyebrow">Transparent Pricing</span>
            <h2 className="section-title">Simple Plans, Real Results</h2>
            <p className="section-sub">No hidden fees. Cancel any time. Upgrade as you grow.</p>
          </div>

          <div className={`pricing-grid ${priceVisible ? "reveal stagger" : ""}`}>
            {[
              {
                tier: "Starter", price: "$99", period: "/mo", badge: null,
                features: ["Monthly SEO Audit", "Analytics Dashboard", "2 Blog Posts/Month", "Email Support"],
                cta: "Get Started",
              },
              {
                tier: "Professional", price: "$299", period: "/mo", badge: "Most Popular",
                features: ["Everything in Starter", "PPC Campaign Management", "Social Media Marketing", "Bi-weekly Strategy Call", "Priority Support"],
                cta: "Start Free Trial",
              },
              {
                tier: "Enterprise", price: "Custom", period: "", badge: null,
                features: ["Everything in Professional", "Dedicated Account Manager", "Full Brand Strategy", "Custom Integrations", "SLA Guarantee"],
                cta: "Book a Call",
              },
            ].map((p, i) => (
              <div key={i} className={`price-card ${p.badge ? "price-card--featured" : ""}`}>
                {p.badge && <div className="price-badge">{p.badge}</div>}
                <h3>{p.tier}</h3>
                <div className="price-amount">
                  <span className="price-number">{p.price}</span>
                  <span className="price-period">{p.period}</span>
                </div>
                <ul className="price-features">
                  {p.features.map((f, fi) => (
                    <li key={fi}><FaCheck /> {f}</li>
                  ))}
                </ul>
                <button className={p.badge ? "primary-btn" : "outline-btn"} onClick={goTo404}>{p.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 8. FAQ ══ */}
      <section id="faq" className="faq">
        <div className="container faq-container">
          <div ref={faqRef} className={`section-header ${faqVisible ? "reveal" : ""}`}>
            <span className="eyebrow">FAQ</span>
            <h2 className="section-title">Questions We Hear Often</h2>
          </div>
          <div className={`faq-list ${faqVisible ? "reveal" : ""}`}>
            {[
              { q: "How soon will I see results?",             a: "Most clients see meaningful movement within 60–90 days. SEO is a longer arc (3–6 months for dominant rankings), while paid media and email campaigns can generate results within the first 2 weeks." },
              { q: "Do you work with businesses in any industry?", a: "We've worked across e-commerce, SaaS, professional services, health & wellness, and B2B. During the onboarding audit we'll tell you honestly if your sector isn't a fit." },
              { q: "What does the onboarding process look like?", a: "After you sign up, you'll have a 60-minute strategy session within 3 business days. We'll audit your existing presence, agree on KPIs, and hand you a 90-day roadmap before any work begins." },
              { q: "Can I cancel at any time?",                a: "Yes. All plans are month-to-month with a 30-day notice period. We'd rather earn your trust every month than lock you into a long contract." },
              { q: "Do you offer white-label services?",       a: "Yes, we partner with agencies that want to add digital marketing services to their portfolio. Contact us for a white-label rate card." },
            ].map((item, i) => (
              <FaqItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ 9. CTA BANNER ══ */}
      <section className="cta-banner">
        <div className="cta-orb cta-orb-1" />
        <div className="cta-orb cta-orb-2" />
        <div className="container cta-inner">
          <span className="eyebrow eyebrow--light">Ready to Grow?</span>
          <h2>Your competitors aren't waiting.<br />Neither should you.</h2>
          <p>Book a free 30-minute strategy call. No pitch, just a plan.</p>
          <div className="cta-actions">
            <button className="primary-btn primary-btn--large" onClick={goTo404}>
              Book Free Strategy Call <FaArrowRight />
            </button>
            <p className="cta-footnote">No credit card required · Cancel anytime</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;