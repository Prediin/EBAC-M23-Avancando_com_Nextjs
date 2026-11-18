# Cinelista

Aplicação de catálogo de filmes feita com Next.js, React e TypeScript.

## Como executar

É necessário ter o Node.js instalado (versão 20.9 ou superior).

```bash
npm ci
npm run dev
```

Abra `http://localhost:3000` no navegador.

## Verificações

```bash
npm run lint    # Verificação de qualidade do código
npm run build   # Compilação e validação de tipos para produção
npm run start   # Inicia o projeto compilado
```

O comando `npm run start` deve ser executado após `npm run build`.

O comando `npm run lint` utiliza **Biome**, que substitui as antigas
dependências de ESLint responsáveis pelos alertas de segurança do `picomatch`.
Para conferir as dependências instaladas, execute `npm audit`.

## Páginas

- `/`: catálogo de filmes.
- `/filmes/1`, `/filmes/2`, `/filmes/3`, `/filmes/4`: detalhes de cada filme.
- `/filmes/em-alta`, `/filmes/populares`, `/filmes/top-filmes`: páginas de categorias (ainda apenas com seus títulos).

Os filmes estão definidos em `src/lib/filmes.js`. As rotas de detalhes são
pré-geradas para esses registros, e um identificador inexistente exibe a página
de não encontrado.

## Sobre o ZIP

Não é preciso guardar `node_modules` ou `.next` no arquivo: essas pastas são
recriadas pelos comandos acima. O `package-lock.json` foi mantido para garantir
uma instalação reproduzível com `npm ci`.
