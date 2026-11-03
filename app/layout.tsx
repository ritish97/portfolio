import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ritish Kumar Yadav | Data Analyst & Agentic AI Engineer",
  description:
    "Portfolio of Ritish Kumar Yadav. Data Analyst and Agentic AI Engineer specialized in RAG LLM architectures, Power BI dashboards, SQL, Python, and predictive analytics.",
  keywords: [
    "Ritish Kumar Yadav",
    "Data Analyst",
    "Agentic AI Engineer",
    "AI/ML",
    "RAG",
    "FastAPI",
    "LangChain",
    "Power BI",
    "Python",
    "SQL",
  ],
  authors: [{ name: "Ritish Kumar Yadav", url: "https://github.com/ritish97" }],
  openGraph: {
    title: "Ritish Kumar Yadav | Data Analyst & Agentic AI Engineer",
    description: "Sleek, modular Bento Grid portfolio showcasing production AI pipelines & analytics dashboards.",
    url: "https://github.com/ritish97",
    siteName: "Ritish Kumar Yadav Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-obsidian-bg text-zinc-100 antialiased selection:bg-accent selection:text-white dark:bg-obsidian-bg dark:text-zinc-100 light:bg-cream-bg light:text-zinc-900 transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
