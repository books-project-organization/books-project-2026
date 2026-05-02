---
labels: User Story 👤
title: US14
Sprint: SPRINT 1
Story Points: 3
---

## Epic

Relacionado ao épico: [EPICO???](link_em_aberto)

------------------------------------------------------------------------

## História de Usuário - US14

Como professor,
quero encontrar e comparar preços de livros em diferentes sebos,
para poder indicar opções econômicas aos meus alunos.

------------------------------------------------------------------------

## 📝 Descrição
<!--Explique com mais detalhes o contexto da funcionalidade.-->
O objetivo é permitir que o professor (persona) identifique rapidamente qual estabelecimento parceiro oferece o menor preço para um título específico, facilitando a recomendação de materiais acessíveis para turmas escolares ou acadêmicas.

------------------------------------------------------------------------

## 👇 Critérios de Aceitação

- [ ] Dado que o usuário busque por um título, quando o sistema retornar os resultados, então deve exibir o preço praticado em cada sebo cadastrado
- [ ] Dado que o livro esteja disponível em múltiplos locais, quando a lista for exibida, então o sistema deve destacar visualmente a "Melhor Oferta" (opção mais barata)
- [ ] Dado que o usuário escolha um estabelecimento, então o sistema deve fornecer o endereço e contato do sebo para facilitar a indicação aos alunos
- [ ] Dado que um sebo altere o valor, quando a busca for realizada, então o sistema deve refletir o preço atualizado para garantir a precisão da comparação

------------------------------------------------------------------------

## Regras de Negócio (se houver)

- O sistema deve considerar apenas sebos que possuam o livro em estoque imediato para a comparação.
- O destaque de "Melhor Oferta" deve ser automático com base no valor final (incluindo taxas aparentes, se houver).
