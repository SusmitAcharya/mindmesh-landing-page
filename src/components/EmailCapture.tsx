import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Mail } from "lucide-react";

const EmailCapture = ({ variant = "default" }: { variant?: "default" | "hero" }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to Google Form (replace with actual link later)
    window.open("https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform", "_blank");
  };

  const isHero = variant === "hero";

  return (
    <form onSubmit={handleSubmit} className={`w-full ${isHero ? "max-w-md" : "max-w-sm"}`}>
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="pl-10 h-11"
          />
        </div>
        <Button
          type="submit"
          className="h-11 px-6"
        >
          Notify Me
        </Button>
      </div>
    </form>
  );
};

export default EmailCapture;
