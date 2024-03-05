// função para o texto do placeholder sumir quando o usuário clicar.
document.getElementById('campoDeTexto').addEventListener('focus', function () {
    this.style.outline = 'none';
    this.placeholder = '';
});

// iniciando a criptografia 
const textoDigitado = document.querySelector("#campoDeTexto");
const textoCodificado = document.querySelector(".container-section-2");


function criptografar() {
    let texto = textoDigitado.value;
    let resultado = texto.replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

        textoCodificado.textContent = resultado;
        adicionarBotaoCopiar();
        
}

function descriptografar() {
    let texto = textoDigitado.value;
    let resultadoTraduzido = texto.replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

        textoCodificado.textContent = resultadoTraduzido;
        adicionarBotaoCopiar();
        
}

function adicionarBotaoCopiar() {
    if (!document.getElementById('copiarTexto')) {
        const botaoCopiar = document.createElement('button');
        botaoCopiar.textContent = 'Copiar';
        botaoCopiar.setAttribute('id', 'copiarTexto');
        botaoCopiar.setAttribute('onclick', 'copiar()');
        textoCodificado.appendChild(botaoCopiar);
    }
}


function copiar() {
    
    const textoCriptografado = textoCodificado.innerText.trim();
    const temp = document.createElement('textarea');
    temp.value = textoCriptografado;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand('copy');
    document.body.removeChild(temp);
    alert('Texto Copiado');
}