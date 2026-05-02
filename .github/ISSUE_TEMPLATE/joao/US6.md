---
labels: User Story 👤
title: US06
Sprint: SPRINT 1
Story Points: 4
---

## Epic

Relacionado ao épico: [E03](https://github.com/books-project-organization/SPRINT/blob/main/documentacao/E03.md)

------------------------------------------------------------------------

## História de Usuário - US06

Como estudante do ensino médio,
quero encontrar livros escolares de forma mais barata e acessível,
para conseguir os materiais necessários para meus estudos.

------------------------------------------------------------------------

## 📝 Descrição
<!--Explique com mais detalhes o contexto da funcionalidade.-->
A plataforma deve possibilitar a busca por livros com base em critérios como título, disciplina ou série, além de permitir a aplicação de filtros (como menor preço e localização). Os resultados devem apresentar alternativas mais baratas, incluindo livros usados, promoções ou diferentes fornecedores.

O objetivo é facilitar o acesso a materiais escolares para estudantes de baixa renda, garantindo que consigam adquirir os livros necessários para seus estudos de maneira prática, eficiente e com menor custo.

------------------------------------------------------------------------

## 👇 Critérios de Aceitação

- [ ] Dado que o usuário selecione a opção "menor preço", quando a busca for processada, então os livros devem ser exibidos em ordem crescente de valor final
- [ ] Dado que um livro possua desconto, quando exibido na lista, então o sistema deve considerar o preço promocional para a ordenação
- [ ] Dado um grande volume de dados, quando a ordenação for aplicada, então o sistema deve processar a informação sem degradação de performance
- [ ] Dado que o usuário interaja com o filtro de preço, quando selecionado, então a interface deve responder de forma imediata e correta

------------------------------------------------------------------------

## Regras de Negócio (se houver)

- Os preços apresentados devem ser inferiores ou competitivos em relação ao valor de mercado.
- A plataforma deve identificar e exibir a origem do livro: Novos, Usados, Promoções ou Vendedores parceiros.
