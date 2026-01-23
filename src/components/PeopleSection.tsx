import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Globe, Lightbulb, Heart } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Collaborative",
    description: "We work as one team with our clients",
  },
  {
    icon: Globe,
    title: "Global Mindset",
    description: "Thinking beyond borders and cultures",
  },
  {
    icon: Lightbulb,
    title: "Innovative",
    description: "Fresh ideas that push boundaries",
  },
  {
    icon: Heart,
    title: "Human-Centered",
    description: "People first, always",
  },
];

const PeopleSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="people" className="py-24 md:py-32 bg-background">
      {/* Section Divider */}
      <div className="section-divider mb-24" />

      <div className="container mx-auto px-6 lg:px-8">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium tracking-widest text-accent uppercase">
              01 — The People
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Who We Are
            </h2>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                We are a diverse team of creatives, strategists, and digital 
                thinkers. Our goal? To connect ideas, cultures, and brands — 
                bringing people together through meaningful digital experiences.
              </p>
              <p className="text-lg md:text-xl text-foreground font-medium">
                Small team, big vision, global mindset.
              </p>

              {/* Abstract Connection Illustration */}
              <div className="mt-12 relative">
                <svg
                  width="200"
                  height="60"
                  viewBox="0 0 200 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-60"
                >
                  <motion.circle
                    cx="20"
                    cy="30"
                    r="8"
                    fill="hsl(var(--foreground))"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.5 }}
                  />
                  <motion.circle
                    cx="100"
                    cy="30"
                    r="10"
                    fill="hsl(var(--accent))"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.7 }}
                  />
                  <motion.circle
                    cx="180"
                    cy="30"
                    r="8"
                    fill="hsl(var(--foreground))"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.9 }}
                  />
                  <motion.path
                    d="M28 30 L90 30"
                    stroke="hsl(var(--border))"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ delay: 0.6, duration: 0.4 }}
                  />
                  <motion.path
                    d="M110 30 L172 30"
                    stroke="hsl(var(--border))"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ delay: 0.8, duration: 0.4 }}
                  />
                </svg>
              </div>
            </motion.div>

            {/* Values Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="service-card text-center p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeopleSection;
