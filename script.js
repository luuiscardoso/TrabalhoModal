var abrirModal = document.querySelector("#abrir-modal")
var fecharModal = document.querySelector("#fechar-modal")
var fade = document.querySelector("#fade")
var modal = document.querySelector("#modal")
var cadastrar = document.querySelector("#cadastrar")
var eventos = [abrirModal,fade]


const toogleModal = ()=>{
    modal.classList.toggle('hide')
    fade.classList.toggle('hide')
}


eventos.map((el)=>{
    el.addEventListener("click", () => toogleModal())
})

cadastrar.addEventListener("click", ()=>{
    alert("Cadastrado com sucesso!")
    toogleModal()
})

setTimeout(toogleModal, 5000)
