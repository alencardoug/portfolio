# Requisição do Canvas de Projeto

## 1. Descrição do Documento

Este documento apresenta o **Canvas de Projeto** da iniciativa **Portfólio Profissional — Data & AI Engineer**.

Seu objetivo é consolidar, em visão executiva e de governança, os principais elementos necessários para orientar priorização, execução, acompanhamento e tomada de decisão.

O Canvas deve ser utilizado em conjunto com a Constitution, SPEC, Plano, Backlog, decisões arquiteturais e Termo de Abertura do projeto.

---

## 2. Identificação

| Campo | Informação |
|---|---|
| **Nome do projeto** | Portfólio Profissional — Data & AI Engineer |
| **Versão** | 1.0 |
| **Data** | 27/08/2026 |
| **Status** | Planejado / Em iniciação |
| **Owner** | Douglas Alencar |
| **Público-alvo primário** | Recrutadores |
| **Público-alvo secundário** | Gestores de Dados/IA, líderes técnicos, tech leads e engenheiros |
| **Idioma da V1** | Português brasileiro |
| **Evolução prevista** | Português + inglês |

---

## 3. Meta Estratégica

Transformar o portfólio em um **ativo profissional de conversão**, capaz de aumentar a probabilidade de:

- contato de recrutadores;
- convite para entrevistas;
- avanço em processos seletivos;
- reconhecimento do posicionamento Data & AI Engineer;
- validação técnica das experiências e produtos apresentados.

A meta não é maximizar tráfego ou audiência, mas **qualificar a percepção profissional e facilitar a decisão de avançar com uma conversa**.

---

## 4. Times e Pessoas Envolvidas

### Time do projeto

**Douglas Alencar**

Responsabilidades acumuladas:

- Sponsor;
- Owner;
- Product Owner;
- responsável pelo conteúdo;
- responsável técnico;
- líder de governança;
- DPO / Encarregado;
- Data Custodian;
- responsável pela aprovação;
- responsável pelo deploy e manutenção.

### Apoio tecnológico

Ferramentas de desenvolvimento assistido:

- Claude Code;
- Codex.

Coding agents são ferramentas de execução e assistência e **não substituem a responsabilidade e aprovação do Owner**.

---

## 5. Objetivo

Criar e publicar um currículo web profissional que:

- apresente Douglas como Data & AI Engineer;
- demonstre trajetória e maturidade corporativa;
- mostre o que sabe construir;
- apresente projetos próprios e evidências técnicas;
- permita aprofundamento técnico progressivo;
- facilite contato profissional;
- seja simples, seguro, rápido e de baixo custo;
- possa evoluir posteriormente para inglês.

---

## 6. Justificativa

O currículo tradicional apresenta experiência e competências, porém não demonstra adequadamente:

- produtos funcionando;
- arquitetura;
- código;
- decisões de engenharia;
- testes;
- deploy;
- qualidade técnica;
- processo de desenvolvimento.

O portfólio complementará o currículo tradicional ao converter capacidades declaradas em **evidências verificáveis**.

Também funcionará como ponto central para direcionamento de recrutadores e gestores provenientes de:

- currículo PDF;
- LinkedIn;
- GitHub;
- candidaturas;
- networking;
- mensagens diretas;
- processos seletivos.

---

## 7. Benefícios Esperados

### Benefícios profissionais

- posicionamento claro como Data & AI Engineer;
- diferenciação em relação a currículos exclusivamente textuais;
- demonstração pública de capacidade de execução;
- apresentação equilibrada de Data + AI;
- facilitação da avaliação técnica;
- menor fricção para contato;
- centralização da presença profissional.

### Benefícios técnicos

- demonstração de desenvolvimento de produto;
- uso de SDD;
- uso controlado de coding agents;
- versionamento;
- CI/CD;
- deploy;
- documentação;
- acessibilidade;
- design responsivo;
- decisões arquiteturais justificadas.

### Benefícios de governança

