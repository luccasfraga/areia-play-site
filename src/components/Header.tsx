import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-border bg-card/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3.5">
        <Link href="/" className="flex items-center gap-2.5 group">
          <img
            src="/logo.png"
            alt="Areia Play"
            className="rounded-lg group-hover:scale-105 transition-transform w-11 h-11"
          />
          <span className="text-lg font-extrabold tracking-tight">
            <span className="text-green">Areia</span>
            <span className="text-brand">Play</span>
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-muted">
          <Link
            href="/#funcionalidades"
            className="hidden sm:block hover:text-foreground transition-colors"
          >
            Funcionalidades
          </Link>
          <Link
            href="/privacidade"
            className="hover:text-foreground transition-colors"
          >
            Privacidade
          </Link>
        </nav>
      </div>
    </header>
  );
}
