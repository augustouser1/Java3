const listElement = document.querySelector("#app ul")
const inputElement = document.querySelector("#app input")
const buttonElement = document.querySelector("#app button")

const tarefas = JSON.parse(localStorage.getItem("list")) || []
function rendertarefas() {
    listElement.innerHTML = ""
    for (const iterator of tarefas) {

        const tarefasElement = document.createElement("li")
        const tarefasText = document.createTextNode(iterator)

        const linkElement = document.createElement("a")
        linkElement.setAttribute("href", "#")

        const pos = tarefas.indexOf(iterator)
        linkElement.setAttribute("onclick", `deletetarefas(${pos})`)

        const linkText = document.createTextNode("Excluir")
        linkElement.appendChild(linkText)

        tarefasElement.appendChild(tarefasText)
        tarefasElement.appendChild(linkElement)
        listElement.appendChild(tarefasElement)

    }
}

rendertarefas()

function addtarefas(){
    const tarefasText = inputElement.value
    tarefas.push(tarefasText)
    inputElement.value = ""
    rendertarefas()
    saveTorage ()
}
buttonElement.onclick = addtarefas 

function deletetarefas(pos){
 tarefas.splice(pos,1)
 rendertarefas ()
}

function saveTorage(){
    localStorage.setItem ("list", JSON.stringify(tarefas))
}