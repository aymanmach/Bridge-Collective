import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Abstract Bridge Decoration */}
          <div className="flex justify-center mb-12">
            <svg
              width="200"
              height="30"
              viewBox="0 0 200 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-20"
            >
              <path
                d="M0 15 Q 50 0, 100 15 T 200 15"
                stroke="hsl(var(--accent))"
                strokeWidth="2"
                fill="none"
              />
              <circle cx="50" cy="7" r="3" fill="hsl(var(--accent))" />
              <circle cx="100" cy="15" r="4" fill="hsl(var(--accent))" />
              <circle cx="150" cy="7" r="3" fill="hsl(var(--accent))" />
            </svg>
          </div>

          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 items-center text-center md:text-left">
            {/* Logo */}
            <motion.div
              className="flex justify-center md:justify-start"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="24" r="4" fill="hsl(var(--primary-foreground))" />
                  <circle cx="24" cy="12" r="4" fill="hsl(var(--accent))" />
                  <circle cx="40" cy="24" r="4" fill="hsl(var(--primary-foreground))" />
                  <circle cx="24" cy="36" r="3" fill="hsl(var(--primary-foreground))" />
                  <path d="M12 22 L20 14" stroke="hsl(var(--primary-foreground))" strokeWidth="2" strokeLinecap="round" />
                  <path d="M28 14 L36 22" stroke="hsl(var(--primary-foreground))" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 26 L21 34" stroke="hsl(var(--primary-foreground))" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
                  <path d="M27 34 L36 26" stroke="hsl(var(--primary-foreground))" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
                </svg>
                <span className="font-semibold text-lg text-primary-foreground">
                  Bridge Collective
                </span>
              </div>
            </motion.div>

            {/* Contact Email */}
            <motion.div
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <a
                href="mailto:hello@bridgecollective.io"
                className="text-primary-foreground/80 hover:text-accent transition-colors"
              >
                hello@bridgecollective.io
              </a>
              <a
                href="tel:+32494698843"
                className="text-primary-foreground/80 hover:text-accent transition-colors"
              >
                +32 494 69 88 43
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center md:justify-end gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/80 hover:text-accent hover:bg-primary-foreground/20 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/80 hover:text-accent hover:bg-primary-foreground/20 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/80 hover:text-accent hover:bg-primary-foreground/20 transition-all duration-300"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div
            className="mt-12 pt-8 border-t border-primary-foreground/10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Bridge Collective. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
