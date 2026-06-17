import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Exclusão de Conta — Areia Play",
};

export default function ExcluirConta() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-6 py-16 md:py-24 space-y-12">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">Exclusão de Conta</h1>
          <p className="text-muted text-sm">Última atualização: Junho de 2026</p>
        </div>

        <section className="space-y-4">
          <p className="text-muted leading-relaxed">
            Usuários do aplicativo <strong>Areia Play</strong> podem solicitar a
            exclusão completa de sua conta e de todos os dados associados a
            qualquer momento.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Como excluir sua conta</h2>
          <p className="text-muted leading-relaxed">
            A exclusão da conta pode ser feita diretamente dentro do aplicativo
            seguindo os passos abaixo:
          </p>
          <div className="bg-card rounded-xl p-4 text-sm font-medium text-foreground border border-border">
            1. Abra o aplicativo Areia Play
            <br />
            2. Acesse <strong>Perfil</strong>
            <br />
            3. Toque em <strong>Configurações</strong>
            <br />
            4. Acesse <strong>Privacidade</strong>
            <br />
            5. Selecione <strong>Excluir minha conta</strong>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">
            O que acontece quando sua conta é excluída
          </h2>
          <p className="text-muted leading-relaxed">
            Quando você solicita a exclusão da conta, todos os dados associados
            são removidos permanentemente dos nossos sistemas.
          </p>
          <ul className="space-y-2 text-foreground/80">
            <li className="flex items-start gap-2">
              <span className="text-brand mt-1">•</span>Dados da conta (nome,
              e-mail, foto)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand mt-1">•</span>Histórico de partidas e
              placares
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand mt-1">•</span>Estatísticas e ranking
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand mt-1">•</span>Arenas cadastradas por
              você
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand mt-1">•</span>Seguidores e conexões
            </li>
          </ul>
          <p className="text-muted leading-relaxed">
            A exclusão é permanente e irreversível.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Solicitação por e-mail</h2>
          <p className="text-muted leading-relaxed">
            Caso você não consiga acessar o aplicativo, também é possível
            solicitar a exclusão da conta entrando em contato pelo e-mail:
          </p>
          <a
            href="mailto:luccasfraga@gmail.com"
            className="text-brand hover:underline font-medium"
          >
            luccasfraga@gmail.com
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
