export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          <span className="text-green">Areia</span>
          <span className="text-brand">Play</span>
        </h1>
        <p className="text-muted text-base">Algo novo está chegando.</p>

        <div className="inline-flex items-center gap-2 bg-brand/10 text-brand-dark px-5 py-3 rounded-full font-semibold text-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand" />
          </span>
          Em breve
        </div>
      </div>

      <footer className="absolute bottom-6 text-xs text-muted">
        &copy; {new Date().getFullYear()} Areia Play
      </footer>
    </div>
  );
}
