document.addEventListener("DOMContentLoaded", function() {
    const diarioTexto = document.getElementById("diario-texto");
    console.log("Elemento diário encontrado:", diarioTexto); 

    document.getElementById("botao").addEventListener("click", function() {

        diarioTexto.classList.toggle("hidden");

        if (!diarioTexto.classList.contains("hidden")) {
            console.log("Diário exibido!");
        } else {
            console.log("Diário oculto!");
        }
    });

    document.getElementById("contato-form").addEventListener("submit", function(event) {
        event.preventDefault();
        document.getElementById("confirmacao").style.display = "block";
    });
});
