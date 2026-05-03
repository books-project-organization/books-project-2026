# 📚 Backlog de Histórias de Usuário (Padrão INVEST)
Este backlog foi refinado para seguir os critérios INVEST e inclui a priorização (MoSCoW) e os critérios de aceitação para cada funcionalidade.
> [Pontos feitos baseados no arquivo de estimativas.md](https://github.com/books-project-organization/SPRINT/blob/main/documentacao/estimativas.md)

🔴 Must Have (Tem que ter)
🟡 Should Have (Deveria ter)
🟢 Could Have (Poderia ter)

---

## US01 - Opções de Troca e Doação
**👤 Persona**
- **Como:** Leitora
- **Quero:** visualizar opções de troca e doação de obras
- **Para:** adquirir novos títulos sem custo financeiro.

**⚙️ Detalhes Técnicos**
- **Prioridade:** 🟡 Should Have
- **Complexidade:** 🟠🟠⚪⚪⚪

**✅ Critérios de Aceitação**
- [ ] O sistema deve exibir uma etiqueta visual diferenciando "Troca" de "Doação".
- [ ] O usuário deve conseguir visualizar os detalhes de contato ou o botão de interesse para o item gratuito.
- [ ] Caso o item não esteja mais disponível, o sistema deve ocultar a oferta automaticamente.

---

## US02 - Filtro para Vestibular e Materiais de Saúde
**👤 Persona**
- **Como:** Estudante que se prepara para o vestibular
- **Quero:** encontrar livros didáticos e materiais de apoio em sebos ou pontos de troca
- **Para:** ter acesso a materiais de estudo atualizados com menor custo.

**⚙️ Detalhes Técnicos**
- **Prioridade:** 🔴 Must Have
- **Complexidade:** 🟠🟠⚪⚪⚪

**✅ Critérios de Aceitação**
- [ ] O sistema deve permitir filtrar a busca especificamente pela categoria "Vestibular/Ensino Médio" ou "Saúde".
- [ ] Os resultados devem diferenciar visualmente livros para "Doação" (grátis) de livros para "Compra" (baixo custo).
- [ ] Ao selecionar um local, o sistema deve exibir endereço, horário e regras de troca/doação.
- [ ] O sistema deve exibir uma mensagem amigável caso não existam materiais na região, sugerindo ampliar o raio de busca.

---

## US03 - Cadastro de Sebo
**👤 Persona**
- **Como:** Proprietário de sebo
- **Quero:** cadastrar meu estabelecimento e catálogo de serviços
- **Para:** aumentar a visibilidade digital do meu negócio físico.

**⚙️ Detalhes Técnicos**
- **Prioridade:** 🔴 Must Have
- **Complexidade:** 🟠⚪⚪⚪⚪

**✅ Critérios de Aceitação**
- [ ] O sistema deve oferecer um formulário para nome, endereço, fotos e tipos de serviços.
- [ ] Apenas estabelecimentos parceiros validados podem ser listados publicamente.
- [ ] O proprietário deve poder editar as informações de catálogo e serviços a qualquer momento.

---

## US04 - Mapeamento de Pontos de Coleta
**👤 Persona**
- **Como:** Professor
- **Quero:** mapear pontos de coleta e troca de livros paradidáticos
- **Para:** recomendar fontes de consulta gratuitas aos alunos.

**⚙️ Detalhes Técnicos**
- **Prioridade:** 🟡 Should Have
- **Complexidade:** 🟠🟠🟠⚪⚪

**✅ Critérios de Aceitação**
- [ ] O sistema deve exibir um mapa com ícones identificando pontos de coleta oficiais.
- [ ] Ao clicar no ponto, o sistema deve mostrar o endereço e o tipo de livro aceito/disponível.
- [ ] Deve haver uma opção de compartilhamento da localização do ponto de coleta.

---

## US05 - Disponibilidade Imediata
**👤 Persona**
- **Como:** Membro do clube do livro
- **Quero:** consultar a disponibilidade imediata de títulos específicos
- **Para:** garantir a leitura sincronizada com o grupo.

**⚙️ Detalhes Técnicos**
- **Prioridade:** 🟡 Should Have
- **Complexidade:** 🟠🟠⚪⚪⚪

**✅ Critérios de Aceitação**
- [ ] O card do livro deve exibir o status "Em Estoque" ou "Indisponível".
- [ ] O sistema deve informar em qual sebo físico o livro se encontra para retirada.
- [ ] Deve haver um selo de "Pronta Entrega/Retirada" nos resultados.

---

## US06 - Busca por Materiais Escolares e ISBN
**👤 Persona**
- **Como:** Estudante do ensino médio
- **Quero:** encontrar livros escolares por ISBN, título ou série de forma barata
- **Para:** conseguir os materiais necessários para meus estudos com baixo custo.

**⚙️ Detalhes Técnicos**
- **Prioridade:** 🔴 Must Have
- **Complexidade:** 🟠🟠🟠🟠⚪

**✅ Critérios de Aceitação**
- [ ] O campo de busca deve aceitar códigos ISBN de 10 ou 13 dígitos.
- [ ] Ao selecionar "Menor Preço", os livros devem ser exibidos em ordem crescente de valor final.
- [ ] A interface deve destacar a origem do livro (Novo, Usado, Promoção ou Parceiro).
- [ ] A busca deve retornar alternativas competitivas em relação ao valor de mercado.

---

## US07 - Doação em Massa (ONGs)
**👤 Persona**
- **Como:** Membro de uma ONG
- **Quero:** visualizar lotes de livros disponíveis para doação em massa
- **Para:** suprir a demanda de distribuição em projetos sociais.

**⚙️ Detalhes Técnicos**
- **Prioridade:** 🟢 Could Have
- **Complexidade:** 🟠⚪⚪⚪⚪

**✅ Critérios de Aceitação**
- [ ] Deve haver uma seção específica para "Lotes de Doação".
- [ ] O sistema deve informar a quantidade de exemplares disponíveis no lote.
- [ ] Deve haver um botão para manifestar interesse no lote completo.

---

## US08 - Localização por Raio de Distância
**👤 Persona**
- **Como:** Mãe
- **Quero:** filtrar estabelecimentos por geolocalização (raio de distância)
- **Para:** identificar locais de troca de livros didáticos próximos à minha residência.

**⚙️ Detalhes Técnicos**
- **Prioridade:** 🔴 Must Have
- **Complexidade:** 🟠🟠🟠🟠⚪

**✅ Critérios de Aceitação**
- [ ] O usuário deve poder selecionar raios de distância pré-definidos (Ex: 2km, 5km, 10km).
- [ ] O sistema deve solicitar consentimento explícito para acessar a localização (LGPD).
- [ ] A lista de resultados deve ser atualizada automaticamente ao alterar o raio de busca.

---

## US09 - Descarte e Doação Acadêmica
**👤 Persona**
- **Como:** Estudante universitária
- **Quero:** encontrar locais que aceitam doação ou troca de livros usados
- **Para:** dar utilidade aos materiais que não utilizo mais e ajudar outras pessoas.

**⚙️ Detalhes Técnicos**
- **Prioridade:** 🟡 Should Have
- **Complexidade:** 🟠⚪⚪⚪⚪

**✅ Critérios de Aceitação**
- [ ] Dado que a usuária busca por doação, o sistema deve exibir Nome, Localização e tipo de serviço.
- [ ] O usuário deve conseguir identificar claramente se o local aceita doação, troca ou ambos.
- [ ] Livros classificados como "Doação" não podem ter preço atrelado na plataforma.
- [ ] O sistema deve informar caso não existam locais de descarte cadastrados na proximidade.

---

## US10 - Filtros Avançados (Historiador)
**👤 Persona**
- **Como:** Historiador
- **Quero:** utilizar filtros avançados de busca por ano de publicação e estado de conservação
- **Para:** localizar obras raras de circulação limitada.

**⚙️ Detalhes Técnicos**
- **Prioridade:** 🟢 Could Have
- **Complexidade:** 🟠🟠🟠🟠🟠

**✅ Critérios de Aceitação**
- [ ] O filtro de ano deve permitir a seleção de décadas ou séculos específicos.
- [ ] O sistema deve oferecer filtros de estado de conservação (Excelente, Bom, Regular).
- [ ] Obras raras devem ser identificadas com um selo especial nos resultados.

---

## US11 - Gratuidade para Idosos
**👤 Persona**
- **Como:** Aposentada
- **Quero:** identificar estabelecimentos com programas de gratuidade para idosos
- **Para:** manter o acesso ao estudo com custo zero.

**⚙️ Detalhes Técnicos**
- **Prioridade:** 🟡 Should Have
- **Complexidade:** 🟠⚪⚪⚪⚪

**✅ Critérios de Aceitação**
- [ ] O sistema deve possuir um filtro para "Benefício Senior/Gratuidade".
- [ ] A descrição do estabelecimento deve detalhar as regras para idosos.
- [ ] O ícone do estabelecimento deve destacar se ele possui programa de gratuidade.

---

## US12 - Filtro de Preço Máximo
**👤 Persona**
- **Como:** Estudante
- **Quero:** aplicar filtros de faixa de preço máxima nos resultados de busca
- **Para:** que os materiais exibidos caibam no meu orçamento disponível.

**⚙️ Detalhes Técnicos**
- **Prioridade:** 🔴 Must Have
- **Complexidade:** 🟠🟠🟠⚪⚪

**✅ Critérios de Aceitação**
- [ ] O sistema deve permitir que o usuário digite ou selecione um valor máximo em Reais.
- [ ] Resultados com valores superiores ao filtro não devem ser exibidos.
- [ ] O filtro deve ser persistente durante a navegação entre diferentes categorias.

---

## US13 - Ordenação por Menor Preço
**👤 Persona**
- **Como:** Leitor amador
- **Quero:** ordenar os resultados de busca por "menor preço"
- **Para:** realizar compras comparativas entre diferentes sebos cadastrados.

**⚙️ Detalhes Técnicos**
- **Prioridade:** 🔴 Must Have
- **Complexidade:** 🟠🟠🟠🟠⚪

**✅ Critérios de Aceitação**
- [ ] A opção de ordenação "Menor Preço" deve estar visível no topo da listagem.
- [ ] O sistema deve considerar o preço promocional para a ordenação.
- [ ] A ordenação deve funcionar corretamente mesmo com grandes volumes de dados.

---

## US14 - Comparação de Preços para Professores
**👤 Persona**
- **Como:** Professor
- **Quero:** encontrar e comparar preços de livros em diferentes sebos
- **Para:** poder indicar opções econômicas aos meus alunos.

**⚙️ Detalhes Técnicos**
- **Prioridade:** 🟡 Should Have
- **Complexidade:** 🟠🟠🟠⚪⚪

**✅ Critérios de Aceitação**
- [ ] O sistema deve exibir o preço de um mesmo livro em diferentes sebos cadastrados.
- [ ] O sistema deve destacar visualmente a opção mais barata encontrada ("Melhor Oferta").
- [ ] O usuário deve conseguir visualizar o endereço e contato do sebo que oferece o menor preço.

---

## US15 - Autores Locais e Formatos Físicos
**👤 Persona**
- **Como:** Professor de literatura
- **Quero:** filtrar obras por autores locais e formatos não digitais
- **Para:** localizar poesias regionais preservadas em papel.

**⚙️ Detalhes Técnicos**
- **Prioridade:** 🟢 Could Have
- **Complexidade:** 🟠🟠🟠🟠🟠

**✅ Critérios de Aceitação**
- [ ] O sistema deve possuir um filtro de "Autor Regional".
- [ ] Deve ser possível filtrar apenas por formatos "Capa Comum" ou "Capa Dura" (excluindo E-books).
- [ ] O sistema deve exibir a editora ou se o livro é de produção independente.
