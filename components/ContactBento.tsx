"use client";

import React from "react";
import { Mail, Phone, Linkedin, Github, FileText, Copy, ArrowUpRight } from "lucide-react";

interface ContactBentoProps {
  isDark: boolean;
  onCopyEmail: () => void;
  openResume: () => void;
}

export default function ContactBento({
  isDark,
  onCopyEmail,
  openResume,
}: ContactBentoProps) {
  return (
    <footer id="contact" className="w-full space-y-6 pt-6">
      <div
        className={`relative overflow-hidden rounded-3xl p-8 sm:p-10 border transition-all duration-300 shadow-2xl ${
          isDark
            ? "bg-obsidian-card border-obsidian-border text-zinc-100 shadow-black/40"
            : "bg-white border-zinc-200/90 text-zinc-900 shadow-zinc-200/40"
        }`}
      >
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Get in Touch
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to create data-driven AI systems?
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 max-w-xl">
              Open to full-time engineering and data analyst opportunities, internships, and high-impact AI/BI projects. Feel free to reach out directly.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-mono pt-2 text-zinc-500 dark:text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-accent" />
                <span>+91 771-738-8449</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-accent" />
                <span>yadavretishkumar05@gmail.com</span>
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 w-full md:w-auto">
            <button
              onClick={onCopyEmail}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-accent text-white font-semibold text-xs sm:text-sm hover:bg-accent/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-accent/25"
            >
              <Mail className="w-4 h-4" />
              <span>Copy Email</span>
            </button>

            <a
              href="https://linkedin.com/in/ritish-yadav24"
              target="_blank"
              rel="noreferrer"
              className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl font-semibold text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 border ${
                isDark
                  ? "bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border-zinc-700"
                  : "bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border-zinc-300"
              }`}
            >
              <svg className="w-4 h-4 fill-[#0A66C2]" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74V9.87H5.06v8.63h2.8z" />
              </svg>
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/ritish97"
              target="_blank"
              rel="noreferrer"
              className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl font-semibold text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 border ${
                isDark
                  ? "bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border-zinc-700"
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
              <span>GitHub</span>
            </a>

            <button
              onClick={openResume}
              className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl font-semibold text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 border ${
                isDark
                  ? "bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border-zinc-700"
                  : "bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border-zinc-300"
              }`}
            >
              <FileText className="w-4 h-4 text-accent" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Minimal Copyright */}
      <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 pb-10 px-2 gap-3">
        <p>© 2026 Ritish Kumar Yadav. Built with Apple Bento Grid Design System.</p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/ritish97"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/ritish-yadav24"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#hero"
            className="hover:text-accent transition-colors font-mono"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
