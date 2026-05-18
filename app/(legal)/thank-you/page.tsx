import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Thanks — Shuuk',
  description: "We've got your message. We'll be in touch shortly.",
};

export default function ThankYouPage() {
  return (
    <section className="bg-bg-body px-6 py-24 md:py-40">
      <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ink/60">
          Confirmation
        </p>
        <h1 className="font-display font-black uppercase text-5xl md:text-7xl leading-[0.95] text-ink">
          Got you.
        </h1>
        <p className="font-body text-lg text-ink/70 max-w-prose">
          Thanks for reaching out. We&apos;ll be in your inbox within one
          business day. If it&apos;s urgent, email{' '}
          <a href="mailto:hello@shuuk.ca" className="text-brand-pink underline">
            hello@shuuk.ca
          </a>{' '}
          and we&apos;ll bump it.
        </p>
        <Button variant="primary" href="/" className="mt-4">
          Back to home
        </Button>
      </div>
    </section>
  );
}
