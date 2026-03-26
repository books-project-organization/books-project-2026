# 📋 Processos e Qualidade - Projeto Books 2026

Este documento define os critérios obrigatórios para a movimentação de tarefas no board do GitHub, utilizando a User Story 9 como padrão de referência.

---

## 🚦 Definition of Ready (DoR) - "Pronto para Iniciar"
*Para um card sair de "Backlog" e entrar em "Histórias em Foco", ele deve atender a:*

- [ ] **Título Estruturado:** "Como estudante universitária, quero encontrar locais que aceitam doação ou troca de livros usados para dar utilidade aos materiais que não uso mais".
- [ ] **Critérios de Aceitação:**
  - O sistema deve listar locais (sebos/pontos de coleta) com nome, endereço e contato;
  - Deve haver um filtro para identificar locais que aceitam "Livros Universitários";
  - A usuária deve conseguir ver se o local aceita "Troca", "Doação" ou ambos;
- [ ] **Estimativa:** Story Points ou complexidade definida pelo time;
- [ ] **Dependências:** Sem bloqueios técnicos ou externos;
- [ ] **Design:** PROTÓTIPO AINDA PRECISA SER DESENVOLVIDO.

### 🔍 Exemplo Aplicado (User Story 9 - Universitária):
> **Status de Ready:** 
> 1. Definir lista de 5 pontos de coleta iniciais (dados).
> 2. Desenhar o layout da lista/mapa de locais no Figma.
> 3. Criar a lógica de filtro por categoria "Universitário".

---

## ✅ Definition of Done (DoD) - "Pronto para Entrega"
*Critérios para um card ser movido para a coluna "Done".*

- [ ] **Validação Funcional:** A usuária consegue buscar e encontrar os locais de doação conforme os filtros aplicados.
- [ ] **Código:** Pull Request revisado por outro desenvolvedor e mergeado na `main`.
- [ ] **Testes de navegação:** A navegação entre a lista e os detalhes do local está fluida e sem erros (bugs).
- [ ] **Documentação:** README atualizado com a nova funcionalidade, se necessário.
- [ ] **UX/UI:** A interface está idêntica ao protótipo aprovado.

---

## 🛠️ Como aplicar no GitHub Projects
1. **Antes de mover para "Histórias em foco":** Abra o card e verifique se o **DoR** está completo.
2. **Antes de mover para "Done":** Faça o checklist do **DoD**. Se faltar um item, o card deve permanecer em "Em processo".
