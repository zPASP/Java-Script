var usuarios = JSON.parse(localStorage.getItem('list_users')) || [];

var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
var listElement = document.querySelector("#app ul");
var urlGitHub = 'https://api.github.com/users/';

function renderList () {
    listElement.innerHTML = '';
    for (usuario of usuarios) {
        var lineElement = document.createElement('li');
        var linkElement = document.createElement('a');
        var textElement = document.createTextNode(usuario);
        linkElement.setAttribute('href', usuario)

        linkElement.appendChild(textElement);
        listElement.appendChild(linkElement);        

        listElement.appendChild(lineElement);
        saveToStorage();
    }
}

function loadList () {
    renderList();
    var lineElement = document.createElement('li');
    var textLoad = document.createTextNode('CARREGANDO...')

    lineElement.appendChild(textLoad);
    listElement.appendChild(lineElement);
}

function addUser () {
    var nameUser = inputElement.value
    inputElement.value = '';
    loadList();
    
    axios.get(('https://api.github.com/users/'+nameUser))
        .then (function(response){
            var repos_url = response.data.repos_url;
            console.log(response)
            usuarios.push(repos_url)
            console.log('existe')
            renderList();
            saveToStorage();
        })
        .catch(function(error){
            alert('Usuario Digitado é invalido')
            console.log('nao existe')
        });

}

buttonElement.onclick = addUser;


renderList();

function saveToStorage () {
    localStorage.setItem('list_users',JSON.stringify(usuarios));
}