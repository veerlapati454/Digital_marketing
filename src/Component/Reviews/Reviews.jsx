import { useEffect, useRef, useState } from "react";
import { FaStar, FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import "./Reviews.css";
import h16 from "../../assets/h16.webp"
import h17 from "../../assets/h17.webp"
import h18 from "../../assets/h18.webp"
import h19 from "../../assets/h19.webp"
import h4 from "../../assets/h4.webp"
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

const FEATURED_REVIEWS = [
  {
    name: "Sarah Johnson",
    role: "CMO",
    company: "Luminos",
    industry: "SaaS",
    stars: 5,
    service: "SEO & Content",
    color: "indigo",
    img: h16,
    quote: "Their SEO strategy increased our organic traffic by over 300% in four months. More importantly, the leads actually convert — qualified buyers, not just clicks. The team is rigorous, communicative, and genuinely invested in our growth.",
    result: "+312% organic traffic",
  },
  {
    name: "David Smith",
    role: "Founder",
    company: "Nexlify",
    industry: "E-commerce",
    stars: 5,
    service: "PPC & Paid Media",
    color: "emerald",
    img: h17,
    quote: "Best ROAS I've seen on paid media in 10 years of running online businesses. They restructured our entire Google account, and within 6 weeks our cost-per-acquisition dropped by 42%. Incredible team — they actually pick up the phone.",
    result: "−42% CPA in 6 weeks",
  },
  {
    name: "Michael Brown",
    role: "VP Growth",
    company: "Stackwave",
    industry: "Developer Tools",
    stars: 5,
    service: "Brand Strategy",
    color: "violet",
    img: h18,
    quote: "Highly professional, data-obsessed, and genuinely creative. They feel like an in-house team — except better, because they've seen what works across dozens of industries. Our inbound demos went up 220% after the rebrand.",
    result: "+220% inbound demos",
  },
  {
    name: "Priya Mehta",
    role: "CEO",
    company: "Vortex IO",
    industry: "B2B Software",
    stars: 5,
    service: "Email Automation",
    color: "sky",
    img: h19,
    quote: "We'd tried three agencies before finding this team. The difference is their rigor — every decision is backed by data, and every week we see measurable progress. Our demo-to-close rate went from 18% to 29% in under 90 days.",
    result: "+61% close rate",
  },
];

const ALL_REVIEWS = [
  { name: "James T.", role: "Founder, Acme Corp",      stars: 5, text: "Switched from a big-name agency and immediately felt the difference. Small enough to care, good enough to compete with anyone.", service: "PPC" },
  { name: "Anna K.",  role: "Marketing Lead, Prismatic", stars: 5, text: "Our LinkedIn following grew from 400 to 9,600 in 6 months. The content quality is excellent and the strategy is clearly well thought-out.", service: "Social Media" },
  { name: "Tom R.",   role: "CEO, BrightPath",          stars: 5, text: "They delivered our 90-day roadmap before we'd even signed a contract. That level of commitment to the prospect experience told us everything.", service: "Strategy" },
  { name: "Elena M.", role: "Head of Marketing, Curvex", stars: 5, text: "The email sequences they built generate more revenue on autopilot than our entire sales team used to manually. Remarkable ROI.", service: "Email" },
  { name: "Chris W.", role: "Founder, Driftly",         stars: 5, text: "Honest, direct, and results-oriented. They told us one of our service lines wasn't a fit and focused all energy on the one that was. That kind of integrity is rare.", service: "SEO" },
  { name: "Mia L.",   role: "CMO, Orbis Health",        stars: 4, text: "Strong results across the board. Communication could be slightly faster during peak campaign periods, but the quality of work is consistently excellent.", service: "PPC" },
  { name: "Raj P.",   role: "VP Sales, Axonify",        stars: 5, text: "They turned a chaotic ad account into a profit machine. Our ROAS went from 1.8× to 4.6× in one quarter. Would absolutely recommend.", service: "PPC" },
  { name: "Sophie N.", role: "Founder, Numi Studio",    stars: 5, text: "Brand strategy work was transformational. We now have a positioning that's genuinely differentiated, and sales conversations are so much easier.", service: "Brand" },
  { name: "Lucas B.", role: "Head of Growth, Fluxr",    stars: 5, text: "Worked with 4 agencies in 3 years. This is the first one that felt like a true partner — proactive, transparent, and accountable.", service: "Multi-channel" },
];

const PLATFORMS = [
  { name: "Google",   rating: "4.9", reviews: "143", logo: "G" },
  { name: "Clutch",   rating: "4.8", reviews: "89",  logo: "C" },
  { name: "G2",       rating: "4.9", reviews: "62",  logo: "G2" },
  { name: "Trustpilot",rating:"4.7", reviews: "211", logo: "T" },
];

function Stars({ n }) {
  return (
    <div className="pg-stars">
      {[...Array(n)].map((_, i) => <FaStar key={i} />)}
    </div>
  );
}

export default function Reviews() {
  const [hRef, hVis] = useReveal(0.1);
  const [platRef, platVis] = useReveal(0.1);
  const [featRef, featVis] = useReveal(0.1);
  const [allRef, allVis] = useReveal(0.1);
   const navigate = useNavigate();

  const goTo404 = () => {
    navigate("/404");
  };
  const [activeFilter, setActiveFilter] = useState("All");

  const services = ["All", "SEO", "PPC", "Social Media", "Email", "Brand", "Strategy", "Multi-channel"];
  const filtered = activeFilter === "All"
    ? ALL_REVIEWS
    : ALL_REVIEWS.filter(r => r.service === activeFilter);

  return (
    <div className="pg-reviews">
      {/* ── HERO ── */}
      <section className="pg-hero pg-hero--reviews">
        <div className="pg-hero-img-wrap">
          <img
            src={h4}
            alt="Happy client team"
            className="pg-hero-img"
          />
          <div className="pg-hero-overlay" />
        </div>
        <div ref={hRef} className={`container pg-hero-content ${hVis ? "reveal" : ""}`}>
          <span className="pg-eyebrow">Client Reviews</span>
          <h1>Don't take our <span className="accent-text">word for it</span></h1>
          <p>Over 500 verified reviews across Google, Clutch, G2, and Trustpilot. Here's what our clients say.</p>
        </div>
      </section>

      {/* ── PLATFORM RATINGS ── */}
      <section className="pg-platforms-strip">
        <div ref={platRef} className={`container pg-platforms-row ${platVis ? "reveal stagger" : ""}`}>
          {PLATFORMS.map((p, i) => (
            <div key={i} className="pg-platform-card">
              <div className="pg-platform-logo">{p.logo}</div>
              <div className="pg-platform-info">
                <strong>{p.name}</strong>
                <div className="pg-platform-rating">
                  <Stars n={5} />
                  <span>{p.rating} ({p.reviews} reviews)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED TESTIMONIALS ── */}
      <section className="pg-section">
        <div className="container">
          <div ref={featRef} className={`pg-section-header ${featVis ? "reveal" : ""}`}>
            <span className="pg-eyebrow">Featured</span>
            <h2>Clients who shared their story</h2>
          </div>
          <div className={`pg-featured-grid ${featVis ? "reveal stagger" : ""}`}>
            {FEATURED_REVIEWS.map((r, i) => (
              <div key={i} className={`pg-featured-card pg-featured-card--${r.color}`}>
                <FaQuoteLeft className="pg-quote-icon" />
                <Stars n={r.stars} />
                <p className="pg-featured-quote">"{r.quote}"</p>
                <div className="pg-featured-result">{r.result}</div>
                <div className="pg-featured-author">
                  <img src={r.img} alt={r.name} className="pg-author-img" />
                  <div>
                    <strong>{r.name}</strong>
                    <span>{r.role}, {r.company}</span>
                    <span className="pg-author-industry">{r.industry} · {r.service}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL REVIEWS ── */}
      <section className="pg-section pg-section--gray">
        <div className="container">
          <div ref={allRef} className={`pg-section-header ${allVis ? "reveal" : ""}`}>
            <span className="pg-eyebrow">All Reviews</span>
            <h2>What everyone's saying</h2>
          </div>

          {/* Filter pills */}
          <div className="pg-filter-row">
            {services.map(s => (
              <button
  key={s}
  className={`pg-filter-pill ${
    activeFilter === s ? "pg-filter-pill--active" : ""
  }`}
  onClick={goTo404}
>
  {s}
</button>
            ))}
          </div>

          <div className={`pg-review-grid ${allVis ? "reveal stagger" : ""}`}>
            {filtered.map((r, i) => (
              <div key={i} className="pg-review-card">
                <Stars n={r.stars} />
                <p>"{r.text}"</p>
                <div className="pg-review-footer">
                  <strong>{r.name}</strong>
                  <span>{r.role}</span>
                  <span className="pg-review-service-tag">{r.service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO TESTIMONIAL PLACEHOLDER ── */}
      <section className="pg-section">
        <div className="container pg-narrow">
          <div className="pg-section-header">
            <span className="pg-eyebrow">In Their Own Words</span>
            <h2>Video testimonials</h2>
          </div>
          <div className="pg-video-grid">
            {[
              { name: "Sarah Johnson", company: "Luminos", img: h16},
              { name: "David Smith", company: "Nexlify", img: h17 },
              { name: "Priya Mehta", company: "Vortex IO", img: h19 },
            ].map((v, i) => (
              <div key={i} className="pg-video-thumb">
                <img src={v.img} alt={v.name} />
                <div className="pg-video-overlay">
                  <div
  className="pg-play-btn"
  onClick={goTo404}
  style={{ cursor: "pointer" }}
>
  ▶
</div>
                  <div className="pg-video-label">
                    <strong>{v.name}</strong>
                    <span>{v.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pg-cta-strip">
        <div className="container pg-cta-inner">
          <h2>Ready to become our next success story?</h2>
          <p>Book a free strategy call and let's map your growth plan.</p>
          <button
  className="pg-primary-btn pg-primary-btn--lg"
  onClick={goTo404}
>
  Book Free Call <FaArrowRight />
</button>
        </div>
      </section>
    </div>
  );
}