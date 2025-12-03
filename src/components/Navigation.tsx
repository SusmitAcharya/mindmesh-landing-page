import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "#home", label: "Home" },
    { to: "#features", label: "Features" },
    { to: "#timeline", label: "Our Story" },
    { to: "#founders", label: "The Founders" },
    { to: "#testimonials", label: "Testimonials" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection("#home"); }}
            className="text-xl font-semibold hover:text-primary transition-colors"
          >
            MindMesh
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.slice(1).map((link) => (
              <a
                key={link.to}
                href={link.to}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.to); }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#footer"
              onClick={(e) => { e.preventDefault(); scrollToSection("footer"); }}
              className="text-sm text-accent hover:text-foreground transition-colors font-medium"
            >
              Let's Connect
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden py-4 space-y-3 border-t border-border overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {links.slice(1).map((link, index) => (
                <motion.a
                  key={link.to}
                  href={link.to}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.to); }}
                  className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#footer"
                onClick={(e) => { e.preventDefault(); scrollToSection("footer"); }}
                className="block py-2 text-sm text-accent hover:text-foreground transition-colors font-medium"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.05, duration: 0.2 }}
              >
                Let's Connect
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