- conteúdo centralizado;
- rastreabilidade de decisões;
- distinção entre informação confirmada e pendente;
- controle sobre dados publicados;
- backlog explícito.

---

## 8. Características do Produto / Serviço

### Experiência

- aplicação web pública;
- responsiva;
- mobile-first;
- light/dark mode;
- navegação simples;
- progressive disclosure;
- foco em clareza e profissionalismo.

### Estrutura da homepage

1. **Quem sou / trajetória**
2. **O que sei construir**
3. **O que já construí**

### Conteúdo

- nome;
- posicionamento;
- resumo profissional;
- carreira;
- formação;
- experiência internacional;
- inglês;
- capacidades;
- projetos;
- estudos de caso;
- contatos.

### Integrações

- YouTube;
- LinkedIn;
- GitHub;
- Calendly;
- e-mail via `mailto:`;
- WhatsApp via `wa.me`;
- CV em PDF.

### Arquitetura

- Next.js;
- React;
- TypeScript;
- Tailwind CSS;
- export estático;
- Firebase Hosting;
- GitHub Actions;
- sem backend na V1.

---

## 9. Stakeholders

| Papel | Stakeholder | Interesse / Responsabilidade |
|---|---|---|
| **Patrocinador** | Douglas Alencar | Autorizar e priorizar o projeto |
| **Cliente / beneficiário principal** | Douglas Alencar | Obter benefício profissional |
| **Usuário primário** | Recrutadores | Avaliar rapidamente o perfil |
| **Usuário secundário** | Gestores de Dados/IA | Avaliar adequação profissional e técnica |
| **Usuário técnico** | Tech leads / engenheiros | Aprofundar evidências, arquitetura e código |
| **Equipe** | Douglas Alencar | Planejar, validar, desenvolver e publicar |
| **Resistente / crítico interno** | Douglas Alencar | Questionar complexidade, conteúdo e valor de cada decisão |
| **DPO / Encarregado** | Douglas Alencar | Validar publicação de dados pessoais |
| **Data Custodian** | Douglas Alencar | Manter integridade do conteúdo publicado |

### Observação

Nesta fase, não há stakeholder externo com poder formal de decisão. Feedback de recrutadores, gestores e profissionais técnicos poderá orientar versões futuras.

---

## 10. Premissas

- o portfólio será público;
- a V1 será em português;
- o site poderá evoluir para português e inglês;
- Douglas fornecerá foto, CV e links reais;
- a Plataforma de Atendimento com IA permanecerá como principal case;
- o projeto GCP será desenvolvido e publicado futuramente;
- serviços externos de contato atenderão à V1;
- Firebase Hosting será suficiente para a arquitetura inicial;
- não haverá necessidade de persistência no servidor;
- todo conteúdo profissional publicado será previamente aprovado.

---

## 11. Restrições

### Técnicas

- static-first;
- sem backend inicial;
- sem banco;
- sem CMS;
- sem autenticação;
- baixo número de dependências;
- evitar arquitetura desnecessária.

### Financeiras

- preferência por custo zero ou muito baixo;
- não contratar serviços pagos sem benefício claro.

### Privacidade

- não publicar dados pessoais desnecessários;
- não publicar informações confidenciais;
- não publicar conteúdo de terceiros sem autorização;
- não incluir secrets ou credenciais.

### Escopo

- evitar funcionalidades que não contribuam para contratação;
- evitar transformar o portfólio em laboratório de tecnologias sem finalidade.

---

## 12. Riscos

