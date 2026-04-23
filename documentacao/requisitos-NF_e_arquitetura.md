# 🪧Requisitos Não Funcionais (NFR) e Arquitetura

Este documento consolida as decisões técnicas e os requisitos de qualidade que sustentam a plataforma LOCUS, garantindo sua eficiência, segurança e viabilidade técnica para estudantes e sebos parceiros.

> Status: Consolidado conforme Sprint Board atualizado.

---

## 1️⃣ Requisitos Não Funcionais (NFR)

- [ ] **RNF01 – Segurança (PROB01):** O sistema deve implementar autenticação de dois fatores (2FA) via bibliotecas de TOTP para proteção contra acessos não autorizados e ataques de força bruta (Prioridade Alta).
- [ ] **RNF02 – Desempenho e Eficiência (PROB02):** O cálculo de distância para o filtro dinâmico de sebos deve processar coordenadas de geolocalização (latitude e longitude) com tempo de resposta otimizado para o usuário.
- [ ] **RNF14-01 – Usabilidade (PROB03):** O botão de compartilhamento de recomendações na jornada do professor deve estar disponível na tela de resultados com um fluxo de, no máximo, 2 cliques.
- [ ] **RNF14-02 – Portabilidade (PROB03):** Os links de recomendação gerados devem ser 100% compatíveis com navegadores mobile (Android/iOS) para facilitar o acesso via WhatsApp ou e-mail.

---

## 2️⃣ Justificativa Técnica

- [ ] **Segurança Crítica (PROB01):** A implementação do 2FA é vital para garantir a base de confiança da aplicação, protegendo dados sensíveis dos usuários antes da entrega final do projeto.
- [ ] **Conveniência e Valor (PROB02):** A evolução da busca por "cidade" para "raio de distância" aumenta drasticamente a utilidade prática do LOCUS, permitindo que o estudante encontre livros por proximidade real via GPS.
- [ ] **Redução de Atrito (PROB03):** O compartilhamento ágil garante que os alunos recebam informações padronizadas e atualizadas, fortalecendo o ecossistema de economia circular entre professores e sebos.

---

## 3️⃣ Impacto Arquitetural

- [ ] **Revisão de Banco de Dados e Login:** Atualização da estrutura da tabela de usuários para suportar o fluxo de verificação de segurança e revisão das interfaces de login para comportar a nova camada de autenticação.
- [ ] **Engine de Geolocalização:** Integração com APIs de geolocalização do dispositivo e implementação de lógica de busca baseada em cálculos espaciais no back-end para suportar o filtro de raio dinâmico.
- [ ] **Visualização Pública e Privacidade:** Criação de uma rota de visualização pública que permita o acesso às listas de recomendação sem obrigatoriedade de login imediato, preservando a privacidade dos dados pessoais do professor.

---

## 4️⃣ Estratégias de Mitigação

- [ ] **Gestão via Kanban e Rastreabilidade:** Monitoramento contínuo das tarefas técnicas através do uso de etiquetas (**ISSUE, Code, User Story**), garantindo que cada NFR tenha um progresso rastreável.
- [ ] **Ciclo de Melhoria Contínua (Retrospectiva):** Aplicação de **Pair Programming** em tarefas de alta complexidade (como o filtro geográfico) e uso de revisões cruzadas para evitar falhas de lógica.
- [ ] **Definição de Pronto (DoD):** Nenhuma mudança técnica é movida para "DONE" sem a validação de que os requisitos não funcionais de performance, segurança e portabilidade foram atendidos.
- [ ] **Monitoramento de Qualidade:** Acompanhamento rigoroso de bugs (ex: BUG09, BUG06) para garantir que novos incrementos de arquitetura não causem regressão no sistema.
