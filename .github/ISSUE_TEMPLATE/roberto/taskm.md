---
about: Criar uma tarefa técnica relacionada a uma User Story
labels: task
name: Task
title: T03 – Criar busca e filtragem de livros didáticos e materiais de apoio
---

## 📌 User Story Relacionada

[#User Story 02](https://github.com/books-project-organization/books-project-2026/blob/main/.github/ISSUE_TEMPLATE/roberto/user_story2.md) - Como Estudante que se prepara para o vestibular, quero Encontrar livros didáticos e materiais de apoio disponíveis em sebos ou pontos de troca para ter acesso a materiais de estudo atualizados com menor custo.
Epic: E02 - Trocas e Doações (ou E03 - Busca e Localização)

------------------------------------------------------------------------

## 📝 Descrição

Desenvolver a funcionalidade de busca, listagem e filtragem de livros didáticos e de preparação para o vestibular. O sistema deve permitir que o usuário localize materiais específicos disponíveis em sebos parceiros ou pontos de troca, priorizando a exibição de itens de baixo custo ou gratuitos.

------------------------------------------------------------------------

## 🔨 Subtarefas

- [ ] Criar interface da barra de pesquisa e filtros avançados (matéria, tipo de material, sebo vs. troca)
- [ ] Desenvolver endpoint (API) no backend para consultar o catálogo de livros filtrando por categoria (didáticos/vestibular)
- [ ] Implementar a exibição dos resultados em formato de lista e/ou integração com o mapa de localização
- [ ] Criar a tela de detalhes do material, destacando o custo, estado de conservação e endereço de retirada
- [ ] Desenvolver o estado de tela vazia (empty state) caso nenhum material seja encontrado na região

------------------------------------------------------------------------

## ✅ Critérios de Conclusão

- [ ] O usuário consegue pesquisar por título, matéria ou tipo de material de apoio
- [ ] O sistema filtra e exibe corretamente apenas os itens classificados como didáticos/vestibular
- [ ] O usuário consegue identificar visualmente a diferença entre materiais em sebos (menor custo) e pontos de troca (gratuitos)
- [ ] O endereço e as informações do sebo/ponto de troca são exibidos sem erros no card do livro
- [ ] Buscas sem correspondência exibem uma mensagem amigável sugerindo expandir a área de busca

------------------------------------------------------------------------

## Campos recomendados no Board
(opcional)
