import { useState, useCallback } from "react";
import { toast } from "sonner";

export function useCreateLead() {
  const [loading, setLoading] = useState(false);

  const createLead = useCallback(async (email: string) => {
    setLoading(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit email");
      }

      toast.success("Спасибо! Мы свяжемся с вами в ближайшее время.");
    } catch (err) {
      console.error(err);
      toast.error("Произошла ошибка. Пожалуйста, попробуйте позже.");
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, createLead };
}
