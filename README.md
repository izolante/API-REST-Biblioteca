# API REST - Biblioteca
API Rest para uma biblioteca, projeto para aula de Serviços WEB.

# Estrutura da DB

-> Tabela LIVROS <-  
```ID```  
```Título```  
```Descrição```  
```Autor```  
```Emprestado```  
------------
```ID``` sofre incremento automático para cada inserção,  
```Descrição``` é formada por um varchar(255),  
```Autor``` varchar,  
```Emprestado``` é um boolean, que inicia como false quando não definido no momento da inserção.  

# Métodos, URLs e Ações
![image](https://user-images.githubusercontent.com/91175401/235875530-2ab8ec4e-fff0-4b4f-b312-9c0ee91ca0dd.png)

- ```GET``` /livros  
Recupera todos os livros do banco  

- ```GET``` /livros/:id  
Recupera um livro específico através da ```ID```  

- ```POST``` /livros  
Adiciona um novo livro no banco de dados  

- ```PUT``` /livros/:id  
Recupera um livro pela ```ID``` e atualiza seus campos  

- ```DELETE``` /livros/:id  
Remove um livro passando sua ```ID```  

- ```DELETE``` /livros  
Remove todos os livros do banco de dados  

- ```GET``` /livros/emprestado  
Recupera todos os livros que possuam ```emprestado``` = ```TRUE```  

- ```GET``` /livros?titulo=[palavra]  
Recupera todos os livros que possuam ```[palavra]``` no título  

 - [Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
