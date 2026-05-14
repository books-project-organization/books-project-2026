# 📚 Backlog de Histórias de Usuário (Padrão INVEST)
Este backlog foi refinado para seguir os critérios INVEST, utilizando a abordagem BDD (Behavior-Driven Development) 
com a estrutura Dado/Quando/Então nos critérios de aceitação para guiar o desenvolvimento e os testes. 
A priorização foi definida através da metodologia MoSCoW.
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

**✅ Critérios de Aceitação (BDD)**

**Cenário 1: Identificação visual do tipo de oferta**
- [ ] **Dado que** eu estou navegando pela lista de obras disponíveis
- [ ] **Quando** eu visualizo um item cadastrado
- [ ] **Então** o sistema deve exibir uma etiqueta clara indicando se a obra é para "Troca" ou "Doação".

**Cenário 2: Visualização de detalhes para itens gratuitos**
- [ ] **Dado que** eu visualizei um item gratuito na plataforma
- [ ] **Quando** eu seleciono essa obra para ver mais detalhes
- [ ] **Então** o sistema deve exibir as informações de contato do anunciante ou o botão de demonstrar interesse.

**Cenário 3: Ocultação automática de ofertas indisponíveis**
- [ ] **Dado que** um item de troca ou doação foi marcado como indisponível
- [ ] **Quando** a lista de ofertas for carregada ou atualizada no sistema
- [ ] **Então** o sistema deve ocultar automaticamente essa oferta para os usuários.

---

## US02 - Filtro para Vestibular e Materiais de Saúde
**👤 Persona**
- **Como:** Estudante que se prepara para o vestibular
- **Quero:** encontrar livros didáticos e materiais de apoio em sebos ou pontos de troca
- **Para:** ter acesso a materiais de estudo atualizados com menor custo.

**⚙️ Detalhes Técnicos**
- **Prioridade:** 🔴 Must Have
- **Complexidade:** 🟠🟠⚪⚪⚪

**✅ Critérios de Aceitação (BDD)**

**Cenário 1: Filtrar busca por categoria específica**
- [ ] **Dado que** eu estou na tela de busca de materiais
- [ ] **Quando** eu seleciono a categoria "Vestibular/Ensino Médio" ou "Saúde" no filtro
- [ ] **Então** o sistema deve atualizar a listagem para exibir apenas os livros pertencentes às categorias selecionadas.

**Cenário 2: Diferenciação visual entre doação e compra**
- [ ] **Dado que** o sistema carregou os resultados da busca por materiais de estudo
- [ ] **Quando** eu visualizo a lista de livros retornados
- [ ] **Então** o sistema deve diferenciar visualmente quais livros estão disponíveis para "Doação" (grátis) e quais estão para "Compra" (baixo custo).

**Cenário 3: Exibição de informações detalhadas do local selecionado**
- [ ] **Dado que** eu estou visualizando os resultados da busca de materiais
- [ ] **Quando** eu seleciono um local físico ou sebo específico da lista
- [ ] **Então** o sistema deve exibir na tela o endereço completo, o horário de funcionamento e as regras estabelecidas para troca ou doação.

**Cenário 4: Busca sem resultados na região do usuário**
- [ ] **Dado que** eu realizei uma busca por materiais de vestibular ou saúde
- [ ] **Quando** não forem encontrados registros cadastrados na minha localização atual
- [ ] **Então** o sistema deve exibir uma mensagem amigável informando a ausência de materiais e sugerir uma opção para ampliar o raio de busca geográfica.

---

## US03 - Cadastro de Sebo
**👤 Persona**
- **Como:** Proprietário de sebo
- **Quero:** cadastrar meu estabelecimento e catálogo de serviços
- **Para:** aumentar a visibilidade digital do meu negócio físico.

**⚙️ Detalhes Técnicos**
- **Prioridade:** 🔴 Must Have
- **Complexidade:** 🟠⚪⚪⚪⚪

**✅ Critérios de Aceitação (BDD)**

