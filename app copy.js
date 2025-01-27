let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirMensagem()

function exibirMensagem() {
exibirTextoNaTela('h1', 'Adivinhe o Número Secreto!');
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o Número Secreto com ${tentativas} ${palavraTentativa}`;
        document.getElementById('reiniciar').removeAttribute('disabled');
        exibirTextoNaTela('p', mensagemTentativas);
    } else if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O Número Secreto é menor');
        limparCampo();
    } else {
        exibirTextoNaTela('p', 'O Número Secreto é maior');
        limparCampo();    
    }
    tentativas++
    
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagem()
    document.getElementById('reiniciar').setAttribute('disabled', true);
}