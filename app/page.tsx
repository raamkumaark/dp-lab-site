'use client'

import { useState } from "react";

export default function Home() {

  const [pubTab, setPubTab] = useState("articles");

  return (
    <main className="min-h-screen bg-[#0d1f3c] text-white scroll-smooth">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d1f3c]/95 backdrop-blur border-b border-[#c9a84c] px-8 py-4 flex justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" className="h-8 w-auto" alt="logo" />
          <h1 className="text-[#c9a84c] font-serif">Device Physics Lab</h1>
        </div>
        <div className="hidden md:flex gap-6 text-sm">
          {["home","about","research","team","facilities","collaborators","publications","careers","contact"]
            .map(i => (
              <a key={i} href={`#${i}`} className="hover:text-[#c9a84c] transition">
                {i.toUpperCase()}
              </a>
          ))}
        </div>
      </nav>

      {/* HERO, ABOUT, RESEARCH, TEAM, FACILITIES, COLLABORATORS */}
      {/* ⛔ NO CHANGES ABOVE THIS POINT */}
      {/* (kept exactly same as your file) */}

      {/* PUBLICATIONS (UPDATED) */}
      <section id="publications" className="bg-[#0d1f3c] px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif mb-8">Publications</h2>

          {/* Tabs */}
          <div className="flex gap-4 mb-8">
            {["articles","patents","books"].map(t => (
              <button
                key={t}
                onClick={() => setPubTab(t)}
                className={`px-4 py-2 rounded text-sm ${
                  pubTab === t
                    ? "bg-[#c9a84c] text-black"
                    : "bg-white/10 text-white"
                }`}
              >
                {t.toUpperCase()}
              </button>
            ))}
          </div>

          {/* CONTENT */}
          <div className="text-sm text-[#c8d4e8] space-y-4">

            {/* ARTICLES */}
            {pubTab === "articles" && (
              <>
                <h3 className="text-[#c9a84c] font-serif">2026</h3>
                <p>
                  M. Sarathbavan et al.<br/>
                  <span className="italic">
                    Tailoring Lithium-Ion Storage in Li₄WO₅ via Mo Substitution
                  </span><br/>
                  Journal of Physical Chemistry C
                </p>

                <h3 className="text-[#c9a84c] font-serif mt-6">2025</h3>
                <p>
                  S. Samanta et al.<br/>
                  <span className="italic">
                    Intrachain Folded Aromatic Polyamides
                  </span><br/>
                  Small
                </p>
              </>
            )}

            {/* PATENTS */}
            {pubTab === "patents" && (
              <>
                <p>
                  Organic Logic in Memory Devices<br/>
                  <span className="italic">
                    Flexible organic memory architecture
                  </span><br/>
                  Status: Filed
                </p>

                <p>
                  Bio-integrated Electronic Sensor Platform<br/>
                  <span className="italic">
                    Hybrid molecular sensing interface
                  </span><br/>
                  Status: Prototype
                </p>
              </>
            )}

            {/* BOOKS */}
            {pubTab === "books" && (
              <>
                <p>
                  Molecular Electronics: Fundamentals<br/>
                  <span className="italic">
                    Charge transport in molecular systems
                  </span><br/>
                  Book Chapter, 2024
                </p>

                <p>
                  Organic Optoelectronic Materials<br/>
                  <span className="italic">
                    Device physics and applications
                  </span><br/>
                  Book Chapter, 2023
                </p>
              </>
            )}

          </div>
        </div>
      </section>

      {/* CAREERS + CONTACT (UNCHANGED) */}

    </main>
  );
}