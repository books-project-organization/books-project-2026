# BUG09 - Filtro de categoria "Livros Escolares" não retorna resultados na busca

## Descrição do Problema

Ao tentar filtrar pontos de coleta pela categoria específica de "Livros Escolares", o sistema exibe uma mensagem de "Nenhum local encontrado", mesmo havendo instituições cadastradas que aceitam esse material. Isso impede que a universitária localize pontos de descarte ou troca para seus livros parados.

------------------------------------------------------------------------

## Passos para Reproduzir

1. Acessar a página de "Buscar Pontos de Doação".
2. No campo de filtros, selecionar a categoria "Livros Escolares".
3. Clicar no botão "Filtrar" ou "Buscar".
4. Observar que a lista de resultados permanece vazia ou exibe erro de busca.

------------------------------------------------------------------------

## Resultado Esperado

O sistema deve filtrar e exibir todos os pontos de coleta, ONGs ou sebos parceiros que aceitam especificamente a categoria "Livros Escolares".

------------------------------------------------------------------------

## Resultado Atual

O sistema não retorna nenhum resultado (lista vazia), mesmo para regiões com alta densidade de pontos de coleta cadastrados.

------------------------------------------------------------------------

## Impacto

- Alta: A usuária principal (universitária) não consegue concluir sua jornada de doação/troca.
- Experiência do Usuário: Gera frustração e a percepção de que o sistema não possui parceiros úteis para o material escolar.

------------------------------------------------------------------------

## Critérios de Correção

-   [ ] Bug reproduzido pela equipe
-   [ ] Correção implementada (verificação da query no banco de dados)
-   [ ] Testes realizados
-   [ ] Teste de regressão executado
-   [ ] Bug validado após correção

------------------------------------------------------------------------

## Informações do Ambiente

- Sistema: Web
- Navegador: Google Chrome (Versão 122.0.x)
- Versão: v1.0.4-staging
- Data do teste: 23/03/2026

------------------------------------------------------------------------

## Relacionamentos

Epic: E05 - Correção de Defeitos
User Story relacionada: US09 - Universitária busca locais para doação de livros escolares.

------------------------------------------------------------------------

## Campos recomendados no Board
(opcional)
