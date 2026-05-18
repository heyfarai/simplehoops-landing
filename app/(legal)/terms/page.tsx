import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Shuuk',
  description: 'Terms of service for Shuuk basketball team management software.',
};

export default function TermsPage() {
  return (
    <article className="bg-bg-body px-6 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display font-black uppercase text-4xl md:text-6xl leading-[0.95] text-ink mb-4">
          Terms of Service
        </h1>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60 mb-12">
          Last updated: January 24, 2025
        </p>

        <div className="border-l-4 border-brand-pink bg-bg-paper px-6 py-5 my-8">
          <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
            <strong className="font-bold text-ink">Welcome to Shuuk.</strong> These terms govern your use of our apps and services. By using Shuuk, you agree to these terms. If you don&apos;t agree, please don&apos;t use our services.
          </p>
        </div>

        <h2 className="font-display font-black uppercase text-2xl md:text-3xl text-ink mt-12 mb-4">1. Acceptance of Terms</h2>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
          By accessing or using any Shuuk application, website, or service (collectively, &quot;Services&quot;), you agree to be bound by these Terms of Service and our Privacy Policy. If you&apos;re using our Services on behalf of an organization, you agree to these terms on behalf of that organization.
        </p>

        <h2 className="font-display font-black uppercase text-2xl md:text-3xl text-ink mt-12 mb-4">2. Description of Services</h2>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
          Shuuk provides basketball team management and communication software, including:
        </p>
        <ul className="font-body text-base text-ink/80 list-disc pl-6 mb-6 space-y-2">
          <li>Team communication tools</li>
          <li>Roster management</li>
          <li>Game scheduling and tracking</li>
          <li>League management features</li>
          <li>Player and team statistics</li>
        </ul>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
          We reserve the right to modify, suspend, or discontinue any part of our Services at any time with reasonable notice.
        </p>

        <h2 className="font-display font-black uppercase text-2xl md:text-3xl text-ink mt-12 mb-4">3. Account Registration and Responsibilities</h2>

        <h3 className="font-display font-bold uppercase text-lg md:text-xl text-ink mt-8 mb-3">Creating an Account</h3>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
          To use our Services, you may need to create an account. You agree to:
        </p>
        <ul className="font-body text-base text-ink/80 list-disc pl-6 mb-6 space-y-2">
          <li>Provide accurate, current, and complete information</li>
          <li>Maintain and update your account information</li>
          <li>Keep your password secure and confidential</li>
          <li>Notify us immediately of any unauthorized access</li>
          <li>Be responsible for all activity under your account</li>
        </ul>

        <h3 className="font-display font-bold uppercase text-lg md:text-xl text-ink mt-8 mb-3">Age Requirements</h3>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
          You must be at least 13 years old to create an account. If you&apos;re under 18, you represent that you have your parent or guardian&apos;s permission to use our Services. Parents and guardians are responsible for their minor children&apos;s use of our Services.
        </p>

        <h2 className="font-display font-black uppercase text-2xl md:text-3xl text-ink mt-12 mb-4">4. Acceptable Use</h2>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
          When using Shuuk, you agree NOT to:
        </p>
        <ul className="font-body text-base text-ink/80 list-disc pl-6 mb-6 space-y-2">
          <li>Violate any laws or regulations</li>
          <li>Infringe on intellectual property rights</li>
          <li>Post or share inappropriate, offensive, or harmful content</li>
          <li>Harass, bully, or threaten other users</li>
          <li>Share false or misleading information</li>
          <li>Impersonate another person or organization</li>
          <li>Attempt to hack, disrupt, or compromise our Services</li>
          <li>Use automated systems to access our Services without permission</li>
          <li>Collect or harvest user data without consent</li>
          <li>Use our Services for commercial purposes without authorization</li>
        </ul>

        <div className="border-l-4 border-brand-pink bg-bg-paper px-6 py-5 my-8">
          <h3 className="font-display font-bold uppercase text-lg md:text-xl text-ink mt-8 mb-3">Zero Tolerance for Abuse</h3>
          <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
            Shuuk is designed for youth sports. We have zero tolerance for any behavior that endangers children, including predatory behavior, bullying, or inappropriate content. Violations will result in immediate account termination and reporting to authorities where appropriate.
          </p>
        </div>

        <h2 className="font-display font-black uppercase text-2xl md:text-3xl text-ink mt-12 mb-4">5. Subscriptions and Payments</h2>

        <h3 className="font-display font-bold uppercase text-lg md:text-xl text-ink mt-8 mb-3">Pricing</h3>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
          Some features of our Services may require a paid subscription. Subscription prices will be clearly displayed before purchase. We reserve the right to change prices with 30 days&apos; notice to existing subscribers.
        </p>

        <h3 className="font-display font-bold uppercase text-lg md:text-xl text-ink mt-8 mb-3">Billing</h3>
        <ul className="font-body text-base text-ink/80 list-disc pl-6 mb-6 space-y-2">
          <li>Subscriptions renew automatically unless cancelled</li>
          <li>You&apos;ll be charged at the beginning of each billing period</li>
          <li>Payment methods are processed by Apple, Google, or Stripe</li>
          <li>You&apos;re responsible for all charges incurred under your account</li>
        </ul>

        <h3 className="font-display font-bold uppercase text-lg md:text-xl text-ink mt-8 mb-3">Cancellation and Refunds</h3>
        <ul className="font-body text-base text-ink/80 list-disc pl-6 mb-6 space-y-2">
          <li>You can cancel your subscription anytime through your account settings</li>
          <li>Cancellation takes effect at the end of the current billing period</li>
          <li>No refunds for partial periods or unused features</li>
          <li>For subscriptions through Apple or Google, refund policies are governed by their terms</li>
        </ul>

        <h3 className="font-display font-bold uppercase text-lg md:text-xl text-ink mt-8 mb-3">Free Trials</h3>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
          We may offer free trials for certain features. If you don&apos;t cancel before the trial ends, you&apos;ll be charged for the subscription. Trial terms will be clearly stated when you sign up.
        </p>

        <h2 className="font-display font-black uppercase text-2xl md:text-3xl text-ink mt-12 mb-4">6. User Content</h2>

        <h3 className="font-display font-bold uppercase text-lg md:text-xl text-ink mt-8 mb-3">Your Content</h3>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
          You retain ownership of any content you post, upload, or share through our Services (team names, player information, messages, etc.). By posting content, you grant Shuuk a license to use, store, and display that content solely to provide our Services.
        </p>

        <h3 className="font-display font-bold uppercase text-lg md:text-xl text-ink mt-8 mb-3">Content Responsibilities</h3>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
          You&apos;re responsible for the content you post. You represent that:
        </p>
        <ul className="font-body text-base text-ink/80 list-disc pl-6 mb-6 space-y-2">
          <li>You have the right to post the content</li>
          <li>The content doesn&apos;t violate any laws or these terms</li>
          <li>For player information, you have appropriate consent from parents/guardians</li>
        </ul>

        <h3 className="font-display font-bold uppercase text-lg md:text-xl text-ink mt-8 mb-3">Content Removal</h3>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
          We reserve the right to remove any content that violates these terms or is otherwise objectionable, without notice.
        </p>

        <h2 className="font-display font-black uppercase text-2xl md:text-3xl text-ink mt-12 mb-4">7. Intellectual Property</h2>

        <h3 className="font-display font-bold uppercase text-lg md:text-xl text-ink mt-8 mb-3">Our Rights</h3>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
          The Shuuk Services, including all software, designs, trademarks, and content (excluding user content), are owned by Shuuk and protected by copyright, trademark, and other intellectual property laws.
        </p>

        <h3 className="font-display font-bold uppercase text-lg md:text-xl text-ink mt-8 mb-3">License to Use</h3>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
          We grant you a limited, non-exclusive, non-transferable license to use our Services for their intended purpose. You may not copy, modify, distribute, sell, or reverse engineer any part of our Services.
        </p>

        <h2 className="font-display font-black uppercase text-2xl md:text-3xl text-ink mt-12 mb-4">8. Privacy and Data</h2>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
          Your privacy is important to us. Our <a className="text-brand-pink underline hover:no-underline" href="/privacy">Privacy Policy</a> explains how we collect, use, and protect your information. By using our Services, you also agree to our Privacy Policy.
        </p>

        <h2 className="font-display font-black uppercase text-2xl md:text-3xl text-ink mt-12 mb-4">9. Third-Party Services</h2>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
          Our Services may integrate with or link to third-party services (Apple, Google, Stripe, etc.). Your use of those services is governed by their terms and privacy policies. We&apos;re not responsible for third-party services.
        </p>

        <h2 className="font-display font-black uppercase text-2xl md:text-3xl text-ink mt-12 mb-4">10. Termination</h2>

        <h3 className="font-display font-bold uppercase text-lg md:text-xl text-ink mt-8 mb-3">By You</h3>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
          You can stop using our Services and delete your account anytime.
        </p>

        <h3 className="font-display font-bold uppercase text-lg md:text-xl text-ink mt-8 mb-3">By Us</h3>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
          We may suspend or terminate your access to our Services if:
        </p>
        <ul className="font-body text-base text-ink/80 list-disc pl-6 mb-6 space-y-2">
          <li>You violate these terms</li>
          <li>Your account remains inactive for an extended period</li>
          <li>We&apos;re required to do so by law</li>
          <li>Continuing to provide Services would create legal liability</li>
        </ul>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
          We&apos;ll provide reasonable notice before termination unless immediate action is required for safety, security, or legal reasons.
        </p>

        <h2 className="font-display font-black uppercase text-2xl md:text-3xl text-ink mt-12 mb-4">11. Disclaimers</h2>

        <div className="border-l-4 border-brand-pink bg-bg-paper px-6 py-5 my-8">
          <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
            <strong className="font-bold text-ink">IMPORTANT:</strong> Our Services are provided &quot;as is&quot; without warranties of any kind, either express or implied. We don&apos;t warrant that our Services will be uninterrupted, error-free, or completely secure.
          </p>
        </div>

        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
          Specifically, we disclaim all warranties including:
        </p>
        <ul className="font-body text-base text-ink/80 list-disc pl-6 mb-6 space-y-2">
          <li>Merchantability</li>
          <li>Fitness for a particular purpose</li>
          <li>Non-infringement</li>
          <li>Accuracy or reliability of content</li>
        </ul>

        <h2 className="font-display font-black uppercase text-2xl md:text-3xl text-ink mt-12 mb-4">12. Limitation of Liability</h2>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
          To the maximum extent permitted by law, Shuuk and its affiliates, officers, employees, and agents will not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill.
        </p>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
          Our total liability to you for any claims arising from your use of our Services is limited to the amount you paid us in the 12 months before the claim arose, or $100, whichever is greater.
        </p>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
          Some jurisdictions don&apos;t allow these limitations, so they may not apply to you.
        </p>

        <h2 className="font-display font-black uppercase text-2xl md:text-3xl text-ink mt-12 mb-4">13. Indemnification</h2>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
          You agree to indemnify and hold harmless Shuuk from any claims, losses, damages, liabilities, and expenses (including legal fees) arising from:
        </p>
        <ul className="font-body text-base text-ink/80 list-disc pl-6 mb-6 space-y-2">
          <li>Your use of our Services</li>
          <li>Your violation of these terms</li>
          <li>Your violation of any rights of another party</li>
          <li>Content you post or share through our Services</li>
        </ul>

        <h2 className="font-display font-black uppercase text-2xl md:text-3xl text-ink mt-12 mb-4">14. Dispute Resolution</h2>

        <h3 className="font-display font-bold uppercase text-lg md:text-xl text-ink mt-8 mb-3">Governing Law</h3>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
          These terms are governed by the laws of the United States and the state where Shuuk is registered, without regard to conflict of law principles.
        </p>

        <h3 className="font-display font-bold uppercase text-lg md:text-xl text-ink mt-8 mb-3">Informal Resolution</h3>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
          If you have a dispute with us, please contact us first at <a className="text-brand-pink underline hover:no-underline" href="mailto:support@shuuk.ca">support@shuuk.ca</a> so we can try to resolve it informally.
        </p>

        <h3 className="font-display font-bold uppercase text-lg md:text-xl text-ink mt-8 mb-3">Arbitration</h3>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
          If we can&apos;t resolve a dispute informally, you agree that any claims will be resolved through binding arbitration, except where prohibited by law. You waive your right to a jury trial or to participate in a class action.
        </p>

        <h2 className="font-display font-black uppercase text-2xl md:text-3xl text-ink mt-12 mb-4">15. Changes to These Terms</h2>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
          We may update these terms from time to time. If we make material changes, we&apos;ll notify you by email or through a notice in our app at least 30 days before the changes take effect.
        </p>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
          Your continued use of our Services after changes take effect means you accept the new terms. If you don&apos;t agree to the changes, you should stop using our Services.
        </p>

        <h2 className="font-display font-black uppercase text-2xl md:text-3xl text-ink mt-12 mb-4">16. General Provisions</h2>

        <h3 className="font-display font-bold uppercase text-lg md:text-xl text-ink mt-8 mb-3">Entire Agreement</h3>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
          These terms, together with our Privacy Policy, constitute the entire agreement between you and Shuuk regarding our Services.
        </p>

        <h3 className="font-display font-bold uppercase text-lg md:text-xl text-ink mt-8 mb-3">Severability</h3>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
          If any provision of these terms is found to be unenforceable, the remaining provisions will remain in full effect.
        </p>

        <h3 className="font-display font-bold uppercase text-lg md:text-xl text-ink mt-8 mb-3">No Waiver</h3>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
          Our failure to enforce any provision of these terms doesn&apos;t waive our right to enforce it later.
        </p>

        <h3 className="font-display font-bold uppercase text-lg md:text-xl text-ink mt-8 mb-3">Assignment</h3>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
          You may not assign or transfer these terms or your account without our written consent. We may assign these terms without restriction.
        </p>

        <h2 className="font-display font-black uppercase text-2xl md:text-3xl text-ink mt-12 mb-4">17. Contact Information</h2>
        <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
          If you have questions about these terms, please contact us:
        </p>
        <ul className="font-body text-base text-ink/80 list-disc pl-6 mb-6 space-y-2">
          <li><strong className="font-bold text-ink">Email:</strong> <a className="text-brand-pink underline hover:no-underline" href="mailto:legal@shuuk.ca">legal@shuuk.ca</a></li>
          <li><strong className="font-bold text-ink">Support:</strong> <a className="text-brand-pink underline hover:no-underline" href="/support">Visit our support page</a></li>
        </ul>

        <div className="border-l-4 border-brand-pink bg-bg-paper px-6 py-5 my-8">
          <h2 className="font-display font-black uppercase text-2xl md:text-3xl text-ink mt-12 mb-4">Plain English Summary</h2>
          <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
            Use our apps respectfully and legally. Don&apos;t post inappropriate content or harass other users. If you pay for a subscription, it renews automatically until you cancel. You own your content, but you give us permission to use it to provide our services. We&apos;re not responsible if something goes wrong, and we can terminate accounts that violate these rules. If there&apos;s a dispute, we&apos;ll try to work it out. These are standard terms for software services, but please read the full version above for all the details.
          </p>
        </div>
      </div>
    </article>
  );
}
