import type { Metadata } from 'next';
import { Card } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Delete Your Account',
  description:
    'How to permanently delete your Shuuk account and what data is removed. Delete in the app from Profile, or request deletion at privacy@shuuk.ca.',
  alternates: { canonical: '/account/delete' },
  openGraph: { url: 'https://shuuk.ca/account/delete', title: 'Delete Your Account | Shuuk' },
  twitter: { title: 'Delete Your Account | Shuuk' },
};

export default function DeleteAccountPage() {
  return (
    <article className="bg-bg-body px-6 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display font-black uppercase text-4xl md:text-6xl leading-[0.95] text-ink mb-4">
          Delete your account
        </h1>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60 mb-12">
          Permanently remove your shuuk! account and personal information.
        </p>

        <h2 className="font-display font-black uppercase text-2xl md:text-3xl text-ink mt-12 mb-4">
          Delete in the app
        </h2>
        <Card variant="bold-filled" className="p-6 mb-4">
          <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
            The fastest way to delete your account is from inside the shuuk! app:
          </p>
          <ol className="font-body text-base text-ink/80 list-decimal pl-6 mb-6 space-y-2">
            <li>Open shuuk! and sign in.</li>
            <li>Tap the <strong className="font-bold text-ink">Profile</strong> tab.</li>
            <li>Tap <strong className="font-bold text-ink">Delete account</strong> at the bottom of the screen.</li>
            <li>Confirm. Your account is deleted immediately.</li>
          </ol>
          <p className="font-body text-base text-ink/80 leading-relaxed">
            This action is permanent and cannot be undone.
          </p>
        </Card>

        <h2 className="font-display font-black uppercase text-2xl md:text-3xl text-ink mt-12 mb-4">
          No longer have the app?
        </h2>
        <Card variant="bold-filled" className="p-6 mb-4">
          <p className="font-body text-base text-ink/80 leading-relaxed">
            Email{' '}
            <a className="text-brand-pink underline hover:no-underline" href="mailto:privacy@shuuk.ca?subject=Account%20deletion%20request">
              privacy@shuuk.ca
            </a>{' '}
            from the email address you used to sign in, with the subject &quot;Account deletion
            request.&quot; We verify the request and delete your account within 30 days, then email
            you to confirm.
          </p>
        </Card>

        <h2 className="font-display font-black uppercase text-2xl md:text-3xl text-ink mt-12 mb-4">
          What gets deleted
        </h2>
        <Card variant="bold-filled" className="p-6 mb-4">
          <ul className="font-body text-base text-ink/80 list-disc pl-6 space-y-2">
            <li>Your sign-in (you will no longer be able to log in) — removed permanently and immediately.</li>
            <li>Your personal information: name, email address, and profile photo.</li>
          </ul>
        </Card>

        <h2 className="font-display font-black uppercase text-2xl md:text-3xl text-ink mt-12 mb-4">
          What is kept
        </h2>
        <Card variant="bold-filled" className="p-6 mb-4">
          <p className="font-body text-base text-ink/80 leading-relaxed">
            To keep team rosters and game history intact for the leagues and teams you played in,
            those records may remain after deletion &mdash; but they are{' '}
            <strong className="font-bold text-ink">anonymized and no longer linked to you</strong>{' '}
            once your account is removed. We never sell your information to third parties.
          </p>
        </Card>

        <div className="border-l-4 border-brand-pink bg-bg-paper px-6 py-5 my-8">
          <h3 className="font-display font-bold uppercase text-lg md:text-xl text-ink mt-8 mb-3">
            Questions?
          </h3>
          <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
            Email{' '}
            <a className="text-brand-pink underline hover:no-underline" href="mailto:privacy@shuuk.ca">
              privacy@shuuk.ca
            </a>
            . See our{' '}
            <a className="text-brand-pink underline hover:no-underline" href="/privacy">
              Privacy Policy
            </a>{' '}
            for how we handle your data.
          </p>
        </div>
      </div>
    </article>
  );
}
