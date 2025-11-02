# PDM Tutorial 07 — MVVM (React Native + Expo)

## Visão Geral
- Exemplo didático de arquitetura MVVM em React Native usando Expo.
- A tela principal exibe uma lista de posts obtidos da API pública `jsonplaceholder`.
- O objetivo é separar claramente responsabilidades entre Model, ViewModel e View.

## Conceitos (Didático)
- View: renderiza UI com base em estado. Não chama serviços nem contém regras de negócio. Neste projeto, `PostList` mostra loading, erro e dados.
- ViewModel: orquestra chamadas ao serviço, mantém estado e expõe ações para a View. Centraliza tratamento de erros e regras. Aqui, `usePosts` fornece `{ posts, loading, error, refresh }`.
- Model: define entidades e serviços para dados. Não conhece UI. `Post` define a estrutura dos dados; `PostService` acessa HTTP e retorna tipos.

## Explicando cada parte
- `source/components/PostList.tsx` (View)
  - Usa `usePosts` para obter estados e ação `refresh`.
  - Renderiza spinner centralizado quando `loading` é verdadeiro.
  - Exibe mensagem de erro e botão “Recarregar” que chama `refresh`.
  - Lista cards com título e corpo quando há dados.
- `source/viewmodel/usePosts.ts` (ViewModel)
  - Estado: `posts`, `loading`, `error`.
  - Ação: `refresh` que busca dados no serviço e atualiza o estado.
  - Efeito inicial: chama `refresh` ao montar.
  - Trata erros definindo uma mensagem amigável em `error`.
- `source/model/entities/post.ts` e `source/model/services/postService.ts` (Model)
  - Entidade `Post` com tipos explícitos.
  - Serviço `PostService.getPosts()` usa `axios` para obter dados e retorna `Promise<Post[]>`.

## Arquitetura (MVVM)
- Model: define entidades e serviços de dados.
  - `source/model/entities/post.ts`: entidade `Post` (tipos/estrutura).
  - `source/model/services/postService.ts`: acesso HTTP via `axios` e retorno tipado.
- ViewModel: orquestra chamadas ao serviço e expõe estado/ações para a UI.
  - `source/viewmodel/usePosts.ts`: estados `posts`, `loading`, `error` e ação `refresh`.
- View: renderiza a interface com base no estado do ViewModel.
  - `source/components/PostList.tsx`: exibe loading/erro/dados consumindo `usePosts`.

## Estrutura do Projeto
```
/ (raiz)
├── .trae/
│   └── rules/
│       └── project_rules.md
├── README.md
├── app.json
├── index.ts
├── package.json
├── source/
│   ├── App.tsx
│   ├── components/
│   │   ├── README.md
│   │   └── PostList.tsx
│   ├── model/
│   │   ├── entities/
│   │   │   └── post.ts
│   │   └── services/
│   │       └── postService.ts
│   │   └── README.md
│   └── viewmodel/
│       ├── README.md
│       └── usePosts.ts
└── tsconfig.json
```

## Como Executar (Expo)
Observação importante: não iniciar automaticamente (conforme práticas do workspace).
Para validar localmente, execute você mesmo um dos comandos:
- Instalar dependências: `npm install`
- Web (Expo): `npm run web`
- Metro/Expo (CLI): `npx expo start`

O que validar:
- UI da lista de posts (`PostList`): estados de carregamento, erro e dados.
- Renderização performática (uso básico de `StyleSheet.create`).

## Fluxo de Dados
1. A View (`PostList`) consome o ViewModel (`usePosts`).
2. O ViewModel chama o serviço `PostService.getPosts()` e atualiza estados.
3. A View reage aos estados (`loading`, `error`, `posts`) e renderiza.

## Diretrizes e Boas Práticas
- Separação de camadas: sem lógica de negócio em componentes de UI.
- Tipagens explícitas em TypeScript para entidades e props.
- Erros de rede tratados no ViewModel, sem acoplar UI ao transporte.
- Mensagens de commit seguindo padrão (`feat:`, `fix:`, `docs:`, `chore:`).

## Testes (sugestão)
- Priorizar testes de serviços e hooks mais complexos.
- Usar mocks para chamadas de rede (`axios`).

## Dependências Principais
- `expo`, `react`, `react-native`, `axios`.

## Repositório
- Organização: `Gabio-Edu`
- Nome do repositório: `pdm-tutorial07-mvvm`
- URL: `https://github.com/Gabio-Edu/pdm-tutorial07-mvvm`

## Licença
Uso acadêmico/didático.
