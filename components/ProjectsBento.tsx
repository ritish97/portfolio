"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Sparkles,
  Layers,
  Database,
  BarChart3,
  Bot,
  ArrowUpRight,
} from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  category: "Agentic AI & LLMs" | "Data & BI Analytics";
  tagline: string;
  description: string;
  impact: string;
  tech: string[];
  githubUrl: string;
  liveUrl: string;
  icon: any;
  featured?: boolean;
}

const projects: ProjectItem[] = [
  {
    id: "rag-qa",
    title: "Prashna Vali: RAG Document Q&A System",
    category: "Agentic AI & LLMs",
    tagline: "LLM-Powered Retrieval-Augmented Generation with Vector Search",
    description:
      "Engineered an end-to-end RAG architecture enabling accurate contextual question answering over proprietary document corpuses. Employs semantic vector indexing with ChromaDB and Hugging Face sentence-transformers to minimize hallucination and cut retrieval latency.",
    impact: "Sub-second semantic search & accurate contextual answers",
    tech: ["FastAPI", "LangChain", "ChromaDB", "Hugging Face", "Python", "Streamlit"],
    githubUrl: "https://github.com/ritish97/prashna_vali",
    liveUrl: "https://prashnavali-mip6sgansa4d5exnoxhxza.streamlit.app/",
    icon: Bot,
    featured: true,
  },
  {
    id: "supply-chain",
    title: "Supply Chain & Inventory Optimization",
    category: "Data & BI Analytics",
    tagline: "Algorithmic EOQ & Dynamic Safety Stock Modeling",
    description:
      "Formulated Economic Order Quantity (EOQ) and probabilistic safety stock models in Python & SQL. Engineered complex multi-table SQL pipelines to aggregate transactional schemas, backed by an interactive management dashboard.",
    impact: "Reduced holding costs by 18% & stockout risk by 22%",
    tech: ["Python", "SQL", "Power BI", "Excel Modeling", "Streamlit"],
    githubUrl: "https://github.com/ritish97/Supply-Chain-Inventory-Optimization",
    liveUrl: "https://supply-chain-inventory-optimization-ehjdrvhf8es39hj6b3z4fm.streamlit.app/",
    icon: Layers,
    featured: true,
  },
  {
    id: "hr-attrition",
    title: "Enterprise HR Workforce Attrition Analytics",
    category: "Data & BI Analytics",
    tagline: "Predictive Turnover Drivers Across 10+ Departments",
    description:
      "Processed and cleansed 1,470+ workforce records using Python and SQL to uncover behavioral correlations behind a 16.1% company-wide turnover rate. Pinpointed sales role attrition at 39.8%, enabling targeted departmental retention interventions.",
    impact: "Actionable retention strategy for 1,470+ employees",
    tech: ["Python", "SQL", "Power BI", "Statistical Modeling", "Streamlit"],
    githubUrl: "https://github.com/ritish97/Enterprise-HR-Workforce-Attrition-Analytics-",
    liveUrl: "https://ezurm3oghbvcb5emt2ztgk.streamlit.app/",
    icon: BarChart3,
  },
  {
    id: "instacart-rfm",
    title: "Instacart Customer Retention & RFM Analytics",
    category: "Data & BI Analytics",
    tagline: "Cohort Behavior Tracking & Recency-Frequency Segmentation",
    description:
      "Analyzed large-scale transactional datasets with Pandas and SQL to perform granular Recency, Frequency, and Monetary (RFM) customer segmentation. Automated multi-month cohort retention funnels to isolate drop-off points.",
    impact: "Boosted repeat purchases by 14% via targeted cohorting",
    tech: ["Python", "Pandas", "SQL", "Power BI", "Cohort Funnels", "Streamlit"],
    githubUrl: "https://github.com/ritish97/instacart-retention-analytics",
    liveUrl: "https://instacart-retention-analytics-ewdh5ytgldjbj9g3xvafz3.streamlit.app/",
    icon: Database,
  },
];

interface ProjectsBentoProps {
  isDark: boolean;
}

export default function ProjectsBento({ isDark }: ProjectsBentoProps) {
  const [activeTab, setActiveTab] = useState<string>("All");

  const filteredProjects = projects.filter((p) => {
    if (activeTab === "All") return true;
    return p.category === activeTab;
  });

  return (
    <section id="projects" className="w-full space-y-4">
      {/* Header & Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
            Featured Projects & Live Deployments
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
            All 4 systems feature publicly accessible Streamlit live demos and open-source code
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className={`flex items-center gap-1 p-1 rounded-full border text-xs font-medium self-start sm:self-auto ${
            isDark ? "bg-zinc-900 border-zinc-800" : "bg-zinc-100 border-zinc-200"
          }`}
        >
          {["All", "Agentic AI & LLMs", "Data & BI Analytics"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-full transition-all ${
                activeTab === tab
                  ? "bg-accent text-white shadow-sm font-semibold"
                  : isDark
                  ? "text-zinc-400 hover:text-white"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {filteredProjects.map((project) => {
          const Icon = project.icon;
          return (
            <div
              key={project.id}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 shadow-xl border ${
                isDark
                  ? "bg-obsidian-card border-obsidian-border text-zinc-100 hover:border-accent/50 shadow-black/40"
                  : "bg-white border-zinc-200/90 text-zinc-900 hover:border-accent/50 shadow-zinc-200/40"
              }`}
            >
              {/* Top Meta */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/10 text-accent border border-accent/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                      {project.category}
                    </span>
                  </div>

                  {/* Live Status indicator */}
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Live App Deployed</span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-xl font-bold tracking-tight group-hover:text-accent transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-1">
                    {project.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed pt-1">
                  {project.description}
                </p>

                {/* Impact Highlight Box */}
                <div
                  className={`p-3 rounded-2xl border text-xs font-medium flex items-center gap-2 ${
                    isDark
                      ? "bg-zinc-900/60 border-zinc-800 text-emerald-400"
                      : "bg-emerald-50/80 border-emerald-100 text-emerald-700"
                  }`}
                >
                  <Sparkles className="w-4 h-4 flex-shrink-0" />
                  <span>Key Result: {project.impact}</span>
                </div>
              </div>

              {/* Bottom Tech Pills & Action Buttons */}
              <div className="mt-5 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/80 space-y-4">
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium ${
                        isDark
                          ? "bg-zinc-900 text-zinc-300 border border-zinc-800"
                          : "bg-zinc-100 text-zinc-700 border border-zinc-200"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-1">
                  {/* Live Streamlit Demo */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-accent text-white font-semibold text-xs sm:text-sm hover:bg-accent/90 transition-all hover:scale-[1.02] active:scale-95 shadow-md shadow-accent/25"
                  >
                    <span>Launch Live App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {/* GitHub Repo */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl font-semibold text-xs sm:text-sm transition-all hover:scale-[1.02] active:scale-95 border ${
                      isDark
                        ? "bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border-zinc-700"
                        : "bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border-zinc-300"
                    }`}
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
