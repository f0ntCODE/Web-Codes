const audio = document.getElementById('leitura')
const botaoPlayPause = document.getElementById('play-pause')
const botaoAvancar = document.getElementById('proximo')
const botaoVoltar = document.getElementById('anterior')
const capitulo = document.getElementById('capitulo')

let tocando = false

const capituloMax = 10 //max capítulos
let capituloAtual = 1

function tocar(){
    audio.play()
    botaoPlayPause.classList.add('bi-pause-circle')
    botaoPlayPause.classList.remove('bi-play-circle')
    tocando = true
}

function pausar(){
    audio.pause()
    botaoPlayPause.classList.remove('bi-pause-circle')
    botaoPlayPause.classList.add('bi-play-circle')
    tocando = false
}

function tocarPausar(){
    if(tocando === false){
        tocar()
    }
    else{
        pausar()
    }
}

function avancar(){
    if(capituloAtual < capituloMax){
        capituloAtual += 1
    }
    else{
        capituloAtual = 1
    }
    audio.src = 'books/dom-casmurro/' + capituloAtual +'.mp3'
    capitulo.innerText = "Capítulo "+ capituloAtual
    tocar()
    }


function voltar(){
    if(capituloAtual === 1){
        capituloAtual = capituloMax
    }
    else{
        capituloAtual -= 1
    }
    audio.src = 'books/dom-casmurro/' + capituloAtual +'.mp3'
    tocar()
    capitulo.innerText = "Capítulo "+ capituloAtual
}



botaoPlayPause.addEventListener('click', tocarPausar)
botaoAvancar.addEventListener('click', avancar)
botaoVoltar.addEventListener('click', voltar)
audio.addEventListener('ended', avancar)