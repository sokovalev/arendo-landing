import { useState, useCallback, useId } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useCreateLead } from "@/hooks/useCreateLead";
import Link from "next/link";

export default function LeadForm({
  variant = "primary",
  buttonText = "Получить ранний доступ",
}: {
  variant?: "primary" | "secondary";
  buttonText?: string;
}) {
  const [email, setEmail] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const agreementId = useId();

  const { loading, createLead } = useCreateLead();
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!isAgreed) return;
      try {
        await createLead(email, isAgreed);

        if (process.env.NODE_ENV === "production" && window.ym) {
          window.ym(102649639, "reachGoal", "email_submitted");
        }

        setEmail("");
        setIsAgreed(false);
      } catch (error) {
        console.error(error);
      }
    },
    [email, createLead, setEmail, isAgreed]
  );

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full space-y-4 pt-4">
        <div className="flex flex-col sm:flex-row gap-4">
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
            disabled={loading || !isAgreed}
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
        <div className="flex items-center space-x-2">
          <input
            id={agreementId}
            type="checkbox"
            checked={isAgreed}
            onChange={(e) => setIsAgreed(e.target.checked)}
            className={`
              h-4 w-4 appearance-none rounded-sm cursor-pointer
              bg-center bg-no-repeat border
              ${
                variant === "primary"
                  ? "border-primary checked:bg-primary checked:bg-checkbox-checked"
                  : "border-white/20 bg-white/10 checked:bg-white checked:bg-checkbox-checked-secondary"
              }
              checked:border-none
            `}
          />
          <label
            htmlFor={agreementId}
            className={`
              text-sm cursor-pointer
              ${variant === "primary" ? "text-gray-500" : "text-white/70"}
            `}
          >
            Я согласен(а) с{" "}
            <Link
              href="/privacy"
              target="_blank"
              className={`
                underline
                ${
                  variant === "primary"
                    ? "hover:text-gray-900"
                    : "hover:text-white"
                }
              `}
            >
              Политикой конфиденциальности
            </Link>{" "}
            и разрешаю обработку моего email.
          </label>
        </div>
      </form>
    </>
  );
}
