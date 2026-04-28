"use client";

import { useState } from "react";
import { motion } from "motion/react";

const sports = [
  "Run",
  "Lift",
  "Yoga",
  "Cycle",
  "Walk",
  "Swim",
  "Padel",
  "Badminton",
  "Other",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [picked, setPicked] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">(
    "idle",
  );
  const [fieldErr, setFieldErr] = useState<{ email?: string; city?: string }>(
    {},
  );

  function toggle(s: string) {
    setPicked((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));
  }

  function validate() {
    const errs: { email?: string; city?: string } = {};
    if (!email.trim()) errs.email = "Email is required.";
    else if (!EMAIL_RE.test(email.trim()))
      errs.email = "That email doesn't look right. Check the spelling.";
    if (!city.trim()) errs.city = "Tell us your city so we know where to land.";
    setFieldErr(errs);
    return Object.keys(errs).length === 0;
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          city: city.trim(),
          sports: picked,
        }),
      });
      if (!res.ok) throw new Error("network");
      setStatus("ok");
      setEmail("");
      setCity("");
      setPicked([]);
      setFieldErr({});
    } catch {
      setStatus("err");
    }
  }

  return (
    <section
      id="waitlist"
      className="relative"
      aria-labelledby="waitlist-heading"
    >
      <div className="container-page py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <aside className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
              join the crew
            </p>
          </aside>

          <div className="md:col-span-9 md:pl-6">
            <motion.h2
              id="waitlist-heading"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-display max-w-[18ch] font-bold"
            >
              Be on the app the day it drops.
            </motion.h2>

            <motion.form
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              onSubmit={submit}
              noValidate
              className="mt-12 max-w-2xl"
              aria-busy={status === "loading"}
            >
              <fieldset className="space-y-5">
                <legend className="sr-only">Waitlist signup</legend>

                <div>
                  <label
                    htmlFor="wl-email"
                    className="block text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    id="wl-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    inputMode="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (fieldErr.email)
                        setFieldErr((p) => ({ ...p, email: undefined }));
                    }}
                    aria-invalid={Boolean(fieldErr.email)}
                    aria-describedby={fieldErr.email ? "wl-email-err" : undefined}
                    placeholder="you@email.com"
                    className={`mt-2 w-full rounded-md border bg-bg px-4 py-3.5 text-base text-fg placeholder:text-muted focus:outline-none focus:ring-2 ${
                      fieldErr.email
                        ? "border-[var(--color-danger)] focus:border-[var(--color-danger)] focus:ring-[var(--color-danger)]/30"
                        : "border-fg/25 focus:border-[var(--accent)] focus:ring-[var(--accent)]/30"
                    }`}
                  />
                  {fieldErr.email && (
                    <p
                      id="wl-email-err"
                      className="mt-2 text-sm text-[var(--color-danger)]"
                    >
                      {fieldErr.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="wl-city"
                    className="block text-sm font-medium"
                  >
                    City
                  </label>
                  <input
                    id="wl-city"
                    name="city"
                    type="text"
                    required
                    autoComplete="address-level2"
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                      if (fieldErr.city)
                        setFieldErr((p) => ({ ...p, city: undefined }));
                    }}
                    aria-invalid={Boolean(fieldErr.city)}
                    aria-describedby={fieldErr.city ? "wl-city-err" : "wl-city-hint"}
                    placeholder="Vizag, Hyderabad, Mumbai…"
                    className={`mt-2 w-full rounded-md border bg-bg px-4 py-3.5 text-base text-fg placeholder:text-muted focus:outline-none focus:ring-2 ${
                      fieldErr.city
                        ? "border-[var(--color-danger)] focus:border-[var(--color-danger)] focus:ring-[var(--color-danger)]/30"
                        : "border-fg/25 focus:border-[var(--accent)] focus:ring-[var(--accent)]/30"
                    }`}
                  />
                  {fieldErr.city ? (
                    <p
                      id="wl-city-err"
                      className="mt-2 text-sm text-[var(--color-danger)]"
                    >
                      {fieldErr.city}
                    </p>
                  ) : (
                    <p id="wl-city-hint" className="mt-2 text-sm text-muted">
                      We open new cities by demand. Yours helps decide the order.
                    </p>
                  )}
                </div>

                <fieldset>
                  <legend className="block text-sm font-medium">
                    What do you train? <span className="text-muted">(optional)</span>
                  </legend>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {sports.map((s) => {
                      const on = picked.includes(s);
                      return (
                        <button
                          key={s}
                          type="button"
                          onClick={() => toggle(s)}
                          aria-pressed={on}
                          className={`rounded-full border px-4 py-2 text-sm transition ${
                            on
                              ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-fg)]"
                              : "border-fg/25 text-fg hover:border-fg/60"
                          }`}
                        >
                          {s}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 py-4 text-base font-medium text-[var(--accent-fg)] transition hover:bg-[var(--color-rust-deep)] disabled:opacity-50 sm:w-auto"
                  >
                    {status === "loading" ? "Joining…" : "Join the Crew"}
                    <span aria-hidden>→</span>
                  </button>
                </div>

                <div
                  role="status"
                  aria-live="polite"
                  className="min-h-[1.25rem] text-sm"
                >
                  {status === "ok" && (
                    <span className="text-[var(--accent)]">
                      You&rsquo;re in. Two emails before launch, one on launch
                      day. Check your inbox for confirmation.
                    </span>
                  )}
                  {status === "err" && (
                    <div className="flex flex-col gap-2 rounded-md border border-[var(--color-danger)]/40 bg-[var(--color-danger-soft)]/40 p-3 sm:flex-row sm:items-center sm:justify-between">
                      <span className="text-[var(--color-danger)]">
                        Couldn&rsquo;t reach the server. Check your connection
                        and retry, or email hello@altcrew.in.
                      </span>
                      <button
                        type="submit"
                        className="self-start rounded-full border border-[var(--color-danger)] px-4 py-1.5 text-xs font-medium text-[var(--color-danger)] transition hover:bg-[var(--color-danger)] hover:text-[var(--color-cream)]"
                      >
                        Try again
                      </button>
                    </div>
                  )}
                </div>

                <p className="text-xs text-muted">
                  No spam. We email twice before launch and once on launch day.
                  By joining you agree to occasional emails from AltCrew. We
                  never share your address. Read our{" "}
                  <a
                    href="/privacy"
                    className="underline decoration-1 underline-offset-2 hover:text-fg"
                  >
                    privacy notice
                  </a>
                  .
                </p>

                <div className="mt-4 flex items-center gap-3 border-t border-hairline pt-6 text-sm">
                  <span className="text-muted">Or follow along on Instagram:</span>
                  <a
                    href="https://instagram.com/altcrew.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-fg underline decoration-[var(--accent)] decoration-2 underline-offset-4 transition hover:text-[var(--accent)]"
                  >
                    @altcrew.in
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </fieldset>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
