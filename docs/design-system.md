# Design System — direção visual

## Conceito

Uma única identidade com duas expressões:

### Light mode
Currículo executivo moderno:
- claro;
- minimalista;
- espaçoso;
- tipografia forte;
- bordas discretas;
- fotografia humana;
- baixa ornamentação.

### Dark mode
Produto tecnológico corporativo:
- fundo escuro;
- contraste alto;
- painéis sutis;
- detalhes técnicos discretos;
- sem estética hacker/cyberpunk;
- sem neon dominante.

## Princípios

- conteúdo > decoração;
- hierarquia clara;
- poucas cores;
- foco visível;
- hover discreto;
- movimento opcional e curto;
- respeitar `prefers-reduced-motion`;
- cards não devem parecer dashboard SaaS genérico.

## Tipografia

V1 pode usar stack de sistema para performance:

`ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`

Uma fonte customizada só deve ser adicionada se melhorar claramente a identidade.

## Layout

- largura de conteúdo: aproximadamente 1120–1200px;
- padding móvel generoso;
- seções com espaçamento vertical grande;
- hero em duas colunas no desktop;
- uma coluna no mobile;
- projeto principal ocupa maior área visual;
- projetos secundários em grid.

## Contact Dock

Desktop:
- posição fixa inferior direita;
- três ações;
- tooltips/rótulos claros;
- não cobrir conteúdo.

Mobile:
- botão compacto;
- expandir ações;
- respeitar safe areas.

## Acessibilidade

- não depender de cor para status;
- foco visível;
- ícone sempre acompanhado por `aria-label`;
- links externos identificáveis;
- headings em hierarquia correta.
