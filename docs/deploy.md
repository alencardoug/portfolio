# Deploy — Firebase Hosting

**Alvo:** `https://portfolio-douglas-alencar.web.app`
**Projeto/site Firebase:** `portfolio-douglas-alencar`

O site é um **export estático** do Next.js (`output: "export"` → diretório `out/`).
Sem SSR, sem Cloud Functions. `firebase.json` já está configurado no repo
(`public: "out"`, `cleanUrls`, `trailingSlash`, cache headers).

O deploy é por GitHub Actions:

| Workflow | Quando | O quê |
|---|---|---|
| `.github/workflows/firebase-hosting-merge.yml` | push / merge em `main` | deploy no canal **`live`** (produção) |
| `.github/workflows/firebase-hosting-pull-request.yml` | pull request | deploy num **canal de preview**; a URL é comentada na PR |

Os dois foram gerados por `firebase init hosting:github` e usam o secret
`FIREBASE_SERVICE_ACCOUNT_PORTFOLIO_DOUGLAS_ALENCAR`, que o mesmo comando gravou
no repositório automaticamente (via API do GitHub — nada manual).

---

## Passo a passo (só na primeira vez)

Pré-requisito: `npm i -g firebase-tools` && `firebase login`.

### 1. Criar o projeto Firebase

```bash
firebase projects:create portfolio-douglas-alencar --display-name "Portfólio Douglas Alencar"
```

(ou pelo console: <https://console.firebase.google.com> → *Add project* →
nome exato `portfolio-douglas-alencar`).

### 2. `firebase init hosting:github`  — feito

Já executado. Gerou os dois workflows acima e o secret
`FIREBASE_SERVICE_ACCOUNT_PORTFOLIO_DOUGLAS_ALENCAR`.

Se ele tiver criado só o de PR (você respondeu **No** para o deploy automático
no merge), o `firebase-hosting-merge.yml` deste repo cobre o `live`.

**Confira** em GitHub → repo → *Settings* → *Secrets and variables* → *Actions*
que o secret `FIREBASE_SERVICE_ACCOUNT_PORTFOLIO_DOUGLAS_ALENCAR` existe.

### 3. `.firebaserc` local

```bash
cp .firebaserc.example .firebaserc
```

(`.firebaserc` está no `.gitignore` — é local. Se o `firebase init` já criou,
está feito.)

### 4. Primeiro deploy manual (validar antes do CI)

```bash
npm ci
npm run build
firebase deploy --only hosting
```

Abra `https://portfolio-douglas-alencar.web.app` e confira: home, tema claro/escuro,
as 3 páginas de projeto, uma rota inexistente (404), e o preview de link (Open Graph)
colando a URL num chat.

### 5. Daqui pra frente

- Push/merge em `main` → deploy automático para produção.
- Cada PR ganha uma URL de preview no comentário.
- SSL do `*.web.app` é automático.

---

## Domínio próprio (quando decidir)

Console → *Hosting* → *Add custom domain*. Depois:
- adicionar `sitemap.xml` e `robots.txt` (hoje omitidos porque dependem da URL final);
- atualizar `metadataBase` em `src/app/layout.tsx` e os `canonical`.
