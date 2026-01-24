import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const handleGetInTouch = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Abstract Bridge Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Flowing connection lines */}
          <motion.path
            d="M-100 450 Q 360 200, 720 450 T 1540 450"
            stroke="hsl(var(--border))"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <motion.path
            d="M-100 500 Q 360 300, 720 500 T 1540 500"
            stroke="hsl(var(--accent))"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 2.5, ease: "easeOut", delay: 0.3 }}
          />
          <motion.path
            d="M-100 550 Q 360 350, 720 550 T 1540 550"
            stroke="hsl(var(--border))"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.6 }}
          />

          {/* Connection nodes */}
          <motion.circle
            cx="200"
            cy="380"
            r="6"
            fill="hsl(var(--muted-foreground))"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          />
          <motion.circle
            cx="720"
            cy="450"
            r="10"
            fill="hsl(var(--accent))"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ delay: 1.8, duration: 0.5 }}
          />
          <motion.circle
            cx="1240"
            cy="380"
            r="6"
            fill="hsl(var(--muted-foreground))"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ delay: 2, duration: 0.5 }}
          />

          {/* Floating particles */}
          {[...Array(8)].map((_, i) => (
            <motion.circle
              key={i}
              cx={200 + i * 150}
              cy={300 + (i % 3) * 100}
              r="3"
              fill="hsl(var(--border))"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.4, 0],
                y: [0, -20, 0]
              }}
              transition={{ 
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-8">
            Connecting ideas,
            <br />
            <span className="relative">
              cultures
              <motion.span
                className="absolute -bottom-2 left-0 h-1 bg-accent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
              />
            </span>
            {" & "}
            <span className="text-accent">digital</span>
            <br />
            experiences
          </h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            We bridge the gap between vision and reality, creating meaningful 
            digital experiences that resonate across borders.
          </motion.p>

          <motion.button
            onClick={handleGetInTouch}
            className="btn-hero"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
