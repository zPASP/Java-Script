var usuarios = JSON.parse(localStorage.getItem('list_users')) || [];

var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
var listElement = document.querySelector("#app ul");

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

function addUser () {
    var nameUser = inputElement.value
    inputElement.value = '';
    if (!nameUser) return;
    usuarios.push('https://api.github.com/users/'+nameUser+'/repos')
    renderList();
    saveToStorage();

}

buttonElement.onclick = addUser;


renderList();

function saveToStorage () {
    localStorage.setItem('list_users',JSON.stringify(usuarios));
}