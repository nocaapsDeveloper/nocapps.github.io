import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/PageLayout";
import { PRIVACY_POLICY } from "../../legals";

const renderLegalContent = (text: string) => {
  const lines = text.split("\n");
  const nodes: React.ReactNode[] = [];

  // First two lines are title + last updated, handled by the page header
  for (let i = 2; i < lines.length; i++) {
    const line = lines[i].trim();

    if (!line) continue;

    // Main section: "1. INTRODUCTION"
    if (/^\d+\.\s+[A-Z]/.test(line)) {
      nodes.push(
        <h2 key={i} className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">
          {line}
        </h2>
      );
    // Sub-section: "6.1 General Information"
    } else if (/^\d+\.\d+\s+/.test(line)) {
      nodes.push(
        <h3 key={i} className="text-base font-heading font-semibold text-foreground mt-5 mb-2">
          {line}
        </h3>
      );
    } else {
      nodes.push(
        <p key={i} className="text-muted-foreground leading-relaxed mb-3">
          {line}
        </p>
      );
    }
  }

  return nodes;
};

const DataPrivacy = () => {
  const lines = PRIVACY_POLICY.split("\n");
  const lastUpdated = lines[1];

  return (
    <>
      <Helmet>
        <title>Privacy Policy — Nocapps</title>
        <meta name="description" content="Privacy Policy for Nocapps mobile games and services." />
        <link rel="canonical" href="https://nocapps.com/data-privacy" />
      </Helmet>
      <PageLayout>
        <article className="container max-w-3xl py-20 md:py-28">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground mb-10">{lastUpdated}</p>
          {renderLegalContent(PRIVACY_POLICY)}
        </article>
      </PageLayout>
    </>
  );
};

export default DataPrivacy;
