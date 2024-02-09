
var sectionTexoEncript = document.getElementById("texto-encript-result");
sectionTexoEncript.style.display = 'none';



function mostrarResultado(texto) {

    var sectionImagem = document.getElementById("img-texto");
    var sectionTextoInicial = document.getElementById("texto-inicial");

    sectionTexoEncript.style.display = '';
    sectionImagem.style.display = 'none';
    sectionTextoInicial.style.display = 'none';

    var textareaResultado = document.querySelector('#texto-encript-result');
    textareaResultado.value = texto;


}



function criptografar() {

    var textoEncriptar = document.querySelector("#texto-encript-decript");
    var texto = textoEncriptar.value;
    textoEncriptar.value = "";

    var criptografia = {

        "e": "enter",
        "i": "imes",
        "a": "ai",
        "o": "ober",
        "u": "ufat"
    };

    for (var letra in criptografia) {

        var expressao = new RegExp(letra, "g");
        texto = texto.replace(expressao, criptografia[letra]);
    }

    if (texto) {

        mostrarResultado(texto);
    } else {

        alert("Digite um texto para criptografá-lo!")
    }
}

function decriptografar() {

    var textoEncriptar = document.querySelector("#texto-encript-decript");
    var texto = textoEncriptar.value;
    textoEncriptar.value = "";

    var criptografia = {

        "enter": "e",
        "imes": "i",
        "ai": "a",
        "ober": "o",
        "ufat": "u"
    };

    for (var letra in criptografia) {

        var expressao = new RegExp(letra, "g");
        texto = texto.replace(expressao, criptografia[letra]);
    }

    if (texto) {

        mostrarResultado(texto);
    } else {

        alert("Digite um texto para criptografá-lo!")
    }

    eventClick();
}

function mostrarImagem() {

    var sectionTexoEncript = document.getElementById("texto-encript-result");
    var sectionImagem = document.getElementById("img-texto");
    var sectionTextoInicial = document.getElementById("texto-inicial");

    sectionTexoEncript.style.display = 'none';
    sectionImagem.style.display = '';
    sectionTextoInicial.style.display = '';
}

function copiatTexto() {

    var textareaResultado = document.querySelector('#texto-encript-result');
    var texto = textareaResultado.value;

    if (texto) {

        textareaResultado.select();
        document.execCommand("copy");

        mostrarImagem();

    } else {

        alert("Criptografe um texto para que seja possível copiá-lo!");
    }

}


const card = document.querySelector("#card");

const buttonEncript = document.querySelector("#button-encript");
buttonEncript.addEventListener("click", (e) => {
    card.classList.toggle("flip");
});



const buttonDecript = document.querySelector("#button-decript");
buttonDecript.addEventListener("click", (e) => {
    card.classList.toggle("flip");
});

function eventClick(){

    hj('event', 'clicou_no_decodificar');
    console.log("Chamou a função!");
}