🐛 BUG10 - Filtro de categoria "Vestibular" oculta livros com múltiplas categorias

📝 Descrição do Problema

Ao utilizar a barra de pesquisa para buscar livros de apoio, a aplicação do filtro "Vestibular" apresenta um comportamento excludente. O sistema oculta livros da listagem se eles possuírem múltiplas categorias cadastradas (ex: "Vestibular" e "Ensino Médio" simultaneamente). O sistema só está retornando livros que possuem exclusivamente a tag "Vestibular", escondendo materiais válidos do estudante.

🔁 Passos para Reproduzir

Fazer login na plataforma com uma conta de estudante.

Acessar a tela principal de Busca.

Pesquisar por um livro que sabidamente tenha múltiplas tags (ex: "Biologia Total", que possui as tags [Ensino Médio, Vestibular]) e confirmar que ele aparece na lista geral.

Clicar no botão de "Filtros Avançados".

Na seção "Categoria", marcar a opção "Vestibular" e clicar em "Filtrar".

Observar que o livro desaparece dos resultados.

✅ Resultado Esperado

O sistema deve filtrar e exibir todos os livros e materiais de apoio que contenham a tag "Vestibular", independentemente de possuírem outras categorias adicionais atreladas a eles (a query deve agir como CONTAINS e não EXACT MATCH).

❌ Resultado Atual

O sistema oculta os itens com múltiplas tags. Se não houver nenhum livro com a tag exclusiva "Vestibular", a busca retorna a mensagem de empty state: "Nenhum material encontrado com esses filtros".

⚠️ Impacto

Alta: Impede que o estudante encontre materiais de estudo relevantes que estão fisicamente disponíveis nos sebos/pontos de troca.

Experiência do Usuário: Causa frustração e passa a falsa impressão de que a plataforma tem um acervo pobre ou vazio para vestibulandos.

🛠️ Critérios de Correção

[ ] Bug reproduzido pela equipe

[ ] Correção implementada (ajuste da query de filtro no banco de dados/backend)

[ ] Testes realizados (filtrando livros de categoria única e de múltiplas categorias)

[ ] Teste de regressão executado

[ ] Bug validado após correção

💻 Informações do Ambiente

Sistema: Web e App

Navegador: Google Chrome (Versão 122.0.x) / Windows 11

Versão: v1.2.0

Data do teste: 06/04/2026

🔗 Relacionamentos

Epic: E03 – Busca, filtros e descoberta de livros

User Story relacionada: US[Inserir Número] - Como Estudante que se prepara para o vestibular, quero encontrar livros didáticos filtrados para ter acesso a materiais atualizados.

📌 Campos recomendados no Board

Prioridade: Alta

Severidade: Média

Anexos: screenshot_busca_com_filtro.png, payload_resposta_api.json
