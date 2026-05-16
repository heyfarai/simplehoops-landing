import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import nodemailer from 'nodemailer';

const fromEmail = process.env.POSTMARK_FROM_EMAIL || process.env.EMAIL_FROM || 'do-not-reply@shuuk.ca';
const opsEmail = process.env.OPS_EMAIL || 'farai@shuuk.ca';

function escapeHtml(s) {
    return String(s || '').replace(/[&<>"']/g, c => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
}

function isValidEmail(e) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(e || '').trim());
}

async function sendOne({ to, replyTo, subject, text, html }) {
    if (process.env.USE_MAILPIT === 'true') {
        const transporter = nodemailer.createTransport({
            host: process.env.MAILPIT_SMTP_HOST,
            port: parseInt(process.env.MAILPIT_SMTP_PORT) || 1025,
            secure: false
        });
        await transporter.sendMail({ from: fromEmail, to, replyTo, subject, text, html });
        return;
    }
    const response = await fetch('https://api.postmarkapp.com/email', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Postmark-Server-Token': process.env.POSTMARK_API_TOKEN
        },
        body: JSON.stringify({
            From: fromEmail,
            To: to,
            ReplyTo: replyTo,
            Subject: subject,
            TextBody: text,
            HtmlBody: html
        })
    });
    if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        console.error('Postmark error:', error);
        throw new Error('Failed to send email');
    }
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { type, ...data } = req.body || {};

    try {
        if (type === 'demo') {
            const subject = `Demo Request: ${data.league}`;
            const text = `Name: ${data.name}\nEmail: ${data.email}\nLeague: ${data.league}\nTeams: ${data.teams}`;
            const html = `<h2>New Demo Request</h2>
<p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
<p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
<p><strong>League:</strong> ${escapeHtml(data.league)}</p>
<p><strong>Teams:</strong> ${escapeHtml(data.teams)}</p>`;
            await sendOne({ to: opsEmail, replyTo: data.email, subject, text, html });
            return res.status(200).json({ success: true });
        }

        if (type === 'widget') {
            const subject = `Lead: ${data.role} interested in ${data.interest}`;
            const text = `Name: ${data.name}\nEmail: ${data.email}\nRole: ${data.role}\nInterest: ${data.interest}\nCurrent Setup: ${data.currentState}`;
            const html = `<h2>New Lead from Widget</h2>
<p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
<p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
<p><strong>Role:</strong> ${escapeHtml(data.role)}</p>
<p><strong>Interest:</strong> ${escapeHtml(data.interest)}</p>
<p><strong>Current Setup:</strong> ${escapeHtml(data.currentState)}</p>`;
            await sendOne({ to: opsEmail, replyTo: data.email, subject, text, html });
            return res.status(200).json({ success: true });
        }

        if (type === 'waitlist') {
            const event = data.event || 'shuuk-3x3-jam';
            const eventLabel = (event === 'juuk-3x3-jam' || event === 'shuuk-3x3-jam')
                ? 'shuuk! 3x3 jam · Ottawa · July 11, 2026'
                : event;
            const source = data.source || 'unknown';
            const email = String(data.email || '').trim();
            const teamName = String(data.teamName || '').trim();
            const division = String(data.division || '').trim();
            const contactName = String(data.contactName || '').trim();
            const phone = String(data.phone || '').trim();
            if (!isValidEmail(email)) {
                return res.status(400).json({ error: 'Valid email required' });
            }

            const isTeamSignup = !!(teamName || division || contactName);

            // 1. Notify ops
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

            // 2. Confirm to subscriber
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
  <p style="font-size:16px;line-height:1.55;margin:0 0 18px;">${teamName ? `Thanks — <strong>${escapeHtml(teamName)}</strong> (${escapeHtml(division || 'TBD')}) is on the waitlist.` : `Thanks for joining the waitlist.`} We'll confirm your spot and send registration details as soon as they open.</p>
  <div style="background:white;border:2px solid #0a0a0a;padding:18px 20px;margin:20px 0;">
    <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;font-family:monospace;color:rgba(0,0,0,0.55);">the rundown</p>
    <p style="margin:0;font-size:15px;line-height:1.6;">Saturday, July 11, 2026<br/>2140 Walkley Road, Ottawa, ON K1G 3V3<br/>U12 / U14 / U16 · 12 teams per division<br/>Outdoor 3x3 + midday indoor session<br/>Gates 8:00 AM · Finals 6:30 PM · Awards 7:30 PM</p>
  </div>
  <p style="margin:0 0 6px;font-size:13px;color:rgba(0,0,0,0.65);">Questions? Reply to this email.</p>
  <p style="margin:24px 0 0;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;font-family:monospace;color:rgba(0,0,0,0.45);">— shuuk! · shuuk.ca/jam</p>
</div>
</body></html>`;

            // Ops first; user confirmation must not block ops capture
            await sendOne({ to: opsEmail, replyTo: email, subject: opsSubject, text: opsText, html: opsHtml });
            try {
                await sendOne({ to: email, replyTo: opsEmail, subject: userSubject, text: userText, html: userHtml });
            } catch (err) {
                console.error('User confirmation email failed:', err);
            }
            return res.status(200).json({ success: true });
        }

        return res.status(400).json({ error: 'Invalid form type' });
    } catch (error) {
        console.error('Email error:', error);
        return res.status(500).json({ error: 'Failed to send email' });
    }
}
