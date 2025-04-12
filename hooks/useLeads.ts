"use client";
import { useState, useEffect, useCallback } from "react";

type Lead = {
  id: string;
  email: string;
  created_at: string;
};

export function useLeads() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [leads, setLeads] = useState<Lead[]>([]);

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/leads");
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch leads");
      } else {
        setLeads(data);
      }
    } catch (error) {
      setError(error as string);
    } finally {
      setLoading(false);
    }
  }, [setLeads, setError, setLoading]);

  const refetch = useCallback(() => {
    fetchLeads();
  }, [fetchLeads]);

  useEffect(() => {
    fetchLeads();
  }, []);

  return { leads, loading, error, refetch };
}
