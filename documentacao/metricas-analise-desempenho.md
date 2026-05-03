# 📊 Relatório de Métricas e Análise de Desempenho

## 1️⃣ Cálculo da Velocity
A Velocity foi calculada somando os Story Points das atividades concluídas, utilizando uma **Matriz de Complexidade (1 a 5)**. Nossa métrica é unificada, integrando User Stories e Tasks técnicas/gestão.

*   **Sprint 1:** **60 pontos**
    *   Composição: 41 pts (15 User Stories) + 19 pts (14 tasks de documentação e planejamento).
*   **Sprint 2:** **27 pontos**
    *   Composição: 9 issues estratégicas (incluindo débitos técnicos da S1 e novas implementações de segurança e geolocalização).
    *   **Critério:** Histórias e tasks contabilizadas apenas após atingirem o *Definition of Done* (DoD).

## 2️⃣ Comparação entre Sprints
*   **Variação:** Houve uma redução na Velocity bruta de 60 para 27 pontos.
*   **Análise:** Essa variação era esperada. A Sprint 1 teve um volume maior de itens (29), porém com foco em documentação e estruturação (itens de menor complexidade individual). A Sprint 2, embora com menos itens (9), concentrou o esforço em funcionalidades de alta complexidade (Níveis 4 e 5), como a implementação de 2FA e filtros dinâmicos.

## 3️⃣ Análise de Desempenho
*   **Complexidade Técnica Acumulada:** O transbordamento da Sprint 1 para a 2 ocorreu devido à subestimação da curva de aprendizado em APIs de geolocalização e segurança (2FA).
*   **Fatores Externos:** O ritmo de desenvolvimento na Sprint 2 coincidiu com períodos de avaliações acadêmicas e entregas de outras disciplinas, o que limitou o *capacity* (capacidade produtiva) do time.
*   **Refinamento do DoD:** O grupo tornou-se mais rigoroso com os critérios de aceite na Sprint 2, o que resultou em mais tempo gasto por tarefa para garantir a qualidade da entrega.

## 4️⃣ Ações de Melhoria
*   **Ajuste de Planejamento:** Para a próxima iteração, o planejamento de carga será baseado na média das velocidades (43,5 pts), evitando o excesso de otimismo visto na Sprint 1.
*   **Decomposição de Tarefas:** Itens que receberam nota 4 ou 5 na Matriz de Complexidade serão obrigatoriamente divididos em sub-tarefas menores para evitar que fiquem travados por muito tempo em "Doing".
*   **Padronização Técnica:** Adotamos um refinamento prévio (Grooming) mais detalhado para que as estimativas da Sprint 3 sejam mais precisas desde o início.
