import { useState, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useCreateLead } from "@/hooks/useCreateLead";
import Link from "next/link";

export default function LeadForm({
  variant = "primary",
  buttonText = "Хочу в бета",
}: {
  variant?: "primary" | "secondary";
  buttonText?: string;
}) {
  const [email, setEmail] = useState("");
  const { loading, createLead } = useCreateLead();

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      const trimmedEmail = email.trim();

      try {
        await createLead(trimmedEmail, true);

        if (process.env.NODE_ENV === "production" && window.ym) {
          try {
            window.ym(102649639, "reachGoal", "email_submitted");
          } catch (error) {
            console.error(error);
          }

          try {
            window._tmr.push({
              type: "reachGoal",
              id: 3676981,
              goal: "submit-email",
            });
          } catch (error) {
            console.error(error);
          }
        }

        setEmail("");
      } catch (error) {
        console.error(error);
      }
    },
    [email, createLead]
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full space-y-4 pt-4"
      id="lead-form"
    >
      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          type="email"
          name="email"
          autoComplete="email"
          inputMode="email"
          spellCheck={false}
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
      </div>
      <p
        className={`text-sm ${
          variant === "primary" ? "text-gray-500" : "text-white/70"
        }`}
      >
        Нажимая «{buttonText}», вы принимаете{" "}
        <Link
          href="/privacy"
          target="_blank"
          className={`underline ${
            variant === "primary" ? "hover:text-gray-900" : "hover:text-white"
          }`}
        >
          Политику конфиденциальности
        </Link>{" "}
        и соглашаетесь на обработку email.
      </p>
    </form>
  );
}
