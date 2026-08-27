# SPEC — Portfólio Data & AI Engineer V1

## Status

Proposta aprovada conceitualmente. Conteúdo pessoal complementar ainda pendente.

## Problema

Currículos tradicionais descrevem competências, mas não permitem demonstrar imediatamente produtos, arquitetura, código e decisões de engenharia.

O portfólio deve reduzir essa lacuna e permitir que diferentes públicos aprofundem no nível adequado.

## Objetivo da V1

Publicar um site responsivo em português que:

1. apresente Douglas como Data & AI Engineer;
2. sintetize sete anos de trajetória em TI;
3. explique o que ele sabe construir, não apenas quais ferramentas conhece;
4. destaque a Plataforma de Atendimento com IA como principal prova técnica;
5. mostre o projeto de Engenharia de Dados no GCP como trabalho em desenvolvimento;
6. registre o próprio portfólio como projeto secundário;
7. facilite contato por Calendly, e-mail e WhatsApp;
8. ofereça GitHub, LinkedIn e CV;
9. tenha light/dark mode persistente;
10. esteja preparado para PT/EN numa fase posterior.

## Arquitetura de informação

### Header
- nome;
- título Data & AI Engineer;
- âncoras das 3 seções;
- GitHub;
- LinkedIn;
- theme toggle;
- espaço arquitetural futuro para PT/EN.

### 01 — Quem sou / trajetória
- hero;
- foto;
- posicionamento;
- CTA para projetos;
- CTA para vídeo de 1 minuto;
- CTA para CV;
- linha do tempo profissional;
- formação e idioma.

### 02 — O que sei construir
Blocos por capacidade:
- Aplicações de IA;
- Engenharia de Dados;
- Backend e APIs;
- Engenharia de software assistida por IA;
- Cloud, Analytics e plataformas;
- Produção, governança e contexto corporativo.

### 03 — O que já construí
- projeto featured: Plataforma de Atendimento com IA;
- card: Engenharia de Dados no GCP — Em desenvolvimento;
- card secundário: este portfólio;
- links apenas quando reais.

### Footer
- LinkedIn;
- GitHub;
- CV;
- e-mail;
- identificação profissional.

### Contact Dock
Desktop:
- Calendly;
- E-mail;
- WhatsApp.

Mobile:
- controle compacto que expande as três opções.

## Requisitos funcionais

### RF-01 Theme
O usuário pode alternar tema claro/escuro.
A preferência é persistida localmente.
Na primeira visita, respeitar preferência do sistema.

### RF-02 Navegação
Links internos do header levam às três seções.

### RF-03 Conteúdo opcional
Botões externos são renderizados apenas se houver URL/configuração real.

### RF-04 Projetos
Cards suportam estados:
- `production`;
- `development`;
- `case-study`.

### RF-05 Estudos de caso
Cada projeto relevante pode ter página própria.

### RF-06 Contato
Quando configurado:
- Calendly abre em nova aba;
- WhatsApp usa link `wa.me` com texto pré-preenchido;
- e-mail usa `mailto:` com assunto e corpo pré-preenchidos.

### RF-07 CV
Quando arquivo existir, CTA permite abrir/baixar PDF.

### RF-08 Vídeo
Quando URL existir, CTA abre vídeo de apresentação no YouTube em nova guia.

## Requisitos não funcionais

- sem backend;
- export estático;
- mobile-first;
- acessível por teclado;
- contraste adequado nos dois temas;
- sem conteúdo dependente de JavaScript para ser compreendido;
- HTML semântico;
- build determinístico via lockfile;
- sem secrets no repositório;
- imagens otimizadas para web;
- sem autoplay de vídeo;
- sem iframe pesado na hero;
- sem trackers na V1.

## Critérios de sucesso

A homepage deve permitir que alguém identifique em até ~30 segundos:

- quem é Douglas;
- cargo-alvo;
- experiência aproximada;
- áreas de capacidade;
- um projeto de IA em produção;
- como aprofundar;
- como entrar em contato.

## Fora de escopo

Ver `docs/constitution.md`.
