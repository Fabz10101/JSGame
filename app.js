//let titulo = document.querySelector("h1");
//titulo.innerHTML = "Jogo do Número Secreto"

//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = "Escolha um número de 1 a 10"
/*let numeroSecreto = numeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function mensagemInicial(){
    exibirTextoNaTela("h1", "Jogo do Número Secreto");
    exibirTextoNaTela("p", "Escolha um número de 1 a 10");
}
mensagemInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;

    if(chute == numeroSecreto){
        exibirTextoNaTela("h1","Acertou");
        let palavraTentativa = tentativas > 1 ? "Tentativas" : "Tentativa";
        exibirTextoNaTela("p",`Voce acertou o Numero Secreto com ${tentativas} ${palavraTentativa}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela("p",`O numero Secreto é menor ${chute}`);
        }else{
            exibirTextoNaTela("p",`O numero Secreto é maior ${chute}`);
        }
            tentativas++;
            limparCampo();
    }
}

function numeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo(){
    numeroSecreto = numeroAleatorio();
    limparCampo();
    mensagemInicial();
    tentativas = 1;
    document.getElementById("reiniciar").setAttribute("disabled",true);
}
*/
