"use client";

import { useEffect, useState } from "react";

const services = [
  {
    number: "01",
    title: "Business & Corporate Counsel",
    text: "Entity matters, commercial agreements, governance, risk allocation, and practical legal support for growing businesses.",
    points: ["Contracts and negotiations", "Corporate governance", "Founder and investor matters"]
  },
  {
    number: "02",
    title: "Technology, AI & SaaS",
    text: "Terms of service, privacy policies, platform agreements, licensing, AI disclosures, and product-focused regulatory guidance.",
    points: ["SaaS and platform terms", "Privacy and data use", "AI and product compliance"]
  },
  {
    number: "03",
    title: "Litigation & Dispute Support",
    text: "Attorney-level research, pleadings, motion practice, discovery support, case assessment, and pre-litigation strategy.",
    points: ["Pleadings and motions", "Demand and response letters", "Case strategy and research"]
  },
  {
    number: "04",
    title: "Regulatory & Legal Opinions",
    text: "Focused legal analysis and opinion letters for complex business models, payment processors, compliance teams, and decision-makers.",
    points: ["Legal memoranda", "Regulatory assessments", "Opinion letters"]
  },
  {
    number: "05",
    title: "Employment & Independent Contractors",
    text: "Employment agreements, contractor relationships, severance review, workplace documents, and dispute-prevention guidance.",
    points: ["Employment agreements", "Contractor classification", "Severance and workplace issues"]
  },
  {
    number: "06",
    title: "Cross-Border Business Matters",
    text: "Research, contracts, and U.S.-law analysis for international founders, foreign-owned companies, and cross-border transactions.",
    points: ["International contracting", "U.S. entity issues", "Cross-border legal research"]
  }
];

const reviews = [
  {
    quote: "Fantastic work, quick turnaround, and very easy to communicate with. Highly recommended.",
    matter: "Contract Drafting & Review"
  },
  {
    quote: "Clear legal guidance, strong attention to detail, and excellent responsiveness throughout the project.",
    matter: "Legal Research & Advisory"
  },
  {
    quote: "The matter was handled carefully and professionally. The final work product was strong and practical.",
    matter: "Business Agreement Review"
  }
];

