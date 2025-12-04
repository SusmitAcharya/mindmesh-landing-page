import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Show text after a brief delay
    const textTimer = setTimeout(() => setShowText(true), 300);

    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    // Complete after full animation
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => {
      clearTimeout(textTimer);
      clearInterval(progressInterval);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Cyber grid background */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Glowing lines */}
        <motion.div
          className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        <div className="relative z-10 text-center px-6">
          {/* Main text with typewriter effect */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: showText ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl font-mono tracking-wider text-accent">
              {showText && (
                <TypewriterText text="Entering the world of big tech" />
              )}
            </h1>
          </motion.div>

          {/* Progress bar */}
          <div className="w-64 sm:w-80 h-1 bg-muted/30 rounded-full overflow-hidden mx-auto">
            <motion.div
              className="h-full bg-gradient-to-r from-accent via-primary to-accent rounded-full"
              style={{ width: `${progress}%` }}
              initial={{ width: 0 }}
            />
          </div>

          {/* Progress percentage */}
          <motion.p
            className="mt-4 text-xs font-mono text-muted-foreground tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {progress}%
          </motion.p>
        </div>

        {/* Corner decorations */}
        <div className="absolute top-8 left-8 w-8 h-8 border-l-2 border-t-2 border-accent/40" />
        <div className="absolute top-8 right-8 w-8 h-8 border-r-2 border-t-2 border-accent/40" />
        <div className="absolute bottom-8 left-8 w-8 h-8 border-l-2 border-b-2 border-accent/40" />
        <div className="absolute bottom-8 right-8 w-8 h-8 border-r-2 border-b-2 border-accent/40" />
      </motion.div>
    </AnimatePresence>
  );
};

// Typewriter effect component
const TypewriterText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <span>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default LoadingScreen;
