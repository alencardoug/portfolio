# Preparação para PT/EN

## Agora
- conteúdo centralizado;
- strings editoriais fora de componentes sempre que possível;
- nenhuma UI visível de idioma.

## Fase 2
Opção recomendada:

```text
src/content/
  pt.ts
  en.ts

src/app/
  page.tsx
  en/
    page.tsx
```

Se o número de páginas crescer significativamente, migrar para segmento `[locale]` e geração estática por idioma.

## Regras
- não fazer tradução automática sem revisão;
- URLs de projeto podem permanecer equivalentes;
- adicionar `hreflang`;
- usar canonical por idioma;
- traduzir metadata;
- traduzir CV separadamente.
