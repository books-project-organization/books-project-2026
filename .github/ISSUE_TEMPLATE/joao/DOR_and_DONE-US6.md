# 📋 Processos e Qualidade - Projeto Books 2026

Este documento define os critérios obrigatórios para a movimentação de tarefas no board do GitHub, utilizando a User Story 6 como padrão de referência.

---

## 🚦 Definition of Ready (DoR) - "Pronto para Iniciar"
*Para um card sair de "Backlog" e entrar em "Histórias em Foco", ele deve atender a:*

- [ ] **Discussão em Equipe:** Funcionalidade discutida previamente durante as Daily Scrums.
- [ ] **Priorização:** Definição conjunta do grau de prioridade e dificuldade.
- [ ] **Escopo e Técnica:** Delimitação clara do escopo e levantamento dos requisitos técnicos para implementação.
- [ ] **Rastreabilidade:** Existência de documentação clara e coesa.

### 🔍 Exemplo Aplicado (User Story 6 - Ensino Médio):
> **Status de Ready:** 
> **Como** estudante do ensino médio, **quero** encontrar livros escolares de forma mais barata e acessível **para** conseguir os materiais necessários para meus estudos.

---

## ✅ Definition of Done (DoD) - "Pronto para Entrega"
*Critérios para um card ser movido para a coluna "Done".*

### 🎯 Critérios de Aceitação
- [ ] **Ordenação:** Ao selecionar “menor preço”, os livros são exibidos em ordem crescente.
- [ ] **Preço Final:** O valor considerado é o preço final (já com descontos).
- [ ] **Escalabilidade:** A ordenação funciona para diferentes volumes de dados.
- [ ] **Interface:** Resposta correta da interface à seleção dos filtros.
- [ ] **Performance:** Ausência de degradação perceptível no sistema.

### 🧪 Testabilidade e Funcionalidades
- [ ] **Busca por Título:** A plataforma lista os livros conforme o título escolhido.
- [ ] **Foco Social:** Listagem de preços obrigatoriamente mais acessíveis que livros originais.
- [ ] **Localização:** Filtro de área e integração com o mapa funcionando corretamente.
- [ ] **Qualidade:** UX devidamente implementada e código documentado.
