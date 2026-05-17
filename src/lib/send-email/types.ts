export type SourcePage = 'main' | 'teams';

export interface DemoPayload {
  name?: string;
  email?: string;
  league?: string;
  teams?: string;
}

export interface WidgetPayload {
  name?: string;
  email?: string;
  role?: string;
  interest?: string;
  currentState?: string;
}

export interface WaitlistPayload {
  event?: string;
  source?: string;
  email?: string;
  teamName?: string;
  division?: string;
  contactName?: string;
  phone?: string;
}

export type FormPayload =
  | ({ type: 'demo' } & DemoPayload)
  | ({ type: 'demo-teams' } & DemoPayload)
  | ({ type: 'widget' } & WidgetPayload)
  | ({ type: 'widget-teams' } & WidgetPayload)
  | ({ type: 'waitlist' } & WaitlistPayload);
