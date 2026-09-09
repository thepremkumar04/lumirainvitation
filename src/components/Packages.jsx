import { Check, ArrowUpRight } from "lucide-react";

const packages = [
  {
    name: "Starter",
    description: "For individuals and simple business websites.",
    features: [
      "Modern responsive website",
      "Up to 5 pages",
      "Mobile optimized",
      "Contact / enquiry form",
      "Basic SEO setup",
    ],
  },
  {
    name: "Professional",
    description:
      "For businesses looking for a complete digital presence.",
    popular: true,
    features: [
      "Everything in Starter",
      "Up to 10 pages",
      "Premium UI/UX design",
      "Advanced animations",
      "WhatsApp integration",
      "Google Maps integration",
      "SEO optimization",
    ],
  },
  {
    name: "Custom",
    description:
      "For unique ideas and advanced digital solutions.",
    features: [
      "Custom requirements",
      "Web applications",
      "Booking systems",
      "Online stores",
      "Dashboards",
      "API integrations",
      "Advanced functionality",
    ],
  },
];

export default function Packages() {
  return (
    <section className="packages section" id="packages">
      <div className="section-heading">
        <div>
          <p className="eyebrow">PACKAGES</p>

          <h2>
            Choose your
            <br />
            <span>starting point.</span>
          </h2>
        </div>

        <p className="section-description">
          Every project is different. Choose a starting package
          or contact us for a completely custom solution.
        </p>
      </div>

      <div className="packages-grid">
        {packages.map((pkg) => (
          <article
            className={`package-card ${
              pkg.popular ? "package-featured" : ""
            }`}
            key={pkg.name}
          >
            {pkg.popular && (
              <div className="popular-badge">
                MOST POPULAR
              </div>
            )}

            <h3>{pkg.name}</h3>

            <p className="package-description">
              {pkg.description}
            </p>

            <div className="package-divider" />

            <ul>
              {pkg.features.map((feature) => (
                <li key={feature}>
                  <Check size={16} />
                  {feature}
                </li>
              ))}
            </ul>

            <a href="#contact" className="package-btn">
              Get a Quote
              <ArrowUpRight size={17} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}