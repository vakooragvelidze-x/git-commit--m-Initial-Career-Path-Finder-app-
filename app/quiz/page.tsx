"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import Link from "next/link";
import { QUESTIONS } from "../../src/lib/career-path/questions";
import {
  calculateCareerPathReport,
  getPublicResultPreview,
} from "../../src/lib/career-path/scoring";

type Screen = "quiz" | "analysis" | "locked" | "result";

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

export default function QuizPage() {const router = useRouter();
  const [screen, setScreen] = useState<Screen>("quiz");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [email, setEmail] = useState("");
  const [savedSession, setSavedSession] = useState<SavedSession | null>(null);
  const [saveError, setSaveError] = useState("");

  const currentQuestion = QUESTIONS[currentIndex];
  const totalQuestions = QUESTIONS.length;
  const answeredCount = Object.keys(answers).length;
  const progress = Math.round((answeredCount / totalQuestions) * 100);

  const report = useMemo(() => {
    if (answeredCount === 0) return null;
    return calculateCareerPathReport(answers);
  }, [answers, answeredCount]);

  const preview = report ? getPublicResultPreview(report) : null;
  const lockedPreview = savedSession?.preview || preview;

  async function saveQuizSession(finalAnswers: Record<string, string>) {
    setSaveError("");

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
     router.push(`/locked/${data.sessionId}`);
    } catch (error) {
      console.error("Save session failed:", error);

      setSaveError(
        error instanceof Error ? error.message : "Could not save quiz session"
      );

      setScreen("locked");
    }
  }

  function chooseAnswer(optionId: string) {
    const nextAnswers = {
      ...answers,
      [currentQuestion.id]: optionId,
    };

    setAnswers(nextAnswers);

    if (currentIndex === totalQuestions - 1) {
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
    setScreen("quiz");
    setEmail("");
    setSavedSession(null);
    setSaveError("");
  }

  function unlockPreviewResult() {
    setScreen("result");
  }

  if (screen === "analysis") {
    return (
      <main className="min-h-screen bg-[#f7f3ec] px-6 py-10 text-[#171717]">
        <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-3xl flex-col items-center justify-center text-center">
          <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-[2rem] bg-black text-3xl text-white">
            <div className="animate-spin">↻</div>
          </div>

          <div className="mb-5 inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-black/55 shadow-sm">
            Assessment completed
          </div>

          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Building your Career Path Finder Report
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-black/60">
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
                className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white p-4 text-black/65 shadow-sm"
                style={{
                  animation: `fadeIn 0.4s ease ${index * 0.35}s both`,
                }}
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-xs text-white">
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>

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

  if (screen === "locked" && report && lockedPreview) {
    return (
      <main className="min-h-screen bg-[#f7f3ec] px-6 py-10 text-[#171717]">
        <section className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center justify-between gap-4">
            <Link href="/" className="text-sm font-medium text-black/55">
              ← Back to home
            </Link>

            <button
              onClick={restartQuiz}
              className="rounded-full border border-black/10 bg-white px-5 py-2 text-sm font-semibold shadow-sm hover:bg-black/5"
            >
              Restart
            </button>
          </div>

          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-black text-3xl text-white">
              🔒
            </div>

            <div className="mb-4 inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-black/55 shadow-sm">
              Your report is ready
            </div>

            <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
              Unlock your Career Path Finder Report
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-black/60">
              We analyzed your 28 answers and prepared your personalized career
              direction report, including your path type, main bottleneck, score
              breakdown, recommended next move, and 28-day action plan.
            </p>

            {savedSession && (
              <div className="mx-auto mt-5 max-w-xl rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                Report session saved successfully.
              </div>
            )}

            {saveError && (
              <div className="mx-auto mt-5 max-w-xl rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                Database save failed: {saveError}
              </div>
            )}
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-semibold">Inside your report</h2>

              <div className="mt-6 space-y-3">
                {lockedPreview.lockedSections.map((section) => (
                  <div
                    key={section}
                    className="flex items-center justify-between rounded-2xl border border-black/10 bg-[#fbfaf8] p-4 text-black/70"
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-xs text-white">
                        ✓
                      </span>
                      {section}
                    </span>
                    <span className="text-black/35">🔒</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-[#f7f3ec] p-4">
                  <div className="text-sm text-black/45">Answers</div>
                  <div className="mt-1 text-2xl font-bold">
                    {lockedPreview.answeredCount}
                  </div>
                </div>

                <div className="rounded-2xl bg-[#f7f3ec] p-4">
                  <div className="text-sm text-black/45">Dimensions</div>
                  <div className="mt-1 text-2xl font-bold">
                    {lockedPreview.dimensionsAnalyzed}
                  </div>
                </div>

                <div className="rounded-2xl bg-[#f7f3ec] p-4">
                  <div className="text-sm text-black/45">Confidence</div>
                  <div className="mt-1 text-2xl font-bold">
                    {lockedPreview.confidence}%
                  </div>
                </div>
              </div>

              {savedSession && (
                <div className="mt-6 rounded-2xl bg-[#f7f3ec] p-4 text-sm text-black/50">
                  Session ID: {savedSession.sessionId}
                </div>
              )}
            </div>

            <div className="rounded-[2rem] bg-black p-6 text-white shadow-sm md:p-8">
              <div className="mb-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm text-white/75">
                One-time unlock
              </div>

              <div className="text-6xl font-bold tracking-tight">$1.99</div>

              <p className="mt-5 leading-7 text-white/65">
                Unlock your complete personalized report instantly. This is a
                practical self-assessment designed to help you understand your
                next career direction more clearly.
              </p>

              <div className="mt-6 rounded-3xl bg-white/10 p-4">
                <label className="text-sm font-medium text-white/60">
                  Email for result access
                </label>

                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white px-4 py-4 text-black outline-none placeholder:text-black/35"
                />
              </div>

              <button
                onClick={unlockPreviewResult}
                className="mt-6 w-full rounded-full bg-white px-8 py-4 text-base font-semibold text-black transition hover:bg-white/90"
              >
                Unlock My Report — $1.99
              </button>

              <p className="mt-4 text-center text-xs leading-6 text-white/40">
                Preview mode: this button unlocks locally for now. Later it will
                open a real checkout and unlock only after payment confirmation.
              </p>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-black/35">
            Career Path Finder is a practical self-assessment. It is not a
            psychological, medical, financial, academic, or professional
            diagnosis. Results are based on your selected answers and are meant
            to provide direction, not guarantee outcomes.
          </p>
        </section>
      </main>
    );
  }

  if (screen === "result" && report) {
    return (
      <main className="min-h-screen bg-[#f7f3ec] px-6 py-10 text-[#171717]">
        <section className="mx-auto max-w-5xl">
          <div className="mb-8 flex items-center justify-between gap-4">
            <Link href="/" className="text-sm font-medium text-black/55">
              ← Back to home
            </Link>

            <button
              onClick={restartQuiz}
              className="rounded-full border border-black/10 bg-white px-5 py-2 text-sm font-semibold shadow-sm hover:bg-black/5"
            >
              Restart
            </button>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm md:p-12">
            <div className="mb-5 inline-flex rounded-full bg-black px-4 py-2 text-sm font-semibold text-white">
              Full report unlocked
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
              {report.result.title}
            </h1>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-black/60">
              {report.result.plainMeaning}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl bg-[#f7f3ec] p-5">
                <div className="text-sm text-black/45">Confidence</div>
                <div className="mt-2 text-3xl font-bold">
                  {report.confidence}%
                </div>
              </div>

              <div className="rounded-3xl bg-[#f7f3ec] p-5">
                <div className="text-sm text-black/45">Answers analyzed</div>
                <div className="mt-2 text-3xl font-bold">
                  {report.answeredCount}
                </div>
              </div>

              <div className="rounded-3xl bg-[#f7f3ec] p-5">
                <div className="text-sm text-black/45">Secondary signal</div>
                <div className="mt-2 text-xl font-bold">
                  {report.secondary.shortTitle}
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl border border-black/10 p-6">
                <h2 className="text-2xl font-semibold">What this means</h2>
                <p className="mt-3 leading-7 text-black/60">
                  {report.result.description}
                </p>
              </div>

              <div className="rounded-3xl border border-black/10 p-6">
                <h2 className="text-2xl font-semibold">Main bottleneck</h2>
                <p className="mt-3 leading-7 text-black/60">
                  {report.result.mainBottleneck}
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-black/10 p-6">
              <h2 className="text-2xl font-semibold">Recommended next move</h2>
              <p className="mt-3 leading-7 text-black/60">
                {report.result.bestMove}
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl border border-black/10 p-6">
                <h2 className="text-2xl font-semibold">Best for</h2>
                <ul className="mt-4 space-y-2 text-black/60">
                  {report.result.bestFor.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-black/10 p-6">
                <h2 className="text-2xl font-semibold">Avoid for now</h2>
                <ul className="mt-4 space-y-2 text-black/60">
                  {report.result.avoidForNow.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold">
                Your 28-day action plan
              </h2>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {report.result.plan28Days.map((week) => (
                  <div
                    key={week.week}
                    className="rounded-3xl border border-black/10 bg-[#f7f3ec] p-6"
                  >
                    <div className="text-sm font-semibold text-black/45">
                      {week.week}
                    </div>

                    <h3 className="mt-2 text-xl font-semibold">
                      {week.focus}
                    </h3>

                    <ul className="mt-4 space-y-2 text-black/60">
                      {week.actions.map((action) => (
                        <li key={action}>• {action}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-3xl bg-black p-6 text-white">
              <h2 className="text-2xl font-semibold">Your first action</h2>
              <p className="mt-3 leading-7 text-white/65">
                {report.nextBestAction}
              </p>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-black/35">
            Career Path Finder is a practical self-assessment. It is not a
            psychological, medical, financial, academic, or professional
            diagnosis. Results are based on your selected answers and are meant
            to provide direction, not guarantee outcomes.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f3ec] px-6 py-10 text-[#171717]">
      <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-4xl flex-col justify-center">
        <div className="mb-8">
          <Link href="/" className="text-sm font-medium text-black/55">
            ← Back to home
          </Link>
        </div>

        <div className="mb-6">
          <div className="mb-3 flex items-center justify-between text-sm text-black/45">
            <span>
              {currentQuestion.section} · Question {currentIndex + 1} of{" "}
              {totalQuestions}
            </span>
            <span>{progress}% complete</span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-black/10">
            <div
              className="h-full rounded-full bg-black transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm md:p-10">
          <button
            onClick={goBack}
            className={`mb-6 text-sm font-medium text-black/45 hover:text-black ${
              currentIndex === 0 ? "pointer-events-none opacity-0" : ""
            }`}
          >
            ← Back
          </button>

          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
            {currentQuestion.question}
          </h1>

          <div className="mt-8 grid gap-3">
            {currentQuestion.options.map((option) => (
              <button
                key={option.id}
                onClick={() => chooseAnswer(option.id)}
                className="group flex w-full items-center justify-between rounded-3xl border border-black/10 bg-[#fbfaf8] p-5 text-left text-base text-black/75 transition hover:bg-black hover:text-white md:p-6"
              >
                <span>{option.label}</span>
                <span className="ml-4 text-xl transition group-hover:translate-x-1">
                  →
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}