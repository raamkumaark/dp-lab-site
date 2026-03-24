import { NextResponse } from "next/server";

export async function GET() {
  const ORCID_ID = "0000-0002-6290-6380";

  try {
    const res = await fetch(
      `https://pub.orcid.org/v3.0/${ORCID_ID}/works`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error("ORCID fetch failed");
    }

    const data = await res.json();
    const works = data.group || [];

    const publications = works
      .map((item: any) => {
        const summaries = item["work-summary"];

        // Pick the most recent version (better than [0])
        const work = summaries.reduce((latest: any, current: any) => {
          const yearA = Number(
            latest["publication-date"]?.year?.value || 0
          );
          const yearB = Number(
            current["publication-date"]?.year?.value || 0
          );
          return yearB > yearA ? current : latest;
        });

        return {
          title: work.title?.title?.value || "No title",
          journal: work["journal-title"]?.value || "",
          year: Number(work["publication-date"]?.year?.value) || 0,
          type: work.type,
        };
      })
      // Filter only journal articles
      .filter((pub: any) => pub.type === "journal-article")
      // Remove invalid years
      .filter((pub: any) => pub.year > 0)
      // Sort latest first
      .sort((a: any, b: any) => b.year - a.year)
      // Limit to 10
      .slice(0, 10);

    return NextResponse.json(publications);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch ORCID data" },
      { status: 500 }
    );
  }
}