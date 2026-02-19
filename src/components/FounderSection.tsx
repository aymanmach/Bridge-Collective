import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, PenSquare, Target } from "lucide-react";

const founderHighlights = [
  {
    icon: Lightbulb,
    title: "Strategic Ideas",
    description: "She brings clear thinking and strong concepts that align creativity with business goals.",
  },
  {
    icon: PenSquare,
    title: "Hands-On Execution",
    description: "From content to campaigns, events, and digital initiatives, she turns plans into action.",
  },
  {
    icon: Target,
    title: "Meaningful Impact",
    description: "Every project is built to create real connection, relevance, and long-term brand growth.",
  },
];

const FounderSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="founder" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-8">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium tracking-widest text-accent uppercase">
              02 — About the Founder
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Meet Yasmina
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Bridge Collective is led by Yasmina, a marketing professional with hands-on experience across
              different industries. She has worked on strategic campaigns, content, events, and digital
              initiatives, always with a focus on clarity, creativity, and impact.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <motion.div
              className="service-card"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-muted-foreground leading-relaxed mb-6">
                She is known for her ability to brainstorm strong ideas and turn them into concrete,
                real-world results. From first concept to final execution, she helps brands move from vision
                to reality in a way that feels natural, relevant, and effective.
              </p>
              <p className="text-foreground font-medium leading-relaxed">
                Through Bridge Collective, her goal is to help brands grow with purpose, build real
                connections, and communicate in a way that truly resonates.
              </p>
            </motion.div>

            <motion.div
              className="grid gap-4"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {founderHighlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="service-card bg-background"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;