**Cenário 1: Preenchimento do formulário de cadastro**
- [ ] **Dado que** eu sou um proprietário de sebo na tela de cadastro do estabelecimento
- [ ] **Quando** eu insiro o nome, endereço, fotos e tipos de serviços do meu negócio
- [ ] **E** confirmo o envio dos dados
- [ ] **Então** o sistema deve salvar as informações preenchidas com sucesso.

**Cenário 2: Exibição pública condicionada à validação**
- [ ] **Dado que** o cadastro do meu estabelecimento foi concluído
- [ ] **Quando** os usuários buscam por sebos cadastrados no sistema
- [ ] **Então** o sistema não deve listar o meu sebo publicamente até que ele seja validado como um parceiro aprovado.

**Cenário 3: Edição de informações do catálogo e serviços**
- [ ] **Dado que** eu sou um proprietário de sebo autenticado na plataforma
- [ ] **Quando** eu altero as informações de catálogo ou os serviços prestados no meu perfil
- [ ] **Então** o sistema deve atualizar as informações do estabelecimento imediatamente.

---

## US04 - Mapeamento de Pontos de Coleta
**👤 Persona**
- **Como:** Professor
- **Quero:** mapear pontos de coleta e troca de livros paradidáticos
- **Para:** recomendar fontes de consulta gratuitas aos alunos.

**⚙️ Detalhes Técnicos**
- **Prioridade:** 🟡 Should Have
- **Complexidade:** 🟠🟠🟠⚪⚪

**✅ Critérios de Aceitação (BDD)**

**Cenário 1: Exibição do mapa com pontos de coleta**
- [ ] **Dado que** eu estou na tela de mapeamento de pontos de coleta
- [ ] **Quando** o mapa é carregado pelo sistema
- [ ] **Então** o sistema deve exibir marcadores visuais que identifiquem os pontos de coleta oficiais cadastrados.

**Cenário 2: Exibição de detalhes do ponto de coleta**
- [ ] **Dado que** eu vejo os marcadores de coleta no mapa
- [ ] **Quando** eu clico em um ponto de coleta específico
- [ ] **Então** o sistema deve abrir um balão ou janela exibindo o endereço completo e os tipos de livros que são aceitos ou que estão disponíveis ali.

**Cenário 3: Compartilhamento de localização do ponto**
- [ ] **Dado que** eu abri os detalhes de um ponto de coleta específico
- [ ] **Quando** eu clico na opção de compartilhamento
- [ ] **Então** o sistema deve gerar um link ou disponibilizar a ação para enviar a localização do ponto a terceiros.

---

## US05 - Disponibilidade Imediata
**👤 Persona**
- **Como:** Membro do clube do livro
- **Quero:** consultar a disponibilidade imediata de títulos específicos
- **Para:** garantir a leitura sincronizada com o grupo.

**⚙️ Detalhes Técnicos**
- **Prioridade:** 🟡 Should Have
- **Complexidade:** 🟠🟠⚪⚪⚪

**✅ Critérios de Aceitação (BDD)**

**Cenário 1: Exibição do status de estoque do livro**
- [ ] **Dado que** eu realizei uma busca por um título de livro específico
- [ ] **Quando** o sistema exibe o card de informações desse livro
- [ ] **Então** o sistema deve mostrar claramente o status como "Em Estoque" ou "Indisponível".

**Cenário 2: Identificação do sebo físico de origem**
- [ ] **Dado que** o livro pesquisado possui o status "Em Estoque"
- [ ] **Quando** eu detalho as informações daquele exemplar
- [ ] **Então** o sistema deve exibir o nome e o endereço do sebo físico onde o livro se encontra armazenado para retirada.

**Cenário 3: Exibição do selo de pronta entrega**
- [ ] **Dado que** eu visualizei a lista de resultados de busca
- [ ] **Quando** um ou mais livros estiverem disponíveis para retirada imediata
- [ ] **Então** o sistema deve aplicar um selo visual de "Pronta Entrega/Retirada" nesses itens.

---

