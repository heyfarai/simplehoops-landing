import { test, expect } from '@playwright/test';

const TYPES = [
  {
    type: 'demo',
    payload: { name: 'x', email: 'x@example.com', league: 'X', teams: '5' },
  },
  {
    type: 'demo-teams',
    payload: { name: 'x', email: 'x@example.com', league: 'X', teams: '5' },
  },
  {
    type: 'widget',
    payload: {
      role: 'commish',
      interest: 'streaming',
      currentState: 'none',
      name: 'x',
      email: 'x@example.com',
    },
  },
  {
    type: 'widget-teams',
    payload: {
      role: 'coach',
      interest: 'web',
      currentState: 'paper',
      name: 'x',
      email: 'x@example.com',
    },
  },
  {
    type: 'waitlist',
    payload: {
      event: 'shuuk-3x3-jam',
      source: 'test',
      email: 'x@example.com',
      teamName: 'T',
      division: 'U14',
      contactName: 'C',
    },
  },
];

for (const { type, payload } of TYPES) {
  test(`POST /api/send-email type=${type} returns 200`, async ({ request }) => {
    const res = await request.post('/api/send-email', {
      data: { type, ...payload },
      headers: { 'Content-Type': 'application/json' },
    });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.success).toBe(true);
  });
}

test('POST /api/send-email with unknown type returns 400', async ({ request }) => {
  const res = await request.post('/api/send-email', {
    data: { type: 'nonsense' },
    headers: { 'Content-Type': 'application/json' },
  });
  expect(res.status()).toBe(400);
});

test('POST /api/send-email waitlist with invalid email returns 400', async ({ request }) => {
  const res = await request.post('/api/send-email', {
    data: { type: 'waitlist', email: 'not-an-email' },
    headers: { 'Content-Type': 'application/json' },
  });
  expect(res.status()).toBe(400);
});
