"use client";

import { useEffect, useState } from "react";

const services = [
  { number: "01", title: "Business & Corporate Counsel", text: "Contracts, governance, founder matters, commercial risk allocation, and practical day-to-day legal support for growing companies.", points: ["Commercial agreements", "Corporate governance", "Founder and investor matters"] },
  { number: "02", title: "Technology, AI & SaaS", text: "Terms of service, privacy policies, platform agreements, AI disclosures, licensing, and product-focused regulatory guidance.", points: ["SaaS and platform terms", "Privacy and data use", "AI product compliance"] },
  { number: "03", title: "Litigation & Dispute Support", text: "Attorney-level research, pleadings, motion practice, discovery support, case assessment, and pre-litigation strategy.", points: ["Pleadings and motions", "Demand and response letters", "Case strategy and research"] },
  { number: "04", title: "Regulatory & Legal Opinions", text: "Focused legal analysis and formal opinions for complex business models, compliance teams, payment processors, and decision-makers.", points: ["Legal memoranda", "Regulatory assessments", "Opinion letters"] },
  { number: "05", title: "Employment & Contractors", text: "Employment agreements, contractor relationships, severance review, workplace documents, and dispute-prevention guidance.", points: ["Employment agreements", "Contractor classification", "Severance and workplace issues"] },
  { number: "06", title: "Cross-Border Matters", text: "U.S.-law research, contracts, and compliance analysis for international founders, foreign-owned companies, and cross-border transactions.", points: ["International contracting", "U.S. entity issues", "Cross-border research"] }
];

const reviews = [
  { quote: "Fantastic work, quick turnaround, and very easy to communicate with. Highly recommended.", matter: "Contract Drafting & Review", detail: "Verified Upwork client", score: "5.0" },
  { quote: "Clear legal guidance, strong attention to detail, and excellent responsiveness throughout the project.", matter: "Legal Research & Advisory", detail: "Verified Upwork client", score: "5.0" },
  { quote: "The matter was handled carefully and professionally. The final work product was strong and practical.", matter: "Business Agreement Review", detail: "Verified Upwork client", score: "5.0" },
  { quote: "Worked quickly, answered our questions, and delivered a strong final document.", matter: "Independent Contractor Agreement", detail: "Verified Upwork client", score: "5.0" },
  { quote: "Excellent legal drafting, thoughtful analysis, and a very professional experience from start to finish.", matter: "Legal Memorandum", detail: "Verified Upwork client", score: "5.0" },
  { quote: "Responsive, thorough, and easy to work with. The advice was direct and immediately useful.", matter: "Business Legal Consultation", detail: "Verified Upwork client", score: "5.0" }
];