## US06 - Busca por Materiais Escolares e ISBN
**👤 Persona**
- **Como:** Estudante do ensino médio
- **Quero:** encontrar livros escolares por ISBN, título ou série de forma barata
- **Para:** conseguir os materiais necessários para meus estudos com baixo custo.

**⚙️ Detalhes Técnicos**
- **Prioridade:** 🔴 Must Have
- **Complexidade:** 🟠🟠🟠🟠⚪

**✅ Critérios de Aceitação (BDD)**

**Cenário 1: Busca utilizando código ISBN**
- [ ] **Dado que** eu estou na barra de busca do sistema
- [ ] **Quando** eu digito um código ISBN válido de 10 ou 13 dígitos e executo a pesquisa
- [ ] **Then** o sistema deve localizar e exibir o livro escolar correspondente exatamente àquele código.

**Cenário 2: Ordenação por menor preço do material**
- [ ] **Dado que** eu fiz uma busca por título ou série escolar e recebi múltiplos resultados
- [ ] **Quando** eu seleciono o filtro de ordenação por "Menor Preço"
- [ ] **Então** o sistema deve listar os livros reorganizados em ordem crescente considerando o valor final do item.

**Cenário 3: Destaque da origem e condição do livro**
- [ ] **Dado que** os resultados da minha busca foram carregados em tela
- [ ] **Quando** eu visualizo os itens disponíveis
- [ ] **Então** a interface do sistema deve destacar visualmente se a origem daquele livro é "Novo", "Usado", "Promoção" ou de um "Parceiro".

**Cenário 4: Retorno de alternativas com valores competitivos**
- [ ] **Dado que** eu pesquisei por um livro didático específico
- [ ] **Quando** os resultados forem listados na tela
- [ ] **Então** o sistema deve apresentar alternativas cujo valor financeiro seja inferior ou competitivo em relação à média praticada no mercado tradicional.

---

## US07 - Doação em Massa (ONGs)
**👤 Persona**
- **Como:** Membro de uma ONG
- **Quero:** visualizar lotes de livros disponíveis para doação em massa
- **Para:** suprir a demanda de distribuição em projetos sociais.

**⚙️ Detalhes Técnicos**
- **Prioridade:** 🟢 Could Have
- **Complexidade:** 🟠⚪⚪⚪⚪

**✅ Critérios de Aceitação (BDD)**

**Cenário 1: Acesso à seção exclusiva de lotes**
- [ ] **Dado que** eu estou navegando pelo menu principal do sistema
- [ ] **Quando** eu clico na seção destinada a doações em grande escala
- [ ] **Então** o sistema deve exibir uma área dedicada e exclusiva chamada "Lotes de Doação".

**Cenário 2: Informação quantitativa do lote**
- [ ] **Dado que** eu estou visualizando as ofertas ativas na seção de lotes
- [ ] **Quando** eu observo um lote de livros específico
- [ ] **Então** o sistema deve informar claramente o número total de exemplares contidos e disponíveis naquele lote.

**Cenário 3: Manifestação de interesse no lote completo**
- [ ] **Dado que** eu encontrei um lote de livros adequado para a demanda da ONG
- [ ] **Quando** eu decido solicitar os livros
- [ ] **Então** o sistema deve disponibilizar um botão de ação para manifestar interesse no lote de forma integral.

---

## US08 - Localização por Raio de Distância
**👤 Persona**
- **Como:** Mãe
- **Quero:** filtrar estabelecimentos por geolocalização (raio de distância)
- **Para:** identificar locais de troca de livros didáticos próximos à minha residência.

**⚙️ Detalhes Técnicos**
- **Prioridade:** 🔴 Must Have
- **Complexidade:** 🟠🟠🟠🟠⚪

**✅ Critérios de Aceitação (BDD)**

**Cenário 1: Seleção de raios de distância predefinidos**
- [ ] **Dado que** eu estou na barra de filtros geográficos de estabelecimentos
- [ ] **Quando** eu interajo com a opção de distância
- [ ] **Então** o sistema deve disponibilizar opções pré-definidas em quilômetros como 2km, 5km e 10km.

