---
labels: User Story 👤
title: US02
Sprint: SPRINT 1
Story Points: 2
---

## Epic

Relacionado ao épico: [E03](https://github.com/books-project-organization/books-project-2026/blob/main/.github/ISSUE_TEMPLATE/E03.md)

------------------------------------------------------------------------

## História de Usuário - US02

Como estudante que se prepara para o vestibular,
quero encontrar livros didáticos e materiais de apoio em sebos ou pontos de troca,
para ter acesso a materiais de estudo atualizados com menor custo.

------------------------------------------------------------------------

## 📝 Descrição
<!--Explique com mais detalhes o contexto da funcionalidade.-->
A plataforma deve permitir que estudantes localizem facilmente sebos parceiros e pontos de troca específicos que possuam acervo focado em preparação para o vestibular e Ensino Médio, permitindo o acesso a materiais essenciais de forma gratuita ou a baixo custo.

------------------------------------------------------------------------

## 👇 Critérios de Aceitação

- [ ] Dado que o usuário acesse o campo de busca, quando aplicar o filtro, então o sistema deve permitir filtrar especificamente pela categoria "Vestibular/Ensino Médio"
- [ ] Dado que a lista de resultados seja exibida, quando o usuário visualizar os itens, então deve haver uma diferenciação visual clara entre livros para "Doação" (grátis) e "Compra" (baixo custo)
- [ ] Dado que um local seja selecionado, então o sistema deve exibir informações detalhadas como endereço, horário de funcionamento e regras de troca/doação
- [ ] Dado que não existam materiais na região, quando a busca for processada, então o sistema deve sugerir a ampliação do raio de busca através de uma mensagem amigável

------------------------------------------------------------------------

## Regras de Negócio (se houver)

- Apenas estabelecimentos parceiros validados ou pontos de troca oficiais podem ser listados.
- Livros classificados como "Doação" não podem ter preço atrelado na plataforma.
- O acesso à localização do estudante só ocorrerá mediante consentimento explícito (LGPD).

------------------------------------------------------------------------

## Definition of Done

-   [ ] Funcionalidade de filtro por categoria implementada e integrada ao banco de dados.
-   [ ] Interface de resultados diferenciando doações e compras construída e responsiva.
-   [ ] Testes unitários e de integração aprovados.
-   [ ] Documentação técnica e manual de uso atualizados.
-   [ ] Revisão de código concluída por pelo menos um desenvolvedor pareado.

