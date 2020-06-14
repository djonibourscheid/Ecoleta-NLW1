
// POPULANDO OS CAMPOS DE ESTADO E CIDADE
function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")
    
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
    .then( res => res.json() ) // função anônima, escrita de forma curta
    .then( states => {

        // Mostrando os estados na lista
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

        // Mostrando as cidades na lista
        for (const city of cities) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false
    })
}

populateUFs()

// Quando ouver uma mudança nos estados (que já foram carregas pela API e chamados pela linha 44)
// Vai ser chamado a getCities para carregar a lista de cidades do estado selecionado
document
    .querySelector("select[name=uf")
    .addEventListener("change", getCities)




// ITENS DE COLETA
// pegando todos os itens de coleta
const itemsToCollect = document.querySelectorAll(".items-grid li")

// pegando o input escondido para a linha 98
const collectedItems = document.querySelector("input[name=items]")

for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

let selectedItems = []

function handleSelectedItem(event) {
    const itemLi = event.target

    // adicionar ou remover a classe selected
    // add só para adicionar
    // remove só para tirar 
    // toggle para alternar
    itemLi.classList.toggle("selected")

    const itemID = itemLi.dataset.id

    // verificar se existe itens selecionados, se sim
    // pegar os itens selecionados
    const alreadySelected = selectedItems.findIndex( item => {
        const itemFound = item == itemID  // será true ou false
        return itemFound
    })

    // se já estiver selecionado, tirar da seleção
    if (alreadySelected >= 0) {
        const filteredItems = selectedItems.filter( item => {
            const itemIsDifferent = item != itemID // será true ou false
            return itemIsDifferent
        })

        // atualizando a lista de itens selecionados
        selectedItems = filteredItems
    } else { // se não estiver selecionado, adicionar à seleção
        selectedItems.push(itemID) // push coloca o elemento dentro do ID
    }

    // atualizar o campo esacontido com os itens selecionados
    collectedItems.value = selectedItems
}