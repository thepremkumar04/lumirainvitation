import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Globe2,
  Heart,
  MapPin,
  Menu,
  MessageCircle,
  Play,
  Sparkles,
  X,
} from "lucide-react";

const invitations = [
  {
    number: "01",
    couple: "Manaswini & Dinesh",
    mood: "Classic editorial",
    url: "https://manaswini-dinesh-wedding.vercel.app/",
    accent: "ivory",
  },
  {
    number: "02",
    couple: "Sriya & Ajay Reddy",
    mood: "Romantic modern",
    url: "https://sriya-ajayreddy.vercel.app/",
    accent: "rose",
  },
  {
    number: "03",
    couple: "Talluru Wedding",
    mood: "Celebration story",
    url: "https://talluru-wedding-invite.vercel.app/",
    accent: "sand",
  },
  {
    number: "04",
    couple: "Pradyumna & Srideepika",
    mood: "Luxury cinematic",
    url: "https://pradyumnaandsrideepika.vercel.app/",
    accent: "night",
  },
];

const features = [
  ["Your story", "Turn your journey into a beautiful part of the invitation."],
  ["Every event", "Keep every celebration, date and venue beautifully organised."],
  ["Easy RSVP", "Give guests a simple way to respond from any device."],
  ["Venue & maps", "Make getting to the celebration effortless with directions."],
  ["Photo gallery", "Bring favourite memories into the experience."],
  ["Made for mobile", "Designed first for the screen your guests actually use."],
];

const deliverables = [
  ["A custom-designed invitation", "Your visual direction, typography, colours and layout — built around your celebration."],
  ["A personal wedding link", "One elegant URL your guests can open, explore and share from any device."],
  ["Your complete wedding details", "Events, venues, directions, story, gallery, RSVP and more in one place."],
  ["Mobile-first experience", "Designed for the phone first, then refined beautifully for larger screens."],
  ["A polished guest journey", "Clear navigation, thoughtful motion and details that make the invitation feel special."],
  ["Personal support", "A direct design process from first conversation to your finished invitation."],
];

const faqs = [
  ["What is a digital wedding invitation?", "It is a custom wedding website you can share with one link. Guests can explore your story, events, venues, photos and RSVP from their phone."],
  ["Can I share it on WhatsApp?", "Yes. Your invitation is designed to be shared through WhatsApp, Instagram, email, SMS or any platform that accepts a link."],
  ["Can the design be customised?", "Yes. Lumira creates the experience around your wedding, from typography and layout to colours, imagery and sections."],
  ["Can you include multiple wedding events?", "Absolutely. Engagements, mehendi, haldi, sangeet, wedding, reception and destination events can all be included."],
  ["Do you work with couples outside India?", "Yes. Lumira serves couples and families worldwide. The entire design process can be handled remotely."],
  ["Is Lumira a physical invitation?", "No. Lumira creates digital wedding invitations and wedding websites that your guests open through a link. Nothing needs to be printed or downloaded."],
  ["What happens after I enquire?", "We review your wedding details, discuss the look and features you want, recommend the right experience and send you a custom quote before any design work begins."],
  ["Can I see a demo before deciding?", "Absolutely. Explore the live invitations above to see how a Lumira experience feels on a real phone."],
  ["How long does it take?", "Most invitations can be designed and prepared within a few days after we receive the required content. Complex bespoke experiences may take longer."],
];

