import { NextResponse } from "next/server";
import {
  calculateCareerPathReport,
  getPublicResultPreview,
  validateAnswerMap,
} from "../../../src/lib/career-path/scoring";
import { supabaseAdmin } from "../../../src/lib/supabase/admin";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const answers = body.answers as Record<string, string>;
    const email = typeof body.email === "string" ? body.email : null;

    if (!answers || typeof answers !== "object") {
      return NextResponse.json({ error: "Missing answers" }, { status: 400 });
    }

    const validation = validateAnswerMap(answers);

    if (!validation.valid) {
      return NextResponse.json(
        {
          error: "Invalid quiz answers",
          details: validation.errors,
        },
        { status: 400 }
      );
    }

    const report = calculateCareerPathReport(answers);
    const preview = getPublicResultPreview(report);

    const { data, error } = await supabaseAdmin
      .from("quiz_sessions")
      .insert({
        niche_slug: "career-path-finder",
        email,
        answers,
        report,
        result_key: report.resultKey,
        secondary_key: report.secondaryKey,
        confidence: report.confidence,
        paid: false,
      })
      .select("id, access_token, created_at")
      .single();

    if (error) {
      console.error("Supabase insert error:", error);

      return NextResponse.json(
        { error: "Could not save quiz session" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      sessionId: data.id,
      accessToken: data.access_token,
      preview,
    });
  } catch (error) {
    console.error("Create session error:", error);

    return NextResponse.json(
      { error: "Unexpected server error" },
      { status: 500 }
    );
  }
}