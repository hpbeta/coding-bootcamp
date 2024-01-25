const setaAvancar = document.querySelector(".next");
const setaVoltar = document.getElementById("seta-voltar");
const conteudoParaMostrar = document.querySelector(".containt");
const conteudoParaEsconder = document.querySelector(".containt.esconder");


setaAvancar.addEventListener("click", () => {
    conteudoParaEsconder.classList.remove("esconder")
    conteudoParaMostrar.classList.add("esconder")
})

setaVoltar.addEventListener("click", () => {
    conteudoParaEsconder.classList.add("esconder")
    conteudoParaMostrar.classList.remove("esconder")
})






