# View

Responsável por renderizar a interface com base no estado exposto pelo ViewModel. Não contém regras de negócio.

## Componente: `PostList`
- Consome `usePosts` (ViewModel) para obter `posts`, `loading`, `error` e `refresh`.
- Renderização:
  - `loading`: mostra spinner centralizado e texto “Carregando”.
  - `error`: exibe mensagem de erro e botão “Recarregar” que chama `refresh`.
  - `dados`: lista de cards com `title` e `body`.
- Ações de UI: botão “Recarregar” chama `refresh` do ViewModel.

## Princípios
- Sem chamadas diretas a serviços; toda lógica vem do ViewModel.
- Estilo e layout definidos via `StyleSheet.create` e `ScrollView` no `App`.
- Minimalismo: foco na apresentação e interação simples.