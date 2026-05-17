"use client";

import { useEffect } from "react";

type TrackEventProps = {
  eventName: string;
  sessionId?: string;
  accessToken?: string;
  metadata?: Record<string, unknown>;
};

export default function TrackEvent({
  eventName,
  sessionId,
  accessToken,
  metadata = {},
}: TrackEventProps) {
  useEffect(() => {
    async function track() {
      try {
        await fetch("/api/track-event", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            eventName,
            sessionId,
            accessToken,
            metadata,
            pagePath: window.location.pathname,
          }),
        });
      } catch (error) {
        console.error("Tracking failed:", error);
      }
    }

    void track();
  }, [eventName, sessionId, accessToken, JSON.stringify(metadata)]);

  return null;
}