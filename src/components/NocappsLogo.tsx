const NocappsLogo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="hsl(263 70% 58%)" />
      <path d="M9 22V10L16 18V10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="22" cy="16" r="4" stroke="white" strokeWidth="2.5" />
    </svg>
    <span className="font-heading text-xl font-bold text-foreground tracking-tight">Nocapps</span>
  </div>
);

export default NocappsLogo;
