import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function LeadForm({
  variant = "primary",
}: {
  variant?: "primary" | "secondary";
}) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="gap-4 pt-4 flex flex-row">
        <Input
          type="email"
          placeholder="Ваш email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={
            variant === "primary"
              ? "flex-grow"
              : "flex-grow bg-white/10 border-white/20 text-white placeholder:text-white/70"
          }
        />
        <Button
          type="submit"
          disabled={loading}
          className="w-auto text-base font-medium group transition-all duration-300 hover:translate-x-1"
          variant={variant === "primary" ? "default" : "cta"}
        >
          {loading ? (
            "Отправка..."
          ) : (
            <span className="flex items-center">
              Получить ранний доступ{" "}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          )}
        </Button>
      </form>
    </>
  );
}
