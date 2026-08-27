# START HERE — primeira sessão no Claude Code

## 1. Descompacte e entre no projeto

```bash
unzip portfolio-data-ai-engineer-starter.zip
cd portfolio-data-ai-engineer-starter
```

Se o ZIP criar uma pasta externa com o mesmo nome, entre nela antes de continuar.

## 2. Inicie o Git

```bash
git init
git add .
git commit -m "chore: initialize portfolio specification and starter"
```

Depois crie o repositório remoto quando quiser e conecte-o ao GitHub.

## 3. Instale as dependências

```bash
npm install
```

Essa primeira instalação deve criar `package-lock.json`. Revise e faça commit do lockfile.

```bash
git add package-lock.json
git commit -m "chore: lock dependencies"
```

Depois disso, altere o workflow de CI de `npm install` para `npm ci`.

## 4. Verifique o starter

```bash
npm run check
npm run build
npm run dev
```

Abra `http://localhost:3000`.

## 5. Inicie o Claude Code

No diretório raiz:

```bash
claude
```

## 6. Prompt recomendado para a primeira sessão

Cole o texto abaixo:

---

Leia integralmente `CLAUDE.md` e, na ordem indicada nele, a constituição, SPEC, PLAN, TASKS, copy deck e content backlog.

Depois:

1. faça uma auditoria curta do starter atual antes de modificar código;
2. compare a implementação existente com a SPEC;
3. execute apenas as tarefas necessárias para fechar P0 e estabilizar a fundação;
4. rode typecheck e build;
5. corrija erros encontrados;
6. não invente nenhum dado ausente;
7. não adicione backend, CMS, banco ou bibliotecas grandes;
8. preserve o posicionamento `Data & AI Engineer`;
9. mantenha o projeto preparado para inglês futuro, sem exibir seletor PT/EN agora;
10. ao concluir P0, atualize `tasks.md` somente para tarefas realmente verificadas como prontas.

Se encontrar uma decisão de produto/branding que altere a constituição, não decida sozinho: exponha a questão. Para decisões técnicas pequenas, reversíveis e compatíveis com a constituição, decida e documente.

Não avance automaticamente para redesign completo. Primeiro quero uma base que instala, compila e respeita a especificação.

---

## 7. Segunda sessão sugerida

Quando P0 estiver estável:

> Leia o estado atual, `docs/design-system.md`, a SPEC e as tarefas P1–P4. Implemente/refine o sistema visual, Hero, trajetória e capacidades. Preserve o conteúdo centralizado e não invente assets ou links ausentes. Ao final, valide desktop/mobile, light/dark, typecheck e build e atualize apenas as tarefas comprovadamente concluídas.

## 8. Terceira sessão sugerida

> Trabalhe nas tarefas P5–P8: projeto principal, cards secundários e Contact Dock. Use `docs/copy-deck.md` como fonte editorial e `docs/content-backlog.md` como lista explícita do que ainda não existe. Não crie botões falsos.

## 9. Quando os assets reais estiverem disponíveis

Entregue ao Claude Code:

- foto;
- CV;
- URL do vídeo;
- LinkedIn;
- GitHub;
- Calendly;
- e-mail;
- WhatsApp;
- screenshots;
- diagrama;
- árvore de decisão.

Peça para atualizar primeiro `src/content/pt.ts` e `docs/content-backlog.md`, e só depois adaptar a UI.

## 10. Regra prática

O Claude Code deve tratar os documentos como especificação e o código como implementação.

Quando houver conflito:

1. constituição;
2. SPEC;
3. decisão registrada;
4. conteúdo confirmado;
5. implementação atual.

Não corrigir conflito silenciosamente se ele mudar o produto.
