import { Link } from "react-router-dom";
import NocappsLogo from "./NocappsLogo";

const SiteFooter = () => (
  <footer className="border-t border-border bg-background py-12">
    <div className="container flex flex-col items-center gap-6 text-center">
      <NocappsLogo />
      <nav className="flex gap-6 text-sm text-muted-foreground">
        <Link to="/terms-of-use" className="hover:text-foreground transition-colors">Terms of Use</Link>
        <Link to="/data-privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
      </nav>
      <p className="text-xs text-muted-foreground">© 2025 Nocapps. All rights reserved.</p>
    </div>
  </footer>
);

export default SiteFooter;
