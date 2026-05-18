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

Follow along — @getshuuk
https://instagram.com/getshuuk

— shuuk!
shuuk.ca/jam`;
  // Typography tokens — system fallback stack (email clients can't load Plein).
  // Hierarchy: kicker (mono caption) → display name → headline → label → fact → prose.
  const teamBlock = teamName
    ? `
  <p style="margin:0 0 4px;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;font-family:'JetBrains Mono','Courier New',monospace;color:rgba(0,0,0,0.5);">Waitlisted · ${escapeHtml(division || 'TBD')}</p>
  <p style="margin:0 0 18px;font-size:32px;line-height:1.05;font-weight:800;letter-spacing:-0.01em;color:#0a0a0a;">${escapeHtml(teamName)}</p>`
    : `
  <p style="margin:0 0 4px;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;font-family:'JetBrains Mono','Courier New',monospace;color:rgba(0,0,0,0.5);">Waitlisted</p>
  <p style="margin:0 0 18px;font-size:24px;line-height:1.15;font-weight:800;color:#0a0a0a;">${escapeHtml(email)}</p>`;

  const rundownItem = (label: string, primary: string, secondary?: string) => `
    <tr>
      <td style="padding:14px 0;border-top:1px solid rgba(0,0,0,0.10);">
        <p style="margin:0 0 4px;font-size:10px;letter-spacing:0.22em;text-transform:uppercase;font-family:'JetBrains Mono','Courier New',monospace;color:rgba(0,0,0,0.5);">${label}</p>
        <p style="margin:0;font-size:16px;line-height:1.4;font-weight:600;color:#0a0a0a;">${primary}</p>
        ${secondary ? `<p style="margin:2px 0 0;font-size:13px;line-height:1.45;color:rgba(0,0,0,0.6);">${secondary}</p>` : ''}
      </td>
    </tr>`;

  const userHtml = `<!doctype html><html><body style="margin:0;padding:0;background:#f6f3ec;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Outfit', sans-serif; color:#0a0a0a;">
<div style="max-width:560px;margin:0 auto;padding:32px 24px;">

  <!-- event banner -->
  <div style="background:#0a0a0a;color:white;padding:14px 18px;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;font-family:'JetBrains Mono','Courier New',monospace;">
    shuuk! 3x3 jam · Ottawa · Jul 11, 2026
  </div>

  <!-- headline -->
  <h1 style="font-size:46px;line-height:0.98;margin:28px 0 20px;font-weight:800;letter-spacing:-0.02em;color:#0a0a0a;">you&rsquo;re on the <span style="color:#EE028B">list.</span></h1>

  <!-- team confirmation block -->
  ${teamBlock}

  <!-- prose follow-up -->
  <p style="font-size:16px;line-height:1.55;margin:0 0 28px;color:rgba(0,0,0,0.78);">We&rsquo;ll confirm your spot and send registration details as soon as they open.</p>

  <!-- the rundown — labeled stat blocks -->
  <div style="background:white;border:2px solid #0a0a0a;box-shadow:8px 8px 0 0 #EE028B;padding:20px 24px;margin:0 0 32px;">
    <p style="margin:0 0 10px;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;font-family:'JetBrains Mono','Courier New',monospace;color:rgba(0,0,0,0.5);">The rundown</p>
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
      ${rundownItem('When', 'Saturday, July 11, 2026', 'Gates 8:00 AM · Finals 6:30 PM · Awards 7:30 PM')}
      ${rundownItem('Where', 'Ottawa Masonic Centre', '2140 Walkley Road, Ottawa, ON K1G 3V3')}
      ${rundownItem('Format', 'U12 / U14 / U16 · 12 teams per division', 'Outdoor 3x3 + midday indoor session')}
    </table>
  </div>

  <!-- closer -->
  <p style="margin:0 0 4px;font-size:14px;line-height:1.5;color:rgba(0,0,0,0.7);">Questions? Reply to this email.</p>
  <p style="margin:0;font-size:14px;line-height:1.5;color:rgba(0,0,0,0.7);">Follow along &mdash; <a href="https://instagram.com/getshuuk" style="color:#EE028B;text-decoration:underline;font-weight:600;">@getshuuk</a></p>

  <!-- sign-off -->
  <p style="margin:32px 0 0;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;font-family:'JetBrains Mono','Courier New',monospace;color:rgba(0,0,0,0.4);">&mdash; shuuk! &middot; shuuk.ca/jam</p>
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
