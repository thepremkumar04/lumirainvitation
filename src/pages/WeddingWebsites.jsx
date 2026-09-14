import { useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Heart,
  MapPin,
  Sparkles,
} from "lucide-react";
import "./SEOPage.css";

const features = [
  ["Your Story", "Tell your journey from the first meeting to the wedding day."],
  ["Wedding Events", "Show every celebration with dates, timings and venues."],
  ["Photo Gallery", "Share your favourite memories with friends and family."],
  ["Venue & Maps", "Help your guests find every celebration effortlessly."],
  ["RSVP", "Give guests a simple way to confirm their attendance."],
  ["Countdown", "Build excitement with a live countdown to your big day."],
];

export default function WeddingWebsites() {
  useEffect(() => {
    document.title = "Wedding Websites | Interactive Wedding Websites | Lumira";

    const description =
      "Create a beautiful wedding website with your story, events, photos, venue, RSVP and more. Lumira designs custom interactive wedding websites for modern couples.";

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
      "https://lumirainvitations.vercel.app/wedding-websites";

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
        <section className="seo-hero">
          <div className="seo-hero-content">
            <p className="seo-eyebrow">
              <Sparkles size={13} />
              WEDDING WEBSITES
            </p>

            <h1>
              Your Wedding,
              <em> Beautifully Online</em>
            </h1>

            <p className="seo-hero-text">
              A custom wedding website that brings your story, events, photos,
              venue, RSVP and everything your guests need together in one
              beautiful place.
            </p>

            <div className="seo-actions">
              <a href="/#invitations" className="seo-button seo-button-primary">
                See real experiences <ArrowRight size={16} />
              </a>

              <a href="/#contact" className="seo-button seo-button-secondary">
                Create my website <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="seo-intro">
          <p className="seo-eyebrow">ONE BEAUTIFUL PLACE</p>

          <h2>
            Everything about your wedding.
            <span> Together.</span>
          </h2>

          <p>
            Give your guests one elegant place to discover your story, find
            your events, explore your photos and get every important wedding
            detail.
          </p>
        </section>

        <section className="seo-feature-section">
          <div className="seo-section-heading">
            <p className="seo-eyebrow">YOUR WEDDING WEBSITE</p>

            <h2>
              Built around
              <span> your story.</span>
            </h2>
          </div>

          <div className="seo-feature-grid">
            {features.map(([title, text], index) => (
              <article className="seo-feature-card" key={title}>
                <div className="seo-feature-icon">
                  {index === 0 ? (
                    <Heart size={20} />
                  ) : index === 3 ? (
                    <MapPin size={20} />
                  ) : (
                    <Sparkles size={20} />
                  )}
                </div>

                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="seo-process">
          <div>
            <p className="seo-eyebrow">THE PROCESS</p>

            <h2>
              Simple.
              <span> Personal.</span>
            </h2>
          </div>

          <div className="seo-steps">
            <div>
              <strong>01</strong>
              <h3>Share your details</h3>
              <p>Tell us about your story, events, people and preferences.</p>
            </div>

            <div>
              <strong>02</strong>
              <h3>We build your website</h3>
              <p>
                Your information becomes a custom interactive wedding
                experience.
              </p>
            </div>

            <div>
              <strong>03</strong>
              <h3>Share with your guests</h3>
              <p>
                Send one elegant link to everyone invited to your celebration.
              </p>
            </div>
          </div>
        </section>

        <section className="seo-final-cta">
          <p className="seo-eyebrow">YOUR WEDDING, YOUR WAY</p>

          <h2>
            Create a wedding website
            <em> worth remembering.</em>
          </h2>

          <p>
            Let's turn your wedding story into a beautiful digital experience.
          </p>

          <a href="/#contact" className="seo-button seo-button-primary">
            Create my wedding website <ArrowUpRight size={16} />
          </a>
        </section>
      </main>
    </div>
  );
}