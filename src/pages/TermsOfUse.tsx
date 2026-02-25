import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/PageLayout";
import { TERMS_OF_USE } from "../../legals";

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

const TermsOfUse = () => {
  const lines = TERMS_OF_USE.split("\n");
  const lastUpdated = lines[1];

  return (
    <>
      <Helmet>
        <title>Terms of Use — Nocapps</title>
        <meta name="description" content="Terms of Use for Nocapps mobile games and services." />
        <link rel="canonical" href="https://nocapps.com/terms-of-use" />
      </Helmet>
      <PageLayout>
        <article className="container max-w-3xl py-20 md:py-28">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
            Terms of Use
          </h1>
          <p className="text-sm text-muted-foreground mb-10">{lastUpdated}</p>
          {renderLegalContent(TERMS_OF_USE)}
        </article>
      </PageLayout>
    </>
  );
};

export default TermsOfUse;
