import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Mail } from "lucide-react";

const EmailCapture = ({ variant = "default" }: { variant?: "default" | "hero" }) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast.success("Thanks for your interest! We'll notify you when we launch.");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  const isHero = variant === "hero";

  return (
    <form onSubmit={handleSubmit} className={`w-full ${isHero ? "max-w-md" : "max-w-sm"}`}>
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={`pl-10 ${
              isHero
                ? "h-12 bg-card/50 backdrop-blur-sm border-primary/30 focus:border-primary"
                : "h-11"
            }`}
          />
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className={
            isHero
              ? "h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-neon"
              : "h-11 px-6"
          }
        >
          {isSubmitting ? "Submitting..." : "Notify Me"}
        </Button>
      </div>
    </form>
  );
};

export default EmailCapture;
