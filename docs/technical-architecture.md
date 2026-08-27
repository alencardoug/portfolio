# Arquitetura técnica

## Decisão

Aplicação web estática construída com Next.js App Router e exportada para arquivos estáticos.

## Componentes

```text
Content/config
     ↓
React Server Components (conteúdo)
     ↓
Client components mínimos
  ├─ ThemeToggle
  └─ ContactDock
     ↓
Next static export
     ↓
out/
     ↓
Firebase Hosting CDN
```

## Sem backend

A V1 não precisa de:
- API própria;
- banco;
- sessão;
- autenticação;
- processamento de formulário;
- secrets em runtime.

Contatos usam links externos:
- Calendly;
- `mailto:`;
- `wa.me`.

## Conteúdo

A fonte de verdade da V1 fica em:

`src/content/pt.ts`

Links ficam opcionais. `null` significa “não publicar”.

## Rotas

- `/`
- `/projects/plataforma-atendimento-ia/`
- `/projects/engenharia-dados-gcp/`
- `/projects/portfolio/`

Futuro:
- `/en/`
- `/en/projects/...`

## Deploy

### V1
Firebase Hosting clássico servindo `out/`.

### Motivo
A aplicação é estática. Firebase App Hosting é desnecessário enquanto não houver recursos dinâmicos/SSR.

## Dependências

Manter pequenas:
- Next;
- React;
- Tailwind;
- Lucide.

Evitar component libraries inteiras na V1.

## Segurança

- nenhum secret no bundle;
- nenhum token;
- nenhum endpoint privado;
- links externos com `rel="noreferrer noopener"` quando aplicável;
- CV e imagens são públicos por definição;
- número de WhatsApp só entra após decisão explícita.
