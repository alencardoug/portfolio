# Boneco V2

O boneco é montado na página em duas camadas: **figura de palito** + **rosto sem
fundo**, encaixado pelo queixo no topo do pescoço. Os dois vêm de fontes locais
(não versionadas) e são processados por um único comando:

```bash
npm run boneco      # = uv run scripts/v2-boneco/boneco.py
```

Depois, confira em `/v2/boneco/` (`npm run build && npm start`) e, se quiser,
em `DOCS_PROJETO/boneco_v2/_conferencia.png` (rostos em fundo claro e escuro).

## Trocar um rosto

1. Coloque a foto em `~/Imagens/projetos/portfolio/v2/rosto_a_cortar_para_boneco/`.
   O nome do arquivo vira o id (`serio_lado.jpeg` → `serio-lado`). Para substituir,
   use o mesmo nome.
2. `npm run boneco`.
3. Se o id for novo, inclua-o em `bonecoRotacao` (ou `bonecoSorriso`) em
   `src/content/v2.ts`.

O script acha o rosto sozinho (landmarks do MediaPipe), remove o fundo (rembg),
corta tudo abaixo do contorno do maxilar (sem pescoço, com queixo, barba e
orelhas) e enquadra a cabeça. Funciona melhor com o rosto inteiro visível e sem
nada cobrindo o queixo.

## Trocar a figura de palito

1. Salve o desenho como `DOCS_PROJETO/boneco_v2/figuras/<pose>.png`
   (`em-pe.png`, `mesa.png`). Fundo branco ou transparente; no Excalidraw,
   exporte em PNG com escala 3× para o traço ficar nítido. Hoje as duas são
   recortes dos mockups `tela1` e `tela6` (23/10/2026), sem as caixas.
2. A cabeça precisa ser um **círculo fechado**: o script o encontra, apaga só o
   círculo (o pescoço fica inteiro) e põe o rosto no lugar.
3. `npm run boneco`.

O pescoço sobe por trás do rosto até `PESCOCO_SOBE` raios acima do queixo; se o
desenho for mais curto, o script o prolonga reto, repetindo o traço. Assim o
pescoço encosta em qualquer rosto, inclusive nos deslocados de lado.

Uma pose nova (outro nome de arquivo) também precisa entrar no tipo
`BonecoPose` em `src/content/v2.ts` e, se a cabeça não ficar logo abaixo do
círculo, em `QUEIXO_POSE` no script.

## Ajustes finos

Em `src/content/v2.ts`:

- `bonecoEncaixe.alturaCabeca`: tamanho da cabeça-foto, em raios do círculo desenhado;
- `bonecoIntervaloMs`: tempo entre trocas de rosto;
- `bonecoAjusteRosto`: posição de um rosto específico, em fração da largura
  (`x`, positivo = direita) e da altura (`y`, positivo = para baixo) da cabeça.
  Não precisa rodar o script; basta rebuildar.

Em `scripts/v2-boneco/boneco.py` (pede `npm run boneco`):

- `QUEIXO_POSE`: altura do queixo abaixo do centro do círculo, em raios, por
  pose. Mantém a cabeça na altura aprovada em relação aos ombros: em pé = 1.9
  (o desenho ganhou pescoço mais longo, a cabeça não subiu com ele), mesa = 1.2;
- `PESCOCO_SOBE`: quanto o pescoço sobe por trás do rosto, acima do queixo;
- `CORRIGIR_COR`: rostos cuja cor de pele é levada à média de outros (foto
  amarelada por luz quente, por exemplo), cada um com sua lista de referência.
  Hoje: `sorrindo-reto` (média dos 3 sérios) e `serio-torto` (média de
  `serio-lado` e `serio-inclinado`).

Os arquivos gerados levam hash no nome (`rosto-serio-lado.4bee0c93.webp`), então
trocar uma foto nunca esbarra no cache do navegador/Firebase. Não edite
`src/content/v2-boneco.json` à mão: ele é reescrito a cada execução.

Na primeira execução, o `uv` instala as dependências e são baixados os modelos
de remoção de fundo (~180 MB, em `~/.u2net`) e de landmarks (~4 MB, em
`~/.cache/boneco-v2`).
