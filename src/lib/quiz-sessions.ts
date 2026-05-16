import { supabaseAdmin } from "./supabase/admin";
import type { CareerPathReport } from "./career-path/types";

export type QuizSession = {
  id: string;
  niche_slug: string;
  email: string | null;
  answers: Record<string, string>;
  report: CareerPathReport;
  result_key: string;
  secondary_key: string;
  confidence: number;
  paid: boolean;
  access_token: string;
  payment_provider: string | null;
  payment_id: string | null;
  created_at: string;
  paid_at: string | null;
};

export async function getQuizSessionById(sessionId: string) {
  const { data, error } = await supabaseAdmin
    .from("quiz_sessions")
    .select("*")
    .eq("id", sessionId)
    .single();

  if (error || !data) {
    return null;
  }

  return data as QuizSession;
}

export async function getQuizSessionByAccessToken(token: string) {
  const { data, error } = await supabaseAdmin
    .from("quiz_sessions")
    .select("*")
    .eq("access_token", token)
    .single();

  if (error || !data) {
    return null;
  }

  return data as QuizSession;
}