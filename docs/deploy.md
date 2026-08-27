# Deploy — Firebase Hosting

Alvo: **`https://portfolio-douglas-alencar.web.app`**
Projeto/site Firebase: **`portfolio-douglas-alencar`**

O site é um **export estático** do Next.js (`output: "export"` → diretório `out/`).
Sem SSR, sem Cloud Functions. `firebase.json` já está configurado
(`public: "out"`, `cleanUrls`, `trailingSlash`, cache headers).

O workflow `.github/workflows/deploy.yml` faz o resto automaticamente:
- **push em `main`** → deploy para o canal `live`;
- **pull request** → deploy para um canal de preview (URL comentada na PR).

Falta só o que exige a sua conta Google. Uma vez feito, nunca mais.

---

## Passo a passo (só na primeira vez)

Pré-requisito local: `npm i -g firebase-tools` e `firebase login`.

### 1. Criar o projeto Firebase

```bash
firebase projects:create portfolio-douglas-alencar --display-name "Portfólio Douglas Alencar"
```

(ou pelo console: https://console.firebase.google.com → Add project →
nome exato `portfolio-douglas-alencar`).

### 2. Ativar o Hosting e vincular o repositório de CI

```bash
firebase init hosting:github
```

Responda:
- **Which Firebase project?** → `portfolio-douglas-alencar`
- **What do you want to use as your public directory?** → `out`
- **Configure as a single-page app?** → **No**
- **Set up automatic builds and deploys with GitHub?** → **Yes**
- **For which GitHub repository?** → `alencardoug/portfolio`
- **workflow to run a build script before every deploy?** → `npm ci && npm run build`
- **automatic deployment to your site's live channel on merge?** → pode dizer **No**
  (o workflow deste repo já cuida disso — evita workflow duplicado).

Isso cria a service account e grava o secret
`FIREBASE_SERVICE_ACCOUNT_PORTFOLIO_DOUGLAS_ALENCAR` no repositório.

> **Ajuste único:** o `deploy.yml` deste repo espera o secret com o nome
> `FIREBASE_SERVICE_ACCOUNT`. Ou renomeie o secret gerado para `FIREBASE_SERVICE_ACCOUNT`,
> ou edite as duas ocorrências de `secrets.FIREBASE_SERVICE_ACCOUNT` no `deploy.yml`
> para o nome que o `firebase init` criou. Se o `firebase init` também tiver criado
> `.github/workflows/firebase-hosting-*.yml`, apague esses arquivos — o `deploy.yml`
> já cobre live e preview.

### 3. `.firebaserc` local

```bash
cp .firebaserc.example .firebaserc
```

(`.firebaserc` está no `.gitignore` — é local.)

### 4. Primeiro deploy manual (para validar antes do CI)

```bash
npm ci
npm run build
firebase deploy --only hosting
```

Abra `https://portfolio-douglas-alencar.web.app` e confira:
home, tema claro/escuro, as 3 páginas de projeto, uma rota inexistente (404),
e o preview de link (Open Graph) colando a URL num chat.

### 5. Daqui pra frente

- Merge de PR em `main` → deploy automático para produção.
- Cada PR ganha uma URL de preview no comentário.
- SSL do `*.web.app` é automático.

---

## Domínio próprio (quando decidir)

`firebase hosting:sites` / console → Hosting → Add custom domain. Depois:
adicionar `sitemap.xml` e `robots.txt` (hoje omitidos porque dependem da URL final),
atualizar `metadataBase` em `src/app/layout.tsx` e os `canonical`.
