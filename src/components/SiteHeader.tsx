import { Link } from "react-router-dom";
import NocappsLogo from "./NocappsLogo";

const SiteHeader = () => (
  <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
    <div className="container flex h-16 items-center justify-between">
      <Link to="/" className="flex items-center gap-2">
        <NocappsLogo />
      </Link>
      <nav className="flex items-center gap-6 text-sm font-body text-muted-foreground">
        <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
        <Link to="/terms-of-use" className="hover:text-foreground transition-colors">Terms</Link>
        <Link to="/data-privacy" className="hover:text-foreground transition-colors">Privacy</Link>
      </nav>
    </div>
  </header>
);

export default SiteHeader;
