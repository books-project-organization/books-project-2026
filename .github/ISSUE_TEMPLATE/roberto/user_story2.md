---
about: Criar uma nova história de usuário
labels: user-story
name: User Story
title: US03 - Encontrar livros didáticos e de vestibular acessíveis
---

## Epic

Relacionado ao épico 03: [#E03](https://github.com/books-project-organization/books-project-2026/blob/main/.github/ISSUE_TEMPLATE/E03.md)

------------------------------------------------------------------------

## História de Usuário

Como **[ Estudante que se prepara para o vestibular ]**\
quero **[ Encontrar livros didáticos e materiais de apoio disponíveis em sebos ou pontos de troca ]**\
para **[ Para ter acesso a materiais de estudo atualizados com menor custo. ]**.

------------------------------------------------------------------------

## Descrição

A plataforma deve permitir que estudantes localizem facilmente sebos parceiros e pontos de troca específicos que possuam acervo focado em preparação para o vestibular e Ensino Médio, permitindo o acesso a materiais essenciais de forma gratuita ou a baixo custo.

------------------------------------------------------------------------

## Critérios de Aceitação

-   [ ] O usuário deve conseguir filtrar a busca de materiais especificamente pela categoria "Vestibular/Ensino Médio".
-   [ ] Os resultados da busca devem diferenciar visualmente os livros disponíveis para doação (gratuitos) dos livros disponíveis para compra em sebos (baixo custo).
-   [ ] O usuário deve conseguir visualizar o endereço, horário de funcionamento e regras de troca/doação do ponto de coleta ou sebo selecionado.
-   [ ] O sistema deve exibir uma mensagem amigável caso não existam materiais didáticos disponíveis na região do usuário, sugerindo a ampliação do raio de busca.

------------------------------------------------------------------------

## Regras de Negócio

-   Apenas estabelecimentos parceiros validados ou pontos de troca oficiais podem ser listados para garantir a segurança dos estudantes.
-   Livros classificados como "Doação" não podem ter preço atrelado na plataforma.
-   Adequação à LGPD: O compartilhamento de dados de localização do estudante para encontrar pontos próximos só ocorrerá mediante consentimento explícito.

------------------------------------------------------------------------

## Definition of Done

-   [ ] Funcionalidade de filtro por categoria implementada e integrada ao banco de dados.
-   [ ] Interface de resultados diferenciando doações e compras construída e responsiva.
-   [ ] Testes unitários e de integração aprovados.
-   [ ] Documentação técnica e manual de uso atualizados.
-   [ ] Revisão de código concluída por pelo menos um desenvolvedor pareado.

------------------------------------------------------------------------

## Campos recomendados no Board

Tipo: User Story\
Sprint: Sprint 1\
Prioridade: Alta\
Story Points: 5
