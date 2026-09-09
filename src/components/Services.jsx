import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { useRef } from "react";

import {
  Store,
  Heart,
  CalendarCheck,
  FileText,
  QrCode,
  Camera,
  Ticket,
  ShoppingBag,
  GraduationCap,
  Dumbbell,
} from "lucide-react";

const services = [
  [
    "01",
    "Restaurant / Shop Website",
    "Modern online presence for local businesses.",
    Store,
  ],
  [
    "02",
    "Wedding Invitation Website",
    "Beautiful interactive digital wedding invitations.",
    Heart,
  ],
  [
    "03",
    "Doctor / Salon Booking",
    "Simple appointment and booking experiences.",
    CalendarCheck,
  ],
  [
    "04",
    "Resume Builder",
    "Professional resume creation for students and job seekers.",
    FileText,
  ],
  [
    "05",
    "QR Digital Menu",
    "Digital menus with ordering functionality.",
    QrCode,
  ],
  [
    "06",
    "Photographer Portfolio",
    "Elegant portfolios designed to showcase creative work.",
    Camera,
  ],
  [
    "07",
    "College Event Registration",
    "Event pages with registration and participant management.",
    Ticket,
  ],
  [
    "08",
    "Bakery / Boutique Store",
    "Beautiful online stores for products and collections.",
    ShoppingBag,
  ],
  [
    "09",
    "Coaching Center Website",
    "Professional websites for educational businesses.",
    GraduationCap,
  ],
  [
    "10",
    "Gym / Fitness Studio",
    "Modern fitness websites with plans and enquiries.",
    Dumbbell,
  ],
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 30,
    rotateX: 5,
  },

  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,

    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Services() {
  const servicesRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: servicesRef,
    offset: ["start end", "end start"],
  });

  const servicesY = useTransform(
    scrollYProgress,
    [0, 1],
    [70, -70]
  );

  return (
    <motion.section
  ref={servicesRef}
  className="services section"
  id="services"
  initial={{
    opacity: 0,
    scale: 0.96,
    y: 45,
  }}
  whileInView={{
    opacity: 1,
    scale: 1,
    y: 0,
  }}
  viewport={{
    once: true,
    amount: 0.12,
  }}
  transition={{
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1],
  }}
>
      {/* Decorative parallax glow */}
      <motion.div
        className="services-parallax"
        style={{
          y: servicesY,
        }}
      />

      {/* Section heading */}
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            WHAT WE BUILD
          </p>

          <h2>
            Solutions made
            <br />
            <span>for you.</span>
          </h2>
        </div>

        <p className="section-description">
          From small businesses to personal brands, we create
          digital experiences tailored to your goals.
        </p>
      </div>

      {/* Services */}
      <motion.div
        className="services-grid"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.1,
        }}
      >
        {services.map(
          ([number, title, description, Icon]) => (
            <motion.article
              className="service-card"
              key={number}
              variants={card}
              whileHover={{
                y: -12,
                rotateX: 4,
                rotateY: -4,
                scale: 1.015,
              }}
              transition={{
                duration: 0.35,
              }}
            >
              <div className="service-top">
                <span>{number}</span>

                <motion.div
                  whileHover={{
                    rotate: 20,
                    scale: 1.2,
                  }}
                >
                  <Icon
                    size={24}
                    strokeWidth={1.5}
                  />
                </motion.div>
              </div>

              <div>
                <h3>{title}</h3>

                <p>{description}</p>
              </div>

              <motion.span
                className="service-arrow"
                initial={{
                  opacity: 0,
                  x: -5,
                }}
                whileHover={{
                  opacity: 1,
                  x: 0,
                }}
              >
                ↗
              </motion.span>
            </motion.article>
          )
        )}
      </motion.div>
    </motion.section>
  );
}