**Cenário 2: Consentimento de uso de localização (LGPD)**
- [ ] **Dado que** é a primeira vez que tento usar a busca por proximidade
- [ ] **Quando** eu ativo o filtro de distância por geolocalização
- [ ] **Então** o sistema deve exibir uma mensagem solicitando meu consentimento explícito para acessar as coordenadas do dispositivo de acordo com a LGPD.

**Cenário 3: Atualização dinâmica ao modificar o raio**
- [ ] **Dado que** eu já dei permissão de localização e estou visualizando resultados próximos
- [ ] **Quando** eu altero a seleção do raio de busca de 2km para 10km
- [ ] **Então** o sistema deve atualizar de forma automática a listagem de estabelecimentos baseando-se no novo raio estabelecido.

---

## US09 - Descarte e Doação Acadêmica
**👤 Persona**
- **Como:** Estudante universitária
- **Quero:** encontrar locais que aceitam doação ou troca de livros usados
- **Para:** dar utilidade aos materiais que não utilizo mais e ajudar outras pessoas.

**⚙️ Detalhes Técnicos**
- **Prioridade:** 🟡 Should Have
- **Complexidade:** 🟠⚪⚪⚪⚪

**✅ Critérios de Aceitação (BDD)**

**Cenário 1: Exibição de informações sobre locais de doação**
- [ ] **Dado que** eu estou pesquisando por opções de doação na plataforma
- [ ] **Quando** os resultados correspondentes aparecem na tela
- [ ] **Então** o sistema deve exibir detalhadamente o Nome, a Localização geográfica e o Tipo de Serviço oferecido pela instituição ou ponto.

**Cenário 2: Identificação da modalidade aceita pelo local**
- [ ] **Dado que** eu localizei pontos de entrega no sistema
- [ ] **Quando** eu leio os cartões de informações desses pontos
- [ ] **Então** o sistema deve indicar de forma nítida se o estabelecimento aceita apenas doações, apenas trocas ou se trabalha com ambas as modalidades.

**Cenário 3: Ausência de preço em livros de doação**
- [ ] **Dado que** um livro foi cadastrado sob a classificação estrita de "Doação"
- [ ] **Quando** esse item é exibido em qualquer tela da plataforma
- [ ] **Então** o sistema não deve permitir a exibição ou a associação de qualquer valor financeiro cobrado sobre ele.

**Cenário 4: Alerta de falta de locais de descarte na região**
- [ ] **Dado que** eu configurei minha busca por pontos de descarte ou doação
- [ ] **Quando** não houver nenhuma entidade cadastrada em um raio próximo à minha localização
- [ ] **Então** o sistema deve emitir um aviso informativo notificando que não há locais de descarte cadastrados nas proximidades.

---

## US10 - Filtros Avançados (Historiador)
**👤 Persona**
- **Como:** Historiador
- **Quero:** utilizar filtros avançados de busca por ano de publicação e estado de conservação
- **Para:** localizar obras raras de circulação limitada.

**⚙️ Detalhes Técnicos**
- **Prioridade:** 🟢 Could Have
- **Complexidade:** 🟠🟠🟠🟠🟠

**✅ Critérios de Aceitação (BDD)**

**Cenário 1: Filtro de ano por décadas ou séculos**
- [ ] **Dado que** eu estou na seção de busca avançada da plataforma
- [ ] **Quando** eu seleciono os parâmetros de cronologia da obra
- [ ] **Então** o sistema deve permitir que eu escolha décadas ou séculos específicos de publicação como critério restritivo.

**Cenário 2: Filtro por categorias de conservação**
- [ ] **Dado que** eu desejo selecionar o estado físico do livro que procuro
- [ ] **Quando** eu abro o menu de estado de conservação
- [ ] **Então** o sistema deve fornecer opções exatas para filtrar por "Excelente", "Bom" ou "Regular".

