function inserirNome(){
   let nomeUsuario = prompt("Qual o seu nome");
   let elemento = document.querySelector("#nome-usuario");
   console.log(elemento);
   elemento.textContent = nomeUsuario;
}

inserirNome();

let linguagens = ["JavaScript", "Python", "C++"]
const item = document.querySelector("#lista");
item.textContent = linguagens[1];