import { FC } from "react";

interface BridgeDividerProps {
  label?: string;
  variant?: "default" | "purple" | "blue";
}

const BridgeDivider: FC<BridgeDividerProps> = ({ label = "Bridge", variant = "default" }) => {
  const getColorClasses = () => {
    switch (variant) {
      case "purple":
        return {
          topLine: "bg-gradient-to-b from-purple-500/0 via-purple-500/70 to-purple-500/40",
          border: "border-purple-500/70",
          bottomLine: "bg-gradient-to-b from-purple-500/40 via-purple-500/70 to-purple-500/0",
        };
      case "blue":
        return {
          topLine: "bg-gradient-to-b from-blue-500/0 via-blue-500/70 to-blue-500/40",
          border: "border-blue-500/70",
          bottomLine: "bg-gradient-to-b from-blue-500/40 via-blue-500/70 to-blue-500/0",
        };
      default:
        return {
          topLine: "bg-gradient-to-b from-accent/0 via-accent/70 to-accent/40",
          border: "border-accent/70",
          bottomLine: "bg-gradient-to-b from-accent/40 via-accent/70 to-accent/0",
        };
    }
  };

  const colors = getColorClasses();

  return (
    // <div className="relative">
    //   <div className="container mx-auto px-6 lg:px-8">
    //     <div className="relative py-14 sm:py-16 flex items-center justify-center">
    //       <div className="flex flex-col items-center gap-3">
    //         <span className={`h-10 sm:h-12 w-px ${colors.topLine}`} aria-hidden="true" />
    //         <div className={`px-4 sm:px-6 py-2 rounded-full border ${colors.border} bg-background shadow-sm text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-foreground`}>
    //           {label}
    //         </div>
    //         <span className={`h-10 sm:h-12 w-px ${colors.bottomLine}`} aria-hidden="true" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <></>
  );
};

export default BridgeDivider;
