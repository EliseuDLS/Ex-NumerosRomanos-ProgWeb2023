const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {

    e.preventDefault();

    const numRom = String(frm.inEntrada.value.toUpperCase());
    const valoresRom = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };  

    let resultado = 0;

    for (var i = 0; i < numRom.length; i++) {
        var numRomAtual = valoresRom[numRom[i]];

        if (i + 1 < numRom.length) {
            var proxNumRom = valoresRom[numRom[i + 1]];

            if (proxNumRom > numRomAtual) {
                resultado -= numRomAtual;
                continue;
            }
        }
        
        resultado += numRomAtual;
    }

    resp.innerText = `O valor digitado, convetido para decimal é: ${resultado}`
});