import { NextResponse } from 'next/server';
import type { WaitlistPayload } from '../types';
import { OPS_EMAIL, escapeHtml, isValidEmail, sendOne } from '../transport';

export async function handleWaitlist(data: WaitlistPayload) {
  const event = data.event || 'shuuk-3x3-jam';
  const eventLabel =
    event === 'juuk-3x3-jam' || event === 'shuuk-3x3-jam'
      ? 'shuuk! 3x3 jam · Ottawa · July 11, 2026'
      : event;
  const source = data.source || 'unknown';
  const email = String(data.email || '').trim();
  const teamName = String(data.teamName || '').trim();
  const division = String(data.division || '').trim();
  const contactName = String(data.contactName || '').trim();
  const phone = String(data.phone || '').trim();

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
  }

  const isTeamSignup = !!(teamName || division || contactName);

  const opsSubject = isTeamSignup
    ? `Waitlist: ${event} — ${teamName || email} (${division || 'no div'})`
    : `Waitlist: ${event} — ${email}`;
  const opsText = isTeamSignup
    ? `New team waitlist signup\nEvent: ${event}\nTeam: ${teamName}\nDivision: ${division}\nContact: ${contactName}\nEmail: ${email}\nPhone: ${phone || '—'}\nSource: ${source}`
    : `New waitlist signup\nEvent: ${event}\nEmail: ${email}\nSource: ${source}`;
  const opsHtml = isTeamSignup
    ? `<h2>New team waitlist signup</h2>
<p><strong>Event:</strong> ${escapeHtml(event)}</p>
<p><strong>Team:</strong> ${escapeHtml(teamName)}</p>
<p><strong>Division:</strong> ${escapeHtml(division)}</p>
<p><strong>Contact:</strong> ${escapeHtml(contactName)}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
<p><strong>Phone:</strong> ${escapeHtml(phone) || '—'}</p>
<p><strong>Source:</strong> ${escapeHtml(source)}</p>`
    : `<h2>New waitlist signup</h2>
<p><strong>Event:</strong> ${escapeHtml(event)}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
<p><strong>Source:</strong> ${escapeHtml(source)}</p>`;

  const userSubject = `you're on the list — ${eventLabel}`;
  const greetingTeam = teamName ? `${teamName} ` : '';
  const userText = `${greetingTeam}is on the waitlist for ${eventLabel}.

We'll confirm your spot and send registration details as soon as they open.

Saturday, July 11, 2026
2140 Walkley Road, Ottawa, Ontario K1G 3V3
U12 / U14 / U16 · 12 teams per division
Outdoor 3x3 + midday indoor session — 23 Things No One Tells Hoopers
Gates 8:00 AM · Finals 6:30 PM · Awards 7:30 PM

— shuuk!
shuuk.ca/jam`;
  const userHtml = `<!doctype html><html><body style="margin:0;padding:0;background:#f6f3ec;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color:#0a0a0a;">
<div style="max-width:520px;margin:0 auto;padding:32px 24px;">
  <div style="background:#0a0a0a;color:white;padding:14px 18px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;font-family:monospace;">
    shuuk! 3x3 jam · Ottawa · Jul 11, 2026
  </div>
  <h1 style="font-size:42px;line-height:1;margin:24px 0 12px;color:#0a0a0a;">you're on the <span style="color:#EE028B">list.</span></h1>
  <p style="font-size:16px;line-height:1.55;margin:0 0 18px;">${
    teamName
      ? `Thanks — <strong>${escapeHtml(teamName)}</strong> (${escapeHtml(division || 'TBD')}) is on the waitlist.`
      : `Thanks for joining the waitlist.`
  } We'll confirm your spot and send registration details as soon as they open.</p>
  <div style="background:white;border:2px solid #0a0a0a;padding:18px 20px;margin:20px 0;">
    <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;font-family:monospace;color:rgba(0,0,0,0.55);">the rundown</p>
    <p style="margin:0;font-size:15px;line-height:1.6;">Saturday, July 11, 2026<br/>2140 Walkley Road, Ottawa, ON K1G 3V3<br/>U12 / U14 / U16 · 12 teams per division<br/>Outdoor 3x3 + midday indoor session<br/>Gates 8:00 AM · Finals 6:30 PM · Awards 7:30 PM</p>
  </div>
  <p style="margin:0 0 6px;font-size:13px;color:rgba(0,0,0,0.65);">Questions? Reply to this email.</p>
  <p style="margin:24px 0 0;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;font-family:monospace;color:rgba(0,0,0,0.45);">— shuuk! · shuuk.ca/jam</p>
</div>
</body></html>`;

  // Ops first; user confirmation must not block ops capture
  await sendOne({
    to: OPS_EMAIL,
    replyTo: email,
    subject: opsSubject,
    text: opsText,
    html: opsHtml,
  });
  try {
    await sendOne({
      to: email,
      replyTo: OPS_EMAIL,
      subject: userSubject,
      text: userText,
      html: userHtml,
    });
  } catch (err) {
    console.error('User confirmation email failed:', err);
  }
  return NextResponse.json({ success: true });
}
