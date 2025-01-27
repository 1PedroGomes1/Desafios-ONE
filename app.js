let numeroLimite = 15;
let numeroSecreto = gerarNumeroAleatorio();
let chute;
let tentativa = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 2.0; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }}

exibirMensagem()

function exibirMensagem() {
exibirTextoNaTela('h1', 'Adivinhe o Número Secreto!');
exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`);
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * numeroLimite + 1);
}



function verificarChute() {
    chute = document.querySelector('input').value;
    let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', `Você descobriu o Número Secreto com ${tentativa} ${palavraTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O Número Secreto é menor');
        limparCampo()
    } else {
        exibirTextoNaTela('p', 'O Número Secreto é maior');
        limparCampo()
    }
    tentativa++
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    limparCampo();
    tentativa = 1;
    numeroSecreto = gerarNumeroAleatorio();
    exibirMensagem();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
