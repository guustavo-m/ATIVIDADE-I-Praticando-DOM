const botao = document.getElementById("botao-toggle")
const info = document.getElementById("info")
const contador = document.getElementById("contador")
let cont = 0

botao.addEventListener("click", () => {
    if (info.classList.contains("oculto")) {
        info.classList.replace("oculto", "aparente")
        botao.textContent = "Esconder informações 🚫"
    } else {
        info.classList.replace("aparente", "oculto")
        botao.textContent = "Mostrar informações 📂"
    }
    cont ++
    contador.textContent = "Aberturas : " + cont
})

