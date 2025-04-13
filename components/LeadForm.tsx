import { useState, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useCreateLead } from "@/hooks/useCreateLead";

export default function LeadForm({
  variant = "primary",
  buttonText = "Получить ранний доступ",
}: {
  variant?: "primary" | "secondary";
  buttonText?: string;
}) {
  const [email, setEmail] = useState("");

  const { loading, createLead } = useCreateLead();
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        await createLead(email);
        setEmail("");
      } catch (error) {
        console.error(error);
      }
    },
    [email, createLead, setEmail]
  );

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="gap-4 pt-4 flex flex-col lg:flex-row"
      >
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
              {buttonText}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          )}
        </Button>
      </form>
    </>
  );
}
