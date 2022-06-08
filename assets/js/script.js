// Function de carregamento do load
window.addEventListener("load", () => {
    var fadeContainer = document.querySelector(".loader");
    setTimeout(function() { fadeContainer.style.display = "none"; }, 2000);
});

// Function mostra o menu hamburguer
document.querySelector(".checkbox").addEventListener("click", () => {
    document.querySelector(".main-container").classList.toggle("show-menu")
})


//Validando o formulário