import type { Metadata } from 'next';
import { Card } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Support',
  description: 'Help, FAQs, and troubleshooting for Shuuk basketball team management software. Contact support@shuuk.ca for direct help.',
  alternates: { canonical: '/support' },
  openGraph: { url: 'https://shuuk.ca/support', title: 'Support | Shuuk' },
  twitter: { title: 'Support | Shuuk' },
};

const FAQS = [
  { q: 'How do I create a team?', a: "After creating your account, tap the \"Create Team\" button in the app. Enter your team name, select your division or league, and start adding players to your roster. You'll become the team administrator automatically." },
  { q: 'How do I add players to my roster?', a: 'Go to your team page and tap "Manage Roster." You can add players by entering their name and jersey number. For league play, your roster may need approval from the league administrator.' },
  { q: 'Can I manage multiple teams?', a: 'Yes! You can create and manage multiple teams from a single account. Simply create additional teams from your dashboard. Each team will have its own roster and settings.' },
  { q: 'How do I invite team members?', a: 'From your team page, tap "Invite Members" and share the team code or link with parents and players. They can join by entering the code in the app or clicking the invitation link.' },
  { q: 'What if I forget my password?', a: "On the login screen, tap \"Forgot Password\" and enter your email address. We'll send you a secure link to reset your password. If you don't receive the email, check your spam folder or contact support." },
  { q: 'How do subscriptions work?', a: 'We offer free basic features and optional paid subscriptions for advanced features. Subscriptions are billed monthly or annually and renew automatically. You can cancel anytime through your account settings or through Apple/Google subscriptions settings.' },
  { q: 'Can I get a refund?', a: 'Refund policies depend on how you subscribed. For subscriptions purchased through the Apple App Store or Google Play Store, refunds are handled by Apple or Google according to their policies. For web subscriptions through Stripe, contact us at support@shuuk.ca within 7 days of purchase.' },
  { q: 'Is my data private and secure?', a: 'Yes. We take data security seriously. All data is encrypted in transit and at rest. We never sell your information to third parties. Read our Privacy Policy for complete details.' },
  { q: 'How do I delete my account?', a: 'To delete your account, go to Settings > Account > Delete Account. This will permanently remove your account and all associated data within 30 days. You can also email privacy@shuuk.ca to request account deletion.' },
  { q: 'Can I export my team data?', a: 'Yes. You can export your team rosters, schedules, and game data from your team settings page. Click "Export Data" and choose your preferred format (CSV or PDF).' },
  { q: "The app isn't working properly. What should I do?", a: 'First, try these basic troubleshooting steps: Close the app completely and reopen it; Check that you have the latest version from the App Store or Google Play; Restart your device; Check your internet connection. If the problem persists, email bugs@shuuk.ca with details about the issue, including your device type and what you were doing when the problem occurred.' },
  { q: 'Do you support leagues and tournaments?', a: "Yes! Shuuk includes features for league administrators to manage multiple teams, schedules, standings, and games. Contact us at support@shuuk.ca if you're interested in using Shuuk for your league or tournament." },
  { q: 'What platforms do you support?', a: 'Shuuk is available on: iOS (iPhone and iPad) - iOS 15.0 and later; Android - Android 8.0 and later; Web browsers (desktop and mobile).' },
];

