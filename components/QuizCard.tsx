"use client";

import { useState } from "react";
import type { QuizQuestion } from "@/data/lessons";

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

  const q = questions[current];

  function handleSelect(idx: number) {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === q.answerIndex) setScore((s) => s + 1);
  }

  function handleNext() {
    if (current + 1 >= questions.length) {
      setDone(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setAnswered(false);
    }
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
    const accentColor =
      pct >= 80 ? "#4FC3F7" : pct >= 60 ? "#F4C842" : "#FF6B5B";

    return (
      <div className="rounded-xl border border-[#1C2A3E] bg-[#0E1520] p-8 text-center">
        <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-4">
          Quiz Complete
        </p>
        <p
          className="font-display font-bold text-6xl tracking-[-0.03em] mb-2"
          style={{ color: accentColor }}
        >
          {pct}%
        </p>
        <p className="font-sans text-[#8FA3BC] mb-1">
          {score} of {questions.length} correct
        </p>
        <p className="font-sans text-[#536B84] text-sm mb-8">
          {pct >= 80
            ? "Excellent work — you've mastered this lesson."
            : pct >= 60
            ? "Good effort. Review the sections you missed."
            : "Keep studying — re-read the lesson and try again."}
        </p>
        <button
          onClick={handleRestart}
          className="px-6 py-2.5 rounded-md bg-[#4FC3F7]/10 border border-[#4FC3F7]/30 text-[#4FC3F7] font-mono text-sm hover:bg-[#4FC3F7]/20 transition-colors"
        >
          Retake Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-[#1C2A3E] bg-[#0E1520] p-6 md:p-8">
      {/* Header row */}
      <div className="flex items-center justify-between mb-6">
        <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84]">
          Question {current + 1} / {questions.length}
        </p>
        {/* Progress dots */}
        <div className="flex items-center gap-1.5">
          {questions.map((_, i) => (
            <span
              key={i}
              className="block w-2 h-2 rounded-full transition-colors"
              style={{
                backgroundColor:
                  i < current
                    ? "#4FC3F7"
                    : i === current
                    ? "#4FC3F7"
                    : "#1C2A3E",
                opacity: i < current ? 1 : i === current ? 1 : 0.6,
              }}
            />
          ))}
        </div>
      </div>

      {/* Question */}
      <p className="font-display font-bold text-white text-lg md:text-xl leading-tight tracking-[-0.02em] mb-6">
        {q.question}
      </p>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {q.options.map((option, idx) => {
          const isCorrect = idx === q.answerIndex;
          const isSelected = idx === selected;

          let borderColor = "#1C2A3E";
          let bgColor = "transparent";
          let textColor = "#8FA3BC";
          let labelBg = "#1C2A3E";
          let labelText = "#536B84";

          if (answered) {
            if (isCorrect) {
              borderColor = "#4FC3F7";
              bgColor = "rgba(79,195,247,0.06)";
              textColor = "#e2ecf4";
              labelBg = "rgba(79,195,247,0.15)";
              labelText = "#4FC3F7";
            } else if (isSelected && !isCorrect) {
              borderColor = "#FF6B5B";
              bgColor = "rgba(255,107,91,0.06)";
              textColor = "#e2ecf4";
              labelBg = "rgba(255,107,91,0.15)";
              labelText = "#FF6B5B";
            }
          } else if (!answered) {
            if (isSelected) {
              borderColor = "#4FC3F7";
              labelBg = "rgba(79,195,247,0.15)";
              labelText = "#4FC3F7";
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={answered}
              className="w-full text-left flex items-start gap-3 p-3.5 rounded-lg border transition-all"
              style={{
                borderColor,
                backgroundColor: bgColor,
                cursor: answered ? "default" : "pointer",
              }}
            >
              <span
                className="shrink-0 w-7 h-7 rounded-md flex items-center justify-center font-mono text-xs font-bold transition-colors"
                style={{ backgroundColor: labelBg, color: labelText }}
              >
                {LABELS[idx]}
              </span>
              <span
                className="font-sans text-sm leading-relaxed pt-0.5 transition-colors"
                style={{ color: textColor }}
              >
                {option}
              </span>
              {answered && isCorrect && (
                <span className="ml-auto shrink-0 text-[#4FC3F7] text-xs font-mono pt-1">
                  ✓
                </span>
              )}
              {answered && isSelected && !isCorrect && (
                <span className="ml-auto shrink-0 text-[#FF6B5B] text-xs font-mono pt-1">
                  ✗
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation + Next */}
      {answered && (
        <div className="space-y-4">
          <div className="rounded-lg bg-[#080C12] border border-[#1C2A3E] p-4">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#536B84] mb-1">
              Explanation
            </p>
            <p className="font-sans text-sm text-[#8FA3BC] leading-relaxed">
              {q.explanation}
            </p>
          </div>
          <div className="flex justify-end">
            <button
              onClick={handleNext}
              className="px-5 py-2.5 rounded-md bg-[#4FC3F7]/10 border border-[#4FC3F7]/30 text-[#4FC3F7] font-mono text-sm hover:bg-[#4FC3F7]/20 transition-colors flex items-center gap-2"
            >
              {current + 1 >= questions.length ? "See Results" : "Next Question"}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