function Icon({ name }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true
  };

  const paths = {
    scale: <><path d="M12 3v18"/><path d="M5 6h14"/><path d="m5 6-3 6h6L5 6Z"/><path d="m19 6-3 6h6l-3-6Z"/><path d="M8 21h8"/></>,
    shield: <><path d="M12 3 4.5 6v5.5c0 4.7 3.2 8.2 7.5 9.5 4.3-1.3 7.5-4.8 7.5-9.5V6L12 3Z"/><path d="m9 12 2 2 4-4"/></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 12h18"/><path d="M10 12v2h4v-2"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18"/><path d="M12 3a15 15 0 0 0 0 18"/></>,
    message: <><path d="M21 12a8 8 0 0 1-8 8H6l-4 2 1.5-4A8 8 0 1 1 21 12Z"/><path d="M8 12h.01M12 12h.01M16 12h.01"/></>,
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    menu: <><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></>,
    close: <><path d="m6 6 12 12"/><path d="m18 6-12 12"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    phone: <><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.3 19.3 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9Z"/></>
  };
  return <svg {...common}>{paths[name]}</svg>;
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container nav-wrap">
          <a className="brand" href="#top" onClick={closeMenu} aria-label="Eric Bundy Law home">
            <span className="brand-mark">EB</span>
            <span className="brand-copy">
              <strong>Eric Bundy, Esq.</strong>
              <small>Attorney at Law</small>
            </span>
          </a>

          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>

          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#approach" onClick={closeMenu}>Approach</a>
            <a href="#reviews" onClick={closeMenu}>Reviews</a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Request a Consultation</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-glow hero-glow-one" aria-hidden="true" />
          <div className="hero-glow hero-glow-two" aria-hidden="true" />
          <div className="container hero-layout">
            <div className="hero-copy reveal">
              <div className="eyebrow"><span /> Strategic legal counsel for complex matters</div>
              <h1>Clear strategy.<br /><em>Serious legal work.</em></h1>
              <p className="hero-lead">
                Practical, attorney-led guidance for businesses and individuals who need careful analysis, strong drafting, and responsive communication.
              </p>
              <div className="hero-actions">
                <a className="button button-gold" href="#contact">Request a Consultation <Icon name="arrow" /></a>
                <a className="button button-ghost" href="#services">Explore Services</a>
              </div>
              <div className="hero-trust">
                <div><Icon name="shield" /><span><strong>Pennsylvania Licensed</strong><small>Attorney-led legal services</small></span></div>
                <div><Icon name="globe" /><span><strong>Nationwide Remote Work</strong><small>Where permitted by law</small></span></div>
              </div>
            </div>

            <aside className="hero-card reveal delay-one">
              <div className="hero-card-top">
                <span className="monogram">EB</span>
                <div>
                  <p className="card-kicker">Legal counsel built around</p>
                  <h2>Your objectives, risk, and next move.</h2>
                </div>
              </div>
              <div className="principles">
                <article><span>01</span><div><h3>Thoughtful Analysis</h3><p>Careful review of the facts, governing law, and practical business consequences.</p></div></article>
                <article><span>02</span><div><h3>Clear Communication</h3><p>Direct explanations, defined scope, and responsive updates throughout the engagement.</p></div></article>
                <article><span>03</span><div><h3>Strong Work Product</h3><p>Documents and advice prepared to be useful, persuasive, and ready for real-world use.</p></div></article>
              </div>
              <a className="card-link" href="#contact">Discuss your matter <Icon name="arrow" /></a>
            </aside>
          </div>
          <div className="hero-footer-strip">
            <div className="container strip-items">
              <span>Business Law</span><i />
              <span>Technology & SaaS</span><i />
              <span>Contracts</span><i />
              <span>Litigation Support</span><i />
              <span>Regulatory Analysis</span>
            </div>
          </div>
        </section>

        <section className="intro section" id="about">
          <div className="container split-intro">
            <div className="section-label">About the Practice</div>
            <div>
              <h2 className="display-heading">Legal guidance should be <em>clear, practical, and built to hold up.</em></h2>
              <div className="intro-columns">
                <p>Eric Bundy, Esq. provides focused legal support to companies, founders, professionals, and individuals navigating consequential legal questions.</p>
                <p>Each engagement is approached with disciplined research, careful drafting, and an understanding that the best legal answer must also work in the client’s real-world circumstances.</p>
              </div>
              <div className="credentials-row">
                <div><strong>PA</strong><span>Pennsylvania<br />Bar Admission</span></div>
                <div><strong>Remote</strong><span>Efficient nationwide<br />collaboration</span></div>
                <div><strong>Focused</strong><span>Defined scope and<br />clear deliverables</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="container">
            <div className="section-heading-row">
              <div>
                <div className="section-label light">Practice Areas</div>
                <h2 className="display-heading light-text">Sophisticated support.<br /><em>Practical execution.</em></h2>
              </div>
              <p>Selected services are offered on a defined-scope basis. Representation and jurisdictional availability depend on the matter.</p>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <div className="service-number">{service.number}</div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <ul>
                    {service.points.map((point) => <li key={point}><Icon name="check" />{point}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="approach section" id="approach">
          <div className="container approach-layout">
            <div className="approach-visual">
              <div className="visual-frame">
                <div className="visual-seal"><span>EB</span><small>Counsel • Strategy • Advocacy</small></div>
                <div className="visual-caption"><strong>Professional headshot area</strong><span>Add an approved photograph when ready.</span></div>
              </div>
            </div>
            <div className="approach-copy">
              <div className="section-label">The Approach</div>
              <h2 className="display-heading">Substance first.<br /><em>No shallow work.</em></h2>
              <p className="large-copy">The goal is not simply to produce a document. It is to understand the matter, identify the legal and practical pressure points, and deliver work that helps the client make a confident next decision.</p>
              <div className="process-list">
                <article><span>1</span><div><h3>Understand the objective</h3><p>Clarify the facts, desired outcome, timing, and decision-makers.</p></div></article>
                <article><span>2</span><div><h3>Identify the real risks</h3><p>Separate material legal exposure from lower-priority issues and noise.</p></div></article>
                <article><span>3</span><div><h3>Deliver a usable solution</h3><p>Provide clear advice and polished work product suited to the client’s next step.</p></div></article>
              </div>
            </div>
          </div>
        </section>

        <section className="reviews section" id="reviews">
          <div className="container">
            <div className="reviews-header">
              <div>
                <div className="section-label">Client Feedback</div>
                <h2 className="display-heading">Trusted for careful work<br /><em>and clear communication.</em></h2>
              </div>
              <div className="rating-block"><strong>5.0</strong><span>★★★★★</span><small>Selected client feedback</small></div>
            </div>
            <div className="review-grid">
              {reviews.map((review, index) => (
                <blockquote key={review.matter}>
                  <span className="quote-mark">“</span>
                  <p>{review.quote}</p>
                  <footer><strong>{review.matter}</strong><span>Verified project feedback</span></footer>
                  <small>0{index + 1}</small>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="container contact-layout">
            <div className="contact-copy">
              <div className="section-label light">Start a Conversation</div>
              <h2 className="display-heading light-text">Bring the matter.<br /><em>Let’s find the path forward.</em></h2>
              <p>Share a brief overview of the issue, relevant jurisdiction, timing, and the assistance you need. No attorney-client relationship is formed until an engagement is confirmed in writing.</p>
              <div className="contact-details">
                <a href="mailto:contact@ericbundylaw.com"><Icon name="mail" /><span><small>Email</small>contact@ericbundylaw.com</span></a>
                <a href="https://wa.me/12675550198" target="_blank" rel="noreferrer"><Icon name="message" /><span><small>WhatsApp</small>Start a secure conversation</span></a>
              </div>
            </div>

            <form className="contact-form" action="mailto:contact@ericbundylaw.com" method="post" encType="text/plain">
              <div className="form-row">
                <label>Full name<input name="name" type="text" required placeholder="Your name" /></label>
                <label>Email address<input name="email" type="email" required placeholder="you@example.com" /></label>
              </div>
              <div className="form-row">
                <label>Phone number<input name="phone" type="tel" placeholder="Optional" /></label>
                <label>Type of matter<select name="matter" defaultValue=""><option value="" disabled>Select one</option><option>Business / Corporate</option><option>Technology / SaaS / Privacy</option><option>Contract Review or Drafting</option><option>Litigation Support</option><option>Regulatory / Legal Opinion</option><option>Other</option></select></label>
              </div>
              <label>How can I help?<textarea name="message" required rows="6" placeholder="Briefly describe the matter, jurisdiction, and timing." /></label>
              <label className="checkbox"><input type="checkbox" required /><span>I understand that submitting this form does not create an attorney-client relationship.</span></label>
              <button className="button button-gold submit-button" type="submit">Send Inquiry <Icon name="arrow" /></button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-top">
          <div className="brand footer-brand"><span className="brand-mark">EB</span><span className="brand-copy"><strong>Eric Bundy, Esq.</strong><small>Attorney at Law</small></span></div>
          <p>Strategic legal counsel, careful drafting, and responsive service.</p>
          <a href="#top">Back to top ↑</a>
        </div>
        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} Eric Bundy, Esq. All rights reserved.</p>
          <p>Attorney advertising. Prior results do not guarantee a similar outcome. Services are subject to jurisdictional and professional-responsibility requirements.</p>
        </div>
      </footer>

      <a className="floating-chat" href="https://wa.me/12675550198" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><Icon name="message" /><span>WhatsApp</span></a>
    </>
  );
}
