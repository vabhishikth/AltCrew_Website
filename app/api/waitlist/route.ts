import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

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
  const sports = Array.isArray(body.sports) ? body.sports.filter((x): x is string => typeof x === "string").slice(0, 12) : [];

  if (!isEmail(email)) {
    return NextResponse.json({ ok: false, error: "bad_email" }, { status: 400 });
  }
  if (!city || city.length > 80) {
    return NextResponse.json({ ok: false, error: "bad_city" }, { status: 400 });
  }

  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    console.warn("[waitlist] DATABASE_URL not set; logging signup", { email, city, sports });
    return NextResponse.json({ ok: true, mode: "logged" });
  }

  try {
    const sql = neon(databaseUrl);
    await sql`
      CREATE TABLE IF NOT EXISTS waitlist (
        id         bigserial PRIMARY KEY,
        email      text NOT NULL UNIQUE,
        city       text NOT NULL,
        sports     text[] NOT NULL DEFAULT '{}',
        created_at timestamptz NOT NULL DEFAULT now()
      )
    `;
    // Duplicate email is treated as success
    await sql`
      INSERT INTO waitlist (email, city, sports)
      VALUES (${email}, ${city}, ${sports})
      ON CONFLICT (email) DO NOTHING
    `;
  } catch (err) {
    console.error("[waitlist] database error", err);
    return NextResponse.json({ ok: false, error: "upstream" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
