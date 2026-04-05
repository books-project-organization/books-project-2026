# 🐛 BUG09 - Filtro de categoria "Livros Escolares" não retorna resultados válidos

## 📝 Descrição do Problema

Ao tentar filtrar pontos de coleta pela categoria específica de "Livros Escolares", o sistema exibe uma mensagem de "Nenhum local encontrado", mesmo havendo instituições cadastradas que aceitam essa categoria. Isso impede que a universitária localize pontos de descarte ou troca para seus livros parados.

------------------------------------------------------------------------

## 🔁 Passos para Reproduzir

1. Acessar a página de "Buscar Pontos de Doação".
2. No campo de filtros, selecionar a categoria "Livros Escolares".
3. Clicar no botão "Filtrar" ou "Buscar".
4. Observar que a lista de resultados permanece vazia.

------------------------------------------------------------------------

## ✅ Resultado Esperado

O sistema deve filtrar e exibir todos os pontos de coleta, ONGs ou sebos parceiros que aceitam especificamente a categoria "Livros Escolares".

------------------------------------------------------------------------

## ❌ Resultado Atual

O sistema retorna uma lista vazia ao aplicar o filtro "Livros Escolares", mesmo quando existem locais cadastrados que atendem a esse critério.

------------------------------------------------------------------------

## ⚠️ Impacto

- Alta: Impede a conclusão da jornada de doação/troca pela usuária  
- Experiência do Usuário: Reduz a confiança na plataforma e compromete a usabilidade da busca  

------------------------------------------------------------------------

## 🛠️ Critérios de Correção

- [ ] Bug reproduzido pela equipe  
- [ ] Correção implementada (verificação da query no banco de dados)  
- [ ] Testes realizados  
- [ ] Teste de regressão executado  
- [ ] Bug validado após correção  

------------------------------------------------------------------------

## 💻 Informações do Ambiente

- Sistema: Web  
- Navegador: Google Chrome (Versão 122.0.x)  
- Versão: v1.0.4-staging  
- Data do teste: 23/03/2026  

------------------------------------------------------------------------

## 🔗 Relacionamentos

Epic: E01 - Localização e acesso a pontos de circulação de livros  
User Story relacionada: US09 - Universitária busca locais para doação de livros escolares  

------------------------------------------------------------------------

## 📌 Campos recomendados no Board
(opcional)
