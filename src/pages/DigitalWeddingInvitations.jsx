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

const features = [
  {
    title: "Custom Design",
    text: "Your typography, colours, imagery and layout are designed around your celebration.",
    icon: <Sparkles size={20} />,
  },
  {
    title: "Mobile First",
    text: "Designed beautifully for the phones your wedding guests actually use.",
    icon: <Heart size={20} />,
  },
  {
    title: "Easy Sharing",
    text: "Share your invitation through WhatsApp, Instagram, SMS, email and more.",
    icon: <ArrowUpRight size={20} />,
  },
  {
    title: "Every Wedding Event",
    text: "Bring your engagement, mehendi, haldi, sangeet, wedding and reception together.",
    icon: <Sparkles size={20} />,
  },
  {
    title: "Venue & Maps",
    text: "Give guests clear venue information and directions in one place.",
    icon: <MapPin size={20} />,
  },
  {
    title: "Easy RSVP",
    text: "Make it simple for your guests to respond from any device.",
    icon: <Check size={20} />,
  },
];

const faqs = [
  [
    "What is a digital wedding invitation?",
    "A digital wedding invitation is an online invitation that guests can open through a link. It can include your story, wedding events, photos, venue, maps, RSVP and more."
  ],
  [
    "Can I share my Lumira invitation on WhatsApp?",
    "Yes. Your Lumira invitation is designed to be shared easily through WhatsApp, Instagram, SMS, email or any platform that supports links."
  ],
  [
    "Can the invitation be customised?",
    "Yes. Lumira creates each invitation around your wedding. Colours, typography, imagery, sections, animations and content can all be customised."
  ],
  [
    "Do guests need to download an app?",
    "No. Guests can open the invitation directly in their browser using the invitation link."
  ],
  [
    "Can I include multiple wedding events?",
    "Absolutely. You can include engagement, mehendi, haldi, sangeet, wedding, reception and other celebrations."
  ],
];

function setSEO() {
  document.title =
    "Digital Wedding Invitations | Luxury Online Wedding Cards | Lumira";

  const description =
    "Create a luxury digital wedding invitation designed around your story. Beautiful, interactive and mobile-friendly wedding invitations that are easy to share with your guests.";

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
    "https://lumirainvitations.vercel.app/digital-wedding-invitations";
}

export default function DigitalWeddingInvitations() {
  useEffect(() => {
    setSEO();
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
              DIGITAL WEDDING INVITATIONS
            </p>

            <h1>
              Luxury Digital Wedding
              <em> Invitations</em>
            </h1>

            <p className="seo-hero-text">
              Your wedding deserves more than a static image. Create a
              beautiful, interactive invitation designed around your story and
              made to be remembered.
            </p>

            <div className="seo-actions">
              <a href="/#invitations" className="seo-button seo-button-primary">
                Explore invitations <ArrowRight size={16} />
              </a>

              <a href="/#contact" className="seo-button seo-button-secondary">
                Create yours <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="seo-intro">
          <p className="seo-eyebrow">MORE THAN A DIGITAL CARD</p>

          <h2>
            An invitation your guests
            <span> experience.</span>
          </h2>

          <p>
            Lumira transforms your wedding details into a digital experience
            your guests can open, explore and share from any device.
          </p>
        </section>

        <section className="seo-feature-section">
          <div className="seo-section-heading">
            <p className="seo-eyebrow">INSIDE YOUR INVITATION</p>

            <h2>
              Everything your guests
              <span> need.</span>
            </h2>
          </div>

          <div className="seo-feature-grid">
            {features.map((feature) => (
              <article className="seo-feature-card" key={feature.title}>
                <div className="seo-feature-icon">{feature.icon}</div>

                <h3>{feature.title}</h3>

                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="seo-process">
          <div>
            <p className="seo-eyebrow">HOW IT WORKS</p>

            <h2>
              Your invitation.
              <span> Made simple.</span>
            </h2>
          </div>

          <div className="seo-steps">
            <div>
              <strong>01</strong>
              <h3>Tell us your story</h3>
              <p>
                Share your wedding details, photos, events and design
                preferences.
              </p>
            </div>

            <div>
              <strong>02</strong>
              <h3>We design the experience</h3>
              <p>
                We turn your details into a polished digital wedding
                invitation.
              </p>
            </div>

            <div>
              <strong>03</strong>
              <h3>Share it with your guests</h3>
              <p>
                Receive your invitation link and share it wherever you want.
              </p>
            </div>
          </div>
        </section>

        <section className="seo-faq">
          <p className="seo-eyebrow">QUESTIONS, ANSWERED</p>

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
          <p className="seo-eyebrow">MAKE IT YOURS</p>

          <h2>
            Your wedding story deserves
            <em> a beautiful beginning.</em>
          </h2>

          <p>
            Tell us about your celebration and we'll help you create a digital
            wedding invitation around it.
          </p>

          <div className="seo-actions">
            <a href="/#contact" className="seo-button seo-button-primary">
              Create my invitation <ArrowUpRight size={16} />
            </a>

            <a
              href="https://wa.me/918008307484?text=Hey%20Lumira%21%20I%27m%20interested%20in%20a%20digital%20wedding%20invitation."
              target="_blank"
              rel="noreferrer"
              className="seo-button seo-button-secondary"
            >
              <MessageCircle size={16} />
              WhatsApp us
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}