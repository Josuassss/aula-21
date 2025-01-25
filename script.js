const formulario = document.getElementById("ContactForm");

formulario.addEventListener("submit", manipuladorDeEnvio);

function manipuladorDeEnvio(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const email = document.getElementById("email").value;
    const sexo = document.querySelector("input[name='sexo']:checked").value;
    const mensagem = document.getElementById("mensagem").value;
    
    console.log(nome, sobrenome, email, sexo, mensagem);
}
