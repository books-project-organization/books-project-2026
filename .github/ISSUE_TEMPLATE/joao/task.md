<h1>Task: Implementar ordenação de livros por menor preço</h1>

<h2>User story relacionada:</h2>
<strong>User story 6</strong>
<p>Como estudante do ensino médio <br>
Quero encontrar livros escolares de forma mais barata e acessível <br>
Para conseguir os materiais necessários para meus estudos. <br>
</p>
<hr>

<h2>Objetivo</h2>

Implementar a funcionalidade de ordenação de livros pelo menor preço, garantindo que estudantes consigam visualizar primeiro as opções mais acessíveis.
<hr>
<h2>Descrição</h2>

Desenvolver a lógica de ordenação por preço na listagem de livros escolares, considerando o preço final (incluindo descontos). A funcionalidade deve ser integrada tanto no backend (consulta e ordenação) quanto no frontend (interface de seleção e exibição dos resultados).
<hr>
<h2>Subtarefas</h2>
<ul>
  <li>Criar/ajustar endpoint de busca com parâmetro de ordenação (price_asc)</li>
  <li> Garantir que o backend utilize o preço com desconto na ordenação</li>
  <li>Ajustar query no banco de dados com ORDER BY</li> 
  <li>Implementar opção de ordenação no frontend (dropdown ou botão)</li> 
  <li>Atualizar a renderização da lista após seleção do filtro</li> 
  <li>Criar testes unitários para validação da ordenação</li> 
  <li>Criar teste de integração para fluxo completo de busca + ordenação</li> 
</ul>
 
 <hr>
<h2>Critérios de Aceitação</h2>
<ul> 
  <li>Ao selecionar “menor preço”, os livros são exibidos em ordem crescente</li>
  <li> O preço considerado é o valor final (com desconto, se houver)</li>
  <li>A ordenação funciona corretamente para diferentes volumes de dados</li>
  <li>A interface responde corretamente à seleção do filtro</li>
  <li> Não há degradação perceptível de performance</li>
<ul>
