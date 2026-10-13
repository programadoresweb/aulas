
"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Code2,
  ExternalLink,
  GitFork,
  GraduationCap,
  Layers3,
  Search,
  Sparkles,
  Target,
  Trophy,
  Zap,
} from "lucide-react";

type Projeto = {
  id: number;
  titulo: string;
  nivel: "Iniciante" | "Intermediário" | "Avançado";
  categoria: string;
  descricao: string;
  objetivo: string;
  funcionalidades: string[];
  tecnologias: string[];
  prazo: string;
  habilidades: string;
};

const projetos: Projeto[] = [
  {
    id: 1,
    titulo: "Portfólio Pessoal",
    nivel: "Iniciante",
    categoria: "Fundamentos",
    descricao: "Crie sua identidade profissional na internet.",
    objetivo: "Apresentar seus projetos, habilidades e experiências em um site moderno.",
    funcionalidades: [
      "Página inicial com apresentação pessoal",
      "Galeria de projetos com links",
      "Página sobre e formulário de contato",
      "Layout responsivo e tema claro/escuro",
    ],
    tecnologias: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide"],
    prazo: "2–4 dias",
    habilidades: "Componentes, layouts, CSS e responsividade.",
  },
  {
    id: 2,
    titulo: "Gerenciador de Tarefas",
    nivel: "Iniciante",
    categoria: "Fundamentos",
    descricao: "Organize tarefas e aprenda operações CRUD.",
    objetivo: "Construir uma aplicação para gerenciar atividades do dia a dia.",
    funcionalidades: [
      "Criar, editar e excluir tarefas",
      "Prioridades, categorias e prazos",
      "Filtros por status",
      "Persistência com localStorage e estatísticas",
    ],
    tecnologias: ["Next.js", "TypeScript", "Tailwind CSS", "localStorage"],
    prazo: "3–5 dias",
    habilidades: "Hooks, estado, formulários e operações CRUD.",
  },
  {
    id: 3,
    titulo: "Aplicativo de Clima",
    nivel: "Iniciante",
    categoria: "APIs e interfaces",
    descricao: "Consuma uma API e trabalhe com dados reais.",
    objetivo: "Exibir informações meteorológicas de diferentes cidades.",
    funcionalidades: [
      "Pesquisa de cidades",
      "Temperatura e condições climáticas",
      "Previsão para os próximos dias",
      "Favoritos, carregamento e tratamento de erros",
    ],
    tecnologias: ["Next.js", "TypeScript", "API de clima", "Tailwind CSS"],
    prazo: "3–5 dias",
    habilidades: "Fetch, APIs, async/await e estados de interface.",
  },
  {
    id: 4,
    titulo: "E-commerce de Produtos",
    nivel: "Intermediário",
    categoria: "APIs e interfaces",
    descricao: "Desenvolva uma loja virtual funcional.",
    objetivo: "Criar uma experiência completa de navegação e compra simulada.",
    funcionalidades: [
      "Catálogo com imagens e detalhes",
      "Busca, filtros e ordenação",
      "Carrinho com quantidades",
      "Total automático e checkout demonstrativo",
    ],
    tecnologias: ["Next.js", "TypeScript", "Tailwind CSS", "Banco de dados"],
    prazo: "1–2 semanas",
    habilidades: "Rotas dinâmicas, estado global e lógica de negócio.",
  },
  {
    id: 5,
    titulo: "Dashboard Administrativo",
    nivel: "Intermediário",
    categoria: "Aplicações dinâmicas",
    descricao: "Construa um painel administrativo profissional.",
    objetivo: "Apresentar dados e permitir a gestão de registros.",
    funcionalidades: [
      "Indicadores e gráficos",
      "Tabela com busca e paginação",
      "Cadastro, edição e exclusão",
      "Filtros por período e menu responsivo",
    ],
    tecnologias: ["Next.js", "TypeScript", "Recharts", "TanStack Table"],
    prazo: "1–2 semanas",
    habilidades: "Visualização de dados, tabelas e interfaces administrativas.",
  },
  {
    id: 6,
    titulo: "Blog com Painel de Publicação",
    nivel: "Intermediário",
    categoria: "Aplicações dinâmicas",
    descricao: "Crie uma plataforma de conteúdo com banco de dados.",
    objetivo: "Desenvolver um blog com área de administração para autores.",
    funcionalidades: [
      "Cadastro e login de autores",
      "Criar, editar e publicar artigos",
      "Upload de imagens, categorias e comentários",
      "URLs amigáveis e metadados para SEO",
    ],
    tecnologias: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Auth"],
    prazo: "1–2 semanas",
    habilidades: "Autenticação, persistência, SEO e conteúdo dinâmico.",
  },
  {
    id: 7,
    titulo: "SaaS Financeiro",
    nivel: "Avançado",
    categoria: "Regras de negócio",
    descricao: "Gerencie receitas, despesas e metas financeiras.",
    objetivo: "Criar um sistema financeiro personalizado para cada usuário.",
    funcionalidades: [
      "Cadastro e autenticação",
      "Receitas, despesas e categorias",
      "Gráficos e metas mensais",
      "Orçamentos e exportação de relatórios",
    ],
    tecnologias: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Zod"],
    prazo: "2–3 semanas",
    habilidades: "Regras de negócio, validação e persistência segura.",
  },
  {
    id: 8,
    titulo: "Clone do Trello",
    nivel: "Avançado",
    categoria: "Regras de negócio",
    descricao: "Crie quadros colaborativos para organizar equipes.",
    objetivo: "Construir uma ferramenta de gestão de tarefas multiusuário.",
    funcionalidades: [
      "Espaços de trabalho e quadros",
      "Cartões arrastáveis entre colunas",
      "Convites e permissões de acesso",
      "Comentários, etiquetas e atualizações em tempo real",
    ],
    tecnologias: ["Next.js", "TypeScript", "PostgreSQL", "dnd-kit", "Supabase"],
    prazo: "3–5 semanas",
    habilidades: "Drag and drop, colaboração e permissões.",
  },
  {
    id: 9,
    titulo: "Chat com Inteligência Artificial",
    nivel: "Avançado",
    categoria: "Sistemas avançados",
    descricao: "Integre IA a uma aplicação web completa.",
    objetivo: "Criar um assistente conversacional com histórico persistente.",
    funcionalidades: [
      "Chat com respostas da IA",
      "Streaming de respostas",
      "Histórico e gerenciamento de conversas",
      "Limites de uso e tratamento de erros",
    ],
    tecnologias: ["Next.js", "TypeScript", "API de IA", "Banco de dados", "Auth"],
    prazo: "2–4 semanas",
    habilidades: "Integração de modelos, streaming e segurança de APIs.",
  },
  {
    id: 10,
    titulo: "SaaS CRM Profissional",
    nivel: "Avançado",
    categoria: "Sistemas avançados",
    descricao: "Desenvolva seu projeto de destaque para o portfólio.",
    objetivo: "Criar um sistema de relacionamento com clientes para empresas.",
    funcionalidades: [
      "Empresas, equipes e contatos",
      "Pipeline de vendas por etapas",
      "Tarefas, lembretes e histórico de interações",
      "Planos de assinatura, permissões e testes automatizados",
    ],
    tecnologias: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Testes"],
    prazo: "4–8 semanas",
    habilidades: "Arquitetura full-stack, segurança, testes e SaaS.",
  },
];

