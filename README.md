# CRUD-AdmSystem
#### Administrative table usando sistema CRUD.

#### CREATE | READ | UPDATE | DELETE | SEARCH


Link to: https://thiagodomingoss.github.io/CRUD-AdmSystem/


          CREATE

![createUser](https://user-images.githubusercontent.com/99504975/174459395-f88e7c66-69d9-4b1b-81ae-c469e3726ba2.gif)


<p>Ao clicar no botão "Add New User", o BOOTSTRAP trata de abrir o modal onde serão digitadas as informações.</p>
	 
  ![03-saveNewItem](https://user-images.githubusercontent.com/99504975/174459129-d279ee0b-1b71-47fd-a16f-744ee95911dd.png)
  
<p>Após preencher os campos, clicando em "Save", é chamada a função 'saveUser'.</p>
	 
  ![04-saveNewUser](https://user-images.githubusercontent.com/99504975/174459156-e9c6ced0-f256-4cc9-b908-18af0994faf1.png)

<p>Que começa com uma checagem de campos</p>
	 
  ![05-isValidFields](https://user-images.githubusercontent.com/99504975/174459157-27175a43-ca60-477c-871d-9bac19bd5384.png)

<p>Após isso, a const user recebe um objeto que contém chaves que receberão os valores dos campos do modal.</p>
	 
  ![06-constUser](https://user-images.githubusercontent.com/99504975/174459160-e25227fb-95dc-4e0d-8d01-f232261d5d01.png)

<p>Recebido os valores, uma const 'index' recebe o valor de um data attribute que está no html do primeiro campo do modal, fazendo uma filtragem: se o data attribute tem o valor 'new' será adicionado como novo usuário, caso contrário, será executada a função "updateUser" para editar o usuário.</p>
<p>Se o index é 'new', então vamos para a função "createUser" que recebe user (const que recebe o objeto antes mencionada) como parâmetro.</p>
	 
  ![08-ifNewUser](https://user-images.githubusercontent.com/99504975/174459163-68bd3850-e3b4-4242-b6cd-ef6f09a28620.png)

<p>Esta função, requisita os objetos do localstorage e armazena numa const, depois faz um push do user, passado como parâmetro, para a const e manda para o localstorage com o setlocalstorage.</p>
	
  ![09-createUser](https://user-images.githubusercontent.com/99504975/174459164-c1662d84-7c28-4330-8c41-c7ba0ccfefa1.png)

<p>Depois de criado o usuário, é chamada a função "updateTable".</p>
	
  ![10-updateTable](https://user-images.githubusercontent.com/99504975/174459168-9c310e6b-d811-4bf9-838e-d05e122e4c6c.png)

<p>Que inicia chamando a função "clearTable". Onde as strings da tabela que estão na tela são armazenadas em uma const, fazendo uma iteração com forEach removendo todas as linhas com o método removeChild.</p>

  ![11-clearTable](https://user-images.githubusercontent.com/99504975/174459170-29c7cf88-0823-41da-871c-0794fc272353.png)

<p>Após isso, armazena a função "readUser" numa const, que nada mais faz do que ler o localstorage, e faz uma iteração com forEach mandando cada item para a função createRow</p>

          READ

  ![13-createRow](https://user-images.githubusercontent.com/99504975/174459213-c170bc97-2e44-465a-b19b-689ef7521c90.png)

<p>Essa função recebe Dois parâmetros, o user e o index, que nada mais são do que o item e sua posição no array recebido do localstorage.</p>
<p>Com isso, primeiro é usado um createElement para criar uma 'tr' que vai armazenar as 'td' com as informações que foram recebidas pela const "user" e enviadas para o localstorage, e vai formar a estrutura que você vê no código, passando isso para o HTML da const newRow e por fim usar o método appendChild para colocar o elemento 'tr' da newRow na table.</p>

          UPDATE

![EditUser](https://user-images.githubusercontent.com/99504975/174459414-6e8aea4a-ccc8-44e9-9311-08b6958fb663.gif)


![14-updateUser](https://user-images.githubusercontent.com/99504975/174459229-e654d20d-efc6-435d-82d3-73b9b2583f3c.png)

<p>Se na condicional passada na "saveUser" o valor do dataAttribute não for 'new', vamos para o "updateUser". Recebendo o index e o user como parâmetros, a função faz uma leitura do localstorage e armazena numa const, acessa essa const passando o index para acessar o index do item desejado para ser alterado(o item clicado) e atribuindo o user que recebe o objeto com os valores do campo do modal. Por fim manda para o localstorage com o setLocalStorage.</p>
	
![15-updateUserhere](https://user-images.githubusercontent.com/99504975/174459233-18a2b404-64da-4d9f-8aa6-4e54ea64c597.png)

          DELETE

![deleteUser](https://user-images.githubusercontent.com/99504975/174459427-152121cb-2f2c-4115-a85a-791e340b3d14.gif)


<p>Aqui o delete nada mais faz do que lê o localstorage passando o index do item como parâmetro para acessar o item desejado(clicado) e usa-se o confirm que retorna um boleano. Se o bolean retorna true chama-se a função deletUser passando o index como parâmetro</p>
	
  ![20-deleteUser](https://user-images.githubusercontent.com/99504975/174459248-1e570818-ac90-44fd-bdd6-2cd210ce8e92.png)

<p>Essa função lê o localstorage e armazena o valores numa const, aplica o método splice que recebe o indice no item no seu primeiro parâmetro e o valor 1 no seu segundo parâmetro, seu primeiro parâmetroindica a posição do item a ser acessado e seu segundo parâmetro indica a quantidade de itens a ser deletado após isso envia para o localstorage os novos valores sem aquele que foi acessado.</p>

          SEARCH
 
![searchUser](https://user-images.githubusercontent.com/99504975/174459439-f70447e7-75c7-4b1e-94ed-342b1b3ba656.gif)


![21-onSearch](https://user-images.githubusercontent.com/99504975/174459271-987262f5-5f5d-496f-bde8-264b4f3b85d9.png)

<p>Pegamos o valor elemento input e adicionamos um eveto que sempre que o estado do input é alterado a função searchUser é chamada.</p>
	
  ![22-searchUser](https://user-images.githubusercontent.com/99504975/174459275-4d52c3c5-accc-4dde-be01-657faff94e9b.png)

<p>Essa função recebe um evento(input) como parâmetro, pega o seu valor e aplica o método toLowerCase que coloca todas as letras para minúsculas, para a busca não ser interferida pelo case sensitive, atribui o valor para uma const e chama a função "findUser" pasando a const como parâmetro.</p>
	
  ![23-findUser](https://user-images.githubusercontent.com/99504975/174459278-457d0f8b-a89c-4369-ab3f-60a1ee5662ba.png)

<p>A função começa capturando a tabela mostrada na tela e aceesando o seu elementos filhos com o children, aplica o método Array.from que transforma o HTMLCollection que é retornado pelo tabela.children em um array iterável e armazena numa const(usuário).</p>
<p>A partir daí é feita duas filtragens, a primeiro (nomeUns) recebe os itens que não contêm o valor do input, que foi passado como parâmetro dessa função. A segunda (nomeSea) recebe os itens que contêm o valor do input. Então duas iterações são feitas uma em cada variável, nomeUns, que recebe o itens que não possuem o valor do input ap´lica um método setAttribute que cria uma classe que recebe hidden, que nada mais faz do que aplicar um display: none no item. a segunda faz o oposto usando removeAttribute.</p>

