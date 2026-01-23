import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Target,
  TrendingUp,
  Palette,
  Sparkles,
  PenTool,
  BookOpen,
  Share2,
  Users,
  Rocket,
  Zap,
  Mail,
  Send,
  Search,
  Eye,
} from "lucide-react";

const services = [
  {
    icon: Target,
    secondaryIcon: TrendingUp,
    title: "Digital Strategy",
    description: "Data-driven strategies that align with your business goals and drive measurable growth.",
  },
  {
    icon: Palette,
    secondaryIcon: Sparkles,
    title: "Branding & Identity",
    description: "Distinctive visual identities that capture your essence and resonate with your audience.",
  },
  {
    icon: PenTool,
    secondaryIcon: BookOpen,
    title: "Content Creation",
    description: "Compelling stories and content that engage, inform, and inspire action.",
  },
  {
    icon: Share2,
    secondaryIcon: Users,
    title: "Social Media",
    description: "Strategic social presence that builds community and amplifies your brand voice.",
  },
  {
    icon: Rocket,
    secondaryIcon: Zap,
    title: "Campaign Execution",
    description: "End-to-end campaign management from concept to launch to optimization.",
  },
  {
    icon: Mail,
    secondaryIcon: Send,
    title: "Email Marketing",
    description: "Personalized email experiences that nurture leads and drive conversions.",
  },
  {
    icon: Search,
    secondaryIcon: Eye,
    title: "SEO & Visibility",
    description: "Search optimization that puts your brand in front of the right audience.",
  },
];

const CraftSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="craft" className="py-24 md:py-32 bg-secondary">
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
              02 — Our Craft
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              What We Do
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We design, build, and grow digital experiences that make brands shine. 
              From strategy and branding to content and campaigns, we combine 
              creativity with clarity.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group service-card bg-background"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                {/* Icon Container */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-foreground group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <div className="w-8 h-8 bg-secondary/50 rounded-lg flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                    <service.secondaryIcon className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Connection line decoration */}
                <div className="mt-4 pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent/30 group-hover:bg-accent transition-colors duration-300" />
                    <div className="flex-1 h-px bg-border/50 group-hover:bg-accent/30 transition-colors duration-300" />
                    <div className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-accent/50 transition-colors duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            <p className="text-muted-foreground">
              Our work is thoughtful, human-centered, and{" "}
              <span className="text-foreground font-medium">built to last</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CraftSection;
