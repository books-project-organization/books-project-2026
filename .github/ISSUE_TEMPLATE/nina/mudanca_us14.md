# [APRIMORAMENTO] Nova Funcionalidade de Compartilhamento de Recomendações (US14)

🚩 **1. Descrição da Mudança**
Foi identificada uma oportunidade de aprimorar a jornada do usuário na US14. Atualmente, o professor consegue comparar os preços e ver o destaque da opção mais barata, mas precisa tirar *prints* ou copiar links manualmente para enviar aos alunos. A mudança introduz a funcionalidade "Gerar Link de Recomendação", que cria uma lista formatada e compartilhável (via WhatsApp ou e-mail) com os livros, os sebos e a opção mais econômica já destacada.

📉 **2. Impacto no Backlog**
* **Adicionado:** Tarefa de front-end para criar o botão "Compartilhar com Alunos" e tarefa de back-end para gerar a visualização pública da comparação.
* **Adiado:** A integração da visualização da localização dos sebos no mapa foi postergada para a próxima *sprint* a fim de priorizar o fluxo de compartilhamento.

⚖️ **3. Decisão de Priorização**
Definida como Prioridade Alta. Seguindo a nossa Matriz de Complexidade, esta tarefa é um Nível 3. Ela não afeta a busca em si, mas agrega um valor imenso à Persona (Professor), fechando o ciclo do seu objetivo principal de forma ágil.

🛠️ **4. Justificativa Técnica**
O objetivo final da Persona não é apenas visualizar os preços na plataforma LOCUS, mas sim fazer a ponte dessas informações até o estudante. Reduzir o atrito no compartilhamento garante que os alunos recebam os links corretos e padronizados, aumentando o tráfego direto na plataforma e fortalecendo a conversão e o ecossistema de economia circular dos sebos parceiros.

---

## ⚙️ Detalhamento de Requisitos Gerados pela Mudança

### Requisitos Funcionais (RF)
| ID | Nome | Descrição | Origem |
|:---|:---|:---|:---|
| RF14-01 | Geração de Link | O sistema deve permitir que o professor gere um link formatado com a lista de livros e preços comparados. | Mudança US14 |
| RF14-02 | Visualização Pública | O sistema deve permitir que o aluno acesse o link de recomendação sem obrigatoriedade de login imediato. | Mudança US14 |
| RF14-03 | Destaque de Economia | O link gerado deve destacar visualmente qual sebo oferece o menor preço para o aluno. | Mudança US14 |

### 🚀 Requisitos Não Funcionais (RNF)
| ID | Categoria | Descrição | Origem |
|:---|:---|:---|:---|
| RNF14-01 | Usabilidade | O botão de compartilhamento deve estar disponível na tela de resultados com um fluxo de no máximo 2 cliques. | Mudança US14 |
| RNF14-02 | Portabilidade | O link gerado deve ser compatível com visualização em navegadores mobile (Android/iOS) para facilitar o compartilhamento. | Mudança US14 |

### ⚖️ Regras de Negócio (RN)
* **Atualização de Preços:** O link de recomendação deve exibir o preço atualizado no momento do acesso do aluno, e não o preço do momento em que o professor gerou o link.
* **Privacidade:** O link de recomendação não deve expor dados pessoais do professor, apenas as informações técnicas dos livros e sebos.