| Risco | Probabilidade | Impacto | Resposta |
|---|---:|---:|---|
| Informação demais na homepage | Média | Alta | Progressive disclosure |
| Site visualmente sofisticado, mas pouco objetivo | Média | Alta | Priorizar conteúdo e CTA |
| Site excessivamente técnico para RH | Média | Alta | Camadas de informação |
| Dados profissionais desatualizados | Média | Alta | Fonte única + revisão |
| Link quebrado | Média | Média | Testes + renderização condicional |
| WhatsApp exposto a spam | Média | Média | Avaliar número profissional |
| Projeto GCP permanecer incompleto | Média | Baixa/Média | Status “Em desenvolvimento” |
| Métricas do case ficarem desatualizadas | Alta | Média | Revalidar antes de releases |
| Dependências desnecessárias | Média | Média | Governança técnica |
| Introdução prematura de backend | Baixa | Média | Constitution + ADR |
| Conteúdo confidencial ser publicado | Baixa | Muito alta | Revisão obrigatória de privacidade |
| Site não transmitir senioridade | Média | Alta | Foco em decisões, evidências e contexto |
| Layout não funcionar em mobile | Baixa/Média | Alta | Mobile-first + testes |
| Versão em inglês aumentar manutenção | Média | Média | Internacionalização apenas na fase adequada |

---

## 13. Escopo — O que Será Feito

### Produto

- homepage profissional;
- header;
- hero;
- foto profissional;
- trajetória;
- competências;
- projetos;
- estudos de caso;
- footer;
- Contact Dock.

### Recursos

- light mode;
- dark mode;
- persistência do tema;
- navegação por âncoras;
- páginas de projetos;
- links externos;
- CV PDF;
- vídeo no YouTube;
- Calendly;
- e-mail;
- WhatsApp;
- LinkedIn;
- GitHub.

### Projetos

- Plataforma de Atendimento com IA;
- Engenharia de Dados no GCP;
- próprio portfólio.

### Engenharia

- Git;
- documentação;
- SDD;
- componentes reutilizáveis;
- conteúdo centralizado;
- CI;
- build estático;
- testes;
- deploy.

### Qualidade

- responsividade;
- acessibilidade;
- performance;
- SEO básico;
- verificação de links;
- revisão editorial;
- revisão de privacidade.

---

## 14. Não Escopo

- backend;
- banco de dados;
- autenticação;
- CMS;
- chatbot;
- área do usuário;
- blog;
- newsletter;
- comentários;
- portal administrativo;
- CRM;
- captura própria de leads;
- analytics avançado;
- personalização por usuário;
- microsserviços;
- SSR;
- projetos corporativos confidenciais;
- certificados na primeira entrega;
- versão em inglês na V1.

---

## 15. Entregas

### E01 — Governança e especificação
- Constitution;
- Termo de Abertura;
- Canvas;
- SPEC;
- Plano;
- Tasks;
- Decisions/ADR;
- backlog de conteúdo.

### E02 — Fundação técnica
- repositório;
- Next.js;
- TypeScript;
- Tailwind;
- estrutura de conteúdo;
- build;
- CI.

### E03 — Sistema visual
- tema claro;
- tema escuro;
- componentes;
- responsividade;
- acessibilidade visual.

### E04 — Homepage
- Quem sou / trajetória;
- O que sei construir;
- O que já construí.

### E05 — Estudos de caso
- Plataforma de Atendimento;
- GCP;
- Portfólio.

### E06 — Assets profissionais
- foto;
- CV;
- vídeo;
- screenshots;
- diagramas.

### E07 — Contato e perfis
- Calendly;
- e-mail;
- WhatsApp;
- GitHub;
- LinkedIn.

### E08 — Qualidade
- testes;
- acessibilidade;
- performance;
- SEO;
- revisão de conteúdo.

### E09 — Publicação
- Firebase;
- domínio;
- SSL;
- produção.

### E10 — Evolução internacional
- preparação para inglês;
- definição das rotas;
- tradução futura.

---

## 16. Datas e Marcos

> As datas representam a governança inicial e devem ser atualizadas com base na execução real.

| Marco | Data / Situação |
|---|---|
| Definição conceitual do portfólio | Concluída — agosto/2026 |
| Geração do starter técnico | Concluída — 27/08/2026 |
| Termo de Abertura e Canvas | 27/08/2026 |
| Fundação técnica / P0 | Próximo marco |
| Sistema visual e homepage | A planejar |
| Inclusão dos assets reais | Dependente do Owner |
| QA e revisão | Após implementação funcional |
| Publicação da V1 | A definir |
| Versão em inglês | Fase posterior |