**Cenário 3: Identificação visual de obras raras**
- [ ] **Dado que** eu executei uma busca que retornou livros antigos ou escassos
- [ ] **Quando** a lista de resultados é montada na interface
- [ ] **Então** o sistema deve aplicar um selo especial de destaque nos cards dessas obras raras.

---

## US11 - Gratuidade para Idosos
**👤 Persona**
- **Como:** Aposentada
- **Quero:** identificar estabelecimentos com programas de gratuidade para idosos
- **Para:** manter o acesso ao estudo com custo zero.

**⚙️ Detalhes Técnicos**
- **Prioridade:** 🟡 Should Have
- **Complexidade:** 🟠⚪⚪⚪⚪

**✅ Critérios de Aceitação (BDD)**

**Cenário 1: Filtragem por programas de benefício sênior**
- [ ] **Dado que** eu estou visualizando os filtros de busca de estabelecimentos
- [ ] **Quando** eu ativo a opção de filtro "Benefício Sênior/Gratuidade"
- [ ] **Então** o sistema deve restringir os resultados exibidos apenas para locais que oferecem esse programa.

**Cenário 2: Detalhamento de regras de gratuidade na descrição**
- [ ] **Dado que** eu selecionei um estabelecimento participante do programa para idosos
- [ ] **Quando** eu visualizo a página de perfil ou os detalhes deste local
- [ ] **Então** a descrição textual deve explicar detalhadamente quais as regras e condições para os idosos usufruírem do benefício.

**Cenário 3: Destaque visual no ícone do estabelecimento**
- [ ] **Dado que** a lista geral de estabelecimentos é exibida na tela
- [ ] **Quando** um determinado local possuir um programa ativo de gratuidade sênior
- [ ] **Então** o ícone desse estabelecimento deve conter um marcador visual diferenciado que destaque essa vantagem.

---

## US12 - Filtro de Preço Máximo
**👤 Persona**
- **Como:** Estudante
- **Quero:** aplicar filtros de faixa de preço máxima nos resultados de busca
- **Para:** que os materiais exibidos caibam no meu orçamento disponível.

**⚙️ Detalhes Técnicos**
- **Prioridade:** 🔴 Must Have
- **Complexidade:** 🟠🟠🟠⚪⚪

**✅ Critérios de Aceitação (BDD)**

**Cenário 1: Entrada manual ou seleção de valor financeiro limite**
- [ ] **Dado que** eu preciso limitar os gastos da minha pesquisa de livros
- [ ] **Quando** eu digito ou escolho um limite de valor máximo no campo de preço em Reais
- [ ] **E** aplico a busca
- [ ] **Então** o sistema deve registrar e processar esse valor como o teto máximo permitido.

**Cenário 2: Restrição de exibição de valores superiores**
- [ ] **Dado que** o teto máximo de valor foi definido no filtro de preço
- [ ] **Quando** os resultados de livros à venda forem processados
- [ ] **Então** o sistema não deve listar nenhum livro que possua preço de venda superior ao valor inserido no filtro.

**Cenário 3: Persistência do filtro entre categorias**
- [ ] **Dado que** eu defini um limite de preço máximo durante uma busca
- [ ] **Quando** eu navego ou mudo para outra categoria de produtos na plataforma
- [ ] **Então** o sistema deve manter o mesmo filtro de preço ativo sem resetar o valor estabelecido.

---

## US13 - Ordenação por Menor Preço
**👤 Persona**
- **Como:** Leitor amador
- **Quero:** ordenar os resultados de busca por "menor preço"
- **Para:** realizar compras comparativas entre diferentes sebos cadastrados.

**⚙️ Detalhes Técnicos**
- **Prioridade:** 🔴 Must Have
- **Complexidade:** 🟠🟠🟠🟠⚪

**✅ Critérios de Aceitação (BDD)**

**Cenário 1: Visibilidade da ferramenta de ordenação**
- [ ] **Dado que** eu digitei um termo de busca e recebi uma listagem de livros
- [ ] **Quando** a página termina de carregar a interface
- [ ] **Então** a opção para ordenar por "Menor Preço" deve estar totalmente visível e acessível no topo da lista.

