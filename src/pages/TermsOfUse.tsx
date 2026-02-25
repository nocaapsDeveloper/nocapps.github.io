import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/PageLayout";

const TermsOfUse = () => (
  <>
    <Helmet>
      <title>Terms of Use — Nocapps</title>
      <meta name="description" content="Terms of Use for Nocapps mobile games and services." />
      <link rel="canonical" href="https://nocapps.com/terms-of-use" />
    </Helmet>
    <PageLayout>
      <article className="container max-w-3xl py-20 md:py-28 prose-invert">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">Terms of Use</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: January 1, 2025</p>

        <Section title="1. Acceptance of Terms">
          By downloading, installing, or using any Nocapps application ("App"), you agree to be bound by these Terms of Use. If you do not agree, do not use the App.
        </Section>

        <Section title="2. Use of the App">
          Nocapps grants you a limited, non-exclusive, non-transferable, revocable license to use the App for personal, non-commercial purposes. You may not modify, distribute, or create derivative works based on the App.
        </Section>

        <Section title="3. Intellectual Property">
          All content, graphics, code, and trademarks in the App are the property of Nocapps or its licensors. Unauthorized use is prohibited.
        </Section>

        <Section title="4. Prohibited Conduct">
          You agree not to: (a) reverse-engineer, decompile, or disassemble the App; (b) use the App for unlawful purposes; (c) attempt to gain unauthorized access to any systems or networks connected to the App; (d) interfere with any other user's enjoyment of the App.
        </Section>

        <Section title="5. Disclaimer of Warranties">
          The App is provided "as is" and "as available" without warranties of any kind, express or implied. Nocapps does not warrant that the App will be error-free or uninterrupted.
        </Section>

        <Section title="6. Limitation of Liability">
          To the fullest extent permitted by law, Nocapps shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the App.
        </Section>

        <Section title="7. Changes to Terms">
          Nocapps reserves the right to modify these Terms at any time. Continued use of the App after changes constitutes acceptance of the revised Terms.
        </Section>

        <Section title="8. Contact">
          If you have questions about these Terms, contact us at{" "}
          <a href="mailto:contact@nocapps.com" className="text-primary hover:underline">contact@nocapps.com</a>.
        </Section>
      </article>
    </PageLayout>
  </>
);

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-8">
    <h2 className="text-xl font-heading font-semibold text-foreground mb-3">{title}</h2>
    <p className="text-muted-foreground leading-relaxed">{children}</p>
  </section>
);

export default TermsOfUse;
