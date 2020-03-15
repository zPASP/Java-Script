function checarIdade (idade) {
    return new Promise(function (resolve, reject){ //crio a promise
        setTimeout ( function () {
        if (idade > 17 ){ // faço o teste com o valor
            resolve(); // se retorna verdadeiro ira ser chamada a funcao resolve
        }else {
            reject(); // senao o reject e entra no .catch
        }
    }, 2000)
    })
}

checarIdade (7)
    .then (function (){
        console.log("Maior que 18");
    })
    .catch(function(){
        console.log("Menor que 18");
    })