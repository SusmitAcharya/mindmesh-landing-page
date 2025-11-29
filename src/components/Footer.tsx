import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">MindMesh</h3>
            <p className="text-muted-foreground text-sm">
              Your unified hub for academic and personal growth
            </p>
          </div>

          <div className="flex items-center space-x-2 text-muted-foreground text-sm">
            <Mail className="w-4 h-4" />
            <a
              href="mailto:contact@mindmesh.app"
              className="hover:text-foreground transition-colors"
            >
              contact@mindmesh.app
            </a>
          </div>

          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Instagram
            </a>
          </div>

          <div className="text-xs text-muted-foreground pt-4 border-t border-border w-full text-center">
            © {new Date().getFullYear()} MindMesh
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
