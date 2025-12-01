import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="#footer" className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Want to Know More?</h3>
            <p class="text-muted-foreground text-sm">
              Reach out to us via email!
            </p>
          </div>

          <div className="flex items-center space-x-2 text-muted-foreground text-sm">
            <Mail className="w-4 h-4" />
            <a
              href="mailto:contact@mindmesh.app"
              className="hover:text-foreground transition-colors"
            >
              contact@mindmesh.zone
            </a>
          </div>

          <div className="text-xs text-muted-foreground pt-4 border-t border-border w-full text-center">
            Copyright © 2025 MindMesh Inc. All Rights Reserved 
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
