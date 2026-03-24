'use client';

import { useState } from "react";
import { publications } from "@/data/publications";

export default function PublicationsSection() {
  const [tab, setTab] = useState("articles");

  return (
    <section id="publications" className="bg-[#0d1f3c] px-8 py-20">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-serif mb-6">Publications</h2>

        {/* TABS */}
        <div className="flex gap-4 mb-10">
          {["articles", "patents", "books"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded ${
                tab === t
                  ? "bg-[#c9a84c] text-black"
                  : "bg-[#1b2f55]"
              }`}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>

        {/* ARTICLES */}
        {tab === "articles" && (
          <div className="space-y-6">
            {[...publications.articles]
              .sort((a, b) => b.year - a.year)
              .slice(0, 10)
              .map((pub, index) => (
                <div key={index} className="bg-[#112240] p-5 rounded-xl">

                  <h3 className="text-lg font-semibold">
                    {pub.title}
                  </h3>

                  <p className="text-sm text-gray-300">
                    {pub.authors}
                  </p>

                  <p className="text-sm text-gray-400">
                    {pub.journal} • {pub.year}
                  </p>

                  {pub.citations && (
                    <p className="text-xs text-gray-500">
                      Citations: {pub.citations}
                    </p>
                  )}
                </div>
              ))}

            {/* Google Scholar */}
            <a
              href="https://scholar.google.com/citations?user=GaleEZ8AAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-5 py-2 bg-[#c9a84c] text-black rounded"
            >
              View More on Google Scholar
            </a>
          </div>
        )}

        {/* PATENTS */}
        {tab === "patents" && (
          <div className="space-y-6">
            {[...publications.patents]
              .sort((a, b) => b.year - a.year)
              .map((patent, index) => (
                <div key={index} className="bg-[#112240] p-5 rounded-xl">
                  <p className="text-[#c9a84c]">{patent.year}</p>
                  <h3 className="text-lg font-semibold">{patent.title}</h3>
                  <p className="text-sm text-gray-400">{patent.details}</p>
                </div>
              ))}
          </div>
        )}

        {/* BOOKS */}
        {tab === "books" && (
  <div className="space-y-6">
    {[...publications.books]
      .sort((a, b) => b.year - a.year)
      .map((book, index) => (
        <div key={index} className="bg-[#112240] p-5 rounded-xl">
          
          <p className="text-[#c9a84c]">{book.year}</p>

          {/* TYPE (NEW) */}
          {book.type && (
            <p className="text-xs text-[#c9a84c] uppercase tracking-wide">
              {book.type}
            </p>
          )}

          <h3 className="text-lg font-semibold">
            {book.title}
          </h3>

          <p className="text-sm text-gray-400">
            {book.publisher}
          </p>

        </div>
      ))}
  </div>
)}

      </div>
    </section>
  );
}