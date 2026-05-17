import nodemailer from 'nodemailer';

const FROM_EMAIL =
  process.env.POSTMARK_FROM_EMAIL ||
  process.env.EMAIL_FROM ||
  'do-not-reply@shuuk.ca';

export const OPS_EMAIL = process.env.OPS_EMAIL || 'farai@shuuk.ca';

export function escapeHtml(s: unknown): string {
  return String(s ?? '').replace(/[&<>"']/g, (c) => {
    const map: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return map[c] ?? c;
  });
}

export function isValidEmail(e: unknown): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(e ?? '').trim());
}

interface SendOneArgs {
  to: string;
  replyTo: string;
  subject: string;
  text: string;
  html: string;
}

export async function sendOne({ to, replyTo, subject, text, html }: SendOneArgs): Promise<void> {
  if (process.env.USE_MAILPIT === 'true') {
    const transporter = nodemailer.createTransport({
      host: process.env.MAILPIT_SMTP_HOST,
      port: parseInt(process.env.MAILPIT_SMTP_PORT || '1025', 10),
      secure: false,
    });
    await transporter.sendMail({ from: FROM_EMAIL, to, replyTo, subject, text, html });
    return;
  }

  const response = await fetch('https://api.postmarkapp.com/email', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Postmark-Server-Token': process.env.POSTMARK_API_TOKEN || '',
    },
    body: JSON.stringify({
      From: FROM_EMAIL,
      To: to,
      ReplyTo: replyTo,
      Subject: subject,
      TextBody: text,
      HtmlBody: html,
    }),
  });
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    console.error('Postmark error:', error);
    throw new Error('Failed to send email');
  }
}
