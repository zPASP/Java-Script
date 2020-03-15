var listElement = document.querySelector("#app ul")
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button');

//inicializando o todo com os valores salvo no LocalStorage
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

/* inicializando o todo com valores 
var todos = [
    'fazer cafe',
    'praticar codigos',
    'estudar banco de dados'
];
*/

function renderTodos () {
    listElement.innerHTML = '';
    for (todo of todos) { // cria alista de todos
        var todoElement = document.createElement('li')
        var todoText = document.createTextNode(todo)

        //parte do botão excluir
        var linkEement = document.createElement('a');
        var linkText = document.createTextNode(' Excluir');
        linkEement.appendChild (linkText);
        linkEement.setAttribute ('href', '#');

        var posicao = todos.indexOf(todo);
        linkEement.setAttribute ('onclick', 'deleteTodo('+ posicao +')'); //co clicar em excluir chama a função


        todoElement.appendChild(todoText);
        todoElement.appendChild(linkEement);
        listElement.appendChild(todoElement);

        
    }
}

renderTodos();

function addTodo () {
    todos.push(inputElement.value);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo (pos) {
    todos.splice(pos , 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage () {
    localStorage.setItem ('list_todos', JSON.stringify(todos));
}