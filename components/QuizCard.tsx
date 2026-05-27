"use client";

import { useState } from "react";
import type { QuizQuestion } from "@/data/lessons";
import { AppIcon } from "@/components/ui/AppIcon";
import ProgressBar from "@/components/ui/ProgressBar";
import { cn } from "@/lib/utils";

const LABELS = ["A", "B", "C", "D"] as const;

interface QuizCardProps {
  questions: QuizQuestion[];
}

export default function QuizCard({ questions }: QuizCardProps) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const question = questions[current];

  function handleSelect(index: number) {
    if (answered) return;
    setSelected(index);
    setAnswered(true);
    if (index === question.answerIndex) {
      setScore((value) => value + 1);
    }
  }

  function handleNext() {
    if (current === questions.length - 1) {
      setDone(true);
      return;
    }

    setCurrent((value) => value + 1);
    setSelected(null);
    setAnswered(false);
  }

  function handleRestart() {
    setCurrent(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setDone(false);
  }

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    const tone =
      pct >= 80
        ? "text-emerald-300 border-emerald-400/20 bg-emerald-400/[0.08]"
        : pct >= 60
          ? "text-amber-300 border-amber-400/20 bg-amber-400/[0.08]"
          : "text-orange-300 border-orange-400/20 bg-orange-400/[0.08]";

    return (
      <div className="premium-panel rounded-[28px] p-8 text-center md:p-10">
        <p className="eyebrow mx-auto w-fit">Quick Check Complete</p>
        <div className={cn("mx-auto mt-6 inline-flex rounded-full border px-5 py-2 font-mono text-[11px] uppercase tracking-[0.22em]", tone)}>
          Final score
        </div>
        <p className="mt-6 font-display text-6xl font-semibold tracking-[-0.06em] text-slate-50 md:text-7xl">
          {pct}%
        </p>
        <p className="mt-3 text-base text-slate-300">
          {score} of {questions.length} questions correct
        </p>
        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-400">
          {pct >= 80
            ? "You’re reading the lesson like an engineer: concepts, tradeoffs, and examples are landing."
            : pct >= 60
              ? "Solid understanding. Review the explanation cards below and rerun the quick check to lock it in."
              : "The foundation is there, but this module needs another pass. Re-read the lesson and retry the quiz."}
        </p>
        <div className="mx-auto mt-8 max-w-md">
          <ProgressBar value={score} max={questions.length} label="Mastery" />
        </div>
        <button
          type="button"
          onClick={handleRestart}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-300 transition-all hover:-translate-y-0.5 hover:bg-cyan-400/[0.12]"
        >
          <AppIcon name="spark" className="h-3.5 w-3.5" />
          Retake quiz
        </button>
      </div>
    );
  }

  return (
    <div className="premium-panel rounded-[28px] p-6 md:p-8">
      <div className="flex flex-col gap-5 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="eyebrow">Quick Check</p>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500">
            Question {current + 1} of {questions.length}
          </p>
        </div>
        <div className="flex items-center gap-2 self-start md:self-auto">
          {questions.map((_, index) => {
            const isCurrent = index === current;
            const isPast = index < current;

            return (
              <span
                key={index}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-300",
                  isCurrent
                    ? "w-10 bg-gradient-to-r from-cyan-400 to-blue-500"
                    : isPast
                      ? "w-2.5 bg-cyan-300"
                      : "w-2.5 bg-white/10",
                )}
              />
            );
          })}
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h3 className="font-display text-2xl font-semibold leading-tight tracking-[-0.04em] text-slate-50 md:text-3xl">
            {question.question}
          </h3>

          <div className="mt-6 space-y-3">
            {question.options.map((option, index) => {
              const isSelected = selected === index;
              const isCorrect = question.answerIndex === index;

              const stateClass = answered
                ? isCorrect
                  ? "border-emerald-400/25 bg-emerald-400/[0.08] text-slate-50"
                  : isSelected
                    ? "border-orange-400/25 bg-orange-400/[0.08] text-slate-50"
                    : "border-white/10 bg-white/[0.02] text-slate-400"
                : isSelected
                  ? "border-cyan-400/25 bg-cyan-400/[0.08] text-slate-50"
                  : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.04]";

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleSelect(index)}
                  disabled={answered}
                  className={cn(
                    "flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition-all duration-300",
                    stateClass,
                  )}
                >
                  <span
                    className={cn(
                      "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border font-mono text-sm uppercase tracking-[0.18em]",
                      answered && isCorrect
                        ? "border-emerald-400/25 bg-emerald-400/[0.12] text-emerald-300"
                        : answered && isSelected && !isCorrect
                          ? "border-orange-400/25 bg-orange-400/[0.12] text-orange-300"
                          : isSelected
                            ? "border-cyan-400/25 bg-cyan-400/[0.12] text-cyan-300"
                            : "border-white/10 bg-white/[0.03] text-slate-500",
                    )}
                  >
                    {LABELS[index]}
                  </span>
                  <span className="flex-1 pt-1 text-sm leading-7">{option}</span>
                  {answered ? (
                    <span className="mt-1 shrink-0">
                      <AppIcon
                        name={isCorrect ? "check" : isSelected ? "target" : "spark"}
                        className={cn(
                          "h-4 w-4",
                          isCorrect
                            ? "text-emerald-300"
                            : isSelected
                              ? "text-orange-300"
                              : "text-slate-600",
                        )}
                      />
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
              Score so far
            </p>
            <p className="mt-3 font-display text-4xl font-semibold tracking-[-0.05em] text-slate-50">
              {score}
              <span className="text-lg text-slate-500">/{questions.length}</span>
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Answer once, then read the explanation before moving on.
            </p>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
              Status
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {answered
                ? selected === question.answerIndex
                  ? "Correct. Use the explanation to connect the answer back to the engineering principle."
                  : "Not quite. Read the explanation, then continue to the next checkpoint."
                : "Select the best answer. Your result will update instantly."}
            </p>
          </div>

          {answered ? (
            <div className="rounded-[24px] border border-cyan-400/14 bg-cyan-400/[0.06] p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-300">
                Explanation
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-200">
                {question.explanation}
              </p>
            </div>
          ) : null}
        </div>
      </div>

      {answered ? (
        <div className="mt-8 flex justify-end border-t border-white/10 pt-6">
          <button
            type="button"
            onClick={handleNext}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-950 shadow-[0_14px_32px_rgba(37,99,235,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
          >
            {current === questions.length - 1 ? "See results" : "Next question"}
            <AppIcon name="spark" className="h-3.5 w-3.5" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
