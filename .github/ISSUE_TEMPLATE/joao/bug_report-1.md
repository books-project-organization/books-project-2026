<h1>Filtro de preço não retorna livros mais baratos corretamente</h1>
<h2>Descrição</h2>
<p>Ao utilizar o filtro de “menor preço” na busca por livros escolares, o sistema não retorna os resultados mais baratos disponíveis. Em alguns casos, livros mais caros aparecem antes dos mais baratos, comprometendo o objetivo da funcionalidade.</p>
<hr>
<h3>User story relacionada</h3>
<p>User Story 6:<br>
Como estudante do ensino médio<br>
Quero encontrar livros escolares de forma mais barata e acessível<br>
Para conseguir os materiais necessários para meus estudos.</p>
<hr>
<h2>Passos para reporduzir:</h2>
<ol>
  <li>Acessar a página de busca de livros</li>
  <li>Pesquisar por “Matemática Ensino Médio”</li>
  <li>Aplicar o filtro “Ordenar por menor preço”</li>
  <li>Observar a lista de resultados</li>
</ol>
<hr>
<h2>Resultados</h2>
<h3>Resultado esperado:</h3>
<p>Os livros devem ser exibidos em ordem crescente de preço, do mais barato para o mais caro.</p>
<h3>Resultado atual:</h3>
<p>Os resultados aparecem fora de ordem: <br>
Livros com preço mais alto aparecem antes dos mais baratos.<br>
Em alguns casos, itens com preço promocional não são considerados no filtro.</p>
<hr>
<h2>Evidências:</h2>
<p>Livro A: R$ 120,00 aparece antes do Livro B: R$ 85,00<br>
Livro com desconto (R$ 70,00) aparece após itens de R$ 100+</p>

<hr>
<h2>Sugestão de correção:</h2>
<ol>
  <li>Garantir que o campo de preço considerado seja o preço final (com desconto)</li>
  <li>Revisar a query de ordenação no backend</li>
  <li>Adicionar testes automatizados para validação da ordenação por preço</li>
</ol>
<hr>





