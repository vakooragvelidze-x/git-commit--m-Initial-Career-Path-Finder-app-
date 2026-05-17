"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { QUESTIONS } from "../../src/lib/career-path/questions";

type Screen = "quiz" | "analysis" | "error";

type SavedSession = {
  sessionId: string;
  accessToken: string;
  preview: {
    answeredCount: number;
    confidence: number;
    dimensionsAnalyzed: number;
    resultPrepared: boolean;
    lockedSections: string[];
  };
};

async function trackFunnelEvent(
  eventName: string,
  metadata: Record<string, unknown> = {}
) {
  try {
    await fetch("/api/track-event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eventName,
        pagePath: window.location.pathname,
        metadata,
      }),
    });
  } catch (error) {
    console.error("Tracking failed:", error);
  }
}

export default function QuizPage() {
  const router = useRouter();

  const [screen, setScreen] = useState<Screen>("quiz");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [savedSession, setSavedSession] = useState<SavedSession | null>(null);
  const [saveError, setSaveError] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const currentQuestion = QUESTIONS[currentIndex];
  const totalQuestions = QUESTIONS.length;
  const answeredCount = Object.keys(answers).length;
  const progress = Math.round((answeredCount / totalQuestions) * 100);

  useEffect(() => {
    void trackFunnelEvent("quiz_started", {
      totalQuestions,
    });
  }, [totalQuestions]);

  async function saveQuizSession(finalAnswers: Record<string, string>) {
    setSaveError("");
    setIsSaving(true);

    try {
      const minimumLoadingTime = new Promise((resolve) =>
        setTimeout(resolve, 4200)
      );

      const request = fetch("/api/create-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          answers: finalAnswers,
        }),
      });

      const [, response] = await Promise.all([minimumLoadingTime, request]);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Could not save quiz session");
      }

      setSavedSession(data);

      void trackFunnelEvent("session_saved", {
        sessionId: data.sessionId,
        answeredCount: data.preview?.answeredCount,
        confidence: data.preview?.confidence,
      });

      router.push(`/locked/${data.sessionId}`);
    } catch (error) {
      console.error("Save session failed:", error);

      setSaveError(
        error instanceof Error ? error.message : "Could not save quiz session"
      );

      setScreen("error");
      setIsSaving(false);
    }
  }

  function chooseAnswer(optionId: string) {
    const nextAnswers = {
      ...answers,
      [currentQuestion.id]: optionId,
    };

    setAnswers(nextAnswers);

    void trackFunnelEvent("question_answered", {
      questionId: currentQuestion.id,
      questionNumber: currentIndex + 1,
      selectedOption: optionId,
      section: currentQuestion.section,
    });

    if (currentIndex === totalQuestions - 1) {
      void trackFunnelEvent("quiz_completed", {
        totalQuestions,
        answeredCount: Object.keys(nextAnswers).length,
      });

      setScreen("analysis");
      void saveQuizSession(nextAnswers);
      return;
    }

    setCurrentIndex((prev) => prev + 1);
  }

  function goBack() {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }

  function restartQuiz() {
    setAnswers({});
    setCurrentIndex(0);
    setSavedSession(null);
    setSaveError("");
    setIsSaving(false);
    setScreen("quiz");
  }

  function retrySave() {
    setScreen("analysis");
    void saveQuizSession(answers);
  }

  if (screen === "analysis") {
    return (
      <main className="min-h-screen bg-[linear-gradient(135deg,#fff8d9_0%,#e8e2a0_42%,#f5b3df_100%)] px-6 py-10 text-[#240366]">
        <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-3xl flex-col items-center justify-center text-center">
          <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-[2rem] bg-[#240366] text-4xl text-[#e8e2a0] shadow-xl shadow-[#240366]/25">
            <div className="animate-spin">↻</div>
          </div>

          <div className="mb-5 inline-flex rounded-full border border-[#240366]/15 bg-white/70 px-4 py-2 text-sm font-semibold text-[#240366]/70 shadow-sm backdrop-blur">
            Assessment completed
          </div>

          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight md:text-6xl">
            Building your Career Fit Finder Report
          </h1>

          <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-[#240366]/70">
            Your answers are being analyzed across career fit, stability,
            transferable skills, values, growth ambition, independence, burnout
            risk, and change readiness.
          </p>

          <div className="mt-10 w-full space-y-3 text-left">
            {[
              "Reading your answer pattern",
              "Scoring your career direction",
              "Checking your stability and risk profile",
              "Identifying your strongest path signal",
              "Preparing your 28-day action plan",
              "Saving your personalized report session",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-[#240366]/10 bg-white/75 p-4 text-[#240366]/75 shadow-sm backdrop-blur"
                style={{
                  animation: `fadeIn 0.4s ease ${index * 0.35}s both`,
                }}
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#86cf6d] text-xs font-bold text-[#240366]">
                  ✓
                </span>
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>

          {isSaving && (
            <p className="mt-8 text-sm font-semibold text-[#240366]/55">
              Please wait. Your report is being saved securely.
            </p>
          )}

          <style jsx>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: translateY(8px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
        </section>
      </main>
    );
  }

  if (screen === "error") {
    return (
      <main className="min-h-screen bg-[linear-gradient(135deg,#fff8d9_0%,#e8e2a0_42%,#f5b3df_100%)] px-6 py-10 text-[#240366]">
        <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-2xl flex-col items-center justify-center text-center">
          <div className="rounded-[2rem] border border-[#240366]/12 bg-white/75 p-8 shadow-xl shadow-[#240366]/10 backdrop-blur md:p-12">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-[2rem] bg-[#f5b3df] text-4xl">
              ⚠️
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Something went wrong
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#240366]/70">
              Your answers were completed, but the report session could not be
              saved. Please try again.
            </p>

            {saveError && (
              <div className="mt-6 rounded-2xl border border-[#240366]/10 bg-[#fff8d9] px-4 py-3 text-sm font-semibold text-[#240366]/70">
                {saveError}
              </div>
            )}

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={retrySave}
                className="rounded-full bg-[#e8e2a0] px-8 py-4 text-base font-bold text-[#240366] shadow-lg shadow-[#240366]/15 ring-1 ring-[#240366]/15 transition hover:bg-[#f5b3df]"
              >
                Try Again
              </button>

              <button
                type="button"
                onClick={restartQuiz}
                className="rounded-full border border-[#240366]/15 bg-white/75 px-8 py-4 text-base font-bold text-[#240366] shadow-sm transition hover:bg-[#e8e2a0]"
              >
                Restart Quiz
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,#fff8d9_0%,#e8e2a0_42%,#f5b3df_100%)] px-6 py-8 text-[#240366]">
      <section className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-[#240366]/12 bg-white/70 px-5 py-3 text-sm font-semibold text-[#240366] shadow-sm backdrop-blur transition hover:bg-white"
          >
            ← Back to home
          </Link>

          <div className="rounded-full border border-[#240366]/12 bg-white/65 px-4 py-2 text-sm font-semibold text-[#240366]/75 shadow-sm backdrop-blur">
            Career Fit Finder
          </div>
        </div>

        <div className="rounded-[28px] border border-[#240366]/10 bg-white/55 p-5 shadow-[0_16px_45px_rgba(36,3,102,0.09)] backdrop-blur md:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-sm font-semibold text-[#240366]/58">
                {currentQuestion.section} · Question {currentIndex + 1} of{" "}
                {totalQuestions}
              </div>

              <div className="mt-2 text-2xl font-bold tracking-tight text-[#240366] md:text-3xl">
                You’re building your career clarity step by step
              </div>
            </div>

            <div className="rounded-2xl bg-[#faf6eb] px-4 py-3 text-right ring-1 ring-[#240366]/10">
              <div className="text-xs font-bold uppercase tracking-[0.12em] text-[#240366]/45">
                Progress
              </div>
              <div className="mt-1 text-xl font-extrabold text-[#240366]">
                {progress}% complete
              </div>
            </div>
          </div>

          <div className="mt-5 h-3 w-full overflow-hidden rounded-full bg-[#240366]/10">
            <div
              className="h-full rounded-full bg-[linear-gradient(90deg,#240366_0%,#f5b3df_70%,#86cf6d_100%)] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mt-8 rounded-[36px] border border-[#240366]/10 bg-white/78 p-7 shadow-[0_18px_50px_rgba(36,3,102,0.10)] backdrop-blur md:p-10">
          <button
            type="button"
            onClick={goBack}
            className={`mb-6 rounded-full border border-[#240366]/10 bg-white/70 px-5 py-3 text-sm font-bold text-[#240366]/65 shadow-sm transition hover:bg-[#e8e2a0] hover:text-[#240366] ${
              currentIndex === 0 ? "pointer-events-none opacity-0" : ""
            }`}
          >
            ← Back
          </button>

          <div className="mb-4 inline-flex rounded-full bg-[#f5b3df]/45 px-4 py-2 text-sm font-bold text-[#240366]">
            {currentQuestion.section}
          </div>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight text-[#240366] md:text-6xl">
            {currentQuestion.question}
          </h1>

          <div className="mt-8 space-y-4">
            {currentQuestion.options.map((option, index) => (
              <button
                key={option.id}
                type="button"
                onClick={() => chooseAnswer(option.id)}
                className="group flex w-full items-center justify-between rounded-[28px] border border-[#240366]/12 bg-[#fffdf8] px-6 py-6 text-left shadow-sm transition duration-200 hover:-translate-y-[1px] hover:border-[#240366]/25 hover:bg-[#fff7e6] hover:shadow-[0_12px_30px_rgba(36,3,102,0.10)]"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e8e2a0] text-sm font-extrabold text-[#240366] ring-1 ring-[#240366]/10">
                    {index + 1}
                  </div>

                  <div className="text-[1.08rem] font-semibold leading-8 text-[#2c165f]">
                    {option.label}
                  </div>
                </div>

                <div className="ml-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-xl text-[#240366] ring-1 ring-[#240366]/10 transition group-hover:bg-[#240366] group-hover:text-[#e8e2a0]">
                  →
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 rounded-[28px] border border-[#240366]/10 bg-[#faf6eb] p-5 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm font-semibold text-[#240366]/55">
                Current step
              </div>
              <div className="mt-1 text-lg font-extrabold text-[#240366]">
                Question {currentIndex + 1} of {totalQuestions}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#240366] shadow-sm ring-1 ring-[#240366]/10">
                Theme: {currentQuestion.section}
              </div>

              <div className="rounded-full bg-[#86cf6d]/25 px-4 py-2 text-sm font-bold text-[#240366] ring-1 ring-[#240366]/10">
                Progress: {progress}%
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}