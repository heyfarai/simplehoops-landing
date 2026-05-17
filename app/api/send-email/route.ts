import { NextResponse } from 'next/server';
import type { FormPayload } from '@/lib/send-email/types';
import { handleDemo } from '@/lib/send-email/handlers/demo';
import { handleWidget } from '@/lib/send-email/handlers/widget';
import { handleWaitlist } from '@/lib/send-email/handlers/waitlist';

export async function POST(req: Request) {
  let body: Partial<FormPayload> & { type?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { type, ...data } = body;

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