const etapas = [
  {
    numero: "01",
    titulo: "Fundamentos",
    projetos: "Projetos 01–02",
    descricao: "Componentes, props, hooks, CSS e formulários.",
  },
  {
    numero: "02",
    titulo: "APIs e interfaces",
    projetos: "Projetos 03–04",
    descricao: "Consumo de APIs, rotas, buscas e carrinho.",
  },
  {
    numero: "03",
    titulo: "Aplicações dinâmicas",
    projetos: "Projetos 05–06",
    descricao: "Banco de dados, autenticação e SEO.",
  },
  {
    numero: "04",
    titulo: "Regras de negócio",
    projetos: "Projetos 07–08",
    descricao: "Persistência, permissões e colaboração.",
  },
  {
    numero: "05",
    titulo: "Sistemas avançados",
    projetos: "Projetos 09–10",
    descricao: "IA, arquitetura, pagamentos e testes.",
  },
];

const cores: Record<string, string> = {
  Iniciante: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
  Intermediário: "border-amber-500/30 text-amber-400 bg-amber-500/10",
  Avançado: "border-rose-500/30 text-rose-400 bg-rose-500/10",
};

const tecnologiasBase = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Lucide Icons",
  "PostgreSQL",
  "Prisma ou Drizzle",
  "Supabase",
  "Zod",
  "Vitest / Jest",
  "Playwright",
  "Vercel",
];

