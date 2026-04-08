# 📋 Processos e Qualidade - Projeto Books 2026 - Amanda Aziz

Este documento define os critérios obrigatórios para a movimentação de tarefas no board do GitHub, utilizando a User Story 9 como padrão de referência.

---

## 🚦 Definition of Ready (DoR) - "Pronto para Iniciar"
*Para um card sair de "Backlog" e entrar em "Histórias em Foco", ele deve atender a:*

- [ ] **Título Estruturado:** "Como estudante universitária, quero encontrar locais que aceitam doação ou troca de livros usados para dar utilidade aos materiais que não uso mais".
- [ ] **Critérios de Aceitação definidos e testáveis:**
  - O sistema deve listar locais com nome, endereço e contato;
  - Deve permitir filtro por categoria (ex: "Livros Universitários");
  - Deve indicar se o local aceita troca, doação ou ambos;
- [ ] **Estimativa:** Story Points ou complexidade definida pelo time;
- [ ] **Dependências identificadas:** Não existem impedimentos técnicos ou externos que bloqueiem o desenvolvimento
- [ ] **Design UI/UX:** Protótipo de baixa ou alta fidelidade finalizado e disponível para consulta.
- [ ] **Rastreabilidade:** Vinculação confirmada ao Épico de Mapeamento e Localização.

### 🔍 Exemplo Aplicado (User Story 9 - Universitária):
> **Status de Ready:** 
> 1. Definir lista de 5 pontos de coleta iniciais (dados).
> 2. Desenhar o layout da lista/mapa de locais no Figma.
> 3. Criar a lógica de filtro por categoria "Universitário".

---

## ✅ Definition of Done (DoD) - "Pronto para Entrega"
*Critérios para um card ser movido para a coluna "Done".*

- [ ] **Validação Funcional:** A usuária consegue buscar e encontrar os locais de doação conforme os filtros aplicados.
- [ ] **Testes de navegação:** A navegação entre a lista e os detalhes do local está fluida e sem erros (bugs).
- [ ] **Documentação:** README atualizado com a nova funcionalidade, se necessário.
- [ ] **Critérios de Aceite:** Todos os cenários de Gherkin validados e sem falhas.
- [ ] **Código e Integração:** Pull Request aberto, revisado (Peer Review) e mergeado na branch principal sem conflitos
