function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")
    
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
    .then( res => res.json() ) // função anônima, escrita de forma curta
    .then( states => {
        for (const state of states) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })
}

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value 

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text 

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    // Para resetar a lista de cidades quando selecionado
    // um novo estado e deixando o campo bloqueado de novo (sera desativado o bloqueio quando a api será chamada novamente)

    citySelect.innerHTML = `<option value>Selecione a cidade</option>`
    citySelect.disabled = true

    fetch(url)
    .then( res => res.json() ) // função anonima, escrita de forma curta
    .then( cities => {

        // colocando as cidades
        for (const city of cities) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false
    })
}

populateUFs()

document
    .querySelector("select[name=uf")
    .addEventListener("change", getCities)
