"use client";

import React, { useEffect } from "react";
import { Download, X, ExternalLink, FileText } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

export default function ResumeModal({ isOpen, onClose, isDark }: ResumeModalProps) {
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className={`relative flex flex-col w-full max-w-4xl h-[88vh] rounded-3xl overflow-hidden shadow-2xl transition-all border ${
          isDark
            ? "bg-obsidian-card border-obsidian-border text-zinc-100"
            : "bg-white border-zinc-200 text-zinc-800"
        }`}
      >
        {/* Modal Header */}
        <div
          className={`flex items-center justify-between px-6 py-4 border-b ${
            isDark ? "border-obsidian-border bg-obsidian-card/90" : "border-zinc-200 bg-zinc-50"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/15 text-accent">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-sm sm:text-base leading-tight">
                Ritish Kumar Yadav — Resume
              </h3>
              <p className="text-xs text-zinc-400">Data Analyst & Agentic AI Engineer</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              download="Ritish_Kumar_Yadav_Resume.pdf"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-accent text-white hover:bg-accent/90 transition-all hover:scale-105 shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className={`p-2 rounded-full transition-colors ${
                isDark ? "hover:bg-zinc-800 text-zinc-400" : "hover:bg-zinc-200 text-zinc-600"
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Viewer Body */}
        <div className="relative flex-1 w-full bg-zinc-900/10">
          <iframe
            src="/resume.pdf#toolbar=1"
            className="w-full h-full border-none"
            title="Ritish Kumar Yadav Resume"
          />
        </div>

        {/* Modal Footer */}
        <div
          className={`flex items-center justify-between px-6 py-3 text-xs border-t ${
            isDark ? "border-obsidian-border bg-obsidian-card text-zinc-400" : "border-zinc-200 bg-zinc-50 text-zinc-600"
          }`}
        >
          <span>B.Tech in Cyber Security and Digital Forensics, Vellore Institute of Technology</span>
          <a
            href="https://linkedin.com/in/ritish-yadav24"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-accent hover:underline font-medium"
          >
            <span>LinkedIn Profile</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
