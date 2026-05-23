import { NextResponse } from 'next/server';
import type { FormPayload } from '@/lib/send-email/types';
import { handleDemo } from '@/lib/send-email/handlers/demo';
import { handleWidget } from '@/lib/send-email/handlers/widget';
import { handleWaitlist } from '@/lib/send-email/handlers/waitlist';
import { verifyTurnstileToken } from '@/lib/turnstile';

export async function POST(req: Request) {
  let body: Partial<FormPayload> & {
    type?: string;
    turnstileToken?: string;
    hp?: string;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field. Fake success so bots
  // don't iterate on the rejection.
  if (body.hp && body.hp.trim() !== '') {
    return NextResponse.json({ success: true });
  }

  const ip =
    req.headers.get('cf-connecting-ip') ||
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    undefined;

  const verified = await verifyTurnstileToken(body.turnstileToken, ip);
  if (!verified) {
    return NextResponse.json(
      { error: 'Verification failed. Please retry.' },
      { status: 403 },
    );
  }

  const { type, turnstileToken: _t, hp: _h, ...data } = body;
  void _t;
  void _h;

  try {
    switch (type) {
      case 'demo':
        return await handleDemo(data, 'main');
      case 'demo-teams':
        return await handleDemo(data, 'teams');
      case 'widget':
        return await handleWidget(data, 'main');
      case 'widget-teams':
        return await handleWidget(data, 'teams');
      case 'waitlist':
        return await handleWaitlist(data);
      default:
        return NextResponse.json({ error: 'Invalid form type' }, { status: 400 });
    }
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
