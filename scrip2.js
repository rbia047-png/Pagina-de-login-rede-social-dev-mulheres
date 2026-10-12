const formulario = document.getElementById("formcriarconta");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const senha = document.getElementById("senha").value;
    const confirmaSenha = document.getElementById("confirmesenha").value;
    const mensagem = document.getElementById("mensagem");

    if (senha !== confirmaSenha) {
        mensagem.textContent = "As senhas não são iguais!";
        mensagem.style.color = "red";
        return;
    }

    mensagem.textContent = "Conta criada com sucesso, " + nome + "!";
    mensagem.style.color = "green";

    formulario.reset();
});