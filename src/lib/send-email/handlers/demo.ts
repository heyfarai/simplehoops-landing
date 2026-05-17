import { NextResponse } from 'next/server';
import type { DemoPayload, SourcePage } from '../types';
import { OPS_EMAIL, escapeHtml, sendOne } from '../transport';

export async function handleDemo(data: DemoPayload, sourcePage: SourcePage) {
  const prefix = sourcePage === 'teams' ? '[Teams] ' : '';
  const subject = `${prefix}Demo Request: ${data.league || 'unknown'}`;
  const text = `Name: ${data.name}\nEmail: ${data.email}\nLeague: ${data.league}\nTeams: ${data.teams}`;
  const html = `<h2>${prefix ? 'New Teams-page Demo Request' : 'New Demo Request'}</h2>
<p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
<p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
<p><strong>League:</strong> ${escapeHtml(data.league)}</p>
<p><strong>Teams:</strong> ${escapeHtml(data.teams)}</p>`;

  await sendOne({
    to: OPS_EMAIL,
    replyTo: String(data.email || ''),
    subject,
    text,
    html,
  });
  return NextResponse.json({ success: true });
}
