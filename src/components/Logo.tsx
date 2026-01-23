import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className = "", size = "md" }: LogoProps) => {
  const sizes = {
    sm: { width: 32, height: 32 },
    md: { width: 40, height: 40 },
    lg: { width: 48, height: 48 },
  };

  const { width, height } = sizes[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Abstract bridge/connection logo - geometric nodes with connecting lines */}
        <motion.circle
          cx="8"
          cy="24"
          r="4"
          fill="hsl(var(--foreground))"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        />
        <motion.circle
          cx="24"
          cy="12"
          r="4"
          fill="hsl(var(--accent))"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        />
        <motion.circle
          cx="40"
          cy="24"
          r="4"
          fill="hsl(var(--foreground))"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        />
        <motion.circle
          cx="24"
          cy="36"
          r="3"
          fill="hsl(var(--foreground))"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.25, duration: 0.3 }}
        />
        
        {/* Connecting lines */}
        <motion.path
          d="M12 22 L20 14"
          stroke="hsl(var(--foreground))"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        />
        <motion.path
          d="M28 14 L36 22"
          stroke="hsl(var(--foreground))"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        />
        <motion.path
          d="M12 26 L21 34"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        />
        <motion.path
          d="M27 34 L36 26"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
        />
      </svg>
      <span className="font-semibold text-lg tracking-tight text-foreground">
        Bridge Collective
      </span>
    </div>
  );
};

export default Logo;
