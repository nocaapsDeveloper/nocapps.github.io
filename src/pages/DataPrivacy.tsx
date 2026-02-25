import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/PageLayout";

const DataPrivacy = () => (
  <>
    <Helmet>
      <title>Privacy Policy — Nocapps</title>
      <meta name="description" content="Privacy Policy for Nocapps mobile games. We collect no personal data." />
      <link rel="canonical" href="https://nocapps.com/data-privacy" />
    </Helmet>
    <PageLayout>
      <article className="container max-w-3xl py-20 md:py-28">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: January 1, 2025</p>

        <Section title="1. Introduction">
          Nocapps ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how our mobile applications handle information.
        </Section>

        <Section title="2. Data We Collect">
          <strong className="text-foreground">We do not collect any personal data.</strong> Our games are designed to be fully offline and local. No account creation is required, and no personal information is transmitted to our servers.
        </Section>

        <Section title="3. Third-Party Services">
          Our apps are built with Expo / React Native, which may collect anonymous crash reports and basic analytics data (e.g., device type, OS version) to help us improve app stability. This data is not personally identifiable. We do not use any third-party advertising SDKs.
        </Section>

        <Section title="4. Children's Privacy">
          Our games are suitable for all ages. Since we do not collect any personal data, our apps are compliant with the Children's Online Privacy Protection Act (COPPA). We do not knowingly collect information from children under 13.
        </Section>

        <Section title="5. Changes to This Policy">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date.
        </Section>

        <Section title="6. Contact">
          If you have any questions about this Privacy Policy, please contact us at{" "}
          <a href="mailto:contact@nocapps.com" className="text-primary hover:underline">contact@nocapps.com</a>.
        </Section>
      </article>
    </PageLayout>
  </>
);

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-8">
    <h2 className="text-xl font-heading font-semibold text-foreground mb-3">{title}</h2>
    <div className="text-muted-foreground leading-relaxed">{children}</div>
  </section>
);

export default DataPrivacy;