const FAQ_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function SupportPage() {
  return (
    <article className="bg-bg-body px-6 py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }}
      />
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display font-black uppercase text-4xl md:text-6xl leading-[0.95] text-ink mb-4">
          Support
        </h1>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60 mb-12">
          We&apos;re here to help. Get answers to common questions or reach out to our support team.
        </p>

        <div className="border-l-4 border-brand-pink bg-bg-paper px-6 py-5 my-8">
          <h3 className="font-display font-bold uppercase text-lg md:text-xl text-ink mt-8 mb-3">Response Times</h3>
          <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
            We aim to respond to all support inquiries within 24-48 hours during business days. For urgent issues affecting app functionality, we prioritize responses within 12 hours.
          </p>
        </div>

        <h2 className="font-display font-black uppercase text-2xl md:text-3xl text-ink mt-12 mb-4">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
          <Card variant="bold-filled" className="p-6 text-center">
            <h3 className="font-display font-bold uppercase text-lg mb-3">Email Support</h3>
            <p className="font-body text-sm text-ink/80 mb-3">For general questions, technical issues, or account help.</p>
            <a className="text-brand-pink underline" href="mailto:support@shuuk.ca">support@shuuk.ca</a>
          </Card>

          <Card variant="bold-filled" className="p-6 text-center">
            <h3 className="font-display font-bold uppercase text-lg mb-3">Privacy &amp; Data</h3>
            <p className="font-body text-sm text-ink/80 mb-3">Questions about privacy, data deletion, or account information.</p>
            <a className="text-brand-pink underline" href="mailto:privacy@shuuk.ca">privacy@shuuk.ca</a>
          </Card>

          <Card variant="bold-filled" className="p-6 text-center">
            <h3 className="font-display font-bold uppercase text-lg mb-3">Bug Reports</h3>
            <p className="font-body text-sm text-ink/80 mb-3">Found a bug or experiencing technical difficulties?</p>
            <a className="text-brand-pink underline" href="mailto:bugs@shuuk.ca">bugs@shuuk.ca</a>
          </Card>
        </div>

        <h2 className="font-display font-black uppercase text-2xl md:text-3xl text-ink mt-12 mb-4">Frequently Asked Questions</h2>

        <Card variant="bold-filled" className="p-6 mb-4">
          <h3 className="font-display font-bold uppercase text-lg text-ink mb-3">How do I create a team?</h3>
          <p className="font-body text-base text-ink/80 leading-relaxed">
            After creating your account, tap the &quot;Create Team&quot; button in the app. Enter your team name, select your division or league, and start adding players to your roster. You&apos;ll become the team administrator automatically.
          </p>
        </Card>

        <Card variant="bold-filled" className="p-6 mb-4">
          <h3 className="font-display font-bold uppercase text-lg text-ink mb-3">How do I add players to my roster?</h3>
          <p className="font-body text-base text-ink/80 leading-relaxed">
            Go to your team page and tap &quot;Manage Roster.&quot; You can add players by entering their name and jersey number. For league play, your roster may need approval from the league administrator.
          </p>
        </Card>

        <Card variant="bold-filled" className="p-6 mb-4">
          <h3 className="font-display font-bold uppercase text-lg text-ink mb-3">Can I manage multiple teams?</h3>
          <p className="font-body text-base text-ink/80 leading-relaxed">
            Yes! You can create and manage multiple teams from a single account. Simply create additional teams from your dashboard. Each team will have its own roster and settings.
          </p>
        </Card>

        <Card variant="bold-filled" className="p-6 mb-4">
          <h3 className="font-display font-bold uppercase text-lg text-ink mb-3">How do I invite team members?</h3>
          <p className="font-body text-base text-ink/80 leading-relaxed">
            From your team page, tap &quot;Invite Members&quot; and share the team code or link with parents and players. They can join by entering the code in the app or clicking the invitation link.
          </p>
        </Card>

        <Card variant="bold-filled" className="p-6 mb-4">
          <h3 className="font-display font-bold uppercase text-lg text-ink mb-3">What if I forget my password?</h3>
          <p className="font-body text-base text-ink/80 leading-relaxed">
            On the login screen, tap &quot;Forgot Password&quot; and enter your email address. We&apos;ll send you a secure link to reset your password. If you don&apos;t receive the email, check your spam folder or contact support.
          </p>
        </Card>

        <Card variant="bold-filled" className="p-6 mb-4">
          <h3 className="font-display font-bold uppercase text-lg text-ink mb-3">How do subscriptions work?</h3>
          <p className="font-body text-base text-ink/80 leading-relaxed">
            We offer free basic features and optional paid subscriptions for advanced features. Subscriptions are billed monthly or annually and renew automatically. You can cancel anytime through your account settings or through Apple/Google subscriptions settings.
          </p>
        </Card>

        <Card variant="bold-filled" className="p-6 mb-4">
          <h3 className="font-display font-bold uppercase text-lg text-ink mb-3">Can I get a refund?</h3>
          <p className="font-body text-base text-ink/80 leading-relaxed">
            Refund policies depend on how you subscribed. For subscriptions purchased through the Apple App Store or Google Play Store, refunds are handled by Apple or Google according to their policies. For web subscriptions through Stripe, contact us at <a className="text-brand-pink underline hover:no-underline" href="mailto:support@shuuk.ca">support@shuuk.ca</a> within 7 days of purchase.
          </p>
        </Card>

        <Card variant="bold-filled" className="p-6 mb-4">
          <h3 className="font-display font-bold uppercase text-lg text-ink mb-3">Is my data private and secure?</h3>
          <p className="font-body text-base text-ink/80 leading-relaxed">
            Yes. We take data security seriously. All data is encrypted in transit and at rest. We never sell your information to third parties. Read our <a className="text-brand-pink underline hover:no-underline" href="/privacy">Privacy Policy</a> for complete details.
          </p>
        </Card>

        <Card variant="bold-filled" className="p-6 mb-4">
          <h3 className="font-display font-bold uppercase text-lg text-ink mb-3">How do I delete my account?</h3>
          <p className="font-body text-base text-ink/80 leading-relaxed">
            To delete your account, go to Settings &gt; Account &gt; Delete Account. This will permanently remove your account and all associated data within 30 days. You can also email <a className="text-brand-pink underline hover:no-underline" href="mailto:privacy@shuuk.ca">privacy@shuuk.ca</a> to request account deletion.
          </p>
        </Card>

        <Card variant="bold-filled" className="p-6 mb-4">
          <h3 className="font-display font-bold uppercase text-lg text-ink mb-3">Can I export my team data?</h3>
          <p className="font-body text-base text-ink/80 leading-relaxed">
            Yes. You can export your team rosters, schedules, and game data from your team settings page. Click &quot;Export Data&quot; and choose your preferred format (CSV or PDF).
          </p>
        </Card>

        <Card variant="bold-filled" className="p-6 mb-4">
          <h3 className="font-display font-bold uppercase text-lg text-ink mb-3">The app isn&apos;t working properly. What should I do?</h3>
          <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
            First, try these basic troubleshooting steps:
          </p>
          <ul className="font-body text-base text-ink/80 list-disc pl-6 mb-6 space-y-2">
            <li>Close the app completely and reopen it</li>
            <li>Check that you have the latest version from the App Store or Google Play</li>
            <li>Restart your device</li>
            <li>Check your internet connection</li>
          </ul>
          <p className="font-body text-base text-ink/80 leading-relaxed">
            If the problem persists, email <a className="text-brand-pink underline hover:no-underline" href="mailto:bugs@shuuk.ca">bugs@shuuk.ca</a> with details about the issue, including your device type and what you were doing when the problem occurred.
          </p>
        </Card>

        <Card variant="bold-filled" className="p-6 mb-4">
          <h3 className="font-display font-bold uppercase text-lg text-ink mb-3">Do you support leagues and tournaments?</h3>
          <p className="font-body text-base text-ink/80 leading-relaxed">
            Yes! Shuuk includes features for league administrators to manage multiple teams, schedules, standings, and games. Contact us at <a className="text-brand-pink underline hover:no-underline" href="mailto:support@shuuk.ca">support@shuuk.ca</a> if you&apos;re interested in using Shuuk for your league or tournament.
          </p>
        </Card>

        <Card variant="bold-filled" className="p-6 mb-4">
          <h3 className="font-display font-bold uppercase text-lg text-ink mb-3">What platforms do you support?</h3>
          <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
            Shuuk is available on:
          </p>
          <ul className="font-body text-base text-ink/80 list-disc pl-6 mb-6 space-y-2">
            <li>iOS (iPhone and iPad) - iOS 15.0 and later</li>
            <li>Android - Android 8.0 and later</li>
            <li>Web browsers (desktop and mobile)</li>
          </ul>
        </Card>

        <h2 className="font-display font-black uppercase text-2xl md:text-3xl text-ink mt-12 mb-4">Feature Requests</h2>
        <div className="border-l-4 border-brand-pink bg-bg-paper px-6 py-5 my-8">
          <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
            <strong className="font-bold text-ink">Have an idea for a new feature?</strong> We&apos;d love to hear it! Email your suggestions to <a className="text-brand-pink underline hover:no-underline" href="mailto:feedback@shuuk.ca">feedback@shuuk.ca</a>. We review all feature requests and prioritize based on user needs.
          </p>
        </div>

        <h2 className="font-display font-black uppercase text-2xl md:text-3xl text-ink mt-12 mb-4">Report Abuse or Safety Concerns</h2>
        <Card variant="bold-filled" className="p-6 mb-4">
          <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
            Shuuk is designed for youth sports, and we take safety seriously. If you encounter inappropriate behavior, content, or have safety concerns, please report it immediately:
          </p>
          <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
            <strong className="font-bold text-ink">Email:</strong> <a className="text-brand-pink underline hover:no-underline" href="mailto:abuse@shuuk.ca">abuse@shuuk.ca</a>
          </p>
          <p className="font-body text-base text-ink/80 leading-relaxed">
            We investigate all reports promptly and take appropriate action, including account suspension or termination and reporting to authorities when necessary.
          </p>
        </Card>

        <h2 className="font-display font-black uppercase text-2xl md:text-3xl text-ink mt-12 mb-4">Additional Resources</h2>
        <ul className="font-body text-base text-ink/80 list-disc pl-6 mb-6 space-y-2">
          <li><a className="text-brand-pink underline hover:no-underline" href="/privacy">Privacy Policy</a> - How we handle your information</li>
          <li><a className="text-brand-pink underline hover:no-underline" href="/terms">Terms of Service</a> - Rules for using Shuuk</li>
          <li><a className="text-brand-pink underline hover:no-underline" href="/">Home</a> - Learn more about Shuuk</li>
        </ul>

        <div className="border-l-4 border-brand-pink bg-bg-paper px-6 py-5 my-8">
          <h3 className="font-display font-bold uppercase text-lg md:text-xl text-ink mt-8 mb-3">Still Need Help?</h3>
          <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
            Can&apos;t find what you&apos;re looking for? Send us an email at <a className="text-brand-pink underline hover:no-underline" href="mailto:support@shuuk.ca">support@shuuk.ca</a> and we&apos;ll get back to you as soon as possible. Please include as much detail as you can about your question or issue.
          </p>
        </div>
      </div>
    </article>
  );
}
