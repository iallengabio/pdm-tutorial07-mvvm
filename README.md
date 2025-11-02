# PDM Tutorial 07 — MVVM (React Native + Expo)

## Visão Geral
- Exemplo didático de arquitetura MVVM em React Native usando Expo.
- A tela principal exibe uma lista de posts obtidos da API pública `jsonplaceholder`.
- O objetivo é separar claramente responsabilidades entre Model, ViewModel e View.

## Arquitetura (MVVM)
- Model: define entidades e serviços de dados.
  - `model/entities/post.ts`: entidade `Post` (tipos/estrutura).
  - `model/services/postService.ts`: acesso HTTP via `axios` e retorno tipado.
- ViewModel: orquestra chamadas ao serviço e expõe estado/ações para a UI.
  - `hooks/usePosts.ts`: estados `posts`, `loading`, `error` e ação `refresh`.
- View: renderiza a interface com base no estado do ViewModel.
  - `components/PostList.tsx`: exibe loading/erro/dados consumindo `usePosts`.

## Estrutura do Projeto
```
/ (raiz)
├── App.tsx
├── README.md
├── app.json
├── assets/
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   └── splash-icon.png
├── components/
│   └── PostList.tsx
├── hooks/
│   └── usePosts.ts
├── index.ts
├── model/
│   ├── entities/
│   │   └── post.ts
│   └── services/
│       └── postService.ts
├── package.json
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
