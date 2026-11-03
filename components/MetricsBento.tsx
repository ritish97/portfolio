"use client";

import React from "react";
import { TrendingDown, Users, Repeat, Award, ArrowUpRight } from "lucide-react";

interface MetricsBentoProps {
  isDark: boolean;
}

export default function MetricsBento({ isDark }: MetricsBentoProps) {
  const metrics = [
    {
      stat: "18%",
      label: "Holding Cost Reduction",
      detail: "Optimized inventory schedules with EOQ & safety stock models",
      icon: TrendingDown,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
    },
    {
      stat: "1,470+",
      label: "Employee Records Modeled",
      detail: "Statistical analysis uncovering 39.8% sales department turnover",
      icon: Users,
      color: "text-accent",
      bg: "bg-accent/10",
      border: "border-accent/20",
    },
    {
      stat: "14%",
      label: "Repeat Purchase Boost",
      detail: "Multi-month cohort retention pipelines & RFM segmentation",
      icon: Repeat,
      color: "text-indigo-500",
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20",
    },
    {
      stat: "8.26",
      label: "VIT Academic CGPA",
      detail: "B.Tech in Cyber Security, Applied Statistics & Forensics",
      icon: Award,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
    },
  ];

  return (
    <section id="metrics" className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
          Quantifiable Business Impact
        </h2>
        <span className="text-xs font-mono text-zinc-400">Proven Metrics</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className={`group relative overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg border ${
                isDark
                  ? "bg-obsidian-card border-obsidian-border text-zinc-100 hover:border-accent/50"
                  : "bg-white border-zinc-200/90 text-zinc-900 hover:border-accent/50 shadow-zinc-200/40"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-2xl ${item.bg} ${item.color} ${item.border} border`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-zinc-400">0{idx + 1}</span>
              </div>

              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight group-hover:text-accent transition-colors">
                  {item.stat}
                </div>
                <div className="font-semibold text-sm leading-snug">
                  {item.label}
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed pt-1">
                  {item.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
