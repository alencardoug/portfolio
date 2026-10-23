# CHECKLIST — Critérios de aceitação da V2

Vale por tela (cada PR) e, inteiro, como portão do lançamento.

## Sem rolagem
- [ ] Nenhuma tela principal rola nas resoluções garantidas do `spec.md` (teste automatizado verde, nos dois temas).
- [ ] Nada é cortado: com zoom de 200% ou fonte ampliada, a página rola.
- [ ] Celular deitado e telas abaixo do mínimo continuam usáveis.

## Navegação
- [ ] Cada tela tem URL própria e abre direto pelo link.
- [ ] Voltar do navegador e seta de voltar levam ao nível de cima.
- [ ] Toda tela funciona sem JavaScript (links e conteúdo no HTML).
- [ ] Trilha inexistente cai na 404.
- [ ] Qualquer projeto fica a no máximo 5 cliques da inicial.

## Boneco e movimento
- [ ] Em pé na inicial e nas categorias; à mesa na última tela de caixas; ausente em Sobre mim e nos projetos.
- [ ] A troca de pose não reinicia a rotação de rostos.
- [ ] Flutuação lenta, quase imperceptível.
- [ ] Com `prefers-reduced-motion`: sem flutuação, sem troca automática de rosto, troca de tela sem animação.

## Conteúdo
- [ ] Nenhuma informação profissional inventada; números de texto calculados da árvore.
- [ ] Botões só com URL real; projeto sem link não mostra o botão.
- [ ] Status do projeto visível; demonstração fictícia identificada.
- [ ] Ferramentas de cada projeto conferidas com o estudo de caso.
- [ ] Casos corporativos sem dados de cliente e com publicação autorizada.
- [ ] Nenhum item "em construção" no lançamento.

## Temas
- [ ] Claro e escuro em todas as telas, com a preferência da V1 (`theme`).
- [ ] Sem flash de tema.
- [ ] Contraste AA em caixas, balões, ações e ferramentas.

## Acessibilidade
- [ ] Um `h1` por tela; caixas como links numa lista; seta de voltar com rótulo.
- [ ] Tudo alcançável por teclado, com foco visível; Esc fecha balões.
- [ ] Balões abrem por mouse, foco e toque e não escondem a ação principal.
- [ ] axe sem violações sérias.

## Engenharia
- [ ] `npm run verify` verde.
- [ ] `validarArvore()` passa (sem tela mista; limites de caixas, resumo, dica e stack).
- [ ] Sem nova dependência de runtime (Playwright e axe só em desenvolvimento).
- [ ] `/v2/` com `noindex` até o lançamento.
- [ ] Preview da PR conferido.
