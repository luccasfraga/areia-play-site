import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-sand">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Areia Play" className="rounded-lg w-11 h-11" />
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-muted">
            <Link href="/privacidade" className="hover:text-foreground transition-colors">
              Privacidade
            </Link>
            <Link href="/excluir-conta" className="hover:text-foreground transition-colors">
              Excluir conta
            </Link>
            <a href="mailto:luccasfraga@gmail.com" className="hover:text-foreground transition-colors">
              Contato
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border text-xs text-muted">
          &copy; {new Date().getFullYear()} Areia Play. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
