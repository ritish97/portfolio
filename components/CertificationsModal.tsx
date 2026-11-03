"use client";

import React, { useState, useEffect } from "react";
import { Award, X, CheckCircle, ExternalLink, Search } from "lucide-react";

interface CertItem {
  id: string;
  title: string;
  issuer: string;
  category: "Core AI & Data" | "Cyber & Cloud" | "Programming & Tools";
  highlight?: boolean;
}

const certifications: CertItem[] = [
  {
    id: "google-it",
    title: "Google IT Support Professional Certificate",
    issuer: "Google / Coursera",
    category: "Cyber & Cloud",
    highlight: true,
  },
  {
    id: "iit-blockchain",
    title: "Blockchain and its Applications",
    issuer: "Indian Institute of Technology (IIT), Kharagpur",
    category: "Cyber & Cloud",
    highlight: true,
  },
  {
    id: "hackerrank-sql",
    title: "SQL (Basic) Certificate",
    issuer: "HackerRank",
    category: "Core AI & Data",
    highlight: true,
  },
  {
    id: "cyber-analyst",
    title: "Cyber Security Analyst Certificate",
    issuer: "Industry Accredited / Academic",
    category: "Cyber & Cloud",
    highlight: true,
  },
  {
    id: "ms-excel",
    title: "Introduction to MS Excel",
    issuer: "Microsoft SkillUp",
    category: "Core AI & Data",
  },
  {
    id: "google-networking",
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google / Coursera",
    category: "Cyber & Cloud",
  },
  {
    id: "vityarthi-ai",
    title: "Fundamentals of AI",
    issuer: "VITyarthi",
    category: "Core AI & Data",
  },
  {
    id: "vityarthi-python",
    title: "Python Essentials",
    issuer: "VITyarthi",
    category: "Programming & Tools",
  },
  {
    id: "vityarthi-java",
    title: "Programming in Java",
    issuer: "VITyarthi",
    category: "Programming & Tools",
  },
];

interface CertificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

export default function CertificationsModal({
  isOpen,
  onClose,
  isDark,
}: CertificationsModalProps) {
  const [filter, setFilter] = useState<string>("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredCerts = certifications.filter((cert) => {
    const matchesFilter = filter === "All" || cert.category === filter;
    const matchesSearch =
      cert.title.toLowerCase().includes(search.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className={`relative flex flex-col w-full max-w-3xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl border transition-all ${
          isDark
            ? "bg-obsidian-card border-obsidian-border text-zinc-100"
            : "bg-white border-zinc-200 text-zinc-800"
        }`}
      >
        {/* Header */}
        <div
          className={`flex items-center justify-between px-6 py-5 border-b ${
            isDark ? "border-obsidian-border bg-obsidian-card/90" : "border-zinc-200 bg-zinc-50"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/15 text-accent">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg">
                Verified Credentials & Certifications
              </h3>
              <p className="text-xs text-zinc-400">
                All 9 completed technical certifications across AI, Data & Security
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className={`p-2 rounded-full transition-colors ${
              isDark ? "hover:bg-zinc-800 text-zinc-400" : "hover:bg-zinc-200 text-zinc-600"
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter bar & Search */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-3 border-b ${
            isDark ? "border-obsidian-border/60 bg-obsidian-bg/50" : "border-zinc-100 bg-zinc-50/50"
          }`}
        >
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            {["All", "Core AI & Data", "Cyber & Cloud", "Programming & Tools"].map(
              (cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                    filter === cat
                      ? "bg-accent text-white shadow-sm"
                      : isDark
                      ? "bg-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-700"
                      : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                  }`}
                >
                  {cat}
                </button>
              )
            )}
          </div>

          {/* Search box */}
          <div className="relative w-full sm:w-60">
            <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-zinc-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search certificates..."
              className={`w-full pl-8 pr-3 py-1.5 rounded-full text-xs transition-colors outline-none border ${
                isDark
                  ? "bg-zinc-900 border-zinc-700 text-zinc-200 placeholder-zinc-500 focus:border-accent"
                  : "bg-white border-zinc-200 text-zinc-800 placeholder-zinc-400 focus:border-accent"
              }`}
            />
          </div>
        </div>

        {/* Certifications List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-3">
          {filteredCerts.length === 0 ? (
            <div className="text-center py-12 text-zinc-400 text-sm">
              No certifications found matching your criteria.
            </div>
          ) : (
            filteredCerts.map((cert) => (
              <div
                key={cert.id}
                className={`flex items-start justify-between p-4 rounded-2xl border transition-all ${
                  isDark
                    ? "bg-obsidian-bg/80 border-obsidian-border hover:border-accent/40"
                    : "bg-zinc-50/80 border-zinc-200/80 hover:border-accent/40"
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm leading-tight text-zinc-900 dark:text-zinc-100">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                      Issued by <span className="font-medium text-zinc-700 dark:text-zinc-300">{cert.issuer}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
                      cert.category === "Core AI & Data"
                        ? "bg-blue-500/10 text-blue-500 border border-blue-500/20"
                        : cert.category === "Cyber & Cloud"
                        ? "bg-purple-500/10 text-purple-500 border border-purple-500/20"
                        : "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                    }`}
                  >
                    {cert.category}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div
          className={`flex items-center justify-between px-6 py-3 border-t text-xs ${
            isDark ? "border-obsidian-border bg-obsidian-card text-zinc-400" : "border-zinc-200 bg-zinc-50 text-zinc-600"
          }`}
        >
          <span>Showing {filteredCerts.length} of 9 credentials</span>
          <span className="font-mono text-[11px]">Academic & Professional Track</span>
        </div>
      </div>
    </div>
  );
}
