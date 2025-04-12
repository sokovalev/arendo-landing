"use client";

import { useState } from "react";
import { Loader } from "lucide-react";
import { format, formatDistance } from "date-fns";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useLeads } from "@/hooks/useLeads";
import { useAuth } from "@/hooks/useAuth";
export default function LeadsPage() {
  const {
    leads,
    error,
    loading: isLoadingLeads,
    refetch,
    isInitiallyLoading,
  } = useLeads();
  const { loading: isLoadingAuth, auth } = useAuth({
    onSuccess: () => {
      refetch();
    },
  });
  const [password, setPassword] = useState("");

  if (isLoadingLeads || isInitiallyLoading)
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <Loader className="animate-spin" />
      </div>
    );

  if (error)
    return (
      <form
        className="flex h-screen w-screen items-center justify-center"
        onSubmit={(e) => {
          e.preventDefault();
          auth({ password });
        }}
      >
        <Card>
          <CardHeader>
            <CardTitle>?</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" disabled={isLoadingAuth} className="w-full">
              {isLoadingAuth ? "Loading..." : "Login"}
            </Button>
          </CardContent>
        </Card>
      </form>
    );

  return (
    <div className="flex flex-col gap-4 p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Email</TableHead>
            <TableHead>Создан</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leads.map((lead) => (
            <TableRow key={lead.id}>
              <TableCell>{lead.email}</TableCell>
              <TableCell>
                {format(new Date(lead.created_at), "dd.MM.yyyy HH:mm:ss")} (
                {formatDistance(new Date(lead.created_at), new Date(), {
                  addSuffix: true,
                })}
                )
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
