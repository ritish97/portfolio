"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroBento from "@/components/HeroBento";
import MetricsBento from "@/components/MetricsBento";
import ProjectsBento from "@/components/ProjectsBento";
import SkillsBento from "@/components/SkillsBento";
import CertificationsBento from "@/components/CertificationsBento";
import ExperienceBento from "@/components/ExperienceBento";
import ContactBento from "@/components/ContactBento";
import ResumeModal from "@/components/ResumeModal";
import CertificationsModal from "@/components/CertificationsModal";
import Toast from "@/components/Toast";
import StarfieldBackground from "@/components/StarfieldBackground";

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCertsOpen, setIsCertsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync theme with html root class
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [isDark]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("yadavretishkumar05@gmail.com");
    setToastMessage("Email copied to clipboard: yadavretishkumar05@gmail.com");
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 relative overflow-hidden ${
        isDark ? "bg-obsidian-bg text-zinc-100" : "bg-cream-bg text-zinc-900"
      }`}
    >
      {/* 3D Moving Starfield Galaxy Canvas */}
      <StarfieldBackground isDark={isDark} />

      {/* Subtle Background Radial Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className={`absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-[140px] opacity-20 ${
            isDark ? "bg-accent/40" : "bg-accent/20"
          }`}
        />
        <div
          className={`absolute top-[40%] -right-40 w-[500px] h-[500px] rounded-full blur-[160px] opacity-15 ${
            isDark ? "bg-indigo-600/30" : "bg-blue-400/20"
          }`}
        />
      </div>

      {/* Floating Modern Header */}
      <Navbar
        isDark={isDark}
        setIsDark={setIsDark}
        openResume={() => setIsResumeOpen(true)}
      />

      {/* Main Bento Grid Canvas */}
      <main className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-8 space-y-10 sm:space-y-12">
        {/* 1. Hero Bento Card */}
        <HeroBento
          isDark={isDark}
          onCopyEmail={handleCopyEmail}
          openResume={() => setIsResumeOpen(true)}
        />

        {/* 2. Impact Metrics Bento Card */}
        <MetricsBento isDark={isDark} />

        {/* 3. Featured Projects with Streamlit Live Apps & GitHub */}
        <ProjectsBento isDark={isDark} />

        {/* 4. Technical Skills & Architecture Bento */}
        <SkillsBento isDark={isDark} />

        {/* 5. Certifications Bento (Top 4 + View All Modal) */}
        <CertificationsBento
          isDark={isDark}
          openAllCerts={() => setIsCertsOpen(true)}
        />

        {/* 6. Experience & Education Bento */}
        <ExperienceBento isDark={isDark} />

        {/* 7. Contact & Footer Bento */}
        <ContactBento
          isDark={isDark}
          onCopyEmail={handleCopyEmail}
          openResume={() => setIsResumeOpen(true)}
        />
      </main>

      {/* Modals & Floating Components */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        isDark={isDark}
      />

      <CertificationsModal
        isOpen={isCertsOpen}
        onClose={() => setIsCertsOpen(false)}
        isDark={isDark}
      />

      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
