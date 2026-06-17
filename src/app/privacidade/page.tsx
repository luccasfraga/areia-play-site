import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Política de Privacidade — Areia Play",
};

export default function Privacidade() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-6 py-16 md:py-24 space-y-12">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">
            Política de Privacidade
          </h1>
          <p className="text-muted text-sm">
            Última atualização: Junho de 2026
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">1. Dados coletados</h2>
          <p className="text-muted leading-relaxed">
            Coletamos apenas os dados necessários para o funcionamento do
            aplicativo:
          </p>
          <ul className="space-y-2 text-foreground/80">
            <li className="flex items-start gap-2">
              <span className="text-brand mt-1">•</span>Nome completo
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand mt-1">•</span>Nome de usuário
              (username)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand mt-1">•</span>Endereço de e-mail
              (usado para autenticação)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand mt-1">•</span>Cidade e localização
              aproximada (para encontrar arenas e jogadores próximos)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand mt-1">•</span>Foto de perfil
              (opcional)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand mt-1">•</span>Dados de partidas,
              placares, arenas e esportes registrados por você
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">2. Como os dados são usados</h2>
          <p className="text-muted leading-relaxed">
            Seus dados são usados exclusivamente para:
          </p>
          <ul className="space-y-2 text-foreground/80">
            <li className="flex items-start gap-2">
              <span className="text-brand mt-1">•</span>Autenticar sua conta
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand mt-1">•</span>Exibir seu perfil,
              estatísticas e histórico de partidas
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand mt-1">•</span>Mostrar arenas e
              jogadores próximos a você
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand mt-1">•</span>Calcular rankings e
              estatísticas
            </li>
          </ul>
          <p className="text-muted leading-relaxed">
            Não utilizamos seus dados para fins publicitários nem os
            compartilhamos com terceiros.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">3. Armazenamento</h2>
          <p className="text-muted leading-relaxed">
            Todos os dados são armazenados de forma segura na plataforma
            Supabase, com criptografia em trânsito (TLS) e controle de acesso
            por linha (Row-Level Security). Apenas você tem acesso aos seus
            próprios dados pessoais.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">4. Exclusão de dados</h2>
          <p className="text-muted leading-relaxed">
            Você pode solicitar a exclusão completa de todos os seus dados a
            qualquer momento diretamente pelo aplicativo, acessando:
          </p>
          <p className="bg-card rounded-xl p-4 text-sm font-medium text-foreground border border-border">
            Perfil → Configurações → Privacidade → Excluir minha conta
          </p>
          <p className="text-muted leading-relaxed">
            A exclusão é permanente e irreversível.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">5. Contato</h2>
          <p className="text-muted leading-relaxed">
            Em caso de dúvidas sobre esta política, entre em contato pelo
            e-mail:
          </p>
          <a
            href="mailto:contato@areiaplay.com"
            className="text-brand hover:underline font-medium"
          >
            contato@areiaplay.com
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
