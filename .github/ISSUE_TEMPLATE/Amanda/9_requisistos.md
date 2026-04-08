# 📑 Especificação de Requisitos - Projeto Books 2026

Este documento detalha as funcionalidades (Requisitos Funcionais) e as premissas de qualidade e desempenho (Requisitos Não Funcionais) estabelecidas para o MVP da plataforma.

---

## ⚙️ Requisitos Funcionais (RF)
*Descrevem o que o sistema deve fazer.*


| ID | Nome | Descrição | Origem |
| :--- | :--- | :--- | :--- |
| **RF01** | Busca de Pontos de Coleta | O sistema deve permitir a localização de pontos que aceitem doação ou troca de livros. | US09 |
| **RF02** | Filtragem por Categoria | O sistema deve filtrar resultados por categorias específicas (ex: "Livros Universitários", "Livros Escolares"). | US09 / BUG09 |
| **RF03** | Detalhamento de Serviços | O sistema deve exibir claramente se o local aceita doação, troca ou venda. | US09 / DoR |
| **RF04** | Cadastro de Materiais | O sistema deve permitir que o usuário registre livros (título, matéria, estado) para doação ou troca. | Task T02 |
| **RF05** | Localização Dinâmica | O sistema deve considerar a posição geográfica do usuário para exibir resultados de proximidade. | Regras de Negócio |
| **RF06** | Interação entre Usuários | O sistema deve disponibilizar um botão "Tenho Interesse" para facilitar o contato entre doador e receptor. | Task T02 |

---

## 🚀 Requisitos Não Funcionais (RNF)
*Descrevem como o sistema deve se comportar (Qualidade e Desempenho).*


| ID | Categoria | Descrição | Origem |
| :--- | :--- | :--- | :--- |
| **RNF01** | Usabilidade | A interface de busca deve ser intuitiva, permitindo que a usuária encontre um local com poucos cliques. | DoD / US09 |
| **RNF02** | Estabilidade | O sistema não deve retornar listas vazias quando houver dados correspondentes cadastrados no banco. | BUG09 |
| **RNF03** | Confiabilidade | Todos os itens movidos para DONE devem passar por validação Peer Review e integração contínua sem conflitos. | DoD |
| **RNF04** | Performance | A navegação entre a lista de locais e os detalhes de um ponto específico deve ser fluida e sem latência perceptível. | DoD |
| **RNF05** | Padronização | Toda funcionalidade deve seguir a estrutura de títulos e critérios de aceitação testáveis (Gherkin) definidos no DoR. | DoR |

---

## ⚖️ Regras de Negócio (RN)
*Premissas que restringem a operação do sistema.*

1. **Visibilidade:** Apenas instituições e pontos previamente cadastrados e validados podem ser exibidos nos resultados de busca.
2. **Clareza de Serviço:** É obrigatório que cada ponto informe seu tipo de serviço (troca/doação) para evitar deslocamentos desnecessários do usuário.
3. **Tratamento de Erros:** Caso não existam pontos num raio próximo, o sistema deve exibir uma mensagem amigável de indisponibilidade em vez de um erro técnico.

---
**Responsável pela Documentação:** Amanda Aziz (Scrum Master)