### Regra de cronograma

Não criar datas artificiais apenas para preencher governança. O cronograma deverá evoluir a partir de evidências reais do projeto.

---

## 17. Investimento

### Financeiro

**Meta da V1:** custo inicial e recorrente próximo de zero.

Possíveis custos:

- domínio próprio;
- eventual serviço externo pago no futuro;
- ferramentas já contratadas pelo Owner.

### Infraestrutura prevista

- Firebase Hosting em faixa gratuita/baixo custo;
- GitHub conforme plano disponível;
- Calendly conforme necessidade;
- YouTube para vídeo;
- sem servidor dedicado;
- sem banco;
- sem backend.

### Esforço

O principal investimento será:

- planejamento;
- desenvolvimento;
- produção de conteúdo;
- revisão;
- manutenção.

Claude Code e Codex poderão reduzir trabalho operacional, mantendo validação humana.

---

## 18. Dependências

### Conteúdo

- frase final de posicionamento;
- foto;
- CV PDF;
- vídeo;
- GitHub;
- LinkedIn;
- Calendly;
- e-mail;
- WhatsApp;
- screenshots;
- diagramas;
- árvore de decisão;
- detalhes finais do projeto GCP.

### Técnicas

- Node.js;
- npm;
- Git;
- GitHub;
- Firebase.

### Decisão

- domínio;
- forma de exposição do WhatsApp;
- conteúdos finais;
- entrada da versão em inglês.

---

## 19. Métricas e Indicadores

### Indicadores técnicos

- build bem-sucedido;
- deploy bem-sucedido;
- ausência de links quebrados;
- performance adequada;
- responsividade;
- acessibilidade básica;
- ausência de secrets;
- complexidade coerente com o produto.

### Indicadores de produto

Após publicação, poderão ser observados:

- contatos recebidos após acesso ao portfólio;
- entrevistas originadas após compartilhamento do site;
- feedback qualitativo de recrutadores e gestores;
- interesse nos estudos de caso;
- utilização dos CTAs.

Analytics não é requisito da V1. Caso seja adicionado, deverá ter finalidade clara e revisão de privacidade.

---

## 20. Critérios de Aceite

O projeto estará apto à publicação quando:

1. as três seções principais estiverem completas;
2. o posicionamento estiver claro;
3. a trajetória profissional estiver revisada;
4. o case principal estiver acessível;
5. links públicos estiverem validados;
6. o CV estiver disponível;
7. os mecanismos de contato funcionarem;
8. foto e assets finais estiverem inseridos;
9. light e dark mode funcionarem;
10. mobile e desktop estiverem testados;
11. build e deploy estiverem estáveis;
12. não houver informações inventadas;
13. a privacidade tiver sido revisada;
14. conteúdo e métricas tiverem sido revalidados.

---

## 21. Governança de Mudanças

Uma funcionalidade deverá entrar no escopo quando contribuir para pelo menos um dos objetivos abaixo:

1. aumentar compreensão profissional;
2. aumentar confiança;
3. fornecer evidência;
4. facilitar contato;
5. resolver necessidade técnica real.

Funcionalidades criadas apenas para aumentar complexidade ou quantidade de tecnologias deverão ser rejeitadas ou adiadas.

Mudanças que alterem posicionamento, arquitetura central, privacidade ou escopo principal exigem aprovação explícita do Owner.

---

## 22. Definição de Sucesso

O projeto será considerado bem-sucedido quando o portfólio estiver publicado, tecnicamente estável e cumprir sua função central:

> **Permitir que recrutadores entendam rapidamente quem é Douglas Alencar, que gestores reconheçam sua capacidade de atuar entre Dados e IA e que avaliadores técnicos encontrem evidências concretas suficientes para justificar uma entrevista.**
