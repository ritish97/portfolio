"use client";

import React from "react";
import { Cpu, BarChart2, Code2, Network } from "lucide-react";

interface SkillsBentoProps {
  isDark: boolean;
}

export default function SkillsBento({ isDark }: SkillsBentoProps) {
  const skillCategories = [
    {
      title: "Agentic AI & Machine Learning",
      icon: Cpu,
      badge: "Core Engineering",
      color: "text-accent",
      skills: [
        "RAG Architectures",
        "LangChain",
        "ChromaDB",
        "Hugging Face",
        "Sentence-Transformers",
        "FastAPI",
        "Vector Embeddings",
        "Predictive Modeling",
      ],
    },
    {
      title: "Data Analytics & Business Intelligence",
      icon: BarChart2,
      badge: "Decision Support",
      color: "text-emerald-500",
      skills: [
        "Power BI Dashboards",
        "Advanced Excel Modeling",
        "Complex SQL Queries",
        "ETL Pipelines",
        "Exploratory Data Analysis (EDA)",
        "Hypothesis Testing",
        "Statistical Modeling",
        "Data Cleansing",
      ],
    },
    {
      title: "Languages & Developer Tooling",
      icon: Code2,
      badge: "Software Engineering",
      color: "text-indigo-500",
      skills: [
        "Python (Pandas, NumPy)",
        "SQL",
        "C++",
        "Java",
        "Git",
        "GitHub",
        "REST APIs",
        "Streamlit",
      ],
    },
    {
      title: "Analytical Frameworks & Core CS",
      icon: Network,
      badge: "Foundation & Metrics",
      color: "text-amber-500",
      skills: [
        "RFM Customer Segmentation",
        "Cohort Retention Funnels",
        "Economic Order Quantity (EOQ)",
        "A/B Testing",
        "Database Management (DBMS)",
        "Computer Networks",
        "OOPs & Data Structures",
        "Operating Systems",
      ],
    },
  ];

  return (
    <section id="skills" className="w-full space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
          Technical Skills & Architecture
        </h2>
        <span className="text-xs font-mono text-zinc-400">Full Capabilities</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillCategories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div
              key={idx}
              className={`rounded-3xl p-6 transition-all duration-300 border shadow-lg ${
                isDark
                  ? "bg-obsidian-card border-obsidian-border text-zinc-100 hover:border-accent/40 shadow-black/40"
                  : "bg-white border-zinc-200/90 text-zinc-900 hover:border-accent/40 shadow-zinc-200/40"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-900/50 dark:bg-zinc-800/50 border border-zinc-700/40 ${cat.color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base leading-snug">{cat.title}</h3>
                    <span className="text-[11px] text-zinc-400 font-medium">
                      {cat.badge}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all hover:scale-105 ${
                      isDark
                        ? "bg-zinc-900/90 text-zinc-300 border border-zinc-800 hover:border-accent/50 hover:text-white"
                        : "bg-zinc-100 text-zinc-700 border border-zinc-200 hover:border-accent/50 hover:text-accent"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
