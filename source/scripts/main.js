document.addEventListener("DOMContentLoaded", function() {
    const diarioTexto = document.getElementById("diario-texto");
    console.log("Elemento diário encontrado:", diarioTexto); 

    document.getElementById("botao").addEventListener("click", function() {
    
        const estilo = diarioTexto.style.display;

        console.log("Estilo atual do diário:", estilo); 

        if (estilo === "none" || estilo === "") {
            diarioTexto.style.display = "block";
            console.log("Diário exibido!"); 
        } else {
            diarioTexto.style.display = "none";
            console.log("Diário oculto!"); 
        }
    });

    document.getElementById("contato-form").addEventListener("submit", function(event) {
        event.preventDefault();
        document.getElementById("confirmacao").style.display = "block";
    });
});