export default function Home() {
const [concluidos, setConcluidos] = useState<number[]>([
  1, // Portfólio Pessoal
  2, // Gerenciador de Tarefas
  4,//E-comerce
]);  const [aberto, setAberto] = useState<number | null>(1);
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState("Todos");
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    try {
     // O progresso inicial é definido diretamente no código.
      localStorage.removeItem("next-roadmap-concluidos");
    } catch {
      // Continua com o progresso inicial se os dados forem inválidos.
    }
    setCarregado(true);
  }, []);

  useEffect(() => {
    if (carregado) {
      localStorage.setItem(
        "next-roadmap-concluidos",
        JSON.stringify(concluidos)
      );
    }
  }, [concluidos, carregado]);

  const filtrados = useMemo(() => {
    return projetos.filter((p) => {
      const correspondeNivel = filtro === "Todos" || p.nivel === filtro;
      const termo = busca.toLowerCase();
      const correspondeBusca =
        p.titulo.toLowerCase().includes(termo) ||
        p.descricao.toLowerCase().includes(termo) ||
        p.tecnologias.some((t) => t.toLowerCase().includes(termo));

      return correspondeNivel && correspondeBusca;
    });
  }, [busca, filtro]);

  const percentual = Math.round((concluidos.length / projetos.length) * 100);

  function alternarConclusao(id: number) {
    setConcluidos((anteriores) =>
      anteriores.includes(id)
        ? anteriores.filter((n) => n !== id)
        : [...anteriores, id]
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#09090b] text-zinc-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.09),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
        {/* Navegação */}
        <header className="flex items-center justify-between border-b border-white/10 pb-6">
          <a href="#inicio" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-black">
              <Code2 size={23} strokeWidth={2.5} />
            </div>
            <div>
              <p className="font-bold tracking-tight">DevRoadmap</p>
              <p className="text-xs text-zinc-500">Aprenda construindo</p>
            </div>
          </a>

          <a
            href="#projetos"
            className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm transition hover:border-orange-400/50 hover:text-orange-400"
          >
            <BookOpen size={16} />
            <span>Trilha de projetos</span>
          </a>
        </header>

        {/* Hero */}
        <section id="inicio" className="py-16 sm:py-24">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm text-orange-400">
            <Sparkles size={16} />
            Sua jornada no desenvolvimento web
          </div>

          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Do primeiro componente ao{" "}
            <span className="text-orange-500">full-stack.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            Dez projetos práticos para dominar Next.js, construir aplicações
            reais e desenvolver um portfólio que mostre sua evolução técnica.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 font-bold text-black transition hover:bg-orange-400"
            >
              Começar a jornada <ArrowRight size={18} />
            </a>
            <a
              href="#roadmap"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 font-medium transition hover:bg-white/5"
            >
              Ver o roadmap <ArrowDown size={18} />
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { valor: "10", texto: "Projetos práticos", icon: Layers3 },
              { valor: "3", texto: "Níveis de dificuldade", icon: Zap },
              { valor: "5", texto: "Etapas de aprendizado", icon: GraduationCap },
              { valor: "100%", texto: "Foco na prática", icon: Target },
            ].map((item) => (
              <div
                key={item.texto}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-4 sm:p-5"
              >
                <item.icon className="mb-4 text-orange-500" size={20} />
                <p className="text-2xl font-black">{item.valor}</p>
                <p className="mt-1 text-xs text-zinc-500 sm:text-sm">
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Progresso */}
        <section className="mb-16 rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2 text-orange-400">
                <Trophy size={20} />
                <span className="text-sm font-semibold">Seu progresso</span>
              </div>
              <h2 className="mt-3 text-2xl font-bold">
                Continue de onde parou.
              </h2>
              <p className="mt-2 text-sm text-zinc-400">
                Marque cada projeto quando terminar. Seu progresso fica salvo
                neste navegador.
              </p>
            </div>
            <div className="sm:min-w-48">
              <div className="mb-2 flex items-end justify-between">
                <span className="text-sm text-zinc-400">Conclusão da trilha</span>
                <span className="text-2xl font-black text-orange-400">
                  {percentual}%
                </span>
              </div>
              <div
                className="h-2.5 overflow-hidden rounded-full bg-white/10"
                role="progressbar"
                aria-label="Progresso dos projetos"
                aria-valuenow={percentual}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="h-full rounded-full bg-orange-500 transition-all duration-500"
                  style={{ width: `${percentual}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-zinc-500">
                {concluidos.length} de {projetos.length} projetos concluídos
              </p>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section id="roadmap" className="mb-20 scroll-mt-8">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              O caminho
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Cinco etapas para evoluir.
            </h2>
            <p className="mt-3 max-w-2xl text-zinc-400">
              Cada fase prepara você para os desafios da próxima.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {etapas.map((etapa, i) => (
              <div
                key={etapa.numero}
                className="relative rounded-2xl border border-white/10 bg-white/[0.025] p-5"
              >
                <span className="text-sm font-bold text-orange-500">
                  ETAPA {etapa.numero}
                </span>
                <h3 className="mt-4 font-bold">{etapa.titulo}</h3>
                <p className="mt-2 text-xs font-medium text-zinc-300">
                  {etapa.projetos}
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  {etapa.descricao}
                </p>
                {i < etapas.length - 1 && (
                  <ArrowRight
                    className="absolute -right-3 top-1/2 z-10 hidden text-orange-500 lg:block"
                    size={18}
                  />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Lista de projetos */}
        <section id="projetos" className="scroll-mt-8">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              Aprendizado na prática
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Escolha seu próximo projeto.
            </h2>
            <p className="mt-3 text-zinc-400">
              Estude, pratique, construa e adicione cada aplicação ao seu portfólio.
            </p>
          </div>

          <div className="mb-6 flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                size={18}
              />
              <input
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Buscar projeto ou tecnologia..."
                aria-label="Buscar projetos"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-3 pl-11 pr-4 outline-none transition placeholder:text-zinc-600 focus:border-orange-500/60"
              />
            </div>

            <select
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
              aria-label="Filtrar por dificuldade"
              className="rounded-xl border border-white/10 bg-[#111113] px-4 py-3 text-sm outline-none focus:border-orange-500/60"
            >
              <option>Todos</option>
              <option>Iniciante</option>
              <option>Intermediário</option>
              <option>Avançado</option>
            </select>
          </div>

          <div className="space-y-4">
            {filtrados.map((projeto) => {
              const expandido = aberto === projeto.id;
              const concluido = concluidos.includes(projeto.id);

              return (
                <article
                  key={projeto.id}
                  className={`overflow-hidden rounded-2xl border bg-white/[0.025] transition ${
                    concluido
                      ? "border-emerald-500/30"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setAberto(expandido ? null : projeto.id)
                    }
                    aria-expanded={expandido}
                    className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
                  >
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border font-black ${
                        concluido
                          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                          : "border-orange-500/20 bg-orange-500/10 text-orange-400"
                      }`}
                    >
                      {concluido ? (
                        <Check size={23} />
                      ) : (
                        String(projeto.id).padStart(2, "0")
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <span
                          className={`rounded-full border px-2.5 py-1 text-xs font-medium ${cores[projeto.nivel]}`}
                        >
                          {projeto.nivel}
                        </span>
                        {concluido && (
                          <span className="text-xs text-emerald-400">
                            Concluído
                          </span>
                        )}
                      </div>
                      <h3 className="text-base font-bold sm:text-lg">
                        {projeto.titulo}
                      </h3>
                      <p className="mt-1 text-sm text-zinc-500">
                        {projeto.descricao}
                      </p>
                    </div>

                    <div className="hidden items-center gap-2 text-sm text-zinc-500 sm:flex">
                      <Clock3 size={16} />
                      {projeto.prazo}
                    </div>
                    <ChevronDown
                      className={`shrink-0 text-zinc-500 transition-transform ${
                        expandido ? "rotate-180" : ""
                      }`}
                      size={20}
                    />
                  </button>

                  {expandido && (
                    <div className="border-t border-white/10 px-5 pb-6 pt-5 sm:px-6">
                      <div className="grid gap-7 lg:grid-cols-[1.3fr_1fr]">
                        <div>
                          <h4 className="flex items-center gap-2 font-bold">
                            <Target size={17} className="text-orange-500" />
                            Objetivo do projeto
                          </h4>
                          <p className="mt-3 text-sm leading-7 text-zinc-400">
                            {projeto.objetivo}
                          </p>

                          <h4 className="mt-6 font-bold">
                            Funcionalidades para desenvolver
                          </h4>
                          <ul className="mt-3 space-y-3">
                            {projeto.funcionalidades.map((funcionalidade) => (
                              <li
                                key={funcionalidade}
                                className="flex items-start gap-3 text-sm leading-6 text-zinc-400"
                              >
                                <CheckCircle2
                                  size={17}
                                  className="mt-0.5 shrink-0 text-orange-500"
                                />
                                {funcionalidade}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-bold">Tecnologias</h4>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {projeto.tecnologias.map((tecnologia) => (
                              <span
                                key={tecnologia}
                                className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-300"
                              >
                                {tecnologia}
                              </span>
                            ))}
                          </div>

                          <div className="mt-6 rounded-xl border border-white/10 p-4">
                            <p className="flex items-center gap-2 text-sm font-semibold">
                              <GraduationCap
                                size={17}
                                className="text-orange-500"
                              />
                              O que você vai aprender
                            </p>
                            <p className="mt-2 text-sm leading-6 text-zinc-400">
                              {projeto.habilidades}
                            </p>
                            <p className="mt-4 flex items-center gap-2 text-sm text-zinc-400">
                              <Clock3 size={16} />
                              Prazo sugerido: {projeto.prazo}
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={() => alternarConclusao(projeto.id)}
                            className={`mt-5 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition ${
                              concluido
                                ? "border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10"
                                : "bg-orange-500 text-black hover:bg-orange-400"
                            }`}
                          >
                            {concluido ? (
                              <>
                                <CheckCircle2 size={18} />
                                Marcar como não concluído
                              </>
                            ) : (
                              <>
                                Concluir projeto
                                <ArrowRight size={18} />
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}

            {filtrados.length === 0 && (
              <div className="rounded-2xl border border-white/10 p-10 text-center">
                <Search className="mx-auto text-zinc-500" size={30} />
                <p className="mt-4 font-semibold">Nenhum projeto encontrado</p>
                <p className="mt-2 text-sm text-zinc-500">
                  Tente outro termo ou altere o filtro de dificuldade.
                </p>
                <button
                  onClick={() => {
                    setBusca("");
                    setFiltro("Todos");
                  }}
                  className="mt-4 text-sm text-orange-400 hover:underline"
                >
                  Limpar filtros
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Stack recomendada */}
        <section className="mt-20 rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-orange-500/10 p-3 text-orange-400">
              <Code2 size={23} />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Stack recomendada</h2>
              <p className="mt-1 text-sm text-zinc-500">
                Ferramentas para construir aplicações modernas.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {tecnologiasBase.map((tecnologia) => (
              <span
                key={tecnologia}
                className="rounded-lg border border-white/10 px-3 py-2 text-sm text-zinc-300"
              >
                {tecnologia}
              </span>
            ))}
          </div>
        </section>

        {/* Portfólio */}
        <section className="my-16 rounded-3xl border border-orange-500/20 bg-orange-500/[0.06] p-6 sm:p-10">
          <div className="flex items-start gap-4">
            <div className="hidden rounded-xl bg-orange-500/10 p-3 text-orange-400 sm:block">
              <GitFork size={26} />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-orange-400">
                Seu próximo passo
              </p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                Transforme aprendizado em experiência.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
                Publique suas aplicações, organize seus repositórios, escreva
                READMEs completos, adicione demonstrações online e documente
                os desafios que você resolveu.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Código organizado no GitHub",
                  "Demonstração online funcional",
                  "README com instalação e recursos",
                  "Testes, validação e responsividade",
                ].map((item) => (
                  <p
                    key={item}
                    className="flex items-center gap-2 text-sm text-zinc-300"
                  >
                    <CheckCircle2
                      size={17}
                      className="shrink-0 text-orange-500"
                    />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 py-8 text-center">
          <p className="font-semibold">
            DevRoadmap <span className="text-orange-500">.</span>
          </p>
          <p className="mt-2 text-sm text-zinc-500">
            Um projeto de cada vez. Uma habilidade a cada etapa.
          </p>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-orange-400 hover:underline"
          >
            Documentação oficial do Next.js <ExternalLink size={14} />
          </a>
        </footer>
      </div>
    </main>
  );
}
