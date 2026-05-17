import { NextResponse } from "next/server";
import { supabaseAdmin } from "../../../src/lib/supabase/admin";

const ALLOWED_EVENTS = new Set([
  "homepage_viewed",
  "start_assessment_clicked",
  "quiz_started",
  "question_answered",
  "quiz_completed",
  "session_saved",
  "locked_page_viewed",
  "checkout_clicked",
  "checkout_opened",
  "result_viewed",
]);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const eventName = String(body.eventName || "");
    const pagePath = typeof body.pagePath === "string" ? body.pagePath : null;
    const sessionId = typeof body.sessionId === "string" ? body.sessionId : null;
    const accessToken =
      typeof body.accessToken === "string" ? body.accessToken : null;
    const metadata =
      body.metadata && typeof body.metadata === "object" ? body.metadata : {};

    if (!ALLOWED_EVENTS.has(eventName)) {
      return NextResponse.json(
        { error: "Invalid event name" },
        { status: 400 }
      );
    }

    const userAgent = request.headers.get("user-agent");
    const referrer = request.headers.get("referer");

    const { error } = await supabaseAdmin.from("funnel_events").insert({
      event_name: eventName,
      page_path: pagePath,
      session_id: sessionId,
      access_token: accessToken,
      metadata,
      user_agent: userAgent,
      referrer,
    });

    if (error) {
      console.error("Track event error:", error);

      return NextResponse.json(
        { error: "Could not track event" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Track event unexpected error:", error);

    return NextResponse.json(
      { error: "Unexpected tracking error" },
      { status: 500 }
    );
  }
}