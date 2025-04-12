import { useCallback, useState } from "react";
import { toast } from "sonner";

export function useAuth(params?: { onSuccess?: () => void }) {
  const { onSuccess } = params || {};
  const [loading, setLoading] = useState(false);

  const auth = useCallback(
    async ({ password }: { password: string }) => {
      setLoading(true);

      try {
        const response = await fetch("/api/auth", {
          method: "POST",
          body: JSON.stringify({ password }),
        });

        if (!response.ok) {
          throw new Error("Authentication failed");
        }

        onSuccess?.();
      } catch (error) {
        toast.error((error as string) || "Authentication failed");
      } finally {
        setLoading(false);
      }
    },
    [onSuccess]
  );

  return { loading, auth };
}
