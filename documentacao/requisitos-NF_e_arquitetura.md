# Requisitos Não Funcionais (NFR) e Arquitetura - Projeto LOCUS

## 1️⃣ Requisitos Não Funcionais (NFR)
*   **NFR01 - Segurança:** Implementação de Verificação em Duas Etapas (2FA) para proteção de acesso (Métrica: 100% dos usuários logados).
*   **NFR02 - Desempenho:** O Filtro de Raio de Distância Dinâmico deve processar a busca em menos de 1 segundo (Métrica: Latência de resposta).
*   **NFR03 - Disponibilidade:** O sistema deve manter 99,5% de uptime mensal (Métrica: SLA de disponibilidade).
*   **NFR04 - Usabilidade:** Interface responsiva focada em Mobile-First para garantir acessibilidade em dispositivos diversos (Métrica: Score >80 no Lighthouse).

## 2️⃣ Justificativa Técnica
*   **Público-Alvo:** Como atendemos estudantes e pequenos sebos, a **Usabilidade** e o **Desempenho** são vitais para garantir que a troca de livros ocorra de forma rápida e inclusiva.
*   **Segurança (PROB01):** A proteção de dados sensíveis e localização via 2FA gera a confiança necessária para a economia circular do livro.

## 3️⃣ Impacto Arquitetural
*   **Módulo de Segurança:** Inclusão de suporte a tokens e integração de APIs de autenticação para o fluxo de 2FA.
*   **Consultas Espaciais (PROB02):** Uso de indexação geoespacial no banco de dados para otimizar as buscas por proximidade sem sobrecarregar o servidor.
*   **Infraestrutura:** Hospedagem em nuvem (Cloud) para suportar picos de acesso e garantir a escalabilidade vertical.

## 4️⃣ Estratégias de Mitigação
*   **Board e Rastreabilidade:** Uso de etiquetas (**ISSUE, Code, User Story**) para monitorar o ciclo de vida dos requisitos técnicos.
*   **DoD (Definition of Done):** Critérios rigorosos de aceitação que incluem validação de performance antes da entrega.
*   **Pair Programming e Retrospectiva:** Uso de programação em par (conforme nosso Plano de Ação) e análise de lições aprendidas em sprints anteriores para evitar regressão de bugs (ex: BUG09, BUG06).
