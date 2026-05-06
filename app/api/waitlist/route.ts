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

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.warn("[waitlist] SUPABASE env not set; logging signup", { email, city, sports });
    return NextResponse.json({ ok: true, mode: "logged" });
  }

  const r = await fetch(`${supabaseUrl}/rest/v1/waitlist`, {
    method: "POST",
    headers: {
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({ email, city, sports: sports.join(", ") }),
  });

  // 409 = duplicate email, treat as success
  if (!r.ok && r.status !== 409) {
    const txt = await r.text().catch(() => "");
    console.error("[waitlist] supabase error", r.status, txt);
    return NextResponse.json({ ok: false, error: "upstream" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
