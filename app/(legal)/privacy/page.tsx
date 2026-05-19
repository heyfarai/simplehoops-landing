import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Shuuk collects, uses, and protects information across our basketball team and league software.',
  alternates: { canonical: '/privacy' },
  openGraph: { url: 'https://shuuk.ca/privacy', title: 'Privacy Policy | Shuuk' },
  twitter: { title: 'Privacy Policy | Shuuk' },
};

export default function PrivacyPage() {
  return (
    <article className="bg-bg-body px-6 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display font-black uppercase text-4xl md:text-6xl leading-[0.95] text-ink mb-4">
          Privacy Policy
        </h1>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60 mb-12">
          Last updated: January 24, 2025
        </p>

        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
          Shuuk develops simple, focused basketball team management software. This privacy policy explains how we collect, use, and protect your information when you use our apps and services.
        </p>

        <h2 className="font-display font-black uppercase text-2xl md:text-3xl text-ink mt-12 mb-4">Who We Are</h2>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
          Shuuk creates team communication and league management software for youth basketball organizations. We build tools that coaches, team managers, and league directors use to organize their teams and leagues without the bloat of traditional sports management platforms.
        </p>

        <h2 className="font-display font-black uppercase text-2xl md:text-3xl text-ink mt-12 mb-4">What Information We Collect</h2>

        <h3 className="font-display font-bold uppercase text-lg md:text-xl text-ink mt-8 mb-3">When You Use Our Apps</h3>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">Depending on which Shuuk app you use, we may collect:</p>
        <ul className="font-body text-base text-ink/80 list-disc pl-6 mb-6 space-y-2">
          <li>Your name and email address (for account creation and authentication)</li>
          <li>Team names and basic team information</li>
          <li>Player names and jersey numbers for rosters</li>
          <li>Game schedules and scores</li>
          <li>Messages and communications within the app</li>
        </ul>

        <h3 className="font-display font-bold uppercase text-lg md:text-xl text-ink mt-8 mb-3">Technical Information</h3>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">To keep our apps running smoothly, we collect:</p>
        <ul className="font-body text-base text-ink/80 list-disc pl-6 mb-6 space-y-2">
          <li>Device information (type, operating system version)</li>
          <li>App usage analytics (which features you use, crash reports)</li>
          <li>Authentication tokens (to keep you logged in securely)</li>
        </ul>

        <h3 className="font-display font-bold uppercase text-lg md:text-xl text-ink mt-8 mb-3">When You Make Purchases</h3>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">If you purchase a subscription or product:</p>
        <ul className="font-body text-base text-ink/80 list-disc pl-6 mb-6 space-y-2">
          <li>Payment information is processed by Apple, Google, or Stripe</li>
          <li>We never see or store your full credit card information</li>
          <li>We receive confirmation of purchase to activate your subscription</li>
        </ul>

        <h2 className="font-display font-black uppercase text-2xl md:text-3xl text-ink mt-12 mb-4">How We Use Your Information</h2>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">We use your information solely to provide our services:</p>
        <ul className="font-body text-base text-ink/80 list-disc pl-6 mb-6 space-y-2">
          <li>Create and manage your account</li>
          <li>Enable team communication and coordination</li>
          <li>Display rosters, schedules, and standings</li>
          <li>Process payments and manage subscriptions</li>
          <li>Send important service notifications (schedule changes, app updates)</li>
          <li>Improve app performance and fix bugs</li>
          <li>Provide customer support</li>
        </ul>

        <div className="border-l-4 border-brand-pink bg-bg-paper px-6 py-5 my-8">
          <h3 className="font-display font-bold uppercase text-lg md:text-xl text-ink mt-8 mb-3">What We Don&apos;t Do</h3>
          <p className="font-body text-base text-ink/80 leading-relaxed mb-5"><strong className="font-bold text-ink">We want to be crystal clear:</strong></p>
          <ul className="font-body text-base text-ink/80 list-disc pl-6 mb-6 space-y-2">
            <li><strong className="font-bold text-ink">We don&apos;t sell your data.</strong> Ever. To anyone.</li>
            <li><strong className="font-bold text-ink">We don&apos;t use advertising networks.</strong> No third-party ad trackers.</li>
            <li><strong className="font-bold text-ink">We don&apos;t track you across the internet.</strong> We only measure in-app usage to improve our products.</li>
            <li><strong className="font-bold text-ink">We don&apos;t send marketing emails.</strong> Only essential service communications.</li>
            <li><strong className="font-bold text-ink">We don&apos;t share your information</strong> except as described in this policy.</li>
          </ul>
        </div>

        <h2 className="font-display font-black uppercase text-2xl md:text-3xl text-ink mt-12 mb-4">Information Sharing</h2>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">We share information only in these specific circumstances:</p>
        <ul className="font-body text-base text-ink/80 list-disc pl-6 mb-6 space-y-2">
          <li><strong className="font-bold text-ink">Within your team/league:</strong> Team information and rosters are visible to other team members and league participants as needed for coordination</li>
          <li><strong className="font-bold text-ink">Service providers:</strong> We use trusted third-party services (detailed below) to operate our apps</li>
          <li><strong className="font-bold text-ink">Legal requirements:</strong> We may disclose information if required by law or to protect our rights</li>
          <li><strong className="font-bold text-ink">With your consent:</strong> We&apos;ll ask before sharing your information for any other reason</li>
        </ul>

        <h2 className="font-display font-black uppercase text-2xl md:text-3xl text-ink mt-12 mb-4">Third-Party Services We Use</h2>

        <div className="border-l-4 border-brand-pink bg-bg-paper px-6 py-5 my-8">
          <h3 className="font-display font-bold uppercase text-lg md:text-xl text-ink mt-8 mb-3">Supabase (Data Storage &amp; Authentication)</h3>
          <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
            We use Supabase to securely store team and player information and handle user authentication. Data is encrypted and stored in secure data centers.
          </p>
        </div>

        <div className="border-l-4 border-brand-pink bg-bg-paper px-6 py-5 my-8">
          <h3 className="font-display font-bold uppercase text-lg md:text-xl text-ink mt-8 mb-3">Stripe (Payment Processing)</h3>
          <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
            Payments are processed by Stripe, a PCI-compliant payment processor. We never see or store your full credit card information.
          </p>
        </div>

        <div className="border-l-4 border-brand-pink bg-bg-paper px-6 py-5 my-8">
          <h3 className="font-display font-bold uppercase text-lg md:text-xl text-ink mt-8 mb-3">Apple &amp; Google (App Distribution &amp; In-App Purchases)</h3>
          <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
            Our mobile apps are distributed through the Apple App Store and Google Play Store. In-app purchases are processed by Apple and Google according to their privacy policies.
          </p>
        </div>

        <div className="border-l-4 border-brand-pink bg-bg-paper px-6 py-5 my-8">
          <h3 className="font-display font-bold uppercase text-lg md:text-xl text-ink mt-8 mb-3">Vercel (Web Hosting &amp; Analytics)</h3>
          <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
            Our websites are hosted on Vercel, which provides basic analytics about page views and performance. This helps us keep the sites running smoothly.
          </p>
        </div>

        <h2 className="font-display font-black uppercase text-2xl md:text-3xl text-ink mt-12 mb-4">Your Rights and Choices</h2>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">You have the right to:</p>
        <ul className="font-body text-base text-ink/80 list-disc pl-6 mb-6 space-y-2">
          <li><strong className="font-bold text-ink">Access your information:</strong> View what data we have about you</li>
          <li><strong className="font-bold text-ink">Correct information:</strong> Update your profile, team, or player details anytime</li>
          <li><strong className="font-bold text-ink">Delete your information:</strong> Request deletion of your account and associated data</li>
          <li><strong className="font-bold text-ink">Export your data:</strong> Request a copy of your information in a portable format</li>
          <li><strong className="font-bold text-ink">Opt out of communications:</strong> Unsubscribe from non-essential emails</li>
        </ul>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
          To exercise these rights, contact us at <a className="text-brand-pink underline hover:no-underline" href="mailto:privacy@shuuk.ca">privacy@shuuk.ca</a> or use the settings within the app.
        </p>

        <h2 className="font-display font-black uppercase text-2xl md:text-3xl text-ink mt-12 mb-4">Information About Minors</h2>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
          We understand that many users of basketball team apps are minors. Here&apos;s what parents and guardians should know:
        </p>
        <ul className="font-body text-base text-ink/80 list-disc pl-6 mb-6 space-y-2">
          <li>We only collect player names and jersey numbers—no direct contact information for minors</li>
          <li>Parents/guardians must approve their child&apos;s participation through the team coach or administrator</li>
          <li>Player information is only used for team coordination (rosters, schedules, standings)</li>
          <li>Parents can request their child&apos;s information be removed by contacting the team admin or us directly</li>
          <li>We comply with COPPA (Children&apos;s Online Privacy Protection Act) requirements</li>
        </ul>

        <h2 className="font-display font-black uppercase text-2xl md:text-3xl text-ink mt-12 mb-4">Data Security</h2>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">We take security seriously and implement industry-standard protections:</p>
        <ul className="font-body text-base text-ink/80 list-disc pl-6 mb-6 space-y-2">
          <li>All data is encrypted in transit (HTTPS/TLS)</li>
          <li>Data at rest is encrypted in secure databases</li>
          <li>Passwords are hashed and never stored in plain text</li>
          <li>Access to personal information is restricted to essential personnel</li>
          <li>We regularly review and update our security practices</li>
        </ul>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
          However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
        </p>

        <h2 className="font-display font-black uppercase text-2xl md:text-3xl text-ink mt-12 mb-4">Data Retention</h2>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
          We retain your information for as long as your account is active or as needed to provide services. If you delete your account, we will delete your personal information within 30 days, except where we&apos;re required to retain it for legal purposes.
        </p>

        <h2 className="font-display font-black uppercase text-2xl md:text-3xl text-ink mt-12 mb-4">International Users</h2>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
          Shuuk is based in the United States. If you use our services from outside the U.S., your information will be transferred to and processed in the United States. By using our services, you consent to this transfer.
        </p>

        <h2 className="font-display font-black uppercase text-2xl md:text-3xl text-ink mt-12 mb-4">Changes to This Policy</h2>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
          We may update this privacy policy from time to time to reflect changes in our practices or for legal reasons. If we make significant changes, we&apos;ll notify you via email or through a notice in the app. The &quot;Last updated&quot; date at the top will always show when the policy was last modified.
        </p>

        <h2 className="font-display font-black uppercase text-2xl md:text-3xl text-ink mt-12 mb-4">Contact Us</h2>
        <div className="border-l-4 border-brand-pink bg-bg-paper px-6 py-5 my-8">
          <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
            If you have questions about this privacy policy or how we handle your information:
          </p>
          <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
            <strong className="font-bold text-ink">Email:</strong> <a className="text-brand-pink underline hover:no-underline" href="mailto:privacy@shuuk.ca">privacy@shuuk.ca</a><br />
            <strong className="font-bold text-ink">Support:</strong> <a className="text-brand-pink underline hover:no-underline" href="/support">Visit our support page</a>
          </p>
        </div>

        <div className="border-l-4 border-brand-pink bg-bg-paper px-6 py-5 my-8">
          <h2 className="font-display font-black uppercase text-2xl md:text-3xl text-ink mt-12 mb-4">Plain English Summary</h2>
          <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
            We collect the minimum information needed to run basketball team apps: your contact info, team names, player names for rosters, and basic usage data. We use this solely to provide our services and make them better. We don&apos;t sell your data, we don&apos;t track you around the internet, and we don&apos;t send spam. We use trusted services (Supabase, Stripe, etc.) to keep your information secure. You can view, correct, or delete your information anytime.
          </p>
        </div>
      </div>
    </article>
  );
}
