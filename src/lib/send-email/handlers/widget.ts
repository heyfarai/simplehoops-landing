import { NextResponse } from 'next/server';
import type { WidgetPayload, SourcePage } from '../types';
import { OPS_EMAIL, escapeHtml, sendOne } from '../transport';

export async function handleWidget(data: WidgetPayload, sourcePage: SourcePage) {
  const prefix = sourcePage === 'teams' ? '[Teams] ' : '';
  const subject = `${prefix}Lead: ${data.role || 'unknown'} interested in ${data.interest || 'unknown'}`;
  const text = `Name: ${data.name}\nEmail: ${data.email}\nRole: ${data.role}\nInterest: ${data.interest}\nCurrent Setup: ${data.currentState}`;
  const html = `<h2>${prefix ? 'New Lead from Teams-page Widget' : 'New Lead from Widget'}</h2>
<p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
<p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
<p><strong>Role:</strong> ${escapeHtml(data.role)}</p>
<p><strong>Interest:</strong> ${escapeHtml(data.interest)}</p>
<p><strong>Current Setup:</strong> ${escapeHtml(data.currentState)}</p>`;

  await sendOne({
    to: OPS_EMAIL,
    replyTo: String(data.email || ''),
    subject,
    text,
    html,
  });
  return NextResponse.json({ success: true });
}
