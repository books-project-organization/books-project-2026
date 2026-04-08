#  Processos e Qualidade - Projeto Books 2026 - João Carlos

Este documento define os critérios obrigatórios para a movimentação de tarefas no board do GitHub, utilizando a User Story 6 como padrão de referência.

[User Story - 06](https://github.com/books-project-organization/books-project-2026/issues/46)

---

##  Definition of Ready (DoR) - "Pronto para Iniciar"
*Para um card sair de "Backlog" e entrar em "Histórias em Foco", ele deve atender a:*

- [x] **Discussão em Equipe:** Funcionalidade discutida previamente durante as Daily Scrums.
- [x] **Priorização:** Definição conjunta do grau de prioridade e dificuldade.
- [x] **Escopo e Técnica:** Delimitação clara do escopo e levantamento dos requisitos técnicos para implementação.
- [x] **Rastreabilidade:** Existência de documentação clara e coesa.

###  Exemplo de aplicação (User Story 6 - Ensino Médio):
> **Status de Ready:** 
> **Como** estudante do ensino médio, **quero** encontrar livros escolares de forma mais barata e acessível **para** conseguir os materiais necessários para meus estudos.

---

##  Definition of Done (DoD) - "Pronto para Entrega"
*Critérios para um card ser movido para a coluna "Done".*

###  Critérios de Aceitação
- [x] **Ordenação:** Ao selecionar “menor preço”, os livros são exibidos em ordem crescente.
- [x] **Preço Final:** O valor considerado é o preço final (já com descontos).
- [x] **Escalabilidade:** A ordenação funciona para diferentes volumes de dados.
- [x] **Interface:** Resposta correta da interface à seleção dos filtros.
- [x] **Performance:** Ausência de degradação perceptível no sistema.

###  Testabilidade e Funcionalidades
- [x] **Busca por Título:** A plataforma lista os livros conforme o título escolhido.
- [x] **Foco Social:** Listagem de preços obrigatoriamente mais acessíveis que livros originais.
- [x] **Localização:** Filtro de área e integração com o mapa funcionando corretamente.
- [x] **Qualidade:** UX devidamente implementada e código documentado.