function Icon({ name }) {
  const common = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };
  const paths = {
    shield: <><path d="M12 3 4.5 6v5.5c0 4.7 3.2 8.2 7.5 9.5 4.3-1.3 7.5-4.8 7.5-9.5V6L12 3Z"/><path d="m9 12 2 2 4-4"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18"/><path d="M12 3a15 15 0 0 0 0 18"/></>,
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    menu: <><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></>,
    close: <><path d="m6 6 12 12"/><path d="m18 6-12 12"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    phone: <><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.3 19.3 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9Z"/></>,
    message: <><path d="M21 12a8 8 0 0 1-8 8H6l-4 2 1.5-4A8 8 0 1 1 21 12Z"/><path d="M8 12h.01M12 12h.01M16 12h.01"/></>,
    star: <path d="m12 2.8 2.8 5.7 6.3.9-4.6 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2-4.6-4.4 6.3-.9L12 2.8Z"/>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 12h18"/></>
  };
  return <svg {...common}>{paths[name]}</svg>;
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container nav-wrap">
          <a className="brand" href="#top" onClick={closeMenu} aria-label="Eric Bundy Law home">
            <span className="brand-mark">EB</span>
            <span className="brand-copy"><strong>Eric Bundy, Esq.</strong><small>Attorney at Law</small></span>
          </a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation"><Icon name={menuOpen ? "close" : "menu"} /></button>
          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
            <a href="#about" onClick={closeMenu}>About</a><a href="#services" onClick={closeMenu}>Services</a><a href="#approach" onClick={closeMenu}>Approach</a><a href="#reviews" onClick={closeMenu}>Reviews</a><a className="nav-cta" href="#contact" onClick={closeMenu}>Request a Consultation</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="container hero-layout">
            <div className="hero-copy">
              <div className="eyebrow"><span /> Strategic counsel for consequential matters</div>
              <h1>Clear strategy.<br/><em>Serious legal work.</em></h1>
              <p className="hero-lead">Practical, attorney-led guidance for businesses and individuals who need careful analysis, strong drafting, and responsive communication.</p>
              <div className="hero-actions"><a className="button button-gold" href="#contact">Request a Consultation <Icon name="arrow"/></a><a className="button button-ghost" href="#services">Explore Services</a></div>
              <div className="hero-trust"><div><Icon name="shield"/><span><strong>Pennsylvania Licensed</strong><small>Attorney-led legal services</small></span></div><div><Icon name="globe"/><span><strong>Nationwide Remote Work</strong><small>Where permitted by law</small></span></div></div>
            </div>
            <aside className="hero-card">
              <div className="hero-card-top"><span className="monogram">EB</span><div><p className="card-kicker">Legal counsel built around</p><h2>Your objectives, risk, and next move.</h2></div></div>
              <div className="principles"><article><span>01</span><div><h3>Thoughtful Analysis</h3><p>Careful review of the facts, governing law, and practical consequences.</p></div></article><article><span>02</span><div><h3>Clear Communication</h3><p>Direct explanations, defined scope, and responsive updates.</p></div></article><article><span>03</span><div><h3>Strong Work Product</h3><p>Documents and advice prepared for real-world use.</p></div></article></div>
              <a className="card-link" href="#contact">Discuss your matter <Icon name="arrow"/></a>
            </aside>
          </div>
          <div className="hero-footer-strip"><div className="container strip-items"><span>Business Law</span><i/><span>Technology & SaaS</span><i/><span>Contracts</span><i/><span>Litigation Support</span><i/><span>Regulatory Analysis</span></div></div>
        </section>

        <section className="section intro" id="about"><div className="container split-intro"><div className="section-label">About the Practice</div><div><h2 className="display-heading">Legal guidance should be <em>clear, practical, and built to hold up.</em></h2><div className="intro-columns"><p>Eric Bundy, Esq. provides focused legal support to companies, founders, professionals, and individuals navigating consequential legal questions.</p><p>Each engagement is approached with disciplined research, careful drafting, and an understanding that the best legal answer must also work in the client’s real-world circumstances.</p></div><div className="credentials-row"><div><strong>PA</strong><span>Pennsylvania<br/>Bar Admission</span></div><div><strong>Remote</strong><span>Efficient nationwide<br/>collaboration</span></div><div><strong>Focused</strong><span>Defined scope and<br/>clear deliverables</span></div></div></div></div></section>

        <section className="section services" id="services"><div className="container"><div className="section-heading-row"><div><div className="section-label light">Practice Areas</div><h2 className="display-heading light-text">Sophisticated support.<br/><em>Practical execution.</em></h2></div><p>Focused legal services designed for clients who value clear answers, strong drafting, and work that advances the matter—not generic summaries.</p></div><div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}><div className="service-number">{service.number}</div><h3>{service.title}</h3><p>{service.text}</p><ul>{service.points.map((point) => <li key={point}><Icon name="check"/>{point}</li>)}</ul><a href="#contact">Discuss this service <Icon name="arrow"/></a></article>)}</div></div></section>

        <section className="section approach" id="approach"><div className="container approach-layout"><div className="approach-visual"><div className="visual-seal"><span>EB</span><small>Attorney at Law</small></div><div className="visual-caption"><strong>Professional, responsive, prepared.</strong><span>Every engagement begins with the facts, the law, and the client’s real objective.</span></div></div><div className="approach-copy"><div className="section-label">The Approach</div><h2 className="display-heading">A disciplined process from <em>first review to final work product.</em></h2><p className="large-copy">The goal is not simply to produce a document. It is to identify the real issue, organize the analysis, reduce avoidable risk, and deliver work the client can use with confidence.</p><div className="process-list"><article><span>1</span><div><h3>Understand the matter</h3><p>Clarify objectives, timeline, jurisdiction, available documents, and practical constraints.</p></div></article><article><span>2</span><div><h3>Analyze the legal and business risk</h3><p>Research the governing law, identify pressure points, and separate material issues from noise.</p></div></article><article><span>3</span><div><h3>Deliver a strong, usable result</h3><p>Provide clear drafting, direct recommendations, and a final product designed for the next step.</p></div></article></div></div></div></section>

        <section className="section reviews" id="reviews"><div className="container"><div className="reviews-header"><div><div className="section-label">Client Reviews</div><h2 className="display-heading">Trusted by clients on <em>Upwork.</em></h2><p className="reviews-intro">Selected feedback from completed legal engagements. Presented prominently because strong legal work should be supported by a consistent record of professionalism, responsiveness, and useful results.</p></div><div className="upwork-summary"><div className="upwork-wordmark"><span>up</span>work</div><div className="summary-score"><strong>5.0</strong><div className="stars">★★★★★</div><small>Selected verified client feedback</small></div></div></div>
          <div className="review-feature"><div className="review-feature-copy"><span className="verified-pill">✓ Verified Upwork feedback</span><blockquote>“Fantastic work, quick turnaround, and very easy to communicate with. Highly recommended.”</blockquote><div className="feature-meta"><strong>Contract Drafting & Review</strong><span>5.0 / 5.0 · Completed legal project</span></div></div><div className="review-profile-card"><div className="profile-top"><div className="profile-avatar">EB</div><div><strong>Eric Bundy, Esq.</strong><span>Attorney at Law</span></div></div><div className="profile-stats"><div><strong>5.0</strong><span>Client rating</span></div><div><strong>100%</strong><span>Commitment to quality</span></div><div><strong>PA</strong><span>Licensed attorney</span></div></div><p>Business, technology, contract, regulatory, and litigation support for clients who need careful, attorney-level work.</p></div></div>
          <div className="review-grid">{reviews.slice(1).map((review) => <article className="review-card" key={review.matter}><div className="review-card-top"><div className="stars" aria-label="5 out of 5 stars">★★★★★</div><span>{review.score}</span></div><blockquote>“{review.quote}”</blockquote><footer><strong>{review.matter}</strong><span>{review.detail}</span></footer></article>)}</div>
          <div className="review-note"><Icon name="shield"/><p>Reviews shown are selected client feedback. Client identities and confidential matter details are not displayed.</p></div>
        </div></section>

        <section className="section contact" id="contact"><div className="container contact-layout"><div className="contact-copy"><div className="section-label light">Start a Conversation</div><h2 className="display-heading light-text">Tell me what you need to <em>solve.</em></h2><p>Share a brief description of your matter, the relevant jurisdiction, your preferred timeline, and the type of help you are seeking. No attorney-client relationship is formed until an engagement is confirmed in writing.</p><div className="contact-details"><a href="mailto:contact@ericbundylaw.com"><Icon name="mail"/><span><small>Email</small>contact@ericbundylaw.com</span></a><a href="https://wa.me/12675550198" target="_blank" rel="noreferrer"><Icon name="message"/><span><small>WhatsApp</small>Start a secure conversation</span></a></div></div><form className="contact-form" action="mailto:contact@ericbundylaw.com" method="post" encType="text/plain"><div className="form-row"><label>Name<input name="name" required/></label><label>Email<input name="email" type="email" required/></label></div><label>Type of matter<select name="matter" defaultValue=""><option value="" disabled>Select one</option><option>Business or contract matter</option><option>Technology, AI, SaaS, or privacy</option><option>Litigation or dispute support</option><option>Legal memorandum or opinion</option><option>Employment or contractor issue</option><option>Other</option></select></label><label>How can I help?<textarea name="message" rows="6" required placeholder="Please include the jurisdiction, relevant deadline, and a concise description of the matter."/></label><button className="button button-gold submit-button" type="submit">Send Consultation Request <Icon name="arrow"/></button><p className="form-disclaimer">Do not send confidential or time-sensitive information until an engagement is confirmed.</p></form></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-top"><a className="brand" href="#top"><span className="brand-mark">EB</span><span className="brand-copy"><strong>Eric Bundy, Esq.</strong><small>Attorney at Law</small></span></a><p>Pennsylvania-licensed attorney. Services in other jurisdictions are limited to matters permitted by applicable law and professional rules.</p><a href="#top">Back to top ↑</a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Eric Bundy, Esq.</span><p>This website is attorney advertising. Website content is general information and is not legal advice. Viewing this site or sending a message does not create an attorney-client relationship.</p></div></footer>
      <a className="floating-chat" href="https://wa.me/12675550198" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><Icon name="message"/><span>WhatsApp</span></a>
    </>
  );
}