**Cenário 2: Consideração de valores promocionais na ordenação**
- [ ] **Dado que** existem livros com preços originais altos, mas que possuem descontos ativos
- [ ] **Quando** eu aciono a ordenação por "Menor Preço"
- [ ] **Então** o algoritmo do sistema deve usar o valor promocional final para organizar a exibição da lista.

**Cenário 3: Desempenho da ordenação com grandes volumes de dados**
- [ ] **Dado que** a busca efetuada retornou uma quantidade massiva de registros de livros e sebos
- [ ] **Quando** eu aplico o comando de ordenação por menor preço
- [ ] **Então** o sistema deve reordenar e reexibir a lista corretamente sem travar ou falhar no carregamento.

---

## US14 - Comparação de Preços para Professores
**👤 Persona**
- **Como:** Professor
- **Quero:** encontrar e comparar preços de livros em diferentes sebos
- **Para:** poder indicar opções econômicas aos meus alunos.

**⚙️ Detalhes Técnicos**
- **Prioridade:** 🟡 Should Have
- **Complexidade:** 🟠🟠🟠⚪⚪

**✅ Critérios de Aceitação (BDD)**

**Cenário 1: Exibição comparativa de preços em múltiplos sebos**
- [ ] **Dado que** eu estou visualizando o cadastro de um livro específico adotado nas aulas
- [ ] **Quando** eu abro a seção de ofertas disponíveis para esse título
- [ ] **Então** o sistema deve exibir de forma unificada uma lista mostrando os diferentes preços cobrados por cada um dos sebos cadastrados que possuem o item.

**Cenário 2: Destaque da melhor oferta financeira**
- [ ] **Dado que** o livro pesquisado possui ofertas de venda em mais de um estabelecimento
- [ ] **Quando** a lista comparativa é desenhada em tela
- [ ] **Então** o sistema deve destacar visualmente a opção com menor valor sob um selo de "Melhor Oferta".

**Cenário 3: Exibição de contato e endereço do sebo mais barato**
- [ ] **Dado que** eu identifiquei qual estabelecimento possui a melhor oferta para o livro
- [ ] **Quando** eu clico ou visualizo os dados daquela oferta específica
- [ ] **Então** o sistema deve exibir de imediato o endereço físico completo e as informações de contato daquele sebo.

---

## US15 - Autores Locais e Formatos Físicos
**👤 Persona**
- **Como:** Professor de literatura
- **Quero:** filtrar obras por autores locais e formatos não digitais
- **Para:** localizar poesias regionais preservadas em papel.

**⚙️ Detalhes Técnicos**
- **Prioridade:** 🟢 Could Have
- **Complexidade:** 🟠🟠🟠🟠🟠

**✅ Critérios de Aceitação (BDD)**

**Cenário 1: Aplicação do filtro de autores regionais**
- [ ] **Dado que** eu quero incentivar a literatura local através da busca do sistema
- [ ] **Quando** eu ativo o filtro de busca com o parâmetro "Autor Regional" selecionado
- [ ] **Então** o sistema deve restringir os resultados para exibir apenas obras escritas por autores mapeados na região.

**Cenário 2: Filtro por formatos físicos e exclusão de e-books**
- [ ] **Dado que** eu procuro apenas por livros táteis em papel
- [ ] **Quando** eu seleciono os formatos "Capa Comum" ou "Capa Dura" no filtro de formato
- [ ] **Então** o sistema deve remover totalmente qualquer livro em formato digital (E-book) dos resultados exibidos.

**Cenário 3: Identificação de editora e produções independentes**
- [ ] **Dado que** o resultado da busca por livros físicos regionais foi apresentado na tela
- [ ] **Quando** eu analiso o card ou a página de detalhes de uma obra específica
- [ ] **Então** o sistema deve exibir claramente o nome da editora responsável ou informar se o exemplar trata-se de uma produção independente.