function Reveal({ children, className = "", delay = 0 }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function PhonePreview({ invitation, featured = false }) {
  return (
    <div className={`phone-shell ${featured ? "phone-featured" : ""} phone-${invitation.accent}`}>
      <div className="phone-topbar">
        <span />
        <span className="phone-speaker" />
        <span />
      </div>
      <div className="phone-screen">
        <iframe
          title={`${invitation.couple} live wedding invitation`}
          src={invitation.url}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
        <a className="phone-overlay" href={invitation.url} target="_blank" rel="noreferrer" aria-label={`Open ${invitation.couple} invitation`}>
          <span><Play size={13} fill="currentColor" /> Open live</span>
        </a>
      </div>
      <div className="phone-bottom" />
    </div>
  );
}

function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Lumira home">
          <span className="brand-mark">L</span>
          <span className="brand-word">LUMIRA</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#experience">Experience</a>
          <a href="#invitations">Invitations</a>
          <a href="#features">Features</a>
          <a href="#included">What you receive</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>

        <a className="header-cta" href="#contact">
          Create yours <ArrowUpRight size={15} />
        </a>

        <button className="menu-toggle" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu" aria-expanded={menuOpen}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav className="mobile-nav" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>
            {["experience", "invitations", "features", "pricing", "faq", "contact"].map((item) => (
              <a key={item} href={`#${item}`} onClick={closeMenu}>{item === "contact" ? "Create yours" : item}</a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      <main id="top">
        <section className="hero-section">
          <div className="hero-noise" />
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />
          <div className="hero-copy">
            <Reveal>
              <p className="eyebrow"><Sparkles size={12} /> Digital wedding invitations · Worldwide</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1>Your wedding deserves <em>more</em> than a PDF.</h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="hero-lead">Beautiful, interactive digital wedding invitations and wedding websites designed around your story — and made to be remembered.</p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="hero-actions">
                <a className="button button-primary" href="#invitations">Explore invitations <ArrowRight size={16} /></a>
                <a className="button button-ghost" href="#contact">Create my invitation <ArrowUpRight size={16} /></a>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="hero-trust">
                <span><Heart size={13} fill="currentColor" /> Made with intention</span>
                <span><Globe2 size={13} /> Worldwide</span>
                <span>01 — 04 live experiences</span>
              </div>
            </Reveal>
          </div>

          <motion.div
            className="hero-device"
            initial={{ opacity: 0, y: 50, rotate: 3 }}
            animate={{ opacity: 1, y: 0, rotate: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <PhonePreview invitation={invitations[0]} featured />
            <div className="floating-note floating-note-one">A story worth sharing.</div>
            <div className="floating-note floating-note-two">Designed for every screen.</div>
          </motion.div>

          <a className="scroll-cue" href="#experience"><span>Scroll to explore</span><ArrowRight size={14} /></a>
        </section>

        <section className="statement-section section-pad" id="experience">
          <Reveal>
            <p className="eyebrow">The Lumira experience</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2>An invitation guests don't just <span>open.</span><br />They experience.</h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="statement-copy">One beautiful link brings your story, celebrations, locations, memories and RSVP together — without asking your guests to download anything.</p>
          </Reveal>
        </section>

        <section className="feature-marquee" aria-label="Invitation benefits">
          <div className="marquee-track">
            {["YOUR STORY", "EVERY EVENT", "VENUE & MAPS", "PHOTO GALLERY", "EASY RSVP", "MOBILE-FIRST", "YOUR STORY", "EVERY EVENT", "VENUE & MAPS"].map((item, i) => (
              <span key={`${item}-${i}`}>{item}<b>✦</b></span>
            ))}
          </div>
        </section>

        <section className="showcase-section section-pad" id="invitations">
          <div className="section-intro">
            <Reveal>
              <p className="eyebrow">Live invitations</p>
              <h2>Explore the <span>experience.</span></h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p>Explore real digital wedding invitations created by Lumira. Open one, scroll around and imagine your own wedding invitation experience.</p>
            </Reveal>
          </div>

          <div className="invitation-grid">
            {invitations.map((invitation, index) => (
              <Reveal key={invitation.couple} delay={index * 0.06} className={`invitation-card invitation-${index + 1}`}>
                <div className="invitation-meta"><span>{invitation.number}</span><span>{invitation.mood}</span></div>
                <PhonePreview invitation={invitation} />
                <div className="invitation-footer">
                  <div><h3>{invitation.couple}</h3><p>Digital wedding invitation</p></div>
                  <a href={invitation.url} target="_blank" rel="noreferrer" aria-label={`Open ${invitation.couple}`}><ArrowUpRight size={18} /></a>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="contrast-section section-pad">
          <Reveal>
            <div className="contrast-heading">
              <p className="eyebrow">A better way to invite</p>
              <h2>Why send a PDF<br /><span>when you can send an experience?</span></h2>
            </div>
          </Reveal>
          <div className="contrast-grid">
            <Reveal>
              <div className="contrast-card muted-card">
                <span className="contrast-label">Traditional</span>
                <ul><li>Static invitation</li><li>Limited information</li><li>Hard to update</li><li>No interaction</li><li>One-way experience</li></ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="contrast-card premium-card">
                <span className="contrast-label">Lumira</span>
                <ul><li>Interactive experience</li><li>Every event in one place</li><li>Venue + directions</li><li>Gallery + story</li><li>Easy RSVP</li></ul>
                <div className="premium-stamp"><Sparkles size={15} /> Made to remember</div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="deliverables-section section-pad" id="included">
          <div className="section-intro">
            <Reveal><p className="eyebrow">What you receive</p><h2>More than a link.<br /><span>A complete experience.</span></h2></Reveal>
            <Reveal delay={0.1}><p>Everything is designed to make your invitation feel personal, useful and beautifully finished — without making the process complicated.</p></Reveal>
          </div>
          <div className="deliverables-grid">
            {deliverables.map(([title, copy], index) => (
              <Reveal key={title} delay={(index % 3) * 0.06}>
                <article className="deliverable-card">
                  <span className="deliverable-number">0{index + 1}</span>
                  <div><h3>{title}</h3><p>{copy}</p></div>
                  <Check size={16} />
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="trust-section section-pad">
          <Reveal>
            <div className="trust-panel">
              <div><p className="eyebrow">Designed with care · Delivered worldwide</p><h2>A premium invitation,<br /><span>without the complicated part.</span></h2></div>
              <div className="trust-points"><span><Check size={15}/> Custom-designed</span><span><Check size={15}/> Mobile-first</span><span><Check size={15}/> Worldwide</span><span><Check size={15}/> Personal support</span></div>
            </div>
          </Reveal>
        </section>

        <section className="features-section section-pad" id="features">
          <div className="section-intro">
            <Reveal><p className="eyebrow">Inside your invitation</p><h2>Everything your guests <span>need.</span></h2></Reveal>
            <Reveal delay={0.1}><p>Thoughtful wedding invitation features, presented beautifully. Nothing unnecessary. Everything your guests need.</p></Reveal>
          </div>
          <div className="features-grid">
            {features.map(([title, copy], index) => (
              <Reveal key={title} delay={(index % 3) * 0.06}>
                <article className="feature-card">
                  <span className="feature-number">0{index + 1}</span>
                  <div className="feature-icon">{index === 0 ? <Heart size={18} /> : index === 3 ? <MapPin size={18} /> : <Sparkles size={18} />}</div>
                  <h3>{title}</h3><p>{copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="process-section section-pad" id="process">
          <div className="process-panel">
            <Reveal><p className="eyebrow">Simple by design</p><h2>Your invitation.<br /><span>In three steps.</span></h2></Reveal>
            <div className="steps">
              {["Tell us your story", "We design the experience", "Share it with your guests"].map((title, index) => (
                <Reveal key={title} delay={index * 0.08}>
                  <div className="step"><span>0{index + 1}</span><div><h3>{title}</h3><p>{index === 0 ? "Share your wedding details, events, photos and preferences." : index === 1 ? "We turn the details into a polished digital invitation." : "Receive your link and share it anywhere you like."}</p></div></div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="pricing-section section-pad" id="pricing">
          <div className="section-intro centered-intro">
            <Reveal><p className="eyebrow">Choose your experience</p><h2>Beautiful at every <span>level.</span></h2><p>Start simple or go completely bespoke. Every Lumira invitation is designed to feel personal.</p></Reveal>
          </div>
          <div className="pricing-grid">
            {[
              { name: "Essential", price: "Custom quote", copy: "A beautiful digital invitation for the essentials.", features: ["Custom invitation design", "Wedding events", "Venue & map", "Photo gallery", "Mobile-first design", "Shareable link"] },
              { name: "Signature", price: "Custom quote", copy: "The complete Lumira experience for your celebration.", popular: true, features: ["Everything in Essential", "Couple's story", "RSVP", "Countdown", "Custom motion", "Multiple events"] },
              { name: "Luxury", price: "Bespoke quote", copy: "A completely bespoke experience, built around your vision.", features: ["Everything in Signature", "Fully bespoke design", "Advanced interactions", "Custom storytelling", "Priority refinement", "Bespoke experience"] },
            ].map((pkg, index) => (
              <Reveal key={pkg.name} delay={index * 0.06}>
                <article className={`price-card ${pkg.popular ? "price-featured" : ""}`}>
                  {pkg.popular && <div className="popular-pill">Most loved</div>}
                  <p className="price-name">{pkg.name}</p><div className="price-value">{pkg.price}</div><p className="price-copy">{pkg.copy}</p>
                  <div className="price-divider" />
                  <ul>{pkg.features.map((feature) => <li key={feature}><Check size={14} />{feature}</li>)}</ul>
                  <a className={pkg.popular ? "button button-primary" : "button button-outline"} href="#contact">Choose {pkg.name} <ArrowUpRight size={15} /></a>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="pricing-note">Every invitation is custom-quoted based on your design, features and timeline.</p>
        </section>

        <section className="emotion-section section-pad">
          <Reveal>
            <div className="emotion-card">
              <span className="emotion-mark">✦</span>
              <p className="eyebrow">Made to be remembered</p>
              <h2>Some invitations are opened.<br /><em>Some are remembered.</em></h2>
              <p>Your wedding is a once-in-a-lifetime story. Your invitation should feel like the beginning of it.</p>
            </div>
          </Reveal>
        </section>

        <section className="world-section section-pad">
          <Reveal>
            <div className="world-copy"><p className="eyebrow">Wherever you're celebrating</p><h2>We'll be there.</h2><p>From intimate celebrations to destination weddings, Lumira creates digital invitations for couples and families around the world.</p></div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="world-list"><strong>Worldwide ✦</strong><span>Custom-designed</span><span>Mobile-first</span><span>Made to be remembered</span></div>
          </Reveal>
        </section>

        <section className="faq-section section-pad" id="faq">
          <div className="section-intro">
            <Reveal><p className="eyebrow">Questions, answered</p><h2>Good to <span>know.</span></h2></Reveal>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <Reveal key={question} delay={(index % 2) * 0.05}>
                <button className={`faq-item ${openFaq === index ? "faq-open" : ""}`} onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}>
                  <span className="faq-index">0{index + 1}</span><span className="faq-question">{question}</span><ChevronDown size={18} />
                  <AnimatePresence initial={false}>{openFaq === index && <motion.div className="faq-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>{answer}</motion.div>}</AnimatePresence>
                </button>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <Reveal>
            <div className="contact-shell">
              <div className="contact-copy"><p className="eyebrow">Ready when you are</p><h2>Let's make your invitation <em>unforgettable.</em></h2><p>Tell us a little about your celebration. We'll get back to you with the best way to bring it online.</p><div className="contact-direct"><a href="mailto:lumiracreative26@gmail.com">lumiracreative26@gmail.com <ArrowUpRight size={15} /></a><a href="https://wa.me/918008307484?text=Hey%20Lumira%21%20I%27m%20interested%20in%20a%20digital%20wedding%20invitation." target="_blank" rel="noreferrer"><MessageCircle size={15} /> WhatsApp us</a><a href="https://www.instagram.com/lumirainvitations/" target="_blank" rel="noreferrer">@lumirainvitations <ArrowUpRight size={15} /></a></div></div>
              <ContactForm />
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top"><a className="brand" href="#top"><span className="brand-mark">L</span><span className="brand-word">LUMIRA</span></a><p>Digital wedding invitations, beautifully reimagined.</p><a className="footer-up" href="#top">Back to top <ArrowUpRight size={15} /></a></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Lumira</span><span>Designed for celebrations everywhere.</span><div><a href="https://www.instagram.com/lumirainvitations/" target="_blank" rel="noreferrer">Instagram</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div></div>
      </footer>

      <a className="mobile-sticky-cta" href="#contact">Create my invitation <ArrowUpRight size={15} /></a>
    </div>
  );
}

function ContactForm() {
  const [state, setState] = useState("idle");

  async function submit(event) {
    event.preventDefault();
    setState("sending");
    const form = event.currentTarget;
    try {
      const response = await fetch("https://formspree.io/f/mppagjdb", { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error("failed");
      form.reset();
      setState("success");
    } catch {
      setState("error");
    }
  }

  return (
    <form className="enquiry-form" onSubmit={submit}>
      <div className="form-row"><label>Your name<input name="name" required placeholder="Your name" autoComplete="name" /></label><label>Email<input name="email" type="email" required placeholder="you@example.com" autoComplete="email" /></label></div>
      <div className="form-row"><label>Wedding date<input name="wedding_date" type="date" /></label><label>WhatsApp / phone <span className="optional-label">optional</span><input name="phone" type="tel" placeholder="+1 555 000 0000" autoComplete="tel" /></label></div>
      <div className="form-row"><label>Preferred contact<select name="preferred_contact" defaultValue="Email"><option>Email</option><option>WhatsApp</option><option>Either</option></select></label><label>Wedding guest count <span className="optional-label">optional</span><input name="guest_count" type="number" min="1" placeholder="e.g. 150" /></label></div>
      <label>What are you looking for?<select name="service" defaultValue=""><option value="" disabled>Select an option</option><option>Digital wedding invitation</option><option>Wedding website</option><option>Not sure yet</option></select></label>
      <label>Tell us about your wedding<textarea name="message" rows="5" required placeholder="Couple names, events, style, guest count, or anything you'd like us to know..." /></label>
      {state === "success" && <p className="form-message success">Thank you — your enquiry is on its way. ✦</p>}
      {state === "error" && <p className="form-message error">Something went wrong. Please email us directly instead.</p>}
      <button className="button button-primary form-submit" disabled={state === "sending"}>{state === "sending" ? "Sending..." : "Send enquiry"} <ArrowUpRight size={16} /></button>
    </form>
  );
}

function App() {
  const currentPath = window.location.pathname.replace(/\/$/, "") || "/";

  useEffect(() => {
    const titles = {
      "/": "Luxury Digital Wedding Invitations | Lumira",
      "/privacy": "Privacy Policy | Lumira",
      "/terms": "Terms & Conditions | Lumira",
    };
    document.title = titles[currentPath] || "Page Not Found | Lumira";
  }, [currentPath]);

  if (currentPath === "/privacy") return <Privacy />;
  if (currentPath === "/terms") return <Terms />;
  if (currentPath !== "/") return <NotFound />;
  return <LandingPage />;
}

export default App;
