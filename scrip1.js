const formulario = document.getElementById("formSenha");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const senha = document.getElementById("senha").value;
    const confirmaSenha = document.getElementById("confirmaSenha").value;
    const mensagem = document.getElementById("mensagem");

    if (senha !== confirmaSenha) {
        mensagem.textContent = "As senhas não são iguais!";
        mensagem.style.color = "red";
    } else {
        mensagem.textContent = "Sua senha foi alterada com sucesso!";
        mensagem.style.color = "green";
    }
});