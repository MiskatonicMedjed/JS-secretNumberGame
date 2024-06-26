let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto;
let tentativas;

novoJogo();

function novoJogo(){
    limparCampo();
    numeroSecreto = gerarNumeroAleatorio();
    console.log ('O número secreto é: ', numeroSecreto);
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e 10`);
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random()*numeroLimite+1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
    limparCampo();
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1','Parabéns!');
        let palavraTentativa = tentativas > 1 ? `${tentativas} tentativas` : 'uma tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${palavraTentativa}!`;
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto) {
        exibirTextoNaTela('p','O número secreto é menor que ' + chute);
    } else {
        exibirTextoNaTela('p','O número secreto é maior que ' + chute);
    }
    tentativas++;
}
}

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}