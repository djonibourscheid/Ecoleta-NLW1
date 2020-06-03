// pegando os elementos
const buttonSearch = document.querySelector("#page-home main a")
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .header a")

// Adicionando a vizibilidade do modal
buttonSearch.addEventListener("click", () => {
    modal.classList.remove("hide")
})

// Removendo a vizibilidade do modal
close.addEventListener("click", () => {
    modal.classList.add("hide")
})