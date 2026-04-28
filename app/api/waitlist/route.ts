import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type WaitlistInput = {
  email: string;
  city: string;
  sports: string[];
};

function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function POST(req: Request) {
  let body: Partial<WaitlistInput>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_json" }, { status: 400 });
  }

  const email = (body.email ?? "").trim().toLowerCase();
  const city = (body.city ?? "").trim();
  const sports = Array.isArray(body.sports) ? body.sports.slice(0, 12) : [];

  if (!isEmail(email)) {
    return NextResponse.json({ ok: false, error: "bad_email" }, { status: 400 });
  }
  if (!city || city.length > 80) {
    return NextResponse.json({ ok: false, error: "bad_city" }, { status: 400 });
  }

  const apiKey = process.env.LOOPS_API_KEY;
  const formId = process.env.LOOPS_FORM_ID;

  if (!apiKey || !formId) {
    console.warn("[waitlist] LOOPS env not set; logging signup", {
      email,
      city,
      sports,
    });
    return NextResponse.json({ ok: true, mode: "logged" });
  }

  const r = await fetch("https://app.loops.so/api/v1/contacts/create", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email,
      source: "altcrew.in/waitlist",
      city,
      sports: sports.join(", "),
      mailingLists: { [formId]: true },
    }),
  });

  if (!r.ok && r.status !== 409) {
    const txt = await r.text().catch(() => "");
    console.error("[waitlist] loops error", r.status, txt);
    return NextResponse.json(
      { ok: false, error: "upstream" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
