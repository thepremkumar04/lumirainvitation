import { useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Heart,
  MapPin,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import "./SEOPage.css";

const services = [
  ["Telugu Wedding Invitations", "Beautiful digital invitations for traditional Telugu wedding celebrations."],
  ["Engagement Invitations", "Elegant digital invitations for engagement ceremonies and pre-wedding celebrations."],
  ["Wedding Websites", "A complete digital home for your story, events, photos, venue and RSVP."],
  ["Reception Invitations", "Create a dedicated digital experience for your reception and celebrations."],
  ["WhatsApp Invitations", "Share your wedding invitation instantly with friends and family."],
  ["Custom Designs", "A unique invitation designed around your couple, style and celebration."],
];

const faqs = [
  [
    "Do you create digital wedding invitations for Tirupati weddings?",
    "Yes. Lumira creates custom digital wedding invitations and interactive wedding websites for couples celebrating in Tirupati and beyond."
  ],
  [
    "Can you create Telugu wedding invitations?",
    "Yes. Your invitation can be designed around Telugu wedding traditions, events, wording, imagery and your preferred visual style."
  ],
  [
    "Can I share the invitation through WhatsApp?",
    "Yes. Your Lumira invitation is delivered as a link that can be shared easily through WhatsApp and other platforms."
  ],
  [
    "Can I include wedding venues and Google Maps?",
    "Yes. Wedding venue information and map directions can be included so guests can easily find your celebration."
  ],
];

export default function TirupatiWeddingInvitations() {
  useEffect(() => {
    document.title =
      "Wedding Invitations in Tirupati | Digital Wedding Invitations | Lumira";

    const description =
      "Looking for a wedding invitation in Tirupati? Lumira creates luxury digital wedding invitations and interactive wedding websites for couples celebrating in Tirupati and beyond.";

    let meta = document.querySelector('meta[name="description"]');

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content = description;

    let canonical = document.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href =
      "https://lumirainvitations.vercel.app/wedding-invitations-tirupati";

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="seo-page">
      <header className="seo-header">
        <a className="seo-brand" href="/">
          <span className="seo-brand-mark">L</span>
          <span>LUMIRA</span>
        </a>

        <nav>
          <a href="/digital-wedding-invitations">Invitations</a>
          <a href="/wedding-websites">Wedding Websites</a>
          <a href="/#invitations">Portfolio</a>
          <a href="/#contact" className="seo-nav-cta">
            Create yours <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="seo-hero seo-local-hero">
          <div className="seo-hero-content">
            <p className="seo-eyebrow">
              <MapPin size={13} />
              TIRUPATI · ANDHRA PRADESH
            </p>

            <h1>
              Digital Wedding Invitations
              <em> in Tirupati</em>
            </h1>

            <p className="seo-hero-text">
              From traditional Telugu weddings to modern celebrations, Lumira
              creates custom digital wedding invitations and interactive
              wedding websites designed around your story.
            </p>

            <div className="seo-actions">
              <a href="/#contact" className="seo-button seo-button-primary">
                Create your invitation <ArrowRight size={16} />
              </a>

              <a href="/digital-wedding-invitations" className="seo-button seo-button-secondary">
                Explore invitations <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="seo-intro">
          <p className="seo-eyebrow">WEDDING INVITATIONS IN TIRUPATI</p>

          <h2>
            Your celebration.
            <span> Your story.</span>
          </h2>

          <p>
            Lumira creates digital wedding invitations for couples and
            families celebrating in Tirupati, with experiences designed to
            look beautiful and make every important detail easy for guests to
            find.
          </p>
        </section>

        <section className="seo-feature-section">
          <div className="seo-section-heading">
            <p className="seo-eyebrow">OUR SERVICES</p>

            <h2>
              Designed for every
              <span> celebration.</span>
            </h2>
          </div>

          <div className="seo-feature-grid">
            {services.map(([title, text]) => (
              <article className="seo-feature-card" key={title}>
                <div className="seo-feature-icon">
                  <Sparkles size={20} />
                </div>

                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="seo-process">
          <div>
            <p className="seo-eyebrow">FROM IDEA TO INVITATION</p>

            <h2>
              Your invitation.
              <span> Made personal.</span>
            </h2>
          </div>

          <div className="seo-steps">
            <div>
              <strong>01</strong>
              <h3>Share your details</h3>
              <p>
                Tell us about your wedding, events, design and guest
                experience.
              </p>
            </div>

            <div>
              <strong>02</strong>
              <h3>We design it</h3>
              <p>
                We create your custom digital wedding invitation around your
                story.
              </p>
            </div>

            <div>
              <strong>03</strong>
              <h3>Share with everyone</h3>
              <p>
                Get your invitation link and share it with friends and family.
              </p>
            </div>
          </div>
        </section>

        <section className="seo-faq">
          <p className="seo-eyebrow">TIRUPATI WEDDING INVITATION FAQ</p>

          <h2>
            Good to
            <span> know.</span>
          </h2>

          <div className="seo-faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="seo-final-cta">
          <p className="seo-eyebrow">
            <Heart size={13} />
            MADE FOR YOUR CELEBRATION
          </p>

          <h2>
            Looking for a wedding invitation
            <em> in Tirupati?</em>
          </h2>

          <p>
            Tell Lumira about your celebration and let's create something your
            guests will remember.
          </p>

          <div className="seo-actions">
            <a href="/#contact" className="seo-button seo-button-primary">
              Start your invitation <ArrowUpRight size={16} />
            </a>

            <a
              href="https://wa.me/918008307484?text=Hey%20Lumira%21%20I%27m%20looking%20for%20a%20wedding%20invitation%20in%20Tirupati."
              target="_blank"
              rel="noreferrer"
              className="seo-button seo-button-secondary"
            >
              <MessageCircle size={16} />
              WhatsApp Lumira
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}