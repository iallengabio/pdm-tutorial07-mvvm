# Model

Responsável por definir as estruturas de dados (entidades) e acessar fontes de dados (serviços). Não contém lógica de UI.

## Entidades
- `entities/post.ts`: Define a interface `Post` com os campos `id`, `title` e `body` (tipos explícitos em TypeScript).

## Serviços
- `services/postService.ts`: Implementa `PostService.getPosts()` usando `axios` para buscar posts em `jsonplaceholder`. Retorna `Promise<Post[]>` tipada e deixa tratamento de erros para o ViewModel.

## Princípios
- Sem acoplamento com componentes de UI ou plataforma.
- Retornos sempre tipados.
- Mínima lógica: apenas transformação de dados quando necessário.