# ViewModel

Responsável por orquestrar chamadas ao serviço, manter e expor estado para a View, e centralizar regras/erros. Não renderiza UI.

## Hook: `usePosts`
- Estado exposto: `posts: Post[]`, `loading: boolean`, `error: string | null`.
- Ação: `refresh(): Promise<void>` — dispara busca ao serviço e atualiza o estado.
- Comportamento: chama `refresh` no `useEffect` inicial para carregar automaticamente.
- Tratamento de erros: define mensagem amigável em `error` sem acoplar transporte à UI.

## Princípios
- Único ponto de verdade para regras relativas aos posts (carregamento/erro).
- Não conhece `View`; apenas expõe dados e ações.
- Tipagens explícitas para estado e ações.