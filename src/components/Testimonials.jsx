import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const testimonials = [
  {
    number: "01",
    client: "Suresh Studios - Tirupati & Puttur",
    type: "Photography Website",
    quote:
      "Lumira understood what we needed and turned our photography work into a professional digital experience. The website feels modern, premium and easy for our clients to explore. The attention to detail and willingness to refine everything made the whole process smooth.",
    link: "#work",
  },
  {
    number: "02",
    client: "Jayasree & Venkatsai",
    type: "Wedding Invitation Website",
    quote:
      "We wanted something more personal than a traditional invitation, and Lumira created a beautiful interactive wedding website that brought everything together in one place. It made sharing our wedding details with family and friends much more special.",
    link: "https://jayasree-venkatsai.vercel.app/",
  },
  {
    number: "03",
    client: "Sriya & Ajay Reddy",
    type: "Wedding Invitation Website",
    quote:
      "Lumira turned our wedding invitation into a memorable digital experience. The design felt elegant, personal and easy to share, and the attention to small details made the website feel truly special..",
    link: "https://sriya-ajayreddy.vercel.app/",
  },
];

export default function Testimonials() {
  return (
    <section
      className="testimonials section"
      id="testimonials"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            CLIENT EXPERIENCES
          </p>

          <h2>
            Work that speaks
            <br />
            <span>for itself.</span>
          </h2>
        </div>

        <p className="section-description">
          A selection of projects we've created for
          businesses, professionals and couples.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <motion.article
            className="testimonial-card"
            key={item.number}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -6,
            }}
          >
            <div className="testimonial-top">
              <span>{item.number}</span>

              <span>
                {item.type}
              </span>
            </div>

            <blockquote>
              “{item.quote}”
            </blockquote>

            <div className="testimonial-bottom">
              <strong>
                {item.client}
              </strong>

              {item.link !== "#work" && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${item.client} project`}
                >
                  View Project
                  <ArrowUpRight size={15} />
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}